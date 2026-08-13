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
    this.audio = new AudioBus();
    this.view = localStorage.getItem('aether-view') || 'scroll';
    if (!['chase', 'cockpit', 'scroll'].includes(this.view)) this.view = 'scroll';
    this._hasRun = false;
    this.gateFx = 0;
    this._viewSnap = 1;
    this._camLook = new THREE.Vector3();
    this._camUp = new THREE.Vector3(0, 1, 0);
    this._chaseX = 0;
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
    this.exhausts = ship.exhausts;
    this.shipLights = ship.lights;
    this.shipCore = ship.core;
    this.scene.add(this.ship);
    this.trail = new EngineTrail(this.scene);
  }

  _bindInput() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        e.preventDefault();
        if (!e.repeat) this._onEscape();
        return;
      }
      this.input.keys.add(e.code);
      if (e.code === 'KeyP' && this.state === 'playing') this.pause();
      if (e.code === 'Space') e.preventDefault();
      if (e.code === 'Digit1' || e.code === 'Numpad1') this.setView('chase');
      if (e.code === 'Digit2' || e.code === 'Numpad2') this.setView('cockpit');
      if (e.code === 'Digit3' || e.code === 'Numpad3') this.setView('scroll');
      if (e.code === 'KeyV') this.cycleView();
    });
    window.addEventListener('keyup', (e) => this.input.keys.delete(e.code));
    window.addEventListener('mousemove', (e) => {
      this.input.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.input.mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    });
    window.addEventListener('mousedown', () => {
      this.input.firing = true;
    });
    window.addEventListener('mouseup', () => {
      this.input.firing = false;
    });
    window.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      if (!t) return;
      this.input.mouse.x = (t.clientX / window.innerWidth) * 2 - 1;
      this.input.mouse.y = -((t.clientY / window.innerHeight) * 2 - 1);
    }, { passive: true });
    window.addEventListener('touchstart', () => {
      this.input.firing = true;
    }, { passive: true });
    window.addEventListener('touchend', () => {
      this.input.firing = false;
    });
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
      toast: document.getElementById('toast'),
      title: document.getElementById('title-screen'),
      pause: document.getElementById('pause-screen'),
      dead: document.getElementById('dead-screen'),
      stats: document.getElementById('final-stats'),
      startBtn: document.getElementById('start-btn'),
      resumeTitleBtn: document.getElementById('resume-title-btn'),
      viewBtns: [...document.querySelectorAll('[data-view]')],
    };
    this.ui.startBtn.addEventListener('click', () => this.startPlay());
    this.ui.resumeTitleBtn.addEventListener('click', () => this.resumeFromMenu());
    document.getElementById('resume-btn').addEventListener('click', () => this.resume());
    document.getElementById('menu-btn').addEventListener('click', () => this.goToMenu({ resumeable: true }));
    document.getElementById('retry-btn').addEventListener('click', () => this.startPlay());
    const menuButtons = [
      this.ui.startBtn,
      this.ui.resumeTitleBtn,
      document.getElementById('resume-btn'),
      document.getElementById('menu-btn'),
      document.getElementById('retry-btn'),
    ];
    for (const btn of menuButtons) {
      btn.addEventListener('mousedown', (e) => e.stopPropagation());
      btn.addEventListener('pointerdown', (e) => e.stopPropagation());
    }
    for (const btn of this.ui.viewBtns) {
      btn.addEventListener('click', () => this.setView(btn.dataset.view));
      btn.addEventListener('mousedown', (e) => e.stopPropagation());
      btn.addEventListener('pointerdown', (e) => e.stopPropagation());
    }
    this._syncViewHud();
    this._syncTitleActions();
  }

  _syncTitleActions() {
    if (!this.ui?.resumeTitleBtn || !this.ui?.startBtn) return;
    this.ui.resumeTitleBtn.hidden = !this._hasRun;
    this.ui.startBtn.textContent = this._hasRun ? 'NEW RUN' : 'ENGAGE';
  }

  _clearInput() {
    this.input.keys.clear();
    this.input.firing = false;
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
  }

  goToMenu({ resumeable = false } = {}) {
    this._clearInput();
    this._hasRun = resumeable;
    this.state = 'title';
    this.ui.pause.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.hud.classList.remove('visible');
    this.ui.title.classList.remove('hidden');
    this._syncTitleActions();
    if (!resumeable) this.reset(true);
  }

  resumeFromMenu() {
    if (!this._hasRun) return;
    this._clearInput();
    this.state = 'playing';
    this.ui.title.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.hud.classList.add('visible');
    this.clock.getDelta();
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
      const focus = this.path.sample(this.traveled + this.holdY * 0.25 + 8);
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
    this.score = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this.hurt = 0;
    this.invuln = 0;
    this.gateFx = 0;
    this.fireCd = 0;
    this.kills = 0;
    this._blockWarn = false;
    this.offset = new THREE.Vector2(0, 0);
    this.holdY = 0;
    this._chaseX = 0;
    this.steer = new THREE.Vector2(0, 0);
    this.slide = new THREE.Vector2(0, 0);
    this.best = Number(localStorage.getItem('aether-best') || 0);
    this._ribbonAt = -1;
    this.entities.reset();
    this.world.layoutFromPath(this.path, this.traveled, this._laneLimit());
    this.world.attachRibbon(this._localRibbon());
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
    this.ui.hud.classList.add('visible');
    this._syncTitleActions();
    this._viewSnap = 1;
    this.toast('HUNTERS INBOUND');
    this.clock.getDelta();
  }

  pause() {
    this.state = 'paused';
    this.ui.pause.classList.remove('hidden');
  }

  resume() {
    this.state = 'playing';
    this.ui.pause.classList.add('hidden');
    this.clock.getDelta();
  }

  die() {
    this.state = 'dead';
    this._hasRun = false;
    this._syncTitleActions();
    this.audio.explosion();
    this.entities.explode(this.ship.position.clone(), 0xff3bd4);
    this.best = Math.max(this.best, this.score);
    localStorage.setItem('aether-best', String(this.best));
    this.ui.hud.classList.remove('visible');
    this.ui.dead.classList.remove('hidden');
    this.ui.stats.textContent = `SCORE ${this.score}   BEST ${this.best}   KILLS ${this.kills}   DEPTH ${(this.traveled / 10).toFixed(0)} km`;
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
    if (this.state === 'paused' || (this.state === 'title' && this._hasRun)) {
      this._render();
      return;
    }
    this.update(dt);
    this._render();
  }

  update(dt) {
    const cinematic = this.state !== 'playing';
    const boosting = this.state === 'playing'
      && (this.input.keys.has('ShiftLeft') || this.input.keys.has('ShiftRight'));

    let wantBoost = 0;
    if (this.state === 'playing') {
      if (boosting && this.boost > 0.05) {
        wantBoost = 1;
        this.boost = Math.max(0, this.boost - dt * 0.32);
      } else {
        this.boost = Math.min(1, this.boost + dt * 0.1);
      }
    }

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
      const keyX = (this.input.keys.has('KeyD') || this.input.keys.has('ArrowRight') ? 1 : 0)
        - (this.input.keys.has('KeyA') || this.input.keys.has('ArrowLeft') ? 1 : 0);
      const keyY = (this.input.keys.has('KeyW') || this.input.keys.has('ArrowUp') ? 1 : 0)
        - (this.input.keys.has('KeyS') || this.input.keys.has('ArrowDown') ? 1 : 0);
      const move = 78;
      const lane = this._laneLimit();
      this.offset.x = clamp(this.offset.x + keyX * move * dt, -lane, lane);
      this.holdY = clamp(this.holdY + keyY * move * dt, 0, 26);
      this.offset.y = 0;
      this.steer.set(keyX, keyY);
    } else {
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

    this._applyCamera(dt, sample, frame, shipSample, shipFrame);

    const boostAmt = wantBoost;
    for (const ex of this.exhausts) {
      const pulse = 1 + boostAmt * 0.8;
      ex.scale.setScalar(pulse);
      ex.material.color.set(boostAmt > 0.2 ? 0xffd166 : 0x9be7ff);
    }
    for (const l of this.shipLights) l.intensity = 3.2 + boostAmt * 3;
    this.trail.push(this.ship.position.clone().addScaledVector(shipSample.tangent, -1.4), boostAmt);
    this.audio.setBoost(boostAmt);

    this.world.update(dt, this.camera, this.traveled);
    this.world.recycleCrystals(this.path, this.traveled, this._laneLimit());

    const difficulty = 1 + this.traveled / 900;
    this.entities.laneLimit = this._laneLimit();
    this.entities.spawnAhead(this.path, this.traveled, difficulty);
    this.entities.recycleBehind(this.traveled);
    this.entities.update(dt, this.path, this.traveled, this.ship.position, this.offset, difficulty);

    const extras = [
      { pos: this.world.sun.position, color: new THREE.Color('#ffe29a'), intensity: 22 },
    ];
    if (this._activeView() !== 'cockpit') {
      extras.unshift(
        { pos: this.shipLights[0].getWorldPosition(new THREE.Vector3()), color: new THREE.Color('#5ce1ff'), intensity: 12 + boostAmt * 8 },
        { pos: this.shipLights[1].getWorldPosition(new THREE.Vector3()), color: new THREE.Color('#5ce1ff'), intensity: 12 + boostAmt * 8 },
      );
    }
    this.world.setLights(this.entities.nearestLights(this.ship.position, extras));

    this.hurt = Math.max(0, this.hurt - dt * 1.8);
    this.invuln = Math.max(0, this.invuln - dt);
    this.gateFx = Math.max(0, this.gateFx - dt * 1.05);
    this.comboTimer -= dt;
    if (this.comboTimer <= 0) this.combo = 1;
    this.fireCd = Math.max(0, this.fireCd - dt);

    if (this.state === 'playing') {
      const firing = this.input.firing || this.input.keys.has('Space');
      if (firing && this.fireCd <= 0) {
        const muzzle = this.traveled + this.holdY + 6.2;
        const shotA = this.entities.fireRail(this.path, muzzle, this.offset.x - 1.8, 1);
        const shotB = this.entities.fireRail(this.path, muzzle, this.offset.x + 1.8, 1);
        if (shotA || shotB) {
          this.audio.laser();
          this.fireCd = 0.09;
        }
      }

      const orbs = this.entities.collectOrbs(this.ship.position, 2.2);
      for (const orb of orbs) {
        this.score += orb.value;
        this.audio.collect();
        this.health = Math.min(1, this.health + 0.05);
      }

      const gateHits = this.entities.collectGates(this.ship.position);
      for (const hit of gateHits) {
        if (hit.blocked) {
          if (this.invuln <= 0) {
            this._damage(0.34);
            this.toast('SHIELD LOCK');
          }
        } else {
          this._combatScore(500);
          this.boost = 1;
          this.gateFx = 1;
          this.audio.gate();
          this.toast('GATE BREAK');
        }
      }

      const combat = this.entities.bulletHits();
      for (const k of combat) {
        if (k.type === 'ping') continue;
        this.entities.explode(k.pos, k.type === 'blocker' ? 0xff9a3a : 0x5ce1ff);
        this.audio.explosion();
        if (k.type === 'enemy') {
          this.kills += 1;
          this._combatScore(220);
          this.boost = Math.min(1, this.boost + 0.18);
        } else if (k.type === 'blocker') {
          this._combatScore(160);
          this.toast('PATH CLEAR');
        } else if (k.type === 'unlock') {
          this._combatScore(220);
          this.audio.gate();
          this.toast('LOCK SHATTERED');
        } else if (k.type === 'boss') {
          this.kills += 1;
          this._combatScore(3200);
          this.toast('SENTINEL DOWN');
        }
      }

      for (const _ of this.entities.nearMisses(this.ship.position)) {
        this._combatScore(90);
        this.toast('NEAR MISS');
      }

      if (this.entities.blockerAhead(this.traveled)) {
        if (!this._blockWarn) {
          this._blockWarn = true;
          this.toast('RIFT BLOCKED — SHOOT');
        }
      } else {
        this._blockWarn = false;
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
          this._damage(0.42);
        } else if (rammed.length) {
          for (const en of rammed) {
            if (en.hp !== undefined && en.mesh) {
              en.alive = false;
              en.mesh.visible = false;
              this.entities.explode(en.mesh.position.clone(), 0xff2458);
              this.kills += 1;
            }
          }
          this.audio.explosion();
          this._damage(0.3);
        } else if (shotHit) this._damage(0.16);
        else if (crystalHit) this._damage(0.12);
      }
    }

    this.fx.uniforms.uTime.value = this.clock.elapsedTime;
    this.fx.uniforms.uBoost.value = boostAmt;
    this.fx.uniforms.uHurt.value = this.hurt;
    this.fx.uniforms.uGate.value = this.gateFx;
    const view = this._activeView();
    const sunNdc = this.world.sun.position.clone().project(this.camera);
    this.fx.uniforms.uSunPos.value.set(sunNdc.x * 0.5 + 0.5, sunNdc.y * 0.5 + 0.5);
    const sunInView = sunNdc.z < 1
      && sunNdc.x > -1.2 && sunNdc.x < 1.2
      && sunNdc.y > -1.2 && sunNdc.y < 1.2;
    const flare = sunInView ? (view === 'cockpit' ? 0 : 0.85) : 0;
    this.fx.uniforms.uFlare.value = lerp(this.fx.uniforms.uFlare.value, flare, 1 - Math.exp(-dt * 8));
    this.fx.uniforms.uCockpit.value = lerp(this.fx.uniforms.uCockpit.value, view === 'cockpit' ? 1 : 0, 1 - Math.exp(-dt * 8));
    const bloomStr = (view === 'cockpit' ? 0.08 : 0.48) + this.gateFx * 0.7;
    const bloomThr = view === 'cockpit' ? 0.72 : 0.42;
    const bloomRad = (view === 'cockpit' ? 0.18 : 0.5) + this.gateFx * 0.35;
    this.bloom.strength = lerp(this.bloom.strength, bloomStr, 1 - Math.exp(-dt * 6));
    this.bloom.threshold = lerp(this.bloom.threshold, bloomThr, 1 - Math.exp(-dt * 6));
    this.bloom.radius = lerp(this.bloom.radius, bloomRad, 1 - Math.exp(-dt * 6));

    this._syncHud();
  }

  _combatScore(n) {
    this.score += Math.floor(n * this.combo);
    this.combo = Math.min(8, this.combo + 0.35);
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
    if (this.health <= 0) this.die();
  }

  _syncHud() {
    if (this.state !== 'playing') return;
    this.ui.score.textContent = this.score.toLocaleString();
    this.ui.combo.textContent = `×${this.combo.toFixed(1)}`;
    this.ui.depth.textContent = `${(this.traveled / 10).toFixed(0)} km`;
    if (this.ui.threat) this.ui.threat.textContent = String(this.entities.hunterCount());
    this.ui.health.style.transform = `scaleX(${clamp(this.health, 0, 1)})`;
    this.ui.boost.style.transform = `scaleX(${clamp(this.boost, 0, 1)})`;
  }

  _render() {
    this.composer.render();
  }

  _laneLimit() {
    const height = 168;
    const fov = 38 * Math.PI / 180;
    const halfWidth = height * Math.tan(fov / 2) * this.camera.aspect;
    return Math.max(22, halfWidth - 6);
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
}
