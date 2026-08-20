/** Authored later-level sheets. 1-1 never goes through here. */

export const CONVERT_ATS = [70, 292, 348, 610, 670, 968, 1148];

export const BEATS = {
  '1-2': {
    camp: 'stinger', mids: [340, 860], boss: 1320,
    cut: [268, 330],
    extra: [
      { at: 88, kind: 'squad', form: 'silk-cut', role: 'sine', n: 8, ahead: 88 },
      { at: 524, kind: 'squad', form: 'silk-cut', role: 'sine', n: 7, ahead: 86 },
      { at: 992, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 88 },
    ],
    banner: { at: 88, toast: 'SILK CUT' },
  },
  '1-3': {
    camp: 'stinger', mids: [420, 760], boss: 1320,
    cut: [248, 490, 1072],
    extra: [
      { at: 104, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 90 },
      { at: 136, kind: 'gate' },
      { at: 534, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 88 },
    ],
  },
  '1-4': {
    camp: 'stinger', mids: [300, 900], boss: 1320,
    cut: [330, 648, 944],
    extra: [
      { at: 78, kind: 'squad', form: 'silk-cut', role: 'dive', n: 7, ahead: 84 },
      { at: 228, kind: 'blockers', n: 3 },
      { at: 1000, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 88 },
    ],
  },
  '1-5': {
    camp: 'stinger', mids: [460, 840], boss: 1320,
    cut: [210, 748, 1048],
    extra: [
      { at: 102, kind: 'squad', form: 'silk-cut', role: 'sine', n: 7, ahead: 88 },
      { at: 534, kind: 'orbs' },
      { at: 996, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 88 },
    ],
  },
  '1-6': {
    camp: 'stinger', mids: [350, 790], boss: 1400,
    cut: [1240, 1270, 268, 648],
    extra: [
      { at: 96, kind: 'squad', form: 'silk-cut', role: 'sine', n: 7, ahead: 86 },
      { at: 1256, kind: 'squad', form: 'silk-cut', role: 'sine', n: 7, ahead: 86 },
      { at: 1304, kind: 'squad', form: 'silk-cut', role: 'sine', n: 5, ahead: 88 },
      { at: 1360, kind: 'hold' },
    ],
  },
  '2-1': {
    camp: 'crimson', mids: [310, 870], boss: 1320,
    cut: [248, 330, 1072],
    extra: [
      { at: 86, kind: 'squad', form: 'curtain', role: 'cinder', n: 8, ahead: 86 },
      { at: 236, kind: 'blockers', n: 3 },
      { at: 528, kind: 'squad', form: 'curtain', role: 'cinder', n: 7, ahead: 86 },
      { at: 988, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
    ],
    banner: { at: 86, toast: 'ASH CURTAIN' },
  },
  '2-2': {
    camp: 'crimson', mids: [400, 800], boss: 1320,
    cut: [268, 648, 1190],
    extra: [
      { at: 108, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
      { at: 136, kind: 'gate' },
      { at: 1040, kind: 'gate' },
      { at: 528, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
    ],
  },
  '2-3': {
    camp: 'crimson', mids: [280, 920], boss: 1320,
    cut: [490, 710, 1048],
    extra: [
      { at: 80, kind: 'squad', form: 'curtain', role: 'dive', n: 8, ahead: 82 },
      { at: 504, kind: 'orbs' },
      { at: 996, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
    ],
  },
  '2-4': {
    camp: 'crimson', mids: [440, 780], boss: 1320,
    cut: [210, 748, 944],
    extra: [
      { at: 98, kind: 'squad', form: 'curtain', role: 'cinder', n: 7, ahead: 90 },
      { at: 236, kind: 'blockers', n: 3 },
      { at: 528, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
    ],
  },
  '2-5': {
    camp: 'crimson', mids: [360, 880], boss: 1320,
    cut: [330, 548, 1072],
    extra: [
      { at: 102, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
      { at: 236, kind: 'blockers', n: 2 },
      { at: 996, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
    ],
  },
  '2-6': {
    camp: 'crimson', mids: [330, 810], boss: 1400,
    cut: [1240, 1270, 330, 944],
    extra: [
      { at: 90, kind: 'squad', form: 'curtain', role: 'cinder', n: 8, ahead: 84 },
      { at: 1256, kind: 'squad', form: 'curtain', role: 'cinder', n: 8, ahead: 84 },
      { at: 1300, kind: 'blockers', n: 3 },
      { at: 1360, kind: 'hold' },
    ],
  },
  '3-1': {
    camp: 'cathedral', mids: [320, 850], boss: 1320,
    cut: [188, 268],
    extra: [
      { at: 88, kind: 'squad', form: 'aisle', role: 'chime', n: 4, ahead: 80 },
      { at: 108, kind: 'gate' },
      { at: 528, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 86 },
      { at: 996, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 88 },
    ],
    banner: { at: 88, toast: 'LOCKED AISLE' },
  },
  '3-2': {
    camp: 'cathedral', mids: [410, 770], boss: 1320,
    cut: [248, 648, 944],
    extra: [
      { at: 106, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 88 },
      { at: 534, kind: 'gate' },
      { at: 996, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 88 },
    ],
  },
  '3-3': {
    camp: 'cathedral', mids: [290, 910], boss: 1320,
    cut: [330, 490, 1190],
    extra: [
      { at: 82, kind: 'squad', form: 'aisle', role: 'dive', n: 6, ahead: 86 },
      { at: 504, kind: 'orbs' },
      { at: 1000, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 88 },
    ],
  },
  '3-4': {
    camp: 'cathedral', mids: [450, 830], boss: 1320,
    cut: [210, 1072],
    extra: [
      { at: 100, kind: 'squad', form: 'aisle', role: 'acolyte', n: 7, ahead: 90 },
      { at: 236, kind: 'blockers', n: 3 },
      { at: 528, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 88 },
    ],
  },
  '3-5': {
    camp: 'cathedral', mids: [370, 800], boss: 1400,
    cut: [1240, 1270, 268, 748],
    extra: [
      { at: 92, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 86 },
      { at: 1256, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 86 },
      { at: 1300, kind: 'gate' },
      { at: 1360, kind: 'hold' },
    ],
  },
  '4-1': {
    camp: 'iris', mids: [305, 865], boss: 1320,
    cut: [330, 490],
    extra: [
      { at: 90, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
      { at: 528, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
      { at: 988, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    ],
    banner: { at: 90, toast: 'IRIS SPLIT' },
  },
  '4-2': {
    camp: 'iris', mids: [415, 755], boss: 1320,
    cut: [268, 710, 1048],
    extra: [
      { at: 110, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
      { at: 136, kind: 'gate' },
      { at: 534, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    ],
  },
  '4-3': {
    camp: 'iris', mids: [275, 925], boss: 1320,
    cut: [248, 648, 944],
    extra: [
      { at: 88, kind: 'squad', form: 'split', role: 'dive', n: 8, ahead: 82 },
      { at: 504, kind: 'orbs' },
      { at: 1000, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    ],
  },
  '4-4': {
    camp: 'iris', mids: [435, 785], boss: 1320,
    cut: [210, 1072, 1190],
    extra: [
      { at: 94, kind: 'squad', form: 'split', role: 'bloom', n: 7, ahead: 90 },
      { at: 228, kind: 'blockers', n: 2 },
      { at: 528, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    ],
  },
  '4-5': {
    camp: 'iris', mids: [355, 875], boss: 1320,
    cut: [330, 748],
    extra: [
      { at: 102, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
      { at: 534, kind: 'gate' },
      { at: 996, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    ],
  },
  '4-6': {
    camp: 'iris', mids: [395, 815], boss: 1320,
    cut: [490, 548, 1048],
    extra: [
      { at: 102, kind: 'squad', form: 'split', role: 'dive', n: 6, ahead: 86 },
      { at: 534, kind: 'gate' },
      { at: 1000, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    ],
  },
  '4-7': {
    camp: 'iris', mids: [345, 805], boss: 1400,
    cut: [1240, 1270, 268, 710],
    extra: [
      { at: 88, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 86 },
      { at: 1256, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 86 },
      { at: 1304, kind: 'squad', form: 'split', role: 'bloom', n: 4, ahead: 88 },
      { at: 1360, kind: 'hold' },
    ],
  },
  '5-1': {
    camp: 'heart', mids: [315, 855], boss: 1320,
    cut: [248, 648],
    extra: [
      { at: 84, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 90 },
      { at: 136, kind: 'orbs' },
      { at: 528, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
      { at: 988, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
    ],
    banner: { at: 84, toast: 'DARK STRETCH' },
  },
  '5-2': {
    camp: 'heart', mids: [405, 775], boss: 1320,
    cut: [268, 330, 1190],
    extra: [
      { at: 108, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
      { at: 236, kind: 'blockers', n: 2 },
      { at: 534, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
    ],
  },
  '5-3': {
    camp: 'heart', mids: [285, 915], boss: 1320,
    cut: [210, 944, 1072],
    extra: [
      { at: 80, kind: 'squad', form: 'dark', role: 'dive', n: 7, ahead: 84 },
      { at: 136, kind: 'gate' },
      { at: 1000, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
    ],
  },
  '5-4': {
    camp: 'heart', mids: [445, 825], boss: 1320,
    cut: [490, 748],
    extra: [
      { at: 96, kind: 'squad', form: 'dark', role: 'ion', n: 7, ahead: 90 },
      { at: 504, kind: 'orbs' },
      { at: 528, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
    ],
  },
  '5-5': {
    camp: 'heart', mids: [365, 885], boss: 1320,
    cut: [330, 548, 1048],
    extra: [
      { at: 102, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
      { at: 136, kind: 'gate' },
      { at: 996, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
    ],
  },
  '5-6': {
    camp: 'heart', mids: [375, 795], boss: 1400,
    cut: [1240, 1270, 268, 1072],
    extra: [
      { at: 86, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 86 },
      { at: 1256, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 86 },
      { at: 1304, kind: 'orbs' },
      { at: 1360, kind: 'hold' },
    ],
  },
};

const LOCKED = new Set(['midboss', 'boss', 'finale']);

export function authorScript(base, sheet) {
  let out = base.map((e) => ({ ...e }));
  for (const at of sheet.cut || []) {
    out = out.filter((e) => !(e.at === at && !LOCKED.has(e.kind)));
  }
  for (const at of CONVERT_ATS) {
    const ev = out.find((e) => e.at === at && e.kind === 'squad');
    if (ev) ev.form = sheet.sig;
  }
  const mids = out.filter((e) => e.kind === 'midboss');
  if (sheet.mids?.[0] != null && mids[0]) mids[0].at = sheet.mids[0];
  if (sheet.mids?.[1] != null && mids[1]) mids[1].at = sheet.mids[1];
  const bossEv = out.find((e) => e.kind === 'finale' || e.kind === 'boss');
  if (sheet.boss != null && bossEv) bossEv.at = sheet.boss;
  const eliteAts = out.filter((e) => LOCKED.has(e.kind)).map((e) => e.at);
  out = out.filter((e) => LOCKED.has(e.kind) || eliteAts.every((at) => Math.abs(e.at - at) >= 26));
  for (const ev of sheet.extra || []) out.push({ ...ev });
  out.sort((a, b) => a.at - b.at);
  return out;
}
