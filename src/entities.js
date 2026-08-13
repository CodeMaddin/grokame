import * as THREE from 'three';
import { orbVertex, orbFragment } from './shaders.js';
import { createFrenet, sampleRail } from './math.js';

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
    this.explosions = [];
    this.boss = null;
    this.time = 0;
    this.laneLimit = 24;
    this._seedOrbs();
    this._seedGates();
    this._seedEnemies();
    this._seedBlockers();
    this._seedBullets();
    this._seedPickups();
    this._seedExplosions();
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
    for (let i = 0; i < 18; i++) {
      const g = new THREE.Group();
      const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x1a0508,
        metalness: 0.72,
        roughness: 0.28,
        emissive: 0xff2458,
        emissiveIntensity: 2.2,
      });
      const body = new THREE.Mesh(new THREE.ConeGeometry(1.45, 4.1, 5), bodyMat);
      body.rotation.x = -Math.PI / 2;
      const fuselage = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.62, 2.4), bodyMat);
      fuselage.position.z = 0.4;
      const wingMat = new THREE.MeshStandardMaterial({
        color: 0x2a0a12,
        metalness: 0.55,
        roughness: 0.32,
        emissive: 0xff3bd4,
        emissiveIntensity: 1.15,
      });
      const wings = new THREE.Mesh(new THREE.BoxGeometry(5.1, 0.16, 1.55), wingMat);
      wings.position.z = 0.75;
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.15, 1.1), wingMat);
      fin.position.set(0, 0.55, 0.85);
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.85, 0.14, 8, 28),
        new THREE.MeshBasicMaterial({ color: 0xff6b8a })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.z = -0.15;
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.48, 10, 8),
        new THREE.MeshBasicMaterial({ color: 0xff5ad4 })
      );
      const engineL = new THREE.Mesh(
        new THREE.SphereGeometry(0.34, 8, 6),
        new THREE.MeshBasicMaterial({ color: 0xff8a3a })
      );
      engineL.position.set(-0.85, -0.18, 1.95);
      const engineR = engineL.clone();
      engineR.position.x = 0.85;
      g.add(body, fuselage, wings, fin, ring, core, engineL, engineR);
      g.visible = false;
      this.scene.add(g);
      this.enemies.push({
        mesh: g,
        ring,
        wings,
        body,
        alive: false,
        pathDist: 0,
        hp: 4,
        radius: 3.4,
        cooldown: 0,
        offset: new THREE.Vector3(),
        role: 'dive',
        nearMiss: false,
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
    for (let i = 0; i < 480; i++) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.38, 9),
        new THREE.MeshBasicMaterial({ color: 0xe8ffff })
      );
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
      });
    }
    for (let i = 0; i < 32; i++) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 10, 8),
        new THREE.MeshBasicMaterial({ color: 0xff4d6d })
      );
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.68, 10, 8),
        new THREE.MeshBasicMaterial({
          color: 0xff6b8a,
          transparent: true,
          opacity: 0.4,
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
        speed: 34,
      });
    }
  }

  _seedPickups() {
    for (let i = 0; i < 48; i++) {
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
      });
    }
  }

  _seedExplosions() {
    this._shardGeo = new THREE.TetrahedronGeometry(0.32, 0);
    this._flashGeo = new THREE.SphereGeometry(0.7, 8, 6);
    for (let i = 0; i < 8; i++) {
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
    this._lastBossAt = -1;
    this.time = 0;
    this.laneLimit = 24;
  }

  spawnAhead(path, traveled, difficulty) {
    this._placeInactive(this.orbs, path, traveled, 55, 14, 'orb');
    this._placeInactive(this.gates, path, traveled, 260, 3, 'gate');
    this._placeInactive(this.blockers, path, traveled, 95, Math.min(4 + Math.floor(difficulty), 8), 'blocker');

    const span = this.laneLimit || 24;
    const enemyNeed = Math.min(5 + Math.floor(difficulty * 1.05), 11);
    const lanes = [-0.84, -0.5, -0.18, 0.18, 0.5, 0.84].map((t) => t * span);
    let liveEnemies = this.enemies.filter((e) => e.alive).length;
    while (liveEnemies < enemyNeed) {
      const idle = this.enemies.find((e) => !e.alive);
      if (!idle) break;
      const row = Math.floor(liveEnemies / lanes.length);
      const lane = lanes[liveEnemies % lanes.length];
      const roll = Math.random();
      const role = roll < 0.18 ? 'heavy' : roll < 0.58 ? 'dive' : 'sine';
      this._placeOne(idle, path, traveled + 100 + row * 42 + Math.random() * 14, 'enemy');
      this._dressEnemy(idle, role, difficulty, lane, span);
      liveEnemies++;
      if (role !== 'heavy' && Math.random() < 0.34) {
        const pair = this.enemies.find((e) => !e.alive);
        const adj = lanes[(liveEnemies) % lanes.length];
        if (pair && Math.abs(adj - lane) > 8) {
          this._placeOne(pair, path, idle.pathDist, 'enemy');
          this._dressEnemy(pair, role, difficulty, adj, span);
          liveEnemies++;
        }
      }
    }

    if (!this.boss && traveled > 700 && Math.floor(traveled / 1200) !== this._lastBossAt) {
      this._lastBossAt = Math.floor(traveled / 1200);
      this._spawnBoss(path, traveled + 140);
    }
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

  _placeOne(item, path, dist, kind) {
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
      item.hp = 3;
    } else if (kind === 'gate') {
      item.passed = false;
      item.locked = true;
      item.hp = 4;
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

  _dressEnemy(en, role, difficulty, lane, span) {
    en.role = role;
    en.nearMiss = false;
    en.offset.x = lane + (Math.random() - 0.5) * span * 0.03;
    en.baseX = en.offset.x;
    en.weave = 0.55 + Math.random() * 0.7;
    const extra = difficulty > 2.4 ? 1 : 0;
    if (role === 'heavy') {
      en.hp = 11 + extra;
      en.radius = 4.6;
      en.descent = 0.85 + Math.random() * 0.55;
      en.cooldown = 1.4 + Math.random() * 0.8;
      en.mesh.scale.setScalar(1.28);
      en.wings.scale.set(1.15, 1, 1.1);
      en.ring.material.color.set(0xff9a3a);
      en.body.material.emissive.set(0xff6a1a);
      en.body.material.emissiveIntensity = 2.6;
    } else if (role === 'sine') {
      en.hp = 6 + extra;
      en.radius = 3.8;
      en.descent = 1.35 + Math.random() * 1.1;
      en.cooldown = 1.9 + Math.random() * 1.3;
      en.mesh.scale.setScalar(1.08);
      en.wings.scale.set(1.38, 1, 1.05);
      en.ring.material.color.set(0xffd166);
      en.body.material.emissive.set(0xff7a3a);
      en.body.material.emissiveIntensity = 2.0;
    } else {
      en.hp = 5 + extra;
      en.radius = 3.35;
      en.descent = 2.1 + Math.random() * 1.5;
      en.cooldown = 1.7 + Math.random() * 1.4;
      en.mesh.scale.setScalar(1);
      en.wings.scale.set(1, 1, 1);
      en.ring.material.color.set(0xff6b8a);
      en.body.material.emissive.set(0xff2458);
      en.body.material.emissiveIntensity = 2.3;
    }
      en.drop = role === 'heavy' ? 2 : 1;
  }

  _spawnBoss(path, dist) {
    const group = new THREE.Group();
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(3.4, 1),
      new THREE.MeshStandardMaterial({
        color: 0x140018,
        metalness: 0.8,
        roughness: 0.18,
        emissive: 0xff3bd4,
        emissiveIntensity: 3.6,
      })
    );
    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(4.4, 0),
      new THREE.MeshBasicMaterial({
        color: 0x5ce1ff,
        wireframe: true,
        transparent: true,
        opacity: 0.7,
      })
    );
    group.add(core, shell);
    this.scene.add(group);
    this.boss = {
      mesh: group,
      shell,
      pathDist: dist,
      hp: 32,
      maxHp: 32,
      cooldown: 0.5,
      radius: 4.6,
      alive: true,
    };
    const sample = path.sample(dist);
    group.position.copy(sample.pos);
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
    const s = spec.scale ?? 1;
    let sx = s;
    let sy = s;
    let sz = 1;
    if (kind === 'spark' || kind === 'shard' || kind === 'prism') sz = 0.16;
    else if (kind === 'seeker') { sx = s * 1.15; sy = s * 1.15; sz = 0.42; }
    else if (kind === 'titan') { sx = s * 1.05; sy = s * 1.05; sz = 0.95; }
    else if (kind === 'mine') { sx = s * 1.2; sy = s * 1.2; sz = 0.28; }
    else if (kind === 'wing' || kind === 'nova') sz = 0.62;
    else if (kind === 'spire') { sx = 0.55 * s; sy = 0.55 * s; sz = 1.15; }
    else if (kind === 'needle') sz = 1;
    else if (kind === 'helix' || kind === 'shear' || kind === 'drone') sz = 0.7;
    b.mesh.scale.set(sx, sy, sz);
    b.mesh.material.color.set(spec.color ?? 0xe8ffff);
  }

  enemyFireRail(path, pathDist, laneX, speed = 8) {
    const b = this.enemyShots.find((x) => !x.alive);
    if (!b) return;
    b.alive = true;
    b.life = 3.6;
    b.pathDist = pathDist;
    b.laneX = laneX;
    b.along = -1;
    b.speed = speed;
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

  spawnMote(path, pathDist, laneX, n = 1, opts = {}) {
    const spawned = [];
    const spread = opts.spread ?? 3.4;
    for (let i = 0; i < n; i++) {
      const p = this.pickups.find((x) => !x.alive);
      if (!p) break;
      p.alive = true;
      p.pathDist = pathDist + (Math.random() - 0.5) * 3;
      p.laneX = laneX + (i - (n - 1) / 2) * spread + (Math.random() - 0.5) * 1.6;
      p.value = 1;
      p.magnet = 0;
      p.grace = opts.grace ?? 0;
      p.mesh.visible = true;
      p.mesh.scale.setScalar(1);
      this._placeMote(p, path);
      spawned.push(p);
    }
    return spawned;
  }

  _placeMote(p, path) {
    const rail = sampleRail(path, p.pathDist, p.laneX, 0.55);
    p.mesh.position.copy(rail.pos);
  }

  recycleBehind(traveled, holdY = 8) {
    const cut = traveled + Math.min(holdY, 0) - 40;
    for (const list of [this.orbs, this.gates, this.enemies, this.blockers, this.pickups]) {
      for (const item of list) {
        if (!item.alive) continue;
        const dist = item.pathDist;
        if (dist < cut) {
          if (item.burst > 0) continue;
          item.alive = false;
          item.mesh.visible = false;
        }
      }
    }
  }

  hunterCount() {
    return this.enemies.filter((e) => e.alive).length + (this.boss?.alive ? 1 : 0);
  }

  blockerAhead(traveled) {
    return this.blockers.some((b) => b.alive && b.pathDist - traveled < 70 && b.pathDist > traveled);
  }

  update(dt, path, traveled, shipPos, playerOffset, difficulty, holdY = 8) {
    this.time += dt;
    for (const orb of this.orbs) {
      if (!orb.alive) continue;
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
    for (const en of this.enemies) {
      if (!en.alive) continue;
      en.ring.rotation.z += dt * 2.2;
      en.pathDist -= (en.descent || 2) * dt;
      if (en.role === 'sine') {
        const weave = (this.laneLimit || 24) * 0.08;
        en.offset.x = (en.baseX || 0) + Math.sin(this.time * (en.weave || 0.9) + en.pathDist * 0.03) * weave;
      }
      en.offset.y = 0;
      const rail = sampleRail(path, en.pathDist, en.offset.x, 0.4);
      en.mesh.position.copy(rail.pos);
      en.mesh.up.copy(rail.frame.normal);
      en.mesh.lookAt(rail.pos.clone().addScaledVector(rail.sample.tangent, -12));
      en.cooldown -= dt;
      if (en.cooldown <= 0 && en.pathDist > traveled + 6 && en.pathDist < traveled + 78) {
        if (en.role === 'heavy') {
          const spread = Math.min(8, (this.laneLimit || 24) * 0.08);
          this.enemyFireRail(path, en.pathDist - 4, en.offset.x - spread, 7);
          this.enemyFireRail(path, en.pathDist - 4, en.offset.x + spread, 7);
          en.cooldown = Math.max(1.85, 2.4 - difficulty * 0.06);
        } else {
          this.enemyFireRail(path, en.pathDist - 3, en.offset.x, 8);
          en.cooldown = Math.max(2.1, 2.8 - difficulty * 0.08);
        }
      }
    }
    if (this.boss?.alive) {
      this.boss.mesh.rotation.x += dt * 0.4;
      this.boss.mesh.rotation.y += dt * 0.7;
      this.boss.shell.rotation.z -= dt * 0.9;
      this.boss.pathDist -= 2.4 * dt;
      const rail = sampleRail(path, this.boss.pathDist, 0, 1.2);
      this.boss.mesh.position.copy(rail.pos);
      this.boss.mesh.lookAt(rail.pos.clone().addScaledVector(rail.sample.tangent, -16));
      this.boss.cooldown -= dt;
      if (this.boss.cooldown <= 0) {
        const spread = (this.laneLimit || 24) * 0.28;
        this.enemyFireRail(path, this.boss.pathDist - 4, 0, 8);
        this.enemyFireRail(path, this.boss.pathDist - 4, -spread, 7);
        this.enemyFireRail(path, this.boss.pathDist - 4, spread, 7);
        this.boss.cooldown = 1.85;
      }
    }

    this._stepProjectiles(this.bullets, dt, path);
    this._stepProjectiles(this.enemyShots, dt, path);
    this._stepPickups(dt, path, traveled, holdY, playerOffset);

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

  _stepPickups(dt, path, traveled, holdY, playerOffset) {
    const along = traveled + holdY;
    const px = playerOffset?.x || 0;
    for (const p of this.pickups) {
      if (!p.alive) continue;
      if (p.grace > 0) p.grace -= dt;
      p.pathDist -= 9.5 * dt;
      p.mesh.rotation.x += dt * 2.4;
      p.mesh.rotation.y += dt * 3.1;
      const dx = px - p.laneX;
      const dy = along - p.pathDist;
      const dist = Math.hypot(dx, dy);
      const magnetR = dy > 0 ? 14.5 : 11;
      if (p.grace <= 0 && dist < magnetR && dist > 0.001) {
        const pull = (1 - dist / magnetR) * 38 * dt;
        p.laneX += (dx / dist) * pull;
        p.pathDist += (dy / dist) * pull;
      }
      const pulse = 0.85 + 0.18 * Math.sin(this.time * 8 + p.pathDist);
      p.mesh.scale.setScalar(pulse);
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
        if (this._strike(b, en.mesh.position, en.radius)) {
          en.hp -= b.damage || 1;
          consumed = this._applyHit(b, en);
          if (en.hp <= 0) {
            en.alive = false;
            en.mesh.visible = false;
            events.push({
              type: 'enemy',
              pos: en.mesh.position.clone(),
              role: en.role,
              pathDist: en.pathDist,
              laneX: en.offset.x,
              drop: en.drop ?? 1,
            });
          } else {
            events.push({ type: 'ping', pos: en.mesh.position.clone() });
          }
          if (consumed) break;
        }
      }
      if (consumed) continue;

      for (const blk of this.blockers) {
        if (!blk.alive || this._alreadyHit(b, blk)) continue;
        if (this._strike(b, blk.mesh.position, blk.radius)) {
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
            events.push({ type: 'ping', pos: blk.mesh.position.clone() });
          }
          if (consumed) break;
        }
      }
      if (consumed) continue;

      for (const gate of this.gates) {
        if (!gate.alive || !gate.locked || this._alreadyHit(b, gate)) continue;
        if (this._strike(b, gate.mesh.position, 5.2)) {
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
            events.push({ type: 'ping', pos: gate.mesh.position.clone() });
          }
          if (consumed) break;
        }
      }
      if (consumed) continue;

      if (this.boss?.alive && !this._alreadyHit(b, this.boss) && this._strike(b, this.boss.mesh.position, this.boss.radius)) {
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
            drop: 8,
          });
        } else {
          events.push({ type: 'ping', pos: this.boss.mesh.position.clone() });
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
