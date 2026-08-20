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
const css = read('src/style.css');
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
if (html.includes('id="hangar-next"') || css.includes('hangar-next') || game.includes('_pinHangarNext') || game.includes('hangarNext')) {
  fail('hangar still pins a NEXT plaque over the hull');
}
if (!game.includes('_hangarRecommend') || !game.includes("' recommend'")) {
  fail('hangar list no longer marks the next buy');
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
if (!game.includes('_watchBossPhase') || !css.includes('phase-3') || !game.includes("classList.toggle('phase-3'")) {
  fail('level-boss phases are not on the meter');
}
if (game.includes("toast('PHASE TWO')") || game.includes('FINAL FORM')) {
  fail('phase still dumps gold toast copy');
}
if (!game.includes('bossCard') || !game.includes('LEVEL BOSS|SUPER BOSS|FINALE')) {
  fail('boss clocks still stack a chapter toast on the nameplate');
}
if (!audio.includes("kind === 'fall'") || !game.includes("sting('fall')")) {
  fail('arrive and kill share one sting');
}
if (!game.includes('_bossName(role)') || game.includes("bossTitle.textContent = this._bossToast")) {
  fail('kill plate still swaps in DOWN copy');
}
if (!html.includes('boss-crack') || !css.includes('.boss-crack')) {
  fail('phase does not crack the bar');
}
if (game.includes('_bossTitleTimer')) fail('arrival name still hides before the fall');
if (!css.includes('#boss-title.show.settled') || !game.includes("classList.add('settled')")) {
  fail('hanging name never settles after the enter hold');
}
if (!game.includes("classList.remove('show', 'fall', 'settled')")) {
  fail('boss title is not cleared on reset');
}
if (!game.includes('_pendingClear || this._bossSlow > 0) return')) {
  fail('kill plate is stripped when the hull dies');
}
if (!game.includes('boss.levelBoss || boss.superBoss || boss.role === \'finale\'')) {
  fail('minis still wear the level meter');
}
if (!entities.includes('midScale') || !entities.includes('en.mid && heat > 1.001')) {
  fail('later minis still wear full boss HP');
}
if (!entities.includes('_syncHullMeter') || !entities.includes('hullMeter')) {
  fail('minis have no hull meter');
}
if (!game.includes('_bossSlow = superBoss ? 5.4 : 4.7') || !game.includes('_collectLooseGold')) {
  fail('boss kill still dumps the board before the gold');
}
if (!html.includes('id="rift-bloom"') || !css.includes('@keyframes rift-bloom') || !game.includes('_showRiftBloom') || !game.includes('_riftBloom')) {
  fail('level boss has no fall bloom');
}
if (!game.includes('hangar || this.hangar || loadHangar()')) {
  fail('clear hangar still reloads a stale wallet');
}
if (!game.includes("shotFor('spark'") || !audio.includes('endFreq')) {
  fail('spark trickle or lance/door sweeps are missing');
}
for (const job of jobs) {
  if (!hangar.toLowerCase().includes(job)) fail(`hangar blurb is not a job: ${job}`);
}

if (!html.includes('id="bomb-flash"') || !html.includes('iris-ring') || !css.includes('bomb-iris') || !css.includes('scale(0.08)') || !game.includes('bombBoom') || !audio.includes('bombBoom()')) {
  fail('bomb has no iris or boom voice');
}
if (css.includes('transform: scale(0.72)') && css.includes('bomb-iris')) {
  fail('bomb iris is still a scaled radial sheet');
}
if (!audio.includes('bomb()')) fail('legacy bomb() voice was removed');
if (!game.includes('_comboCross') || !game.includes('_comboBreak') || !css.includes('combo-mark-2') || !css.includes('combo-mark-8') || !audio.includes('comboStab')) {
  fail('combo marks do not stab or break');
}
if (!game.includes("animationName).startsWith('combo-stab')") || !css.includes('translateY(18px)')) {
  fail('combo classes stick or the drop does not travel');
}
if (game.includes("classList.add('combo-pop')")) fail('per-crumb combo-pop is still the juice');
if (!game.includes("toggle('combo-hot', this.combo >= 2)")) {
  fail('combo heat does not hang from ×2');
}
if (!game.includes('_spawnGoldPip') || !game.includes('_hudPoint') || !css.includes('gold-pip') || !css.includes('gold-catch')) {
  fail('gold does not fly from the ribbon to the counter');
}
if (!/_spawnGoldPip[\s\S]{0,500}requestAnimationFrame\(\(\) => \{\s*requestAnimationFrame/.test(game)) {
  fail('gold pip does not paint on the coin for a frame');
}
if (!css.includes('#boss-title') || !/\#boss-title \{[\s\S]{0,80}z-index: 8/.test(css) || !/\#bomb-flash \{[\s\S]{0,80}z-index: 3/.test(css)) {
  fail('boss title is not above the bomb iris');
}
if (game.includes('toast(`+₡') || game.includes("toast('+₡")) {
  fail('gold still dumps a toast instead of a pip');
}
if (game.includes("toast('NEAR MISS')")) fail('near-miss toast came back');
if (!html.includes('id="result-rec"') || !html.includes('id="result-next"') || !game.includes('CLEARED ·') || !game.includes('NEXT BUY ·') || !game.includes('CAMPAIGN CLEAR')) {
  fail('results are not a record of clear / next buy / next deploy');
}
if (!/_openHangar[\s\S]{0,1800}CLEARED ·/.test(game) || !game.includes('_gradeNow(true)')) {
  fail('sector clear hangar does not carry the record');
}
if (!game.includes('LOST ·') || /stats\.textContent = victory[\s\S]{0,80}GOLD /.test(game)) {
  fail('death does not name the lost level');
}
if (game.includes('_renderScoreboard(this.ui.resultBoard')) {
  fail('results card still dumps the hi-score grid');
}
if (!game.includes('li === cursor.l && !cleared')) {
  fail('spent current still wears a second sun');
}
if (!campaigns.includes('!cleared.includes(`${c}-${l}`)')) {
  fail('markCleared still rewinds the frontier');
}
if (!css.includes('.map-node.spent') || !css.includes('.map-node.next') || !game.includes("next ? 'next'")) {
  fail('map does not mark spent clears and the next deploy');
}
if (!audio.includes("id === 'default' ? 'enter'") || !audio.includes('enter: 98') || !audio.includes('heart: 73') || !audio.includes('hangar: 92')) {
  fail('stems do not change key per chapter');
}
if (audio.includes('warden: 98')) fail('enter and warden still share 98');
if (!audio.includes('warden: 116')) fail('warden has no own bed key');
if (!audio.includes('_padOsc') || !audio.includes("figure: 'drone'") || !audio.includes("figure: 'silk'") || !audio.includes("figure: 'pulse'") || !audio.includes("figure: 'choir'") || !audio.includes("figure: 'yard'")) {
  fail('rooms are still a choir-Hz table without named figures');
}
if (!audio.includes('_figurePulse') || !audio.includes('_figureDrone') || !audio.includes('_figureYard') || !audio.includes('_figureChoir')) {
  fail('named rooms have no playable figures');
}
if (!audio.includes("id === 'heart' || id === 'hangar') return")) {
  fail('intensity kick still overwrites the heart and hangar beds');
}
if (!game.includes('_audioChapter(') || !game.includes("camp?.id === 'heart'") || !/_audioChapter[\s\S]{0,400}kind === 'finale'/.test(game)) {
  fail('C5 audio does not hold heart until Sentinel');
}
if (!audio.includes('yardTick()') || !game.includes("setChapter('hangar')") || !game.includes('yardTick()')) {
  fail('hangar has no yard tick');
}
if (!audio.includes('[92, 138, 184, 138]')) fail('hangar is a click, not a looping yard bed');
if (!campaigns.includes("themedLevel('5-1', 'LAST LIGHT', 'heart'") || !read('src/world.js').includes('heart:')) {
  fail('campaign 5 never enters a heart chapter');
}
if (!campaigns.includes('return getLevel(ci, li + 1)')) fail('nextSlot still has no level');
if (!game.includes('if (this._pendingClear || this._bossSlow > 0) return')) {
  fail('stray shot can still steal a clear');
}
if (!entities.includes("e.levelBoss || e.superBoss || e.role === 'finale'")) {
  fail('activeBoss still returns leftover mids');
}
if (game.includes('_midsThisLevel || 2') || !game.includes('_noteMidKill')) {
  fail('mid bounty still pays ghosts');
}
if (!entities.includes('_pipOn') || !entities.includes('hullChip') || !audio.includes('chip()')) {
  fail('mini hull is still a silent bar');
}
if (html.includes('id="rift-bloom"') && /id="rift-bloom"[\s\S]{0,80}iris-ring/.test(html)) {
  fail('fall bloom is still a bomb iris');
}
if (!css.includes('rift-glow') || !game.includes('goldFrom') || !game.includes("hangarGold.classList.add('gold-catch')")) {
  fail('hangar gold still just ticks');
}
if (!game.includes('lv.banner === \'finale\'') || game.includes("lv.boss === 'finale' ? '✦'")) {
  fail('1-1 still wears the finale star');
}

if (!html.includes('id="continue-screen"') || !html.includes('continue-fade') || !html.includes('id="continue-fade"')) {
  fail('continue has no dying fade bar');
}
if (!/id="continue-screen"[^>]*pause-dim/.test(html) || !css.includes('continue-pulse') || !css.includes('#continue-fade')) {
  fail('continue is not a dying signal');
}
if (!game.includes('_tickContinue') || !game.includes('this._continueT = 9') || !game.includes('_tickContinue(dt)')) {
  fail('continue never times out');
}
if (!game.includes('_acceptContinue') || !html.includes('CONTINUE')) {
  fail('arcade continue was deleted');
}

if (!css.includes('hull-hit') || !css.includes('life-lost') || !game.includes("classList.add('hull-hit')")) {
  fail('hull bar does not flinch');
}
if (!game.includes('_syncLives({ lost') || !game.includes('_syncLives({ force: true })') || !game.includes('if (!force && !lost && this._livesPainted')) {
  fail('life pips rebuild every frame and kill the flinch');
}

if (!audio.includes('enemyWindup()') || !audio.includes('enemyShot(fat)') || !entities.includes('this.onWindup') || !entities.includes('this.onShot')) {
  fail('enemy guns have no voice');
}
if (!game.includes('this.audio.enemyWindup()') || !game.includes('this.audio.enemyShot(fat)') || !entities.includes('this.onWindup?.()') || !entities.includes('this.onShot?.(')) {
  fail('enemy windup/shot callbacks are not wired');
}

const endRun = game.slice(game.indexOf('_endRun(victory)'), game.indexOf('toast(text)'));
if (!endRun || endRun.includes('explosion(true)')) {
  fail('death still bangs twice on the rank card');
}

if (game.includes('toast(`${slot.lv.id')) {
  fail('deploy still toasts id — NAME');
}

if (html.includes('HUNTERS') || html.includes('id="threat"') || css.includes('threat-panel')) {
  fail('HUNTERS chrome is still on the HUD');
}
if (!css.includes('"depth gold gold"')) {
  fail('mobile grid still reserves a hunters column');
}
if (!game.includes('hunterCount()')) fail('hunterCount was deleted instead of the chrome');

const clearFn = game.slice(game.indexOf('_clearLevel()'), game.indexOf('\n  win()'));
if (!clearFn || clearFn.includes("sting('chapter')")) {
  fail('hangar door still stings chapter');
}
if (!game.includes("sting('chapter')")) fail('boss-phase chapter sting was deleted');

if (!html.includes('id="setup-screen"') || !html.includes('id="setup-reset"') || !html.includes('id="setup-back"')) {
  fail('no setup board');
}
if (!game.includes('loadSetup') || !game.includes('resetSetup') || !read('src/settings.js').includes('aether-setup')) {
  fail('setup does not persist on this hull');
}
if (!game.includes('setMix(') || !audio.includes('setMix(music, sfx)') || !audio.includes('1.4 * this._sfxMix')) {
  fail('guns still share the quiet factory mix');
}
if (!weapons.includes('Math.max(0, sp - 1) * 0.042')) {
  fail('blasters do not stretch throw as they mark up');
}
if (!game.includes('setContinue(true)') || !audio.includes('setContinue(on)')) {
  fail('continue still mutes like pause');
}

if (fails.length) {
  console.error('POLISH CRITIQUE FAIL\n' + notes.map((n) => `  · ${n}`).join('\n') + '\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}
console.log('POLISH CRITIQUE OK\n' + notes.map((n) => `  · ${n}`).join('\n'));
