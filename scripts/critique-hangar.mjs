#!/usr/bin/env node
/**
 * Adversarial shipyard / hangar critic.
 * Any missing measurement, unmatched selector, or unparseable rule is a fail.
 * Uncertainty is not a pass.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { tractorSpec, tractorPull, CATALOG } from '../src/hangar.js';
import { MODULES, MODULE_ORDER, UNLOCK_ORDER, arsenal, starterLoadout } from '../src/weapons.js';

const root = resolve(import.meta.dirname, '..');
const read = (p) => readFileSync(resolve(root, p), 'utf8');

const css = read('src/style.css');
const html = read('index.html');
const game = read('src/game.js');
const yard = read('src/shipyard.js');

const fails = [];
const notes = [];
function fail(msg) { fails.push(msg); }
function note(msg) { notes.push(msg); }
function uncertain(cond, msg) {
  if (!cond) fail(`uncertain: ${msg}`);
  return !!cond;
}

function extractMedia(src, needle) {
  const i = src.indexOf(needle);
  if (i < 0) return null;
  const start = src.indexOf('{', i);
  if (start < 0) return null;
  let depth = 0;
  for (let j = start; j < src.length; j++) {
    const ch = src[j];
    if (ch === '{') depth += 1;
    else if (ch === '}') {
      depth -= 1;
      if (depth === 0) return src.slice(start + 1, j);
    }
  }
  return null;
}

function bodyFrom(src, start) {
  if (start < 0) return null;
  let depth = 0;
  for (let j = start; j < src.length; j++) {
    if (src[j] === '{') depth += 1;
    else if (src[j] === '}') {
      depth -= 1;
      if (depth === 0) return src.slice(start + 1, j);
    }
  }
  return null;
}

function firstRule(src, selector) {
  const re = new RegExp(`(?:^|\\n)\\s*${selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\{`);
  const m = re.exec(src);
  if (!m) return null;
  return bodyFrom(src, src.indexOf('{', m.index));
}

function ruleNear(src, needle) {
  const i = src.indexOf(needle);
  if (i < 0) return null;
  const start = src.indexOf('{', i);
  const close = src.indexOf('}', i);
  if (start < 0 || (close >= 0 && close < start)) return null;
  return bodyFrom(src, start);
}

function decl(body, prop) {
  if (!body) return null;
  const re = new RegExp(`(?:^|\\n|;)\\s*${prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:\\s*([^;]+);`);
  const m = re.exec(body);
  return m ? m[1].trim() : null;
}

function vh(value) {
  const m = String(value || '').match(/^([0-9.]+)vh$/);
  return m ? Number(m[1]) : NaN;
}

function px(value) {
  const m = String(value || '').match(/^([0-9.]+)px$/);
  return m ? Number(m[1]) : NaN;
}

const desktop = css.slice(0, css.indexOf('@media (max-width: 900px)'));
if (!uncertain(desktop.length > 200, 'desktop CSS slice before the 900px query is empty')) {
  /* already failed */
}

const mobile = extractMedia(css, '@media (max-width: 900px)');
if (!uncertain(mobile && mobile.length > 400, 'could not extract @media (max-width: 900px) hangar rules')) {
  console.error('HANGAR CRITIQUE FAIL\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}

if (!html.includes('id="hangar-hull-btn"')) fail('no VIEW HULL control — phone users cannot clear the shop off the ship');
if (!html.includes('id="hangar-buy"') || !html.includes('id="hangar-done"')) fail('install/continue controls missing');
if (!html.includes('id="hangar-item-cost"')) fail('desktop cost node missing');

const hullDesktop = firstRule(desktop, '#hangar-hull-btn');
if (!uncertain(hullDesktop, 'desktop #hangar-hull-btn rule missing')) {
  /* fail already */
} else if (decl(hullDesktop, 'display') !== 'none') {
  fail('VIEW HULL is visible on desktop — it will stack under CONTINUE and clobber the panel');
}

const screen = firstRule(mobile, '#hangar-screen');
if (!uncertain(screen, 'mobile #hangar-screen rule missing')) {
  /* fail already */
} else {
  if (decl(screen, 'overflow') !== 'hidden') fail('mobile hangar-screen does not clip overflow — red cost can paint over buttons');
  if (decl(screen, 'flex-direction') !== 'column') fail('mobile hangar is not a column — the hull peek has no reserved row');
  const bg = (decl(screen, 'background') || '').replace(/\s+/g, ' ');
  if (!/transparent|none/.test(bg)) fail(`mobile hangar-screen background "${bg}" still veils the hull — it must be transparent`);
  if (/linear-gradient/.test(bg)) fail('mobile hangar-screen still paints a gradient over the 3D ship');
}

const stage = firstRule(mobile, '.hangar-stage');
if (!uncertain(stage, 'mobile .hangar-stage rule missing')) {
  /* fail already */
} else {
  const minH = vh(decl(stage, 'min-height'));
  const flex = decl(stage, 'flex') || '';
  if (!uncertain(Number.isFinite(minH), 'mobile hangar-stage min-height is not in vh')) {
    /* fail already */
  } else {
    note(`mobile hull peek ${minH}vh`);
    if (minH < 28) fail(`hull peek ${minH}vh is too short — the ship is a stamp under the titles`);
    if (minH > 46) fail(`hull peek ${minH}vh eats the shop on a phone`);
  }
  if (!/0\s+0\s+\d/.test(flex) && !flex.startsWith('0 0')) {
    fail(`mobile hangar-stage flex "${flex}" can shrink — the hull peek will collapse under the list`);
  }
}

const hint = firstRule(mobile, '.hangar-hint');
if (!uncertain(hint, 'mobile .hangar-hint rule missing')) {
  /* fail already */
} else if (decl(hint, 'display') !== 'none') {
  fail('mobile hangar hint still occupies the peek — it will sit on the hull');
}

const costRule = ruleNear(mobile, '.hangar-item-cost');
if (!uncertain(costRule, 'mobile rule hiding .hangar-item-cost was not found')) {
  /* fail already */
} else if (decl(costRule, 'display') !== 'none') {
  fail('mobile still draws #hangar-item-cost — NOT ENOUGH will paint over INSTALL');
}

if (/\.hangar-item-cost\.poor/.test(mobile) && decl(costRule, 'display') !== 'none') {
  fail('red poor-cost styling is still live on mobile');
}

const list = firstRule(mobile, '.hangar-list');
if (!uncertain(list, 'mobile .hangar-list rule missing')) {
  /* fail already */
} else {
  if (decl(list, 'min-height') !== '0') fail('mobile hangar-list lacks min-height:0 — flex will refuse to shrink and overflow onto the buttons');
  if (!String(decl(list, 'overflow-y') || decl(list, 'overflow') || '').includes('auto')) {
    fail('mobile hangar-list is not independently scrollable');
  }
}

const panel = firstRule(mobile, '.hangar-panel');
if (!uncertain(panel, 'mobile .hangar-panel rule missing')) {
  /* fail already */
} else {
  if (decl(panel, 'min-height') !== '0') fail('mobile hangar-panel cannot shrink — the shop will spill offscreen');
  if (!String(decl(panel, 'overflow') || '').includes('hidden')) fail('mobile hangar-panel does not clip children');
}

const actions = firstRule(mobile, '#hangar-screen .hangar-actions');
if (!uncertain(actions, 'mobile #hangar-screen .hangar-actions rule missing')) {
  /* fail already */
} else {
  if (decl(actions, 'display') !== 'grid') fail('mobile hangar actions are not a grid — INSTALL/CONTINUE will stack and cover the list');
  const cols = decl(actions, 'grid-template-columns') || '';
  if (!cols.includes('1fr')) fail(`mobile hangar actions columns "${cols}" are not a two-up row`);
  if (decl(actions, 'flex-shrink') !== '0') fail('mobile hangar actions can shrink — labels will clip into each other');
}

const actionBtn = firstRule(mobile, '#hangar-screen .hangar-actions button');
if (!uncertain(actionBtn, 'mobile hangar action button rule missing')) {
  /* fail already */
} else {
  const tap = px(decl(actionBtn, 'min-height'));
  if (!uncertain(Number.isFinite(tap), 'mobile hangar button min-height is not px')) {
    /* fail already */
  } else if (tap < 40) {
    fail(`hangar tap target ${tap}px is below 40px`);
  }
}

const hullMobile = firstRule(mobile, '#hangar-hull-btn');
if (!uncertain(hullMobile, 'mobile #hangar-hull-btn rule missing')) {
  /* fail already */
} else {
  const d = decl(hullMobile, 'display');
  if (d === 'none') fail('VIEW HULL is still hidden on mobile');
}

if (!mobile.includes('#hangar-screen.shop-min')) fail('no shop-min layout — there is no way to clear the purchasing UI off the hull');
const minStage = firstRule(mobile, '#hangar-screen.shop-min .hangar-stage');
if (!uncertain(minStage, 'shop-min stage rule missing')) {
  /* fail already */
} else if (!String(decl(minStage, 'flex') || '').startsWith('1')) {
  fail('shop-min does not give the leftover stage to the hull');
}
if (!/#hangar-screen\.shop-min \.hangar-list/.test(mobile)) fail('shop-min does not hide the buy list');
if (!/#hangar-screen\.shop-min #hangar-buy/.test(mobile) && !mobile.includes('shop-min #hangar-buy')) {
  fail('VIEW HULL still leaves INSTALL/RETURN covering the expanded hull');
}

const poorBody = ruleNear(css, '#hangar-buy.poor') || '';
if (!uncertain(poorBody.length > 0, 'no #hangar-buy.poor rule — NOT ENOUGH will be a faded disabled control')) {
  /* fail already */
} else {
  const op = decl(poorBody, 'opacity');
  if (op !== '1') fail(`poor install button opacity is ${op || 'unset'} — shortage state must stay fully visible`);
  if (!/#ff5a7a|#ff8aa0|255,\s*90,\s*122/.test(poorBody)) fail('poor install button is not red');
}

const disabled = firstRule(css, '#hangar-buy:disabled');
if (disabled && decl(disabled, 'opacity') === '0.4' && !poorBody.includes('opacity: 1')) {
  fail('#hangar-buy:disabled { opacity: 0.4 } still applies to NOT ENOUGH');
}

const buyBlock = (game.split('if (this.ui.hangarBuy)')[1] || '').split('\n  }')[0] || '';
if (!uncertain(buyBlock.includes('textContent'), 'could not find hangarBuy label assignment')) {
  /* fail already */
} else {
  if (!buyBlock.includes('NOT ENOUGH')) fail('NOT ENOUGH is not the install-button label — it will keep living in the cost line and cover CONTINUE');
  if (!buyBlock.includes("classList.toggle('poor', poor)") && !buyBlock.includes('classList.toggle("poor", poor)')) {
    fail('install button never gets .poor — red shortage state cannot light up');
  }
}

if (!game.includes('_toggleHangarShop') || !game.includes('_setHangarShopMin')) {
  fail('no shop minimize toggle wired');
}
if (!game.includes("classList.toggle('shop-min'") && !game.includes('classList.toggle("shop-min"')) {
  fail('shop-min class is never toggled');
}
if (!game.includes('hangar-hull-btn') && !game.includes('hangarHullBtn')) fail('VIEW HULL button is not bound in game.js');

if (!yard.includes('setViewport') || !yard.includes('setScissor')) {
  fail('drydock does not scissor into the leftover stage — the hull is a crop of a tall frustum');
}
if (!/this\._stage \? this\._stage\.width/.test(yard) && !/filmW = this\._stage \? this\._stage\.width/.test(yard)) {
  fail('hangar camera film is not the stage box');
}
if (!/r\.render\(this\.scene, this\.camera\)/.test(yard) && !/this\.renderer\.render\(this\.scene, this\.camera\)/.test(yard)) {
  fail('hangar does not draw the hull with a direct render — edges will not read');
}
if (/\.composer\.render\(/.test(yard)) fail('hangar still composites bloom over the hull');
if (/setViewOffset\(/.test(yard) && !/clearViewOffset\(/.test(yard)) {
  fail('hangar still uses setViewOffset as the only framing — that crops a tall frustum');
}

const pmrem = yard.match(/fromScene\(new RoomEnvironment\(\),\s*([0-9.]+)\)/);
if (!uncertain(pmrem, 'RoomEnvironment PMREM sigma not found')) {
  /* fail already */
} else if (Number(pmrem[1]) > 0.04) {
  fail(`PMREM sigma ${pmrem[1]} smears the hangar environment`);
}

const portraitCam = yard.match(/_portrait\) \{\s*this\.camera\.position\.set\(([^)]+)\)/);
if (!uncertain(portraitCam, 'portrait hangar camera position not found')) {
  /* fail already */
} else {
  const parts = portraitCam[1].split(',').map((s) => Number(s.trim()));
  note(`portrait hangar camera ${parts.join(', ')}`);
  if (parts.some((n) => !Number.isFinite(n))) fail('uncertain: portrait camera is not numeric');
  else {
    if (Math.abs(parts[0]) < 1.2) fail('portrait hangar camera is head-on — wings will not read as a ship');
    if (parts[2] > 8) fail(`portrait hangar camera z ${parts[2]} is too far — the hull is a postage stamp in the peek`);
  }
}

const peekVh = vh(decl(stage, 'min-height'));
const tap = px(decl(actionBtn, 'min-height'));
if (Number.isFinite(peekVh) && Number.isFinite(tap)) {
  const PHONE_W = 390;
  const PHONE_H = 844;
  const peekPx = PHONE_H * (peekVh / 100);
  const chrome = 28;
  const panelH = PHONE_H - peekPx - chrome;
  const gold = 36;
  const name = 18;
  const actionRows = tap + 6 + tap;
  const pad = 16 + 24;
  const listH = panelH - gold - name - actionRows - pad;
  note(`iPhone 390×844 peek ${peekPx.toFixed(0)}px list ~${listH.toFixed(0)}px`);
  if (listH < 140) fail(`on 390×844 the shop list only has ${listH.toFixed(0)}px — rows will clobber INSTALL/CONTINUE`);
  if (peekPx < 220) fail(`on 390×844 the hull peek is ${peekPx.toFixed(0)}px — not enough to see what is being built`);
  const halfBtn = (PHONE_W - 20 - 6) / 2;
  if (halfBtn < 140) fail('install/continue columns are too narrow for NOT ENOUGH ₡N');
}

if (!CATALOG.tractor || !CATALOG.pull) fail('shipyard is missing separate tractor range / force bays');
if (CATALOG.tractor === CATALOG.pull) fail('range and force are the same catalog row');
if (!MODULES.tractor || !MODULES.pull) fail('uncertain: tractor modules are not in MODULES');
if ((MODULES.tractor.max | 0) < 2 || (MODULES.pull.max | 0) < 2) fail('tractor range/force cannot be upgraded');
if (UNLOCK_ORDER.includes('tractor') || UNLOCK_ORDER.includes('pull')) {
  fail('the tractor is leaking into the gun unlock sequence — it must be a hangar buy');
}
for (const id of MODULE_ORDER) {
  if (!CATALOG[id]) fail(`uncertain: CATALOG is missing ${id}`);
}
if (!html.includes('TRACTOR') && !game.includes('tractorSpec')) fail('tractor is not wired into the hangar UI path');

const entities = read('src/entities.js');
if (/magnetR\s*=\s*dy\s*>\s*0\s*\?\s*14\.5/.test(entities)) fail('free 14.5u vacuum is still on every pickup — the tractor is not a purchase');
if (!entities.includes('tractorPull')) fail('pickup stepping does not call tractorPull');
if (!entities.includes('_attractOrb')) fail('orbs are not attracted — magnet must drink gold and powerups');
if (!game.includes('tractorSpec(this.loadout)')) fail('the run does not pass the hangar tractor spec into the stage');
if (!read('src/ship.js').includes('buildTractorKit') || !read('src/ship.js').includes('buildPullKit')) {
  fail('the hull does not wear separate tractor range / force kits');
}

const none = tractorSpec({ spark: 1 });
if (!uncertain(none && typeof none.range === 'number', 'tractorSpec({spark:1}) did not return a spec')) {
  /* fail already */
} else {
  note(`starter tractor range ${none.range} force ${none.force}`);
  if (none.range > 0 || none.force > 0) fail('starter hulls still have a free magnet');
}

const r1 = tractorSpec({ tractor: 1 });
const r5 = tractorSpec({ tractor: 5 });
const f1 = tractorSpec({ pull: 1 });
const f5 = tractorSpec({ pull: 5 });
const both = tractorSpec({ tractor: 3, pull: 3 });
if (!uncertain(r1.range > 0 && f1.force > 0, 'mark-1 tractor spec is empty')) {
  /* fail already */
} else {
  note(`tractor mk1 range ${r1.range.toFixed(2)} / force-only range ${f1.range.toFixed(2)}`);
  note(`pull mk1 force ${f1.force.toFixed(1)} / range-only force ${r1.force.toFixed(1)}`);
  if (r1.range > 8) fail(`mark 1 tractor range ${r1.range.toFixed(2)} is a free vacuum — it must start close`);
  if (r5.range <= r1.range) fail('range upgrades do not grow the well');
  if (f5.force <= f1.force) fail('force upgrades do not yank harder');
  if (Math.abs(r1.range - f1.range) < 0.2) fail('range and force installs collapse to the same radius');
  if (r1.force >= f1.force) fail('buying force does not beat a range-only tug');
  if (f1.range >= r1.range) fail('buying range does not beat a force-only stub well');
  if (both.range < r1.range || both.force < f1.force) fail('range and force do not stack');
  const near = tractorPull(r1.range * 0.15, r1);
  const mid = tractorPull(r1.range * 0.5, r1);
  const rim = tractorPull(r1.range * 0.92, r1);
  const linearMid = r1.force * 0.5;
  if (!uncertain(near > 0 && mid >= 0, 'tractorPull returned nothing inside range')) {
    /* fail already */
  } else {
    note(`log falloff mk1 near ${near.toFixed(1)} mid ${mid.toFixed(1)} rim ${rim.toFixed(1)}`);
    if (mid >= near * 0.55) fail('tractor force does not fall off logarithmically — mid-range is still too fat');
    if (mid >= linearMid * 0.92) fail('tractor falloff is still basically linear');
    if (rim >= mid * 0.7) fail('rim pull is too strong — logarithmic well should be a whisper at the edge');
    if (tractorPull(r1.range, r1) !== 0) fail('pull at exact range must be zero (hard cutoff is the range bay)');
    if (tractorPull(r1.range + 0.2, r1) !== 0) fail('pull outside range must be zero');
  }
}

const sparks = arsenal(starterLoadout()).primary.shots;
if (sparks.some((s) => Math.abs(s.x) >= 1.2)) fail('starter blasters fanned out while adding the tractor');
if (arsenal({ tractor: 5, pull: 5, spark: 1 }).primary.shots.length !== sparks.length) {
  fail('the tractor is leaking into the gun banks');
}

if (fails.length) {
  console.error('HANGAR CRITIQUE FAIL\n' + notes.map((n) => `  · ${n}`).join('\n') + '\n' + fails.map((f) => `  ✖ ${f}`).join('\n'));
  process.exit(1);
}
console.log('HANGAR CRITIQUE OK\n' + notes.map((n) => `  · ${n}`).join('\n'));
