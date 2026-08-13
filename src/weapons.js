export const RESONANCE_MAX = 7;

export const RANK_COST = [0, 3, 5, 7, 10, 12, 14, 16];

export const RANK_META = [
  { name: 'NEEDLES', toast: 'NEEDLES ONLINE' },
  { name: 'CHARGE', toast: 'NEEDLE CHARGE' },
  { name: 'TRIDENT', toast: 'TRIDENT LOCK' },
  { name: 'HELIX', toast: 'HELIX STREAM' },
  { name: 'RIFT WALL', toast: 'RIFT WALL' },
  { name: 'WINGS', toast: 'WING FILAMENTS' },
  { name: 'CROSSFIRE', toast: 'CROSSFIRE' },
  { name: 'CROWN', toast: 'AETHER CROWN' },
];

export function costToNext(rank) {
  if (rank >= RESONANCE_MAX) return 0;
  return RANK_COST[rank + 1];
}

export function totalCostToRank(rank) {
  let n = 0;
  for (let i = 1; i <= rank; i++) n += RANK_COST[i];
  return n;
}

export function volley(rank) {
  const r = Math.max(0, Math.min(RESONANCE_MAX, rank | 0));
  const fireCd = [0.10, 0.088, 0.08, 0.072, 0.064, 0.06, 0.055, 0.05][r];
  const scale = [1, 1.18, 1.22, 1.32, 1.38, 1.38, 1.42, 1.48][r];
  const speed = [124, 128, 132, 136, 140, 142, 144, 148][r];
  const life = [1.12, 1.1, 1.05, 1.0, 0.96, 0.92, 0.88, 0.84][r];
  const main = (x, drift = 0) => ({
    x, drift, kind: 'main', scale, speed, life, damage: 1, color: 0xe8ffff,
  });
  const wing = (x, drift) => ({
    x, drift, kind: 'wing', scale: 1.12, speed: speed * 0.92, life, damage: 1, color: 0xff64e8,
  });
  const crown = (x, drift) => ({
    x, drift, kind: 'crown', scale: 1.2, speed: speed * 0.86, life: life * 0.92, damage: 1, color: 0xffd166,
  });

  const shots = [
    [main(-1.8), main(1.8)],
    [main(-2.0), main(2.0)],
    [main(-2.6), main(0), main(2.6)],
    [main(-2.8), main(0), main(2.8)],
    [main(-3.4), main(-1.2), main(0), main(1.2), main(3.4)],
    [
      main(-3.4), main(-1.2), main(0), main(1.2), main(3.4),
      wing(-5.4, -11), wing(5.4, 11),
    ],
    [
      main(-3.4), main(-1.2), main(0), main(1.2), main(3.4),
      wing(-5.4, -11), wing(5.4, 11),
      wing(-7.2, -18), wing(7.2, 18),
    ],
    [
      main(-3.4), main(-1.2), main(0), main(1.2), main(3.4),
      wing(-5.4, -11), wing(5.4, 11),
      wing(-7.2, -18), wing(7.2, 18),
      crown(-4.2, -30), crown(4.2, 30),
    ],
  ][r];

  return { fireCd, shots, extraGuns: r >= 5 };
}

export function peakLiveBullets(rank) {
  const v = volley(rank);
  return Math.ceil(v.shots.length * (v.shots[0].life / v.fireCd));
}

export function motesToMax() {
  return totalCostToRank(RESONANCE_MAX);
}
