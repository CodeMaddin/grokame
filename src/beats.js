/** Campaign scripts for later levels. 1-1 never goes through here. */

export const CAMPAIGN_SCRIPTS = {
  stinger: [
    { at: 88, kind: 'squad', form: 'silk-cut', role: 'sine', n: 8, ahead: 88 },
    { at: 112, kind: 'gate' },
    { at: 148, kind: 'breath' },
    { at: 188, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 86 },
    { at: 228, kind: 'blockers', n: 2 },
    { at: 268, kind: 'squad', form: 'silk-cut', role: 'dive', n: 6, ahead: 84 },
    { at: 310, kind: 'squad', form: 'flank', role: 'heavy', n: 2, ahead: 96 },
    { at: 360, kind: 'breath' },
    { at: 400, kind: 'squad', form: 'silk-cut', role: 'sine', n: 7, ahead: 88 },
    { at: 448, kind: 'orbs' },
    { at: 500, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 86 },
    { at: 548, kind: 'gate' },
    { at: 600, kind: 'squad', form: 'pair', role: 'dive', n: 4, ahead: 84 },
    { at: 660, kind: 'squad', form: 'silk-cut', role: 'sine', n: 7, ahead: 88 },
    { at: 720, kind: 'breath' },
    { at: 780, kind: 'squad', form: 'escort', role: 'heavy', n: 3, ahead: 96 },
    { at: 840, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 86 },
    { at: 900, kind: 'orbs' },
    { at: 960, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 88 },
    { at: 1020, kind: 'gate' },
    { at: 1080, kind: 'squad', form: 'silk-cut', role: 'dive', n: 6, ahead: 84 },
    { at: 1140, kind: 'squad', form: 'pair', role: 'sine', n: 4, ahead: 86 },
    { at: 1188, kind: 'squad', form: 'silk-cut', role: 'sine', n: 6, ahead: 86 },
    { at: 1228, kind: 'gate' },
    { at: 1288, kind: 'squad', form: 'silk-cut', role: 'sine', n: 5, ahead: 88 },
  ],
  crimson: [
    { at: 86, kind: 'squad', form: 'curtain', role: 'cinder', n: 8, ahead: 86 },
    { at: 118, kind: 'blockers', n: 3 },
    { at: 170, kind: 'breath' },
    { at: 214, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 86 },
    { at: 258, kind: 'gate' },
    { at: 304, kind: 'squad', form: 'curtain', role: 'dive', n: 6, ahead: 84 },
    { at: 352, kind: 'squad', form: 'flank', role: 'slag', n: 2, ahead: 96 },
    { at: 510, kind: 'breath' },
    { at: 554, kind: 'squad', form: 'curtain', role: 'cinder', n: 7, ahead: 86 },
    { at: 600, kind: 'orbs' },
    { at: 648, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
    { at: 700, kind: 'blockers', n: 2 },
    { at: 748, kind: 'squad', form: 'pair', role: 'dive', n: 4, ahead: 84 },
    { at: 800, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 86 },
    { at: 860, kind: 'breath' },
    { at: 980, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 88 },
    { at: 1036, kind: 'orbs' },
    { at: 1088, kind: 'squad', form: 'escort', role: 'slag', n: 3, ahead: 96 },
    { at: 1140, kind: 'squad', form: 'curtain', role: 'cinder', n: 6, ahead: 86 },
    { at: 1176, kind: 'squad', form: 'curtain', role: 'cinder', n: 7, ahead: 84 },
    { at: 1216, kind: 'blockers', n: 3 },
    { at: 1276, kind: 'squad', form: 'curtain', role: 'cinder', n: 5, ahead: 86 },
  ],
  cathedral: [
    { at: 88, kind: 'squad', form: 'aisle', role: 'chime', n: 4, ahead: 80 },
    { at: 108, kind: 'gate' },
    { at: 132, kind: 'breath' },
    { at: 180, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 86 },
    { at: 228, kind: 'gate' },
    { at: 276, kind: 'squad', form: 'aisle', role: 'dive', n: 6, ahead: 84 },
    { at: 328, kind: 'squad', form: 'line', role: 'chime', n: 3, ahead: 92 },
    { at: 448, kind: 'breath' },
    { at: 492, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 86 },
    { at: 540, kind: 'orbs' },
    { at: 588, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 88 },
    { at: 640, kind: 'gate' },
    { at: 688, kind: 'squad', form: 'pair', role: 'dive', n: 4, ahead: 84 },
    { at: 736, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 86 },
    { at: 780, kind: 'breath' },
    { at: 900, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 88 },
    { at: 952, kind: 'gate' },
    { at: 1004, kind: 'squad', form: 'escort', role: 'chime', n: 3, ahead: 94 },
    { at: 1060, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 86 },
    { at: 1112, kind: 'orbs' },
    { at: 1168, kind: 'squad', form: 'aisle', role: 'acolyte', n: 6, ahead: 86 },
    { at: 1210, kind: 'gate' },
    { at: 1268, kind: 'squad', form: 'aisle', role: 'acolyte', n: 5, ahead: 88 },
  ],
  iris: [
    { at: 90, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    { at: 122, kind: 'orbs' },
    { at: 154, kind: 'breath' },
    { at: 200, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 86 },
    { at: 248, kind: 'gate' },
    { at: 296, kind: 'squad', form: 'split', role: 'dive', n: 6, ahead: 84 },
    { at: 344, kind: 'squad', form: 'flank', role: 'prism', n: 2, ahead: 96 },
    { at: 488, kind: 'breath' },
    { at: 532, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    { at: 580, kind: 'blockers', n: 2 },
    { at: 628, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 86 },
    { at: 680, kind: 'orbs' },
    { at: 728, kind: 'squad', form: 'pair', role: 'dive', n: 4, ahead: 84 },
    { at: 776, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 88 },
    { at: 840, kind: 'breath' },
    { at: 960, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 86 },
    { at: 1012, kind: 'gate' },
    { at: 1064, kind: 'squad', form: 'escort', role: 'prism', n: 3, ahead: 94 },
    { at: 1116, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 86 },
    { at: 1180, kind: 'squad', form: 'split', role: 'bloom', n: 6, ahead: 86 },
    { at: 1220, kind: 'orbs' },
    { at: 1280, kind: 'squad', form: 'split', role: 'bloom', n: 5, ahead: 88 },
  ],
  heart: [
    { at: 84, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 90 },
    { at: 116, kind: 'orbs' },
    { at: 140, kind: 'breath' },
    { at: 188, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 86 },
    { at: 236, kind: 'gate' },
    { at: 284, kind: 'squad', form: 'dark', role: 'dive', n: 7, ahead: 84 },
    { at: 336, kind: 'squad', form: 'line', role: 'wisp', n: 3, ahead: 92 },
    { at: 520, kind: 'breath' },
    { at: 564, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
    { at: 612, kind: 'orbs' },
    { at: 660, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 86 },
    { at: 712, kind: 'blockers', n: 2 },
    { at: 760, kind: 'squad', form: 'pair', role: 'dive', n: 4, ahead: 84 },
    { at: 800, kind: 'breath' },
    { at: 920, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 88 },
    { at: 972, kind: 'orbs' },
    { at: 1024, kind: 'squad', form: 'escort', role: 'wisp', n: 3, ahead: 94 },
    { at: 1076, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 86 },
    { at: 1128, kind: 'gate' },
    { at: 1172, kind: 'squad', form: 'dark', role: 'ion', n: 6, ahead: 86 },
    { at: 1214, kind: 'orbs' },
    { at: 1272, kind: 'squad', form: 'dark', role: 'ion', n: 5, ahead: 88 },
  ],
};

const LOCKED = new Set(['midboss', 'boss', 'finale']);

export const BEATS = {
  '1-2': { camp: 'stinger', mids: [340, 820], midIds: ['coil', 'empress'], boss: 1320, bossId: 'queen', banner: { at: 88, toast: 'SILK CUT' } },
  '1-3': { camp: 'stinger', mids: [420, 760], midIds: ['empress', 'coil'], boss: 1320, bossId: 'warden', cut: [228], extra: [{ at: 228, kind: 'orbs' }] },
  '1-4': { camp: 'stinger', mids: [300, 880], midIds: ['warden', 'queen'], boss: 1320, bossId: 'coil', ending: { at: [1176, 1236, 1296], kinds: ['squad', 'blockers', 'squad'] } },
  '1-5': { camp: 'stinger', mids: [460, 840], midIds: ['coil', 'warden'], boss: 1320, bossId: 'empress', extra: [{ at: 132, kind: 'blockers', n: 2 }] },
  '1-6': { camp: 'stinger', mids: [350, 790], midIds: ['warden', 'coil'], boss: 1400, bossId: 'queen', super: true },
  '2-1': { camp: 'crimson', mids: [390, 870], midIds: ['queen', 'empress'], boss: 1320, bossId: 'coil', banner: { at: 86, toast: 'ASH CURTAIN' } },
  '2-2': { camp: 'crimson', mids: [410, 800], midIds: ['warden', 'queen'], boss: 1320, bossId: 'empress', extra: [{ at: 148, kind: 'gate' }] },
  '2-3': { camp: 'crimson', mids: [280, 930], midIds: ['empress', 'warden'], boss: 1320, bossId: 'queen', extra: [{ at: 430, kind: 'orbs' }] },
  '2-4': { camp: 'crimson', mids: [450, 780], midIds: ['coil', 'queen'], boss: 1320, bossId: 'warden', ending: { at: [1168, 1224, 1284], kinds: ['squad', 'gate', 'squad'] } },
  '2-5': { camp: 'crimson', mids: [360, 890], midIds: ['empress', 'coil'], boss: 1320, bossId: 'queen', extra: [{ at: 430, kind: 'gate' }] },
  '2-6': { camp: 'crimson', mids: [330, 810], midIds: ['warden', 'empress'], boss: 1400, bossId: 'coil', super: true },
  '3-1': { camp: 'cathedral', mids: [380, 850], midIds: ['coil', 'queen'], boss: 1320, bossId: 'empress', banner: { at: 88, toast: 'LOCKED AISLE' } },
  '3-2': { camp: 'cathedral', mids: [410, 770], midIds: ['empress', 'coil'], boss: 1320, bossId: 'queen', extra: [{ at: 616, kind: 'orbs' }] },
  '3-3': { camp: 'cathedral', mids: [300, 910], midIds: ['queen', 'coil'], boss: 1320, bossId: 'empress', extra: [{ at: 400, kind: 'blockers', n: 2 }] },
  '3-4': { camp: 'cathedral', mids: [450, 830], midIds: ['coil', 'empress'], boss: 1320, bossId: 'queen', ending: { at: [1156, 1200, 1260], kinds: ['squad', 'orbs', 'squad'] } },
  '3-5': { camp: 'cathedral', mids: [370, 800], midIds: ['queen', 'empress'], boss: 1400, bossId: 'warden', super: true },
  '4-1': { camp: 'iris', mids: [370, 865], midIds: ['coil', 'warden'], boss: 1320, bossId: 'queen', banner: { at: 90, toast: 'IRIS SPLIT' } },
  '4-2': { camp: 'iris', mids: [415, 755], midIds: ['warden', 'coil'], boss: 1320, bossId: 'queen', extra: [{ at: 176, kind: 'gate' }] },
  '4-3': { camp: 'iris', mids: [290, 925], midIds: ['queen', 'coil'], boss: 1320, bossId: 'warden', extra: [{ at: 430, kind: 'blockers', n: 2 }] },
  '4-4': { camp: 'iris', mids: [440, 785], midIds: ['coil', 'queen'], boss: 1320, bossId: 'warden', ending: { at: [1164, 1212, 1272], kinds: ['squad', 'gate', 'squad'] } },
  '4-5': { camp: 'iris', mids: [355, 875], midIds: ['warden', 'queen'], boss: 1320, bossId: 'coil', extra: [{ at: 430, kind: 'gate' }] },
  '4-6': { camp: 'iris', mids: [395, 815], midIds: ['coil', 'warden'], boss: 1320, bossId: 'queen', extra: [{ at: 460, kind: 'blockers', n: 2 }] },
  '4-7': { camp: 'iris', mids: [345, 805], midIds: ['warden', 'coil'], boss: 1400, bossId: 'empress', super: true },
  '5-1': { camp: 'heart', mids: [380, 855], midIds: ['queen', 'coil'], boss: 1320, bossId: 'warden', banner: { at: 84, toast: 'DARK STRETCH' } },
  '5-2': { camp: 'heart', mids: [405, 775], midIds: ['empress', 'warden'], boss: 1320, bossId: 'coil', extra: [{ at: 168, kind: 'gate' }] },
  '5-3': { camp: 'heart', mids: [300, 915], midIds: ['coil', 'empress'], boss: 1320, bossId: 'queen', extra: [{ at: 400, kind: 'blockers', n: 2 }] },
  '5-4': { camp: 'heart', mids: [445, 825], midIds: ['warden', 'queen'], boss: 1320, bossId: 'empress', ending: { at: [1160, 1208, 1264], kinds: ['squad', 'gate', 'squad'] } },
  '5-5': { camp: 'heart', mids: [365, 885], midIds: ['empress', 'coil'], boss: 1320, bossId: 'warden', extra: [{ at: 400, kind: 'gate' }] },
  '5-6': { camp: 'heart', mids: [375, 795], midIds: ['queen', 'warden'], boss: 1400, bossId: 'finale', super: true },
};

function sigForm(camp) {
  return { stinger: 'silk-cut', crimson: 'curtain', cathedral: 'aisle', iris: 'split', heart: 'dark' }[camp];
}

function sigRole(camp) {
  return { stinger: 'sine', crimson: 'cinder', cathedral: 'acolyte', iris: 'bloom', heart: 'ion' }[camp];
}

function insertMids(script, sheet) {
  script.push({ at: sheet.mids[0], kind: 'midboss', id: sheet.midIds[0] });
  script.push({ at: sheet.mids[1], kind: 'midboss', id: sheet.midIds[1] });
}

function insertBoss(script, sheet) {
  if (sheet.bossId === 'finale') script.push({ at: sheet.boss, kind: 'finale' });
  else script.push({ at: sheet.boss, kind: 'boss', id: sheet.bossId });
}

function applyEnding(script, sheet) {
  const camp = sheet.camp;
  const form = sigForm(camp);
  const role = sigRole(camp);
  if (sheet.ending) {
    const [a, b, c] = sheet.ending.at;
    const [ka, kb, kc] = sheet.ending.kinds;
    const mk = (kind, at) => {
      if (kind === 'squad') return { at, kind, form, role, n: 6, ahead: 86 };
      if (kind === 'blockers') return { at, kind, n: 2 };
      if (kind === 'orbs') return { at, kind };
      return { at, kind };
    };
    script.push(mk(ka, a), mk(kb, b), mk(kc, c));
    return;
  }
  // Keep campaign-script endings already in the base (ats < 1300).
}

function applySuperAisle(script, sheet) {
  const form = sigForm(sheet.camp);
  const role = sigRole(sheet.camp);
  script.push({ at: 1188, kind: 'squad', form, role, n: 6, ahead: 86 });
  script.push({ at: 1360, kind: 'hold' });
}

export function authorScript(campId, sheet) {
  let out = (CAMPAIGN_SCRIPTS[campId] || []).map((e) => ({ ...e }));
  for (const at of sheet.cut || []) {
    out = out.filter((e) => e.at !== at);
  }
  if (sheet.super) {
    out = out.filter((e) => e.at < 1160);
    applySuperAisle(out, sheet);
  } else if (sheet.ending) {
    out = out.filter((e) => e.at < 1160);
    applyEnding(out, sheet);
  }
  for (const ev of sheet.extra || []) out.push({ ...ev });
  const eliteAts = [...(sheet.mids || []), sheet.boss];
  out = out.filter((e) => eliteAts.every((at) => Math.abs(e.at - at) >= 26));
  insertMids(out, sheet);
  insertBoss(out, sheet);
  out.sort((a, b) => a.at - b.at || (LOCKED.has(b.kind) ? 1 : 0) - (LOCKED.has(a.kind) ? 1 : 0));
  return out;
}

export { LOCKED };
