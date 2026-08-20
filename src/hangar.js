/** Permanent shipyard installs. In-run motes only charge systems you already bought. */

import { MODULES, MODULE_ORDER, starterLoadout, emptyLevels } from './weapons.js';

export const HANGAR_KEY = 'aether-hangar';

export const CATALOG = {
  spark: {
    title: 'PARTICLE BLASTERS',
    blurb: 'The trickle. Forward guns. They never fan wide. Everything else is a different job.',
    unlock: 0,
  },
  tractor: {
    title: 'TRACTOR WELL',
    blurb: 'A belly well that drinks gold and powerups. This bay is range — how far the sip starts. Force is a different install. Mark 1 only tugs what you almost touch.',
    unlock: 200,
  },
  pull: {
    title: 'TRACTOR FORCE',
    blurb: 'How hard the well yanks. Logarithmic: fat near the hull, a whisper at the rim. Without the well you still have to be on top of the loot.',
    unlock: 260,
  },
  needle: {
    title: 'NEEDLE LASERS',
    blurb: 'Kills the brick. Thin lances that stay on a fat hull. Buy them for heavies, not for dives.',
    unlock: 240,
  },
  seeker: {
    title: 'HOMING MISSILES',
    blurb: 'Heat-seekers on the racks. They turn. You buy the rack before they exist.',
    unlock: 380,
  },
  shard: {
    title: 'CRYSTAL SHARDS',
    blurb: 'Splinter fire from the nose. Cheap, vicious, and locked until you pay for the cutter.',
    unlock: 400,
  },
  titan: {
    title: 'TITAN CANNON',
    blurb: 'The boss tooth. A door slam in the belly. You feel the kick. The Queen does too.',
    unlock: 580,
  },
  wing: {
    title: 'WING FILAMENTS',
    blurb: 'Owns the flanks. Angled guns so the center can stay honest.',
    unlock: 480,
  },
  helix: {
    title: 'HELIX RIBBON',
    blurb: 'Twinned oscillating streams. The coils have to be fitted before they sing.',
    unlock: 460,
  },
  drone: {
    title: 'RIFT DRONES',
    blurb: 'Orbiting guns that fly your formation. You purchase the pylons first.',
    unlock: 540,
  },
  mine: {
    title: 'AETHER MINES',
    blurb: 'Drops on hold. Slow crawlers in the lane. Same trigger — not gifts you place.',
    unlock: 360,
  },
  shear: {
    title: 'RIFT SHEAR',
    blurb: 'Wide gold blades off the shoulders. Not a blaster. A cut.',
    unlock: 500,
  },
  spire: {
    title: 'PIERCE SPIRE',
    blurb: 'A nose spike that keeps going. Pierces. Costs like it looks.',
    unlock: 680,
  },
  nova: {
    title: 'NOVA BURST',
    blurb: 'Clears the flanks. A crown bloom when the aisle fills. Pretty. Mean.',
    unlock: 700,
  },
  prism: {
    title: 'PRISM SPLIT',
    blurb: 'The bow learns to fan violet. Last luxury before the Sentinel.',
    unlock: 760,
  },
};

export function defaultHangar() {
  return { gold: 0, levels: starterLoadout() };
}

export function loadHangar() {
  try {
    const raw = JSON.parse(localStorage.getItem(HANGAR_KEY) || 'null');
    if (!raw || typeof raw !== 'object') return defaultHangar();
    const levels = starterLoadout();
    for (const m of MODULE_ORDER) {
      const n = Number(raw.levels?.[m]);
      if (Number.isFinite(n)) levels[m] = Math.max(0, Math.min(MODULES[m].max, n | 0));
    }
    if (levels.spark < 1) levels.spark = 1;
    return { gold: Math.max(0, Number(raw.gold) || 0), levels };
  } catch {
    return defaultHangar();
  }
}

export function saveHangar(hangar) {
  const next = {
    gold: Math.max(0, hangar.gold | 0),
    levels: { ...starterLoadout(), ...hangar.levels },
  };
  if (next.levels.spark < 1) next.levels.spark = 1;
  localStorage.setItem(HANGAR_KEY, JSON.stringify(next));
  return next;
}

export function emptyBonus() {
  return emptyLevels();
}

export function ownedModules(levels) {
  return MODULE_ORDER.filter((m) => (levels[m] | 0) > 0);
}

export function mergeLoadout(hangarLevels, runBonus = {}) {
  const out = emptyLevels();
  for (const m of MODULE_ORDER) {
    const owned = hangarLevels[m] | 0;
    if (owned <= 0) {
      out[m] = 0;
      continue;
    }
    out[m] = Math.min(MODULES[m].max, owned + (runBonus[m] | 0));
  }
  return out;
}

export function loadoutPower(loadout) {
  return MODULE_ORDER.reduce((n, m) => n + (loadout[m] | 0), 0);
}

export function upgradeCost(id, current) {
  const spec = CATALOG[id];
  if (!spec) return 0;
  const lv = Math.max(1, current | 0);
  const weight = 0.75 + (spec.unlock || 120) / 900;
  return Math.round((58 + lv * 46) * (1 + lv * 0.16) * weight);
}

export function nextCost(levels, id) {
  const lv = levels[id] | 0;
  const max = MODULES[id].max;
  if (lv >= max) return 0;
  if (lv <= 0) return CATALOG[id]?.unlock || 0;
  return upgradeCost(id, lv);
}

export function buyModule(hangar, id) {
  const cost = nextCost(hangar.levels, id);
  if (cost <= 0 || hangar.gold < cost) return { hangar, ok: false, cost };
  const levels = { ...hangar.levels, [id]: (hangar.levels[id] | 0) + 1 };
  const next = saveHangar({ gold: hangar.gold - cost, levels });
  return { hangar: next, ok: true, cost };
}

export function addGold(hangar, n) {
  if (n <= 0) return hangar;
  return saveHangar({ ...hangar, gold: hangar.gold + (n | 0) });
}

export function applyMotes(hangarLevels, runBonus, n) {
  const bonus = { ...runBonus };
  const order = ownedModules(hangarLevels);
  let toast = null;
  let gained = 0;
  let cursor = bonus._i || 0;
  for (let k = 0; k < n; k++) {
    let hit = false;
    for (let t = 0; t < order.length; t++) {
      const m = order[(cursor + t) % order.length];
      const have = (hangarLevels[m] | 0) + (bonus[m] | 0);
      if (have >= MODULES[m].max) continue;
      bonus[m] = (bonus[m] | 0) + 1;
      cursor = (cursor + t + 1) % order.length;
      gained += 1;
      toast = have + 1 >= MODULES[m].max ? `${MODULES[m].tag} MAX` : `${MODULES[m].tag} UP`;
      hit = true;
      break;
    }
    if (!hit) break;
  }
  bonus._i = cursor;
  return { runBonus: bonus, toast, gained };
}

export function shedBonus(runBonus, n) {
  const bonus = { ...runBonus };
  let left = Math.max(0, n | 0);
  for (let i = MODULE_ORDER.length - 1; i >= 0 && left > 0; i--) {
    const m = MODULE_ORDER[i];
    const have = bonus[m] | 0;
    const take = Math.min(have, left);
    bonus[m] = have - take;
    left -= take;
  }
  return bonus;
}

export function runFill(hangarLevels, runBonus) {
  let cap = 0;
  let used = 0;
  for (const m of ownedModules(hangarLevels)) {
    const hang = hangarLevels[m] | 0;
    cap += MODULES[m].max - hang;
    used += runBonus[m] | 0;
  }
  return { cap, used, ratio: cap <= 0 ? 1 : used / cap };
}

export function clearPayout(ci, li, { superBoss = false, finale = false, mids = 2 } = {}) {
  const clear = 55 + ci * 30 + li * 12;
  const boss = finale ? 220 : superBoss ? 175 : 110;
  const mid = Math.max(0, mids) * 28;
  return { clear, boss, mid, total: clear + boss + mid };
}

const TRACTOR_NEAR = 0.28;

export function tractorSpec(loadout = {}) {
  const rangeLv = loadout.tractor | 0;
  const forceLv = loadout.pull | 0;
  if (rangeLv <= 0 && forceLv <= 0) return { range: 0, force: 0, rangeLv, forceLv };
  const range = rangeLv > 0 ? 6.2 + (rangeLv - 1) * 3.15 : 5.4;
  const force = forceLv > 0 ? 28 + (forceLv - 1) * 22 : 16;
  return { range, force, rangeLv, forceLv };
}

export function tractorPull(dist, spec) {
  const range = spec?.range || 0;
  const force = spec?.force || 0;
  if (range <= 0 || force <= 0 || dist >= range || dist <= 0) return 0;
  const span = Math.log(range / TRACTOR_NEAR);
  if (!(span > 1e-8)) return force;
  return force * (Math.log(range / Math.max(dist, TRACTOR_NEAR)) / span);
}

export function recommend(levels, gold = 0, afterId = '') {
  if (afterId === '1-1') {
    if ((levels.tractor | 0) <= 0) return 'tractor';
    if ((levels.needle | 0) <= 0) return 'needle';
  }
  const order = afterId === '1-1' ? ['tractor', 'needle', ...MODULE_ORDER] : MODULE_ORDER;
  for (const id of order) {
    const cost = nextCost(levels, id);
    if (cost > 0 && gold >= cost) return id;
  }
  return null;
}

export function buyLabel(levels, id) {
  const lv = levels[id] | 0;
  const max = MODULES[id].max;
  if (lv >= max) return 'MAXED';
  if (lv <= 0) return 'INSTALL';
  return `UPGRADE  ${lv} → ${lv + 1}`;
}
