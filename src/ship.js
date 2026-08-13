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

  const rig = new THREE.Group();
  group.add(rig);

  const hullMat = hullMaterial('#647a9a', '#7ad8ff');
  const darkMat = hullMaterial('#2a3348', '#ff7ae0');
  const accentMat = hullMaterial('#1a2238', '#5ce1ff');
  const engineMat = new THREE.MeshBasicMaterial({ color: 0x9be7ff });
  const cockpitMat = new THREE.MeshBasicMaterial({ color: 0x8ce7ff });
  const goldMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
  const magMat = new THREE.MeshBasicMaterial({ color: 0xff64e8 });

  const body = new THREE.Mesh(new THREE.ConeGeometry(0.42, 2.9, 6), hullMat);
  body.rotation.x = -Math.PI / 2;
  addEdges(body);
  rig.add(body);

  const fuselage = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.28, 1.9), darkMat);
  fuselage.position.z = 0.1;
  addEdges(fuselage, 0xff9be0);
  rig.add(fuselage);

  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.16, 2.35), accentMat);
  spine.position.set(0, 0.18, 0.05);
  rig.add(spine);

  const belly = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.12, 1.55), darkMat);
  belly.position.set(0, -0.22, 0.2);
  addEdges(belly, 0x5ce1ff);
  rig.add(belly);

  const cockpit = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10), cockpitMat);
  cockpit.scale.set(1, 0.62, 1.35);
  cockpit.position.set(0, 0.2, -0.35);
  rig.add(cockpit);

  const canopyRail = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.05, 0.85), goldMat);
  canopyRail.position.set(0, 0.32, -0.28);
  rig.add(canopyRail);

  const wing = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.07, 0.95), hullMat);
  wing.position.set(0, -0.08, 0.55);
  addEdges(wing);
  rig.add(wing);

  const wingSweep = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.05, 0.18), engineMat);
  wingSweep.position.set(0, -0.05, 0.18);
  rig.add(wingSweep);

  const strakeL = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.05, 0.42), accentMat);
  strakeL.position.set(-0.85, -0.02, -0.35);
  strakeL.rotation.y = 0.35;
  const strakeR = strakeL.clone();
  strakeR.position.x = 0.85;
  strakeR.rotation.y = -0.35;
  rig.add(strakeL, strakeR);

  const canardL = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.045, 0.28), hullMat);
  canardL.position.set(-0.55, 0.02, -0.95);
  canardL.rotation.z = 0.18;
  const canardR = canardL.clone();
  canardR.position.x = 0.55;
  canardR.rotation.z = -0.18;
  addEdges(canardL);
  addEdges(canardR);
  rig.add(canardL, canardR);

  const gunPodL = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.7, 8), darkMat);
  gunPodL.rotation.x = Math.PI / 2;
  gunPodL.position.set(-0.38, -0.12, -0.85);
  const gunPodR = gunPodL.clone();
  gunPodR.position.x = 0.38;
  rig.add(gunPodL, gunPodR);

  const tipL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.45), accentMat);
  tipL.position.set(-1.55, -0.06, 0.42);
  const tipR = tipL.clone();
  tipR.position.x = 1.55;
  rig.add(tipL, tipR);

  const lightCapL = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), magMat);
  lightCapL.position.set(-1.62, -0.04, 0.18);
  const lightCapR = lightCapL.clone();
  lightCapR.position.x = 1.62;
  lightCapR.material = goldMat;
  rig.add(lightCapL, lightCapR);

  const fin = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.78, 0.7), hullMat);
  fin.position.set(0, 0.42, 0.7);
  addEdges(fin);
  rig.add(fin);

  const finCap = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.12, 0.55), engineMat);
  finCap.position.set(0, 0.82, 0.62);
  rig.add(finCap);

  const engineL = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 0.55, 10), darkMat);
  engineL.rotation.x = Math.PI / 2;
  engineL.position.set(-0.55, -0.1, 1.15);
  const engineR = engineL.clone();
  engineR.position.x = 0.55;
  rig.add(engineL, engineR);

  const nozzleL = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 0.22, 8), accentMat);
  nozzleL.rotation.x = Math.PI / 2;
  nozzleL.position.set(-0.55, -0.1, 1.38);
  const nozzleR = nozzleL.clone();
  nozzleR.position.x = 0.55;
  rig.add(nozzleL, nozzleR);

  const exhaustL = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), engineMat);
  exhaustL.position.set(-0.55, -0.1, 1.42);
  const exhaustR = exhaustL.clone();
  exhaustR.position.x = 0.55;
  rig.add(exhaustL, exhaustR);

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 10, 8),
    new THREE.MeshBasicMaterial({ color: 0xff5ad4 })
  );
  core.position.set(0, 0.05, 0.85);
  rig.add(core);

  const muzzle = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 10, 8),
    new THREE.MeshBasicMaterial({
      color: 0xc8fff6,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  muzzle.position.set(0, -0.02, -1.52);
  const muzzleSpike = new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.08, 0.85),
    new THREE.MeshBasicMaterial({
      color: 0x9be7ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
  );
  muzzleSpike.position.set(0, -0.02, -1.85);
  rig.add(muzzle, muzzleSpike);

  const lightL = new THREE.PointLight(0x5ce1ff, 3.5, 18, 2);
  lightL.position.set(-0.55, -0.1, 1.35);
  const lightR = new THREE.PointLight(0x5ce1ff, 3.5, 18, 2);
  lightR.position.set(0.55, -0.1, 1.35);
  const nose = new THREE.PointLight(0xff64e8, 2.2, 14, 2);
  nose.position.set(0, 0.15, -1.3);
  group.add(lightL, lightR, nose);

  return {
    group,
    rig,
    exhausts: [exhaustL, exhaustR],
    lights: [lightL, lightR],
    core,
    muzzle,
    muzzleSpike,
  };
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
