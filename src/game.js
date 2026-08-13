import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { cinematicShader } from './shaders.js';
import { InfinitePath, createFrenet, clamp, lerp } from './math.js';
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
    this.view = localStorage.getItem('aether-view') || 'chase';
    if (!['chase', 'cockpit', 'scroll'].includes(this.view)) this.view = 'chase';
    this._viewSnap = 1;
    this._camLook = new THREE.Vector3();
    this._camUp = new THREE.Vector3(0, 1, 0);
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
    this._lookDummy = new THREE.Object3D();
    this.scene.add(this._lookDummy);
    this.trail = new EngineTrail(this.scene);
  }

  _bindInput() {
    window.addEventListener('keydown', (e) => {
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
      viewBtns: [...document.querySelectorAll('[data-view]')],
    };
    document.getElementById('start-btn').addEventListener('click', () => this.startPlay());
    document.getElementById('resume-btn').addEventListener('click', () => this.resume());
    document.getElementById('retry-btn').addEventListener('click', () => this.startPlay());
    for (const btn of this.ui.viewBtns) {
      btn.addEventListener('click', () => this.setView(btn.dataset.view));
      btn.addEventListener('mousedown', (e) => e.stopPropagation());
      btn.addEventListener('pointerdown', (e) => e.stopPropagation());
    }
    this._syncViewHud();
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

  _applyCamera(dt, sample, frame) {
    const view = this._activeView();
    this.ship.visible = view !== 'cockpit';

    const camPos = new THREE.Vector3();
    const camLook = new THREE.Vector3();
    const camUp = new THREE.Vector3();
    let fov = 62;

    if (view === 'cockpit') {
      fov = 78;
      camPos.copy(this.ship.position)
        .addScaledVector(sample.tangent, 1.85)
        .addScaledVector(frame.normal, 0.72);
      camLook.copy(this.ship.position)
        .addScaledVector(sample.tangent, 30)
        .addScaledVector(frame.binormal, this.steer.x * 11)
        .addScaledVector(frame.normal, this.steer.y * 7);
      camUp.copy(frame.normal);
    } else if (view === 'scroll') {
      fov = 54;
      camPos.copy(this.ship.position)
        .addScaledVector(frame.normal, 38)
        .addScaledVector(sample.tangent, -8);
      camLook.copy(this.ship.position)
        .addScaledVector(sample.tangent, 24)
        .addScaledVector(frame.normal, 1.5);
      camUp.copy(sample.tangent);
    } else {
      fov = 62;
      camPos.copy(this.ship.position)
        .addScaledVector(sample.tangent, -24)
        .addScaledVector(frame.normal, 10.5)
        .addScaledVector(frame.binormal, this.offset.x * 0.12);
      camLook.copy(this.ship.position)
        .addScaledVector(sample.tangent, 10)
        .addScaledVector(frame.binormal, this.steer.x * 2)
        .addScaledVector(frame.normal, this.steer.y * 1.2);
      camUp.copy(frame.normal);
    }

    const snap = this._viewSnap > 0.02;
    const posK = snap ? 13 : 4.2;
    const lookK = snap ? 11 : 5;
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
    this.fireCd = 0;
    this.kills = 0;
    this._blockWarn = false;
    this.offset = new THREE.Vector2(0, 0);
    this.steer = new THREE.Vector2(0, 0);
    this.slide = new THREE.Vector2(0, 0);
    this.best = Number(localStorage.getItem('aether-best') || 0);
    this._ribbonAt = -1;
    this.entities.reset();
    this.world.layoutFromPath(this.path, this.traveled);
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
    this.state = 'playing';
    this.ui.title.classList.add('hidden');
    this.ui.dead.classList.add('hidden');
    this.ui.pause.classList.add('hidden');
    this.ui.hud.classList.add('visible');
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
    if (this.state === 'paused') {
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
      const throttleUp = this.input.keys.has('KeyW') || this.input.keys.has('ArrowUp');
      const throttleDown = this.input.keys.has('KeyS') || this.input.keys.has('ArrowDown');
      if (throttleUp) this.throttle = clamp(this.throttle + dt * 0.85, 0.08, 1);
      else if (throttleDown) this.throttle = clamp(this.throttle - dt * 1.05, 0.08, 1);
      else this.throttle = lerp(this.throttle, 0.5, 1 - Math.exp(-dt * 0.7));

      if (boosting && this.boost > 0.05) {
        wantBoost = 1;
        this.boost = Math.max(0, this.boost - dt * 0.32);
      } else {
        this.boost = Math.min(1, this.boost + dt * 0.1);
      }
    }

    const cruise = cinematic
      ? 16
      : 10 + this.throttle * 46 + wantBoost * 30 + Math.min(this.traveled / 2400, 10);
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
      this.steer.x = clamp(this.input.mouse.x * 1.25 + keyX * 0.55, -1, 1);
      this.steer.y = clamp(this.input.mouse.y * 1.15, -1, 1);
      this.slide.x = lerp(this.slide.x, keyX * 6.5, 1 - Math.exp(-dt * 4));
    } else {
      this.steer.x = Math.sin(this.clock.elapsedTime * 0.35) * 0.45;
      this.steer.y = Math.cos(this.clock.elapsedTime * 0.22) * 0.28;
      this.slide.x = 0;
    }

    const targetX = this.steer.x * 18 + this.slide.x;
    const targetY = this.steer.y * 11;
    this.offset.x = lerp(this.offset.x, targetX, 1 - Math.exp(-dt * 3.2));
    this.offset.y = lerp(this.offset.y, targetY, 1 - Math.exp(-dt * 3.2));
    const span = Math.hypot(this.offset.x, this.offset.y);
    if (span > 22) {
      this.offset.multiplyScalar(22 / span);
    }

    this.ship.position.copy(sample.pos)
      .addScaledVector(frame.binormal, this.offset.x)
      .addScaledVector(frame.normal, this.offset.y + 0.2);

    const look = this.ship.position.clone()
      .addScaledVector(sample.tangent, 20)
      .addScaledVector(frame.binormal, this.steer.x * 8)
      .addScaledVector(frame.normal, this.steer.y * 5);
    const tmp = this._lookDummy;
    tmp.position.copy(this.ship.position);
    tmp.up.copy(frame.normal);
    tmp.lookAt(look);
    const bank = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), -this.steer.x * 0.35);
    tmp.quaternion.multiply(bank);
    this.ship.quaternion.slerp(tmp.quaternion, 1 - Math.exp(-dt * 7));

    this._applyCamera(dt, sample, frame);

    const boostAmt = wantBoost;
    for (const ex of this.exhausts) {
      const pulse = 1 + boostAmt * 0.8;
      ex.scale.setScalar(pulse);
      ex.material.color.set(boostAmt > 0.2 ? 0xffd166 : 0x9be7ff);
    }
    for (const l of this.shipLights) l.intensity = 3.2 + boostAmt * 3;
    this.trail.push(this.ship.position.clone().addScaledVector(sample.tangent, -1.4), boostAmt);
    this.audio.setBoost(boostAmt);

    this.world.update(dt, this.camera, this.traveled);
    this.world.recycleCrystals(this.path, this.traveled);

    const difficulty = 1 + this.traveled / 900;
    this.entities.spawnAhead(this.path, this.traveled, difficulty);
    this.entities.recycleBehind(this.traveled);
    this.entities.update(dt, this.path, this.traveled, this.ship.position, this.offset, difficulty);

    const extras = [
      { pos: this.shipLights[0].getWorldPosition(new THREE.Vector3()), color: new THREE.Color('#5ce1ff'), intensity: 12 + boostAmt * 8 },
      { pos: this.shipLights[1].getWorldPosition(new THREE.Vector3()), color: new THREE.Color('#5ce1ff'), intensity: 12 + boostAmt * 8 },
      { pos: this.world.sun.position, color: new THREE.Color('#ffe29a'), intensity: 22 },
    ];
    this.world.setLights(this.entities.nearestLights(this.ship.position, extras));

    this.hurt = Math.max(0, this.hurt - dt * 1.8);
    this.invuln = Math.max(0, this.invuln - dt);
    this.comboTimer -= dt;
    if (this.comboTimer <= 0) this.combo = 1;
    this.fireCd = Math.max(0, this.fireCd - dt);

    if (this.state === 'playing') {
      const firing = this.input.firing || this.input.keys.has('Space');
      if (firing && this.fireCd <= 0) {
        const origin = this.ship.position.clone().addScaledVector(sample.tangent, 5.4);
        const dir = sample.tangent.clone()
          .addScaledVector(frame.binormal, this.steer.x * 0.72)
          .addScaledVector(frame.normal, this.steer.y * 0.5)
          .normalize();
        const left = origin.clone().addScaledVector(frame.binormal, -1.8);
        const right = origin.clone().addScaledVector(frame.binormal, 1.8);
        const shotA = this.entities.fire(left, dir);
        const shotB = this.entities.fire(right, dir);
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
          this._combatScore(k.role === 'hunter' ? 280 : 180);
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
    const sunNdc = this.world.sun.position.clone().project(this.camera);
    this.fx.uniforms.uSunPos.value.set(sunNdc.x * 0.5 + 0.5, sunNdc.y * 0.5 + 0.5);

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
