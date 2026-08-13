import * as THREE from 'three';
import { trailVertex, trailFragment, hullVertex, hullFragment } from './shaders.js';

function hullMaterial(color, rim) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uRim: { value: new THREE.Color(rim) },
      uLightDir: { value: new THREE.Vector3(0.4, 0.7, 0.5).normalize() },
    },
    vertexShader: hullVertex,
    fragmentShader: hullFragment,
  });
}

export function createShip() {
  const group = new THREE.Group();
  group.scale.setScalar(2.35);

  const hullMat = hullMaterial('#9eb6d8', '#7cf0ff');
  const accentMat = hullMaterial('#3a2458', '#ff64e8');
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x9be7ff,
    transparent: true,
    opacity: 0.95,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const glassMat = new THREE.MeshBasicMaterial({
    color: 0xb8f0ff,
    transparent: true,
    opacity: 0.9,
  });
  const trimMat = new THREE.MeshBasicMaterial({ color: 0x5ce1ff });

  const body = new THREE.Mesh(new THREE.ConeGeometry(0.48, 2.8, 6), hullMat);
  body.rotation.x = -Math.PI / 2;
  group.add(body);

  const mid = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.28, 1.55), accentMat);
  mid.position.z = 0.15;
  group.add(mid);

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), glassMat);
  cockpit.scale.set(1, 0.72, 1.45);
  cockpit.position.set(0, 0.22, -0.2);
  group.add(cockpit);

  const wing = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 0.85), hullMat);
  wing.position.set(0, -0.06, 0.5);
  group.add(wing);

  const wingEdge = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.03, 0.08), trimMat);
  wingEdge.position.set(0, -0.04, 0.12);
  group.add(wingEdge);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.72, 0.8), hullMat);
  fin.position.set(0, 0.38, 0.6);
  group.add(fin);

  const engineL = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 0.78, 12), accentMat);
  engineL.rotation.x = Math.PI / 2;
  engineL.position.set(-0.46, -0.08, 1.12);
  const engineR = engineL.clone();
  engineR.position.x = 0.46;
  group.add(engineL, engineR);

  const exhaustL = new THREE.Mesh(new THREE.ConeGeometry(0.2, 1.35, 12), glowMat);
  exhaustL.rotation.x = Math.PI / 2;
  exhaustL.position.set(-0.46, -0.08, 1.72);
  const exhaustR = exhaustL.clone();
  exhaustR.position.x = 0.46;
  group.add(exhaustL, exhaustR);

  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(0.85, 20, 16),
    new THREE.MeshBasicMaterial({
      color: 0x5ce1ff,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  halo.position.z = 0.4;
  group.add(halo);

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.16, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xff3bd4 })
  );
  core.position.set(0, 0.02, 0.9);
  group.add(core);

  const lightL = new THREE.PointLight(0x5ce1ff, 10, 32, 2);
  lightL.position.set(-0.46, -0.08, 1.4);
  const lightR = new THREE.PointLight(0x5ce1ff, 10, 32, 2);
  lightR.position.set(0.46, -0.08, 1.4);
  const nose = new THREE.PointLight(0xff64e8, 5, 22, 2);
  nose.position.set(0, 0.12, -1.2);
  group.add(lightL, lightR, nose);

  return { group, exhausts: [exhaustL, exhaustR], lights: [lightL, lightR], core, halo };
}

export class EngineTrail {
  constructor(scene, max = 56) {
    this.max = max;
    this.history = [];
    const positions = new Float32Array(max * 3);
    const colors = new Float32Array(max * 3);
    const alphas = new Float32Array(max);
    this.geo = new THREE.BufferGeometry();
    this.geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.geo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
    this.geo.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));
    this.mat = new THREE.ShaderMaterial({
      vertexShader: trailVertex,
      fragmentShader: trailFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.line = new THREE.Line(this.geo, this.mat);
    scene.add(this.line);
    this.positions = positions;
    this.colors = colors;
    this.alphas = alphas;
  }

  push(point, boost) {
    this.history.unshift(point.clone());
    if (this.history.length > this.max) this.history.pop();
    const n = this.history.length;
    for (let i = 0; i < n; i++) {
      const p = this.history[i];
      this.positions[i * 3] = p.x;
      this.positions[i * 3 + 1] = p.y;
      this.positions[i * 3 + 2] = p.z;
      const t = 1 - i / this.max;
      this.colors[i * 3] = boost > 0.4 ? 1.0 : 0.35 * t;
      this.colors[i * 3 + 1] = 0.75 * t;
      this.colors[i * 3 + 2] = 1.0 * t;
      this.alphas[i] = 0.55 * t;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aColor.needsUpdate = true;
    this.geo.attributes.aAlpha.needsUpdate = true;
    this.geo.setDrawRange(0, n);
  }
}
