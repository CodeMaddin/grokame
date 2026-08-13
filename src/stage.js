/** Authored encounter list. Distances are path `traveled` units. */

export const CHAPTERS = [
  { at: 70, toast: 'WAVE 01 — STINGER FAN' },
  { at: 380, toast: 'MID-BOSS — WEAVER QUEEN' },
  { at: 820, toast: 'MID-BOSS — WARDEN' },
  { at: 1320, toast: 'FINALE — SENTINEL' },
];

export const SCRIPT = [
  { at: 70, kind: 'squad', form: 'v', role: 'dive', n: 5, ahead: 88 },
  { at: 118, kind: 'squad', form: 'line', role: 'sine', n: 4, ahead: 92 },
  { at: 160, kind: 'breath' },
  { at: 188, kind: 'squad', form: 'flank', role: 'heavy', n: 2, ahead: 96 },
  { at: 210, kind: 'squad', form: 'pair', role: 'dive', n: 2, ahead: 84 },
  { at: 248, kind: 'gate' },
  { at: 268, kind: 'orbs' },
  { at: 292, kind: 'squad', form: 'cross', role: 'sine', n: 6, ahead: 100 },
  { at: 330, kind: 'blockers', n: 2 },
  { at: 348, kind: 'squad', form: 'v', role: 'dive', n: 7, ahead: 90 },
  { at: 380, kind: 'midboss', id: 'queen' },
  { at: 470, kind: 'breath' },
  { at: 490, kind: 'orbs' },
  { at: 512, kind: 'squad', form: 'escort', role: 'dive', n: 5, ahead: 94 },
  { at: 548, kind: 'gate' },
  { at: 572, kind: 'squad', form: 'line', role: 'heavy', n: 3, ahead: 100 },
  { at: 610, kind: 'squad', form: 'cross', role: 'sine', n: 6, ahead: 88 },
  { at: 648, kind: 'blockers', n: 3 },
  { at: 670, kind: 'squad', form: 'v', role: 'dive', n: 5, ahead: 86 },
  { at: 710, kind: 'squad', form: 'pair', role: 'sine', n: 4, ahead: 92 },
  { at: 748, kind: 'gate' },
  { at: 780, kind: 'squad', form: 'flank', role: 'heavy', n: 2, ahead: 98 },
  { at: 820, kind: 'midboss', id: 'warden' },
  { at: 920, kind: 'breath' },
  { at: 944, kind: 'orbs' },
  { at: 968, kind: 'squad', form: 'cross', role: 'dive', n: 8, ahead: 90 },
  { at: 1010, kind: 'squad', form: 'line', role: 'sine', n: 5, ahead: 94 },
  { at: 1048, kind: 'gate' },
  { at: 1072, kind: 'blockers', n: 3 },
  { at: 1100, kind: 'squad', form: 'escort', role: 'heavy', n: 5, ahead: 100 },
  { at: 1148, kind: 'squad', form: 'v', role: 'dive', n: 7, ahead: 88 },
  { at: 1190, kind: 'squad', form: 'cross', role: 'sine', n: 6, ahead: 96 },
  { at: 1240, kind: 'gate' },
  { at: 1270, kind: 'squad', form: 'line', role: 'dive', n: 6, ahead: 90 },
  { at: 1320, kind: 'finale' },
];

export const LANE_T = [-0.84, -0.5, -0.18, 0.18, 0.5, 0.84];

export function lanesFor(form, n, span) {
  const s = span || 24;
  if (form === 'v') {
    const out = [];
    const mid = (n - 1) / 2;
    for (let i = 0; i < n; i++) out.push(((i - mid) / Math.max(1, mid)) * s * 0.72);
    return out;
  }
  if (form === 'line') {
    const out = [];
    for (let i = 0; i < n; i++) out.push((i / Math.max(1, n - 1) - 0.5) * s * 1.5);
    return out;
  }
  if (form === 'flank') return [-s * 0.72, s * 0.72].slice(0, n);
  if (form === 'pair') {
    const out = [];
    for (let i = 0; i < n; i++) out.push((i % 2 === 0 ? -1 : 1) * s * (0.22 + Math.floor(i / 2) * 0.28));
    return out;
  }
  if (form === 'cross') {
    const out = [];
    for (let i = 0; i < n; i++) out.push((i / Math.max(1, n - 1) - 0.5) * s * 1.55);
    return out;
  }
  if (form === 'escort') {
    const core = [0];
    const wings = [];
    for (let i = 1; i < n; i++) wings.push((i % 2 === 0 ? -1 : 1) * s * (0.35 + Math.floor((i - 1) / 2) * 0.28));
    return core.concat(wings).slice(0, n);
  }
  return LANE_T.slice(0, n).map((t) => t * s);
}

export function rowStagger(form, i) {
  if (form === 'v') return Math.abs(i - 2) * 9;
  if (form === 'cross') return (i % 2) * 14;
  if (form === 'escort') return i === 0 ? 18 : 0;
  return 0;
}

export class StageDirector {
  constructor(script = SCRIPT) {
    this.script = script;
    this.index = 0;
    this.cleared = false;
    this.finaleAlive = false;
    this.peakThreat = 0;
  }

  reset() {
    this.index = 0;
    this.cleared = false;
    this.finaleAlive = false;
    this.peakThreat = 0;
  }

  peek() {
    return this.script[this.index] || null;
  }

  consume() {
    const ev = this.script[this.index];
    this.index += 1;
    return ev;
  }

  intensity(traveled, hunterCount, boosting, bossAlive) {
    const scriptT = Math.min(1, traveled / 1400);
    const hunt = Math.min(1, hunterCount / 10);
    let v = 0.18 + scriptT * 0.42 + hunt * 0.28 + (boosting ? 0.08 : 0);
    if (bossAlive) v = Math.max(v, 0.78);
    if (this.cleared) v = 0.35;
    this.peakThreat = Math.max(this.peakThreat, v);
    return clamp01(v);
  }
}

function clamp01(v) {
  return Math.max(0, Math.min(1, v));
}

export function gradeRun(run) {
  let pts = 0;
  pts += Math.min(38, run.score / 900);
  pts += Math.min(18, run.kills / 5);
  pts += Math.min(16, (run.step || 0) / 5);
  pts += Math.min(10, (run.maxCombo || 1) * 1.1);
  pts += run.victory ? 14 : 0;
  pts += Math.min(8, (run.nearMisses || 0) * 0.15);
  pts -= Math.min(8, (run.bombsUsed || 0) * 1.2);
  if (pts >= 86) return 'S';
  if (pts >= 72) return 'A';
  if (pts >= 56) return 'B';
  if (pts >= 40) return 'C';
  return 'D';
}

export const HI_SCORE_KEY = 'aether-scores';

export function loadScores() {
  try {
    const raw = JSON.parse(localStorage.getItem(HI_SCORE_KEY) || '[]');
    return Array.isArray(raw) ? raw.slice(0, 8) : [];
  } catch {
    return [];
  }
}

export function saveScore(entry) {
  const list = loadScores();
  list.push(entry);
  list.sort((a, b) => b.score - a.score);
  const next = list.slice(0, 8);
  localStorage.setItem(HI_SCORE_KEY, JSON.stringify(next));
  return next;
}
