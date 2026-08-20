/** Local hull calibration. Reset empties the key and restores factory mix. */

export const SETUP_KEY = 'aether-setup';

export const SETUP_DEFAULTS = {
  music: 0.72,
  sfx: 1,
  bloom: 1,
  flare: 1,
  film: 1,
  shake: 1,
};

export const SETUP_SLIDERS = [
  { key: 'music', group: 'MIX', label: 'MUSIC' },
  { key: 'sfx', group: 'MIX', label: 'GUNS' },
  { key: 'bloom', group: 'PICTURE', label: 'BLOOM' },
  { key: 'flare', group: 'PICTURE', label: 'FLARE' },
  { key: 'film', group: 'PICTURE', label: 'FILM' },
  { key: 'shake', group: 'PICTURE', label: 'SHAKE' },
];

function clamp01(v) {
  const n = Number(v);
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

export function defaultSetup() {
  return { ...SETUP_DEFAULTS };
}

export function clampSetup(raw) {
  const next = defaultSetup();
  if (!raw || typeof raw !== 'object') return next;
  for (const key of Object.keys(SETUP_DEFAULTS)) {
    if (raw[key] != null) next[key] = clamp01(raw[key]);
  }
  return next;
}

export function loadSetup() {
  try {
    return clampSetup(JSON.parse(localStorage.getItem(SETUP_KEY) || 'null'));
  } catch {
    return defaultSetup();
  }
}

export function saveSetup(setup) {
  const next = clampSetup(setup);
  localStorage.setItem(SETUP_KEY, JSON.stringify(next));
  return next;
}

export function resetSetup() {
  localStorage.removeItem(SETUP_KEY);
  return defaultSetup();
}
