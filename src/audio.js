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
      const t = now;
      this._padFilt.frequency.setTargetAtTime(220 + this.intensity * 920, t, 0.2);
      this._padGain.gain.setTargetAtTime(0.045 + this.intensity * 0.05, t, 0.25);
    }
    this._mixStems(now);
  }

  setChapter(id) {
    this._chapter = id || 'default';
  }

  _makeNoise(seconds) {
    const ctx = this.ctx;
    const buf = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    return buf;
  }

  _osc(type, freq, t, dur, gain, dest) {
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
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
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    o1.type = 'sawtooth';
    o2.type = 'sawtooth';
    o1.frequency.value = 55;
    o2.frequency.value = 82.5;
    o2.detune.value = 7;
    const filt = ctx.createBiquadFilter();
    filt.type = 'lowpass';
    filt.frequency.value = 280;
    filt.Q.value = 0.7;
    const g = ctx.createGain();
    g.gain.value = 0.05;
    o1.connect(filt);
    o2.connect(filt);
    filt.connect(g);
    g.connect(this.music);
    o1.start();
    o2.start();
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
    const choir = id === 'finale' ? 0.055 : id === 'empress' ? 0.048 : id === 'queen' ? 0.042 : id === 'coil' ? 0.036 : id === 'warden' ? 0.03 : 0.01;
    const arp = id === 'finale' ? 0.038 : id === 'empress' ? 0.034 : id === 'coil' ? 0.033 : id === 'warden' ? 0.032 : id === 'queen' ? 0.024 : 0.008;
    if (this._choirGain) this._choirGain.gain.setTargetAtTime(choir + this.intensity * 0.02, now, 0.35);
    if (this._arpGain) this._arpGain.gain.setTargetAtTime(arp + this.intensity * 0.015, now, 0.35);
    if (this._choirOsc) {
      const base = id === 'warden' || id === 'coil' ? 98 : id === 'finale' ? 82.5 : id === 'empress' ? 138 : id === 'queen' ? 130.81 : 110;
      this._choirOsc[0].frequency.setTargetAtTime(base, now, 0.4);
      this._choirOsc[1].frequency.setTargetAtTime(base * 1.5, now, 0.4);
    }
  }

  _scheduleBeat(t, step) {
    const i = this.intensity;
    const scale = [110, 130.81, 146.83, 164.81, 196, 220, 246.94, 261.63];
    if (step % 8 === 0 && i > 0.12) {
      const kick = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      kick.type = 'sine';
      kick.frequency.setValueAtTime(150, t);
      kick.frequency.exponentialRampToValueAtTime(42, t + 0.14);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.16 + i * 0.1, t + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
      kick.connect(g);
      g.connect(this.music);
      kick.start(t);
      kick.stop(t + 0.2);
    }
    if (step % 2 === 0 && i > 0.38) {
      this._noiseBurst(t, 0.05, 6000, 0.6, 0.03 + i * 0.025);
    }
    if (i > 0.22) {
      const note = scale[(step * 3 + Math.floor(i * 4)) % scale.length];
      const oct = i > 0.62 && step % 4 === 0 ? 2 : 1;
      this._osc('square', note * oct, t, 0.09, 0.03 + i * 0.025, this.music);
    }
    if (i > 0.7 && step % 16 === 12) {
      this._osc('triangle', 55, t, 0.28, 0.05, this.music);
    }
    if (this._arpGain && (this._chapter === 'queen' || this._chapter === 'warden' || this._chapter === 'finale' || this._chapter === 'coil' || this._chapter === 'empress')) {
      if (step % 2 === 0) {
        const arpNote = scale[(step + 4) % scale.length] * (this._chapter === 'finale' ? 2 : 1);
        this._osc('square', arpNote * 2, t, 0.06, 0.018 + i * 0.012, this._arpGain);
      }
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
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    if (group === 'titan') {
      this._osc('sawtooth', 64, t, 0.28, 0.14);
      this._osc('square', 128, t, 0.18, 0.07);
      this._noiseBurst(t, 0.2, 180, 1.1, 0.1);
      this._duck(0.28, 0.18);
      return;
    }
    if (group === 'missile') {
      this._osc('sawtooth', 140, t, 0.16, 0.06);
      this._noiseBurst(t, 0.12, 900, 0.8, 0.05);
      return;
    }
    if (group === 'mine' || group === 'nova') {
      this._osc('triangle', 380, t, 0.11, 0.045);
      this._osc('sine', 620, t, 0.12, 0.035);
      return;
    }
    if ((loadout.needle || 0) > 0) {
      const pitch = 920 + Math.min(6, loadout.needle) * 48;
      this._osc('square', pitch, t, 0.055, 0.05);
      this._osc('sawtooth', 380 + loadout.needle * 22, t, 0.08, 0.03);
      return;
    }
    this._osc('square', 480, t, 0.04, 0.04);
    this._noiseBurst(t, 0.05, 2400, 0.7, 0.03);
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

  boom() {
    this.explosion(true);
  }
}
