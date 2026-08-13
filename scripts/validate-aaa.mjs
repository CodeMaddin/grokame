#!/usr/bin/env node
/** Structural wiring check for the AAA pass. Fails on missing integration. */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SCRIPT, CHAPTERS, StageDirector, gradeRun } from '../src/stage.js';
import { STEP_MAX, estimateDps, arsenal, starterLoadout } from '../src/weapons.js';

const root = resolve(import.meta.dirname, '..');
const src = (name) => readFileSync(resolve(root, name), 'utf8');

const game = src('src/game.js');
const entities = src('src/entities.js');
const audio = src('src/audio.js');
const html = src('index.html');
const css = src('src/style.css');
const shaders = src('src/shaders.js');
const weaponsSrc = src('src/weapons.js');

const fails = [];
const pass = [];
function ok(cond, msg) {
  if (cond) pass.push(msg);
  else fails.push(msg);
}

ok(game.includes('StageDirector'), 'game wires StageDirector');
ok(game.includes('_runStage'), 'game consumes authored script');
ok(game.includes('audio.tick()'), 'game ticks the score');
ok(game.includes('setPaused'), 'game mutes on pause');
ok(game.includes('setIntensity'), 'game drives music intensity');
ok(game.includes('_tryBomb'), 'bomb is wired');
ok(game.includes('_pollPad'), 'gamepad is polled');
ok(game.includes('_punch'), 'hitstop/kick helper exists');
ok(game.includes('_endRun'), 'results path exists');
ok(game.includes('gradeRun'), 'runs are graded');
ok(game.includes('saveScore'), 'hi-scores persist');
ok(!game.includes("toast('NEAR MISS')"), 'near-miss toast spam removed');
ok(!game.includes("toast('PATH CLEAR')"), 'path-clear toast spam removed');
ok(!entities.includes('_lastBossAt'), 'repeating boss faucet removed');
ok(entities.includes('spawnSquad'), 'formations exist');
ok(entities.includes('_telegraphAndFire'), 'telegraph exists');
ok(entities.includes('spawnImpact'), 'impact sparks exist');
ok(entities.includes('bombSweep'), 'bomb sweep exists');
ok(entities.includes("role === 'queen'"), 'weaver queen exists');
ok(entities.includes("role === 'warden'"), 'warden exists');
ok(entities.includes("role === 'finale'"), 'finale role exists');
ok(audio.includes('_scheduleBeat'), 'sequenced score exists');
ok(audio.includes('bomb()'), 'bomb voice exists');
ok(html.includes('Orbitron'), 'designed title face linked');
ok(html.includes('Rajdhani'), 'designed HUD face linked');
ok(html.includes('bomb-pips'), 'bomb HUD exists');
ok(html.includes('title-scores'), 'title hi-score board exists');
ok(html.includes('boss-meter'), 'boss health meter exists');
ok(game.includes('_syncBossMeter'), 'boss meter is synced');
ok(entities.includes('_railHit'), 'rail-space boss hits');
ok(weaponsSrc.includes('eliteHp'), 'elite HP scales with arsenal');
ok(css.includes('title-fly'), 'title fly-in animation exists');
ok(css.includes('pause-dim'), 'pause overlay dims');
ok(shaders.includes('uKick'), 'kick uniform, not a shockwave pass');
ok(!shaders.includes('shockwave'), 'no cheap shockwave pass');
ok(SCRIPT.some((e) => e.kind === 'midboss' && e.id === 'queen'), 'script has queen');
ok(SCRIPT.some((e) => e.kind === 'midboss' && e.id === 'warden'), 'script has warden');
ok(SCRIPT.filter((e) => e.kind === 'finale').length === 1, 'script has one finale');
ok(CHAPTERS.length >= 4, 'chapter banners exist');
ok(STEP_MAX >= 70, 'arsenal still deep');
ok(estimateDps(0) > 8 && estimateDps(0) < 40, 'starter DPS is a trickle');
ok(arsenal(starterLoadout()).primary.shots.length >= 2, 'starts with particle blasters');

const crafts = src('src/crafts.js');
const patterns = src('src/patterns.js');
const world = src('src/world.js');
const ship = src('src/ship.js');
ok(crafts.includes('createDiveHunter') && crafts.includes('createSentinel'), 'craft factories exist');
ok(crafts.includes('setCraftPhase'), 'boss silhouette phases exist');
ok(entities.includes('createSentinel'), 'finale uses sentinel craft');
ok(entities.includes('nextVolley'), 'entities fire authored volleys');
ok(patterns.includes('queenVolley') && patterns.includes('wardenVolley'), 'elite timelines exist');
ok(entities.includes('_shotGeo'), 'authored shot meshes exist');
ok(entities.includes('needle:') && entities.includes('titan:'), 'needles and titan slabs exist');
ok(ship.includes('rig') && ship.includes('muzzle'), 'ship rig and muzzle exist');
ok(game.includes('shipRig.rotation.z'), 'ship banks into strafe');
ok(game.includes('lives = 3'), 'arcade lives start at 3');
ok(game.includes('_acceptContinue'), 'continue beat is wired');
ok(game.includes('_respawn'), 'spawn-in after death');
ok(html.includes('continue-screen'), 'continue overlay exists');
ok(html.includes('life-pips'), 'life pips exist');
ok(css.includes('#hud.visible #view-switcher'), 'view chips hide during play');
ok(css.includes('combo-pop'), 'combo pop animation exists');
ok(world.includes('setChapter'), 'chapter world recolor exists');
ok(audio.includes('sting(') && audio.includes('setChapter'), 'stems and stings exist');
ok(game.includes("_setChapter(id, ch.at >= 380 ? 'boss'"), 'boss sting on chapter');

const dir = new StageDirector();
dir.reset();
ok(dir.peek()?.at === SCRIPT[0].at, 'director starts at first event');
ok(gradeRun({ score: 0, kills: 0, step: 0, maxCombo: 1, victory: false, nearMisses: 0, bombsUsed: 0 }) === 'D', 'empty run is D');

if (fails.length) {
  console.error(`AAA WIRING FAIL (${fails.length})\n` + fails.map((f) => `  - ${f}`).join('\n'));
  process.exit(1);
}
console.log(`AAA wiring OK (${pass.length} checks)`);
