/** Five themed campaigns. 1-1 is the original MVP run, uncut. */

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

export { SIG, SCRIPT_OVERLAYS };

/** Later levels keep 1-1's grammar, not 1-1's clock. */
const SCRIPT_OVERLAYS = {
  '1-2': { clock: { mids: [340, 860], boss: 1320 }, move: { 188: 96, 210: 148, 348: 228, 512: 548, 670: 704, 968: 1008, 1270: 1188 }, form: { 70: 'silk-cut', 348: 'silk-cut' }, extra: [{ at: 92, kind: 'squad', form: 'silk-cut', role: 'sine', n: 8, ahead: 88 }], banner: { at: 92, toast: 'SILK CUT' } },
  '1-3': { clock: { mids: [420, 760], boss: 1320 }, move: { 118: 102, 188: 248, 292: 318, 572: 620, 710: 688, 1100: 1144, 1270: 1228 }, form: { 292: 'cross', 1148: 'escort' }, extra: [{ at: 104, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 90 }] },
  '1-4': { clock: { mids: [300, 900], boss: 1320 }, move: { 188: 168, 210: 236, 348: 268, 512: 500, 780: 848, 1010: 980, 1190: 1160 }, form: { 70: 'flank', 968: 'v' }, extra: [{ at: 78, kind: 'squad', form: 'silk-cut', role: 'dive', n: 7, ahead: 84 }] },
  '1-5': { clock: { mids: [460, 840], boss: 1320 }, move: { 188: 214, 330: 300, 512: 400, 648: 600, 968: 920, 1100: 1080, 1240: 1208 }, form: { 572: 'escort', 1100: 'cross' }, extra: [{ at: 112, kind: 'squad', form: 'silk-cut', role: 'sine', n: 7, ahead: 88 }] },
  '1-6': { clock: { mids: [350, 790], boss: 1400 }, move: { 188: 130, 348: 248, 572: 520, 710: 680, 968: 930, 1148: 1108 }, form: { 70: 'silk-cut' }, extra: [{ at: 1248, kind: 'squad', form: 'judgment', role: 'sine', n: 7, ahead: 86 }, { at: 1288, kind: 'squad', form: 'judgment', role: 'heavy', n: 3, ahead: 92 }, { at: 1348, kind: 'gate' }] },
  '2-1': { clock: { mids: [310, 870], boss: 1320 }, move: { 188: 150, 210: 228, 348: 268, 512: 540, 780: 740, 1100: 1136 }, form: { 70: 'curtain', 292: 'curtain' }, extra: [{ at: 86, kind: 'squad', form: 'curtain', role: 'cinder', n: 8, ahead: 86 }], banner: { at: 86, toast: 'ASH CURTAIN' } },
  '2-2': { clock: { mids: [400, 800], boss: 1320 }, move: { 118: 96, 248: 220, 330: 280, 572: 610, 710: 748, 1010: 1040, 1240: 1210 }, form: { 248: 'line', 1072: 'flank' }, extra: [{ at: 108, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 }, { at: 118, kind: 'gate' }] },
  '2-3': { clock: { mids: [280, 920], boss: 1320 }, move: { 188: 168, 210: 236, 348: 252, 512: 480, 670: 640, 968: 1000, 1190: 1168 }, form: { 70: 'v', 968: 'curtain' }, extra: [{ at: 80, kind: 'squad', form: 'curtain', role: 'dive', n: 8, ahead: 82 }] },
  '2-4': { clock: { mids: [440, 780], boss: 1320 }, move: { 188: 206, 292: 260, 348: 318, 610: 580, 780: 720, 1100: 1068, 1270: 1236 }, form: { 512: 'escort', 1148: 'line' }, extra: [{ at: 98, kind: 'squad', form: 'curtain', role: 'cinder', n: 7, ahead: 90 }] },
  '2-5': { clock: { mids: [360, 880], boss: 1320 }, move: { 210: 178, 330: 248, 512: 500, 648: 620, 968: 940, 1148: 1116, 1240: 1200 }, form: { 70: 'curtain', 780: 'flank' }, extra: [{ at: 114, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 }] },
  '2-6': { clock: { mids: [330, 810], boss: 1400 }, move: { 188: 140, 348: 240, 572: 530, 710: 690, 968: 944, 1190: 1150 }, form: { 70: 'curtain' }, extra: [{ at: 1248, kind: 'squad', form: 'judgment', role: 'cinder', n: 8, ahead: 84 }, { at: 1288, kind: 'squad', form: 'judgment', role: 'slag', n: 3, ahead: 90 }, { at: 1348, kind: 'gate' }] },
  '3-1': { clock: { mids: [320, 850], boss: 1320 }, move: { 188: 156, 210: 234, 348: 268, 512: 536, 748: 720, 1100: 1130 }, form: { 70: 'aisle', 248: 'aisle' }, extra: [{ at: 88, kind: 'squad', form: 'aisle', role: 'chime', n: 4, ahead: 80 }, { at: 96, kind: 'gate' }], banner: { at: 88, toast: 'LOCKED AISLE' } },
  '3-2': { clock: { mids: [410, 770], boss: 1320 }, move: { 118: 100, 292: 250, 330: 288, 572: 600, 710: 738, 1010: 1044, 1240: 1216 }, form: { 292: 'aisle', 1048: 'line' }, extra: [{ at: 106, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 88 }] },
  '3-3': { clock: { mids: [290, 910], boss: 1320 }, move: { 188: 170, 210: 238, 348: 256, 512: 488, 670: 644, 968: 996, 1190: 1164 }, form: { 70: 'cross', 968: 'aisle' }, extra: [{ at: 82, kind: 'squad', form: 'aisle', role: 'dive', n: 6, ahead: 86 }, { at: 248, kind: 'gate' }] },
  '3-4': { clock: { mids: [450, 830], boss: 1320 }, move: { 188: 208, 292: 264, 348: 316, 610: 576, 780: 744, 1100: 1072, 1270: 1232 }, form: { 512: 'escort', 1148: 'aisle' }, extra: [{ at: 100, kind: 'squad', form: 'aisle', role: 'acolyte', n: 7, ahead: 90 }] },
  '3-5': { clock: { mids: [370, 800], boss: 1400 }, move: { 188: 136, 348: 244, 572: 528, 710: 684, 968: 936, 1190: 1148 }, form: { 70: 'aisle' }, extra: [{ at: 1248, kind: 'squad', form: 'judgment', role: 'acolyte', n: 7, ahead: 86 }, { at: 1288, kind: 'squad', form: 'judgment', role: 'chime', n: 3, ahead: 92 }, { at: 1348, kind: 'gate' }] },
  '4-1': { clock: { mids: [305, 865], boss: 1320 }, move: { 188: 152, 210: 230, 348: 270, 512: 544, 780: 736, 1100: 1134 }, form: { 70: 'split', 292: 'split' }, extra: [{ at: 90, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 }], banner: { at: 90, toast: 'IRIS SPLIT' } },
  '4-2': { clock: { mids: [415, 755], boss: 1320 }, move: { 118: 98, 248: 218, 330: 282, 572: 608, 710: 742, 1010: 1036, 1240: 1212 }, form: { 248: 'flank', 1072: 'split' }, extra: [{ at: 110, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 }] },
  '4-3': { clock: { mids: [275, 925], boss: 1320 }, move: { 188: 166, 210: 234, 348: 250, 512: 476, 670: 636, 968: 1002, 1190: 1170 }, form: { 70: 'v', 968: 'split' }, extra: [{ at: 76, kind: 'squad', form: 'split', role: 'dive', n: 8, ahead: 82 }] },
  '4-4': { clock: { mids: [435, 785], boss: 1320 }, move: { 188: 204, 292: 258, 348: 320, 610: 582, 780: 718, 1100: 1064, 1270: 1238 }, form: { 512: 'escort', 1148: 'line' }, extra: [{ at: 94, kind: 'squad', form: 'split', role: 'bloom', n: 7, ahead: 90 }] },
  '4-5': { clock: { mids: [355, 875], boss: 1320 }, move: { 210: 176, 330: 246, 512: 498, 648: 618, 968: 938, 1148: 1112, 1240: 1198 }, form: { 70: 'split', 780: 'cross' }, extra: [{ at: 116, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 }] },
  '4-6': { clock: { mids: [395, 815], boss: 1320 }, move: { 188: 160, 292: 270, 512: 470, 670: 700, 968: 952, 1148: 1176, 1270: 1220 }, form: { 348: 'split', 1100: 'escort' }, extra: [{ at: 102, kind: 'squad', form: 'split', role: 'dive', n: 6, ahead: 86 }] },
  '4-7': { clock: { mids: [345, 805], boss: 1400 }, move: { 188: 134, 348: 242, 572: 524, 710: 686, 968: 934, 1190: 1152 }, form: { 70: 'split' }, extra: [{ at: 1248, kind: 'squad', form: 'judgment', role: 'bloom', n: 7, ahead: 86 }, { at: 1288, kind: 'squad', form: 'judgment', role: 'prism', n: 3, ahead: 92 }, { at: 1348, kind: 'gate' }] },
  '5-1': { clock: { mids: [315, 855], boss: 1320 }, move: { 188: 154, 210: 232, 348: 266, 512: 538, 748: 722, 1100: 1128 }, form: { 70: 'dark', 292: 'dark' }, extra: [{ at: 84, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 90 }, { at: 100, kind: 'orbs' }], banner: { at: 84, toast: 'DARK STRETCH' } },
  '5-2': { clock: { mids: [405, 775], boss: 1320 }, move: { 118: 94, 248: 216, 330: 284, 572: 604, 710: 736, 1010: 1042, 1240: 1214 }, form: { 248: 'line', 1072: 'dark' }, extra: [{ at: 108, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 }] },
  '5-3': { clock: { mids: [285, 915], boss: 1320 }, move: { 188: 164, 210: 232, 348: 254, 512: 482, 670: 638, 968: 998, 1190: 1166 }, form: { 70: 'cross', 968: 'dark' }, extra: [{ at: 80, kind: 'squad', form: 'dark', role: 'dive', n: 7, ahead: 84 }] },
  '5-4': { clock: { mids: [445, 825], boss: 1320 }, move: { 188: 210, 292: 262, 348: 314, 610: 574, 780: 742, 1100: 1070, 1270: 1230 }, form: { 512: 'escort', 1148: 'dark' }, extra: [{ at: 96, kind: 'squad', form: 'dark', role: 'ion', n: 7, ahead: 90 }] },
  '5-5': { clock: { mids: [365, 885], boss: 1320 }, move: { 210: 180, 330: 250, 512: 496, 648: 622, 968: 942, 1148: 1118, 1240: 1202 }, form: { 70: 'dark', 780: 'flank' }, extra: [{ at: 118, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 }] },
  '5-6': { clock: { mids: [375, 795], boss: 1400 }, move: { 188: 138, 348: 246, 572: 526, 710: 682, 968: 938, 1190: 1146 }, form: { 70: 'dark' }, extra: [{ at: 1248, kind: 'squad', form: 'judgment', role: 'ion', n: 7, ahead: 86 }, { at: 1288, kind: 'squad', form: 'judgment', role: 'wisp', n: 3, ahead: 92 }, { at: 1348, kind: 'gate' }] },
};

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

export function overlayScript(script, overlay = {}) {
  const out = script.map((e) => ({ ...e }));
  if (overlay.form) {
    for (const [at, form] of Object.entries(overlay.form)) {
      const ev = out.find((e) => e.at === Number(at) && e.kind === 'squad');
      if (ev) ev.form = form;
    }
  }
  if (overlay.n) {
    for (const [at, n] of Object.entries(overlay.n)) {
      const ev = out.find((e) => e.at === Number(at) && e.kind === 'squad');
      if (ev) ev.n = n;
    }
  }
  if (overlay.cut) {
    for (const at of overlay.cut) {
      const i = out.findIndex((e) => e.at === at && e.kind !== 'midboss' && e.kind !== 'boss' && e.kind !== 'finale');
      if (i >= 0) out.splice(i, 1);
    }
  }
  if (overlay.move) {
    for (const [from, to] of Object.entries(overlay.move)) {
      const ev = out.find((e) => e.at === Number(from));
      if (ev) ev.at = to;
    }
  }
  if (overlay.clock) {
    const mids = out.filter((e) => e.kind === 'midboss');
    if (mids[0] && overlay.clock.mids?.[0] != null) mids[0].at = overlay.clock.mids[0];
    if (mids[1] && overlay.clock.mids?.[1] != null) mids[1].at = overlay.clock.mids[1];
    const bossEv = out.find((e) => e.kind === 'finale' || e.kind === 'boss');
    if (bossEv && overlay.clock.boss != null) bossEv.at = overlay.clock.boss;
  }
  if (overlay.extra) {
    for (const ev of overlay.extra) out.push({ ...ev });
  }
  return settleScript(out);
}

function settleScript(script) {
  const out = script.map((e) => ({ ...e }));
  const locked = new Set(['midboss', 'boss', 'finale']);
  for (const elite of out.filter((e) => locked.has(e.kind))) {
    for (const e of out) {
      if (locked.has(e.kind)) continue;
      if (Math.abs(e.at - elite.at) < 26) e.at = e.at <= elite.at ? elite.at - 26 : elite.at + 26;
    }
  }
  out.sort((a, b) => a.at - b.at || (locked.has(b.kind) ? 1 : 0) - (locked.has(a.kind) ? 1 : 0));
  for (let i = 0; i < out.length; i++) {
    if (locked.has(out[i].kind)) continue;
    const prev = out[i - 1];
    const next = out[i + 1];
    if (prev && out[i].at < prev.at + 8) out[i].at = locked.has(prev.kind) ? prev.at + 26 : prev.at + 8;
    if (next && locked.has(next.kind) && next.at - out[i].at < 26) out[i].at = next.at - 26;
  }
  for (const b of out.filter((e) => e.kind === 'breath')) {
    const nearLock = out.find((e) => locked.has(e.kind) && Math.abs(e.at - b.at) < 36);
    if (nearLock) b.at = nearLock.at - 44;
    for (const e of out) {
      if (e === b || locked.has(e.kind)) continue;
      if (e.kind === 'squad' && e.at < b.at && b.at - e.at < 12) e.at = b.at - 16;
      if (e.at > b.at && e.at - b.at < 18) e.at = b.at + 20;
    }
  }
  out.sort((a, b) => a.at - b.at);
  return out;
}

function chaptersFor(id, name, world, mid, boss, banner, clock = {}) {
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
  if (superBoss || finale) {
    chapters.splice(3, 0, { at: 1248, toast: 'LAST AISLE', world, sting: 'chapter' });
  }
  return chapters;
}

function themedLevel(id, name, world, spec) {
  const mid = spec.mid;
  const boss = spec.boss;
  const overlay = SCRIPT_OVERLAYS[id] || {};
  const long = spec.banner === 'super' || spec.banner === 'finale';
  const clock = overlay.clock || { mids: [380, 820], boss: long ? 1400 : 1320 };
  const script = overlayScript(remapMvp({
    mid,
    boss,
    formOf: FORMS[spec.forms] || FORMS.A,
    roleOf: ROLES[spec.roles] || ROLES.stinger,
  }), overlay);
  const chapters = chaptersFor(id, name, world, mid, boss, spec.banner, clock);
  if (overlay.banner) {
    chapters.splice(1, 0, { at: overlay.banner.at, toast: overlay.banner.toast, world, sting: 'chapter' });
  }
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
    world: 'finale',
    levels: [
      themedLevel('5-1', 'LAST LIGHT', 'finale', { mid: ['queen', 'coil'], boss: 'warden', forms: 'B', roles: 'heart' }),
      themedLevel('5-2', 'CORE APPROACH', 'finale', { mid: ['empress', 'warden'], boss: 'coil', forms: 'C', roles: 'heart' }),
      themedLevel('5-3', 'VOID CHOIR', 'finale', { mid: ['coil', 'empress'], boss: 'queen', forms: 'D', roles: 'heart' }),
      themedLevel('5-4', 'ION WAKE', 'finale', { mid: ['warden', 'queen'], boss: 'empress', forms: 'A', roles: 'heart' }),
      themedLevel('5-5', 'CROWN GATE', 'finale', { mid: ['empress', 'coil'], boss: 'warden', forms: 'B', roles: 'heart' }),
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
