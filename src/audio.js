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

  laser() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('square', 880, t, 0.09, 0.08);
    this._osc('sawtooth', 420, t, 0.12, 0.05);
  }

  collect() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('sine', 740, t, 0.12, 0.1);
    this._osc('sine', 1180, t + 0.05, 0.16, 0.08);
  }

  gate() {
    if (!this.enabled) return;
    const t = this.ctx.currentTime;
    this._osc('triangle', 320, t, 0.22, 0.1);
    this._osc('sine', 640, t + 0.04, 0.28, 0.08);
    this._osc('sine', 960, t + 0.08, 0.3, 0.06);
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
