#!/usr/bin/env node
/**
 * Adversarial gameplay critic.
 * Job is to fail the build if the run still feels like a random faucet,
 * a sponge, a one-shot, or a toast-spam toy.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SCRIPT, CHAPTERS } from '../src/stage.js';
import { estimateDps, estimateBossDps, eliteHp, loadoutFromStep, arsenal } from '../src/weapons.js';

const root = resolve(import.meta.dirname, '..');
const entities = readFileSync(resolve(root, 'src/entities.js'), 'utf8');
const game = readFileSync(resolve(root, 'src/game.js'), 'utf8');
const weapons = readFileSync(resolve(root, 'src/weapons.js'), 'utf8');

const fails = [];
const notes = [];
function fail(msg) { fails.push(msg); }
function note(msg) { notes.push(msg); }

function motesBefore(at) {
  let n = 0;
  for (const ev of SCRIPT) {
    if (ev.at >= at) break;
    if (ev.kind === 'squad') n += ev.n * (ev.role === 'heavy' ? 2 : 1);
    if (ev.kind === 'midboss') n += 5;
    if (ev.kind === 'orbs') n += 3;
  }
  return n;
}

const queenStep = motesBefore(380);
const wardenStep = motesBefore(820);
const finaleStep = motesBefore(1320);
const queenHp = eliteHp('queen', queenStep);
const wardenHp = eliteHp('warden', wardenStep);
const finaleHp = eliteHp('finale', finaleStep);
const diveHp = Number((entities.match(/\} else \{\s*en\.hp = (\d+)/) || [])[1]);
const starterQueen = eliteHp('queen', 0);
const starterTtk = starterQueen / Math.max(1, estimateDps(0));

const kinds = SCRIPT.map((e) => e.kind);
if (!kinds.includes('breath')) fail('no breaths — the script never lets the player read the board');
if (!kinds.includes('gate')) fail('no gated appointments');
if (SCRIPT.filter((e) => e.kind === 'finale').length !== 1) fail('finale is not a single appointment');
if (entities.includes('_lastBossAt') || /traveled \/ 1200/.test(entities)) {
  fail('boss faucet still repeats on a timer');
}

const breaths = SCRIPT.filter((e) => e.kind === 'breath');
for (const b of breaths) {
  const after = SCRIPT.find((e) => e.at > b.at && e.kind !== 'breath');
  const before = [...SCRIPT].reverse().find((e) => e.at < b.at && e.kind === 'squad');
  if (after && after.at - b.at < 18) fail(`breath at ${b.at} is fake — next beat is only ${after.at - b.at} units later`);
  if (before && b.at - before.at < 12) fail(`breath at ${b.at} sits on top of the previous squad`);
}

const squads = SCRIPT.filter((e) => e.kind === 'squad');
let overlap = 0;
for (let i = 1; i < squads.length; i++) {
  if (squads[i].at - squads[i - 1].at < 22) overlap += 1;
}
if (overlap > 4) fail(`too many stacked squads (${overlap} gaps under 22u) — this will read as a faucet`);
if (squads.length < 10) fail('not enough authored squads to carry a run');

function ttk(hp, step) {
  const dps = estimateBossDps(step);
  return hp / Math.max(1, dps);
}

const qTtk = ttk(queenHp, queenStep);
const wTtk = ttk(wardenHp, wardenStep);
const fTtk = ttk(finaleHp, finaleStep);

note(`queen hp ${queenHp} @ step ~${queenStep} focus-dps ${estimateBossDps(queenStep).toFixed(0)} ttk ${qTtk.toFixed(1)}s`);
note(`warden hp ${wardenHp} @ step ~${wardenStep} focus-dps ${estimateBossDps(wardenStep).toFixed(0)} ttk ${wTtk.toFixed(1)}s`);
note(`finale hp ${finaleHp} @ step ~${finaleStep} focus-dps ${estimateBossDps(finaleStep).toFixed(0)} ttk ${fTtk.toFixed(1)}s`);
note(`starter sparks vs queen: ${starterQueen} hp, raw dps ${estimateDps(0).toFixed(0)}, ttk ${starterTtk.toFixed(1)}s`);

if (!weapons.includes('eliteHp')) fail('boss HP is not scaled to the gun you actually have');
if (!entities.includes('_railHit')) fail('boss hits are world-space — they miss on the ribbon');
if (!entities.includes('traveled + 32')) fail('elites are not parked in gun range');
if (!game.includes('_syncBossMeter') || !readFileSync(resolve(root, 'index.html'), 'utf8').includes('boss-meter')) {
  fail('no boss health meter — damage is invisible');
}

if (starterTtk < 4) fail(`starter vs queen TTK ${starterTtk.toFixed(1)}s — sparks should be able to kill her without a stacked arsenal`);
if (starterTtk > 14) fail(`starter vs queen TTK ${starterTtk.toFixed(1)}s — feels like you cannot damage her`);

if (qTtk < 4.5) fail(`queen TTK ${qTtk.toFixed(1)}s — not a mid-boss, just a fat dive`);
if (qTtk > 14) fail(`queen TTK ${qTtk.toFixed(1)}s — sponge`);
if (wTtk < 5) fail(`warden TTK ${wTtk.toFixed(1)}s — skips the pattern`);
if (wTtk > 16) fail(`warden TTK ${wTtk.toFixed(1)}s — sponge`);
if (fTtk < 6.5) fail(`finale TTK ${fTtk.toFixed(1)}s — climax dies before phase 3`);
if (fTtk > 20) fail(`finale TTK ${fTtk.toFixed(1)}s — bullet-sponge finale`);

const shotSpeed = Number((entities.match(/enemyFireRail\([^)]*speed = (\d+)/) || entities.match(/this\.enemyFireRail\(path, s \+ 1, x, (\d+)/) || [])[1] || 8);
const spark = arsenal(loadoutFromStep(0)).primary.shots[0];
if (spark.speed < 60) fail('player pellets are too slow to feel like a gun');
if (shotSpeed > spark.speed * 0.25) fail(`enemy shots at ${shotSpeed} are not readable vs player ${spark.speed}`);
if ((spark.life || 1) > 0.45) fail(`starter pellets live ${spark.life}s — they are lasers, not particles`);

if (!game.includes('bombs = 3')) fail('bomb stock does not start at 3');
if (!game.includes('bombMax = 5')) fail('bomb cap missing');
if (!/_tryBomb[\s\S]{0,400}bombSweep/.test(game)) fail('bomb does not sweep the playfield');
if (game.includes('this.bombs = 99') || /bombs = [6-9]/.test(game)) fail('bomb stock is trivial');

if (!game.includes('_applySlide')) fail('8-way slide missing');
if (!game.includes('_depthLimit')) fail('scroll depth limits missing');
if (!/_axisHeld\(/.test(game)) fail('keyboard axes missing');
if (!game.includes('_padState')) fail('stick/d-pad not mapped');
if (!game.includes('lives = 3')) fail('no arcade lives');
if (!game.includes('_acceptContinue')) fail('no continue after the last life');
if (!entities.includes('nextVolley')) fail('elite patterns are not authored timelines');
if (!readFileSync(resolve(root, 'src/patterns.js'), 'utf8').includes('queenVolley')) fail('queen has no volley timeline');

if (game.includes("toast('NEAR MISS')")) fail('near-miss toast still screams over the gun');
if (CHAPTERS.length < 4) fail('no chapter banners for mid-bosses/finale');

const live = Number((entities.match(/for \(let i = 0; i < (\d+); i\+\+\) \{\s*const g = new THREE\.Group/) || [])[1]);
const peakSquad = Math.max(...squads.map((s) => s.n));
if (live && live < peakSquad + 4) fail(`enemy pool ${live} cannot hold a ${peakSquad}-ship wave plus a mid-boss`);

if (diveHp > 12) fail(`trash HP ${diveHp} is in mid-boss territory`);

if (fails.length) {
  console.error('GAMEPLAY CRITIQUE FAIL\n' + notes.map((n) => `  · ${n}`).join('\n') + '\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}
console.log('GAMEPLAY CRITIQUE OK\n' + notes.map((n) => `  · ${n}`).join('\n'));
