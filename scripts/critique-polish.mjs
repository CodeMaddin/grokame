#!/usr/bin/env node
/**
 * Adversarial polish critic. Locks the seven wow layers so later
 * levels stop being a reskin of 1-1 and the hands get a record.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { CAMPAIGNS, MVP_SCRIPT, SIG, allLevels } from '../src/campaigns.js';
import { BEATS, CAMPAIGN_SCRIPTS } from '../src/beats.js';
import { lanesFor } from '../src/stage.js';

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
const campaigns = read('src/campaigns.js');
const crafts = read('src/crafts.js');
const audio = read('src/audio.js');

const mvp = CAMPAIGNS[0].levels[0];
if (mvp.id !== '1-1' || mvp.script.length !== MVP_SCRIPT.length) fail('1-1 is no longer the frozen MVP run');
if (mvp.exitAt !== 1360 || mvp.length !== 1400) fail('1-1 stage length drifted');

if (campaigns.includes('function settleScript') || campaigns.includes('overlayScript')) {
  fail('the remix solver is still writing later clocks');
}
if (!campaigns.includes("from './beats.js'")) fail('later levels are not driven by authored beat sheets');
if (typeof CAMPAIGN_SCRIPTS.stinger === 'undefined') fail('campaign scripts are missing');

for (const form of ['silk-cut', 'curtain', 'aisle', 'split', 'dark']) {
  if (!stage.includes(`form === '${form}'`)) fail(`lanesFor is missing authored form ${form}`);
}
if (stage.includes("form === 'aisle'") && /form === 'aisle'[\s\S]{0,80}i % 2/.test(stage)) {
  fail('aisle still checkerboards — the nave must lock');
}

const later = allLevels().filter((s) => s.lv.id !== '1-1');
if (later.length !== 29) fail(`expected 29 later slots, got ${later.length}`);
if (later.filter((s) => s.lv.script.some((e) => e.kind === 'breath' && e.at === 470)).length > 2) {
  fail('later levels still share the 1-1 breath@470 spine');
}
const silk = lanesFor('silk-cut', 8, 24);
const silkDup = silk.some((x, i) => silk.some((y, j) => i !== j && Math.abs(x - y) < 1.2));
if (silkDup) fail('silk-cut n=8 still stacks two ships on one lane');
for (const slot of later) {
  if (!BEATS[slot.lv.id]) fail(`${slot.lv.id} has no beat sheet`);
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
  if (!slot.lv.script.some((e) => e.kind === 'hold')) fail(`${slot.lv.id} has no pre-super hold`);
}

if (!patterns.includes('function climax(')) fail('no climax() third-phase gate');
if (!patterns.includes('en.superBoss ? 0.72') && !patterns.includes('return en.superBoss')) {
  fail('phase 3 has no hold/release grammar');
}
if (!entities.includes('en.levelBoss') || !entities.includes('en.superBoss')) {
  fail('elites are not told when they are the level boss');
}
if (!entities.includes('namedHull ? 1')) fail('named hulls still take heat HP');
if (!game.includes('_bossFlags()')) fail('level-boss spawns do not mark climax fights');
if (!game.includes("ev.kind === 'breath'") || !game.includes("ev.kind === 'hold'")) {
  fail('breath/hold are not wired');
}
if (!audio.includes('hold(kind')) fail('audio has no hold duck');
if (!crafts.includes('parts = [innerShell, outerShell, shell]')) {
  fail('Sentinel cage still survives phase 3');
}
if (crafts.includes('if (i >= 3) parts.push(segment)')) {
  fail('Queen inner wings still survive phase 3');
}

const html = read('index.html');
const hangar = read('src/hangar.js');
const weapons = read('src/weapons.js');
if (!html.includes('id="title-controls"') || !html.includes('A/D SLIDE') || !html.includes('B BOMB')) {
  fail('title does not teach slide/climb/fire/bomb in one line');
}
if (!html.includes('title-touch') || !html.includes('TOUCH · HOLD TO FIRE')) {
  fail('touch does not get its own one-liner');
}
if (/<div class="controls">/.test(html)) fail('title still has the five-line controls wall');
if (!html.includes('id="teach"') || !game.includes('_teach(') || !game.includes('_maybeBoardTeach')) {
  fail('first-run teach is not a dedicated plate');
}
if (game.includes('this.live.') || game.includes('this.live?') || !game.includes('this.entities.gates.find') || !/_maybeBoardTeach[\s\S]{0,800}en\.role/.test(game)) {
  fail('board teach does not read live gates/enemies');
}
if (!game.includes('_teachQueue') || !game.includes('_showTeach')) {
  fail('teach plate can still stomp a live lesson');
}
if (game.includes('_maybeTeach') || game.includes('RAM THE GATES')) {
  fail('school still uses toast or lies about ramming gates');
}
if (!game.includes('SHOOT THE LOCK') || !game.includes('HOLD FIRE ON THE BRICK') || !game.includes('MOTES CHARGE OWNED BAYS') || !game.includes('GOLD BUYS BAYS IN DRYDOCK')) {
  fail('first-run teach copy is missing');
}
if (!html.includes('id="hangar-next"') || !game.includes('hangarNext') || !game.includes('NEXT ·') || !game.includes('projectKit') || !game.includes('_pinHangarNext')) {
  fail('hangar does not pin the next buy on the hull bay');
}
if (game.includes('NEXT BUY —')) fail('hangar still captions NEXT BUY on the blurb');
if (!hangar.includes('export function recommend')) fail('hangar has no recommend()');
if (!game.includes('hangarHint.hidden = afterClear')) fail('clear hangar still dumps a hint paragraph');
if (!game.includes('openerDup') || !game.includes('WAVE 0?1')) {
  fail('WAVE 01 still double-names the opener');
}
if (/_resetRun\([\s\S]{0,400}_hinted = new Set/.test(game)) {
  fail('first-run school resets every deploy');
}

if (!audio.includes('shotFor(kind') || !game.includes('_voiceGun') || !game.includes('shotFor')) {
  fail('guns still share one voice');
}
if (!weapons.includes('GUN_KICK') || !weapons.includes('titan: 0.92')) {
  fail('guns have no per-kind kick');
}
const jobs = ['kills the brick', 'boss tooth', 'drops on hold', 'clears the flanks', 'owns the flanks'];
if (!game.includes("['titan', 'nova', 'mine', 'missile', 'primary']") || !game.includes('frameOwns')) {
  fail('first bank does not own the fire frame');
}
if (!game.includes('mine: [0.05, -0.62') || !game.includes('needle: [0.04, 0.06, 0.9]')) {
  fail('kick vectors do not follow the voiced kind');
}

if (!html.includes('id="boss-title"') || !game.includes('_announceBoss') || !game.includes('_beginBossClear')) {
  fail('level bosses have no nameplate or kill beat');
}
if (!game.includes('_bossHold') || !game.includes('_bossSlow')) fail('boss hold/slow is not wired');
if (!game.includes('PHASE TWO') || !game.includes('FINAL FORM') || !game.includes('PHASE THREE')) {
  fail('level-boss phases are not readable');
}
if (!game.includes('_watchBossPhase')) fail('phase sting is not watched');
if (!game.includes("shotFor('spark'") || !audio.includes('endFreq')) {
  fail('spark trickle or lance/door sweeps are missing');
}
for (const job of jobs) {
  if (!hangar.toLowerCase().includes(job)) fail(`hangar blurb is not a job: ${job}`);
}

if (fails.length) {
  console.error('POLISH CRITIQUE FAIL\n' + notes.map((n) => `  · ${n}`).join('\n') + '\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}
console.log('POLISH CRITIQUE OK\n' + notes.map((n) => `  · ${n}`).join('\n'));
