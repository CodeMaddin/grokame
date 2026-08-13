import * as THREE from 'three';
import { trailVertex, trailFragment, hullVertex, hullFragment } from './shaders.js';

function hullMaterial(color, rim) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uRim: { value: new THREE.Color(rim) },
      uLightDir: { value: new THREE.Vector3(0.35, 0.8, 0.4).normalize() },
    },
    vertexShader: hullVertex,
    fragmentShader: hullFragment,
  });
}

function addEdges(mesh, color = 0x9be7ff) {
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(mesh.geometry, 18),
    new THREE.LineBasicMaterial({ color })
  );
  mesh.add(edges);
}

export function createShip() {
  const group = new THREE.Group();
  group.scale.setScalar(3.1);

  const hullMat = hullMaterial('#647a9a', '#7ad8ff');
  const darkMat = hullMaterial('#2a3348', '#ff7ae0');
  const engineMat = new THREE.MeshBasicMaterial({ color: 0x9be7ff });
  const cockpitMat = new THREE.MeshBasicMaterial({ color: 0x8ce7ff });

  const body = new THREE.Mesh(new THREE.ConeGeometry(0.42, 2.9, 5), hullMat);
  body.rotation.x = -Math.PI / 2;
  addEdges(body);
  group.add(body);

  const fuselage = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.28, 1.9), darkMat);
  fuselage.position.z = 0.1;
  addEdges(fuselage, 0xff9be0);
  group.add(fuselage);

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10), cockpitMat);
  cockpit.scale.set(1, 0.62, 1.35);
  cockpit.position.set(0, 0.2, -0.35);
  group.add(cockpit);

  const wing = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.07, 0.95), hullMat);
  wing.position.set(0, -0.08, 0.55);
  addEdges(wing);
  group.add(wing);

  const wingSweep = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.05, 0.18), engineMat);
  wingSweep.position.set(0, -0.05, 0.18);
  group.add(wingSweep);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.78, 0.7), hullMat);
  fin.position.set(0, 0.42, 0.7);
  addEdges(fin);
  group.add(fin);

  const engineL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 0.55, 10), darkMat);
  engineL.rotation.x = Math.PI / 2;
  engineL.position.set(-0.55, -0.1, 1.15);
  const engineR = engineL.clone();
  engineR.position.x = 0.55;
  group.add(engineL, engineR);

  const exhaustL = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), engineMat);
  exhaustL.position.set(-0.55, -0.1, 1.42);
  const exhaustR = exhaustL.clone();
  exhaustR.position.x = 0.55;
  group.add(exhaustL, exhaustR);

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 10, 8),
    new THREE.MeshBasicMaterial({ color: 0xff5ad4 })
  );
  core.position.set(0, 0.05, 0.85);
  group.add(core);

  const lightL = new THREE.PointLight(0x5ce1ff, 3.5, 18, 2);
  lightL.position.set(-0.55, -0.1, 1.35);
  const lightR = new THREE.PointLight(0x5ce1ff, 3.5, 18, 2);
  lightR.position.set(0.55, -0.1, 1.35);
  const nose = new THREE.PointLight(0xff64e8, 2.2, 14, 2);
  nose.position.set(0, 0.15, -1.3);
  group.add(lightL, lightR, nose);

  return { group, exhausts: [exhaustL, exhaustR], lights: [lightL, lightR], core };
}

export class EngineTrail {
  constructor(scene, max = 40) {
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
      this.colors[i * 3] = (boost > 0.4 ? 0.7 : 0.2) * t;
      this.colors[i * 3 + 1] = 0.45 * t;
      this.colors[i * 3 + 2] = 0.7 * t;
      this.alphas[i] = 0.28 * t;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.aColor.needsUpdate = true;
    this.geo.attributes.aAlpha.needsUpdate = true;
    this.geo.setDrawRange(0, n);
  }
}
