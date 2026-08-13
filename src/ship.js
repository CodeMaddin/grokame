import * as THREE from 'three';
import { trailVertex, trailFragment } from './shaders.js';

export function createShip() {
  const group = new THREE.Group();

  const hullMat = new THREE.MeshStandardMaterial({
    color: 0x0c1020,
    metalness: 0.92,
    roughness: 0.22,
    envMapIntensity: 1.4,
  });
  const accentMat = new THREE.MeshStandardMaterial({
    color: 0x1a1030,
    metalness: 0.85,
    roughness: 0.28,
    emissive: 0x3a1060,
    emissiveIntensity: 0.35,
  });
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x5ce1ff,
    transparent: true,
    opacity: 0.95,
  });
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x7cf0ff,
    metalness: 0.2,
    roughness: 0.05,
    emissive: 0x1188ff,
    emissiveIntensity: 1.6,
    transparent: true,
    opacity: 0.85,
  });

  const body = new THREE.Mesh(new THREE.ConeGeometry(0.42, 2.6, 6), hullMat);
  body.rotation.x = -Math.PI / 2;
  group.add(body);

  const mid = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.22, 1.4), accentMat);
  mid.position.z = 0.2;
  group.add(mid);

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), glassMat);
  cockpit.scale.set(1, 0.7, 1.4);
  cockpit.position.set(0, 0.18, -0.15);
  group.add(cockpit);

  const wingGeo = new THREE.BoxGeometry(1.7, 0.06, 0.7);
  const wing = new THREE.Mesh(wingGeo, hullMat);
  wing.position.set(0, -0.05, 0.45);
  wing.rotation.z = 0;
  group.add(wing);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.55, 0.7), hullMat);
  fin.position.set(0, 0.28, 0.55);
  group.add(fin);

  const engineL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.18, 0.7, 12), accentMat);
  engineL.rotation.x = Math.PI / 2;
  engineL.position.set(-0.38, -0.08, 1.05);
  const engineR = engineL.clone();
  engineR.position.x = 0.38;
  group.add(engineL, engineR);

  const exhaustL = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.1, 12), glowMat);
  exhaustL.rotation.x = Math.PI / 2;
  exhaustL.position.set(-0.38, -0.08, 1.55);
  const exhaustR = exhaustL.clone();
  exhaustR.position.x = 0.38;
  group.add(exhaustL, exhaustR);

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 12, 10),
    new THREE.MeshBasicMaterial({ color: 0xff3bd4 })
  );
  core.position.set(0, 0, 0.85);
  group.add(core);

  const lightL = new THREE.PointLight(0x5ce1ff, 8, 28, 2);
  lightL.position.set(-0.38, -0.08, 1.35);
  const lightR = new THREE.PointLight(0x5ce1ff, 8, 28, 2);
  lightR.position.set(0.38, -0.08, 1.35);
  const nose = new THREE.PointLight(0xff64e8, 3.5, 18, 2);
  nose.position.set(0, 0.1, -1.1);
  group.add(lightL, lightR, nose);

  group.traverse((obj) => {
    if (obj.isMesh) {
      obj.castShadow = false;
      obj.receiveShadow = false;
    }
  });

  return { group, exhausts: [exhaustL, exhaustR], lights: [lightL, lightR], core };
}

export class EngineTrail {
  constructor(scene, max = 80) {
    this.max = max;
    this.head = 0;
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
    const i = this.head % this.max;
    this.positions[i * 3] = point.x;
    this.positions[i * 3 + 1] = point.y;
    this.positions[i * 3 + 2] = point.z;
    this.colors[i * 3] = boost > 0.4 ? 1.0 : 0.35;
    this.colors[i * 3 + 1] = 0.7;
    this.colors[i * 3 + 2] = 1.0;
    this.alphas[i] = 0.85;
    this.head++;
    for (let n = 0; n < this.max; n++) {
      this.alphas[n] *= 0.96;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aColor.needsUpdate = true;
    this.geo.attributes.aAlpha.needsUpdate = true;
    this.geo.setDrawRange(0, Math.min(this.head, this.max));
  }
}
