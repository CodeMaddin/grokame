/** Five themed campaigns. 1-1 is the original MVP run, uncut. */

import { BEATS, authorScript } from './beats.js';

export const MVP_CHAPTERS = [
  { at: 70, toast: 'WAVE 01 — STINGER FAN', world: 'default', sting: 'chapter' },
  { at: 380, toast: 'MID-BOSS — WEAVER QUEEN', world: 'queen', sting: 'boss' },
  { at: 820, toast: 'MID-BOSS — WARDEN', world: 'warden', sting: 'boss' },
  { at: 1320, toast: 'FINALE — SENTINEL', world: 'finale', sting: 'boss' },
];

export const MVP_SCRIPT = [
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

const BOSS_TITLE = {
  queen: 'WEAVER QUEEN',
  warden: 'WARDEN',
  coil: 'TITAN COIL',
  empress: 'WEAVER EMPRESS',
  finale: 'SENTINEL',
};

const BOSS_WORLD = {
  queen: 'queen',
  warden: 'warden',
  coil: 'coil',
  empress: 'empress',
  finale: 'finale',
};

const FORMS = {
  A: {},
  B: { v: 'line', line: 'v', cross: 'escort', escort: 'cross' },
  C: { v: 'cross', cross: 'v', pair: 'flank', flank: 'pair', line: 'escort', escort: 'line' },
  D: { v: 'escort', escort: 'v', cross: 'line', line: 'cross', pair: 'v', flank: 'pair' },
};

const ROLES = {
  stinger: {},
  crimson: { sine: 'cinder', heavy: 'slag' },
  cathedral: { sine: 'acolyte', heavy: 'chime' },
  iris: { sine: 'bloom', heavy: 'prism' },
  heart: { sine: 'ion', heavy: 'wisp' },
};

const SIG = {
  stinger: { form: 'silk-cut', role: 'sine', toast: 'SILK CUT' },
  crimson: { form: 'curtain', role: 'cinder', toast: 'ASH CURTAIN' },
  cathedral: { form: 'aisle', role: 'acolyte', toast: 'LOCKED AISLE' },
  iris: { form: 'split', role: 'bloom', toast: 'IRIS SPLIT' },
  heart: { form: 'dark', role: 'ion', toast: 'DARK STRETCH' },
};

export { SIG };

function remapMvp({ mid = ['queen', 'warden'], boss = 'finale', formOf = {}, roleOf = {} }) {
  let midI = 0;
  return MVP_SCRIPT.map((ev) => {
    const e = { ...ev };
    if (e.kind === 'squad') {
      e.role = roleOf[e.role] || e.role;
      e.form = formOf[e.form] || e.form;
    } else if (e.kind === 'midboss') {
      e.id = mid[midI++] || e.id;
    } else if (e.kind === 'finale') {
      if (boss === 'finale') return e;
      return { at: e.at, kind: 'boss', id: boss };
    }
    return e;
  });
}


export function authorLevelScript(base, id, sig) {
  const sheet = BEATS[id];
  if (!sheet) return base;
  return authorScript(base, { ...sheet, sig });
}

function chaptersFor(id, name, world, mid, boss, banner, clock = {}, beatBanner = null) {
  const superBoss = banner === 'super';
  const finale = banner === 'finale';
  const bossLabel = finale ? 'FINALE' : superBoss ? 'SUPER BOSS' : 'LEVEL BOSS';
  const midAt = clock.mids || [380, 820];
  const bossAt = clock.boss || 1320;
  const chapters = [
    { at: 70, toast: `${id} — ${name}`, world, sting: 'chapter' },
    { at: midAt[0], toast: `MINI-BOSS — ${BOSS_TITLE[mid[0]]}`, world: BOSS_WORLD[mid[0]], sting: 'boss' },
    { at: midAt[1], toast: `MINI-BOSS — ${BOSS_TITLE[mid[1]]}`, world: BOSS_WORLD[mid[1]], sting: 'boss' },
    { at: bossAt, toast: `${bossLabel} — ${BOSS_TITLE[boss]}`, world: BOSS_WORLD[boss], sting: 'boss' },
  ];
  if (beatBanner) {
    chapters.splice(1, 0, { at: beatBanner.at, toast: beatBanner.toast, world, sting: 'chapter' });
  }
  if (superBoss || finale) {
    chapters.splice(-1, 0, { at: 1188, toast: 'LAST AISLE', world, sting: 'chapter' });
  }
  return chapters;
}

function themedLevel(id, name, world, spec) {
  const mid = spec.mid;
  const boss = spec.boss;
  const beat = BEATS[id];
  if (!beat) throw new Error(`missing beat sheet for ${id}`);
  const long = spec.banner === 'super' || spec.banner === 'finale';
  const script = authorScript(beat.camp, beat);
  const chapters = chaptersFor(id, name, world, mid, boss, spec.banner, { mids: beat.mids, boss: beat.boss }, beat.banner);
  return {
    id,
    name,
    world,
    boss,
    banner: spec.banner || '',
    bossWorld: BOSS_WORLD[boss] || world,
    exitAt: long ? 1480 : 1360,
    length: long ? 1520 : 1400,
    chapters,
    script,
  };
}

export function scriptFor(level) {
  return level?.script || MVP_SCRIPT;
}

function mvpLevel() {
  return {
    id: '1-1',
    name: 'STINGER FAN',
    world: 'default',
    boss: 'finale',
    bossWorld: 'finale',
    exitAt: 1360,
    length: 1400,
    chapters: MVP_CHAPTERS.map((ch) => ({ ...ch })),
    script: MVP_SCRIPT.map((ev) => ({ ...ev })),
  };
}

export const CAMPAIGNS = [
  {
    id: 'stinger',
    kicker: 'CAMPAIGN 01',
    name: 'STINGER FAN',
    blurb: 'The original rift. Sine weavers and heavy bricks live here. Dive fodder still leaks through.',
    world: 'default',
    levels: [
      mvpLevel(),
      themedLevel('1-2', 'SILK BREAK', 'default', { mid: ['coil', 'empress'], boss: 'queen', forms: 'B', roles: 'stinger' }),
      themedLevel('1-3', 'CROSS THREAD', 'default', { mid: ['empress', 'coil'], boss: 'warden', forms: 'C', roles: 'stinger' }),
      themedLevel('1-4', 'FAN STORM', 'default', { mid: ['warden', 'queen'], boss: 'coil', forms: 'D', roles: 'stinger' }),
      themedLevel('1-5', 'RIFT SPINE', 'default', { mid: ['coil', 'warden'], boss: 'empress', forms: 'B', roles: 'stinger' }),
      themedLevel('1-6', 'WEAVER CROWN', 'queen', { mid: ['warden', 'coil'], boss: 'queen', forms: 'C', roles: 'stinger', banner: 'super' }),
    ],
  },
  {
    id: 'crimson',
    kicker: 'CAMPAIGN 02',
    name: 'CRIMSON SHOALS',
    blurb: 'Hot ribbon. Ember darts and slag hulls. The coil is the law here.',
    world: 'coil',
    levels: [
      themedLevel('2-1', 'EMBER DRIFT', 'coil', { mid: ['queen', 'empress'], boss: 'coil', forms: 'B', roles: 'crimson' }),
      themedLevel('2-2', 'SLAG GATES', 'coil', { mid: ['warden', 'queen'], boss: 'empress', forms: 'C', roles: 'crimson' }),
      themedLevel('2-3', 'MAGMA FAN', 'coil', { mid: ['empress', 'warden'], boss: 'queen', forms: 'D', roles: 'crimson' }),
      themedLevel('2-4', 'ASH RIBBON', 'coil', { mid: ['coil', 'queen'], boss: 'warden', forms: 'A', roles: 'crimson' }),
      themedLevel('2-5', 'CINDER NAVE', 'coil', { mid: ['empress', 'coil'], boss: 'queen', forms: 'B', roles: 'crimson' }),
      themedLevel('2-6', 'TITAN COIL', 'coil', { mid: ['warden', 'empress'], boss: 'coil', forms: 'C', roles: 'crimson', banner: 'super' }),
    ],
  },
  {
    id: 'cathedral',
    kicker: 'CAMPAIGN 03',
    name: 'NULL CATHEDRAL',
    blurb: 'Gold hush. Acolyte spires and chime discs fill the aisles. The Warden keeps every door.',
    world: 'warden',
    levels: [
      themedLevel('3-1', 'AISLE FIRE', 'warden', { mid: ['coil', 'queen'], boss: 'empress', forms: 'C', roles: 'cathedral' }),
      themedLevel('3-2', 'NAVE LOCK', 'warden', { mid: ['empress', 'coil'], boss: 'queen', forms: 'B', roles: 'cathedral' }),
      themedLevel('3-3', 'CHOIR WALL', 'warden', { mid: ['queen', 'coil'], boss: 'empress', forms: 'D', roles: 'cathedral' }),
      themedLevel('3-4', 'GOLD HUSH', 'warden', { mid: ['coil', 'empress'], boss: 'queen', forms: 'A', roles: 'cathedral' }),
      themedLevel('3-5', 'WARDEN KEEP', 'warden', { mid: ['queen', 'empress'], boss: 'warden', forms: 'C', roles: 'cathedral', banner: 'super' }),
    ],
  },
  {
    id: 'iris',
    kicker: 'CAMPAIGN 04',
    name: 'IRIS FORGE',
    blurb: 'Magenta heat. Bloom drones and prism shards. The silk learns your name.',
    world: 'empress',
    levels: [
      themedLevel('4-1', 'BLOOM CUT', 'empress', { mid: ['coil', 'warden'], boss: 'queen', forms: 'B', roles: 'iris' }),
      themedLevel('4-2', 'PRISM GAUNTLET', 'empress', { mid: ['warden', 'coil'], boss: 'queen', forms: 'C', roles: 'iris' }),
      themedLevel('4-3', 'MAGENTA HEAT', 'empress', { mid: ['queen', 'coil'], boss: 'warden', forms: 'D', roles: 'iris' }),
      themedLevel('4-4', 'LOOM WAKE', 'empress', { mid: ['coil', 'queen'], boss: 'warden', forms: 'A', roles: 'iris' }),
      themedLevel('4-5', 'SHARD NAVE', 'empress', { mid: ['warden', 'queen'], boss: 'coil', forms: 'B', roles: 'iris' }),
      themedLevel('4-6', 'ROYAL SILK', 'empress', { mid: ['coil', 'warden'], boss: 'queen', forms: 'C', roles: 'iris' }),
      themedLevel('4-7', 'EMPRESS LOOM', 'empress', { mid: ['warden', 'coil'], boss: 'empress', forms: 'D', roles: 'iris', banner: 'super' }),
    ],
  },
  {
    id: 'heart',
    kicker: 'CAMPAIGN 05',
    name: 'HEART OF THE RIFT',
    blurb: 'The ribbon ends here. Ion lances and void wisps. Everything you fought was a door.',
    world: 'heart',
    levels: [
      themedLevel('5-1', 'LAST LIGHT', 'heart', { mid: ['queen', 'coil'], boss: 'warden', forms: 'B', roles: 'heart' }),
      themedLevel('5-2', 'CORE APPROACH', 'heart', { mid: ['empress', 'warden'], boss: 'coil', forms: 'C', roles: 'heart' }),
      themedLevel('5-3', 'VOID CHOIR', 'heart', { mid: ['coil', 'empress'], boss: 'queen', forms: 'D', roles: 'heart' }),
      themedLevel('5-4', 'ION WAKE', 'heart', { mid: ['warden', 'queen'], boss: 'empress', forms: 'A', roles: 'heart' }),
      themedLevel('5-5', 'CROWN GATE', 'heart', { mid: ['empress', 'coil'], boss: 'warden', forms: 'B', roles: 'heart' }),
      themedLevel('5-6', 'SENTINEL', 'finale', { mid: ['queen', 'warden'], boss: 'finale', forms: 'C', roles: 'heart', banner: 'finale' }),
    ],
  },
];

export function allLevels() {
  const out = [];
  CAMPAIGNS.forEach((camp, ci) => {
    camp.levels.forEach((lv, li) => out.push({ camp, ci, lv, li }));
  });
  return out;
}

export function getLevel(ci, li) {
  const camp = CAMPAIGNS[ci];
  if (!camp) return null;
  const lv = camp.levels[li];
  if (!lv) return null;
  return { camp, ci, lv, li };
}

export function nextSlot(ci, li) {
  const camp = CAMPAIGNS[ci];
  if (!camp) return null;
  if (li + 1 < camp.levels.length) return getLevel(ci, li + 1);
  if (ci + 1 < CAMPAIGNS.length) return getLevel(ci + 1, 0);
  return null;
}

export function flattenCampaigns() {
  let t = 0;
  const script = [];
  const chapters = [];
  for (const camp of CAMPAIGNS) {
    for (const lv of camp.levels) {
      const base = t;
      for (const ch of lv.chapters) chapters.push({ ...ch, at: ch.at + base });
      for (const ev of lv.script) script.push({ ...ev, at: ev.at + base });
      t = base + lv.length;
    }
  }
  return { script, chapters };
}

export const PROGRESS_KEY = 'aether-campaign';

export function emptyProgress() {
  return { nextC: 0, nextL: 0, cleared: [], best: 0 };
}

export function loadProgress() {
  try {
    const raw = JSON.parse(localStorage.getItem(PROGRESS_KEY) || 'null');
    if (!raw || typeof raw !== 'object') return emptyProgress();
    return {
      nextC: Number(raw.nextC) || 0,
      nextL: Number(raw.nextL) || 0,
      cleared: Array.isArray(raw.cleared) ? raw.cleared : [],
      best: Number(raw.best) || 0,
    };
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  return progress;
}

export function markCleared(progress, ci, li) {
  const id = `${ci}-${li}`;
  const cleared = progress.cleared.includes(id) ? progress.cleared : progress.cleared.concat(id);
  let nextC = CAMPAIGNS.length - 1;
  let nextL = CAMPAIGNS[nextC].levels.length - 1;
  outer: for (let c = 0; c < CAMPAIGNS.length; c++) {
    for (let l = 0; l < CAMPAIGNS[c].levels.length; l++) {
      if (!cleared.includes(`${c}-${l}`)) {
        nextC = c;
        nextL = l;
        break outer;
      }
    }
  }
  return {
    ...progress,
    cleared,
    nextC,
    nextL,
  };
}

export function catchupStep(ci, li) {
  const prior = CAMPAIGNS.slice(0, ci).reduce((n, c) => n + c.levels.length, 0) + li;
  return Math.min(80, prior * 3);
}

/** 1-1 is the MVP baseline (1.0). Later slots thicken hulls and fire, not script density. */
export function stageHeat(ci = 0, li = 0) {
  return 1 + Math.max(0, ci) * 0.16 + Math.max(0, li) * 0.045;
}

export function coinValue(ci = 0) {
  return 5 + Math.max(0, ci);
}
