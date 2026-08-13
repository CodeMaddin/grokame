import * as THREE from 'three';
import { orbVertex, orbFragment } from './shaders.js';
import { createFrenet } from './math.js';

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
    this.bullets = [];
    this.enemyShots = [];
    this.explosions = [];
    this.boss = null;
    this.time = 0;
    this._seedOrbs();
    this._seedGates();
    this._seedEnemies();
    this._seedBullets();
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
        value: i % 3 === 0 ? 50 : 20,
        color: new THREE.Color(color),
      });
    }
  }

  _seedGates() {
    for (let i = 0; i < 8; i++) {
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(5.2, 0.18, 12, 48),
        new THREE.MeshStandardMaterial({
          color: 0x102030,
          emissive: 0x5ce1ff,
          emissiveIntensity: 3.4,
          metalness: 0.4,
          roughness: 0.25,
        })
      );
      const inner = new THREE.Mesh(
        new THREE.TorusGeometry(5.2, 0.55, 8, 40),
        new THREE.MeshBasicMaterial({
          color: 0xff3bd4,
          transparent: true,
          opacity: 0.18,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      torus.add(inner);
      torus.visible = false;
      this.scene.add(torus);
      this.gates.push({ mesh: torus, alive: false, pathDist: 0, passed: false });
    }
  }

  _seedEnemies() {
    for (let i = 0; i < 14; i++) {
      const g = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.9, 0),
        new THREE.MeshStandardMaterial({
          color: 0x1a0508,
          metalness: 0.7,
          roughness: 0.3,
          emissive: 0xff2458,
          emissiveIntensity: 2.2,
        })
      );
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(1.15, 0.07, 8, 24),
        new THREE.MeshBasicMaterial({ color: 0xff6b8a })
      );
      ring.rotation.x = Math.PI / 2;
      g.add(body, ring);
      g.visible = false;
      this.scene.add(g);
      this.enemies.push({
        mesh: g,
        alive: false,
        pathDist: 0,
        hp: 2,
        radius: 1.4,
        cooldown: 0,
        offset: new THREE.Vector3(),
      });
    }
  }

  _seedBullets() {
    for (let i = 0; i < 40; i++) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.45, 11),
        new THREE.MeshBasicMaterial({ color: 0xe8ffff })
      );
      mesh.visible = false;
      this.scene.add(mesh);
      this.bullets.push({
        mesh,
        vel: new THREE.Vector3(),
        alive: false,
        life: 0,
        fromPlayer: true,
      });
    }
    for (let i = 0; i < 24; i++) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.16, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xff4d6d })
      );
      mesh.visible = false;
      this.scene.add(mesh);
      this.enemyShots.push({
        mesh,
        vel: new THREE.Vector3(),
        alive: false,
        life: 0,
      });
    }
  }

  reset() {
    for (const list of [this.orbs, this.gates, this.enemies, this.bullets, this.enemyShots]) {
      for (const item of list) {
        item.alive = false;
        item.mesh.visible = false;
        if ('passed' in item) item.passed = false;
      }
    }
    if (this.boss) {
      this.scene.remove(this.boss.mesh);
      this.boss = null;
    }
    for (const ex of this.explosions) {
      this.scene.remove(ex.group, ex.flash);
    }
    this.explosions.length = 0;
    this._lastBossAt = -1;
    this.time = 0;
  }

  spawnAhead(path, traveled, difficulty) {
    this._placeInactive(this.orbs, path, traveled, 70, 18);
    this._placeInactive(this.gates, path, traveled, 220, 4, true);
    const enemyNeed = Math.min(3 + Math.floor(difficulty), 8);
    let liveEnemies = this.enemies.filter((e) => e.alive).length;
    while (liveEnemies < enemyNeed) {
      const idle = this.enemies.find((e) => !e.alive);
      if (!idle) break;
      this._placeOne(idle, path, traveled + 80 + Math.random() * 240, true);
      idle.hp = 2 + (difficulty > 3 ? 1 : 0);
      idle.cooldown = 1 + Math.random();
      liveEnemies++;
    }

    if (!this.boss && traveled > 900 && Math.floor(traveled / 1400) !== this._lastBossAt) {
      this._lastBossAt = Math.floor(traveled / 1400);
      this._spawnBoss(path, traveled + 160);
    }
  }

  _placeInactive(list, path, traveled, spacing, count, isGate = false) {
    let live = list.filter((x) => x.alive).length;
    while (live < Math.min(count, list.length)) {
      const idle = list.find((x) => !x.alive);
      if (!idle) break;
      this._placeOne(idle, path, traveled + 50 + live * spacing + Math.random() * 20, !isGate);
      if (isGate) idle.passed = false;
      live++;
    }
  }

  _placeOne(item, path, dist, offset) {
    const sample = path.sample(dist);
    const frame = createFrenet(sample.tangent);
    const ox = offset ? (Math.random() - 0.5) * 10 : 0;
    const oy = offset ? (Math.random() - 0.5) * 6 : 0;
    item.mesh.position.copy(sample.pos)
      .addScaledVector(frame.binormal, ox)
      .addScaledVector(frame.normal, oy);
    item.mesh.visible = true;
    item.alive = true;
    item.pathDist = dist;
    item.offset = new THREE.Vector3(ox, oy, 0);
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
      hp: 28,
      maxHp: 28,
      cooldown: 0.6,
      radius: 4.6,
      alive: true,
    };
    const sample = path.sample(dist);
    group.position.copy(sample.pos);
  }

  fire(origin, dir) {
    const b = this.bullets.find((x) => !x.alive);
    if (!b) return false;
    b.alive = true;
    b.life = 1.15;
    b.mesh.visible = true;
    b.mesh.position.copy(origin);
    b.vel.copy(dir).setLength(78);
    b.mesh.scale.set(1, 1, 1);
    const aim = origin.clone().add(dir);
    b.mesh.lookAt(aim);
    return true;
  }

  enemyFire(origin, target) {
    const b = this.enemyShots.find((x) => !x.alive);
    if (!b) return;
    b.alive = true;
    b.life = 2.2;
    b.mesh.visible = true;
    b.mesh.position.copy(origin);
    b.vel.copy(target).sub(origin).normalize().multiplyScalar(28);
  }

  explode(pos, color = 0x5ce1ff) {
    const group = new THREE.Group();
    const shards = [];
    for (let i = 0; i < 14; i++) {
      const m = new THREE.Mesh(
        new THREE.TetrahedronGeometry(0.22 + Math.random() * 0.2, 0),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 })
      );
      m.position.copy(pos);
      m.userData.vel = new THREE.Vector3().randomDirection().multiplyScalar(6 + Math.random() * 10);
      group.add(m);
      shards.push(m);
    }
    const flash = new THREE.PointLight(color, 20, 24, 2);
    flash.position.copy(pos);
    this.scene.add(group, flash);
    this.explosions.push({ group, shards, flash, life: 0.55 });
  }

  recycleBehind(traveled) {
    for (const list of [this.orbs, this.gates, this.enemies]) {
      for (const item of list) {
        if (item.alive && item.pathDist < traveled - 25) {
          item.alive = false;
          item.mesh.visible = false;
        }
      }
    }
  }

  update(dt, path, traveled, shipPos, difficulty) {
    this.time += dt;
    for (const orb of this.orbs) {
      if (!orb.alive) continue;
      orb.mesh.material.uniforms.uTime.value = this.time;
      orb.mesh.rotation.y += dt * 1.4;
      orb.mesh.position.y += Math.sin(this.time * 3 + orb.pathDist) * dt * 0.4;
    }
    for (const gate of this.gates) {
      if (!gate.alive) continue;
      gate.mesh.rotation.z += dt * 1.2;
      const sample = path.sample(gate.pathDist);
      gate.mesh.position.copy(sample.pos);
      gate.mesh.lookAt(sample.pos.clone().add(sample.tangent));
    }
    for (const en of this.enemies) {
      if (!en.alive) continue;
      en.mesh.rotation.y += dt * 1.6;
      const sample = path.sample(en.pathDist);
      const frame = createFrenet(sample.tangent);
      const wobble = Math.sin(this.time * 1.7 + en.pathDist) * 2.2;
      en.mesh.position.copy(sample.pos)
        .addScaledVector(frame.binormal, (en.offset?.x || 0) + wobble)
        .addScaledVector(frame.normal, en.offset?.y || 0);
      en.cooldown -= dt;
      if (en.cooldown <= 0 && en.mesh.position.distanceTo(shipPos) < 70) {
        this.enemyFire(en.mesh.position, shipPos);
        en.cooldown = Math.max(0.7, 1.6 - difficulty * 0.12);
      }
    }
    if (this.boss?.alive) {
      this.boss.mesh.rotation.x += dt * 0.4;
      this.boss.mesh.rotation.y += dt * 0.7;
      this.boss.shell.rotation.z -= dt * 0.9;
      const sample = path.sample(this.boss.pathDist);
      this.boss.mesh.position.copy(sample.pos).add(new THREE.Vector3(0, 2.5, 0));
      this.boss.cooldown -= dt;
      if (this.boss.cooldown <= 0) {
        for (let i = 0; i < 8; i++) {
          const a = (i / 8) * Math.PI * 2 + this.time;
          const dir = new THREE.Vector3(Math.cos(a), Math.sin(a) * 0.4, Math.sin(a * 0.3));
          this.enemyFire(this.boss.mesh.position, this.boss.mesh.position.clone().add(dir));
        }
        this.boss.cooldown = 1.15;
      }
    }

    this._stepProjectiles(this.bullets, dt);
    this._stepProjectiles(this.enemyShots, dt);

    for (let i = this.explosions.length - 1; i >= 0; i--) {
      const ex = this.explosions[i];
      ex.life -= dt;
      for (const s of ex.shards) {
        s.position.addScaledVector(s.userData.vel, dt);
        s.rotation.x += dt * 6;
        s.material.opacity = Math.max(0, ex.life * 2);
      }
      ex.flash.intensity = Math.max(0, ex.life * 36);
      if (ex.life <= 0) {
        this.scene.remove(ex.group, ex.flash);
        this.explosions.splice(i, 1);
      }
    }
  }

  _stepProjectiles(list, dt) {
    for (const b of list) {
      if (!b.alive) continue;
      b.life -= dt;
      b.mesh.position.addScaledVector(b.vel, dt);
      if (b.life <= 0) {
        b.alive = false;
        b.mesh.visible = false;
      }
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
    const got = [];
    for (const gate of this.gates) {
      if (!gate.alive || gate.passed) continue;
      if (gate.mesh.position.distanceTo(shipPos) < 5.4) {
        gate.passed = true;
        gate.alive = false;
        gate.mesh.visible = false;
        got.push(gate);
      }
    }
    return got;
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

  bulletHits() {
    const kills = [];
    for (const b of this.bullets) {
      if (!b.alive) continue;
      for (const en of this.enemies) {
        if (!en.alive) continue;
        if (b.mesh.position.distanceTo(en.mesh.position) < en.radius + 0.6) {
          b.alive = false;
          b.mesh.visible = false;
          en.hp -= 1;
          if (en.hp <= 0) {
            en.alive = false;
            en.mesh.visible = false;
            kills.push({ pos: en.mesh.position.clone(), boss: false });
          }
          break;
        }
      }
      if (b.alive && this.boss?.alive) {
        if (b.mesh.position.distanceTo(this.boss.mesh.position) < this.boss.radius) {
          b.alive = false;
          b.mesh.visible = false;
          this.boss.hp -= 1;
          if (this.boss.hp <= 0) {
            this.boss.alive = false;
            this.boss.mesh.visible = false;
            kills.push({ pos: this.boss.mesh.position.clone(), boss: true });
          }
        }
      }
    }
    return kills;
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
