/** Named beds. A choir-Hz table is not a room. */
const ROOMS = {
  enter: { figure: 'drone', pad: ['triangle', 'sine'], padHz: [49, 98], filt: 190, filtSpan: 180, gain: 0.04, gainSpan: 0.022, choir: 0.018, arp: 0 },
  queen: { figure: 'silk', pad: ['sine', 'triangle'], padHz: [65.41, 130.81], filt: 300, filtSpan: 260, gain: 0.038, gainSpan: 0.03, choir: 0.042, arp: 0.024 },
  warden: { figure: 'aisle', pad: ['triangle', 'square'], padHz: [58, 116], filt: 240, filtSpan: 160, gain: 0.04, gainSpan: 0.02, choir: 0.03, arp: 0.02 },
  coil: { figure: 'ember', pad: ['sawtooth', 'triangle'], padHz: [43.65, 87], filt: 360, filtSpan: 320, gain: 0.036, gainSpan: 0.032, choir: 0.036, arp: 0.022 },
  empress: { figure: 'bloom', pad: ['sine', 'triangle'], padHz: [69, 138], filt: 340, filtSpan: 280, gain: 0.038, gainSpan: 0.028, choir: 0.048, arp: 0.028 },
  heart: { figure: 'pulse', pad: ['sine', 'sine'], padHz: [36.5, 73], filt: 120, filtSpan: 70, gain: 0.05, gainSpan: 0.018, choir: 0.05, arp: 0 },
  finale: { figure: 'choir', pad: ['triangle', 'sine'], padHz: [41.25, 82.5], filt: 380, filtSpan: 360, gain: 0.042, gainSpan: 0.034, choir: 0.055, arp: 0.038 },
  hangar: { figure: 'yard', pad: ['sine', 'triangle'], padHz: [46, 92], filt: 150, filtSpan: 40, gain: 0.032, gainSpan: 0.01, choir: 0.012, arp: 0 },
};

export class AudioBus {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.music = null;
    this.sfx = null;
    this.duck = null;
    this.engine = null;
    this.boost = 0;
    this.enabled = false;
    this.intensity = 0.2;
    this._paused = false;
    this._nextBeat = 0;
    this._step = 0;
    this._noise = null;
    this._whooshOn = false;
    this._chapter = 'default';
    this._arpGain = null;
    this._choirGain = null;
  }

  async resume() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.2;
      this.duck = this.ctx.createGain();
      this.duck.gain.value = 1;
      this.music = this.ctx.createGain();
      this.music.gain.value = 0.55;
      this.sfx = this.ctx.createGain();
      this.sfx.gain.value = 1;
      this.music.connect(this.duck);
      this.duck.connect(this.master);
      this.sfx.connect(this.master);
      this.master.connect(this.ctx.destination);
      this._noise = this._makeNoise(2);
      this._startEngine();
      this._startPad();
      this._startStems();
      this._nextBeat = this.ctx.currentTime + 0.05;
    }
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    this.enabled = true;
    this.setPaused(false);
  }

  setPaused(paused) {
    this._paused = paused;
    if (!this.master) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(paused ? 0.0008 : 0.2, t, 0.04);
  }

  setIntensity(v) {
    this.intensity = Math.max(0, Math.min(1, v));
  }

  tick() {
    if (!this.enabled || !this.ctx || this._paused) return;
    const now = this.ctx.currentTime;
    const spb = 60 / 96;
    const sixteenth = spb / 4;
    while (this._nextBeat < now + 0.12) {
      this._scheduleBeat(this._nextBeat, this._step);
      this._nextBeat += sixteenth;
      this._step = (this._step + 1) % 16;
    }
    if (this._padFilt) {
      const room = this._room();
      this._padFilt.frequency.setTargetAtTime(room.filt + this.intensity * room.filtSpan, now, 0.2);
      this._padGain.gain.setTargetAtTime(room.gain + this.intensity * room.gainSpan, now, 0.25);
    }
    this._mixStems(now);
  }

  _room() {
    return ROOMS[this._chapter] || ROOMS.enter;
  }

  setChapter(id) {
    this._chapter = id === 'default' ? 'enter' : (id || 'enter');
  }

  _makeNoise(seconds) {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }

  _osc(type, freq, t, dur, gain, dest, endFreq) {
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain), t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(dest || this.sfx);
    o.start(t);
    o.stop(t + dur + 0.02);
    return o;
  }

  _noiseBurst(t, dur, freq, q, gain) {
    const src = this.ctx.createBufferSource();
    src.buffer = this._noise;
    const filt = this.ctx.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.setValueAtTime(freq, t);
    filt.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filt);
    filt.connect(g);
    g.connect(this.sfx);
    src.start(t);
    src.stop(t + dur + 0.02);
  }

  _startEngine() {
    const ctx = this.ctx;
    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filt = ctx.createBiquadFilter();
    const g = ctx.createGain();
    osc.type = 'sawtooth';
    osc2.type = 'triangle';
    osc.frequency.value = 48;
    osc2.frequency.value = 72;
    filt.type = 'lowpass';
    filt.frequency.value = 220;
    g.gain.value = 0.1;
    osc.connect(filt);
    osc2.connect(filt);
    filt.connect(g);
    g.connect(this.sfx);
    osc.start();
    osc2.start();
    this.engine = { osc, osc2, filt, g };
  }

  _startPad() {
    const ctx = this.ctx;
    const room = ROOMS.enter;
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    o1.type = room.pad[0];
    o2.type = room.pad[1];
    o1.frequency.value = room.padHz[0];
    o2.frequency.value = room.padHz[1];
    o2.detune.value = 7;
    const filt = ctx.createBiquadFilter();
    filt.type = 'lowpass';
    filt.frequency.value = room.filt;
    filt.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.value = room.gain;
    o1.connect(filt);
    o2.connect(filt);
    filt.connect(g);
    g.connect(this.music);
    o1.start();
    o2.start();
    this._padOsc = [o1, o2];
    this._padFilt = filt;
    this._padGain = g;
  }

  _startStems() {
    const ctx = this.ctx;
    const choir1 = ctx.createOscillator();
    const choir2 = ctx.createOscillator();
    choir1.type = 'sine';
    choir2.type = 'sine';
    choir1.frequency.value = 110;
    choir2.frequency.value = 164.81;
    choir2.detune.value = 6;
    const choirG = ctx.createGain();
    choirG.gain.value = 0.008;
    choir1.connect(choirG);
    choir2.connect(choirG);
    choirG.connect(this.music);
    choir1.start();
    choir2.start();
    this._choirGain = choirG;
    this._choirOsc = [choir1, choir2];

    const arpG = ctx.createGain();
    arpG.gain.value = 0.01;
    arpG.connect(this.music);
    this._arpGain = arpG;
  }

  _mixStems(now) {
    const id = this._chapter;
    const room = this._room();
    if (this._choirGain) this._choirGain.gain.setTargetAtTime(room.choir + this.intensity * 0.02, now, 0.35);
    if (this._arpGain) this._arpGain.gain.setTargetAtTime(room.arp + this.intensity * (room.arp > 0 ? 0.015 : 0), now, 0.35);
    if (this._choirOsc) {
      const f0 = { enter: 98, default: 110, hangar: 92, queen: 130.81, warden: 116, coil: 87, empress: 138, heart: 73, finale: 82.5 };
      const base = f0[id] ?? 110;
      this._choirOsc[0].frequency.setTargetAtTime(base, now, 0.4);
      this._choirOsc[1].frequency.setTargetAtTime(base * 1.5, now, 0.4);
    }
    if (this._padOsc) {
      this._padOsc[0].type = room.pad[0];
      this._padOsc[1].type = room.pad[1];
      this._padOsc[0].frequency.setTargetAtTime(room.padHz[0], now, 0.45);
      this._padOsc[1].frequency.setTargetAtTime(room.padHz[1], now, 0.45);
    }
  }

  _scheduleBeat(t, step) {
    const id = this._chapter;
    const i = this.intensity;
    const figure = this._room().figure;
    if (figure === 'drone') this._figureDrone(t, step, i);
    else if (figure === 'silk') this._figureSilk(t, step, i);
    else if (figure === 'aisle') this._figureAisle(t, step, i);
    else if (figure === 'ember') this._figureEmber(t, step, i);
    else if (figure === 'bloom') this._figureBloom(t, step, i);
    else if (figure === 'pulse') this._figurePulse(t, step, i);
    else if (figure === 'choir') this._figureChoir(t, step, i);
    else if (figure === 'yard') this._figureYard(t, step, i);
    if (id === 'heart' || id === 'hangar') return;
    this._intensityLayer(t, step, i);
  }

  _figureDrone(t, step, i) {
    if (step % 16 !== 0) return;
    this._osc('triangle', 98, t, 0.88, 0.046 + i * 0.018, this.music);
    this._osc('sine', 147, t, 0.92, 0.028 + i * 0.012, this.music);
  }

  _figureSilk(t, step, i) {
    if (step % 2 !== 0 || !this._arpGain) return;
    const fall = [261.63, 220, 196, 164.81, 146.83, 130.81];
    this._osc('triangle', fall[(step / 2) % fall.length], t, 0.11, 0.022 + i * 0.012, this._arpGain);
  }

  _figureAisle(t, step, i) {
    if (step % 4 !== 0) return;
    const bells = [116, 174, 232, 174];
    this._osc('triangle', bells[(step / 4) % 4], t, 0.18, 0.028 + i * 0.01, this.music);
  }

  _figureEmber(t, step, i) {
    if (step % 4 !== 0) return;
    this._osc('sawtooth', 87, t, 0.15, 0.03 + i * 0.014, this.music, 52);
  }

  _figureBloom(t, step, i) {
    if (step % 2 !== 0 || !this._arpGain) return;
    this._osc('sine', 138, t, 0.1, 0.02 + i * 0.01, this._arpGain);
    this._osc('sine', 174.61, t, 0.1, 0.016 + i * 0.008, this._arpGain);
  }

  _figurePulse(t, step, i) {
    if (step % 8 !== 0) return;
    this._osc('sine', 73, t, 0.3, 0.12 + i * 0.04, this.music, 32);
    this._osc('triangle', 36.5, t + 0.02, 0.24, 0.06, this.music, 24);
  }

  _figureChoir(t, step, i) {
    if (step % 2 !== 0 || !this._arpGain) return;
    const lift = [165, 220, 247, 330, 247, 220];
    this._osc('square', lift[(step / 2) % lift.length], t, 0.07, 0.02 + i * 0.014, this._arpGain);
  }

  _figureYard(t, step) {
    if (step % 4 !== 0) return;
    const yard = [92, 138, 184, 138];
    this._osc('sine', yard[(step / 4) % 4], t, 0.14, 0.018, this.music);
  }

  _intensityLayer(t, step, i) {
    if (step % 8 === 0 && i > 0.32) {
      const kick = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      kick.type = 'sine';
      kick.frequency.setValueAtTime(150, t);
      kick.frequency.exponentialRampToValueAtTime(42, t + 0.14);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.12 + i * 0.08, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      kick.connect(g);
      g.connect(this.music);
      kick.start(t);
      kick.stop(t + 0.2);
    }
    if (step % 2 === 0 && i > 0.48) {
      this._noiseBurst(t, 0.05, 6000, 0.6, 0.024 + i * 0.02);
    }
    if (i > 0.4 && step % 2 === 0) {
      const scale = [110, 130.81, 146.83, 164.81, 196, 220, 246.94, 261.63];
      const note = scale[(step * 3 + Math.floor(i * 4)) % scale.length];
      this._osc('square', note, t, 0.08, 0.018 + i * 0.016, this.music);
    }
  }

  sting(kind = 'chapter') {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    if (kind === 'boss') {
      this._osc('sawtooth', 55, t, 0.42, 0.12);
      this._osc('triangle', 82.5, t + 0.04, 0.5, 0.08);
      this._osc('sine', 110, t + 0.12, 0.55, 0.07);
      this._noiseBurst(t, 0.28, 180, 0.8, 0.1);
      this._duck(0.45, 0.4);
      return;
    }
    if (kind === 'fall') {
      this._osc('sine', 196, t, 0.28, 0.1, null, 82);
      this._osc('triangle', 147, t + 0.06, 0.4, 0.08, null, 55);
      this._osc('sawtooth', 73, t + 0.12, 0.55, 0.09, null, 36);
      this._noiseBurst(t + 0.08, 0.32, 140, 0.9, 0.1);
      this._duck(0.62, 0.55);
      return;
    }
    if (kind === 'death') {
      this._osc('sine', 220, t, 0.35, 0.1);
      this._osc('triangle', 164.81, t + 0.08, 0.4, 0.08);
      this._osc('sine', 110, t + 0.16, 0.55, 0.09);
      this._osc('sawtooth', 55, t + 0.2, 0.45, 0.07);
      this._duck(0.55, 0.5);
      return;
    }
    if (kind === 'continue') {
      this._osc('sine', 196, t, 0.22, 0.08);
      this._osc('triangle', 246.94, t + 0.08, 0.28, 0.07);
      this._osc('sine', 329.63, t + 0.16, 0.4, 0.06);
      return;
    }
    if (kind === 'life') {
      this._osc('sine', 523.25, t, 0.12, 0.07);
      this._osc('triangle', 659.25, t + 0.05, 0.16, 0.05);
      return;
    }
    this._osc('triangle', 196, t, 0.16, 0.07);
    this._osc('sine', 293.66, t + 0.06, 0.22, 0.06);
    this._osc('triangle', 392, t + 0.12, 0.28, 0.05);
  }

  hold(kind = 'breath') {
    if (!this.enabled) return;
    this.setIntensity(Math.min(this.intensity, kind === 'hold' ? 0.14 : 0.2));
    this._duck(kind === 'hold' ? 0.7 : 0.32, kind === 'hold' ? 1.15 : 0.28);
  }

  _duck(amount = 0.35, dur = 0.22) {
    if (!this.duck) return;
    const t = this.ctx.currentTime;
    this.duck.gain.cancelScheduledValues(t);
    this.duck.gain.setValueAtTime(this.duck.gain.value, t);
    this.duck.gain.linearRampToValueAtTime(Math.max(0.12, 1 - amount), t + 0.02);
    this.duck.gain.linearRampToValueAtTime(1, t + dur);
  }

  setBoost(amount) {
    this.boost = amount;
    if (!this.engine) return;
    const t = this.ctx.currentTime;
    this.engine.osc.frequency.setTargetAtTime(48 + amount * 36, t, 0.08);
    this.engine.filt.frequency.setTargetAtTime(220 + amount * 520, t, 0.08);
    this.engine.g.gain.setTargetAtTime(0.1 + amount * 0.08, t, 0.08);
    if (amount > 0.5 && !this._whooshOn) {
      this._whooshOn = true;
      this._noiseBurst(t, 0.28, 420, 0.8, 0.08);
    }
    if (amount < 0.2) this._whooshOn = false;
  }

  rumble(ms = 80, mag = 0.4) {
    try {
      const pads = navigator.getGamepads?.() || [];
      for (const p of pads) {
        const act = p?.vibrationActuator;
        if (act?.playEffect) act.playEffect('dual-rumble', {
          duration: ms,
          strongMagnitude: mag,
          weakMagnitude: mag * 0.6,
        });
      }
    } catch {
      /* no gamepad rumble */
    }
  }

  guns(group = 'primary', loadout = {}) {
    const kind = group === 'titan' ? 'titan'
      : group === 'missile' ? 'seeker'
      : group === 'mine' ? 'mine'
      : group === 'nova' ? 'nova'
      : (loadout.needle || 0) > 0 ? 'needle'
      : 'spark';
    this.shotFor(kind);
  }

  shotFor(kind = 'spark', opts = {}) {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    const m = opts.gain == null ? 1 : Math.max(0.12, opts.gain);
    if (kind === 'titan') {
      this._noiseBurst(t, 0.035, 4200, 2.2, 0.08 * m);
      this._osc('sine', 46, t, 0.48, 0.2 * m, null, 28);
      this._osc('sawtooth', 78, t, 0.3, 0.11 * m, null, 38);
      this._osc('square', 110, t, 0.08, 0.05 * m);
      this._duck(0.4, 0.3);
      this.rumble(110, 0.62);
      return;
    }
    if (kind === 'seeker') {
      this._osc('sawtooth', 128, t, 0.2, 0.07 * m);
      this._osc('triangle', 210, t + 0.02, 0.16, 0.045 * m);
      this._noiseBurst(t, 0.14, 720, 0.9, 0.055 * m);
      return;
    }
    if (kind === 'mine') {
      this._osc('sine', 90, t, 0.18, 0.07 * m);
      this._osc('triangle', 160, t + 0.03, 0.22, 0.05 * m);
      this._noiseBurst(t, 0.1, 280, 1.4, 0.04 * m);
      return;
    }
    if (kind === 'nova') {
      this._osc('sine', 220, t, 0.2, 0.07 * m);
      this._osc('triangle', 330, t, 0.24, 0.06 * m);
      this._osc('sine', 495, t + 0.04, 0.28, 0.05 * m);
      this._noiseBurst(t, 0.18, 1400, 0.6, 0.05 * m);
      if (m > 0.7) this._duck(0.18, 0.16);
      return;
    }
    if (kind === 'needle') {
      this._osc('square', 1680, t, 0.14, 0.05 * m, null, 1240);
      this._osc('sine', 2520, t, 0.12, 0.028 * m, null, 1880);
      this._osc('sawtooth', 820, t, 0.09, 0.016 * m, null, 620);
      return;
    }
    if (kind === 'wing') {
      this._osc('triangle', 640, t, 0.06, 0.045);
      this._osc('square', 960, t, 0.04, 0.03);
      return;
    }
    if (kind === 'helix') {
      this._osc('square', 520, t, 0.07, 0.035);
      this._osc('square', 533, t, 0.07, 0.03);
      return;
    }
    if (kind === 'shear') {
      this._osc('sawtooth', 210, t, 0.09, 0.06);
      this._noiseBurst(t, 0.08, 1800, 0.7, 0.045);
      return;
    }
    if (kind === 'spire') {
      this._osc('sine', 1880, t, 0.08, 0.05);
      this._osc('triangle', 940, t, 0.1, 0.035);
      return;
    }
    if (kind === 'drone') {
      this._osc('triangle', 420, t, 0.05, 0.03);
      this._osc('sine', 840, t + 0.02, 0.06, 0.025);
      return;
    }
    if (kind === 'prism') {
      this._osc('sine', 700, t, 0.06, 0.035);
      this._osc('sine', 1050, t, 0.06, 0.03);
      return;
    }
    if (kind === 'shard') {
      this._osc('triangle', 1100, t, 0.04, 0.04);
      this._osc('sine', 1760, t, 0.035, 0.025);
      return;
    }
    this._osc('square', 480, t, 0.045, 0.038 * m);
    this._noiseBurst(t, 0.05, 2400, 0.7, 0.028 * m);
  }

  mote(chord = false) {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 920, t, 0.09, 0.06);
    this._osc('sine', chord ? 1460 : 1240, t + 0.04, 0.12, 0.05);
  }

  powerup() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 520, t, 0.16, 0.09);
    this._osc('triangle', 780, t + 0.05, 0.18, 0.07);
    this._osc('sine', 1170, t + 0.1, 0.22, 0.06);
  }

  collect() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 740, t, 0.1, 0.08);
    this._osc('sine', 1180, t + 0.05, 0.14, 0.06);
  }

  coin() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('triangle', 620, t, 0.08, 0.05);
    this._osc('sine', 880, t + 0.03, 0.1, 0.06);
    this._osc('triangle', 1320, t + 0.07, 0.12, 0.045);
  }

  buy() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 196, t, 0.14, 0.07);
    this._osc('triangle', 392, t + 0.05, 0.16, 0.06);
    this._osc('sine', 784, t + 0.1, 0.2, 0.05);
    this._osc('triangle', 1175, t + 0.16, 0.18, 0.04);
  }

  gate() {
    if (!this.enabled) return;
    const ctx = this.ctx;
    const t = ctx.currentTime;
    const dur = 2.05;
    const carrier = ctx.createOscillator();
    const harm = ctx.createOscillator();
    const sub = ctx.createOscillator();
    carrier.type = 'sine';
    harm.type = 'triangle';
    sub.type = 'sine';
    carrier.frequency.setValueAtTime(196, t);
    carrier.frequency.exponentialRampToValueAtTime(110, t + dur);
    harm.frequency.setValueAtTime(294, t);
    harm.frequency.exponentialRampToValueAtTime(165, t + dur);
    sub.frequency.setValueAtTime(98, t);
    sub.frequency.exponentialRampToValueAtTime(55, t + dur);
    const filt = ctx.createBiquadFilter();
    filt.type = 'bandpass';
    filt.Q.setValueAtTime(6.5, t);
    filt.frequency.setValueAtTime(380, t);
    filt.frequency.exponentialRampToValueAtTime(1650, t + 0.22);
    filt.frequency.exponentialRampToValueAtTime(340, t + 0.55);
    filt.frequency.exponentialRampToValueAtTime(1200, t + 0.92);
    filt.frequency.exponentialRampToValueAtTime(280, t + 1.28);
    filt.frequency.exponentialRampToValueAtTime(820, t + 1.64);
    filt.frequency.exponentialRampToValueAtTime(200, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.13, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    carrier.connect(filt);
    harm.connect(filt);
    filt.connect(g);
    sub.connect(g);
    g.connect(this.sfx);
    carrier.start(t);
    harm.start(t);
    sub.start(t);
    carrier.stop(t + dur + 0.02);
    harm.stop(t + dur + 0.02);
    sub.stop(t + dur + 0.02);
    this._duck(0.4, 0.5);
  }

  hit() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 70, t, 0.28, 0.2);
    this._osc('sawtooth', 90, t, 0.18, 0.1);
    this._noiseBurst(t, 0.16, 220, 0.9, 0.12);
    this._duck(0.45, 0.2);
    this.rumble(120, 0.7);
  }

  explosion(big = false) {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', big ? 48 : 64, t, big ? 0.5 : 0.28, big ? 0.2 : 0.12);
    this._osc('sawtooth', big ? 55 : 80, t, 0.22, 0.08);
    this._noiseBurst(t, big ? 0.4 : 0.22, big ? 160 : 280, 0.8, big ? 0.14 : 0.08);
    this._duck(big ? 0.7 : 0.32, big ? 0.38 : 0.16);
    if (big) this.rumble(180, 0.85);
  }

  bomb() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 40, t, 0.55, 0.22);
    this._osc('triangle', 90, t, 0.4, 0.1);
    this._noiseBurst(t, 0.45, 140, 0.7, 0.16);
    this._duck(0.8, 0.45);
    this.rumble(220, 1);
  }

  bombBoom() {
    this.bomb();
    this._duck(0.92, 0.7);
  }

  comboStab(mult = 2) {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    if (mult >= 8) {
      this._osc('sawtooth', 196, t, 0.16, 0.06);
      this._osc('triangle', 784, t, 0.18, 0.07);
      this._osc('sine', 1176, t + 0.04, 0.2, 0.05);
      return;
    }
    if (mult >= 4) {
      this._osc('triangle', 523, t, 0.14, 0.07);
      this._osc('sine', 784, t + 0.03, 0.16, 0.05);
      return;
    }
    this._osc('triangle', 330, t, 0.12, 0.06);
    this._osc('sine', 495, t + 0.02, 0.12, 0.04);
  }

  comboDrop() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 220, t, 0.18, 0.06, null, 90);
    this._osc('triangle', 140, t + 0.04, 0.2, 0.04, null, 70);
  }

  yardTick() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('square', 880, t, 0.03, 0.025);
  }

  ui(kind = 'move') {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    if (kind === 'ok') {
      this._osc('sine', 520, t, 0.07, 0.04);
      this._osc('triangle', 780, t + 0.03, 0.08, 0.03);
      return;
    }
    this._osc('triangle', 640, t, 0.035, 0.03);
  }

  boom() {
    this.explosion(true);
  }
}
