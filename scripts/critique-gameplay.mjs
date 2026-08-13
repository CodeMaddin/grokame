#!/usr/bin/env node
/**
 * Adversarial gameplay critic.
 * Job is to fail the build if the run still feels like a random faucet,
 * a sponge, a one-shot, or a toast-spam toy.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SCRIPT, CHAPTERS } from '../src/stage.js';
import { CAMPAIGNS } from '../src/campaigns.js';
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

const queenAt = SCRIPT.find((e) => e.kind === 'midboss' && e.id === 'queen')?.at ?? 380;
const wardenAt = SCRIPT.find((e) => e.kind === 'midboss' && e.id === 'warden')?.at ?? 820;
const finaleAt = SCRIPT.find((e) => e.kind === 'finale')?.at ?? 1320;
const queenStep = motesBefore(queenAt);
const wardenStep = motesBefore(wardenAt);
const finaleStep = motesBefore(finaleAt);
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
if (!game.includes('_applyTouchDrag')) fail('mobile has no drag-to-slide');
if (!game.includes('_onTouchStart')) fail('touch does not hold-to-fire');
if (!game.includes('lives = 3')) fail('no arcade lives');
if (!game.includes('_acceptContinue')) fail('no continue after the last life');
if (!entities.includes('nextVolley')) fail('elite patterns are not authored timelines');
if (!readFileSync(resolve(root, 'src/patterns.js'), 'utf8').includes('queenVolley')) fail('queen has no volley timeline');

if (game.includes("toast('NEAR MISS')")) fail('near-miss toast still screams over the gun');
if (CHAPTERS.length < 4) fail('no chapter banners for mid-bosses/finale');
if (CAMPAIGNS.length !== 5) fail('need five campaigns');
if (CAMPAIGNS.some((c) => c.levels.length < 5 || c.levels.length > 7)) fail('each campaign needs 5–7 full levels');
const lastCamp = CAMPAIGNS[4];
const lastLevel = lastCamp.levels[lastCamp.levels.length - 1];
if (lastLevel.boss !== 'finale') fail('the last campaign does not end on the Sentinel');
const mvp = CAMPAIGNS[0].levels[0].script;
if (!mvp.some((e) => e.kind === 'midboss' && e.id === 'queen' && e.at === 380)) fail('1-1 is missing the original Queen');
if (!mvp.some((e) => e.kind === 'midboss' && e.id === 'warden' && e.at === 820)) fail('1-1 is missing the original Warden');
if (!mvp.some((e) => e.kind === 'finale' && e.at === 1320)) fail('1-1 is not the original MVP run');
if (!mvp.some((e) => e.kind === 'squad' && e.role === 'sine')) fail('1-1 lost the original sine weavers');
if (!mvp.some((e) => e.kind === 'squad' && e.role === 'heavy')) fail('1-1 lost the original heavy bricks');
const UNIQUE = {
  stinger: ['sine', 'heavy'],
  crimson: ['cinder', 'slag'],
  cathedral: ['acolyte', 'chime'],
  iris: ['bloom', 'prism'],
  heart: ['ion', 'wisp'],
};
for (const camp of CAMPAIGNS) {
  const squadRoles = new Set();
  for (const lv of camp.levels) {
    for (const e of lv.script) {
      if (e.kind === 'squad') squadRoles.add(e.role);
    }
  }
  const mine = UNIQUE[camp.id];
  if (!mine) fail(`campaign ${camp.id} has no unique roster`);
  for (const role of mine) {
    if (!squadRoles.has(role)) fail(`${camp.id} is missing unique enemy ${role}`);
  }
  for (const [id, roles] of Object.entries(UNIQUE)) {
    if (id === camp.id) continue;
    for (const role of roles) {
      if (squadRoles.has(role)) fail(`${camp.id} stole ${id}'s unique enemy ${role}`);
    }
  }
}
for (const camp of CAMPAIGNS) {
  for (const lv of camp.levels) {
    const mids = lv.script.filter((e) => e.kind === 'midboss');
    const bosses = lv.script.filter((e) => e.kind === 'finale' || e.kind === 'boss');
    const sq = lv.script.filter((e) => e.kind === 'squad');
    if (mids.length < 2) fail(`${lv.id} does not have two mini-bosses`);
    if (bosses.length !== 1) fail(`${lv.id} does not have one level boss`);
    if (sq.length < 10) fail(`${lv.id} is too thin to be an MVP-scale level`);
    const end = lv.script.reduce((m, e) => Math.max(m, e.at), 0);
    if (end < 1300) fail(`${lv.id} is a chopped stage (${end}u) — MVP scale is ~1320`);
  }
}

const live = Number((entities.match(/for \(let i = 0; i < (\d+); i\+\+\) \{\s*const g = new THREE\.Group/) || [])[1]);
const peakSquad = Math.max(...squads.map((s) => s.n));
if (live && live < peakSquad + 4) fail(`enemy pool ${live} cannot hold a ${peakSquad}-ship wave plus a mid-boss`);

if (diveHp > 12) fail(`trash HP ${diveHp} is in mid-boss territory`);

if (!game.includes('_openHangar')) fail('no shipyard after a clear');
if (!game.includes('applyMotes')) fail('in-run motes do not charge the hangar loadout');
if (!entities.includes('spawnCoins')) fail('no gold in the stage');
if (!readFileSync(resolve(root, 'src/hangar.js'), 'utf8').includes('buyModule')) fail('systems cannot be bought');
if (!readFileSync(resolve(root, 'src/hangar.js'), 'utf8').includes('tractorSpec')) fail('no tractor range/force spec');
if (entities.includes('magnetR = dy > 0 ? 14.5')) fail('pickups still vacuum for free from 14 units');

if (fails.length) {
  console.error('GAMEPLAY CRITIQUE FAIL\n' + notes.map((n) => `  · ${n}`).join('\n') + '\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}
console.log('GAMEPLAY CRITIQUE OK\n' + notes.map((n) => `  · ${n}`).join('\n'));
