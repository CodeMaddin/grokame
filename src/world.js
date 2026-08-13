import * as THREE from 'three';
import {
  crystalVertex,
  crystalFragment,
  riftVertex,
  riftFragment,
  nebulaVertex,
  nebulaFragment,
  planetVertex,
  planetFragment,
  atmosphereVertex,
  atmosphereFragment,
  particleVertex,
  particleFragment,
} from './shaders.js';
import { mulberry32, createFrenet } from './math.js';

const CRYSTAL_COUNT = 90;
const DUST_COUNT = 1800;
const SPORE_COUNT = 700;

export class World {
  constructor(scene) {
    this.scene = scene;
    this.time = 0;
    this.crystals = [];
    this.crystalData = [];
    this.lightPos = Array.from({ length: 6 }, () => new THREE.Vector3());
    this.lightColor = Array.from({ length: 6 }, () => new THREE.Vector3(1, 1, 1));
    this.lightInt = new Float32Array(6);
    this.crystalMat = this._crystalMaterial();

    this._chapterId = 'default';
    this._chapterT = 1;
    this._chapterFrom = this._palette('default');
    this._chapterTo = this._chapterFrom;
    this._addSky();
    this._addPlanet();
    this._addSun();
    this._addDust();
    this._addSpores();
    this._buildCrystals();
  }

  _palette(id) {
    const palettes = {
      default: {
        skyA: new THREE.Color('#3a0a58'),
        skyB: new THREE.Color('#0b3d6a'),
        skyC: new THREE.Color('#ff3bd4'),
        ribbonA: new THREE.Color('#5ce1ff'),
        ribbonB: new THREE.Color('#ff3bd4'),
        fog: new THREE.Color('#12051f'),
        crystal: new THREE.Color('#6a3cff'),
        glow: new THREE.Color('#7cf0ff'),
        sun: new THREE.Color('#ffe6c4'),
        ambient: new THREE.Color('#3a1a58'),
      },
      queen: {
        skyA: new THREE.Color('#4a0528'),
        skyB: new THREE.Color('#1a0840'),
        skyC: new THREE.Color('#ff3bd4'),
        ribbonA: new THREE.Color('#ff64e8'),
        ribbonB: new THREE.Color('#5ce1ff'),
        fog: new THREE.Color('#220818'),
        crystal: new THREE.Color('#9b2bff'),
        glow: new THREE.Color('#ff64e8'),
        sun: new THREE.Color('#ffb0d8'),
        ambient: new THREE.Color('#4a1238'),
      },
      warden: {
        skyA: new THREE.Color('#3a1808'),
        skyB: new THREE.Color('#1a0a28'),
        skyC: new THREE.Color('#ffd166'),
        ribbonA: new THREE.Color('#ffd166'),
        ribbonB: new THREE.Color('#ff8a1a'),
        fog: new THREE.Color('#1a0c08'),
        crystal: new THREE.Color('#5a1a8a'),
        glow: new THREE.Color('#ffd166'),
        sun: new THREE.Color('#ffd9a0'),
        ambient: new THREE.Color('#3a2210'),
      },
      coil: {
        skyA: new THREE.Color('#4a0a10'),
        skyB: new THREE.Color('#2a0818'),
        skyC: new THREE.Color('#ff6a3a'),
        ribbonA: new THREE.Color('#ff8a3a'),
        ribbonB: new THREE.Color('#ff3bd4'),
        fog: new THREE.Color('#180608'),
        crystal: new THREE.Color('#ff5a2a'),
        glow: new THREE.Color('#ffb07a'),
        sun: new THREE.Color('#ffc8a0'),
        ambient: new THREE.Color('#3a1210'),
      },
      empress: {
        skyA: new THREE.Color('#2a0428'),
        skyB: new THREE.Color('#120830'),
        skyC: new THREE.Color('#ffd166'),
        ribbonA: new THREE.Color('#ff3bd4'),
        ribbonB: new THREE.Color('#ffd166'),
        fog: new THREE.Color('#140414'),
        crystal: new THREE.Color('#ff64e8'),
        glow: new THREE.Color('#ffe29a'),
        sun: new THREE.Color('#ffd0ea'),
        ambient: new THREE.Color('#3a0a30'),
      },
      finale: {
        skyA: new THREE.Color('#081828'),
        skyB: new THREE.Color('#2a0548'),
        skyC: new THREE.Color('#5ce1ff'),
        ribbonA: new THREE.Color('#5ce1ff'),
        ribbonB: new THREE.Color('#ffd166'),
        fog: new THREE.Color('#081018'),
        crystal: new THREE.Color('#1f6dff'),
        glow: new THREE.Color('#9be7ff'),
        sun: new THREE.Color('#c8e8ff'),
        ambient: new THREE.Color('#1a2858'),
      },
    };
    return palettes[id] || palettes.default;
  }

  setChapter(id) {
    const next = id || 'default';
    if (this._chapterId === next && this._chapterT >= 1) return;
    if (this._chapterId === next) return;
    this._chapterFrom = this._sampleChapter();
    this._chapterTo = this._palette(next);
    this._chapterId = next;
    this._chapterT = 0;
  }

  _sampleChapter() {
    const t = this._chapterT ?? 1;
    const a = this._chapterFrom || this._palette('default');
    const b = this._chapterTo || a;
    const mix = (from, to) => new THREE.Color().lerpColors(from, to, t);
    return {
      skyA: mix(a.skyA, b.skyA),
      skyB: mix(a.skyB, b.skyB),
      skyC: mix(a.skyC, b.skyC),
      ribbonA: mix(a.ribbonA, b.ribbonA),
      ribbonB: mix(a.ribbonB, b.ribbonB),
      fog: mix(a.fog, b.fog),
      crystal: mix(a.crystal, b.crystal),
      glow: mix(a.glow, b.glow),
      sun: mix(a.sun, b.sun),
      ambient: mix(a.ambient, b.ambient),
    };
  }

  _applyChapter(t) {
    const a = this._chapterFrom;
    const b = this._chapterTo;
    if (!a || !b) return;
    this.skyMat.uniforms.uA.value.lerpColors(a.skyA, b.skyA, t);
    this.skyMat.uniforms.uB.value.lerpColors(a.skyB, b.skyB, t);
    this.skyMat.uniforms.uC.value.lerpColors(a.skyC, b.skyC, t);
    if (this.ribbonMat) {
      this.ribbonMat.uniforms.uColorA.value.lerpColors(a.ribbonA, b.ribbonA, t);
      this.ribbonMat.uniforms.uColorB.value.lerpColors(a.ribbonB, b.ribbonB, t);
    }
    if (this.sunLight) this.sunLight.color.lerpColors(a.sun, b.sun, t);
    if (this._ambient) this._ambient.color.lerpColors(a.ambient, b.ambient, t);
    const fog = new THREE.Color().lerpColors(a.fog, b.fog, t);
    const glow = new THREE.Color().lerpColors(a.glow, b.glow, t);
    for (const mesh of this.crystals) {
      mesh.material.uniforms.uFogColor.value.copy(fog);
      mesh.material.uniforms.uGlow.value.copy(glow);
    }
  }

  _crystalMaterial() {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color('#6a3cff') },
        uGlow: { value: new THREE.Color('#7cf0ff') },
        uLightPos: { value: this.lightPos },
        uLightColor: { value: this.lightColor },
        uLightInt: { value: this.lightInt },
        uFogColor: { value: new THREE.Color('#12051f') },
        uFogDensity: { value: 0.0048 },
      },
      vertexShader: crystalVertex,
      fragmentShader: crystalFragment,
      transparent: true,
      depthWrite: true,
    });
  }

  _addSky() {
    const geo = new THREE.SphereGeometry(900, 48, 32);
    this.skyMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uA: { value: new THREE.Color('#3a0a58') },
        uB: { value: new THREE.Color('#0b3d6a') },
        uC: { value: new THREE.Color('#ff3bd4') },
      },
      vertexShader: nebulaVertex,
      fragmentShader: nebulaFragment,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });
    this.sky = new THREE.Mesh(geo, this.skyMat);
    this.scene.add(this.sky);
  }

  _addPlanet() {
    this.planetGroup = new THREE.Group();
    const planetMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uLightDir: { value: new THREE.Vector3(0.45, 0.35, 0.82).normalize() },
      },
      vertexShader: planetVertex,
      fragmentShader: planetFragment,
    });
    this.planet = new THREE.Mesh(new THREE.SphereGeometry(70, 64, 48), planetMat);
    const atmoMat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color('#66a0ff') } },
      vertexShader: atmosphereVertex,
      fragmentShader: atmosphereFragment,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.BackSide,
    });
    this.atmo = new THREE.Mesh(new THREE.SphereGeometry(82, 48, 32), atmoMat);
    this.planetGroup.add(this.planet, this.atmo);
    this.scene.add(this.planetGroup);
    this.planetMat = planetMat;
  }

  _addSun() {
    this.sun = new THREE.Mesh(
      new THREE.SphereGeometry(10, 24, 16),
      new THREE.MeshBasicMaterial({ color: 0xfff1c2 })
    );
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(18, 24, 16),
      new THREE.MeshBasicMaterial({
        color: 0xffc14a,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    this.sun.add(halo);
    this.scene.add(this.sun);
    this.sunLight = new THREE.DirectionalLight(0xffe6c4, 1.4);
    this.scene.add(this.sunLight);
    this._ambient = new THREE.AmbientLight(0x3a1a58, 0.35);
    this.scene.add(this._ambient);
  }

  _addDust() {
    const pos = new Float32Array(DUST_COUNT * 3);
    const color = new Float32Array(DUST_COUNT * 3);
    const size = new Float32Array(DUST_COUNT);
    const seed = new Float32Array(DUST_COUNT);
    const rng = mulberry32(0x51ce);
    for (let i = 0; i < DUST_COUNT; i++) {
      pos[i * 3] = (rng() - 0.5) * 520;
      pos[i * 3 + 1] = (rng() - 0.5) * 280;
      pos[i * 3 + 2] = -rng() * 1600;
      const tint = rng();
      color[i * 3] = tint > 0.7 ? 1.0 : 0.45;
      color[i * 3 + 1] = tint > 0.7 ? 0.55 : 0.85;
      color[i * 3 + 2] = tint > 0.7 ? 0.95 : 1.0;
      size[i] = 0.6 + rng() * 2.4;
      seed[i] = rng() * 100;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(color, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    this.dustMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: particleVertex,
      fragmentShader: particleFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.dust = new THREE.Points(geo, this.dustMat);
    this.scene.add(this.dust);
  }

  _addSpores() {
    const pos = new Float32Array(SPORE_COUNT * 3);
    const color = new Float32Array(SPORE_COUNT * 3);
    const size = new Float32Array(SPORE_COUNT);
    const seed = new Float32Array(SPORE_COUNT);
    const rng = mulberry32(0x77a1);
    for (let i = 0; i < SPORE_COUNT; i++) {
      pos[i * 3] = (rng() - 0.5) * 80;
      pos[i * 3 + 1] = (rng() - 0.5) * 50;
      pos[i * 3 + 2] = -rng() * 400;
      color[i * 3] = 0.3 + rng() * 0.4;
      color[i * 3 + 1] = 0.8 + rng() * 0.2;
      color[i * 3 + 2] = 1.0;
      size[i] = 1.5 + rng() * 3.5;
      seed[i] = rng() * 80;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('aColor', new THREE.BufferAttribute(color, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(size, 1));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    this.sporeMat = this.dustMat.clone();
    this.spores = new THREE.Points(geo, this.sporeMat);
    this.scene.add(this.spores);
    this.sporeOrigins = pos;
  }

  _buildCrystals() {
    const geos = [
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.ConeGeometry(0.7, 2.4, 5),
    ];
    const palettes = [
      { color: '#4b2dff', glow: '#66f0ff' },
      { color: '#9b2bff', glow: '#ff64e8' },
      { color: '#1f6dff', glow: '#9be7ff' },
      { color: '#5a1a8a', glow: '#ffd166' },
    ];
    for (let i = 0; i < CRYSTAL_COUNT; i++) {
      const mat = this.crystalMat.clone();
      mat.uniforms = THREE.UniformsUtils.clone(this.crystalMat.uniforms);
      const pal = palettes[i % palettes.length];
      mat.uniforms.uColor.value = new THREE.Color(pal.color);
      mat.uniforms.uGlow.value = new THREE.Color(pal.glow);
      mat.uniforms.uLightPos.value = this.lightPos;
      mat.uniforms.uLightColor.value = this.lightColor;
      mat.uniforms.uLightInt.value = this.lightInt;
      const mesh = new THREE.Mesh(geos[i % geos.length], mat);
      mesh.scale.setScalar(1.4 + (i % 7) * 0.55);
      this.scene.add(mesh);
      this.crystals.push(mesh);
      this.crystalData.push({
        radius: 1.6 * mesh.scale.x,
        spin: 0.15 + (i % 5) * 0.08,
        placed: false,
        pathDist: 0,
      });
    }
  }

  attachRibbon(geometry) {
    if (this.ribbon) {
      this.ribbon.geometry.dispose();
      this.ribbon.geometry = geometry;
      return;
    }
    this.ribbonMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color('#5ce1ff') },
        uColorB: { value: new THREE.Color('#ff3bd4') },
      },
      vertexShader: riftVertex,
      fragmentShader: riftFragment,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.ribbon = new THREE.Mesh(geometry, this.ribbonMat);
    this.scene.add(this.ribbon);
  }

  layoutFromPath(path, traveled, laneLimit = 24) {
    const rng = mulberry32(0x91d + Math.floor(traveled / 80));
    const rim = laneLimit + 16;
    for (let i = 0; i < this.crystals.length; i++) {
      const dist = traveled + 40 + i * 22 + rng() * 10;
      const sample = path.sample(dist);
      const frame = createFrenet(sample.tangent);
      const ang = rng() * Math.PI * 2;
      const rad = rim + rng() * 18;
      const mesh = this.crystals[i];
      mesh.position.copy(sample.pos)
        .addScaledVector(frame.normal, Math.cos(ang) * rad)
        .addScaledVector(frame.binormal, Math.sin(ang) * rad);
      mesh.lookAt(sample.pos);
      this.crystalData[i].pathDist = dist;
      this.crystalData[i].placed = true;
      this.crystalData[i].radius = 1.35 * Math.max(mesh.scale.x, mesh.scale.y);
    }
  }

  recycleCrystals(path, traveled, laneLimit = 24) {
    const rim = laneLimit + 16;
    for (let i = 0; i < this.crystals.length; i++) {
      const data = this.crystalData[i];
      if (data.pathDist < traveled - 30) {
        const dist = traveled + 380 + Math.random() * 220;
        const sample = path.sample(dist);
        const frame = createFrenet(sample.tangent);
        const ang = Math.random() * Math.PI * 2;
        const rad = rim + Math.random() * 18;
        this.crystals[i].position.copy(sample.pos)
          .addScaledVector(frame.normal, Math.cos(ang) * rad)
          .addScaledVector(frame.binormal, Math.sin(ang) * rad);
        this.crystals[i].lookAt(sample.pos);
        data.pathDist = dist;
      }
    }
  }

  setLights(entries) {
    for (let i = 0; i < 6; i++) {
      const e = entries[i];
      if (!e) {
        this.lightInt[i] = 0;
        continue;
      }
      this.lightPos[i].copy(e.pos);
      this.lightColor[i].set(e.color.r, e.color.g, e.color.b);
      this.lightInt[i] = e.intensity;
    }
  }

  update(dt, camera, traveled) {
    this.time += dt;
    if (this._chapterT < 1) {
      this._chapterT = Math.min(1, this._chapterT + dt * 0.42);
      this._applyChapter(this._chapterT);
    }
    this.skyMat.uniforms.uTime.value = this.time;
    this.planetMat.uniforms.uTime.value = this.time;
    if (this.ribbonMat) this.ribbonMat.uniforms.uTime.value = this.time;
    this.dustMat.uniforms.uTime.value = this.time;
    this.sporeMat.uniforms.uTime.value = this.time;
    for (const mesh of this.crystals) {
      mesh.material.uniforms.uTime.value = this.time;
      mesh.rotation.y += dt * 0.25;
      mesh.rotation.x += dt * 0.08;
    }

    this.sky.position.copy(camera.position);
    this.planetGroup.position.copy(camera.position).add(new THREE.Vector3(-180, 40, -260));
    this.planet.rotation.y += dt * 0.03;
    this.sun.position.copy(camera.position).add(new THREE.Vector3(220, 90, -180));
    this.sunLight.position.copy(this.sun.position);
    this.dust.position.copy(camera.position);

    const sporePos = this.spores.geometry.attributes.position;
    for (let i = 0; i < SPORE_COUNT; i++) {
      let z = sporePos.getZ(i) + dt * (18 + (i % 5) * 4);
      if (z > 20) z -= 420;
      sporePos.setZ(i, z);
      sporePos.setY(i, sporePos.getY(i) + Math.sin(this.time + i) * dt * 0.6);
    }
    sporePos.needsUpdate = true;
    this.spores.position.copy(camera.position);
    this.spores.position.z = camera.position.z;
  }

  hitTest(point, radius) {
    for (let i = 0; i < this.crystals.length; i++) {
      const d = this.crystals[i].position.distanceTo(point);
      if (d < radius + this.crystalData[i].radius) return this.crystals[i];
    }
    return null;
  }
}
