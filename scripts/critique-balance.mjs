#!/usr/bin/env node
/**
 * Balance critic. Locks the campaign curve so 1-1 stays the MVP
 * and later slots get harder instead of easier.
 */
import { CAMPAIGNS, stageHeat, coinValue, allLevels } from '../src/campaigns.js';
import { SCRIPT } from '../src/stage.js';
import {
  MODULES,
  arsenal,
  starterLoadout,
  estimateDps,
  estimateBossDps,
  eliteHp,
} from '../src/weapons.js';
import { CATALOG, nextCost, clearPayout } from '../src/hangar.js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const entities = readFileSync(resolve(root, 'src/entities.js'), 'utf8');
const game = readFileSync(resolve(root, 'src/game.js'), 'utf8');
const hangar = readFileSync(resolve(root, 'src/hangar.js'), 'utf8');
const weapons = readFileSync(resolve(root, 'src/weapons.js'), 'utf8');

const fails = [];
const notes = [];
function fail(msg) { fails.push(msg); }
function note(msg) { notes.push(msg); }

if (stageHeat(0, 0) !== 1) fail(`1-1 heat is ${stageHeat(0, 0)} — MVP hulls must stay baseline`);
if (stageHeat(4, 5) < 1.6) fail('campaign 5 does not heat up enough');
if (coinValue(0) !== 5) fail('1-1 coins are not the 5-gold baseline');
if (coinValue(4) < 8) fail('late-campaign coins do not step up');

if (!game.includes('stageHeat') || !game.includes('_stageHeat')) fail('spawns are not heated by campaign slot');
if (!game.includes('spawnSquad') || !/spawnSquad\([^)]*_stageHeat/.test(game)) {
  fail('squads still spawn at heat 1 on every level');
}

const diveHp = Number((entities.match(/\} else \{\s*en\.hp = (\d+)/) || [])[1]);
if (diveHp !== 5) fail(`dive base HP is ${diveHp}, not the MVP 5`);
if (diveHp > 12) fail(`trash HP ${diveHp} is in mid-boss territory`);

if (!/role === 'prism'[\s\S]{0,80}en\.hp = 11/.test(entities)) {
  fail('iris prism bricks do not keep heavy HP — campaign 4 is easier than 1-1');
}
if (!/role === 'wisp'[\s\S]{0,80}en\.hp = 11/.test(entities) && !/prism' \|\| role === 'wisp'[\s\S]{0,80}en\.hp = 11/.test(entities)) {
  fail('heart wisps do not keep heavy HP — campaign 5 is easier than 1-1');
}
if (!/role === 'cinder'[\s\S]{0,120}en\.hp = 6/.test(entities) && !/cinder' \|\| role === 'acolyte'[\s\S]{0,80}en\.hp = 6/.test(entities)) {
  fail('cinder/bloom/ion weavers lost sine HP');
}

if (!/else \{\s*en\.hp = 5 \+ bump\(5\)[\s\S]{0,280}en\.drop = 0/.test(entities)) {
  fail('every dive still coughs a mote — the powerup faucet is back');
}

if (!weapons.includes('damage: 6 + tn')) fail('titan slab is still a wet noodle at mark 1');
if (!weapons.includes("kind: 'nova'") || !/kind: 'nova'[\s\S]{0,80}damage: 2/.test(weapons)) {
  fail('nova burst still deals pellet damage for a luxury price');
}

const starter = estimateDps(0);
if (starter <= 8 || starter >= 40) fail(`starter DPS ${starter.toFixed(1)} left the trickle band`);
const spark = arsenal(starterLoadout()).primary.shots;
if (spark.length < 2) fail('starter lost the twin blasters');
if (spark.some((s) => Math.abs(s.x) >= 1.2)) fail('starter blasters fan wide');

const qTtk = eliteHp('queen', 0) / Math.max(1, estimateDps(0));
if (qTtk < 4 || qTtk > 14) fail(`starter vs queen TTK ${qTtk.toFixed(1)}s left the band`);

function expectedCoins(script, ci) {
  const coin = coinValue(ci);
  const bricks = new Set(['heavy', 'slag', 'chime', 'prism', 'wisp']);
  let gold = 0;
  for (const e of script) {
    if (e.kind === 'squad') {
      gold += bricks.has(e.role) ? e.n * coin : e.n * 0.16 * coin;
    }
    if (e.kind === 'midboss') gold += 3 * coin;
    if (e.kind === 'finale' || e.kind === 'boss') gold += 5 * coin;
    if (e.kind === 'orbs') gold += 2 * coin;
  }
  return gold;
}

const p11 = clearPayout(0, 0, { finale: true, mids: 2 });
const g11 = expectedCoins(SCRIPT, 0);
const total11 = g11 + p11.total;
note(`1-1 gold in-level ${g11.toFixed(0)} clear ${p11.total} total ${total11.toFixed(0)}`);
if (total11 < 420 || total11 > 620) {
  fail(`1-1 gold ${total11.toFixed(0)} should buy one combat gun plus a tractor, not a shopping spree`);
}

function hangarLifetime() {
  const levels = starterLoadout();
  let spent = 0;
  for (const id of Object.keys(MODULES)) {
    while ((levels[id] || 0) < MODULES[id].max) {
      spent += nextCost(levels, id);
      levels[id] += 1;
    }
  }
  return spent;
}

let bank = 0;
for (const slot of allLevels()) {
  const superBoss = slot.lv.chapters.some((ch) => /SUPER/.test(ch.toast || ''));
  const finale = slot.lv.boss === 'finale';
  bank += expectedCoins(slot.lv.script, slot.ci);
  bank += clearPayout(slot.ci, slot.li, { superBoss, finale, mids: 2 }).total;
}
const hangarCost = hangarLifetime();
const ratio = bank / hangarCost;
note(`campaign gold ${bank.toFixed(0)} / hangar ${hangarCost} = ${ratio.toFixed(2)}`);
if (ratio < 0.42 || ratio > 0.95) {
  fail(`campaign gold ratio ${ratio.toFixed(2)} — one clear-through should unlock the yard, not max every bay`);
}

if (CATALOG.needle.unlock > CATALOG.shard.unlock) fail('needle is no longer the first combat buy');
if (CATALOG.shard.unlock < 360) fail('shards undercut needles again');
if (!hangar.includes('clear = 55 + ci * 30')) fail('clear payout curve drifted');

if (CAMPAIGNS[0].levels[0].script !== undefined) {
  const mvp = CAMPAIGNS[0].levels[0].script;
  if (!mvp.some((e) => e.kind === 'finale' && e.at === 1320)) fail('1-1 is not the original MVP run');
}

if (fails.length) {
  console.error('BALANCE CRITIQUE FAIL\n' + notes.map((n) => `  · ${n}`).join('\n') + '\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}
console.log('BALANCE CRITIQUE OK\n' + notes.map((n) => `  · ${n}`).join('\n'));
