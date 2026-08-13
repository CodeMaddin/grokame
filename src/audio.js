export class AudioBus {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.engine = null;
    this.boost = 0;
    this.enabled = false;
  }

  async resume() {
    if (!this.ctx) {
      this.ctx = new AudioContext();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.22;
      this.master.connect(this.ctx.destination);
      this._startEngine();
      this._startAmbience();
    }
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    this.enabled = true;
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
    g.connect(dest || this.master);
    o.start(t);
    o.stop(t + dur + 0.02);
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
    g.gain.value = 0.12;
    osc.connect(filt);
    osc2.connect(filt);
    filt.connect(g);
    g.connect(this.master);
    osc.start();
    osc2.start();
    this.engine = { osc, osc2, filt, g };
  }

  _startAmbience() {
    const ctx = this.ctx;
    const bufferSize = 2 * ctx.sampleRate;
    const noise = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    const src = ctx.createBufferSource();
    src.buffer = noise;
    src.loop = true;
    const filt = ctx.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.value = 380;
    filt.Q.value = 0.6;
    const g = ctx.createGain();
    g.gain.value = 0.04;
    src.connect(filt);
    filt.connect(g);
    g.connect(this.master);
    src.start();
  }

  setBoost(amount) {
    this.boost = amount;
    if (!this.engine) return;
    const t = this.ctx.currentTime;
    this.engine.osc.frequency.setTargetAtTime(48 + amount * 36, t, 0.08);
    this.engine.filt.frequency.setTargetAtTime(220 + amount * 520, t, 0.08);
    this.engine.g.gain.setTargetAtTime(0.12 + amount * 0.08, t, 0.08);
  }

  laser(rank = 0) {
    this.guns('primary', { needle: Math.max(1, rank) });
  }

  guns(group = 'primary', loadout = {}) {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    if (group === 'titan') {
      this._osc('sawtooth', 70, t, 0.22, 0.14);
      this._osc('square', 140, t, 0.16, 0.08);
      this._osc('triangle', 220, t, 0.18, 0.06);
      return;
    }
    if (group === 'missile') {
      this._osc('sawtooth', 180, t, 0.14, 0.07);
      this._osc('square', 90, t, 0.12, 0.05);
      return;
    }
    if (group === 'mine' || group === 'nova') {
      this._osc('triangle', 420, t, 0.1, 0.05);
      this._osc('sine', 640, t, 0.12, 0.04);
      return;
    }
    if ((loadout.needle || 0) > 0) {
      const pitch = 880 + Math.min(6, loadout.needle) * 55;
      this._osc('square', pitch, t, 0.07, 0.06);
      this._osc('sawtooth', 420 + loadout.needle * 28, t, 0.1, 0.04);
      return;
    }
    this._osc('square', 520, t, 0.05, 0.045);
    this._osc('triangle', 340, t, 0.07, 0.03);
  }

  mote(chord = false) {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 920, t, 0.09, 0.07);
    this._osc('sine', chord ? 1460 : 1240, t + 0.04, 0.12, 0.06);
  }

  powerup() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 520, t, 0.16, 0.1);
    this._osc('triangle', 780, t + 0.05, 0.18, 0.08);
    this._osc('sine', 1170, t + 0.1, 0.22, 0.07);
  }

  collect() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 740, t, 0.12, 0.1);
    this._osc('sine', 1180, t + 0.05, 0.16, 0.08);
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
    filt.Q.linearRampToValueAtTime(4.2, t + dur);
    filt.frequency.setValueAtTime(380, t);
    filt.frequency.exponentialRampToValueAtTime(1650, t + 0.22);
    filt.frequency.exponentialRampToValueAtTime(340, t + 0.55);
    filt.frequency.exponentialRampToValueAtTime(1200, t + 0.92);
    filt.frequency.exponentialRampToValueAtTime(280, t + 1.28);
    filt.frequency.exponentialRampToValueAtTime(820, t + 1.64);
    filt.frequency.exponentialRampToValueAtTime(200, t + dur);

    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(2.15, t);
    lfo.frequency.exponentialRampToValueAtTime(0.85, t + dur);
    lfoGain.gain.value = 0.22;

    const trem = ctx.createGain();
    trem.gain.value = 0.78;
    lfo.connect(lfoGain);
    lfoGain.connect(trem.gain);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.15, t + 0.05);
    g.gain.linearRampToValueAtTime(0.06, t + 0.52);
    g.gain.linearRampToValueAtTime(0.12, t + 0.9);
    g.gain.linearRampToValueAtTime(0.04, t + 1.26);
    g.gain.linearRampToValueAtTime(0.08, t + 1.62);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    carrier.connect(filt);
    harm.connect(filt);
    sub.connect(g);
    filt.connect(trem);
    trem.connect(g);
    g.connect(this.master);

    carrier.start(t);
    harm.start(t);
    sub.start(t);
    lfo.start(t);
    carrier.stop(t + dur + 0.02);
    harm.stop(t + dur + 0.02);
    sub.stop(t + dur + 0.02);
    lfo.stop(t + dur + 0.02);
  }

  hit() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sawtooth', 90, t, 0.22, 0.16);
    this._osc('square', 140, t, 0.18, 0.1);
  }

  explosion() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sawtooth', 70, t, 0.35, 0.18);
    this._osc('square', 180, t, 0.2, 0.1);
    this._osc('triangle', 40, t, 0.45, 0.12);
  }

  boom() {
    this.explosion();
  }
}
