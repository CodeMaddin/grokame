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
    this.explosions = [];
    this.boss = null;
    this.time = 0;
    this.laneLimit = 24;
    this._seedOrbs();
    this._seedGates();
    this._seedEnemies();
    this._seedBlockers();
    this._seedBullets();
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
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(6.4, 0.2, 12, 48),
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
      torus.add(inner);
      torus.visible = false;
      this.scene.add(torus);
      this.gates.push({
        mesh: torus,
        shield: inner,
        alive: false,
        pathDist: 0,
        passed: false,
        locked: true,
        hp: 4,
      });
    }
  }

  _seedEnemies() {
    for (let i = 0; i < 16; i++) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.95, 0),
        new THREE.MeshStandardMaterial({
          color: 0x1a0508,
          metalness: 0.7,
          roughness: 0.3,
          emissive: 0xff2458,
          emissiveIntensity: 2.4,
        })
      );
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.08, 8, 24),
        new THREE.MeshBasicMaterial({ color: 0xff6b8a })
      );
      ring.rotation.x = Math.PI / 2;
      g.add(body, ring);
      g.visible = false;
      this.scene.add(g);
      this.enemies.push({
        mesh: g,
        ring,
        alive: false,
        pathDist: 0,
        hp: 3,
        radius: 1.5,
        cooldown: 0,
        offset: new THREE.Vector3(),
        role: 'hunter',
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
    for (let i = 0; i < 48; i++) {
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
      });
    }
    for (let i = 0; i < 32; i++) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xff4d6d })
      );
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
    for (const list of [this.orbs, this.gates, this.enemies, this.blockers, this.bullets, this.enemyShots]) {
      for (const item of list) {
        item.alive = false;
        item.mesh.visible = false;
        if ('passed' in item) item.passed = false;
        if ('locked' in item) item.locked = true;
        if ('nearMiss' in item) item.nearMiss = false;
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
    const enemyNeed = Math.min(5 + Math.floor(difficulty * 1.15), 12);
    const lanes = [-0.84, -0.5, -0.18, 0.18, 0.5, 0.84].map((t) => t * span);
    let liveEnemies = this.enemies.filter((e) => e.alive).length;
    while (liveEnemies < enemyNeed) {
      const idle = this.enemies.find((e) => !e.alive);
      if (!idle) break;
      const row = Math.floor(liveEnemies / lanes.length);
      const lane = lanes[liveEnemies % lanes.length];
      this._placeOne(idle, path, traveled + 96 + row * 36 + Math.random() * 12, 'enemy');
      idle.hp = 2 + (difficulty > 2.5 ? 1 : 0);
      idle.cooldown = 0.9 + Math.random() * 1.1;
      idle.role = Math.random() < 0.55 ? 'dive' : 'sine';
      idle.nearMiss = false;
      idle.offset.x = lane + (Math.random() - 0.5) * span * 0.04;
      idle.baseX = idle.offset.x;
      idle.weave = 0.7 + Math.random() * 0.9;
      idle.descent = 1.2 + Math.random() * 2.4;
      idle.ring.material.color.set(idle.role === 'dive' ? 0xff6b8a : 0xffd166);
      liveEnemies++;
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
      item.shield.visible = true;
      item.shield.material.color.set(0xff3bd4);
      item.shield.material.opacity = 0.32;
      item.mesh.material.emissive.set(0xff3bd4);
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
      hp: 22,
      maxHp: 22,
      cooldown: 0.5,
      radius: 4.6,
      alive: true,
    };
    const sample = path.sample(dist);
    group.position.copy(sample.pos);
  }

  fireRail(path, pathDist, laneX, along = 1) {
    const b = this.bullets.find((x) => !x.alive);
    if (!b) return false;
    b.alive = true;
    b.life = 1.25;
    b.pathDist = pathDist;
    b.laneX = laneX;
    b.along = along;
    b.speed = 124;
    b.mesh.visible = true;
    this._placeRailShot(b, path);
    return true;
  }

  enemyFireRail(path, pathDist, laneX, speed = 14) {
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

  recycleBehind(traveled) {
    for (const list of [this.orbs, this.gates, this.enemies, this.blockers]) {
      for (const item of list) {
        if (item.alive && item.pathDist < traveled - 18) {
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

  update(dt, path, traveled, shipPos, playerOffset, difficulty) {
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
      gate.mesh.rotation.z += dt * 0.8;
      const sample = path.sample(gate.pathDist);
      gate.mesh.position.copy(sample.pos);
      gate.mesh.lookAt(sample.pos.clone().add(sample.tangent));
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
      if (en.cooldown <= 0 && en.pathDist > traveled - 4 && en.pathDist < traveled + 110) {
        this.enemyFireRail(path, en.pathDist - 3, en.offset.x, 14);
        en.cooldown = Math.max(0.95, 1.55 - difficulty * 0.06);
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
        this.enemyFireRail(path, this.boss.pathDist - 4, 0, 13);
        this.enemyFireRail(path, this.boss.pathDist - 4, -spread, 12);
        this.enemyFireRail(path, this.boss.pathDist - 4, spread, 12);
        this.boss.cooldown = 1.05;
      }
    }

    this._stepProjectiles(this.bullets, dt, path);
    this._stepProjectiles(this.enemyShots, dt, path);

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
      b.pathDist += (b.along || 1) * (b.speed || 100) * dt;
      if (b.life <= 0 || b.pathDist < 12) {
        b.alive = false;
        b.mesh.visible = false;
        continue;
      }
      this._placeRailShot(b, path);
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

  collectGates(shipPos) {
    const hits = [];
    for (const gate of this.gates) {
      if (!gate.alive || gate.passed) continue;
      if (gate.mesh.position.distanceTo(shipPos) < 6.2) {
        if (gate.locked) {
          hits.push({ gate, blocked: true });
        } else {
          gate.passed = true;
          gate.alive = false;
          gate.mesh.visible = false;
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
      if (en.mesh.position.distanceTo(shipPos) < radius + en.radius) hits.push(en);
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
      if (d > 2.6 && d < 5.8) {
        en.nearMiss = true;
        got.push(en);
      }
    }
    return got;
  }

  _hitPoint(bullet) {
    return bullet.mesh.position.clone().addScaledVector(bullet.vel, 0.04);
  }

  bulletHits() {
    const events = [];
    for (const b of this.bullets) {
      if (!b.alive) continue;
      const tip = this._hitPoint(b);
      let consumed = false;

      for (const en of this.enemies) {
        if (!en.alive) continue;
        if (tip.distanceTo(en.mesh.position) < en.radius + 1.8) {
          b.alive = false;
          b.mesh.visible = false;
          en.hp -= 1;
          consumed = true;
          if (en.hp <= 0) {
            en.alive = false;
            en.mesh.visible = false;
            events.push({ type: 'enemy', pos: en.mesh.position.clone(), role: en.role });
          } else {
            events.push({ type: 'ping', pos: en.mesh.position.clone() });
          }
          break;
        }
      }
      if (consumed) continue;

      for (const blk of this.blockers) {
        if (!blk.alive) continue;
        if (tip.distanceTo(blk.mesh.position) < blk.radius + 1.6) {
          b.alive = false;
          b.mesh.visible = false;
          blk.hp -= 1;
          consumed = true;
          if (blk.hp <= 0) {
            blk.alive = false;
            blk.mesh.visible = false;
            events.push({ type: 'blocker', pos: blk.mesh.position.clone() });
          } else {
            events.push({ type: 'ping', pos: blk.mesh.position.clone() });
          }
          break;
        }
      }
      if (consumed) continue;

      for (const gate of this.gates) {
        if (!gate.alive || !gate.locked) continue;
        if (tip.distanceTo(gate.mesh.position) < 6.4) {
          b.alive = false;
          b.mesh.visible = false;
          gate.hp -= 1;
          consumed = true;
          if (gate.hp <= 0) {
            gate.locked = false;
            gate.shield.visible = false;
            gate.mesh.material.emissive.set(0x5ce1ff);
            events.push({ type: 'unlock', pos: gate.mesh.position.clone() });
          } else {
            events.push({ type: 'ping', pos: gate.mesh.position.clone() });
          }
          break;
        }
      }
      if (consumed) continue;

      if (this.boss?.alive && tip.distanceTo(this.boss.mesh.position) < this.boss.radius + 1.2) {
        b.alive = false;
        b.mesh.visible = false;
        this.boss.hp -= 1;
        if (this.boss.hp <= 0) {
          this.boss.alive = false;
          this.boss.mesh.visible = false;
          events.push({ type: 'boss', pos: this.boss.mesh.position.clone() });
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
