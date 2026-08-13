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
    this.camera = new THREE.PerspectiveCamera(68, window.innerWidth / window.innerHeight, 0.1, 1400);
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
  }

  _setupPost() {
    const size = new THREE.Vector2(window.innerWidth, window.innerHeight);
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(size, 0.85, 0.72, 0.18);
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
    this.trail = new EngineTrail(this.scene);
  }

  _bindInput() {
    window.addEventListener('keydown', (e) => {
      this.input.keys.add(e.code);
      if (e.code === 'KeyP' && this.state === 'playing') this.pause();
      if (e.code === 'Space') e.preventDefault();
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
      health: document.getElementById('health-fill'),
      boost: document.getElementById('boost-fill'),
      toast: document.getElementById('toast'),
      title: document.getElementById('title-screen'),
      pause: document.getElementById('pause-screen'),
      dead: document.getElementById('dead-screen'),
      stats: document.getElementById('final-stats'),
    };
    document.getElementById('start-btn').addEventListener('click', () => this.startPlay());
    document.getElementById('resume-btn').addEventListener('click', () => this.resume());
    document.getElementById('retry-btn').addEventListener('click', () => this.startPlay());
  }

  reset(layout = true) {
    this.traveled = 40;
    this.speed = 36;
    this.boost = 1;
    this.health = 1;
    this.score = 0;
    this.combo = 1;
    this.comboTimer = 0;
    this.hurt = 0;
    this.invuln = 0;
    this.fireCd = 0;
    this.offset = new THREE.Vector2(0, 0);
    this.steer = new THREE.Vector2(0, 0);
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
    this.toast('RIFT ENGAGED');
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
    this.ui.stats.textContent = `SCORE ${this.score}   BEST ${this.best}   DEPTH ${(this.traveled / 10).toFixed(0)} km`;
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
      if (boosting && this.boost > 0.05) {
        wantBoost = 1;
        this.boost = Math.max(0, this.boost - dt * 0.28);
      } else {
        this.boost = Math.min(1, this.boost + dt * 0.12);
      }
    }

    const cruise = cinematic ? 18 : 38 + wantBoost * 32 + Math.min(this.traveled / 1800, 18);
    this.speed = lerp(this.speed, cruise, 1 - Math.exp(-dt * 3));
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
      this.steer.x = clamp(this.input.mouse.x * 1.1 + keyX * 0.7, -1, 1);
      this.steer.y = clamp(this.input.mouse.y * 0.9 + keyY * 0.7, -1, 1);
    } else {
      this.steer.x = Math.sin(this.clock.elapsedTime * 0.35) * 0.35;
      this.steer.y = Math.cos(this.clock.elapsedTime * 0.22) * 0.2;
    }

    this.offset.x = lerp(this.offset.x, this.steer.x * 6.2, 1 - Math.exp(-dt * 6));
    this.offset.y = lerp(this.offset.y, this.steer.y * 3.6, 1 - Math.exp(-dt * 6));

    this.ship.position.copy(sample.pos)
      .addScaledVector(frame.binormal, this.offset.x)
      .addScaledVector(frame.normal, this.offset.y + 0.2);

    const look = sample.pos.clone().addScaledVector(sample.tangent, 12);
    const m = new THREE.Matrix4().lookAt(this.ship.position, look, frame.normal);
    const q = new THREE.Quaternion().setFromRotationMatrix(m);
    const bank = new THREE.Quaternion().setFromAxisAngle(sample.tangent, -this.offset.x * 0.18);
    q.multiply(bank);
    this.ship.quaternion.slerp(q, 1 - Math.exp(-dt * 8));

    const camTarget = this.ship.position.clone()
      .addScaledVector(sample.tangent, -10.5)
      .addScaledVector(frame.normal, 2.4)
      .addScaledVector(frame.binormal, this.offset.x * 0.18);
    this.camera.position.lerp(camTarget, 1 - Math.exp(-dt * 4.5));
    const camLook = this.ship.position.clone().addScaledVector(sample.tangent, 14).addScaledVector(frame.normal, 0.4);
    this.camera.up.lerp(frame.normal, 0.15);
    this.camera.lookAt(camLook);

    const boostAmt = wantBoost;
    for (const ex of this.exhausts) {
      ex.scale.set(1 + boostAmt * 0.5, 1 + boostAmt * 1.8, 1 + boostAmt * 0.5);
      ex.material.color.set(boostAmt > 0.2 ? 0xffd166 : 0x5ce1ff);
    }
    for (const l of this.shipLights) l.intensity = 7 + boostAmt * 10;
    this.trail.push(this.ship.position.clone().addScaledVector(sample.tangent, -1.4), boostAmt);
    this.audio.setBoost(boostAmt);

    this.world.update(dt, this.camera, this.traveled);
    this.world.recycleCrystals(this.path, this.traveled);

    const difficulty = 1 + this.traveled / 900;
    this.entities.spawnAhead(this.path, this.traveled, difficulty);
    this.entities.recycleBehind(this.traveled);
    this.entities.update(dt, this.path, this.traveled, this.ship.position, difficulty);

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
        const origin = this.ship.position.clone().addScaledVector(sample.tangent, 1.6);
        if (this.entities.fire(origin, sample.tangent.clone().addScaledVector(frame.binormal, this.steer.x * 0.08))) {
          this.audio.laser();
          this.fireCd = 0.11;
        }
      }

      const orbs = this.entities.collectOrbs(this.ship.position, 1.6);
      for (const orb of orbs) {
        this._score(orb.value);
        this.audio.collect();
        this.health = Math.min(1, this.health + 0.04);
      }
      const gates = this.entities.collectGates(this.ship.position);
      for (const _ of gates) {
        this._score(250);
        this.boost = 1;
        this.audio.gate();
        this.toast('GATE BREAK');
      }

      const kills = this.entities.bulletHits();
      for (const k of kills) {
        this.entities.explode(k.pos, k.boss ? 0xff3bd4 : 0x5ce1ff);
        this.audio.explosion();
        this._score(k.boss ? 2000 : 120);
        if (k.boss) this.toast('SENTINEL DOWN');
      }

      if (this.invuln <= 0) {
        const crystalHit = this.world.hitTest(this.ship.position, 0.9);
        const bodyHit = this.entities.collideEnemies(this.ship.position, 1.1).length > 0;
        const shotHit = this.entities.shotsHitPlayer(this.ship.position, 1.05);
        if (crystalHit || bodyHit || shotHit) this._damage(crystalHit ? 0.22 : 0.18);
      }
    }

    this.fx.uniforms.uTime.value = this.clock.elapsedTime;
    this.fx.uniforms.uBoost.value = boostAmt;
    this.fx.uniforms.uHurt.value = this.hurt;
    const sunNdc = this.world.sun.position.clone().project(this.camera);
    this.fx.uniforms.uSunPos.value.set(sunNdc.x * 0.5 + 0.5, sunNdc.y * 0.5 + 0.5);

    this._syncHud();
  }

  _score(n) {
    this.score += Math.floor(n * this.combo);
    this.combo = Math.min(8, this.combo + 0.25);
    this.comboTimer = 2.4;
  }

  _damage(amt) {
    this.health -= amt;
    this.hurt = 1;
    this.invuln = 0.85;
    this.combo = 1;
    this.audio.hit();
    if (this.health <= 0) this.die();
  }

  _syncHud() {
    if (this.state !== 'playing') return;
    this.ui.score.textContent = this.score.toLocaleString();
    this.ui.combo.textContent = `×${this.combo.toFixed(1)}`;
    this.ui.depth.textContent = `${(this.traveled / 10).toFixed(0)} km`;
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
