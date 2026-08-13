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
import { createShip, EngineTrail } from './ship.js';
import { EntityField } from './entities.js';
import { AudioBus } from './audio.js';
import { STEP_MAX, SEQUENCE, starterLoadout, loadoutFromStep, costToNext, hudName, arsenal } from './weapons.js';
import { StageDirector, CHAPTERS, gradeRun, loadScores, saveScore } from './stage.js';

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
    this.view = localStorage.getItem('aether-view') || 'scroll';
    if (!['chase', 'cockpit', 'scroll'].includes(this.view)) this.view = 'scroll';
    this._hasRun = false;
    this.gateFx = 0;
    this._viewSnap = 1;
    this._camLook = new THREE.Vector3();
    this._camUp = new THREE.Vector3(0, 1, 0);
    this._chaseX = 0;
    this.stage = new StageDirector();
    this.hitStop = 0;
    this.kick = new THREE.Vector3();
    this.kickAmt = 0;
    this.bombs = 3;
    this.bombMax = 5;
    this.bombCd = 0;
    this._padPrev = { fire: false, bomb: false, start: false };
    this._setupRenderer();
    this._setupScene();
    this._setupPost();
    this._setupWorld();
    this._bindInput();
    this._bindUI();
    this.reset(false);
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
    const ship = createShip();
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
    window.addEventListener('mousemove', (e) => {
      this.input.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.input.mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    });
    window.addEventListener('mousedown', (e) => {
      if (performance.now() < this._mouseFromTouch) return;
      if (e.sourceCapabilities?.firesTouchEvents) return;
      this.input.firing = true;
    });
    window.addEventListener('mouseup', () => {
      if (performance.now() < this._mouseFromTouch) return;
      this.input.firing = false;
    });
    const touchOpts = { passive: false };
    window.addEventListener('touchstart', (e) => this._onTouchStart(e), touchOpts);
    window.addEventListener('touchmove', (e) => this._onTouchMove(e), touchOpts);
    window.addEventListener('touchend', (e) => this._onTouchEnd(e), touchOpts);
    window.addEventListener('touchcancel', (e) => this._onTouchEnd(e), touchOpts);
  }

  _isUiTouch(e) {
    const el = e.target;
    if (!(el instanceof Element)) return false;
    return !!el.closest('button, .screen, a, input, textarea, label');
  }

  _touchFromList(list, id) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].identifier === id) return list[i];
    }
    return null;
  }

  _onTouchStart(e) {
    if (this._isUiTouch(e)) return;
    if (this.state !== 'playing') return;
    if (this._touch.held) return;
    const t = e.changedTouches[0];
    if (!t) return;
    e.preventDefault();
    this._touch.id = t.identifier;
    this._touch.x = t.clientX;
    this._touch.y = t.clientY;
    this._touch.held = true;
    this._touch.steerX = 0;
    this._touch.steerY = 0;
    this.input.firing = true;
    this.slide.set(0, 0);
    this.input.mouse.x = (t.clientX / window.innerWidth) * 2 - 1;
    this.input.mouse.y = -((t.clientY / window.innerHeight) * 2 - 1);
    this.audio.resume?.();
  }

  _onTouchMove(e) {
    if (!this._touch.held) return;
    const t = this._touchFromList(e.changedTouches, this._touch.id)
      || this._touchFromList(e.touches, this._touch.id);
    if (!t) return;
    e.preventDefault();
    const dx = t.clientX - this._touch.x;
    const dy = t.clientY - this._touch.y;
    this._touch.x = t.clientX;
    this._touch.y = t.clientY;
    this._applyTouchDrag(dx, dy);
    this.input.mouse.x = (t.clientX / window.innerWidth) * 2 - 1;
    this.input.mouse.y = -((t.clientY / window.innerHeight) * 2 - 1);
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

  _onTouchEnd(e) {
    this._mouseFromTouch = performance.now() + 800;
    if (!this._touch.held) return;
    const ended = this._touchFromList(e.changedTouches, this._touch.id)
      || e.touches.length === 0;
    if (!ended) return;
    this._endTouch();
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
      threat: document.getElementById('threat'),
      health: document.getElementById('health-fill'),
      boost: document.getElementById('boost-fill'),
      riftFill: document.getElementById('rift-fill'),
      riftName: document.getElementById('rift-name'),
      riftWrap: document.querySelector('.rift-wrap'),
      toast: document.getElementById('toast'),
      title: document.getElementById('title-screen'),
      pause: document.getElementById('pause-screen'),
      dead: document.getElementById('dead-screen'),
      stats: document.getElementById('final-stats'),
      resultKicker: document.getElementById('result-kicker'),
      resultTitle: document.getElementById('result-title'),
      resultRank: document.getElementById('result-rank'),
      resultBoard: document.getElementById('result-board'),
      titleScores: document.getElementById('title-scores'),
      bombs: document.getElementById('bomb-pips'),
      lives: document.getElementById('life-pips'),
      continue: document.getElementById('continue-screen'),
      continueLeft: document.getElementById('continue-left'),
      bossMeter: document.getElementById('boss-meter'),
      bossFill: document.getElementById('boss-fill'),
      bossName: document.getElementById('boss-name'),
      startBtn: document.getElementById('start-btn'),
      resumeTitleBtn: document.getElementById('resume-title-btn'),
      viewBtns: [...document.querySelectorAll('[data-view]')],
    };
    this.ui.startBtn.addEventListener('click', () => this.startPlay());
    this.ui.resumeTitleBtn.addEventListener('click', () => this.resumeFromMenu());
    document.getElementById('resume-btn').addEventListener('click', () => this.resume());
    document.getElementById('menu-btn').addEventListener('click', () => this.goToMenu({ resumeable: true }));
    document.getElementById('retry-btn').addEventListener('click', () => this.startPlay());
    document.getElementById('continue-yes')?.addEventListener('click', () => this._acceptContinue());
    document.getElementById('continue-no')?.addEventListener('click', () => this._declineContinue());
    const menuButtons = [
      this.ui.startBtn,
      this.ui.resumeTitleBtn,
      document.getElementById('resume-btn'),
      document.getElementById('menu-btn'),
      document.getElementById('retry-btn'),
      document.getElementById('continue-yes'),
      document.getElementById('continue-no'),
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
    this.state = 'title';
    this.audio.setPaused(true);
    this.ui.pause.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
    this.ui.hud.classList.remove('visible');
    this.ui.title.classList.remove('hidden');
    this._syncTitleActions();
    this._renderScoreboard(this.ui.titleScores, loadScores());
    if (!resumeable) this.reset(true);
  }

  resumeFromMenu() {
    if (!this._hasRun) return;
    this._clearInput();
    this.state = 'playing';
    this.ui.title.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
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
      fov = 62;
      const focus = this.path.sample(this.traveled + this.holdY + 6);
      const focusFrame = createFrenet(focus.tangent);
      const chaseK = snap ? 14 : 2.45;
      this._chaseX += (this.offset.x - this._chaseX) * (1 - Math.exp(-dt * chaseK));
      camPos.copy(focus.pos)
        .addScaledVector(focus.tangent, -32)
        .addScaledVector(focusFrame.normal, 14)
        .addScaledVector(focusFrame.binormal, this._chaseX);
      camLook.copy(focus.pos)
        .addScaledVector(focus.tangent, 16)
        .addScaledVector(focusFrame.binormal, this._chaseX);
      camUp.copy(focusFrame.normal);
    }

    const posK = snap ? 16 : view === 'scroll' ? 12 : view === 'chase' ? 7.5 : 5;
    const lookK = snap ? 14 : view === 'scroll' ? 11 : view === 'chase' ? 6.5 : 5.5;
    this.camera.position.lerp(camPos, 1 - Math.exp(-dt * posK));
    this.camera.position.addScaledVector(this.kick, this.kickAmt);
    this._camLook.lerp(camLook, 1 - Math.exp(-dt * lookK));
    this._camUp.lerp(camUp, 1 - Math.exp(-dt * lookK));
    this.camera.up.copy(this._camUp);
    this.camera.lookAt(this._camLook);
    this.camera.fov = lerp(this.camera.fov, fov, 1 - Math.exp(-dt * 7));
    this.camera.updateProjectionMatrix();
    this._viewSnap = Math.max(0, this._viewSnap - dt * 2.4);
  }

  reset(layout = true) {
    this.traveled = 40;
    this.speed = 28;
    this.throttle = 0.55;
    this.boost = 1;
    this.health = 1;
    this.lives = 3;
    this.continues = 2;
    this.spawnIn = 0.65;
    this.rank = 0;
    this.step = 0;
    this.charge = 0;
    this.loadout = starterLoadout();
    this.gunCd = { primary: 0, missile: 0, titan: 0, mine: 0, nova: 0 };
    if (this.traces) {
      for (const mote of this.traces) mote.visible = false;
    }
    this.score = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this._lastCombo = 1;
    this.hurt = 0;
    this.invuln = 2.2;
    this.gateFx = 0;
    this.fireCd = 0;
    this.kills = 0;
    this._blockWarn = false;
    this.offset = new THREE.Vector2(0, 0);
    this.holdY = 8;
    this._chaseX = 0;
    this.steer = new THREE.Vector2(0, 0);
    this.slide = new THREE.Vector2(0, 0);
    this.best = Number(localStorage.getItem('aether-best') || 0);
    this._ribbonAt = -1;
    this.stage.reset();
    this.hitStop = 0;
    this.kick.set(0, 0, 0);
    this.kickAmt = 0;
    this.bombs = 3;
    this.bombCd = 0;
    this.maxCombo = 1;
    this.maxStep = 0;
    this.nearMisses = 0;
    this.bombsUsed = 0;
    this._chapterAt = -1;
    this._chapterId = 'default';
    this.muzzleFlash = 0;
    this.entities.reset();
    this.world.layoutFromPath(this.path, this.traveled, this._laneLimit());
    this.world.attachRibbon(this._localRibbon());
    this.world.setChapter('default');
    this.audio.setChapter('default');
    this._syncBombs();
    this._syncLives();
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
    this.reset(true);
    this._hasRun = true;
    this.state = 'playing';
    this.ui.title.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.continue?.classList.add('hidden');
    this.ui.hud.classList.add('visible');
    this._syncTitleActions();
    this._viewSnap = 1;
    this.audio.setPaused(false);
    this.clock.getDelta();
    this._releaseUiFocus();
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
    this.clock.getDelta();
    this._releaseUiFocus();
  }

  die() {
    this.audio.sting('death');
    this.entities.explode(this.ship.position.clone(), 0xff3bd4);
    this.lives -= 1;
    this._syncLives();
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
    this._syncLives();
  }

  _showContinue() {
    this.state = 'continue';
    this.audio.setPaused(true);
    this.audio.sting('continue');
    if (this.ui.continueLeft) {
      this.ui.continueLeft.textContent = `${this.continues} CREDIT${this.continues === 1 ? '' : 'S'} REMAIN`;
    }
    this.ui.continue?.classList.remove('hidden');
  }

  _acceptContinue() {
    if (this.state !== 'continue' || this.continues <= 0) return;
    this.continues -= 1;
    this.lives = 3;
    this.ui.continue?.classList.add('hidden');
    this.state = 'playing';
    this.audio.setPaused(false);
    this._respawn();
    this.clock.getDelta();
    this._releaseUiFocus();
  }

  _declineContinue() {
    if (this.ui.continue) this.ui.continue.classList.add('hidden');
    this._endRun(false);
  }

  win() {
    this._endRun(true);
  }

  _endRun(victory) {
    this.state = 'dead';
    this._hasRun = false;
    this._syncTitleActions();
    this.audio.setPaused(false);
    this.audio.explosion(true);
    this.best = Math.max(this.best, this.score);
    localStorage.setItem('aether-best', String(this.best));
    const rank = gradeRun({
      score: this.score,
      kills: this.kills,
      step: this.maxStep || this.step,
      maxCombo: this.maxCombo,
      victory,
      nearMisses: this.nearMisses,
      bombsUsed: this.bombsUsed,
    });
    const board = saveScore({
      score: this.score,
      rank,
      kills: this.kills,
      depth: Math.floor(this.traveled / 10),
      victory,
      at: Date.now(),
    });
    this.ui.hud.classList.remove('visible');
    this.ui.continue?.classList.add('hidden');
    this.ui.dead.classList.remove('hidden');
    if (this.ui.resultKicker) this.ui.resultKicker.textContent = victory ? 'RIFT CLEARED' : 'SIGNAL LOST';
    if (this.ui.resultTitle) this.ui.resultTitle.textContent = victory ? 'SENTINEL FALLS' : 'HULL BREACH';
    if (this.ui.resultRank) this.ui.resultRank.textContent = rank;
    this.ui.stats.textContent = `SCORE ${this.score}   BEST ${this.best}   KILLS ${this.kills}   ARSENAL ${this.maxStep}/${STEP_MAX}   BOMBS ${this.bombsUsed}`;
    this._renderScoreboard(this.ui.resultBoard, board, this.score);
  }

  toast(text) {
    this.ui.toast.textContent = text;
    this.ui.toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => this.ui.toast.classList.remove('show'), 1200);
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  loop() {
    requestAnimationFrame(this.loop);
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this._pollPad();
    this.audio.tick();
    if (this.state === 'paused' || this.state === 'dead' || this.state === 'continue' || (this.state === 'title' && this._hasRun)) {
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
    this.traveled += this.speed * dt;
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
      this.muzzle.scale.setScalar(0.7 + this.muzzleFlash * 1.6);
    }
    if (this.muzzleSpike) {
      this.muzzleSpike.material.opacity = this.muzzleFlash * 0.7;
      this.muzzleSpike.scale.set(1, 1, 0.6 + this.muzzleFlash * 1.8);
    }
    for (const l of this.shipLights) l.intensity = 3.2 + boostAmt * 3;
    this.trail.push(this.ship.position.clone().addScaledVector(shipSample.tangent, -1.4), boostAmt);
    this.audio.setBoost(boostAmt);

    this.world.update(dt, this.camera, this.traveled);
    this.world.recycleCrystals(this.path, this.traveled, this._laneLimit());

    const difficulty = 1 + this.traveled / 900;
    this.entities.laneLimit = this._laneLimit();
    this.entities.spawnAhead(this.path, this.traveled);
    this._runStage();
    this.entities.recycleBehind(this.traveled, this.holdY);
    this.entities.update(
      dt,
      this.path,
      this.traveled,
      this.ship.position,
      this.offset,
      difficulty,
      this.holdY,
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
    if (this.comboTimer <= 0) this.combo = 1;
    for (const k of Object.keys(this.gunCd)) this.gunCd[k] = Math.max(0, this.gunCd[k] - dt);

    if (this.state === 'playing') {
      const firing = this.input.firing || this.input.keys.has('Space') || pad.fire;
      if (firing) {
        const arms = arsenal(this.loadout, this.clock.elapsedTime);
        const muzzle = this.traveled + this.holdY + 6.2;
        let voiced = false;
        for (const group of ['primary', 'missile', 'titan', 'mine', 'nova']) {
          const bank = arms[group];
          if (!bank.shots.length || this.gunCd[group] > 0) continue;
          let any = false;
          for (const shot of bank.shots) {
            if (this.entities.fireRail(this.path, muzzle, this.offset.x + shot.x, 1, shot)) any = true;
          }
          if (any) {
            this.gunCd[group] = bank.cd;
            if (group === 'primary' || group === 'titan') this.muzzleFlash = 1;
            if (!voiced) {
              this.audio.guns(group, this.loadout);
              voiced = group === 'primary';
            } else if (group === 'titan' || group === 'missile') {
              this.audio.guns(group, this.loadout);
            }
          }
        }
      }

      const orbs = this.entities.collectOrbs(this.ship.position, 2.2);
      for (const orb of orbs) {
        this.score += orb.value;
        this.audio.collect();
        this.health = Math.min(1, this.health + 0.05);
      }

      const motes = this.entities.collectMotes(this.ship.position, 2.4);
      if (motes.length) this._gainMotes(motes.length);

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
          if (k.type === 'midboss') this.toast(k.role === 'warden' ? 'WARDEN DOWN' : 'QUEEN DOWN');
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
          this.stage.cleared = true;
          this.toast('SENTINEL DOWN');
          this.win();
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
                });
                if (en.role === 'finale') {
                  this.stage.cleared = true;
                  this.win();
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
    const flare = sunInView ? 0.85 : 0;
    this.fx.uniforms.uFlare.value = lerp(this.fx.uniforms.uFlare.value, flare, 1 - Math.exp(-dt * 8));
    this.fx.uniforms.uCockpit.value = 0;
    this.fx.uniforms.uKick.value = this.kickAmt;
    const bloomStr = 0.48 + this.gateFx * 0.28;
    const bloomThr = 0.42;
    const bloomRad = 0.5 + this.gateFx * 0.12;
    this.bloom.strength = lerp(this.bloom.strength, bloomStr, 1 - Math.exp(-dt * 6));
    this.bloom.threshold = lerp(this.bloom.threshold, bloomThr, 1 - Math.exp(-dt * 6));
    this.bloom.radius = lerp(this.bloom.radius, bloomRad, 1 - Math.exp(-dt * 6));

    this._syncHud();
  }

  _dropLoot(src) {
    const n = src?.drop ?? 0;
    if (n > 0) {
      const dist = src.pathDist ?? (this.traveled + this.holdY + 6);
      const lane = src.laneX ?? this.offset.x;
      this.entities.spawnMote(this.path, dist, lane, n);
    }
    if (src?.bombDrop) this._gainBomb(src.bombDrop);
  }

  _gainMotes(n) {
    if (n <= 0) return;
    this.audio.mote(n > 1);
    if (this.step >= STEP_MAX) {
      this._combatScore(36 * n);
      return;
    }
    this.charge += n;
    let toast = null;
    while (this.step < STEP_MAX) {
      const need = costToNext(this.step);
      if (this.charge < need) break;
      this.charge -= need;
      toast = SEQUENCE[this.step].toast || toast;
      this.step += 1;
    }
    this.loadout = loadoutFromStep(this.step);
    this.rank = this.step;
    this.maxStep = Math.max(this.maxStep || 0, this.step);
    if (toast) {
      this.audio.powerup();
      this.toast(toast);
    }
  }

  _shedResonance() {
    if (this.step <= 0 && this.charge <= 0) return;
    const shed = Math.min(6, 2 + Math.floor(this.step / 14));
    this.step = Math.max(0, this.step - shed);
    this.charge = 0;
    this.loadout = loadoutFromStep(this.step);
    this.rank = this.step;
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
    this.score += Math.floor(n * this.combo);
    this.combo = Math.min(8, this.combo + 0.35);
    this.maxCombo = Math.max(this.maxCombo, this.combo);
    this.comboTimer = 3.2;
  }

  _score(n) {
    this._combatScore(n);
  }

  _damage(amt) {
    this.health -= amt;
    this.hurt = 1;
    this.invuln = 0.7;
    this.combo = 1;
    this.audio.hit();
    this._punch(0.04, 1.15);
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
    if (this.combo > (this._lastCombo || 1) + 0.02) {
      this.ui.combo.classList.remove('combo-pop');
      void this.ui.combo.offsetWidth;
      this.ui.combo.classList.add('combo-pop');
    }
    this._lastCombo = this.combo;
    this.ui.depth.textContent = `${(this.traveled / 10).toFixed(0)} km`;
    if (this.ui.threat) this.ui.threat.textContent = String(this.entities.hunterCount());
    this.ui.health.style.transform = `scaleX(${clamp(this.health, 0, 1)})`;
    this.ui.boost.style.transform = `scaleX(${clamp(this.boost, 0, 1)})`;
    if (this.ui.riftName) this.ui.riftName.textContent = hudName(this.loadout);
    if (this.ui.riftFill) {
      const fill = this.step >= STEP_MAX ? 1 : clamp(this.step / STEP_MAX, 0, 1);
      this.ui.riftFill.style.transform = `scaleX(${Math.max(0.03, fill)})`;
      this.ui.riftWrap?.classList.toggle('rift-max', this.step >= STEP_MAX);
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
    if (!boss) {
      el.classList.remove('show');
      return;
    }
    el.classList.add('show');
    const names = { queen: 'WEAVER QUEEN', warden: 'WARDEN', finale: 'SENTINEL' };
    if (this.ui.bossName) this.ui.bossName.textContent = names[boss.role] || 'HUNTER';
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

  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.bloom.setSize(w, h);
    this.fx.uniforms.uResolution.value.set(w, h);
  }

  _runStage() {
    for (const ch of CHAPTERS) {
      if (this.traveled >= ch.at && this._chapterAt < ch.at) {
        this._chapterAt = ch.at;
        this.toast(ch.toast);
        const id = ch.at >= 1320 ? 'finale' : ch.at >= 820 ? 'warden' : ch.at >= 380 ? 'queen' : 'default';
        this._setChapter(id, ch.at >= 380 ? 'boss' : 'chapter');
      }
    }
    this._setChapter(
      this.traveled >= 1320 ? 'finale' : this.traveled >= 820 ? 'warden' : this.traveled >= 380 ? 'queen' : 'default',
    );
    while (this.stage.peek() && this.stage.peek().at <= this.traveled) {
      const ev = this.stage.consume();
      if (ev.kind === 'squad') {
        this.entities.spawnSquad(this.path, this.traveled, ev.form, ev.role, ev.n, ev.ahead);
      } else if (ev.kind === 'gate') {
        this.entities.spawnGateAt(this.path, this.traveled);
      } else if (ev.kind === 'orbs') {
        this.entities.spawnOrbsAt(this.path, this.traveled, 5);
      } else if (ev.kind === 'blockers') {
        this.entities.spawnBlockersAt(this.path, this.traveled, ev.n || 2);
      } else if (ev.kind === 'midboss') {
        this.entities.spawnNamed(this.path, this.traveled, ev.id, 96, this.step);
        this.stage.finaleAlive = false;
      } else if (ev.kind === 'finale') {
        this.entities.spawnFinale(this.path, this.traveled, 96, this.step);
        this.stage.finaleAlive = true;
      }
    }
  }

  _setChapter(id, sting) {
    if (!id) return;
    if (this._chapterId !== id) {
      this._chapterId = id;
      this.world.setChapter(id);
      this.audio.setChapter(id);
    }
    if (sting) this.audio.sting(sting);
  }

  _syncLives() {
    const el = this.ui?.lives;
    if (!el) return;
    el.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const pip = document.createElement('div');
      pip.className = 'life-pip' + (i < this.lives ? ' lit' : '');
      el.appendChild(pip);
    }
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
    this.audio.bomb();
    this._punch(0.08, 1.6);
    const result = this.entities.bombSweep(this.traveled, this.holdY, 16);
    for (const k of result.killed) {
      this.kills += 1;
      this._combatScore(k.type === 'boss' ? 3200 : k.type === 'midboss' ? 1400 : 180);
      this._dropLoot(k);
      if (k.type === 'boss') {
        this.stage.cleared = true;
        this.toast('SENTINEL DOWN');
        this.win();
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
      else if (this.state === 'title') {
        if (this._hasRun) this.resumeFromMenu();
        else this.startPlay();
      } else if (this.state === 'continue') this._acceptContinue();
      else if (this.state === 'dead') this.startPlay();
    }
    if (pad.bomb && !prev.bomb) {
      if (this.state === 'continue') this._declineContinue();
      else this._tryBomb();
    }
    if (pad.fire && this.state === 'title' && !this._hasRun && !prev.fire) this.startPlay();
    if (pad.fire && this.state === 'continue' && !prev.fire) this._acceptContinue();
    this._padPrev = { fire: pad.fire, bomb: pad.bomb, start: pad.start };
  }
}
