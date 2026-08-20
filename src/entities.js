import * as THREE from 'three';
import { orbVertex, orbFragment } from './shaders.js';
import { createFrenet, sampleRail } from './math.js';
import { lanesFor, rowStagger } from './stage.js';
import { eliteHp } from './weapons.js';
import { tractorPull } from './hangar.js';
import { nextVolley } from './patterns.js';
import {
  createDiveHunter,
  createSineHunter,
  createHeavyHunter,
  createCinderHunter,
  createSlagHunter,
  createAcolyteHunter,
  createChimeHunter,
  createBloomHunter,
  createPrismHunter,
  createIonHunter,
  createWispHunter,
  createQueen,
  createWarden,
  createCoilTyrant,
  createEmpressCraft,
  createSentinel,
  applyCraftFlash,
  setCraftPhase,
} from './crafts.js';

const HUNTER_FACTORY = {
  dive: createDiveHunter,
  sine: createSineHunter,
  heavy: createHeavyHunter,
  cinder: createCinderHunter,
  slag: createSlagHunter,
  acolyte: createAcolyteHunter,
  chime: createChimeHunter,
  bloom: createBloomHunter,
  prism: createPrismHunter,
  ion: createIonHunter,
  wisp: createWispHunter,
  queen: createQueen,
  warden: createWarden,
  coil: createCoilTyrant,
  empress: createEmpressCraft,
};

function makeOrbMaterial(color) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uSeed: { value: Math.random() * 40 },
      uColor: { value: new THREE.Color(color) },
    },
    vertexShader: orbVertex,
    fragmentShader: orbFragment,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

export class EntityField {
  constructor(scene) {
    this.scene = scene;
    this.orbs = [];
    this.gates = [];
    this.enemies = [];
    this.blockers = [];
    this.bullets = [];
    this.enemyShots = [];
    this.pickups = [];
    this._tractor = { range: 0, force: 0 };
    this.explosions = [];
    this.impacts = [];
    this.boss = null;
    this.time = 0;
    this.laneLimit = 24;
    this.coinValue = 5;
    this._seedOrbs();
    this._seedGates();
    this._seedEnemies();
    this._seedBlockers();
    this._seedBullets();
    this._seedPickups();
    this._seedExplosions();
    this._seedImpacts();
  }

  _seedOrbs() {
    for (let i = 0; i < 28; i++) {
      const color = i % 3 === 0 ? '#ffd166' : '#5ce1ff';
      const mat = makeOrbMaterial(color);
      const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 1), mat);
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(1.1, 16, 12),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.18,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      mesh.add(glow);
      mesh.visible = false;
      this.scene.add(mesh);
      this.orbs.push({
        mesh,
        alive: false,
        pathDist: 0,
        radius: 1.4,
        value: i % 3 === 0 ? 40 : 12,
        color: new THREE.Color(color),
        offset: new THREE.Vector3(),
      });
    }
  }

  _seedGates() {
    for (let i = 0; i < 8; i++) {
      const group = new THREE.Group();
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(6.4, 0.22, 12, 64),
        new THREE.MeshStandardMaterial({
          color: 0x102030,
          emissive: 0xff3bd4,
          emissiveIntensity: 3.4,
          metalness: 0.4,
          roughness: 0.25,
        })
      );
      const inner = new THREE.Mesh(
        new THREE.CircleGeometry(6.0, 32),
        new THREE.MeshBasicMaterial({
          color: 0xff3bd4,
          transparent: true,
          opacity: 0.28,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          side: THREE.DoubleSide,
        })
      );
      group.add(torus, inner);
      group.visible = false;
      this.scene.add(group);
      this.gates.push({
        mesh: group,
        ring: torus,
        shield: inner,
        alive: false,
        pathDist: 0,
        passed: false,
        locked: true,
        hp: 4,
        burst: 0,
        burstAge: 0,
        pulse: 0,
      });
    }
  }

  _seedEnemies() {
    for (let i = 0; i < 28; i++) {
      const g = new THREE.Group();
      g.visible = false;
      this.scene.add(g);
      this.enemies.push({
        mesh: g,
        kits: {},
        craft: null,
        ring: null,
        wings: null,
        body: null,
        alive: false,
        pathDist: 0,
        hp: 4,
        radius: 3.4,
        cooldown: 0,
        windup: 0,
        windMax: 0.18,
        flash: 0,
        elite: false,
        offset: new THREE.Vector3(),
        role: 'dive',
        nearMiss: false,
        patternI: 0,
        visPhase: 1,
        weak: null,
        core: null,
      });
    }
  }

  _seedBlockers() {
    for (let i = 0; i < 12; i++) {
      const mesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(1, 0),
        new THREE.MeshStandardMaterial({
          color: 0x2a1200,
          metalness: 0.45,
          roughness: 0.28,
          emissive: 0xff8a1a,
          emissiveIntensity: 3.2,
        })
      );
      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(1.35, 16, 12),
        new THREE.MeshBasicMaterial({
          color: 0xff9a3a,
          transparent: true,
          opacity: 0.16,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      mesh.add(halo);
      mesh.visible = false;
      this.scene.add(mesh);
      this.blockers.push({
        mesh,
        alive: false,
        pathDist: 0,
        hp: 3,
        radius: 3.2,
        offset: new THREE.Vector3(),
      });
    }
  }

  _seedBullets() {
    this._shotGeo = {
      spark: new THREE.BoxGeometry(0.22, 0.22, 1.15),
      needle: new THREE.BoxGeometry(0.12, 0.12, 14),
      titan: new THREE.BoxGeometry(1.85, 0.62, 6.8),
      seeker: new THREE.OctahedronGeometry(0.55, 0),
      shard: new THREE.TetrahedronGeometry(0.42, 0),
      mine: new THREE.SphereGeometry(0.55, 10, 8),
      nova: new THREE.OctahedronGeometry(0.4, 0),
      wing: new THREE.BoxGeometry(0.28, 0.12, 3.4),
      helix: new THREE.BoxGeometry(0.22, 0.22, 4.2),
      shear: new THREE.BoxGeometry(0.55, 0.18, 3.8),
      spire: new THREE.BoxGeometry(0.1, 0.1, 16),
      drone: new THREE.SphereGeometry(0.32, 8, 6),
      prism: new THREE.BoxGeometry(0.22, 0.22, 2.4),
    };
    this._tracerGeo = new THREE.BoxGeometry(0.06, 0.06, 3.6);
    for (let i = 0; i < 480; i++) {
      const mesh = new THREE.Mesh(
        this._shotGeo.spark,
        new THREE.MeshBasicMaterial({ color: 0xe8ffff })
      );
      const tracer = new THREE.Mesh(
        this._tracerGeo,
        new THREE.MeshBasicMaterial({
          color: 0xa8fff8,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      tracer.position.z = 1.4;
      mesh.add(tracer);
      mesh.visible = false;
      this.scene.add(mesh);
      this.bullets.push({
        mesh,
        vel: new THREE.Vector3(),
        alive: false,
        life: 0,
        pathDist: 0,
        laneX: 0,
        along: 1,
        speed: 120,
        laneDrift: 0,
        damage: 1,
        home: 0,
        homeSteer: 0,
        pierce: 0,
        hitR: 1.6,
        wobble: 0,
        phase: 0,
        hitList: [],
        kind: 'spark',
        tracer,
      });
    }
    for (let i = 0; i < 96; i++) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.58, 12, 10),
        new THREE.MeshBasicMaterial({ color: 0xff1a48 })
      );
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(1.05, 12, 10),
        new THREE.MeshBasicMaterial({
          color: 0xff2a62,
          transparent: true,
          opacity: 0.55,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      mesh.add(glow);
      mesh.visible = false;
      this.scene.add(mesh);
      this.enemyShots.push({
        mesh,
        vel: new THREE.Vector3(),
        alive: false,
        life: 0,
        pathDist: 0,
        laneX: 0,
        along: -1,
        speed: 8,
        fat: false,
      });
    }
  }

  _seedPickups() {
    for (let i = 0; i < 64; i++) {
      const mesh = new THREE.Mesh(
        new THREE.TetrahedronGeometry(1.15, 0),
        new THREE.MeshBasicMaterial({ color: 0x7af0ff })
      );
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(1.85, 10, 8),
        new THREE.MeshBasicMaterial({
          color: 0x5ce1ff,
          transparent: true,
          opacity: 0.28,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      mesh.add(glow);
      mesh.visible = false;
      this.scene.add(mesh);
      this.pickups.push({
        mesh,
        glow,
        alive: false,
        pathDist: 0,
        laneX: 0,
        radius: 2.1,
        value: 1,
        magnet: 0,
        grace: 0,
        kind: 'mote',
      });
    }
  }

  _seedExplosions() {
    this._shardGeo = new THREE.TetrahedronGeometry(0.32, 0);
    this._flashGeo = new THREE.SphereGeometry(0.7, 8, 6);
    for (let i = 0; i < 16; i++) {
      const group = new THREE.Group();
      const shardMat = new THREE.MeshBasicMaterial({
        color: 0x5ce1ff,
        transparent: true,
        opacity: 1,
        depthWrite: false,
      });
      const shards = [];
      for (let s = 0; s < 10; s++) {
        const mesh = new THREE.Mesh(this._shardGeo, shardMat);
        mesh.userData.vel = new THREE.Vector3();
        group.add(mesh);
        shards.push(mesh);
      }
      const flashMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const flash = new THREE.Mesh(this._flashGeo, flashMat);
      group.add(flash);
      group.visible = false;
      this.scene.add(group);
      this.explosions.push({
        group,
        shards,
        shardMat,
        flash,
        flashMat,
        alive: false,
        life: 0,
        duration: 0.45,
      });
    }
  }

  _seedImpacts() {
    for (let i = 0; i < 72; i++) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 6, 6),
        new THREE.MeshBasicMaterial({
          color: 0x9af7ff,
          transparent: true,
          opacity: 1,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      mesh.visible = false;
      this.scene.add(mesh);
      this.impacts.push({
        mesh,
        vel: new THREE.Vector3(),
        alive: false,
        life: 0,
        duration: 0.16,
      });
    }
  }

  reset() {
    for (const list of [this.orbs, this.gates, this.enemies, this.blockers, this.bullets, this.enemyShots, this.pickups]) {
      for (const item of list) {
        item.alive = false;
        item.mesh.visible = false;
        if ('passed' in item) item.passed = false;
        if ('locked' in item) item.locked = true;
        if ('nearMiss' in item) item.nearMiss = false;
        if ('burst' in item) item.burst = 0;
        if ('burstAge' in item) item.burstAge = 0;
        if ('grace' in item) item.grace = 0;
      }
    }
    if (this.boss) {
      this.scene.remove(this.boss.mesh);
      this.boss = null;
    }
    for (const ex of this.explosions) {
      ex.alive = false;
      ex.life = 0;
      ex.group.visible = false;
    }
    for (const spark of this.impacts) {
      spark.alive = false;
      spark.life = 0;
      spark.mesh.visible = false;
    }
    this.time = 0;
    this.laneLimit = 24;
    this.coinValue = 5;
  }

  spawnAhead(path, traveled) {
    this._placeInactive(this.orbs, path, traveled, 78, 7, 'orb');
  }

  spawnSquad(path, traveled, form, role, n, ahead = 90, heat = 1) {
    const span = this.laneLimit || 24;
    const count = n || 4;
    const lanes = lanesFor(form, count, span);
    for (let i = 0; i < count; i++) {
      const idle = this.enemies.find((e) => !e.alive);
      if (!idle) break;
      const dist = traveled + ahead + rowStagger(form, i, count);
      this._placeOne(idle, path, dist, 'enemy');
      this._dressEnemy(idle, role || 'dive', heat, lanes[i] ?? 0, span);
    }
  }

  spawnNamed(path, traveled, id, ahead = 96, step = 0, loadout = null, heat = 1, flags = {}) {
    const idle = this.enemies.find((e) => !e.alive);
    if (!idle) return;
    this._placeOne(idle, path, traveled + ahead, 'enemy');
    this._dressEnemy(idle, id, heat, 0, this.laneLimit || 24, step, loadout, flags);
  }

  spawnGateAt(path, traveled, ahead = 72, heat = 1) {
    const idle = this.gates.find((g) => !g.alive);
    if (!idle) return;
    this._placeOne(idle, path, traveled + ahead, 'gate', heat);
  }

  spawnOrbsAt(path, traveled, n = 4, ahead = 48) {
    for (let i = 0; i < n; i++) {
      const idle = this.orbs.find((o) => !o.alive);
      if (!idle) break;
      this._placeOne(idle, path, traveled + ahead + i * 9, 'orb');
    }
  }

  spawnBlockersAt(path, traveled, n = 2, ahead = 80, heat = 1) {
    for (let i = 0; i < n; i++) {
      const idle = this.blockers.find((b) => !b.alive);
      if (!idle) break;
      this._placeOne(idle, path, traveled + ahead + i * 14, 'blocker', heat);
    }
  }

  spawnFinale(path, traveled, ahead = 96, step = 0, loadout = null, heat = 1) {
    if (this.boss?.alive) return;
    if (this.boss) {
      this.scene.remove(this.boss.mesh);
      this.boss = null;
    }
    this._spawnBoss(path, traveled + ahead, step, loadout, heat);
  }

  _placeInactive(list, path, traveled, spacing, count, kind) {
    let live = list.filter((x) => x.alive).length;
    while (live < Math.min(count, list.length)) {
      const idle = list.find((x) => !x.alive);
      if (!idle) break;
      this._placeOne(idle, path, traveled + 70 + live * spacing + Math.random() * 24, kind);
      live++;
    }
  }

  _placeOne(item, path, dist, kind, heat = 1) {
    const sample = path.sample(dist);
    const frame = createFrenet(sample.tangent);
    const span = this.laneLimit || 24;
    let ox = 0;
    let oy = 0;
    if (kind === 'orb') {
      ox = (Math.random() - 0.5) * span * 1.7;
      oy = (Math.random() - 0.5) * 16;
    } else if (kind === 'enemy') {
      ox = (Math.random() - 0.5) * span * 1.7;
      oy = 0;
    } else if (kind === 'blocker') {
      ox = (Math.random() - 0.5) * span * 1.7;
      oy = 0;
      const scale = 2.4 + Math.random() * 1.6;
      item.mesh.scale.setScalar(scale);
      item.radius = 1.15 * scale;
      item.hp = 3 + Math.max(0, Math.round((heat - 1) * 2));
    } else if (kind === 'gate') {
      item.passed = false;
      item.locked = true;
      item.hp = 4 + Math.max(0, Math.round((heat - 1) * 3));
      item.burst = 0;
      item.burstAge = 0;
      item.shield.visible = true;
      item.shield.material.color.set(0xff3bd4);
      item.shield.material.opacity = 0.32;
      item.ring.material.emissive.set(0xff3bd4);
      item.ring.material.emissiveIntensity = 3.4;
      item.ring.scale.set(1, 1, 1);
    }
    item.mesh.position.copy(sample.pos)
      .addScaledVector(frame.binormal, ox)
      .addScaledVector(frame.normal, oy);
    item.mesh.visible = true;
    item.alive = true;
    item.pathDist = dist;
    item.offset = new THREE.Vector3(ox, oy, 0);
    if (kind === 'enemy') item.baseX = ox;
    item.mesh.lookAt(sample.pos.clone().add(sample.tangent));
  }

  _dressEnemy(en, role, difficulty, lane, span, step = 0, loadout = null, flags = {}) {
    this._bindCraft(en, role);
    en.role = role;
    en.nearMiss = false;
    en.flash = 0;
    en.windup = 0;
    en.patternI = 0;
    en.visPhase = 1;
    en.phase = 1;
    en.levelBoss = !!flags.levelBoss;
    en.superBoss = !!flags.superBoss;
    en.elite = role === 'queen' || role === 'warden' || role === 'coil' || role === 'empress';
    en.offset.x = lane + (Math.random() - 0.5) * span * 0.03;
    en.baseX = en.offset.x;
    en.weave = 0.55 + Math.random() * 0.7;
    const heat = Number(difficulty) || 1;
    const bump = (base) => (heat <= 1.001 ? 0 : Math.max(0, Math.round(base * (heat - 1) * 0.75)));
    const namedHull = role === 'queen' || role === 'warden' || role === 'finale';
    const eliteScale = namedHull ? 1 : 1 + Math.max(0, heat - 1) * 0.18;
    en.heat = heat;
    en.mid = !flags.levelBoss && !flags.superBoss && (role === 'queen' || role === 'warden' || role === 'coil' || role === 'empress');
    const midScale = en.mid && heat > 1.001 ? 0.48 : 1;
    en.mesh.scale.setScalar(1);
    if (en.craft) setCraftPhase(en.craft, 1);
    if (role === 'queen') {
      en.hp = Math.round(eliteHp('queen', step, loadout) * eliteScale * midScale);
      en.maxHp = en.hp;
      en.radius = 7.4;
      en.descent = 0.52;
      en.cooldown = 0.85;
      en.windMax = 0.46;
      en.drop = 3;
      en.bombDrop = 1;
    } else if (role === 'warden') {
      en.hp = Math.round(eliteHp('warden', step, loadout) * eliteScale * midScale);
      en.maxHp = en.hp;
      en.radius = 7.6;
      en.descent = 0.38;
      en.cooldown = 1.05;
      en.windMax = 0.55;
      en.drop = 3;
      en.bombDrop = 1;
    } else if (role === 'coil') {
      en.hp = Math.round(eliteHp('coil', step, loadout) * eliteScale * midScale);
      en.maxHp = en.hp;
      en.radius = 6.4;
      en.descent = 0.44;
      en.cooldown = 0.95;
      en.windMax = 0.48;
      en.drop = 3;
      en.bombDrop = 1;
    } else if (role === 'empress') {
      en.hp = Math.round(eliteHp('empress', step, loadout) * eliteScale * midScale);
      en.maxHp = en.hp;
      en.radius = 7.4;
      en.descent = 0.48;
      en.cooldown = 0.9;
      en.windMax = 0.5;
      en.drop = 3;
      en.bombDrop = 1;
    } else if (role === 'heavy') {
      en.hp = 11 + bump(11);
      en.maxHp = en.hp;
      en.radius = 4.8;
      en.descent = 0.85 + Math.random() * 0.55;
      en.cooldown = 1.4 + Math.random() * 0.8;
      en.windMax = 0.45;
      en.drop = 1;
      en.bombDrop = 0;
    } else if (role === 'slag' || role === 'chime' || role === 'prism' || role === 'wisp') {
      en.hp = 11 + bump(11);
      en.maxHp = en.hp;
      en.radius = 4.8;
      en.descent = 0.85 + Math.random() * 0.55;
      en.cooldown = 1.4 + Math.random() * 0.8;
      en.windMax = 0.45;
      en.drop = 1;
      en.bombDrop = 0;
    } else if (role === 'sine') {
      en.hp = 6 + bump(6);
      en.maxHp = en.hp;
      en.radius = 4.2;
      en.descent = 1.35 + Math.random() * 1.1;
      en.cooldown = 1.9 + Math.random() * 1.3;
      en.windMax = 0.22;
      en.drop = 0;
      en.bombDrop = 0;
    } else if (role === 'cinder' || role === 'acolyte' || role === 'bloom' || role === 'ion') {
      en.hp = 6 + bump(6);
      en.maxHp = en.hp;
      en.radius = 4.2;
      en.descent = 1.35 + Math.random() * 1.1;
      en.cooldown = 1.9 + Math.random() * 1.3;
      en.windMax = 0.22;
      en.drop = 0;
      en.bombDrop = 0;
    } else {
      en.hp = 5 + bump(5);
      en.maxHp = en.hp;
      en.radius = 3.35;
      en.descent = 2.1 + Math.random() * 1.5;
      en.cooldown = 1.7 + Math.random() * 1.4;
      en.windMax = 0.16;
      en.drop = 0;
      en.bombDrop = 0;
    }
    this._syncHullMeter(en);
  }

  _hullMeterMats() {
    if (this._meterGeo) return;
    this._meterGeo = new THREE.PlaneGeometry(2.4, 0.22);
    this._meterTrack = new THREE.MeshBasicMaterial({
      color: 0x140818,
      transparent: true,
      opacity: 0.82,
      depthTest: false,
      depthWrite: false,
    });
    this._meterFill = new THREE.MeshBasicMaterial({
      color: 0xffd166,
      transparent: true,
      opacity: 0.96,
      depthTest: false,
      depthWrite: false,
    });
  }

  _ensureHullMeter(en) {
    if (en.hullMeter) return en.hullMeter;
    this._hullMeterMats();
    const track = new THREE.Mesh(this._meterGeo, this._meterTrack);
    const fill = new THREE.Mesh(this._meterGeo, this._meterFill);
    const group = new THREE.Group();
    track.renderOrder = 8;
    fill.renderOrder = 9;
    fill.position.z = 0.02;
    group.add(track);
    group.add(fill);
    group.position.set(0, 2.55, 0.35);
    en.mesh.add(group);
    en.hullMeter = { group, fill, track };
    return en.hullMeter;
  }

  _syncHullMeter(en) {
    const mid = !!(en?.alive && en.mid && !en.levelBoss && !en.superBoss);
    if (!mid) {
      if (en?.hullMeter) en.hullMeter.group.visible = false;
      return;
    }
    const bar = this._ensureHullMeter(en);
    bar.group.visible = true;
    const r = Math.max(0, Math.min(1, en.hp / Math.max(1, en.maxHp || en.hp)));
    bar.fill.scale.x = Math.max(0.05, r);
    bar.fill.position.x = (r - 1) * 1.2;
  }

  _bindCraft(en, role) {
    const key = HUNTER_FACTORY[role] ? role : 'dive';
    if (!en.kits) en.kits = {};
    if (!en.kits[key]) {
      const craft = HUNTER_FACTORY[key]();
      en.mesh.add(craft.mesh);
      en.kits[key] = craft;
    }
    for (const [k, craft] of Object.entries(en.kits)) {
      craft.mesh.visible = k === key;
    }
    const craft = en.kits[key];
    en.craft = craft;
    en.body = craft.body;
    en.wings = craft.wings;
    en.ring = craft.ring;
    en.core = craft.core;
    en.weak = craft.weak;
  }

  _spawnBoss(path, dist, step = 0, loadout = null, heat = 1) {
    const craft = createSentinel();
    this.scene.add(craft.mesh);
    this.boss = {
      mesh: craft.mesh,
      craft,
      body: craft.body,
      wings: craft.wings,
      ring: craft.ring,
      core: craft.core,
      weak: craft.weak,
      shell: craft.ring,
      pathDist: dist,
      hp: eliteHp('finale', step, loadout),
      maxHp: eliteHp('finale', step, loadout),
      cooldown: 0.6,
      windup: 0,
      windMax: 0.42,
      radius: 7.6,
      alive: true,
      elite: true,
      role: 'finale',
      phase: 1,
      visPhase: 1,
      patternI: 0,
      flash: 0,
      bombDrop: 0,
      drop: 5,
      offset: new THREE.Vector3(0, 0, 0),
    };
    setCraftPhase(craft, 1);
    const sample = path.sample(dist);
    craft.mesh.position.copy(sample.pos);
  }

  fireRail(path, pathDist, laneX, along = 1, spec = {}) {
    const b = this.bullets.find((x) => !x.alive);
    if (!b) return false;
    b.alive = true;
    b.life = spec.life ?? 1.15;
    b.pathDist = pathDist;
    b.laneX = laneX;
    b.along = along;
    b.speed = spec.speed ?? 124;
    b.laneDrift = spec.drift ?? 0;
    b.damage = spec.damage ?? 1;
    b.home = spec.home ?? 0;
    b.homeSteer = spec.homeSteer ?? 0;
    b.pierce = spec.pierce ?? 0;
    b.hitR = spec.hitR ?? 1.6;
    b.wobble = spec.wobble ?? 0;
    b.phase = spec.phase ?? Math.random() * 6.28;
    b.kind = spec.kind || 'spark';
    b.hitList = [];
    this._dressBullet(b, spec);
    b.mesh.visible = true;
    this._placeRailShot(b, path);
    return true;
  }

  _dressBullet(b, spec) {
    const kind = spec.kind || 'spark';
    const geo = this._shotGeo[kind] || this._shotGeo.spark;
    if (b.mesh.geometry !== geo) b.mesh.geometry = geo;
    const s = spec.scale ?? 1;
    let sx = s;
    let sy = s;
    let sz = 1;
    if (kind === 'spark' || kind === 'shard' || kind === 'prism') sz = 1;
    else if (kind === 'seeker') { sx = s * 1.15; sy = s * 1.15; sz = 1; }
    else if (kind === 'titan') { sx = s; sy = s; sz = 1; }
    else if (kind === 'mine') { sx = s * 1.2; sy = s * 1.2; sz = 1; }
    else if (kind === 'wing' || kind === 'nova') sz = 1;
    else if (kind === 'spire' || kind === 'needle') { sx = s; sy = s; sz = 1; }
    else if (kind === 'helix' || kind === 'shear' || kind === 'drone') sz = 1;
    b.mesh.scale.set(sx, sy, sz);
    b.mesh.material.color.set(spec.color ?? 0xe8ffff);
    if (b.tracer) {
      const beam = kind === 'needle' || kind === 'spire' || kind === 'spark' || kind === 'helix';
      b.tracer.visible = beam;
      b.tracer.material.color.set(spec.color ?? 0xa8fff8);
      b.tracer.scale.set(kind === 'needle' || kind === 'spire' ? 0.7 : 1, kind === 'needle' || kind === 'spire' ? 0.7 : 1, kind === 'needle' || kind === 'spire' ? 2.4 : 1);
    }
  }

  enemyFireRail(path, pathDist, laneX, speed = 8, fat = false) {
    const b = this.enemyShots.find((x) => !x.alive);
    if (!b) return;
    b.alive = true;
    b.life = fat ? 4.2 : 3.6;
    b.pathDist = pathDist;
    b.laneX = laneX;
    b.along = -1;
    b.speed = speed;
    b.fat = fat;
    b.mesh.scale.setScalar(fat ? 1.55 : 1);
    b.mesh.material.color.set(fat ? 0xff0038 : 0xff1a48);
    b.mesh.visible = true;
    this._placeRailShot(b, path);
  }

  _placeRailShot(b, path) {
    const rail = sampleRail(path, b.pathDist, b.laneX, 0.45);
    b.mesh.position.copy(rail.pos);
    b.vel.copy(rail.sample.tangent).multiplyScalar(b.along * b.speed);
    b.mesh.lookAt(rail.pos.clone().addScaledVector(rail.sample.tangent, b.along));
  }

  explode(pos, color = 0x5ce1ff) {
    let slot = this.explosions.find((x) => !x.alive);
    if (!slot) {
      slot = this.explosions[0];
      for (const ex of this.explosions) {
        if (ex.life < slot.life) slot = ex;
      }
    }
    slot.alive = true;
    slot.duration = 0.45;
    slot.life = slot.duration;
    slot.group.visible = true;
    slot.group.position.copy(pos);
    slot.shardMat.color.set(color);
    slot.shardMat.opacity = 1;
    slot.flashMat.color.set(color);
    slot.flashMat.opacity = 0.85;
    slot.flash.scale.setScalar(1);
    for (const s of slot.shards) {
      s.position.set(0, 0, 0);
      s.scale.setScalar(0.65 + Math.random() * 0.7);
      s.userData.vel.randomDirection().multiplyScalar(7 + Math.random() * 9);
    }
  }

  spawnImpact(pos, color = 0x9af7ff) {
    const sparks = 5 + ((Math.random() * 3) | 0);
    let used = 0;
    for (const spark of this.impacts) {
      if (spark.alive) continue;
      spark.alive = true;
      spark.duration = 0.14 + Math.random() * 0.08;
      spark.life = spark.duration;
      spark.mesh.visible = true;
      spark.mesh.position.copy(pos).add(new THREE.Vector3().randomDirection().multiplyScalar(0.35));
      spark.vel.randomDirection().multiplyScalar(10 + Math.random() * 16);
      spark.mesh.material.color.set(color);
      spark.mesh.scale.setScalar(0.7 + Math.random() * 0.9);
      used += 1;
      if (used >= sparks) break;
    }
  }

  bombSweep(traveled, holdY, damage = 16) {
    let shots = 0;
    let hunters = 0;
    const killed = [];
    for (const b of this.enemyShots) {
      if (!b.alive) continue;
      this.spawnImpact(b.mesh.position.clone(), 0xffe08a);
      b.alive = false;
      b.mesh.visible = false;
      shots += 1;
    }
    const along = traveled + holdY;
    for (const en of this.enemies) {
      if (!en.alive) continue;
      const ds = en.pathDist - along;
      if (ds < -10 || ds > 78) continue;
      en.hp -= en.elite ? Math.max(damage, (en.maxHp || en.hp) * 0.08) : damage;
      en.flash = 0.2;
      if (en.craft) applyCraftFlash(en.craft, 0.9);
      this._syncVisPhase(en);
      hunters += 1;
      this.spawnImpact(en.mesh.position.clone(), 0xffc14d);
      if (en.hp <= 0) {
        en.alive = false;
        en.mesh.visible = false;
        this.explode(en.mesh.position.clone(), en.elite ? 0xffd166 : 0xff8a3a);
        killed.push({
          type: en.elite ? 'midboss' : 'enemy',
          role: en.role,
          pos: en.mesh.position.clone(),
          pathDist: en.pathDist,
          laneX: en.offset.x,
          drop: en.drop ?? 1,
          bombDrop: en.bombDrop ?? 0,
        });
      }
    }
    if (this.boss?.alive) {
      const ds = this.boss.pathDist - along;
      if (ds > -10 && ds < 90) {
        this.boss.hp -= Math.max(damage, this.boss.maxHp * 0.08);
        if (this.boss.craft) applyCraftFlash(this.boss.craft, 0.9);
        this._syncVisPhase(this.boss);
        hunters += 1;
        this.spawnImpact(this.boss.mesh.position.clone(), 0xffd166);
        if (this.boss.hp <= 0) {
          this.boss.alive = false;
          this.boss.mesh.visible = false;
          this.explode(this.boss.mesh.position.clone(), 0xff3bd4);
          killed.push({
            type: 'boss',
            pos: this.boss.mesh.position.clone(),
            pathDist: this.boss.pathDist,
            laneX: 0,
            drop: this.boss.drop ?? 5,
            bombDrop: 0,
          });
        }
      }
    }
    return { shots, hunters, killed };
  }

  spawnMote(path, pathDist, laneX, n = 1, opts = {}) {
    const spawned = [];
    const spread = opts.spread ?? 3.4;
    for (let i = 0; i < n; i++) {
      const p = this.pickups.find((x) => !x.alive);
      if (!p) break;
      this._paintPickup(p, 'mote', 1);
      p.alive = true;
      p.pathDist = pathDist + (Math.random() - 0.5) * 3;
      p.laneX = laneX + (i - (n - 1) / 2) * spread + (Math.random() - 0.5) * 1.6;
      p.magnet = 0;
      p.grace = opts.grace ?? 0;
      p.mesh.visible = true;
      p.mesh.scale.setScalar(1);
      this._placeMote(p, path);
      spawned.push(p);
    }
    return spawned;
  }

  spawnCoins(path, pathDist, laneX, n = 1, opts = {}) {
    const spawned = [];
    const spread = opts.spread ?? 4.2;
    for (let i = 0; i < n; i++) {
      const p = this.pickups.find((x) => !x.alive);
      if (!p) break;
      this._paintPickup(p, 'coin', opts.value || this.coinValue || 5);
      p.alive = true;
      p.pathDist = pathDist + (Math.random() - 0.5) * 4;
      p.laneX = laneX + (i - (n - 1) / 2) * spread + (Math.random() - 0.5) * 1.8;
      p.magnet = 0;
      p.grace = opts.grace ?? 0;
      p.mesh.visible = true;
      p.mesh.scale.setScalar(1.08);
      this._placeMote(p, path);
      spawned.push(p);
    }
    return spawned;
  }

  _paintPickup(p, kind, value) {
    const coin = kind === 'coin';
    p.kind = coin ? 'coin' : 'mote';
    p.value = coin ? (value || this.coinValue || 5) : 1;
    p.radius = coin ? 2.45 : 2.1;
    p.mesh.material.color.set(coin ? 0xffd166 : 0x7af0ff);
    p.glow.material.color.set(coin ? 0xffb703 : 0x5ce1ff);
    p.glow.material.opacity = coin ? 0.42 : 0.28;
  }

  _placeMote(p, path) {
    const rail = sampleRail(path, p.pathDist, p.laneX, 0.55);
    p.mesh.position.copy(rail.pos);
  }

  pullLoot(on) {
    this._lootPull = !!on;
  }

  recycleBehind(traveled, holdY = 8) {
    const cut = traveled + Math.min(holdY, 0) - 40;
    for (const list of [this.orbs, this.gates, this.enemies, this.blockers, this.pickups]) {
      for (const item of list) {
        if (!item.alive) continue;
        const dist = item.pathDist;
        if (dist < cut) {
          if (item.burst > 0) continue;
          if (item.elite) continue;
          if (this._lootPull && item.kind === 'coin') continue;
          item.alive = false;
          item.mesh.visible = false;
          if (item.hullMeter) item.hullMeter.group.visible = false;
        }
      }
    }
  }

  hunterCount() {
    return this.enemies.filter((e) => e.alive).length + (this.boss?.alive ? 1 : 0);
  }

  activeBoss() {
    const elite = this.enemies.find((e) => e.alive && e.elite);
    if (elite) return elite;
    if (this.boss?.alive) return this.boss;
    return null;
  }

  blockerAhead(traveled) {
    return this.blockers.some((b) => b.alive && b.pathDist - traveled < 70 && b.pathDist > traveled);
  }

  _telegraphAndFire(en, dt, path, difficulty, inRange) {
    const body = en.body;
    if (en.flash > 0) {
      if (en.craft) applyCraftFlash(en.craft, Math.min(1, en.flash * 5));
      else if (body) body.material.emissiveIntensity = 2.2 + en.flash * 8;
    } else if ((en.windup || 0) <= 0 && en.craft) {
      applyCraftFlash(en.craft, 0);
    }
    if (!inRange) {
      if (en.windup > 0) en.windup = 0;
      if (en.ring) en.ring.scale.setScalar(1);
      return;
    }
    if (en.windup > 0) {
      en.windup -= dt;
      const u = 1 - en.windup / Math.max(0.08, en.windMax || 0.4);
      if (en.ring) en.ring.scale.setScalar(1 + u * 0.55);
      if (en.craft) applyCraftFlash(en.craft, 0.25 + u * 0.85);
      else if (body) body.material.emissiveIntensity = 2.2 + u * 5.5;
      if (en.shell?.material?.opacity != null) en.shell.material.opacity = 0.55 + u * 0.4;
      if (en.windup <= 0) {
        const extra = nextVolley(en, this.laneLimit || 24, this._playerLane ?? 0, this.time, (s, lane, speed, fat) => {
          this.enemyFireRail(path, s, lane, speed ?? 8, fat);
        });
        if (en.ring) en.ring.scale.setScalar(1);
        en.cooldown = this._reloadFor(en, difficulty) + (extra || 0);
      }
      return;
    }
    en.cooldown -= dt;
    if (en.cooldown <= 0) {
      en.windMax = en.windMax || 0.2;
      en.windup = en.windMax;
    }
  }

  _syncVisPhase(en) {
    if (!en?.craft || !(en.elite || en.role === 'finale')) return;
    const r = en.hp / Math.max(1, en.maxHp || en.hp);
    const p = r > 0.66 ? 1 : r > 0.33 ? 2 : 3;
    if (p === en.visPhase) return;
    en.visPhase = p;
    if (!(en.role === 'finale' || en.levelBoss || en.superBoss)) return;
    en.phase = p;
    setCraftPhase(en.craft, p);
  }

  _reloadFor(en, difficulty) {
    if (en.role === 'finale') return en.phase === 3 ? 1.15 : en.phase === 2 ? 1.45 : 1.85;
    const climax = (en.levelBoss || en.superBoss) && (en.phase || 1) >= 3;
    let wait = 2.2;
    if (en.role === 'queen') wait = climax ? 1.28 : 1.55;
    else if (en.role === 'empress') wait = climax ? 1.22 : 1.48;
    else if (en.role === 'warden') wait = climax ? 1.4 : 1.7;
    else if (en.role === 'coil') wait = climax ? 1.34 : 1.62;
    else if (en.role === 'heavy' || en.role === 'slag' || en.role === 'chime' || en.role === 'prism' || en.role === 'wisp') {
      wait = Math.max(1.7, 2.4 - difficulty * 0.07);
    } else {
      wait = Math.max(2.1, 2.8 - difficulty * 0.08);
    }
    if (en.mid && (en.heat || 1) > 1.001) wait *= 1.2;
    return wait;
  }

  _enemyVolley(en, path, difficulty) {
    const x = en.offset?.x ?? 0;
    const s = en.pathDist - 4;
    const span = this.laneLimit || 24;
    if (en.role === 'queen') {
      const fan = span * 0.16;
      for (let i = -2; i <= 2; i++) this.enemyFireRail(path, s, x + i * fan, 7.2, Math.abs(i) === 0);
      return;
    }
    if (en.role === 'warden') {
      const cross = span * 0.22;
      this.enemyFireRail(path, s, x - cross, 6.4, true);
      this.enemyFireRail(path, s, x + cross, 6.4, true);
      this.enemyFireRail(path, s, x, 7.5, true);
      this.enemyFireRail(path, s - 6, x - cross * 0.5, 6.8);
      this.enemyFireRail(path, s - 6, x + cross * 0.5, 6.8);
      return;
    }
    if (en.role === 'finale') {
      const spread = span * (en.phase === 3 ? 0.34 : 0.26);
      const n = en.phase === 1 ? 3 : 5;
      for (let i = 0; i < n; i++) {
        const t = n === 1 ? 0 : i / (n - 1) - 0.5;
        this.enemyFireRail(path, s, t * spread * 2, en.phase === 3 ? 7.2 : 8, true);
      }
      if (en.phase === 3) {
        this.enemyFireRail(path, s - 8, Math.sin(this.time * 2.4) * spread, 6.6, true);
      }
      return;
    }
    if (en.role === 'heavy') {
      const spread = Math.min(8, span * 0.08);
      this.enemyFireRail(path, s, x - spread, 7);
      this.enemyFireRail(path, s, x + spread, 7);
      return;
    }
    this.enemyFireRail(path, s + 1, x, 8);
  }

  update(dt, path, traveled, shipPos, playerOffset, difficulty, holdY = 8, tractor = null) {
    this._tractor = tractor || { range: 0, force: 0 };
    this.time += dt;
    for (const orb of this.orbs) {
      if (!orb.alive) continue;
      this._attractOrb(orb, dt, traveled, holdY, playerOffset);
      orb.mesh.material.uniforms.uTime.value = this.time;
      orb.mesh.rotation.y += dt * 1.4;
      const sample = path.sample(orb.pathDist);
      const frame = createFrenet(sample.tangent);
      orb.mesh.position.copy(sample.pos)
        .addScaledVector(frame.binormal, orb.offset.x)
        .addScaledVector(frame.normal, orb.offset.y + Math.sin(this.time * 3 + orb.pathDist) * 0.35);
    }
    for (const gate of this.gates) {
      if (!gate.alive) continue;
      const sample = path.sample(gate.pathDist);
      gate.mesh.position.copy(sample.pos);
      gate.mesh.lookAt(sample.pos.clone().add(sample.tangent));
      if (gate.burst > 0) {
        gate.burstAge = (gate.burstAge || 0) + dt;
        const t = gate.burstAge;
        const gaus = (x, w) => Math.exp(-(x * x) / (w * w));
        const wave =
          1.00 * gaus(t - 0.24, 0.18) +
          0.62 * gaus(t - 0.92, 0.26) +
          0.32 * gaus(t - 1.64, 0.32) -
          0.24 * gaus(t - 0.55, 0.14) -
          0.14 * gaus(t - 1.26, 0.18);
        const diameter = 1 + wave * 1.18;
        gate.pulse = Math.max(0, wave);
        gate.ring.scale.set(diameter, diameter, 1);
        gate.ring.rotation.z += dt * (0.7 + gate.pulse * 2.4);
        const glow = 3.2 + gate.pulse * 8.5;
        gate.ring.material.emissive.setRGB(
          0.42 + gate.pulse * 0.55,
          0.82 + gate.pulse * 0.18,
          1
        );
        gate.ring.material.emissiveIntensity = glow;
        if (t > 2.2) {
          gate.burst = 0;
          gate.burstAge = 0;
          gate.alive = false;
          gate.mesh.visible = false;
          gate.ring.scale.set(1, 1, 1);
          gate.ring.material.emissive.set(0x5ce1ff);
          gate.ring.material.emissiveIntensity = 3.4;
        }
        continue;
      }
      gate.ring.rotation.z += dt * 0.8;
      if (gate.locked) {
        gate.shield.material.opacity = 0.22 + 0.12 * Math.sin(this.time * 6);
      }
    }
    for (const blk of this.blockers) {
      if (!blk.alive) continue;
      blk.mesh.rotation.y += dt * 0.9;
      blk.mesh.rotation.x += dt * 0.4;
      const sample = path.sample(blk.pathDist);
      const frame = createFrenet(sample.tangent);
      blk.mesh.position.copy(sample.pos)
        .addScaledVector(frame.binormal, blk.offset.x)
        .addScaledVector(frame.normal, blk.offset.y);
    }
    this._playerLane = playerOffset?.x ?? 0;
    for (const en of this.enemies) {
      if (!en.alive) continue;
      if (en.ring) en.ring.rotation.z += dt * 2.2;
      en.pathDist -= (en.descent || 2) * dt;
      if (en.elite) {
        const park = traveled + 32;
        if (en.pathDist < park) en.pathDist = park;
      }
      if (en.role === 'sine' || en.role === 'cinder' || en.role === 'acolyte' || en.role === 'bloom' || en.role === 'ion' || en.role === 'queen' || en.role === 'empress') {
        const weave = (this.laneLimit || 24) * (en.role === 'queen' || en.role === 'empress' ? 0.22 : 0.08);
        en.offset.x = (en.baseX || 0) + Math.sin(this.time * (en.weave || 0.9) + en.pathDist * 0.03) * weave;
      }
      en.offset.y = 0;
      const rail = sampleRail(path, en.pathDist, en.offset.x, 0.4);
      en.mesh.position.copy(rail.pos);
      en.mesh.up.copy(rail.frame.normal);
      en.mesh.lookAt(rail.pos.clone().addScaledVector(rail.sample.tangent, -12));
      en.flash = Math.max(0, (en.flash || 0) - dt);
      const inRange = en.pathDist > traveled + 6 && en.pathDist < traveled + 78;
      this._telegraphAndFire(en, dt, path, difficulty, inRange);
      this._syncHullMeter(en);
    }
    if (this.boss?.alive) {
      if (this.boss.ring) this.boss.ring.rotation.z -= dt * 0.9;
      if (this.boss.wings) this.boss.wings.rotation.y += dt * 0.35;
      this.boss.pathDist -= 1.15 * dt;
      if (this.boss.pathDist < traveled + 32) this.boss.pathDist = traveled + 32;
      const rail = sampleRail(path, this.boss.pathDist, 0, 1.2);
      this.boss.mesh.position.copy(rail.pos);
      this.boss.mesh.up.copy(rail.frame.normal);
      this.boss.mesh.lookAt(rail.pos.clone().addScaledVector(rail.sample.tangent, -16));
      this._syncVisPhase(this.boss);
      this.boss.flash = Math.max(0, (this.boss.flash || 0) - dt);
      if (this.boss.flash > 0 && this.boss.craft) applyCraftFlash(this.boss.craft, this.boss.flash * 4);
      const inRange = this.boss.pathDist > traveled + 8 && this.boss.pathDist < traveled + 90;
      this._telegraphAndFire(this.boss, dt, path, difficulty, inRange);
    }

    this._stepProjectiles(this.bullets, dt, path);
    this._stepProjectiles(this.enemyShots, dt, path);
    this._stepPickups(dt, path, traveled, holdY, playerOffset);

    for (const spark of this.impacts) {
      if (!spark.alive) continue;
      spark.life -= dt;
      spark.mesh.position.addScaledVector(spark.vel, dt);
      const t = Math.max(0, spark.life / spark.duration);
      spark.mesh.material.opacity = t;
      spark.mesh.scale.setScalar(0.45 + (1 - t) * 1.6);
      if (spark.life <= 0) {
        spark.alive = false;
        spark.mesh.visible = false;
      }
    }

    for (const ex of this.explosions) {
      if (!ex.alive) continue;
      ex.life -= dt;
      const t = Math.max(0, ex.life / ex.duration);
      for (const s of ex.shards) {
        s.position.addScaledVector(s.userData.vel, dt);
        s.rotation.x += dt * 8;
        s.rotation.y += dt * 5;
      }
      ex.shardMat.opacity = t;
      ex.flashMat.opacity = t * 0.7;
      ex.flash.scale.setScalar(1 + (1 - t) * 5);
      if (ex.life <= 0) {
        ex.alive = false;
        ex.group.visible = false;
      }
    }
  }

  _stepProjectiles(list, dt, path) {
    for (const b of list) {
      if (!b.alive) continue;
      b.life -= dt;
      if (b.home) this._steerHome(b, dt);
      if (b.wobble) b.laneX += Math.sin(this.time * 7.5 + (b.phase || 0)) * b.wobble * dt;
      b.pathDist += (b.along || 1) * (b.speed || 100) * dt;
      b.laneX += (b.laneDrift || 0) * dt;
      if (b.life <= 0 || b.pathDist < 12) {
        b.alive = false;
        b.mesh.visible = false;
        continue;
      }
      this._placeRailShot(b, path);
    }
  }

  _steerHome(b, dt) {
    let best = null;
    let bestD = 1e9;
    for (const en of this.enemies) {
      if (!en.alive) continue;
      if (en.pathDist < b.pathDist - 4) continue;
      const d = Math.hypot(en.offset.x - b.laneX, en.pathDist - b.pathDist);
      if (d < bestD) {
        bestD = d;
        best = en;
      }
    }
    if (this.boss?.alive && this.boss.pathDist > b.pathDist - 6) {
      const d = Math.hypot(0 - b.laneX, this.boss.pathDist - b.pathDist);
      if (d < bestD) {
        bestD = d;
        best = this.boss;
      }
    }
    if (!best) return;
    const tx = best.offset?.x ?? 0;
    const ty = best.pathDist;
    const steer = b.homeSteer || 60;
    const dx = tx - b.laneX;
    const dy = ty - b.pathDist;
    b.laneX += Math.sign(dx) * Math.min(Math.abs(dx), steer * dt);
    if (dy > 0) b.pathDist += Math.min(dy, steer * 0.35 * dt);
  }

  _attractOrb(orb, dt, traveled, holdY, playerOffset) {
    const spec = this._tractor;
    if (!spec?.range) return;
    const px = playerOffset?.x || 0;
    const along = traveled + holdY;
    const dx = px - (orb.offset?.x || 0);
    const dy = along - orb.pathDist;
    const dz = -(orb.offset?.y || 0);
    const dist = Math.hypot(dx, dy, dz);
    const speed = tractorPull(dist, spec) * dt;
    if (speed <= 0 || dist < 1e-4) return;
    const k = speed / dist;
    orb.offset.x += dx * k;
    orb.offset.y += dz * k;
    orb.pathDist += dy * k;
  }

  _stepPickups(dt, path, traveled, holdY, playerOffset) {
    const along = traveled + holdY;
    const px = playerOffset?.x || 0;
    const spec = this._tractor;
    for (const p of this.pickups) {
      if (!p.alive) continue;
      if (p.grace > 0) p.grace -= dt;
      p.pathDist -= 9.5 * dt;
      p.mesh.rotation.x += dt * 2.4;
      p.mesh.rotation.y += dt * 3.1;
      const dx = px - p.laneX;
      const dy = along - p.pathDist;
      const dist = Math.hypot(dx, dy);
      let sucked = 0;
      if (p.grace <= 0 && spec?.range) {
        sucked = tractorPull(dist, spec) * dt;
        if (sucked > 0 && dist > 1e-4) {
          p.laneX += (dx / dist) * sucked;
          p.pathDist += (dy / dist) * sucked;
        }
      }
      if (p.grace <= 0 && this._lootPull && p.kind === 'coin' && dist > 1e-4) {
        const pull = 42 * dt;
        p.laneX += (dx / dist) * pull;
        p.pathDist += (dy / dist) * pull;
        sucked = Math.max(sucked, pull);
      }
      const pulse = 0.85 + 0.18 * Math.sin(this.time * 8 + p.pathDist);
      p.mesh.scale.setScalar(pulse * (sucked > 0 ? 1.08 : 1));
      this._placeMote(p, path);
    }
  }

  collectOrbs(shipPos, radius) {
    const got = [];
    for (const orb of this.orbs) {
      if (!orb.alive) continue;
      if (orb.mesh.position.distanceTo(shipPos) < radius + orb.radius) {
        orb.alive = false;
        orb.mesh.visible = false;
        got.push(orb);
      }
    }
    return got;
  }

  collectMotes(shipPos, radius) {
    const got = [];
    for (const p of this.pickups) {
      if (!p.alive || p.grace > 0) continue;
      if (p.mesh.position.distanceTo(shipPos) < radius + p.radius) {
        p.alive = false;
        p.mesh.visible = false;
        got.push(p);
      }
    }
    return got;
  }

  collectGates(shipPos) {
    const hits = [];
    for (const gate of this.gates) {
      if (!gate.alive || gate.passed) continue;
      if (gate.mesh.position.distanceTo(shipPos) < 6.2) {
        if (gate.locked) {
          hits.push({ gate, blocked: true });
        } else {
          gate.passed = true;
          gate.burst = 1;
          gate.burstAge = 0;
          hits.push({ gate, blocked: false });
        }
      }
    }
    return hits;
  }

  collideEnemies(shipPos, radius) {
    const hits = [];
    for (const en of this.enemies) {
      if (!en.alive) continue;
      if (en.mesh.position.distanceTo(shipPos) < radius + en.radius * 0.68) hits.push(en);
    }
    if (this.boss?.alive && this.boss.mesh.position.distanceTo(shipPos) < radius + this.boss.radius) {
      hits.push(this.boss);
    }
    return hits;
  }

  collideBlockers(shipPos, radius) {
    const hits = [];
    for (const blk of this.blockers) {
      if (!blk.alive) continue;
      if (blk.mesh.position.distanceTo(shipPos) < radius + blk.radius) hits.push(blk);
    }
    return hits;
  }

  nearMisses(shipPos) {
    const got = [];
    for (const en of this.enemies) {
      if (!en.alive || en.nearMiss) continue;
      const d = en.mesh.position.distanceTo(shipPos);
      if (d > en.radius + 1.2 && d < en.radius + 3.4) {
        en.nearMiss = true;
        got.push(en);
      }
    }
    return got;
  }

  _hitPoint(bullet) {
    return bullet.mesh.position.clone().addScaledVector(bullet.vel, 0.04);
  }

  _railHit(b, pathDist, laneX, radius) {
    const pad = b.hitR ?? 1.6;
    const along = Math.abs((b.pathDist || 0) - pathDist);
    const side = Math.abs((b.laneX || 0) - (laneX || 0));
    return along < radius + pad + 6 && side < radius + pad;
  }

  _strike(b, pos, radius) {
    const pad = b.hitR ?? 1.6;
    return this._hitPoint(b).distanceTo(pos) < radius + pad;
  }

  _alreadyHit(b, target) {
    return b.hitList && b.hitList.includes(target);
  }

  _applyHit(b, target) {
    if (!b.hitList) b.hitList = [];
    b.hitList.push(target);
    if ((b.pierce || 0) > 0) {
      b.pierce -= 1;
      return false;
    }
    b.alive = false;
    b.mesh.visible = false;
    return true;
  }

  bulletHits() {
    const events = [];
    for (const b of this.bullets) {
      if (!b.alive) continue;
      let consumed = false;

      for (const en of this.enemies) {
        if (!en.alive || this._alreadyHit(b, en)) continue;
        if (this._railHit(b, en.pathDist, en.offset?.x ?? 0, en.radius)) {
          en.hp -= b.damage || 1;
          consumed = this._applyHit(b, en);
          if (en.hp <= 0) {
            en.alive = false;
            en.mesh.visible = false;
            events.push({
              type: en.elite ? 'midboss' : 'enemy',
              pos: en.mesh.position.clone(),
              role: en.role,
              pathDist: en.pathDist,
              laneX: en.offset.x,
              drop: en.drop ?? 1,
              bombDrop: en.bombDrop ?? 0,
            });
          } else {
            en.flash = en.elite ? 0.22 : 0.12;
            if (en.craft) applyCraftFlash(en.craft, en.elite ? 0.95 : 0.7);
            this._syncVisPhase(en);
            events.push({ type: 'ping', pos: en.mesh.position.clone(), color: en.elite ? 0xffe08a : 0x9af7ff });
          }
          if (consumed) break;
        }
      }
      if (consumed) continue;

      for (const blk of this.blockers) {
        if (!blk.alive || this._alreadyHit(b, blk)) continue;
        if (this._railHit(b, blk.pathDist, blk.offset?.x ?? 0, blk.radius)) {
          blk.hp -= b.damage || 1;
          consumed = this._applyHit(b, blk);
          if (blk.hp <= 0) {
            blk.alive = false;
            blk.mesh.visible = false;
            events.push({
              type: 'blocker',
              pos: blk.mesh.position.clone(),
              pathDist: blk.pathDist,
              laneX: blk.offset.x,
              drop: Math.random() < 0.45 ? 1 : 0,
            });
          } else {
            events.push({ type: 'ping', pos: blk.mesh.position.clone(), color: 0xff9a3a });
          }
          if (consumed) break;
        }
      }
      if (consumed) continue;

      for (const gate of this.gates) {
        if (!gate.alive || !gate.locked || this._alreadyHit(b, gate)) continue;
        if (this._railHit(b, gate.pathDist, 0, 5.2)) {
          gate.hp -= b.damage || 1;
          consumed = this._applyHit(b, gate);
          if (gate.hp <= 0) {
            gate.locked = false;
            gate.shield.visible = false;
            gate.ring.material.emissive.set(0x5ce1ff);
            gate.ring.material.emissiveIntensity = 5.2;
            events.push({
              type: 'unlock',
              pos: gate.mesh.position.clone(),
              pathDist: gate.pathDist,
              laneX: 0,
              drop: 2,
            });
          } else {
            events.push({ type: 'ping', pos: gate.mesh.position.clone(), color: 0xff64e8 });
          }
          if (consumed) break;
        }
      }
      if (consumed) continue;

      if (this.boss?.alive && !this._alreadyHit(b, this.boss) && this._railHit(b, this.boss.pathDist, 0, this.boss.radius)) {
        this.boss.hp -= b.damage || 1;
        this._applyHit(b, this.boss);
        if (this.boss.hp <= 0) {
          this.boss.alive = false;
          this.boss.mesh.visible = false;
          events.push({
            type: 'boss',
            pos: this.boss.mesh.position.clone(),
            pathDist: this.boss.pathDist,
            laneX: 0,
            drop: this.boss.drop ?? 5,
          });
        } else {
          this.boss.flash = 0.22;
          if (this.boss.craft) applyCraftFlash(this.boss.craft, 0.95);
          this._syncVisPhase(this.boss);
          events.push({ type: 'ping', pos: this.boss.mesh.position.clone(), color: 0xffd166 });
        }
      }
    }
    return events;
  }

  shotsHitPlayer(shipPos, radius) {
    let hit = false;
    for (const b of this.enemyShots) {
      if (!b.alive) continue;
      if (b.mesh.position.distanceTo(shipPos) < radius) {
        b.alive = false;
        b.mesh.visible = false;
        hit = true;
      }
    }
    return hit;
  }

  nearestLights(shipPos, extras) {
    const candidates = [...extras];
    for (const p of this.pickups) {
      if (p.alive) candidates.push({ pos: p.mesh.position, color: new THREE.Color('#7af0ff'), intensity: 8 });
    }
    for (const orb of this.orbs) {
      if (orb.alive) candidates.push({ pos: orb.mesh.position, color: orb.color, intensity: 9 });
    }
    for (const blk of this.blockers) {
      if (blk.alive) {
        candidates.push({
          pos: blk.mesh.position,
          color: new THREE.Color('#ff9a3a'),
          intensity: 14,
        });
      }
    }
    for (const gate of this.gates) {
      if (!gate.alive) continue;
      candidates.push({
        pos: gate.mesh.position,
        color: new THREE.Color(gate.burst > 0 ? '#dcffff' : gate.locked ? '#ff3bd4' : '#5ce1ff'),
        intensity: gate.burst > 0 ? 14 + (gate.pulse || 0) * 32 : gate.locked ? 10 : 16,
      });
    }
    if (this.boss?.alive) {
      candidates.push({
        pos: this.boss.mesh.position,
        color: new THREE.Color('#ff3bd4'),
        intensity: 18,
      });
    }
    candidates.sort((a, b) => a.pos.distanceToSquared(shipPos) - b.pos.distanceToSquared(shipPos));
    return candidates.slice(0, 6);
  }
}
