#!/usr/bin/env node
/**
 * Adversarial polish critic. Locks the seven wow layers so later
 * levels stop being a reskin of 1-1 and the hands get a record.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CAMPAIGNS, MVP_SCRIPT, SIG, SCRIPT_OVERLAYS, allLevels } from '../src/campaigns.js';

const root = resolve(import.meta.dirname, '..');
const read = (p) => readFileSync(resolve(root, p), 'utf8');

const fails = [];
const notes = [];
function fail(msg) { fails.push(msg); }
function note(msg) { notes.push(msg); }

const stage = read('src/stage.js');
const patterns = read('src/patterns.js');
const entities = read('src/entities.js');
const game = read('src/game.js');

const mvp = CAMPAIGNS[0].levels[0];
if (mvp.id !== '1-1' || mvp.script.length !== MVP_SCRIPT.length) fail('1-1 is no longer the frozen MVP run');
if (mvp.exitAt !== 1360 || mvp.length !== 1400) fail('1-1 stage length drifted');

for (const form of ['silk-cut', 'curtain', 'aisle', 'split', 'dark', 'judgment']) {
  if (!stage.includes(`form === '${form}'`)) fail(`lanesFor is missing authored form ${form}`);
}

const later = allLevels().filter((s) => s.lv.id !== '1-1');
if (later.length !== 29) fail(`expected 29 later slots, got ${later.length}`);
for (const slot of later) {
  if (!SCRIPT_OVERLAYS[slot.lv.id]) fail(`${slot.lv.id} has no overlay`);
}

for (const camp of CAMPAIGNS) {
  const sig = SIG[camp.id];
  const hit = camp.levels.some((lv) => lv.script.some((e) => e.form === sig.form));
  if (!hit) fail(`${camp.id} never plays its ${sig.form} signature`);
  note(`${camp.id} signature ${sig.form} / ${sig.toast}`);
}

const supers = later.filter((s) => s.lv.banner === 'super' || s.lv.banner === 'finale');
if (supers.length !== 5) fail(`need 5 super/finale levels, found ${supers.length}`);
for (const slot of supers) {
  if (slot.lv.exitAt < 1450) fail(`${slot.lv.id} climax is still MVP length`);
  if (!slot.lv.script.some((e) => e.form === 'judgment')) fail(`${slot.lv.id} has no judgment aisle`);
}

if (!patterns.includes('function climax(')) fail('no climax() third-phase gate');
if (!entities.includes('en.levelBoss') || !entities.includes('en.superBoss')) {
  fail('elites are not told when they are the level boss');
}
if (!game.includes('_bossFlags()')) fail('level-boss spawns do not mark climax fights');

if (fails.length) {
  console.error('POLISH CRITIQUE FAIL\n' + notes.map((n) => `  · ${n}`).join('\n') + '\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}
console.log('POLISH CRITIQUE OK\n' + notes.map((n) => `  · ${n}`).join('\n'));
