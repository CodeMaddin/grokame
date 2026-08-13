export const MODULES = {
  spark:  { max: 8, tag: 'SPARK',  unlock: 'SPARK ARRAY' },
  needle: { max: 8, tag: 'NEEDLE', unlock: 'LASERS ONLINE' },
  seeker: { max: 8, tag: 'SEEKER', unlock: 'SEEKERS LOCKED' },
  shard:  { max: 7, tag: 'SHARD',  unlock: 'CRYSTAL SHARDS' },
  titan:  { max: 6, tag: 'TITAN',  unlock: 'TITAN BLASTER' },
  wing:   { max: 6, tag: 'WING',   unlock: 'WING FILAMENTS' },
  helix:  { max: 6, tag: 'HELIX',  unlock: 'HELIX RIBBON' },
  drone:  { max: 6, tag: 'DRONE',  unlock: 'RIFT DRONES' },
  mine:   { max: 6, tag: 'MINE',   unlock: 'AETHER MINES' },
  shear:  { max: 6, tag: 'SHEAR',  unlock: 'RIFT SHEAR' },
  spire:  { max: 5, tag: 'SPIRE',  unlock: 'PIERCE SPIRE' },
  nova:   { max: 5, tag: 'NOVA',   unlock: 'NOVA BURST' },
  prism:  { max: 5, tag: 'PRISM',  unlock: 'PRISM SPLIT' },
};

export const MODULE_ORDER = Object.keys(MODULES);

export const UNLOCK_ORDER = [
  'needle', 'seeker', 'shard', 'titan', 'wing', 'helix',
  'drone', 'mine', 'shear', 'spire', 'nova', 'prism',
];

function emptyLevels() {
  const lv = {};
  for (const m of MODULE_ORDER) lv[m] = 0;
  return lv;
}

export function starterLoadout() {
  const lv = emptyLevels();
  lv.spark = 1;
  return lv;
}

function buildSequence() {
  const lv = starterLoadout();
  const owned = ['spark'];
  const unlocks = UNLOCK_ORDER.slice();
  const seq = [];
  const unlockAt = new Set([3, 8, 14, 20, 26, 32, 38, 44, 50, 56, 62, 68]);
  let rr = 0;
  const cap = MODULE_ORDER.reduce((n, m) => n + MODULES[m].max, 0) - 1;
  while (seq.length < cap) {
    if (unlocks.length && unlockAt.has(seq.length)) {
      const m = unlocks.shift();
      lv[m] = 1;
      owned.push(m);
      seq.push({ module: m, toast: MODULES[m].unlock });
      continue;
    }
    let bumped = false;
    for (let k = 0; k < owned.length; k++) {
      const m = owned[(rr + k) % owned.length];
      if (lv[m] < MODULES[m].max) {
        lv[m] += 1;
        seq.push({
          module: m,
          toast: lv[m] === MODULES[m].max ? `${MODULES[m].tag} MAX` : null,
        });
        rr = (rr + k + 1) % owned.length;
        bumped = true;
        break;
      }
    }
    if (!bumped) {
      if (!unlocks.length) break;
      const m = unlocks.shift();
      lv[m] = 1;
      owned.push(m);
      seq.push({ module: m, toast: MODULES[m].unlock });
    }
  }
  return seq;
}

export const SEQUENCE = buildSequence();
export const STEP_MAX = SEQUENCE.length;

export function loadoutFromStep(step) {
  const lv = starterLoadout();
  const n = Math.max(0, Math.min(STEP_MAX, step | 0));
  for (let i = 0; i < n; i++) lv[SEQUENCE[i].module] += 1;
  return lv;
}

export function costToNext(step) {
  return step >= STEP_MAX ? 0 : 1;
}

export function hudName(loadout) {
  const owned = MODULE_ORDER.filter((m) => loadout[m] > 0).map((m) => MODULES[m].tag);
  if (!owned.length) return 'SPARK';
  return owned.slice(-3).join(' · ');
}

export function newestUnlock(loadout) {
  for (let i = UNLOCK_ORDER.length - 1; i >= 0; i--) {
    if (loadout[UNLOCK_ORDER[i]] > 0) return MODULES[UNLOCK_ORDER[i]].tag;
  }
  return 'SPARK';
}

function pellet(x, drift, extra = {}) {
  return { x, drift, home: 0, pierce: 0, wobble: 0, phase: 0, hitR: 1.35, damage: 1, ...extra };
}

export function arsenal(loadout, t = 0) {
  const primary = [];
  const missile = [];
  const titan = [];
  const mine = [];
  const nova = [];

  const sp = loadout.spark | 0;
  if (sp > 0) {
    const n = 1 + Math.min(sp, 7);
    for (let i = 0; i < n; i++) {
      const u = n === 1 ? 0 : i / (n - 1) - 0.5;
      primary.push(pellet(u * (1.4 + sp * 0.4), u * (10 + sp * 3), {
        kind: 'spark',
        scale: 0.82 + sp * 0.04,
        speed: 84 + sp * 4,
        life: 0.32 + sp * 0.018,
        color: 0xc8fff6,
        hitR: 1.25,
      }));
    }
  }

  const nd = loadout.needle | 0;
  if (nd > 0) {
    const xs = nd <= 2 ? [-1.9, 1.9]
      : nd <= 4 ? [-2.5, 0, 2.5]
        : [-3.3, -1.15, 0, 1.15, 3.3];
    for (const x of xs) {
      primary.push(pellet(x, 0, {
        kind: 'needle',
        scale: 1.05 + nd * 0.04,
        speed: 128 + nd * 3,
        life: 0.78,
        color: 0x9be7ff,
        hitR: 1.55,
      }));
    }
  }

  const wg = loadout.wing | 0;
  if (wg > 0) {
    const span = 5.1 + wg * 0.45;
    const drift = 10 + wg * 2.2;
    primary.push(pellet(-span, -drift, { kind: 'wing', scale: 1.08, speed: 122, life: 0.72, color: 0xff64e8, hitR: 1.45 }));
    primary.push(pellet(span, drift, { kind: 'wing', scale: 1.08, speed: 122, life: 0.72, color: 0xff64e8, hitR: 1.45 }));
    if (wg >= 4) {
      primary.push(pellet(-span - 1.8, -drift - 7, { kind: 'wing', scale: 0.95, speed: 118, life: 0.68, color: 0xff9be0, hitR: 1.35 }));
      primary.push(pellet(span + 1.8, drift + 7, { kind: 'wing', scale: 0.95, speed: 118, life: 0.68, color: 0xff9be0, hitR: 1.35 }));
    }
  }

  const hx = loadout.helix | 0;
  if (hx > 0) {
    const w = 14 + hx * 4;
    primary.push(pellet(-2.2, 0, { kind: 'helix', scale: 1.05, speed: 118, life: 0.8, color: 0x7af0ff, wobble: w, phase: 0 }));
    primary.push(pellet(2.2, 0, { kind: 'helix', scale: 1.05, speed: 118, life: 0.8, color: 0x7af0ff, wobble: w, phase: Math.PI }));
    if (hx >= 4) {
      primary.push(pellet(0, 0, { kind: 'helix', scale: 1.0, speed: 120, life: 0.76, color: 0xdcffff, wobble: w * 0.7, phase: 1.2 }));
    }
  }

  const sh = loadout.shear | 0;
  if (sh > 0) {
    const d = 22 + sh * 4;
    primary.push(pellet(-3.8, -d, { kind: 'shear', scale: 1.15, speed: 110, life: 0.7, color: 0xffd166, hitR: 1.7 }));
    primary.push(pellet(3.8, d, { kind: 'shear', scale: 1.15, speed: 110, life: 0.7, color: 0xffd166, hitR: 1.7 }));
    if (sh >= 4) {
      primary.push(pellet(-6.2, -d - 10, { kind: 'shear', scale: 1.05, speed: 104, life: 0.64, color: 0xffe29a }));
      primary.push(pellet(6.2, d + 10, { kind: 'shear', scale: 1.05, speed: 104, life: 0.64, color: 0xffe29a }));
    }
  }

  const sr = loadout.spire | 0;
  if (sr > 0) {
    primary.push(pellet(-0.9, 0, {
      kind: 'spire', scale: 0.72, speed: 156, life: 0.9, color: 0xffffff, pierce: sr, damage: 2, hitR: 1.4,
    }));
    primary.push(pellet(0.9, 0, {
      kind: 'spire', scale: 0.72, speed: 156, life: 0.9, color: 0xffffff, pierce: sr, damage: 2, hitR: 1.4,
    }));
  }

  const dr = loadout.drone | 0;
  if (dr > 0) {
    const slots = Math.min(4, 2 + Math.floor((dr - 1) / 2));
    for (let i = 0; i < slots; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const row = Math.floor(i / 2);
      primary.push(pellet(side * (4.8 + row * 1.4), side * (4 + row * 3), {
        kind: 'drone', scale: 0.9, speed: 124, life: 0.7, color: 0xff7ae8, hitR: 1.3,
      }));
    }
  }

  const pr = loadout.prism | 0;
  if (pr > 0) {
    const n = 2 + Math.min(pr, 4);
    for (let i = 0; i < n; i++) {
      const u = i / (n - 1) - 0.5;
      primary.push(pellet(u * 2.4, u * (18 + pr * 5), {
        kind: 'prism', scale: 0.78, speed: 100, life: 0.48, color: 0xd4b8ff, hitR: 1.2,
      }));
    }
  }

  const sk = loadout.seeker | 0;
  if (sk > 0) {
    const n = Math.min(6, 1 + Math.ceil(sk / 2));
    for (let i = 0; i < n; i++) {
      const u = n === 1 ? 0 : i / (n - 1) - 0.5;
      missile.push(pellet(u * (2.2 + sk * 0.5), u * 4, {
        kind: 'seeker',
        scale: 1.25 + sk * 0.06,
        speed: 52 + sk * 3,
        life: 1.35,
        color: 0xff8a4a,
        damage: 2,
        home: 1,
        homeSteer: 58 + sk * 6,
        hitR: 1.8,
      }));
    }
  }

  const sd = loadout.shard | 0;
  if (sd > 0) {
    const n = 2 + Math.min(sd, 6);
    for (let i = 0; i < n; i++) {
      const u = n === 1 ? 0 : i / (n - 1) - 0.5;
      primary.push(pellet(u * 1.2, u * (16 + sd * 3), {
        kind: 'shard', scale: 0.7, speed: 96 + sd * 2, life: 0.42, color: 0xff9bd2, hitR: 1.2,
      }));
    }
  }

  const tn = loadout.titan | 0;
  if (tn > 0) {
    titan.push(pellet(0, 0, {
      kind: 'titan',
      scale: 2.4 + tn * 0.28,
      speed: 64 + tn * 3,
      life: 1.05,
      color: 0xffd166,
      damage: 5 + tn,
      hitR: 3.2 + tn * 0.35,
    }));
    if (tn >= 4) {
      titan.push(pellet(-2.6, -6, { kind: 'titan', scale: 1.6, speed: 70, life: 0.9, color: 0xffe29a, damage: 3, hitR: 2.4 }));
      titan.push(pellet(2.6, 6, { kind: 'titan', scale: 1.6, speed: 70, life: 0.9, color: 0xffe29a, damage: 3, hitR: 2.4 }));
    }
  }

  const mn = loadout.mine | 0;
  if (mn > 0) {
    const n = Math.min(4, 1 + Math.floor(mn / 2));
    for (let i = 0; i < n; i++) {
      const u = n === 1 ? 0 : i / (n - 1) - 0.5;
      mine.push(pellet(u * (3 + mn * 0.8), u * 5, {
        kind: 'mine', scale: 1.35, speed: 16 + mn, life: 1.7, color: 0x5ce1ff, damage: 3, hitR: 2.1,
      }));
    }
  }

  const nv = loadout.nova | 0;
  if (nv > 0) {
    const rays = 6 + nv;
    for (let i = 0; i < rays; i++) {
      const u = i / (rays - 1) - 0.5;
      nova.push(pellet(u * 2, u * (36 + nv * 6), {
        kind: 'nova', scale: 0.95, speed: 88, life: 0.62, color: 0xff64e8, damage: 1, hitR: 1.5,
      }));
    }
  }

  const primaryCd = sp > 0 && nd === 0 ? 0.094 : 0.078;
  return {
    primary: { cd: primaryCd, shots: primary },
    missile: { cd: Math.max(0.28, 0.42 - sk * 0.018), shots: missile },
    titan: { cd: Math.max(0.55, 0.92 - tn * 0.05), shots: titan },
    mine: { cd: 0.52, shots: mine },
    nova: { cd: Math.max(0.72, 1.18 - nv * 0.08), shots: nova },
  };
}

export function peakLiveBullets(step) {
  const arms = arsenal(loadoutFromStep(step), 0);
  let n = 0;
  for (const g of Object.values(arms)) {
    if (!g.shots.length) continue;
    const life = g.shots[0].life || 0.8;
    n += Math.ceil(g.shots.length * (life / g.cd));
  }
  return n;
}

export function estimateDps(step) {
  const arms = arsenal(loadoutFromStep(step), 0);
  let dps = 0;
  for (const g of Object.values(arms)) {
    if (!g.shots.length) continue;
    const dmg = g.shots.reduce((s, sh) => s + (sh.damage || 1), 0);
    dps += dmg / Math.max(0.04, g.cd);
  }
  return dps;
}

export function eliteHp(kind, step) {
  const dps = estimateBossDps(step);
  if (kind === 'queen') return Math.round(90 + dps * 6.2);
  if (kind === 'warden') return Math.round(140 + dps * 7.5);
  return Math.round(220 + dps * 9.5);
}

export function estimateBossDps(step) {
  const arms = arsenal(loadoutFromStep(step), 0);
  const group = (g, w) => {
    if (!g.shots.length) return 0;
    const dmg = g.shots.reduce((s, sh) => s + (sh.damage || 1), 0);
    return (dmg / Math.max(0.04, g.cd)) * w;
  };
  return (
    group(arms.primary, 0.36)
    + group(arms.missile, 0.82)
    + group(arms.titan, 0.78)
    + group(arms.mine, 0.18)
    + group(arms.nova, 0.14)
  );
}
export const RANK_META = SEQUENCE.map((s, i) => ({
  name: MODULES[s.module].tag,
  toast: s.toast || MODULES[s.module].tag,
  step: i + 1,
}));
