/** Five campaigns, three levels each. Super boss on the third; Sentinel is last. */

const s = (at, form, role, n, ahead = 90) => ({ at, kind: 'squad', form, role, n, ahead });
const breath = (at) => ({ at, kind: 'breath' });
const gate = (at) => ({ at, kind: 'gate' });
const orbs = (at) => ({ at, kind: 'orbs' });
const blockers = (at, n = 2) => ({ at, kind: 'blockers', n });
const midboss = (at, id) => ({ at, kind: 'midboss', id });
const finale = (at) => ({ at, kind: 'finale' });

function level(id, name, world, script, extra = {}) {
  const last = script.reduce((m, ev) => Math.max(m, ev.at), 70);
  const boss = extra.boss || null;
  const exitAt = extra.exitAt ?? last + (boss ? 40 : 88);
  return {
    id,
    name,
    world,
    boss,
    bossWorld: extra.bossWorld || world,
    exitAt,
    length: extra.length ?? exitAt + 40,
    chapters: extra.chapters || [
      { at: 68, toast: `${id} — ${name}`, world, sting: 'chapter' },
    ],
    script,
  };
}

export const CAMPAIGNS = [
  {
    id: 'stinger',
    kicker: 'CAMPAIGN 01',
    name: 'STINGER FAN',
    blurb: 'Needle wakes. Silk in the lane. A queen at the end of the thread.',
    world: 'default',
    levels: [
      level('1-1', 'NEEDLE WAKE', 'default', [
        s(70, 'v', 'dive', 5, 88),
        s(118, 'line', 'sine', 4, 92),
        breath(160),
        s(188, 'flank', 'heavy', 2, 96),
        s(220, 'pair', 'dive', 2, 84),
      ]),
      level('1-2', 'FILAMENT CUT', 'default', [
        gate(72),
        orbs(96),
        s(128, 'cross', 'sine', 6, 100),
        blockers(168, 2),
        s(198, 'v', 'dive', 7, 90),
        breath(236),
        s(268, 'line', 'heavy', 3, 100),
      ]),
      level('1-3', 'QUEEN NEST', 'default', [
        s(70, 'escort', 'dive', 5, 94),
        breath(112),
        s(140, 'cross', 'sine', 6, 88),
        gate(178),
        s(208, 'v', 'dive', 5, 86),
        midboss(248, 'queen'),
      ], {
        boss: 'queen',
        bossWorld: 'queen',
        chapters: [
          { at: 68, toast: '1-3 — QUEEN NEST', world: 'default', sting: 'chapter' },
          { at: 248, toast: 'SUPER BOSS — WEAVER QUEEN', world: 'queen', sting: 'boss' },
        ],
      }),
    ],
  },
  {
    id: 'crimson',
    kicker: 'CAMPAIGN 02',
    name: 'CRIMSON SHOALS',
    blurb: 'The ribbon runs hot. Heavies own the flanks. A coil waits in the glare.',
    world: 'coil',
    levels: [
      level('2-1', 'EMBER DRIFT', 'coil', [
        s(70, 'line', 'dive', 6, 88),
        s(108, 'pair', 'heavy', 2, 96),
        breath(148),
        s(178, 'cross', 'sine', 5, 92),
        blockers(218, 2),
        s(248, 'v', 'dive', 5, 86),
      ]),
      level('2-2', 'SLAG GATES', 'coil', [
        gate(70),
        s(104, 'flank', 'heavy', 2, 98),
        orbs(138),
        s(168, 'escort', 'dive', 5, 94),
        breath(208),
        s(240, 'cross', 'sine', 6, 90),
        blockers(278, 3),
        s(312, 'line', 'heavy', 3, 100),
      ]),
      level('2-3', 'COIL WELL', 'coil', [
        s(70, 'v', 'dive', 6, 88),
        s(112, 'line', 'sine', 5, 92),
        breath(150),
        gate(178),
        s(208, 'flank', 'heavy', 2, 96),
        midboss(248, 'coil'),
      ], {
        boss: 'coil',
        bossWorld: 'coil',
        chapters: [
          { at: 68, toast: '2-3 — COIL WELL', world: 'coil', sting: 'chapter' },
          { at: 248, toast: 'SUPER BOSS — TITAN COIL', world: 'coil', sting: 'boss' },
        ],
      }),
    ],
  },
  {
    id: 'cathedral',
    kicker: 'CAMPAIGN 03',
    name: 'NULL CATHEDRAL',
    blurb: 'Gold hush. Crossfire aisles. The Warden keeps the nave.',
    world: 'warden',
    levels: [
      level('3-1', 'AISLE FIRE', 'warden', [
        s(70, 'cross', 'sine', 6, 90),
        s(112, 'line', 'dive', 5, 88),
        breath(152),
        s(182, 'escort', 'heavy', 4, 100),
        gate(222),
        s(252, 'v', 'dive', 6, 86),
      ]),
      level('3-2', 'NAVE LOCK', 'warden', [
        blockers(70, 3),
        s(108, 'flank', 'heavy', 2, 98),
        orbs(142),
        s(172, 'cross', 'sine', 6, 92),
        breath(212),
        gate(240),
        s(272, 'line', 'dive', 6, 90),
        s(312, 'pair', 'sine', 4, 92),
      ]),
      level('3-3', 'WARDEN KEEP', 'warden', [
        s(70, 'escort', 'dive', 5, 94),
        breath(110),
        s(140, 'cross', 'sine', 6, 96),
        blockers(180, 3),
        s(214, 'line', 'heavy', 3, 100),
        midboss(258, 'warden'),
      ], {
        boss: 'warden',
        bossWorld: 'warden',
        chapters: [
          { at: 68, toast: '3-3 — WARDEN KEEP', world: 'warden', sting: 'chapter' },
          { at: 258, toast: 'SUPER BOSS — WARDEN', world: 'warden', sting: 'boss' },
        ],
      }),
    ],
  },
  {
    id: 'iris',
    kicker: 'CAMPAIGN 04',
    name: 'IRIS FORGE',
    blurb: 'Magenta heat. The silk learns your name. An empress answers.',
    world: 'empress',
    levels: [
      level('4-1', 'BLOOM CUT', 'empress', [
        s(70, 'v', 'dive', 7, 88),
        s(114, 'cross', 'sine', 6, 92),
        breath(154),
        s(184, 'line', 'heavy', 3, 100),
        orbs(222),
        s(252, 'escort', 'dive', 5, 94),
      ]),
      level('4-2', 'PRISM GAUNTLET', 'empress', [
        gate(70),
        s(102, 'pair', 'sine', 4, 90),
        s(142, 'flank', 'heavy', 2, 98),
        breath(180),
        blockers(208, 3),
        s(242, 'cross', 'dive', 8, 90),
        gate(282),
        s(314, 'line', 'sine', 5, 94),
      ]),
      level('4-3', 'EMPRESS LOOM', 'empress', [
        s(70, 'v', 'dive', 6, 88),
        s(112, 'escort', 'heavy', 5, 100),
        breath(152),
        gate(180),
        s(212, 'cross', 'sine', 6, 96),
        midboss(252, 'empress'),
      ], {
        boss: 'empress',
        bossWorld: 'empress',
        chapters: [
          { at: 68, toast: '4-3 — EMPRESS LOOM', world: 'empress', sting: 'chapter' },
          { at: 252, toast: 'SUPER BOSS — WEAVER EMPRESS', world: 'empress', sting: 'boss' },
        ],
      }),
    ],
  },
  {
    id: 'heart',
    kicker: 'CAMPAIGN 05',
    name: 'HEART OF THE RIFT',
    blurb: 'The ribbon ends. The Sentinel does not.',
    world: 'finale',
    levels: [
      level('5-1', 'LAST LIGHT', 'finale', [
        s(70, 'line', 'dive', 6, 90),
        s(112, 'cross', 'sine', 6, 96),
        breath(152),
        s(182, 'flank', 'heavy', 2, 98),
        gate(220),
        s(250, 'v', 'dive', 7, 88),
      ]),
      level('5-2', 'CORE APPROACH', 'finale', [
        orbs(70),
        s(104, 'escort', 'heavy', 5, 100),
        s(144, 'cross', 'dive', 8, 90),
        breath(184),
        blockers(212, 3),
        gate(244),
        s(276, 'line', 'sine', 5, 94),
        s(316, 'v', 'dive', 6, 88),
      ]),
      level('5-3', 'SENTINEL', 'finale', [
        s(70, 'line', 'dive', 6, 90),
        breath(112),
        s(140, 'cross', 'sine', 6, 96),
        gate(178),
        s(208, 'escort', 'heavy', 5, 100),
        finale(252),
      ], {
        boss: 'finale',
        bossWorld: 'finale',
        chapters: [
          { at: 68, toast: '5-3 — SENTINEL', world: 'finale', sting: 'chapter' },
          { at: 252, toast: 'FINALE — SENTINEL', world: 'finale', sting: 'boss' },
        ],
      }),
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
  if (li + 1 < camp.levels.length) return { ci, li: li + 1 };
  if (ci + 1 < CAMPAIGNS.length) return { ci: ci + 1, li: 0 };
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
  const nxt = nextSlot(ci, li);
  return {
    ...progress,
    cleared,
    nextC: nxt ? nxt.ci : 0,
    nextL: nxt ? nxt.li : 0,
  };
}

export function catchupStep(ci, li) {
  return Math.min(80, (ci * 3 + li) * 7);
}
