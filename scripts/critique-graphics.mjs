#!/usr/bin/env node
/**
 * Adversarial graphics / readability critic.
 * Fails if bullets collide in hue-space, telegraphs are fake,
 * juice is a cheap shockwave, or presentation still looks like a default Vite page.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const read = (p) => readFileSync(resolve(root, p), 'utf8');
const entities = read('src/entities.js');
const shaders = read('src/shaders.js');
const css = read('src/style.css');
const html = read('index.html');
const game = read('src/game.js');
const audio = read('src/audio.js');

const fails = [];
const notes = [];
function fail(msg) { fails.push(msg); }
function note(msg) { notes.push(msg); }

function hexToRgb(hex) {
  const n = typeof hex === 'number' ? hex : parseInt(String(hex).replace('#', '').replace('0x', ''), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function rgbToHsl({ r, g, b }) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  const l = (max + min) / 2;
  const d = max - min;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  if (d) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s, l };
}
function hueDelta(a, b) {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

const playerHex = 0xc8fff6;
const bulletsFn = (entities.split('_seedBullets() {')[1] || '').split('_seedPickups()')[0];
const shotColor = Number('0x' + ((bulletsFn.match(/SphereGeometry\([\s\S]{0,120}color: 0x([0-9a-fA-F]{6})/) || [])[1] || 'ff4d6d'));
const shotRadius = Number((bulletsFn.match(/SphereGeometry\(([0-9.]+)/) || [])[1] || 0);

function dressWind(role) {
  const re = new RegExp(`role === '${role}'\\) \\{[\\s\\S]*?windMax = ([0-9.]+)`);
  return Number((entities.match(re) || [])[1] || 0);
}
const heavyWind = dressWind('heavy');
const queenWind = dressWind('queen');
const wardenWind = dressWind('warden');
const playerH = rgbToHsl(hexToRgb(playerHex));
const enemyH = rgbToHsl(hexToRgb(shotColor));
const dh = hueDelta(playerH.h, enemyH.h);
note(`player spark hsl ${playerH.h.toFixed(0)}/${(playerH.s * 100).toFixed(0)}% vs enemy ${enemyH.h.toFixed(0)}/${(enemyH.s * 100).toFixed(0)}%  Δh=${dh.toFixed(0)}`);

if (dh < 80) fail(`enemy bullets sit ${dh.toFixed(0)}° from player cyan — they will melt into the gun`);
if (enemyH.s < 0.55) fail('enemy bullets are desaturated — not a danmaku read');
if (playerH.s < 0.25 && playerH.l < 0.7) fail('player pellets are muddy');

if (shotRadius < 0.5) fail(`enemy shot radius ${shotRadius} is a speck at scroll distance`);

note(`telegraph heavy ${heavyWind}s queen ${queenWind}s warden ${wardenWind}s`);
if (heavyWind < 0.38) fail(`heavy telegraph ${heavyWind}s is a fake — player cannot react`);
if (queenWind < 0.4) fail('queen fan has no real windup');
if (wardenWind < 0.5) fail('warden cross has no real windup');
if (!entities.includes('_telegraphAndFire')) fail('no telegraph state machine');
if (!entities.includes('en.ring.scale.setScalar(1 + u')) fail('telegraph has no silhouette scale');

if (!entities.includes('_seedImpacts') && !entities.includes('spawnImpact')) fail('no impact sparks — hits will feel like HP ticking in a spreadsheet');
if (!game.includes('spawnImpact')) fail('game never actually flashes impacts');
if (!game.includes('kickAmt') || !shaders.includes('uKick')) fail('no camera/post kick on hit');
if (/shockwave/i.test(shaders) || /ShockwavePass/.test(game)) fail('cheap shockwave pass is back');
if (!game.includes('hitStop')) fail('no hitstop');
const punchCap = Number((game.match(/Math\.min\(0\.(\d+), seconds\)/) || [])[1] || 999);
if (game.includes('hitStop = 0.2') || /hitStop = Math\.max\(this\.hitStop, 0\.[2-9]/.test(game)) {
  fail('hitstop is a freeze, not 1–2 frames');
}

if (!html.includes('fonts.googleapis.com') || !html.includes('Orbitron') || !html.includes('Rajdhani')) {
  fail('still on a system UI face — title/HUD are not designed');
}
if (!css.includes('Orbitron') || !css.includes('Rajdhani')) fail('CSS never applies the designed faces');
if (css.includes('Trebuchet MS') && !css.includes('Rajdhani')) fail('Trebuchet is still the live stack');

if (!css.includes('@keyframes title-fly')) fail('title does not fly in');
if (!css.includes('pause-dim')) fail('pause does not dim the world');
if (!html.includes('boss-meter') || !css.includes('boss-meter')) fail('boss has no health meter');
if (!html.includes('bomb-pips')) fail('no bomb pips — panic stock is invisible');
if (!html.includes('result-rank')) fail('results screen has no rank mark');
if (!html.includes('title-scores')) fail('title has no hi-score board');

if (!audio.includes('_scheduleBeat')) fail('no sequenced score — still a pad drone');
if (!audio.includes('setPaused')) fail('pause cannot mute');
if (!audio.includes('_duck')) fail('no music duck on big hits');
if (!audio.includes('rumble')) fail('no gamepad rumble');

const bloom = Number((game.match(/UnrealBloomPass\(size, ([0-9.]+)/) || [])[1] || 0);
if (bloom > 0.85) fail(`bloom ${bloom} will white-out cyan bullets`);
if (bloom < 0.25) fail(`bloom ${bloom} is a flat unlit scene`);

if (!game.includes('gamepad') && !game.includes('getGamepads')) fail('no gamepad path');

if (fails.length) {
  console.error('GRAPHICS CRITIQUE FAIL\n' + notes.map((n) => `  · ${n}`).join('\n') + '\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}
console.log('GRAPHICS CRITIQUE OK\n' + notes.map((n) => `  · ${n}`).join('\n'));
