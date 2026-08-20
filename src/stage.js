/** Authored encounter list. Distances are path `traveled` units. */

import { CAMPAIGNS } from './campaigns.js';

export const SCRIPT = CAMPAIGNS[0].levels[0].script;
export const CHAPTERS = CAMPAIGNS[0].levels[0].chapters;

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
  if (form === 'silk-cut') {
    const out = [];
    for (let i = 0; i < n; i++) out.push((i / Math.max(1, n - 1) - 0.5) * s * 1.68);
    return out;
  }
  if (form === 'curtain') {
    const out = [];
    for (let i = 0; i < n; i++) out.push((i / Math.max(1, n - 1) - 0.5) * s * 1.88);
    return out;
  }
  if (form === 'aisle') {
    const out = [];
    const half = Math.ceil(n / 2);
    for (let i = 0; i < n; i++) {
      const side = i < half ? -1 : 1;
      const k = i < half ? i : i - half;
      out.push(side * s * (0.42 + k * 0.22));
    }
    return out;
  }
  if (form === 'split') {
    const out = [];
    for (let i = 0; i < n; i++) out.push((i % 2 === 0 ? -1 : 1) * s * (0.68 + Math.floor(i / 2) * 0.12));
    return out;
  }
  if (form === 'dark') {
    const out = [0];
    for (let i = 1; i < n; i++) out.push((i % 2 === 0 ? -1 : 1) * s * (0.55 + Math.floor((i - 1) / 2) * 0.3));
    return out.slice(0, n);
  }
  if (form === 'judgment') {
    const out = [];
    const mid = (n - 1) / 2;
    for (let i = 0; i < n; i++) out.push(((i - mid) / Math.max(1, mid)) * s * 0.95);
    return out;
  }
  return LANE_T.slice(0, n).map((t) => t * s);
}

export function rowStagger(form, i) {
  if (form === 'v') return Math.abs(i - 2) * 9;
  if (form === 'cross') return (i % 2) * 14;
  if (form === 'escort') return i === 0 ? 18 : 0;
  if (form === 'silk-cut') return i * 7;
  if (form === 'curtain') return 0;
  if (form === 'aisle') return (i % 2) * 10;
  if (form === 'split') return Math.floor(i / 2) * 8;
  if (form === 'dark') return i === 0 ? 22 : (i % 2) * 12;
  if (form === 'judgment') return Math.abs(i - 3) * 6;
  return 0;
}

export class StageDirector {
  constructor(script = SCRIPT, length = 1400) {
    this.script = script;
    this.length = length;
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
    const scriptT = Math.min(1, traveled / Math.max(240, this.length));
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
