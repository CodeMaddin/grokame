import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { cinematicShader } from './shaders.js';
import { InfinitePath, createFrenet, sampleRail, clamp, lerp } from './math.js';
import { World } from './world.js';
import { createShip, EngineTrail, dressShip, spinShipKits } from './ship.js';
import { EntityField } from './entities.js';
import { AudioBus } from './audio.js';
import { StageDirector, gradeRun, loadScores, saveScore } from './stage.js';
import {
  CAMPAIGNS,
  getLevel,
  nextSlot,
  loadProgress,
  saveProgress,
  markCleared,
  stageHeat,
  coinValue,
} from './campaigns.js';
import { MODULES, MODULE_ORDER, hudName, arsenal } from './weapons.js';
import {
  CATALOG,
  loadHangar,
  emptyBonus,
  mergeLoadout,
  loadoutPower,
  nextCost,
  buyModule,
  addGold,
  applyMotes,
  shedBonus,
  runFill,
  clearPayout,
  buyLabel,
  tractorSpec,
  recommend,
} from './hangar.js';
import { Shipyard } from './shipyard.js';
import { SETUP_DEFAULTS, SETUP_SLIDERS, loadSetup, saveSetup, resetSetup, clampSetup } from './settings.js';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = 'title';
    this.clock = new THREE.Clock();
    this.input = {
      keys: new Set(),
      mouse: new THREE.Vector2(0, 0),
      firing: false,
    };
    this._touch = { id: null, x: 0, y: 0, held: false, steerX: 0, steerY: 0 };
    this._mouseFromTouch = 0;
    this.audio = new AudioBus();
    this.setup = loadSetup();
    this._setupFrom = 'title';
    this.audio.setMix(this.setup.music, this.setup.sfx);
    this.view = localStorage.getItem('aether-view') || 'scroll';
    if (!['chase', 'cockpit', 'scroll'].includes(this.view)) this.view = 'scroll';
    this._hasRun = false;
    this._levelBossSpawned = false;
    this._railHold = 0;
    this._bossHold = 0;
    this._bossSlow = 0;
    this._pendingClear = false;
    this._bossPhaseSeen = 1;
    this.gateFx = 0;
    this._riftBloom = 0;
    this._viewSnap = 1;
    this._camLook = new THREE.Vector3();
    this._camUp = new THREE.Vector3(0, 1, 0);
    this._chaseX = 0;
    this._chaseV = 0;
    this._chasePull = 0;
    this._proj = new THREE.Vector3();
    this._camFwd = new THREE.Vector3();
    this._camRight = new THREE.Vector3();
    this.stage = new StageDirector();
    this.progress = loadProgress();
    this.hangar = loadHangar();
    this.runBonus = emptyBonus();
    this.campaignIndex = this.progress.nextC || 0;
    this.levelIndex = this.progress.nextL || 0;
    this._runLive = false;
    this._hinted = new Set();
    this._teachQueue = [];
    this._resumeTo = 'play';
    this._mapCursor = { c: this.campaignIndex, l: this.levelIndex };
    this.hitStop = 0;
    this.kick = new THREE.Vector3();
    this.kickAmt = 0;
    this.bombs = 3;
    this.bombMax = 5;
    this.bombCd = 0;
    this._padPrev = { fire: false, bomb: false, start: false, y: 0 };
    this._setupRenderer();
    this._setupScene();
    this._setupPost();
    this._setupWorld();
    this.shipyard = new Shipyard(this.renderer);
    this._hangarCursor = 0;
    this._hangarFrom = 'map';
    this._bindInput();
    this._bindUI();
    this.reset(false);
    this._applySetup(this.setup);
    this._onResize();
    window.addEventListener('resize', () => this._onResize());
    this.loop = this.loop.bind(this);
  }

  _setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.92;
    this.renderer.autoClear = true;
  }

  _setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#05010d');
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.08, 1400);
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
  }

  _setupPost() {
    const size = new THREE.Vector2(window.innerWidth, window.innerHeight);
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(size, 0.48, 0.5, 0.42);
    this.composer.addPass(this.bloom);
    this.fx = new ShaderPass(cinematicShader);
    this.fx.uniforms.uSunPos.value = new THREE.Vector2(0.72, 0.68);
    this.fx.uniforms.uFlare.value = 1;
    this.fx.uniforms.uCockpit.value = 0;
    this.fx.uniforms.uGate.value = 0;
    this.fx.uniforms.uKick.value = 0;
    this.fx.uniforms.uResolution.value = size.clone();
    this.composer.addPass(this.fx);
    this.composer.addPass(new OutputPass());
  }

  _setupWorld() {
    this.path = new InfinitePath();
    this.world = new World(this.scene);
    this.world.attachRibbon(this.path.rebuildRibbon());
    this.entities = new EntityField(this.scene);
    this.entities.onWindup = () => this.audio.enemyWindup();
    this.entities.onShot = (fat) => this.audio.enemyShot(fat);
    const ship = createShip();
    this.shipCraft = ship;
    this.ship = ship.group;
    this.shipRig = ship.rig;
    this.exhausts = ship.exhausts;
    this.shipLights = ship.lights;
    this.shipCore = ship.core;
    this.muzzle = ship.muzzle;
    this.muzzleSpike = ship.muzzleSpike;
    this.muzzleFlash = 0;
    this.scene.add(this.ship);
    this.trail = new EngineTrail(this.scene);
    this.traces = [];
    for (let i = 0; i < 4; i++) {
      const mote = new THREE.Mesh(
        new THREE.SphereGeometry(0.42, 10, 8),
        new THREE.MeshBasicMaterial({ color: 0xff64e8 })
      );
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.85, 10, 8),
        new THREE.MeshBasicMaterial({
          color: 0xff64e8,
          transparent: true,
          opacity: 0.32,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      mote.add(halo);
      mote.visible = false;
      this.scene.add(mote);
      this.traces.push(mote);
    }
  }

  _bindInput() {
    this.canvas.tabIndex = 0;
    const moveKeys = new Set([
      'KeyW', 'KeyA', 'KeyS', 'KeyD',
      'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
      'Numpad8', 'Numpad4', 'Numpad6', 'Numpad2',
      'Space',
    ]);
    const onDown = (e) => {
      if (e.code === 'Escape') {
        e.preventDefault();
        if (!e.repeat) this._onEscape();
        return;
      }
      if (moveKeys.has(e.code)) e.preventDefault();
      this._setKey(e, true);
      if (this.state === 'playing' && !e.repeat) this._releaseUiFocus();
      if (this.state === 'hangar') {
        this._onHangarKey(e);
        return;
      }
      if (e.code === 'KeyP' && this.state === 'playing') this.pause();
      if ((e.code === 'KeyB' || e.code === 'KeyC') && this.state === 'playing' && !e.repeat) this._tryBomb();
      if (e.code === 'Digit1' || e.code === 'Numpad1') this.setView('chase');
      if (e.code === 'Digit2' || e.code === 'Numpad2') this.setView('cockpit');
      if (e.code === 'Digit3' || e.code === 'Numpad3') this.setView('scroll');
      if (e.code === 'KeyV') this.cycleView();
    };
    const onUp = (e) => {
      if (moveKeys.has(e.code)) e.preventDefault();
      this._setKey(e, false);
    };
    window.addEventListener('keydown', onDown, true);
    window.addEventListener('keyup', onUp, true);
    window.addEventListener('blur', () => this._clearInput());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this._clearInput();
    });
    const ptr = { passive: false, capture: true };
    document.addEventListener('pointerdown', (e) => this._onPointerDown(e), ptr);
    document.addEventListener('pointermove', (e) => this._onPointerMove(e), ptr);
    document.addEventListener('pointerup', (e) => this._onPointerUp(e), ptr);
    document.addEventListener('pointercancel', (e) => this._onPointerUp(e), ptr);
    if (!window.PointerEvent) {
      document.addEventListener('touchstart', (e) => this._onTouchStart(e), ptr);
      document.addEventListener('touchmove', (e) => this._onTouchMove(e), ptr);
      document.addEventListener('touchend', (e) => this._onTouchEnd(e), ptr);
      document.addEventListener('touchcancel', (e) => this._onTouchEnd(e), ptr);
    }
  }

  _isBlockingUi(target) {
    if (!(target instanceof Element)) return false;
    const screen = target.closest('.screen');
    if (screen?.classList.contains('hidden')) return false;
    if (screen && !screen.classList.contains('hidden')) return true;
    return !!target.closest('button, a, input, textarea, label');
  }

  _onPointerDown(e) {
    if (this.state !== 'playing') return;
    if (e.isPrimary === false) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (this._isBlockingUi(e.target)) return;
    e.preventDefault();
    this._touch.held = true;
    this._touch.id = e.pointerId;
    this._touch.x = e.clientX;
    this._touch.y = e.clientY;
    this._touch.steerX = 0;
    this._touch.steerY = 0;
    this.input.firing = true;
    this.slide.set(0, 0);
    this.input.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.input.mouse.y = -(e.clientY / window.innerHeight) * 2 - 1;
    try {
      this.canvas.setPointerCapture(e.pointerId);
    } catch {
      /* capture is best-effort */
    }
    this.audio.resume?.();
  }

  _onPointerMove(e) {
    if (!this._touch.held || e.pointerId !== this._touch.id) return;
    e.preventDefault();
    const dx = e.clientX - this._touch.x;
    const dy = e.clientY - this._touch.y;
    this._touch.x = e.clientX;
    this._touch.y = e.clientY;
    this._applyTouchDrag(dx, dy);
    this.input.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.input.mouse.y = -(e.clientY / window.innerHeight) * 2 - 1;
  }

  _onPointerUp(e) {
    if (!this._touch.held || e.pointerId !== this._touch.id) return;
    this._endTouch();
  }

  _onTouchStart(e) {
    const t = e.changedTouches?.[0];
    if (!t) return;
    this._onPointerDown({
      isPrimary: true,
      pointerType: 'touch',
      button: 0,
      pointerId: t.identifier,
      clientX: t.clientX,
      clientY: t.clientY,
      target: e.target,
      preventDefault: () => e.preventDefault(),
    });
  }

  _onTouchMove(e) {
    const t = e.touches?.[0] || e.changedTouches?.[0];
    if (!t) return;
    this._onPointerMove({
      pointerId: this._touch.id,
      clientX: t.clientX,
      clientY: t.clientY,
      preventDefault: () => e.preventDefault(),
    });
  }

  _onTouchEnd(e) {
    this._onPointerUp({ pointerId: this._touch.id });
    e.preventDefault?.();
  }

  _applyTouchDrag(dx, dy) {
    const lane = this._laneLimit();
    const depth = this._depthLimit();
    const spanX = Math.max(1, lane * 2);
    const spanY = Math.max(1, depth.max - depth.min);
    const w = Math.max(1, window.innerWidth);
    const h = Math.max(1, window.innerHeight);
    this.offset.x = clamp(this.offset.x + (dx / w) * spanX, -lane, lane);
    this.holdY = clamp(this.holdY + (-dy / h) * spanY, depth.min, depth.max);
    this._touch.steerX = clamp(dx / 10, -1, 1);
    this._touch.steerY = clamp(-dy / 10, -1, 1);
  }

  _endTouch() {
    this._touch.held = false;
    this._touch.id = null;
    this._touch.steerX = 0;
    this._touch.steerY = 0;
    this.input.firing = false;
  }

  _bindUI() {
    this.ui = {
      hud: document.getElementById('hud'),
      score: document.getElementById('score'),
      combo: document.getElementById('combo'),
      depth: document.getElementById('depth'),
      hudVitals: document.querySelector('.hud-vitals'),
      health: document.getElementById('health-fill'),
      boost: document.getElementById('boost-fill'),
      riftFill: document.getElementById('rift-fill'),
      riftName: document.getElementById('rift-name'),
      riftWrap: document.querySelector('.rift-wrap'),
      toast: document.getElementById('toast'),
      teach: document.getElementById('teach'),
      title: document.getElementById('title-screen'),
      pause: document.getElementById('pause-screen'),
      setup: document.getElementById('setup-screen'),
      dead: document.getElementById('dead-screen'),
      stats: document.getElementById('final-stats'),
      resultKicker: document.getElementById('result-kicker'),
      resultTitle: document.getElementById('result-title'),
      resultRank: document.getElementById('result-rank'),
      resultRec: document.getElementById('result-rec'),
      resultNext: document.getElementById('result-next'),
      resultBoard: document.getElementById('result-board'),
      titleScores: document.getElementById('title-scores'),
      bombs: document.getElementById('bomb-pips'),
      lives: document.getElementById('life-pips'),
      continue: document.getElementById('continue-screen'),
      continueLeft: document.getElementById('continue-left'),
      continueFade: document.getElementById('continue-fade'),
      map: document.getElementById('map-screen'),
      mapGrid: document.getElementById('campaign-map'),
      mapKicker: document.getElementById('map-kicker'),
      mapTitle: document.getElementById('map-title'),
      mapTag: document.getElementById('map-tag'),
      deployBtn: document.getElementById('deploy-btn'),
      mapMenuBtn: document.getElementById('map-menu-btn'),
      hangarMapBtn: document.getElementById('hangar-map-btn'),
      hangar: document.getElementById('hangar-screen'),
      hangarList: document.getElementById('hangar-list'),
      hangarGold: document.getElementById('hangar-gold'),
      hangarBuy: document.getElementById('hangar-buy'),
      hangarDone: document.getElementById('hangar-done'),
      hangarHullBtn: document.getElementById('hangar-hull-btn'),
      hangarName: document.getElementById('hangar-item-name'),
      hangarBlurb: document.getElementById('hangar-item-blurb'),
      hangarCost: document.getElementById('hangar-item-cost'),
      hangarKicker: document.getElementById('hangar-kicker'),
      hangarTitle: document.getElementById('hangar-title'),
      hangarHint: document.getElementById('hangar-hint'),
      hangarPayout: document.getElementById('hangar-payout'),
      hangarNext: document.getElementById('hangar-next'),
      gold: document.getElementById('gold'),
      bossMeter: document.getElementById('boss-meter'),
      bossFill: document.getElementById('boss-fill'),
      bossName: document.getElementById('boss-name'),
      bossTitle: document.getElementById('boss-title'),
      startBtn: document.getElementById('start-btn'),
      resumeTitleBtn: document.getElementById('resume-title-btn'),
      titleSetupBtn: document.getElementById('title-setup-btn'),
      pauseSetupBtn: document.getElementById('setup-pause-btn'),
      setupReset: document.getElementById('setup-reset'),
      setupBack: document.getElementById('setup-back'),
      viewBtns: [...document.querySelectorAll('[data-view]')],
      pauseBtn: document.getElementById('pause-btn'),
      bombBtn: document.getElementById('bomb-btn'),
      bombFlash: document.getElementById('bomb-flash'),
      riftBloom: document.getElementById('rift-bloom'),
    };
    this.ui.combo?.addEventListener('animationend', (e) => {
      if (String(e.animationName).startsWith('combo-stab')) {
        this.ui.combo.classList.remove('combo-stab', 'combo-mark-2', 'combo-mark-4', 'combo-mark-8');
      }
      if (e.animationName === 'combo-drop') this.ui.combo.classList.remove('combo-drop');
    });
    this.ui.startBtn.addEventListener('click', () => this.startPlay());
    this.ui.resumeTitleBtn.addEventListener('click', () => this.resumeFromMenu());
    this.ui.titleSetupBtn?.addEventListener('click', () => this._openSetup('title'));
    this.ui.pauseSetupBtn?.addEventListener('click', () => this._openSetup('paused'));
    this.ui.setupReset?.addEventListener('click', () => this._resetSetup());
    this.ui.setupBack?.addEventListener('click', () => this._closeSetup());
    this.ui.setup?.addEventListener('input', (e) => this._onSetupInput(e));
    document.getElementById('resume-btn').addEventListener('click', () => this.resume());
    document.getElementById('menu-btn').addEventListener('click', () => this.goToMenu({ resumeable: true }));
    document.getElementById('retry-btn').addEventListener('click', () => this.startPlay());
    this.ui.deployBtn?.addEventListener('click', () => this._deployLevel());
    this.ui.mapMenuBtn?.addEventListener('click', () => this.goToMenu({ resumeable: this._runLive }));
    this.ui.hangarMapBtn?.addEventListener('click', () => this._openHangar({ from: 'map' }));
    this.ui.hangarBuy?.addEventListener('click', () => this._hangarBuy());
    this.ui.hangarDone?.addEventListener('click', () => this._hangarDone());
    this.ui.hangarHullBtn?.addEventListener('click', () => this._toggleHangarShop());
    this.ui.hangarList?.addEventListener('click', (e) => {
      const row = e.target.closest('[data-mod]');
      if (!row) return;
      this._hangarCursor = MODULE_ORDER.indexOf(row.dataset.mod);
      if (this._hangarCursor < 0) this._hangarCursor = 0;
      this.audio.yardTick();
      this._renderHangar();
    });
    this.ui.hangarList?.addEventListener('mouseover', (e) => {
      const row = e.target.closest('[data-mod]');
      if (!row || row === this._hangarHover) return;
      this._hangarHover = row;
      const now = performance.now();
      if (this._yardHoverAt && now - this._yardHoverAt < 90) return;
      this._yardHoverAt = now;
      this.audio.yardTick();
    });
    document.getElementById('continue-yes')?.addEventListener('click', () => this._acceptContinue());
    document.getElementById('continue-no')?.addEventListener('click', () => this._declineContinue());
    this.ui.pauseBtn?.addEventListener('click', () => {
      if (this.state === 'playing') this.pause();
      else if (this.state === 'paused') this.resume();
    });
    this.ui.bombBtn?.addEventListener('click', () => this._tryBomb());
    const menuButtons = [
      this.ui.startBtn,
      this.ui.resumeTitleBtn,
      this.ui.titleSetupBtn,
      this.ui.pauseSetupBtn,
      this.ui.setupReset,
      this.ui.setupBack,
      document.getElementById('resume-btn'),
      document.getElementById('menu-btn'),
      document.getElementById('retry-btn'),
      document.getElementById('continue-yes'),
      document.getElementById('continue-no'),
      this.ui.deployBtn,
      this.ui.mapMenuBtn,
      this.ui.hangarMapBtn,
      this.ui.hangarBuy,
      this.ui.hangarDone,
      this.ui.hangarHullBtn,
      this.ui.pauseBtn,
      this.ui.bombBtn,
    ].filter(Boolean);
    for (const btn of menuButtons) {
      btn.addEventListener('mousedown', (e) => e.stopPropagation());
      btn.addEventListener('pointerdown', (e) => e.stopPropagation());
      btn.addEventListener('click', () => this._releaseUiFocus());
    }
    for (const btn of this.ui.viewBtns) {
      btn.addEventListener('click', () => {
        this.setView(btn.dataset.view);
        this._releaseUiFocus();
      });
      btn.addEventListener('mousedown', (e) => e.stopPropagation());
      btn.addEventListener('pointerdown', (e) => e.stopPropagation());
    }
    this._syncViewHud();
    this._syncTitleActions();
    this._renderScoreboard(this.ui.titleScores, loadScores());
    this._syncBombs();
    this.ui.mapGrid?.addEventListener('click', (e) => {
      const node = e.target.closest('[data-c]');
      if (!node) return;
      const c = Number(node.dataset.c);
      const l = Number(node.dataset.l);
      if (this._nodeLocked(c, l)) return;
      this._mapCursor = { c, l };
      this._renderMap();
    });
  }

  _syncTitleActions() {
    if (!this.ui?.resumeTitleBtn || !this.ui?.startBtn) return;
    this.ui.resumeTitleBtn.hidden = !this._hasRun;
    this.ui.startBtn.textContent = this._hasRun ? 'NEW RUN' : 'ENGAGE';
  }

  _setKey(e, down) {
    const tokens = [e.code];
    const letter = (e.key || '').toLowerCase();
    if (letter.length === 1) tokens.push(letter);
    for (const token of tokens) {
      if (down) this.input.keys.add(token);
      else this.input.keys.delete(token);
    }
  }

  _releaseUiFocus() {
    const active = document.activeElement;
    if (active && active !== document.body && active !== this.canvas && typeof active.blur === 'function') {
      active.blur();
    }
    this.canvas?.focus({ preventScroll: true });
  }

  _clearInput() {
    this.input.keys.clear();
    this.input.firing = false;
    this.slide?.set(0, 0);
    this._endTouch?.();
  }

  _onEscape() {
    if (this.state === 'hangar') {
      this._hangarDone();
      return;
    }
    if (this.state === 'map') {
      this.goToMenu({ resumeable: this._runLive });
      return;
    }
    if (this.state === 'setup') {
      this._closeSetup();
      return;
    }
    if (this.state === 'playing' || this.state === 'paused') {
      this.goToMenu({ resumeable: true });
      return;
    }
    if (this.state === 'title' && this._hasRun) {
      this.resumeFromMenu();
      return;
    }
    if (this.state === 'dead') this.goToMenu({ resumeable: false });
    if (this.state === 'continue') this._declineContinue();
  }

  goToMenu({ resumeable = false } = {}) {
    this._clearInput();
    this._hasRun = resumeable;
    this._resumeTo = this.state === 'map' ? 'map' : 'play';
    this.state = 'title';
    this.audio.setPaused(true);
    this.ui.pause.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
    this.ui.map?.classList.add('hidden');
    this.ui.hangar?.classList.add('hidden');
    this.ui.setup?.classList.add('hidden');
    this.ui.hud.classList.remove('visible');
    this.ui.title.classList.remove('hidden');
    this._syncTitleActions();
    this._renderScoreboard(this.ui.titleScores, loadScores());
    if (!resumeable) {
      this._runLive = false;
      this.reset(true);
    }
  }

  resumeFromMenu() {
    if (!this._hasRun) return;
    if (this._resumeTo === 'map') {
      this._openMap({ keepRun: true });
      return;
    }
    this._clearInput();
    this.state = 'playing';
    this.ui.title.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
    this.ui.map?.classList.add('hidden');
    this.ui.hangar?.classList.add('hidden');
    this.ui.setup?.classList.add('hidden');
    this.ui.hud.classList.add('visible');
    this.audio.setPaused(false);
    this.clock.getDelta();
    this._releaseUiFocus();
  }

  cycleView() {
    const order = ['chase', 'cockpit', 'scroll'];
    const i = order.indexOf(this.view);
    this.setView(order[(i + 1) % order.length]);
  }

  setView(name) {
    if (!['chase', 'cockpit', 'scroll'].includes(name)) return;
    if (this.view === name && this._viewSnap === 0) {
      this._syncViewHud();
      return;
    }
    this.view = name;
    this._viewSnap = 1;
    localStorage.setItem('aether-view', name);
    this._syncViewHud();
    const labels = {
      chase: 'CHASE CAM',
      cockpit: 'COCKPIT',
      scroll: 'SCROLL CAM',
    };
    if (this.state === 'playing' || this.state === 'paused') this.toast(labels[name]);
  }

  _syncViewHud() {
    if (!this.ui?.viewBtns) return;
    for (const btn of this.ui.viewBtns) {
      btn.classList.toggle('active', btn.dataset.view === this.view);
    }
  }

  _activeView() {
    return this.state === 'title' ? 'chase' : this.view;
  }

  _applyCamera(dt, sample, frame, shipSample, shipFrame) {
    const view = this._activeView();
    this.ship.visible = view !== 'cockpit';
    const shipFrameSafe = shipFrame || frame;
    const shipSampleSafe = shipSample || sample;

    const camPos = new THREE.Vector3();
    const camLook = new THREE.Vector3();
    const camUp = new THREE.Vector3();
    let fov = 62;
    const snap = this._viewSnap > 0.02;

    if (view === 'cockpit') {
      fov = 78;
      camPos.copy(this.ship.position)
        .addScaledVector(shipSampleSafe.tangent, 1.85)
        .addScaledVector(shipFrameSafe.normal, 0.72);
      camLook.copy(this.ship.position)
        .addScaledVector(shipSampleSafe.tangent, 30);
      camUp.copy(shipFrameSafe.normal);
    } else if (view === 'scroll') {
      fov = 38;
      const focus = this.path.sample(this.traveled + 22);
      const focusFrame = createFrenet(focus.tangent);
      camPos.copy(focus.pos).addScaledVector(focusFrame.normal, 168);
      camLook.copy(focus.pos);
      camUp.copy(focus.tangent);
    } else {
      fov = 58;
      const focus = this.path.sample(this.traveled + this.holdY + 10);
      const focusFrame = createFrenet(focus.tangent);
      this._stepChaseFollow(dt, snap);
      camPos.copy(focus.pos)
        .addScaledVector(focus.tangent, -56)
        .addScaledVector(focusFrame.normal, 23)
        .addScaledVector(focusFrame.binormal, this._chaseX);
      camLook.copy(focus.pos)
        .addScaledVector(focus.tangent, 28)
        .addScaledVector(focusFrame.binormal, this._chaseX);
      camUp.copy(focusFrame.normal);
    }

    const pull = view === 'chase' ? this._chasePull : 0;
    const posK = snap ? 16 : view === 'scroll' ? 12 : view === 'chase' ? lerp(9.5, 22, pull) : 5;
    const lookK = snap ? 14 : view === 'scroll' ? 11 : view === 'chase' ? lerp(8.2, 20, pull) : 5.5;
    this.camera.position.lerp(camPos, 1 - Math.exp(-dt * posK));
    this.camera.position.addScaledVector(this.kick, this.kickAmt * (this.setup?.shake ?? 1));
    this._camLook.lerp(camLook, 1 - Math.exp(-dt * lookK));
    this._camUp.lerp(camUp, 1 - Math.exp(-dt * lookK));
    this.camera.up.copy(this._camUp);
    this.camera.lookAt(this._camLook);
    this.camera.fov = lerp(this.camera.fov, fov, 1 - Math.exp(-dt * 7));
    this.camera.updateProjectionMatrix();
    if (view === 'chase') this._keepShipInFrame();
    this._viewSnap = Math.max(0, this._viewSnap - dt * 2.4);
  }

  _chaseViewHalf() {
    const vfov = this.camera.fov * Math.PI / 180;
    return Math.max(8, Math.tan(vfov / 2) * this.camera.aspect * 66);
  }

  _stepChaseFollow(dt, snap) {
    const err = this.offset.x - this._chaseX;
    const half = this._chaseViewHalf();
    const norm = clamp(Math.abs(err) / half, 0, 1.35);
    this._chasePull = clamp(norm * norm, 0, 1);
    if (snap) {
      this._chaseX = this.offset.x;
      this._chaseV = 0;
      this._chasePull = 1;
      return;
    }
    const omega = 1.45 + 11 * this._chasePull;
    const damp = 2 * omega;
    this._chaseV += (err * omega * omega - this._chaseV * damp) * dt;
    this._chaseX += this._chaseV * dt;
    const maxLag = Math.max(4, half * 0.72);
    const next = clamp(this._chaseX, this.offset.x - maxLag, this.offset.x + maxLag);
    if (next !== this._chaseX) {
      this._chaseX = next;
      this._chaseV = 0;
    }
  }

  _keepShipInFrame() {
    this.camera.updateMatrixWorld();
    const ndc = this._proj.copy(this.ship.position).project(this.camera);
    const limit = 0.86;
    if (!Number.isFinite(ndc.x) || Math.abs(ndc.x) <= limit) return;
    this.camera.getWorldDirection(this._camFwd);
    const depth = Math.max(
      8,
      (this.ship.position.x - this.camera.position.x) * this._camFwd.x
        + (this.ship.position.y - this.camera.position.y) * this._camFwd.y
        + (this.ship.position.z - this.camera.position.z) * this._camFwd.z,
    );
    const vfov = this.camera.fov * Math.PI / 180;
    const half = Math.tan(vfov / 2) * this.camera.aspect * depth;
    const overflow = Math.abs(ndc.x) - limit;
    const shift = overflow * half * Math.sign(ndc.x);
    this._camRight.crossVectors(this._camFwd, this.camera.up).normalize();
    this.camera.position.addScaledVector(this._camRight, shift);
    this._camLook.addScaledVector(this._camRight, shift);
    this._chaseX += shift;
    this._chaseV = 0;
    this.camera.lookAt(this._camLook);
  }

  reset(layout = true) {
    this._resetRun();
    this._resetLevel(layout);
  }

  _resetRun() {
    this.health = 1;
    this.lives = 3;
    this.continues = 2;
    this.rank = 0;
    this.step = 0;
    this.charge = 0;
    this.hangar = loadHangar();
    this.runBonus = emptyBonus();
    this._applyLoadout();
    this.gunCd = { primary: 0, missile: 0, titan: 0, mine: 0, nova: 0 };
    this.score = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this._lastCombo = 1;
    this.kills = 0;
    this.maxCombo = 1;
    this.maxStep = 0;
    this.nearMisses = 0;
    this.bombsUsed = 0;
    this.bombs = 3;
    this.best = Number(localStorage.getItem('aether-best') || 0);
    this.campaignIndex = this.progress?.nextC || 0;
    this.levelIndex = this.progress?.nextL || 0;
    this._teachQueue = [];
    clearTimeout(this._teachTimer);
    if (this.ui?.teach) this.ui.teach.classList.remove('show');
  }

  _resetLevel(layout = true) {
    this.traveled = 40;
    this.speed = 28;
    this.throttle = 0.55;
    this.boost = 1;
    this.health = 1;
    this.spawnIn = 0.65;
    this.hurt = 0;
    this.invuln = 2.2;
    this.gateFx = 0;
    this._riftBloom = 0;
    this.entities?.pullLoot?.(false);
    this.ui.riftBloom?.classList.remove('show');
    this.fireCd = 0;
    this._blockWarn = false;
    this.offset = new THREE.Vector2(0, 0);
    this.holdY = 8;
    this._chaseX = 0;
    this._chaseV = 0;
    this._chasePull = 0;
    this.steer = new THREE.Vector2(0, 0);
    this.slide = new THREE.Vector2(0, 0);
    this._ribbonAt = -1;
    this.hitStop = 0;
    this.kick.set(0, 0, 0);
    this.kickAmt = 0;
    this.bombCd = 0;
    this._chapterAt = -1;
    this._levelBossSpawned = false;
    this._railHold = 0;
    this._bossHold = 0;
    this._bossSlow = 0;
    this._pendingClear = false;
    this._bossPhaseSeen = 1;
    this.ui.bossTitle?.classList.remove('show', 'fall', 'settled');
    this.muzzleFlash = 0;
    this._midsThisLevel = 0;
    this.hangar = loadHangar();
    this.runBonus = emptyBonus();
    this._applyLoadout();
    if (this.traces) {
      for (const mote of this.traces) mote.visible = false;
    }
    const slot = getLevel(this.campaignIndex, this.levelIndex);
    const script = slot?.lv.script;
    const length = slot?.lv.length || 1400;
    this.stage = new StageDirector(script, length);
    this._chapterId = slot?.lv.world || 'default';
    this.entities.reset();
    if (layout) {
      this.world.layoutFromPath(this.path, this.traveled, this._laneLimit());
      this.world.attachRibbon(this._localRibbon());
    }
    this.world.setChapter(this._chapterId);
    this.audio.setChapter(this._audioChapter(this._chapterId));
    this._syncBombs();
    this._syncLives({ force: true });
  }

  _localRibbon() {
    const pts = [];
    for (let i = -6; i < 36; i++) {
      pts.push(this.path.sample(Math.max(8, this.traveled + i * 18)).pos.clone());
    }
    const curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
    return new THREE.TubeGeometry(curve, 180, 1.28, 12, false);
  }

  async startPlay() {
    await this.audio.resume();
    this._runLive = false;
    this._hasRun = false;
    this.progress = loadProgress();
    this._mapCursor = { c: this.progress.nextC || 0, l: this.progress.nextL || 0 };
    this._openMap({ fromTitle: true });
  }

  pause() {
    this.state = 'paused';
    this.audio.setPaused(true);
    this.ui.pause.classList.remove('hidden');
  }

  resume() {
    this.state = 'playing';
    this.audio.setPaused(false);
    this.ui.pause.classList.add('hidden');
    this.ui.setup?.classList.add('hidden');
    this.clock.getDelta();
    this._releaseUiFocus();
  }

  async _openSetup(from) {
    await this.audio.resume();
    if (this.state === 'playing') this._setupFrom = 'paused';
    else this._setupFrom = from || (this.state === 'paused' ? 'paused' : 'title');
    this.state = 'setup';
    this.audio.setPaused(false);
    this.ui.title.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
    this.ui.map?.classList.add('hidden');
    this.ui.hangar?.classList.add('hidden');
    this.ui.setup?.classList.remove('hidden');
    this._paintSetup();
    this._releaseUiFocus();
  }

  _closeSetup() {
    this.ui.setup?.classList.add('hidden');
    if (this._setupFrom === 'paused') {
      this.state = 'paused';
      this.ui.pause.classList.remove('hidden');
      this.audio.setPaused(true);
      return;
    }
    this.state = 'title';
    this.ui.title.classList.remove('hidden');
    this.audio.setPaused(true);
  }

  _onSetupInput(e) {
    const key = e.target?.name;
    if (!key || !(key in SETUP_DEFAULTS)) return;
    const v = Number(e.target.value) / 100;
    this.setup = saveSetup({ ...this.setup, [key]: v });
    this._applySetup(this.setup);
    this._paintSetup();
    if (key === 'sfx') {
      const now = performance.now();
      if (!this._setupShotAt || now - this._setupShotAt > 90) {
        this._setupShotAt = now;
        this.audio.shotFor('spark');
      }
    } else {
      this.audio.ui('move');
    }
  }

  _resetSetup() {
    this.setup = resetSetup();
    this._applySetup(this.setup);
    this._paintSetup();
    this.audio.ui('ok');
  }

  _applySetup(setup) {
    this.setup = clampSetup(setup);
    this.audio.setMix(this.setup.music, this.setup.sfx);
    const scan = document.getElementById('scanlines');
    if (scan) scan.style.opacity = String(0.35 * this.setup.film);
    const vig = document.getElementById('vignette-frame');
    if (vig) vig.style.opacity = String(0.55 + 0.45 * this.setup.film);
  }

  _paintSetup() {
    for (const { key } of SETUP_SLIDERS) {
      const input = this.ui.setup?.querySelector(`input[name="${key}"]`);
      if (input) input.value = String(Math.round(this.setup[key] * 100));
      const read = this.ui.setup?.querySelector(`[data-read="${key}"]`);
      if (read) read.textContent = String(Math.round(this.setup[key] * 100));
    }
  }

  die() {
    if (this._pendingClear || this._bossSlow > 0) return;
    this.audio.sting('death');
    this.entities.explode(this.ship.position.clone(), 0xff3bd4);
    this.lives -= 1;
    this._syncLives({ lost: true });
    if (this.lives > 0) {
      this._respawn();
      return;
    }
    if (this.continues > 0) {
      this._showContinue();
      return;
    }
    this._endRun(false);
  }

  _respawn() {
    this.health = 1;
    this.hurt = 0;
    this.invuln = 2.2;
    this.spawnIn = 0.65;
    this.offset.x = 0;
    this.holdY = 8;
    this.slide.set(0, 0);
    this.muzzleFlash = 0;
    this.audio.sting('life');
    clearTimeout(this._lifePipTimer);
    this._lifePipTimer = setTimeout(() => this._syncLives({ force: true }), 420);
  }

  _showContinue() {
    this.state = 'continue';
    this._continueT = 9;
    this.audio.setContinue(true);
    this.audio.sting('continue');
    if (this.ui.continueLeft) {
      this.ui.continueLeft.textContent = `${this.continues} CREDIT${this.continues === 1 ? '' : 'S'} REMAIN`;
    }
    if (this.ui.continueFade) this.ui.continueFade.style.transform = 'scaleX(1)';
    this.ui.continue?.classList.remove('hidden');
  }

  _tickContinue(dt) {
    if (this.state !== 'continue') return;
    this._continueT = Math.max(0, (this._continueT ?? 9) - dt);
    if (this.ui.continueFade) this.ui.continueFade.style.transform = `scaleX(${this._continueT / 9})`;
    if (this._continueT <= 0) this._declineContinue();
  }

  _acceptContinue() {
    if (this.state !== 'continue' || this.continues <= 0) return;
    this.continues -= 1;
    this.lives = 3;
    this.ui.continue?.classList.add('hidden');
    this.state = 'playing';
    this.audio.setContinue(false);
    this.audio.setPaused(false);
    this._respawn();
    this.clock.getDelta();
    this._releaseUiFocus();
  }

  _declineContinue() {
    if (this.ui.continue) this.ui.continue.classList.add('hidden');
    this._endRun(false);
  }

  _gradeNow(victory) {
    return gradeRun({
      score: this.score,
      kills: this.kills,
      step: this.maxStep || this.step,
      maxCombo: this.maxCombo,
      victory,
      nearMisses: this.nearMisses,
      bombsUsed: this.bombsUsed,
    });
  }

  _endRun(victory) {
    this.state = 'dead';
    this._hasRun = false;
    this._runLive = false;
    this._syncTitleActions();
    this.audio.setContinue(false);
    this.audio.setPaused(false);
    this.best = Math.max(this.best, this.score);
    localStorage.setItem('aether-best', String(this.best));
    const rank = this._gradeNow(victory);
    saveScore({
      score: this.score,
      rank,
      kills: this.kills,
      depth: Math.floor(this.traveled / 10),
      victory,
      at: Date.now(),
    });
    this.ui.hud.classList.remove('visible');
    this.ui.continue?.classList.add('hidden');
    this.ui.map?.classList.add('hidden');
    this.ui.hangar?.classList.add('hidden');
    this.ui.setup?.classList.add('hidden');
    this.ui.dead.classList.remove('hidden');
    const slot = getLevel(this.campaignIndex, this.levelIndex);
    if (this.ui.resultKicker) {
      this.ui.resultKicker.textContent = '';
      this.ui.resultKicker.hidden = true;
    }
    if (this.ui.resultTitle) {
      this.ui.resultTitle.textContent = '';
      this.ui.resultTitle.hidden = true;
    }
    if (this.ui.resultRank) this.ui.resultRank.textContent = rank;
    const rec = victory ? recommend(this.hangar?.levels || {}, this.hangar?.gold || 0, slot?.lv.id || '') : null;
    const nxt = victory ? nextSlot(this.campaignIndex, this.levelIndex) : null;
    if (this.ui.stats) this.ui.stats.textContent = victory ? `CLEARED · ${slot?.lv.id || ''}` : `LOST · ${slot?.lv.id || ''}`;
    if (this.ui.resultRec) this.ui.resultRec.textContent = rec ? `NEXT BUY · ${CATALOG[rec].title}` : '';
    if (this.ui.resultNext) {
      this.ui.resultNext.textContent = victory
        ? (nxt ? `NEXT · ${nxt.lv.id} ${nxt.lv.name}` : 'CAMPAIGN CLEAR')
        : '';
    }
    if (this.ui.resultBoard) {
      this.ui.resultBoard.innerHTML = '';
      this.ui.resultBoard.hidden = true;
    }
  }

  toast(text) {
    this.ui.toast.textContent = text;
    this.ui.toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => this.ui.toast.classList.remove('show'), 1200);
  }

  _teach(key, text) {
    if (this._hinted.has(key)) return;
    this._hinted.add(key);
    if (!this.ui.teach) return;
    if (this.ui.teach.classList.contains('show') || this._teachQueue.length) {
      this._teachQueue.push(text);
      return;
    }
    this._showTeach(text);
  }

  _showTeach(text) {
    if (!this.ui.teach) return;
    this.ui.teach.textContent = text;
    this.ui.teach.classList.add('show');
    clearTimeout(this._teachTimer);
    this._teachTimer = setTimeout(() => {
      this.ui.teach.classList.remove('show');
      const next = this._teachQueue.shift();
      if (next) this._teachTimer = setTimeout(() => this._showTeach(next), 200);
    }, 2200);
  }

  _maybeBoardTeach() {
    if (this.state !== 'playing' || !this.entities) return;
    if (!this._hinted.has('gate')) {
      const gate = this.entities.gates.find((g) => g.alive && g.locked && g.pathDist - this.traveled < 64 && g.pathDist - this.traveled > 22);
      if (gate) this._teach('gate', 'SHOOT THE LOCK — OR SLIDE THE GAP');
    }
    if (!this._hinted.has('heavy')) {
      const brick = this.entities.enemies.find((en) => en.alive && /heavy|slag|chime|prism|wisp/.test(en.role) && en.pathDist - this.traveled < 88 && en.pathDist - this.traveled > 22);
      if (brick) this._teach('heavy', 'HOLD FIRE ON THE BRICK');
    }
  }

  _currentLevel() {
    return getLevel(this.campaignIndex, this.levelIndex);
  }

  _nodeLocked(c, l) {
    const id = `${c}-${l}`;
    if (this.progress.cleared.includes(id)) return false;
    if (c === (this.progress.nextC || 0) && l === (this.progress.nextL || 0)) return false;
    if (this._runLive && c === this._mapCursor.c && l === this._mapCursor.l) return false;
    return true;
  }

  _openMap({ fromTitle = false, keepRun = false } = {}) {
    this._clearInput();
    this.state = 'map';
    this.audio.setPaused(true);
    this.ui.title.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
    this.ui.hangar?.classList.add('hidden');
    this.ui.setup?.classList.add('hidden');
    this.ui.hud.classList.remove('visible');
    this.ui.map?.classList.remove('hidden');
    this.progress = loadProgress();
    if (!keepRun && !this._runLive) {
      this._mapCursor = { c: this.progress.nextC || 0, l: this.progress.nextL || 0 };
    }
    this._renderMap();
    this._syncTitleActions();
    this._releaseUiFocus();
    if (fromTitle) this.clock.getDelta();
  }

  _renderMap() {
    const el = this.ui.mapGrid;
    if (!el) return;
    const cursor = this._mapCursor;
    const slot = getLevel(cursor.c, cursor.l);
    if (this.ui.mapKicker) this.ui.mapKicker.textContent = slot?.camp.kicker || 'CAMPAIGN MAP';
    if (this.ui.mapTitle) this.ui.mapTitle.textContent = slot?.lv.name || 'THE AETHER RIFT';
    if (this.ui.mapTag) this.ui.mapTag.textContent = slot?.camp.blurb || '';
    el.innerHTML = CAMPAIGNS.map((camp, ci) => {
      const currentCamp = ci === cursor.c;
      const nodes = camp.levels.map((lv, li) => {
        const id = `${ci}-${li}`;
        const cleared = this.progress.cleared.includes(id);
        const locked = this._nodeLocked(ci, li);
        const next = !cleared && !locked && ci === (this.progress.nextC || 0) && li === (this.progress.nextL || 0);
        const current = ci === cursor.c && li === cursor.l && !cleared;
        const last = li === camp.levels.length - 1;
        const finale = lv.banner === 'finale';
        const kind = finale ? 'finale boss' : last ? 'boss' : '';
        const label = finale ? '✦' : last ? '★' : String(li + 1);
        return `<button type="button" class="map-node ${kind} ${cleared ? 'cleared spent' : ''} ${next ? 'next' : ''} ${current ? 'current' : ''} ${locked ? 'locked' : ''}" data-c="${ci}" data-l="${li}" ${locked ? 'disabled' : ''} aria-label="${lv.id} ${lv.name}">${label}</button>`;
      }).join('<div class="map-rail"></div>');
      return `<div class="map-campaign${currentCamp ? ' current' : ''}"><div class="map-camp-meta"><span class="kicker">${camp.kicker}</span><span class="name">${camp.name}</span></div><div class="map-nodes">${nodes}</div></div>`;
    }).join('');
    if (this.ui.deployBtn) {
      const lv = slot?.lv;
      this.ui.deployBtn.textContent = lv ? `DEPLOY ${lv.id}` : 'DEPLOY';
    }
  }

  _openHangar({ from = 'map', payout = null, slot = null, nxt = null, hangar = null, goldFrom = null } = {}) {
    this._clearInput();
    this._hangarFrom = from;
    this.state = 'hangar';
    this.hangar = hangar || this.hangar || loadHangar();
    this.audio.setPaused(false);
    this.audio.setIntensity(0.16);
    this.ui.title.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
    this.ui.map?.classList.add('hidden');
    this.ui.setup?.classList.add('hidden');
    this.ui.hud.classList.remove('visible');
    this.ui.hangar?.classList.remove('hidden');
    this.audio.setChapter('hangar');
    this.audio.yardTick();
    this._setHangarShopMin(false);
    const record = from === 'clear' || from === 'win';
    if (this.ui.hangarKicker) {
      this.ui.hangarKicker.hidden = record;
      this.ui.hangarKicker.textContent = record ? '' : 'DRYDOCK';
    }
    if (this.ui.hangarTitle) {
      this.ui.hangarTitle.textContent = record ? this._gradeNow(true) : 'SHIPYARD';
      this.ui.hangarTitle.classList.toggle('rank-mark', record);
    }
    if (this.ui.hangarPayout) {
      if (record) {
        const rec = recommend(this.hangar.levels, this.hangar.gold, slot?.lv.id || '');
        const nextLine = from === 'win'
          ? 'CAMPAIGN CLEAR'
          : (nxt ? `NEXT · ${nxt.lv.id} ${nxt.lv.name}` : '');
        this.ui.hangarPayout.textContent = [
          `CLEARED · ${slot?.lv.id || ''}`,
          rec ? `NEXT BUY · ${CATALOG[rec].title}` : '',
          nextLine,
        ].filter(Boolean).join('\n');
      } else {
        this.ui.hangarPayout.textContent = '';
      }
    }
    if (this.ui.hangarHint) {
      const afterClear = from === 'clear' || from === 'win';
      this.ui.hangarHint.hidden = afterClear;
      this.ui.hangarHint.textContent = afterClear
        ? ''
        : 'Preview a system on the hull. Install it. Powerups in the rift only charge what you bought.';
    }
    if (this.ui.hangarDone) {
      this.ui.hangarDone.textContent = from === 'win' ? 'RESULTS' : from === 'clear' ? 'CAMPAIGN MAP' : 'RETURN';
    }
    this._hangarRecommend = (from === 'clear' || from === 'win')
      ? recommend(this.hangar.levels, this.hangar.gold, slot?.lv.id || '')
      : null;
    if (this._hangarRecommend) {
      const idx = MODULE_ORDER.indexOf(this._hangarRecommend);
      if (idx >= 0) this._hangarCursor = idx;
    } else {
      this._hangarCursor = Math.max(0, Math.min(MODULE_ORDER.length - 1, this._hangarCursor || 0));
    }
    this._renderHangar();
    if (record && goldFrom != null && this.ui.hangarGold) {
      this.ui.hangarGold.textContent = String(goldFrom);
    }
    requestAnimationFrame(() => {
      if (this.state !== 'hangar') return;
      this._renderHangar();
      if (record && goldFrom != null && this.ui.hangarGold) {
        this.ui.hangarGold.classList.remove('gold-catch');
        void this.ui.hangarGold.offsetWidth;
        this.ui.hangarGold.classList.add('gold-catch');
        this.audio.coin();
      }
    });
    this.clock.getDelta();
    this._syncShipyardView();
  }

  _hangarSelected() {
    return MODULE_ORDER[this._hangarCursor] || 'spark';
  }

  _renderHangar() {
    const id = this._hangarSelected();
    const levels = this.hangar.levels;
    const preview = (levels[id] | 0) > 0 ? null : id;
    this.shipyard.setLoadout(mergeLoadout(levels, emptyBonus()), preview);
    if (this.ui.hangarGold) this.ui.hangarGold.textContent = String(this.hangar.gold);
    if (this.ui.hangarList) {
      this.ui.hangarList.innerHTML = MODULE_ORDER.map((mod, i) => {
        const lv = levels[mod] | 0;
        const max = MODULES[mod].max;
        const cost = nextCost(levels, mod);
        const selected = i === this._hangarCursor;
        const locked = lv <= 0;
        const maxed = lv >= max;
        const pips = Array.from({ length: max }, (_, p) => {
          const on = p < lv;
          const ghost = selected && locked && p === 0;
          return `<span class="pip${on ? ' on' : ''}${ghost ? ' ghost' : ''}"></span>`;
        }).join('');
        const meta = maxed ? 'MAX' : locked ? `₡${cost}` : `${lv}/${max}  ₡${cost}`;
        const rec = this._hangarRecommend === mod;
        return `<button type="button" class="hangar-row${selected ? ' selected' : ''}${locked ? ' locked' : ''}${maxed ? ' maxed' : ''}${rec ? ' recommend' : ''}" data-mod="${mod}" role="option" aria-selected="${selected}"><span><strong>${CATALOG[mod].title}</strong><div class="pips">${pips}</div></span><span class="meta">${meta}</span></button>`;
      }).join('');
      const sel = this.ui.hangarList.querySelector('.selected');
      sel?.scrollIntoView({ block: 'nearest' });
    }
    const spec = CATALOG[id];
    const lv = levels[id] | 0;
    const cost = nextCost(levels, id);
    const poor = cost > 0 && this.hangar.gold < cost;
    if (this.ui.hangarName) this.ui.hangarName.textContent = spec.title;
    if (this.ui.hangarBlurb) {
      this.ui.hangarBlurb.textContent = lv <= 0
        ? `Not fitted. ${spec.blurb}`
        : lv >= MODULES[id].max
          ? `Mark ${lv}. The bay is glowing. ${spec.blurb}`
          : `Mark ${lv}. ${spec.blurb}`;
    }
    if (this.ui.hangarCost) {
      this.ui.hangarCost.classList.toggle('poor', poor);
      this.ui.hangarCost.textContent = cost <= 0 ? 'SYSTEM MAXED' : poor ? `₡${cost}  —  NOT ENOUGH` : `₡${cost}`;
    }
    if (this.ui.hangarNext) {
      const recId = this._hangarRecommend;
      if (recId && CATALOG[recId]) {
        this.ui.hangarNext.hidden = false;
        this.ui.hangarNext.textContent = `NEXT · ${CATALOG[recId].title}`;
      } else {
        this.ui.hangarNext.hidden = true;
        this.ui.hangarNext.textContent = '';
      }
    }
    if (this.ui.hangarBuy) {
      const base = buyLabel(levels, id);
      this.ui.hangarBuy.textContent = cost <= 0
        ? base
        : poor
          ? `NOT ENOUGH  ₡${cost}`
          : `${base}  ₡${cost}`;
      this.ui.hangarBuy.disabled = cost <= 0 || poor;
      this.ui.hangarBuy.classList.toggle('poor', poor);
    }
  }

  _setHangarShopMin(on) {
    const el = this.ui.hangar;
    if (!el) return;
    el.classList.toggle('shop-min', !!on);
    if (this.ui.hangarHullBtn) {
      this.ui.hangarHullBtn.textContent = on ? 'SHOP' : 'VIEW HULL';
      this.ui.hangarHullBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }

  _toggleHangarShop() {
    const el = this.ui.hangar;
    if (!el) return;
    this._setHangarShopMin(!el.classList.contains('shop-min'));
    requestAnimationFrame(() => this._syncShipyardView());
  }

  _hangarMove(dir) {
    const n = MODULE_ORDER.length;
    this._hangarCursor = (this._hangarCursor + dir + n) % n;
    this.audio.yardTick();
    this._renderHangar();
  }

  _hangarBuy() {
    const id = this._hangarSelected();
    const result = buyModule(this.hangar, id);
    this.hangar = result.hangar;
    if (!result.ok) {
      this.audio.hit?.();
      return;
    }
    this.audio.buy();
    this._applyLoadout();
    this._renderHangar();
  }

  _hangarDone() {
    this.ui.hangar?.classList.add('hidden');
    if (this._hangarFrom === 'win') {
      this.win();
      return;
    }
    this._openMap({ keepRun: this._runLive });
  }

  _onHangarKey(e) {
    if (e.code === 'ArrowUp' || e.code === 'KeyW' || e.code === 'Numpad8') {
      e.preventDefault();
      this._hangarMove(-1);
    }
    if (e.code === 'ArrowDown' || e.code === 'KeyS' || e.code === 'Numpad2') {
      e.preventDefault();
      this._hangarMove(1);
    }
    if ((e.code === 'Enter' || e.code === 'Space') && !e.repeat) {
      e.preventDefault();
      this._hangarBuy();
    }
  }

  async _deployLevel() {
    const c = this._mapCursor.c;
    const l = this._mapCursor.l;
    if (this._nodeLocked(c, l)) return;
    await this.audio.resume();
    const keep = this._runLive;
    this.campaignIndex = c;
    this.levelIndex = l;
    if (!keep) {
      this._resetRun();
      this.campaignIndex = c;
      this.levelIndex = l;
    }
    this._resetLevel(true);
    this._runLive = true;
    this._hasRun = true;
    this._resumeTo = 'play';
    this.state = 'playing';
    this.ui.map?.classList.add('hidden');
    this.ui.title.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
    this.ui.hangar?.classList.add('hidden');
    this.ui.setup?.classList.add('hidden');
    this.ui.hud.classList.add('visible');
    this._viewSnap = 1;
    this.audio.setPaused(false);
    this.clock.getDelta();
    this._releaseUiFocus();
  }

  _clearLevel() {
    if (this.state !== 'playing') return;
    this.stage.cleared = true;
    const slot = this._currentLevel();
    const ci = this.campaignIndex;
    const li = this.levelIndex;
    this.progress = saveProgress(markCleared(this.progress, ci, li));
    const nxt = nextSlot(ci, li);
    if (nxt) {
      this.campaignIndex = nxt.ci;
      this.levelIndex = nxt.li;
      this._mapCursor = { c: nxt.ci, l: nxt.li };
    }
    const goldFrom = this.hangar.gold;
    this._collectLooseGold();
    const payout = clearPayout(ci, li, {
      superBoss: slot?.lv.chapters?.some((ch) => /SUPER/.test(ch.toast || '')),
      finale: slot?.lv.boss === 'finale',
      mids: this._midsThisLevel | 0,
    });
    this.hangar = addGold(this.hangar, payout.total);
    this.entities.pullLoot(false);
    this._openHangar({ from: nxt ? 'clear' : 'win', payout, slot, nxt, hangar: this.hangar, goldFrom });
  }

  win() {
    this._endRun(true);
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  loop() {
    requestAnimationFrame(this.loop);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this._pollPad();
    this.audio.tick();
    if (this.state === 'paused' || this.state === 'dead' || this.state === 'continue' || this.state === 'map' || this.state === 'hangar' || this.state === 'setup' || (this.state === 'title' && this._hasRun)) {
      if (this.state === 'hangar') {
        this._syncShipyardView();
        this.shipyard.update(dt);
        this.shipyard.render();
        this._pinHangarNext();
        return;
      }
      if (this.state === 'continue') this._tickContinue(dt);
      this._render();
      return;
    }
    if (this.state === 'playing' && this.hitStop > 0) {
      this.hitStop -= dt;
      this._render();
      return;
    }
    this.update(dt);
    this._render();
  }

  update(dt) {
    const cinematic = this.state !== 'playing';
    const pad = this._padState();
    const boosting = this.state === 'playing'
      && (this.input.keys.has('ShiftLeft') || this.input.keys.has('ShiftRight') || pad.boost);

    let wantBoost = 0;
    if (this.state === 'playing') {
      if (boosting && this.boost > 0.05) {
        wantBoost = 1;
        this.boost = Math.max(0, this.boost - dt * 0.32);
      } else {
        this.boost = Math.min(1, this.boost + dt * 0.1);
      }
    }

    this.kickAmt = Math.max(0, this.kickAmt - dt * 9);
    this.bombCd = Math.max(0, this.bombCd - dt);

    const cruise = cinematic
      ? 16
      : 26 + wantBoost * 22 + Math.min(this.traveled / 2800, 8);
    this.speed = lerp(this.speed, cruise, 1 - Math.exp(-dt * 2.4));
    if (this.state === 'playing' && this._railHold > 0) this._railHold -= dt;
    if (this.state === 'playing' && this._bossHold > 0) {
      this._bossHold -= dt;
      if (this._bossHold <= 0) this.ui.bossTitle?.classList.add('settled');
    }
    if (this.state === 'playing' && (this._pendingClear || this._bossSlow > 0)) {
      this.invuln = Math.max(this.invuln, 1);
    }
    if (this.state === 'playing' && this._bossSlow > 0) {
      this._bossSlow -= dt;
      if (this._bossSlow <= 0 && this._pendingClear) {
        this._pendingClear = false;
        this._clearLevel();
        return;
      }
    }
    const hold = this.state === 'playing' && (this._railHold > 0 || this._bossHold > 0 || this._bossSlow > 0);
    this.traveled += this.speed * dt * (hold ? 0.32 : 1);
    this.path.ensure(this.traveled + 400);

    if (Math.floor(this.traveled / 90) !== this._ribbonAt) {
      this._ribbonAt = Math.floor(this.traveled / 90);
      this.world.attachRibbon(this._localRibbon());
    }

    const sample = this.path.sample(this.traveled);
    const frame = createFrenet(sample.tangent);

    if (this.state === 'playing') {
      const lane = this._laneLimit();
      const depth = this._depthLimit();
      if (this._touch.held) {
        this.slide.set(0, 0);
        const decay = Math.exp(-dt * 12);
        this._touch.steerX *= decay;
        this._touch.steerY *= decay;
        this.steer.set(this._touch.steerX, this._touch.steerY);
      } else {
        let keyX = this._axisHeld(
          ['KeyA', 'ArrowLeft', 'Numpad4', 'a'],
          ['KeyD', 'ArrowRight', 'Numpad6', 'd'],
        );
        let keyY = this._axisHeld(
          ['KeyS', 'ArrowDown', 'Numpad2', 's'],
          ['KeyW', 'ArrowUp', 'Numpad8', 'w'],
        );
        if (Math.abs(pad.x) > Math.abs(keyX)) keyX = pad.x;
        if (Math.abs(pad.y) > Math.abs(keyY)) keyY = pad.y;
        this._applySlide(keyX, keyY, dt);
        this.offset.x = clamp(this.offset.x + this.slide.x * dt, -lane, lane);
        this.holdY = clamp(this.holdY + this.slide.y * dt, depth.min, depth.max);
        if (this.offset.x <= -lane && this.slide.x < 0) this.slide.x = 0;
        if (this.offset.x >= lane && this.slide.x > 0) this.slide.x = 0;
        if (this.holdY <= depth.min && this.slide.y < 0) this.slide.y = 0;
        if (this.holdY >= depth.max && this.slide.y > 0) this.slide.y = 0;
        this.steer.set(keyX, keyY);
      }
      this.offset.x = clamp(this.offset.x, -lane, lane);
      this.holdY = clamp(this.holdY, depth.min, depth.max);
      this.offset.y = 0;
    } else {
      this.slide.set(0, 0);
      this.offset.x = Math.sin(this.clock.elapsedTime * 0.35) * this._laneLimit() * 0.42;
      this.holdY = 8;
      this.steer.set(0, 0);
    }

    const rail = sampleRail(this.path, this.traveled + this.holdY, this.offset.x, 0.35);
    const shipSample = rail.sample;
    const shipFrame = rail.frame;
    this.ship.position.copy(rail.pos);
    this.ship.up.copy(shipFrame.normal);
    this.ship.lookAt(this.ship.position.clone().add(shipSample.tangent));
    spinShipKits(this.shipCraft, dt);
    if (this.shipRig) {
      const bank = 1 - Math.exp(-dt * 9);
      this.shipRig.rotation.z = lerp(this.shipRig.rotation.z, -this.steer.x * 0.35, bank);
      this.shipRig.rotation.x = lerp(this.shipRig.rotation.x, this.steer.y * 0.12, bank);
      const flickering = this.invuln > 0 && Math.sin(this.clock.elapsedTime * 28) < 0;
      this.shipRig.visible = !flickering;
    }
    if (this.spawnIn > 0) {
      this.spawnIn = Math.max(0, this.spawnIn - dt);
      const t = 1 - this.spawnIn / 0.65;
      const ease = 1 - (1 - t) * (1 - t);
      this.ship.scale.setScalar(3.1 * Math.max(0.04, ease));
    } else {
      this.ship.scale.setScalar(3.1);
    }

    this._applyCamera(dt, sample, frame, shipSample, shipFrame);

    const boostAmt = wantBoost;
    const firingNow = this.state === 'playing' && (this.input.firing || this.input.keys.has('Space') || pad.fire);
    for (const ex of this.exhausts) {
      const pulse = 1 + boostAmt * 0.8 + (firingNow ? 0.22 : 0) + this.muzzleFlash * 0.35;
      ex.scale.setScalar(pulse);
      ex.material.color.set(boostAmt > 0.2 ? 0xffd166 : 0x9be7ff);
    }
    this.muzzleFlash = Math.max(0, this.muzzleFlash - dt * 8);
    if (this.muzzle) {
      this.muzzle.material.opacity = this.muzzleFlash * 0.9;
      this.muzzle.scale.setScalar((this._muzzleFat || 0.7) + this.muzzleFlash * 1.6);
    }
    if (this.muzzleSpike) {
      this.muzzleSpike.material.opacity = this.muzzleFlash * 0.7;
      this.muzzleSpike.scale.set(this._muzzleThin || 1, 1, 0.6 + this.muzzleFlash * (this._muzzleLong || 1.8));
    }
    for (const l of this.shipLights) l.intensity = 3.2 + boostAmt * 3;
    this.trail.push(this.ship.position.clone().addScaledVector(shipSample.tangent, -1.4), boostAmt);
    this.audio.setBoost(boostAmt);

    this.world.update(dt, this.camera, this.traveled);
    this.world.recycleCrystals(this.path, this.traveled, this._laneLimit());

    const heat = this._stageHeat();
    const difficulty = (1 + this.traveled / 900) * heat;
    this.entities.laneLimit = this._laneLimit();
    this.entities.coinValue = coinValue(this.campaignIndex);
    this.entities.spawnAhead(this.path, this.traveled);
    if (this.state === 'playing') this._runStage();
    if (this.state === 'playing') this._maybeBoardTeach();
    if (this.state === 'playing') this._watchBossPhase();
    this.entities.recycleBehind(this.traveled, this.holdY);
    this.entities.update(
      dt,
      this.path,
      this.traveled,
      this.ship.position,
      this.offset,
      difficulty,
      this.holdY,
      tractorSpec(this.loadout),
      this.camera,
    );
    this.audio.setIntensity(this.stage.intensity(
      this.traveled,
      this.entities.hunterCount(),
      wantBoost > 0,
      !!this.entities.boss?.alive || this.entities.enemies.some((e) => e.alive && e.elite),
    ));

    this._updateTraces(shipFrame, dt);

    const extras = [
      { pos: this.shipLights[0].getWorldPosition(new THREE.Vector3()), color: new THREE.Color('#5ce1ff'), intensity: 12 + boostAmt * 8 },
      { pos: this.shipLights[1].getWorldPosition(new THREE.Vector3()), color: new THREE.Color('#5ce1ff'), intensity: 12 + boostAmt * 8 },
      { pos: this.world.sun.position, color: new THREE.Color('#ffe29a'), intensity: 22 },
    ];
    this.world.setLights(this.entities.nearestLights(this.ship.position, extras));

    this.hurt = Math.max(0, this.hurt - dt * 1.8);
    this.invuln = Math.max(0, this.invuln - dt);
    let gatePulse = 0;
    for (const gate of this.entities.gates) {
      if (gate.burst > 0) gatePulse = Math.max(gatePulse, gate.pulse || 0);
    }
    this.gateFx = gatePulse;
    this.comboTimer -= dt;
    if (this.comboTimer <= 0) {
      if (this.combo >= 2) this._comboBreak();
      this.combo = 1;
    }
    for (const k of Object.keys(this.gunCd)) this.gunCd[k] = Math.max(0, this.gunCd[k] - dt);

    if (this.state === 'playing') {
      const firing = this.input.firing || this.input.keys.has('Space') || pad.fire;
      if (firing) {
        const arms = arsenal(this.loadout, this.clock.elapsedTime);
        const muzzle = this.traveled + this.holdY + 6.2;
        let frameOwns = false;
        for (const group of ['titan', 'nova', 'mine', 'missile', 'primary']) {
          const bank = arms[group];
          if (!bank.shots.length || this.gunCd[group] > 0) continue;
          let any = false;
          for (const shot of bank.shots) {
            if (this.entities.fireRail(this.path, muzzle, this.offset.x + shot.x, 1, shot)) any = true;
          }
          if (any) {
            this.gunCd[group] = bank.cd;
            this._voiceGun(bank.shots, group, { ownHands: !frameOwns, quiet: frameOwns });
            frameOwns = true;
          }
        }
      }

      const orbs = this.entities.collectOrbs(this.ship.position, 2.2);
      for (const orb of orbs) {
        this.score += orb.value;
        this.audio.collect();
        this.health = Math.min(1, this.health + 0.05);
      }

      const pickups = this.entities.collectMotes(this.ship.position, 2.4);
      const motes = pickups.filter((p) => p.kind !== 'coin');
      const coins = pickups.filter((p) => p.kind === 'coin');
      if (motes.length) this._gainMotes(motes.length);
      if (coins.length) {
        this._gainGold(coins.reduce((n, p) => n + (p.value || this.entities.coinValue || 5), 0), coins.length);
        for (const coin of coins) this._spawnGoldPip(coin.mesh?.position);
      }

      const gateHits = this.entities.collectGates(this.ship.position);
      for (const hit of gateHits) {
        if (hit.blocked) {
          if (this.invuln <= 0) {
            if (this._damage(0.34)) return;
            this.toast('SHIELD LOCK');
          }
        } else {
          this._combatScore(500);
          this.boost = 1;
          this.audio.gate();
          this.toast('GATE BREAK');
        }
      }

      const combat = this.entities.bulletHits();
      for (const k of combat) {
        if (k.type === 'ping') {
          this.entities.spawnImpact(k.pos, k.color || 0x9af7ff);
          this._punch(0.018, 0.35);
          if (k.chip) this.audio.chip();
          continue;
        }
        const big = k.type === 'boss' || k.type === 'midboss';
        this.entities.explode(k.pos, k.type === 'blocker' ? 0xff9a3a : big ? 0xffd166 : 0x5ce1ff);
        this.entities.spawnImpact(k.pos, big ? 0xffe29a : 0x9af7ff);
        this.audio.explosion(big);
        this._punch(big ? 0.07 : 0.038, big ? 1.4 : 0.7);
        if (k.type === 'enemy' || k.type === 'midboss') {
          this.kills += 1;
          this._combatScore(k.type === 'midboss' ? 1400 : 220);
          this.boost = Math.min(1, this.boost + 0.18);
          this._dropLoot(k);
          if (k.type === 'midboss') {
            this._noteMidKill(k);
            if (this._isLevelBossKill(k)) {
              this._beginBossClear(k.role, k.pos);
              return;
            }
            this.toast(this._bossToast(k.role));
          }
        } else if (k.type === 'blocker') {
          this._combatScore(160);
          this._dropLoot(k);
        } else if (k.type === 'unlock') {
          this._combatScore(220);
          this.audio.gate();
          this.toast('LOCK SHATTERED');
          this._dropLoot(k);
        } else if (k.type === 'boss') {
          this.kills += 1;
          this._combatScore(3200);
          this._dropLoot(k);
          this._beginBossClear('finale', k.pos);
          return;
        }
      }

      for (const _ of this.entities.nearMisses(this.ship.position)) {
        this.nearMisses += 1;
        this._combatScore(90);
      }

      if (this.invuln <= 0) {
        const crystalHit = this.world.hitTest(this.ship.position, 1.2);
        const rammed = this.entities.collideEnemies(this.ship.position, 1.45);
        const blocked = this.entities.collideBlockers(this.ship.position, 1.4);
        const shotHit = this.entities.shotsHitPlayer(this.ship.position, 1.35);
        if (blocked.length) {
          for (const blk of blocked) {
            blk.alive = false;
            blk.mesh.visible = false;
            this.entities.explode(blk.mesh.position.clone(), 0xff9a3a);
          }
          this.audio.explosion();
          this._punch(0.05, 1.1);
          if (this._damage(0.42)) return;
        } else if (rammed.length) {
          let ramDmg = 0.3;
          for (const en of rammed) {
            if (en.elite || en.role === 'finale') {
              en.hp = (en.hp || 8) - 6;
              this.entities.spawnImpact(en.mesh.position.clone(), 0xffd166);
              ramDmg = 0.38;
              if (en.hp <= 0 && en.mesh) {
                en.alive = false;
                en.mesh.visible = false;
                this.entities.explode(en.mesh.position.clone(), 0xffd166);
                this.kills += 1;
                this._dropLoot({
                  drop: en.drop ?? 4,
                  pathDist: en.pathDist,
                  laneX: en.offset?.x ?? this.offset.x,
                  bombDrop: en.bombDrop ?? 0,
                  type: en.role === 'finale' ? 'boss' : 'midboss',
                  role: en.role,
                });
                this._noteMidKill({
                  type: en.role === 'finale' ? 'boss' : 'midboss',
                  role: en.role,
                });
                if (this._isLevelBossKill({
                  type: en.role === 'finale' ? 'boss' : 'midboss',
                  role: en.role,
                })) {
                  this._beginBossClear(en.role, en.mesh.position);
                  return;
                }
              }
            } else if (en.hp !== undefined && en.mesh) {
              en.alive = false;
              en.mesh.visible = false;
              this.entities.explode(en.mesh.position.clone(), 0xff2458);
              this.kills += 1;
              this._dropLoot({
                drop: en.drop ?? 1,
                pathDist: en.pathDist,
                laneX: en.offset?.x ?? this.offset.x,
              });
            }
          }
          this.audio.explosion();
          this._punch(0.045, 0.9);
          if (this._damage(ramDmg)) return;
        } else if (shotHit) {
          if (this._damage(0.16)) return;
        } else if (crystalHit) {
          if (this._damage(0.12)) return;
        }
      }
    }

    this.fx.uniforms.uTime.value = this.clock.elapsedTime;
    this.fx.uniforms.uBoost.value = boostAmt;
    this.fx.uniforms.uHurt.value = this.hurt;
    this.fx.uniforms.uGate.value = this.gateFx;
    const sunNdc = this.world.sun.position.clone().project(this.camera);
    this.fx.uniforms.uSunPos.value.set(sunNdc.x * 0.5 + 0.5, sunNdc.y * 0.5 + 0.5);
    const sunInView = sunNdc.z < 1
      && sunNdc.x > -1.2 && sunNdc.x < 1.2
      && sunNdc.y > -1.2 && sunNdc.y < 1.2;
    const flare = (sunInView ? 0.85 : 0) * (this.setup?.flare ?? 1);
    this.fx.uniforms.uFlare.value = lerp(this.fx.uniforms.uFlare.value, flare, 1 - Math.exp(-dt * 8));
    this.fx.uniforms.uCockpit.value = 0;
    this.fx.uniforms.uKick.value = this.kickAmt * (this.setup?.shake ?? 1);
    this._riftBloom = Math.max(0, this._riftBloom - dt);
    const bloomStr = (0.48 + this.gateFx * 0.28 + this._riftBloom * 0.5) * (this.setup?.bloom ?? 1);
    const bloomThr = 0.42;
    const bloomRad = 0.5 + this.gateFx * 0.12;
    this.bloom.strength = lerp(this.bloom.strength, bloomStr, 1 - Math.exp(-dt * 6));
    this.bloom.threshold = lerp(this.bloom.threshold, bloomThr, 1 - Math.exp(-dt * 6));
    this.bloom.radius = lerp(this.bloom.radius, bloomRad, 1 - Math.exp(-dt * 6));

    this._syncHud();
  }

  _dropLoot(src) {
    const n = src?.drop ?? 0;
    const dist = src.pathDist ?? (this.traveled + this.holdY + 6);
    const lane = src.laneX ?? this.offset.x;
    if (n > 0) this.entities.spawnMote(this.path, dist, lane, n);
    if (src?.bombDrop) this._gainBomb(src.bombDrop);
    const role = src?.role;
    let coins = 0;
    if (src?.type === 'boss' || role === 'finale') coins = 5;
    else if (src?.type === 'midboss' || src?.elite) coins = 3;
    else if (role === 'heavy' || role === 'slag' || role === 'chime' || role === 'prism' || role === 'wisp') coins = 1;
    else if (Math.random() < 0.16) coins = 1;
    if (coins) this.entities.spawnCoins(this.path, dist, lane, coins, { grace: 0.12 });
  }

  _applyLoadout() {
    this.loadout = mergeLoadout(this.hangar?.levels || { spark: 1 }, this.runBonus);
    this.step = MODULE_ORDER.reduce((n, m) => n + (this.runBonus[m] | 0), 0);
    this.rank = loadoutPower(this.loadout);
    this.maxStep = Math.max(this.maxStep || 0, this.rank);
    dressShip(this.shipCraft, this.loadout);
  }

  _gainGold(amount, count = 1) {
    if (amount <= 0) return;
    this.hangar = addGold(this.hangar, amount);
    this.audio.coin();
    this._teach('gold', 'GOLD BUYS BAYS IN DRYDOCK');
  }

  _gainMotes(n) {
    if (n <= 0) return;
    const firstMote = !this._hinted.has('mote');
    this._teach('mote', 'MOTES CHARGE OWNED BAYS');
    this.audio.mote(n > 1);
    const fill = runFill(this.hangar.levels, this.runBonus);
    if (fill.cap <= 0 || fill.used >= fill.cap) {
      this._combatScore(36 * n);
      return;
    }
    this.charge += n;
    const result = applyMotes(this.hangar.levels, this.runBonus, n);
    this.runBonus = result.runBonus;
    this._applyLoadout();
    if (result.toast && !firstMote) {
      this.audio.powerup();
      this.toast(result.toast);
    }
  }

  _shedResonance() {
    const used = runFill(this.hangar.levels, this.runBonus).used;
    if (used <= 0 && this.charge <= 0) return;
    const shed = Math.min(6, 2 + Math.floor(used / 14));
    this.runBonus = shedBonus(this.runBonus, shed);
    this.charge = 0;
    this._applyLoadout();
    this.entities.spawnMote(
      this.path,
      this.traveled + this.holdY + 12,
      this.offset.x,
      Math.min(4, shed),
      { grace: 0.45, spread: 7.5 },
    );
  }

  _updateTraces(shipFrame, dt) {
    const drones = this.loadout?.drone || 0;
    const showN = this.state === 'playing' ? Math.min(this.traces.length, drones >= 1 ? (drones >= 5 ? 4 : drones >= 3 ? 3 : 2) : 0) : 0;
    const t = this.clock.elapsedTime;
    for (let i = 0; i < this.traces.length; i++) {
      const mote = this.traces[i];
      mote.visible = i < showN;
      if (i >= showN) continue;
      const side = i % 2 === 0 ? -1 : 1;
      const row = Math.floor(i / 2);
      const orbit = 4.4 + row * 1.6 + Math.sin(t * 3.2 + i) * 0.35;
      const lift = 0.4 + Math.cos(t * 2.4 + i * 1.7) * 0.2;
      mote.position.copy(this.ship.position)
        .addScaledVector(shipFrame.binormal, side * orbit)
        .addScaledVector(shipFrame.normal, lift);
      const gold = (this.loadout.titan || 0) >= 1;
      mote.material.color.set(gold ? 0xffd166 : 0xff64e8);
      mote.scale.setScalar(0.85 + drones * 0.06 + Math.sin(t * 6 + i) * 0.08);
    }
    if (this.shipCore) {
      const col = (this.loadout.titan || 0) > 0 ? 0xffd166
        : (this.loadout.seeker || 0) > 0 ? 0xff8a4a
          : (this.loadout.needle || 0) > 0 ? 0x9be7ff
            : 0xc8fff6;
      this.shipCore.material.color.set(col);
    }
  }

  _combatScore(n) {
    const prev = this.combo;
    this.score += Math.floor(n * this.combo);
    this.combo = Math.min(8, this.combo + 0.35);
    this.maxCombo = Math.max(this.maxCombo, this.combo);
    this.comboTimer = 3.2;
    this._comboCross(prev, this.combo);
  }

  _comboCross(prev, next) {
    const el = this.ui.combo;
    for (const mark of [2, 4, 8]) {
      if (prev < mark && next >= mark) {
        if (el) {
          el.classList.remove('combo-stab', 'combo-drop', 'combo-mark-2', 'combo-mark-4', 'combo-mark-8');
          void el.offsetWidth;
          el.classList.add('combo-stab', `combo-mark-${mark}`);
        }
        this.audio.comboStab(mark);
      }
    }
  }

  _comboBreak() {
    const el = this.ui.combo;
    if (el) {
      el.classList.remove('combo-stab', 'combo-hot', 'combo-max', 'combo-drop', 'combo-mark-2', 'combo-mark-4', 'combo-mark-8');
      void el.offsetWidth;
      el.classList.add('combo-drop');
    }
    this.audio.comboDrop();
  }

  _hudPoint(worldPos) {
    this.camera.updateMatrixWorld();
    this._proj.copy(worldPos).project(this.camera);
    return {
      x: (this._proj.x * 0.5 + 0.5) * window.innerWidth,
      y: (-this._proj.y * 0.5 + 0.5) * window.innerHeight,
    };
  }

  _spawnGoldPip(worldPos) {
    const dest = this.ui.gold;
    if (!dest) return;
    const from = worldPos
      ? this._hudPoint(worldPos)
      : { x: window.innerWidth * 0.5, y: window.innerHeight * 0.55 };
    const to = dest.getBoundingClientRect();
    const pip = document.createElement('div');
    pip.className = 'gold-pip';
    pip.style.left = `${from.x}px`;
    pip.style.top = `${from.y}px`;
    document.body.appendChild(pip);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pip.style.transform = `translate(${to.left + to.width * 0.5 - from.x}px, ${to.top + to.height * 0.5 - from.y}px) scale(0.35)`;
        pip.style.opacity = '0.15';
      });
    });
    setTimeout(() => {
      dest.classList.remove('gold-catch');
      void dest.offsetWidth;
      dest.classList.add('gold-catch');
      pip.remove();
    }, 560);
  }

  _score(n) {
    this._combatScore(n);
  }

  _noteMidKill(k) {
    if (k?.type !== 'midboss') return;
    if (this._isLevelBossKill(k)) return;
    this._midsThisLevel = (this._midsThisLevel || 0) + 1;
  }

  _damage(amt) {
    if (this._pendingClear || this._bossSlow > 0) return false;
    this.health -= amt;
    this.hurt = 1;
    this.invuln = 0.7;
    if (this.combo >= 2) this._comboBreak();
    this.combo = 1;
    this.audio.hit();
    this._punch(0.04, 1.15);
    const hull = this.ui.health;
    const vitals = this.ui.hudVitals;
    if (hull) {
      hull.classList.remove('hull-hit');
      void hull.offsetWidth;
      hull.classList.add('hull-hit');
    }
    if (vitals) {
      vitals.classList.remove('hull-hit');
      void vitals.offsetWidth;
      vitals.classList.add('hull-hit');
    }
    this._shedResonance();
    if (this.health <= 0) {
      this.die();
      return true;
    }
    return false;
  }

  _syncHud() {
    this._syncBossMeter();
    if (this.state !== 'playing') return;
    this.ui.score.textContent = this.score.toLocaleString();
    this.ui.combo.textContent = `×${this.combo.toFixed(1)}`;
    this.ui.combo.classList.toggle('combo-quiet', this.combo <= 1.05);
    this.ui.combo.classList.toggle('combo-hot', this.combo >= 2);
    this.ui.combo.classList.toggle('combo-max', this.combo >= 8);
    this._lastCombo = this.combo;
    const slotCode = this._currentLevel()?.lv.id || '1-1';
    this.ui.depth.textContent = `${slotCode} · ${(this.traveled / 10).toFixed(0)} km`;
    this.ui.health.style.transform = `scaleX(${clamp(this.health, 0, 1)})`;
    this.ui.boost.style.transform = `scaleX(${clamp(this.boost, 0, 1)})`;
    if (this.ui.gold) this.ui.gold.textContent = String(this.hangar?.gold || 0);
    if (this.ui.riftName) this.ui.riftName.textContent = hudName(this.loadout);
    if (this.ui.riftFill) {
      const fill = runFill(this.hangar.levels, this.runBonus);
      const ratio = fill.ratio;
      this.ui.riftFill.style.transform = `scaleX(${Math.max(0.03, ratio)})`;
      this.ui.riftWrap?.classList.toggle('rift-max', fill.cap > 0 && fill.used >= fill.cap);
      this.ui.riftWrap?.classList.toggle('rift-wings', (this.loadout.seeker || 0) > 0 && (this.loadout.titan || 0) === 0);
      this.ui.riftWrap?.classList.toggle('rift-titan', (this.loadout.titan || 0) > 0);
    }
    this._syncBombs();
    this._syncLives();
  }

  _syncBossMeter() {
    const el = this.ui?.bossMeter;
    if (!el) return;
    const boss = this.state === 'playing' ? this.entities.activeBoss() : null;
    const level = boss && (boss.levelBoss || boss.superBoss || boss.role === 'finale');
    if (!level) {
      if (this._pendingClear || this._bossSlow > 0) return;
      el.classList.remove('show', 'phase-2', 'phase-3', 'phase-sting', 'arrive');
      this.ui.bossTitle?.classList.remove('show', 'fall', 'settled');
      return;
    }
    el.classList.add('show');
    el.classList.toggle('phase-2', boss.visPhase === 2);
    el.classList.toggle('phase-3', (boss.visPhase || 1) >= 3);
    if (this.ui.bossName) {
      this.ui.bossName.textContent = this.ui.bossTitle?.classList.contains('show') ? '' : this._bossName(boss.role);
    }
    const ratio = clamp(boss.hp / Math.max(1, boss.maxHp || boss.hp), 0, 1);
    if (this.ui.bossFill) this.ui.bossFill.style.transform = `scaleX(${Math.max(0.02, ratio)})`;
  }

  _render() {
    this.composer.render();
  }

  _axisHeld(neg, pos) {
    let v = 0;
    for (const code of neg) if (this.input.keys.has(code)) v -= 1;
    for (const code of pos) if (this.input.keys.has(code)) v += 1;
    return Math.max(-1, Math.min(1, v));
  }

  _applySlide(keyX, keyY, dt) {
    const maxSpeed = 92;
    const accel = 820;
    const reverse = 1280;
    const brake = 420;
    let ix = keyX;
    let iy = keyY;
    const mag = Math.hypot(ix, iy);
    if (mag > 1) {
      ix /= mag;
      iy /= mag;
    }
    this.slide.x = this._approachVel(this.slide.x, ix * maxSpeed, accel, brake, reverse, dt);
    this.slide.y = this._approachVel(this.slide.y, iy * maxSpeed, accel, brake, reverse, dt);
  }

  _approachVel(current, target, accel, brake, reverse, dt) {
    const turning = (current > 0.5 && target < 0) || (current < -0.5 && target > 0);
    const rate = target === 0 ? brake : turning ? reverse : accel;
    let next = current;
    if (next < target) next = Math.min(target, next + rate * dt);
    else if (next > target) next = Math.max(target, next - rate * dt);
    if (target !== 0 && Math.abs(next) < Math.abs(target) * 0.22) {
      next = target * 0.22;
    }
    return next;
  }

  _playfieldHalf() {
    const height = 168;
    const fov = 38 * Math.PI / 180;
    return height * Math.tan(fov / 2);
  }

  _depthLimit() {
    const halfH = this._playfieldHalf();
    const focus = 22;
    const pad = 5;
    return { min: focus - halfH + pad, max: focus + halfH - pad };
  }

  _laneLimit() {
    const halfWidth = this._playfieldHalf() * this.camera.aspect;
    return Math.max(22, halfWidth - 5);
  }

  _stageHeat() {
    return stageHeat(this.campaignIndex || 0, this.levelIndex || 0);
  }

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.bloom.setSize(w, h);
    this.fx.uniforms.uResolution.value.set(w, h);
    this.shipyard?.resize(w, h);
    this._syncShipyardView();
  }

  _pinHangarNext() {
    const el = this.ui.hangarNext;
    const id = this._hangarRecommend;
    if (!el || el.hidden || !id || !this.shipyard) return;
    const pt = this.shipyard.projectKit(id);
    if (!pt) return;
    el.style.left = `${Math.round(pt.x)}px`;
    el.style.top = `${Math.round(pt.y)}px`;
  }

  _syncShipyardView() {
    if (this.state !== 'hangar' || !this.shipyard) return;
    if (!window.matchMedia('(max-width: 900px)').matches) this._setHangarShopMin(false);
    const stage = this.ui.hangar?.querySelector('.hangar-stage');
    const panel = this.ui.hangar?.querySelector('.hangar-panel');
    this.shipyard.resize(
      window.innerWidth,
      window.innerHeight,
      stage?.getBoundingClientRect() ?? null,
      panel?.getBoundingClientRect() ?? null,
    );
  }

  _runStage() {
    const slot = this._currentLevel();
    const chapters = slot?.lv.chapters || [];
    for (const ch of chapters) {
      if (this.traveled >= ch.at && this._chapterAt < ch.at) {
        this._chapterAt = ch.at;
        const nameToast = slot ? `${slot.lv.id} — ${slot.lv.name}` : '';
        const openerDup = ch.at <= 90 && (ch.toast === nameToast || /^WAVE 0?1\b/.test(ch.toast || ''));
        const bossCard = /^(LEVEL BOSS|SUPER BOSS|FINALE|BOSS)\b/.test(ch.toast || '');
        if (!openerDup && !bossCard) this.toast(ch.toast);
        this._setChapter(ch.world || slot?.lv.world, ch.sting);
      }
    }
    while (this.stage.peek() && this.stage.peek().at <= this.traveled) {
      const ev = this.stage.consume();
      if (ev.kind === 'squad') {
        this.entities.spawnSquad(this.path, this.traveled, ev.form, ev.role, ev.n, ev.ahead, this._stageHeat());
      } else if (ev.kind === 'gate') {
        this.entities.spawnGateAt(this.path, this.traveled, 72, this._stageHeat());
      } else if (ev.kind === 'orbs') {
        this.entities.spawnOrbsAt(this.path, this.traveled, 3);
        this.entities.spawnCoins(this.path, this.traveled + 48, 0, 2);
      } else if (ev.kind === 'blockers') {
        this.entities.spawnBlockersAt(this.path, this.traveled, ev.n || 2, 80, this._stageHeat());
      } else if (ev.kind === 'breath') {
        this.audio.hold('breath');
      } else if (ev.kind === 'hold') {
        this._railHold = 1.35;
        this.audio.hold('hold');
      } else if (ev.kind === 'midboss') {
        this.entities.spawnNamed(this.path, this.traveled, ev.id, 96, this.step, this.loadout, this._stageHeat());
        this.stage.finaleAlive = false;
      } else if (ev.kind === 'boss' || ev.kind === 'finale') {
        const id = ev.id || 'finale';
        const flags = this._bossFlags();
        if (ev.kind === 'finale' || id === 'finale' || id === 'sentinel') {
          this.entities.spawnFinale(this.path, this.traveled, 96, this.step, this.loadout, this._stageHeat());
        } else {
          this.entities.spawnNamed(this.path, this.traveled, id, 96, this.step, this.loadout, this._stageHeat(), flags);
        }
        this.stage.finaleAlive = true;
        this._levelBossSpawned = true;
        this._announceBoss(id === 'sentinel' ? 'finale' : id, flags.superBoss || ev.kind === 'finale');
      }
    }
    this._ensureLevelBoss();
    this._maybeClearLevel();
  }

  _ensureLevelBoss() {
    const slot = this._currentLevel();
    if (!slot || this.state !== 'playing') return;
    const boss = slot.lv.boss;
    if (!boss) return;
    const at = slot.lv.script.find((e) => e.kind === 'finale' || e.kind === 'boss')?.at ?? slot.lv.exitAt;
    if (this.traveled < at) return;
    if (this.entities.boss?.alive) return;
    if (this.entities.enemies.some((e) => e.alive && e.elite && (e.role === boss || boss === 'finale' && e.role === 'finale'))) return;
    if (this._levelBossSpawned) return;
    this._levelBossSpawned = true;
    if (boss === 'finale') {
      this.entities.spawnFinale(this.path, this.traveled, 96, this.step, this.loadout, this._stageHeat());
    } else {
      this.entities.spawnNamed(this.path, this.traveled, boss, 96, this.step, this.loadout, this._stageHeat(), this._bossFlags());
    }
    this.stage.finaleAlive = true;
    this._announceBoss(boss, slot.lv.banner === 'super' || boss === 'finale');
  }

  _maybeClearLevel() {
    if (this._pendingClear || this._bossSlow > 0) return;
    const slot = this._currentLevel();
    if (!slot) return;
    if (this.stage.peek()) return;
    if (this.traveled < slot.lv.exitAt) return;
    if (slot.lv.boss) {
      if (this.entities.boss?.alive) return;
      if (this.entities.enemies.some((e) => e.alive && e.elite && e.role === slot.lv.boss)) return;
      if (!this._levelBossSpawned && this.traveled < slot.lv.exitAt + 80) return;
    }
    this._clearLevel();
  }

  _audioChapter(id) {
    const camp = CAMPAIGNS[this.campaignIndex];
    if (camp?.id === 'heart') {
      const slot = this._currentLevel();
      const finaleAt = slot?.lv.script?.find((e) => e.kind === 'finale')?.at;
      if (slot?.lv.banner === 'finale' && finaleAt != null && this.traveled >= finaleAt) return 'finale';
      return 'heart';
    }
    return id === 'default' ? 'enter' : (id || 'enter');
  }

  _setChapter(id, sting) {
    if (!id) return;
    if (this._chapterId !== id) {
      this._chapterId = id;
      this.world.setChapter(id);
    }
    this.audio.setChapter(this._audioChapter(id));
    if (sting) this.audio.sting(sting);
  }

  _syncLives({ lost = false, force = false } = {}) {
    const el = this.ui?.lives;
    if (!el) return;
    if (!force && !lost && this._livesPainted === this.lives && el.childElementCount === 3) return;
    this._livesPainted = this.lives;
    el.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const pip = document.createElement('div');
      const lit = i < this.lives;
      pip.className = 'life-pip' + (lit ? ' lit' : '') + (lost && i === this.lives ? ' life-lost' : '');
      el.appendChild(pip);
    }
  }

  _bossName(role) {
    return {
      queen: 'WEAVER QUEEN',
      coil: 'TITAN COIL',
      warden: 'WARDEN',
      empress: 'WEAVER EMPRESS',
      finale: 'SENTINEL',
      sentinel: 'SENTINEL',
    }[role] || 'HUNTER';
  }

  _announceBoss(role, superBoss = false) {
    const name = this._bossName(role);
    if (this.ui.bossName) this.ui.bossName.textContent = name;
    if (this.ui.bossTitle) {
      this.ui.bossTitle.textContent = name;
      this.ui.bossTitle.classList.remove('fall');
      this.ui.bossTitle.classList.add('show');
    }
    this.ui.bossMeter?.classList.add('show', 'arrive');
    this._bossHold = superBoss ? 1.15 : 0.85;
    this._bossPhaseSeen = 1;
    this.audio.sting('boss');
  }

  _beginBossClear(role, pos = null) {
    const superBoss = this._currentLevel()?.lv.banner === 'super' || role === 'finale';
    this._bossSlow = superBoss ? 5.4 : 4.7;
    this._pendingClear = true;
    this.entities.pullLoot(true);
    this._riftBloom = 1.15;
    this._showRiftBloom(pos);
    if (this.ui.bossTitle) {
      this.ui.bossTitle.textContent = this._bossName(role);
      this.ui.bossTitle.classList.add('show');
      requestAnimationFrame(() => this.ui.bossTitle?.classList.add('fall'));
    }
    this.audio.sting('fall');
  }

  _showRiftBloom(worldPos) {
    const flash = this.ui.riftBloom;
    if (!flash) return;
    const src = worldPos || this.entities.activeBoss()?.mesh?.position || this.ship?.position;
    const pt = src ? this._hudPoint(src) : { x: window.innerWidth * 0.5, y: window.innerHeight * 0.42 };
    const hud = this.ui.hud?.getBoundingClientRect();
    const bx = hud ? `${((pt.x - hud.left) / Math.max(1, hud.width)) * 100}%` : '50%';
    const by = hud ? `${((pt.y - hud.top) / Math.max(1, hud.height)) * 100}%` : '55%';
    flash.style.setProperty('--bx', bx);
    flash.style.setProperty('--by', by);
    flash.classList.remove('show');
    void flash.offsetWidth;
    flash.classList.add('show');
  }

  _collectLooseGold() {
    let gold = 0;
    for (const p of this.entities.pickups) {
      if (!p.alive || p.kind !== 'coin') continue;
      gold += p.value || this.entities.coinValue || 5;
      p.alive = false;
      p.mesh.visible = false;
      if (p.mesh.position) this._spawnGoldPip(p.mesh.position);
    }
    if (gold) this.hangar = addGold(this.hangar, gold);
  }

  _watchBossPhase() {
    const boss = this.entities.activeBoss();
    if (!boss || !(boss.levelBoss || boss.superBoss || boss.role === 'finale')) {
      this._bossPhaseSeen = 1;
      this.ui.bossMeter?.classList.remove('phase-sting', 'arrive');
      return;
    }
    if (boss.visPhase === this._bossPhaseSeen) return;
    this._bossPhaseSeen = boss.visPhase;
    this.ui.bossMeter?.classList.add('phase-sting');
    this.audio.sting('chapter');
    clearTimeout(this._phaseStingTimer);
    this._phaseStingTimer = setTimeout(() => this.ui.bossMeter?.classList.remove('phase-sting'), 420);
  }

  _bossFlags() {
    const lv = this._currentLevel()?.lv;
    return { levelBoss: true, superBoss: lv?.banner === 'super' };
  }

  _isLevelBossKill(k) {
    const boss = this._currentLevel()?.lv.boss;
    if (!boss) return false;
    if (k.type === 'boss' || k.role === 'finale') return boss === 'finale';
    return k.role === boss;
  }

  _bossToast(role) {
    if (role === 'warden') return 'WARDEN DOWN';
    if (role === 'coil') return 'COIL DOWN';
    if (role === 'empress') return 'EMPRESS DOWN';
    if (role === 'finale') return 'SENTINEL DOWN';
    return 'QUEEN DOWN';
  }

  _voiceGun(shots, group, { ownHands = true, quiet = false } = {}) {
    const kinds = [...new Set(shots.map((s) => s.kind).filter(Boolean))];
    const kind = kinds.find((k) => k !== 'spark') || kinds[0] || group;
    const gain = quiet ? 0.38 : 1;
    this.audio.shotFor(kind, { gain });
    if (kinds.includes('spark') && kind !== 'spark') this.audio.shotFor('spark', { gain: quiet ? 0.2 : 0.35 });
    if (!ownHands) return;
    const kick = shots.find((s) => s.kind === kind)?.kick ?? 0.2;
    this.kickAmt = Math.max(this.kickAmt, kick);
    const vec = {
      titan: [0.08, 0.45, 1.35],
      needle: [0.04, 0.06, 0.9],
      mine: [0.05, -0.62, 0.18],
      nova: [0.72, 0.22, 0.28],
      seeker: [0.22, 0.16, 0.52],
      spark: [0.05, 0.08, 0.26],
      wing: [0.58, 0.1, 0.32],
      shear: [0.62, 0.12, 0.3],
    }[kind] || [0.1, 0.1, 0.35];
    this.kick.set(vec[0], vec[1], vec[2]);
    const flash = {
      titan: [0xffd166, 1.45, 1.8, 0.7, 1.1],
      needle: [0x9be7ff, 0.72, 0.45, 0.55, 2.4],
      nova: [0xff64e8, 1.15, 1.2, 1.1, 1.6],
      mine: [0x5ce1ff, 0.55, 1.1, 1.4, 0.9],
      seeker: [0xff8a4a, 0.7, 0.8, 1.1, 1.4],
      spark: [0xc8fff6, 1, 0.7, 1, 1.8],
    }[kind] || [0x9be7ff, 0.85, 0.75, 1, 1.7];
    this.muzzleFlash = flash[1];
    this._muzzleFat = flash[2];
    this._muzzleThin = flash[3];
    this._muzzleLong = flash[4];
    if (this.muzzle?.material?.color) this.muzzle.material.color.setHex(flash[0]);
    if (this.muzzleSpike?.material?.color) this.muzzleSpike.material.color.setHex(flash[0]);
  }

  _punch(seconds, mag) {
    this.hitStop = Math.max(this.hitStop, Math.min(0.045, seconds));
    this.kickAmt = Math.max(this.kickAmt, mag);
    this.kick.set((Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 1.2, 0);
  }

  _tryBomb() {
    if (this.state !== 'playing' || this.bombCd > 0 || this.bombs <= 0) return;
    this.bombs -= 1;
    this.bombsUsed += 1;
    this.bombCd = 0.85;
    this.invuln = Math.max(this.invuln, 0.55);
    this.audio.bombBoom();
    const result = this.entities.bombSweep(this.traveled, this.holdY, 16);
    const flash = this.ui.bombFlash;
    if (flash && this.ship) {
      const pt = this._hudPoint(this.ship.position);
      const hud = this.ui.hud?.getBoundingClientRect();
      const bx = hud ? `${((pt.x - hud.left) / Math.max(1, hud.width)) * 100}%` : '50%';
      const by = hud ? `${((pt.y - hud.top) / Math.max(1, hud.height)) * 100}%` : '62%';
      flash.style.setProperty('--bx', bx);
      flash.style.setProperty('--by', by);
      flash.classList.remove('show');
      void flash.offsetWidth;
      flash.classList.add('show');
    }
    this.ui.bombBtn?.classList.remove('bomb-slam');
    void this.ui.bombBtn?.offsetWidth;
    this.ui.bombBtn?.classList.add('bomb-slam');
    this._punch(0.08, 1.6);
    for (const k of result.killed) {
      this.kills += 1;
      this._combatScore(k.type === 'boss' ? 3200 : k.type === 'midboss' ? 1400 : 180);
      this._dropLoot(k);
      this._noteMidKill(k);
      if (k.type === 'boss') {
        this._beginBossClear('finale', k.pos);
        return;
      }
      if (k.type === 'midboss' && this._isLevelBossKill(k)) {
        this._beginBossClear(k.role, k.pos);
        return;
      }
    }
    this._syncBombs();
  }

  _gainBomb(n = 1) {
    const next = Math.min(this.bombMax, this.bombs + n);
    if (next !== this.bombs) {
      this.bombs = next;
      this._syncBombs();
    }
  }

  _syncBombs() {
    const el = this.ui?.bombs;
    if (!el) return;
    el.innerHTML = '';
    for (let i = 0; i < this.bombMax; i++) {
      const pip = document.createElement('div');
      pip.className = 'bomb-pip' + (i < this.bombs ? ' lit' : '');
      el.appendChild(pip);
    }
  }

  _renderScoreboard(el, list, highlightScore) {
    if (!el) return;
    if (!list || !list.length) {
      el.classList.add('empty');
      el.textContent = 'NO HI-SCORES YET';
      return;
    }
    el.classList.remove('empty');
    el.innerHTML = list.map((row, i) => {
      const me = highlightScore != null && row.score === highlightScore ? ' me' : '';
      const tag = row.victory ? 'CLR' : 'KIA';
      return `<div class="row${me}"><span>${i + 1}</span><span>${row.rank} · ${tag}</span><span>${row.score}</span><span>${row.depth} km</span></div>`;
    }).join('');
  }

  _padState() {
    const pads = typeof navigator !== 'undefined' ? (navigator.getGamepads?.() || []) : [];
    let pad = null;
    for (const p of pads) {
      if (p) { pad = p; break; }
    }
    if (!pad) {
      return { x: 0, y: 0, fire: false, bomb: false, boost: false, start: false };
    }
    const dz = (v) => Math.abs(v) < 0.18 ? 0 : v;
    const ax = dz(pad.axes[0] || 0);
    const ay = -dz(pad.axes[1] || 0);
    const dpadX = (pad.buttons[15]?.pressed ? 1 : 0) - (pad.buttons[14]?.pressed ? 1 : 0);
    const dpadY = (pad.buttons[12]?.pressed ? 1 : 0) - (pad.buttons[13]?.pressed ? 1 : 0);
    return {
      x: Math.max(-1, Math.min(1, ax + dpadX)),
      y: Math.max(-1, Math.min(1, ay + dpadY)),
      fire: !!(pad.buttons[0]?.pressed || pad.buttons[7]?.pressed),
      bomb: !!pad.buttons[1]?.pressed,
      boost: !!(pad.buttons[4]?.pressed || pad.buttons[6]?.pressed || pad.buttons[5]?.pressed),
      start: !!(pad.buttons[9]?.pressed || pad.buttons[8]?.pressed),
    };
  }

  _pollPad() {
    const pad = this._padState();
    const prev = this._padPrev;
    if (pad.start && !prev.start) {
      if (this.state === 'playing') this.pause();
      else if (this.state === 'paused') this.resume();
      else if (this.state === 'setup') this._closeSetup();
      else if (this.state === 'hangar') this._hangarDone();
      else if (this.state === 'title') {
        if (this._hasRun) this.resumeFromMenu();
        else this.startPlay();
      } else if (this.state === 'map') this._deployLevel();
      else if (this.state === 'continue') this._acceptContinue();
      else if (this.state === 'dead') this.startPlay();
    }
    if (pad.bomb && !prev.bomb) {
      if (this.state === 'continue') this._declineContinue();
      else if (this.state === 'hangar') this._hangarDone();
      else if (this.state === 'map') this.goToMenu({ resumeable: this._runLive });
      else this._tryBomb();
    }
    if (pad.fire && this.state === 'hangar' && !prev.fire) this._hangarBuy();
    if (this.state === 'hangar') {
      if (pad.y > 0.55 && prev.y <= 0.55) this._hangarMove(-1);
      if (pad.y < -0.55 && prev.y >= -0.55) this._hangarMove(1);
    }
    if (pad.fire && this.state === 'title' && !this._hasRun && !prev.fire) this.startPlay();
    if (pad.fire && this.state === 'map' && !prev.fire) this._deployLevel();
    if (pad.fire && this.state === 'continue' && !prev.fire) this._acceptContinue();
    this._padPrev = { fire: pad.fire, bomb: pad.bomb, start: pad.start, y: pad.y };
  }
}
