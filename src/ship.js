import * as THREE from 'three';
import { trailVertex, trailFragment, hullVertex, hullFragment } from './shaders.js';
import { MODULES, MODULE_ORDER } from './weapons.js';

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

function kitMat(color, emissive, intensity = 1.6) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.72,
    roughness: 0.28,
    emissive,
    emissiveIntensity: intensity,
  });
}

function kitGlow(color, opacity = 0.7) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

function addKitPart(group, mesh, glowList, extraList, extraAt = 0) {
  group.add(mesh);
  if (mesh.material?.emissive) glowList.push(mesh);
  if (extraAt > 0) {
    mesh.visible = false;
    extraList.push({ mesh, at: extraAt });
  }
  return mesh;
}

function makeKit() {
  return { group: new THREE.Group(), glows: [], extras: [], auras: [] };
}

function buildNeedleKit() {
  const kit = makeKit();
  for (const s of [-1, 1]) {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.05, 1.55, 6), kitMat(0x152030, 0x9be7ff, 1.4));
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(s * 1.05, -0.1, -0.35);
    addKitPart(kit.group, barrel, kit.glows, kit.extras);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.7, 6), kitGlow(0x9be7ff, 0.55));
    beam.rotation.x = Math.PI / 2;
    beam.position.set(s * 1.05, -0.1, -1.15);
    kit.group.add(beam);
    kit.auras.push(beam);
    const outer = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.04, 1.2, 6), kitMat(0x152030, 0x5ce1ff, 1.2));
    outer.rotation.x = Math.PI / 2;
    outer.position.set(s * 1.45, -0.08, -0.15);
    addKitPart(kit.group, outer, kit.glows, kit.extras, 5);
  }
  return kit;
}

function buildSeekerKit() {
  const kit = makeKit();
  for (const s of [-1, 1]) {
    const rack = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.7), kitMat(0x2a1408, 0xff8a4a, 1.3));
    rack.position.set(s * 0.95, -0.22, 0.35);
    addKitPart(kit.group, rack, kit.glows, kit.extras);
    for (let i = 0; i < 3; i++) {
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.055, 0.55, 6), kitMat(0x1a0c08, 0xff8a4a, 1.1));
      tube.rotation.x = Math.PI / 2;
      tube.position.set(s * (0.82 + i * 0.12), -0.28, 0.22);
      addKitPart(kit.group, tube, kit.glows, kit.extras, i === 2 ? 4 : 0);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 6), kitGlow(0xff8a4a, 0.7));
      tip.position.set(s * (0.82 + i * 0.12), -0.28, -0.08);
      kit.group.add(tip);
      kit.auras.push(tip);
    }
  }
  return kit;
}

function buildShardKit() {
  const kit = makeKit();
  for (const [x, y, z] of [[-0.22, 0.12, -1.15], [0.22, 0.12, -1.15], [0, 0.22, -1.05]]) {
    const sh = new THREE.Mesh(new THREE.OctahedronGeometry(0.12, 0), kitMat(0x2a1040, 0xff9bd2, 1.7));
    sh.position.set(x, y, z);
    addKitPart(kit.group, sh, kit.glows, kit.extras);
  }
  const crown = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), kitMat(0x1a0828, 0xff64e8, 2));
  crown.position.set(0, 0.28, -1.25);
  addKitPart(kit.group, crown, kit.glows, kit.extras, 5);
  const aura = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), kitGlow(0xff9bd2, 0.4));
  aura.position.set(0, 0.16, -1.12);
  kit.group.add(aura);
  kit.auras.push(aura);
  return kit;
}

function buildTitanKit() {
  const kit = makeKit();
  const gun = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.22, 1.35, 8), kitMat(0x2a2208, 0xffd166, 1.8));
  gun.rotation.x = Math.PI / 2;
  gun.position.set(0, -0.38, -0.55);
  addKitPart(kit.group, gun, kit.glows, kit.extras);
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.04, 6, 12), kitGlow(0xffd166, 0.8));
  mouth.position.set(0, -0.38, -1.22);
  kit.group.add(mouth);
  kit.auras.push(mouth);
  const brace = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.12, 0.7), kitMat(0x1a1608, 0xff9a3a, 1.2));
  brace.position.set(0, -0.32, -0.15);
  addKitPart(kit.group, brace, kit.glows, kit.extras);
  const twinL = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.9, 6), kitMat(0x2a2208, 0xffe29a, 1.5));
  twinL.rotation.x = Math.PI / 2;
  twinL.position.set(-0.28, -0.36, -0.4);
  const twinR = twinL.clone();
  twinR.position.x = 0.28;
  addKitPart(kit.group, twinL, kit.glows, kit.extras, 4);
  addKitPart(kit.group, twinR, kit.glows, kit.extras, 4);
  return kit;
}

function buildWingKit() {
  const kit = makeKit();
  for (const s of [-1, 1]) {
    const pod = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.12, 0.38), kitMat(0x1a2238, 0xff64e8, 1.5));
    pod.position.set(s * 1.62, -0.04, 0.28);
    pod.rotation.y = s * -0.35;
    addKitPart(kit.group, pod, kit.glows, kit.extras);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.055, 0.7, 6), kitMat(0x140818, 0xff64e8, 1.6));
    barrel.rotation.x = Math.PI / 2;
    barrel.rotation.y = s * -0.4;
    barrel.position.set(s * 1.72, -0.04, 0.02);
    addKitPart(kit.group, barrel, kit.glows, kit.extras);
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), kitGlow(0xff64e8, 0.75));
    glow.position.set(s * 1.82, -0.04, -0.28);
    kit.group.add(glow);
    kit.auras.push(glow);
    const extra = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.55, 6), kitMat(0x140818, 0xff9be0, 1.4));
    extra.rotation.x = Math.PI / 2;
    extra.rotation.y = s * -0.55;
    extra.position.set(s * 1.95, 0.02, 0.12);
    addKitPart(kit.group, extra, kit.glows, kit.extras, 4);
  }
  return kit;
}

function buildHelixKit() {
  const kit = makeKit();
  const coil = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.045, 6, 18), kitMat(0x081018, 0x7af0ff, 1.8));
  coil.rotation.x = Math.PI / 2;
  coil.position.set(0, 0.02, 0.15);
  addKitPart(kit.group, coil, kit.glows, kit.extras);
  const coil2 = coil.clone();
  coil2.position.z = 0.55;
  coil2.scale.setScalar(0.82);
  addKitPart(kit.group, coil2, kit.glows, kit.extras);
  const aura = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.03, 6, 18), kitGlow(0x7af0ff, 0.55));
  aura.rotation.x = Math.PI / 2;
  aura.position.set(0, 0.02, 0.35);
  kit.group.add(aura);
  kit.auras.push(aura);
  const third = coil.clone();
  third.position.z = -0.2;
  third.scale.setScalar(0.7);
  addKitPart(kit.group, third, kit.glows, kit.extras, 4);
  return kit;
}

function buildDroneKit() {
  const kit = makeKit();
  const slots = [[-1, 0], [1, 0], [-1, 1], [1, 1]];
  slots.forEach(([s, row], i) => {
    const pylon = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.45), kitMat(0x1a0814, 0xff7ae8, 1.2));
    pylon.position.set(s * (1.15 + row * 0.25), 0.18 + row * 0.12, 0.55);
    addKitPart(kit.group, pylon, kit.glows, kit.extras, i >= 2 ? 3 : 0);
    const drone = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), kitMat(0x140810, 0xff7ae8, 1.8));
    drone.position.set(s * (1.45 + row * 0.35), 0.22 + row * 0.18, 0.7);
    addKitPart(kit.group, drone, kit.glows, kit.extras, i >= 2 ? 3 : 0);
    const aura = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), kitGlow(0xff7ae8, 0.45));
    aura.position.copy(drone.position);
    kit.group.add(aura);
    kit.auras.push(aura);
    if (i >= 2) kit.extras.push({ mesh: aura, at: 3 });
  });
  return kit;
}

function buildMineKit() {
  const kit = makeKit();
  const bay = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.18, 0.7), kitMat(0x081018, 0x5ce1ff, 1.3));
  bay.position.set(0, -0.42, 0.55);
  addKitPart(kit.group, bay, kit.glows, kit.extras);
  for (const x of [-0.16, 0.16]) {
    const mine = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), kitMat(0x0a1828, 0x5ce1ff, 1.7));
    mine.position.set(x, -0.52, 0.55);
    addKitPart(kit.group, mine, kit.glows, kit.extras);
    const aura = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), kitGlow(0x5ce1ff, 0.5));
    aura.position.copy(mine.position);
    kit.group.add(aura);
    kit.auras.push(aura);
  }
  const extra = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), kitMat(0x0a1828, 0x5ce1ff, 1.7));
  extra.position.set(0, -0.54, 0.78);
  addKitPart(kit.group, extra, kit.glows, kit.extras, 4);
  return kit;
}

function buildShearKit() {
  const kit = makeKit();
  for (const s of [-1, 1]) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.06, 0.22), kitMat(0x2a2208, 0xffd166, 1.7));
    blade.position.set(s * 1.35, 0.08, -0.15);
    blade.rotation.y = s * 0.45;
    blade.rotation.z = s * -0.18;
    addKitPart(kit.group, blade, kit.glows, kit.extras);
    const edge = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.03, 0.06), kitGlow(0xffd166, 0.8));
    edge.position.set(s * 1.55, 0.1, -0.28);
    edge.rotation.y = s * 0.45;
    kit.group.add(edge);
    kit.auras.push(edge);
    const extra = blade.clone();
    extra.position.set(s * 1.15, -0.12, 0.05);
    extra.rotation.z = s * 0.22;
    addKitPart(kit.group, extra, kit.glows, kit.extras, 4);
  }
  return kit;
}

function buildSpireKit() {
  const kit = makeKit();
  const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08, 1.65, 6), kitMat(0x222830, 0xffffff, 1.6));
  spike.rotation.x = -Math.PI / 2;
  spike.position.set(0, -0.02, -1.85);
  addKitPart(kit.group, spike, kit.glows, kit.extras);
  const aura = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.2, 6), kitGlow(0xffffff, 0.65));
  aura.rotation.x = Math.PI / 2;
  aura.position.set(0, -0.02, -1.7);
  kit.group.add(aura);
  kit.auras.push(aura);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.02, 6, 12), kitGlow(0x9be7ff, 0.7));
  ring.position.set(0, -0.02, -1.15);
  kit.group.add(ring);
  kit.auras.push(ring);
  const twin = spike.clone();
  twin.scale.setScalar(0.55);
  twin.position.set(0, 0.12, -1.55);
  addKitPart(kit.group, twin, kit.glows, kit.extras, 4);
  return kit;
}

function buildNovaKit() {
  const kit = makeKit();
  const crown = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.045, 6, 16), kitMat(0x1a0814, 0xff64e8, 1.8));
  crown.position.set(0, 0.42, -0.15);
  crown.rotation.x = 0.4;
  addKitPart(kit.group, crown, kit.glows, kit.extras);
  const aura = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.03, 6, 16), kitGlow(0xff64e8, 0.55));
  aura.position.copy(crown.position);
  aura.rotation.copy(crown.rotation);
  kit.group.add(aura);
  kit.auras.push(aura);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const jewel = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), kitGlow(0xff9be0, 0.8));
    jewel.position.set(Math.cos(a) * 0.38, 0.42 + Math.sin(a) * 0.12, -0.15);
    kit.group.add(jewel);
    kit.auras.push(jewel);
  }
  const inner = crown.clone();
  inner.scale.setScalar(0.62);
  inner.position.y = 0.52;
  addKitPart(kit.group, inner, kit.glows, kit.extras, 4);
  return kit;
}

function buildPrismKit() {
  const kit = makeKit();
  for (const s of [-1, 1]) {
    const crystal = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.7, 5), kitMat(0x1a1028, 0xd4b8ff, 1.8));
    crystal.rotation.x = -Math.PI / 2;
    crystal.rotation.y = s * 0.35;
    crystal.position.set(s * 0.28, 0.08, -1.35);
    addKitPart(kit.group, crystal, kit.glows, kit.extras);
  }
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), kitGlow(0xd4b8ff, 0.7));
  core.position.set(0, 0.1, -1.2);
  kit.group.add(core);
  kit.auras.push(core);
  const wideL = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.55, 5), kitMat(0x1a1028, 0xff64e8, 1.5));
  wideL.rotation.x = -Math.PI / 2;
  wideL.rotation.y = 0.7;
  wideL.position.set(-0.48, 0.02, -1.15);
  const wideR = wideL.clone();
  wideR.rotation.y = -0.7;
  wideR.position.x = 0.48;
  addKitPart(kit.group, wideL, kit.glows, kit.extras, 4);
  addKitPart(kit.group, wideR, kit.glows, kit.extras, 4);
  return kit;
}

function buildTractorKit() {
  const kit = makeKit();
  const dish = new THREE.Mesh(
    new THREE.CylinderGeometry(0.42, 0.22, 0.12, 16),
    kitMat(0x101820, 0x5ce1ff, 1.4)
  );
  dish.position.set(0, -0.38, 0.15);
  addKitPart(kit.group, dish, kit.glows, kit.extras);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.03, 8, 20), kitGlow(0x5ce1ff, 0.55));
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, -0.42, 0.15);
  kit.group.add(ring);
  kit.auras.push(ring);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.52, 0.025, 8, 20), kitGlow(0x9be7ff, 0.4));
  ring2.rotation.x = Math.PI / 2;
  ring2.position.set(0, -0.44, 0.15);
  kit.group.add(ring2);
  kit.auras.push(ring2);
  const wide = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.02, 8, 22), kitGlow(0x5ce1ff, 0.32));
  wide.rotation.x = Math.PI / 2;
  wide.position.set(0, -0.46, 0.15);
  addKitPart(kit.group, wide, kit.glows, kit.extras, 3);
  kit.auras.push(wide);
  return kit;
}

function buildPullKit() {
  const kit = makeKit();
  for (const s of [-1, 1]) {
    const coil = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.04, 8, 12), kitMat(0x1a0814, 0xff64e8, 1.7));
    coil.position.set(s * 0.38, -0.36, 0.15);
    coil.rotation.z = s * 0.5;
    addKitPart(kit.group, coil, kit.glows, kit.extras);
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), kitGlow(0xff64e8, 0.7));
    core.position.copy(coil.position);
    kit.group.add(core);
    kit.auras.push(core);
  }
  const heart = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), kitMat(0x120818, 0xffd166, 2));
  heart.position.set(0, -0.48, 0.15);
  addKitPart(kit.group, heart, kit.glows, kit.extras);
  const extraL = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 6, 12), kitMat(0x1a0814, 0xff64e8, 1.8));
  extraL.position.set(-0.22, -0.5, 0.32);
  addKitPart(kit.group, extraL, kit.glows, kit.extras, 3);
  const extraR = extraL.clone();
  extraR.position.x = 0.22;
  addKitPart(kit.group, extraR, kit.glows, kit.extras, 3);
  return kit;
}

export function spinShipKits(craft, dt) {
  const tractor = craft?.kits?.tractor;
  if (tractor) {
    for (const aura of tractor.auras) aura.rotation.z += dt * 1.6;
  }
  const pull = craft?.kits?.pull;
  if (pull) {
    for (const aura of pull.auras) aura.rotation.y += dt * 2.4;
  }
}

export function dressShip(craft, loadout = {}, previewId = null) {
  const kits = craft?.kits;
  if (!kits) return;
  for (const id of MODULE_ORDER) {
    const kit = kits[id];
    if (!kit) continue;
    const lv = loadout[id] | 0;
    const preview = previewId === id && lv <= 0;
    const show = lv > 0 || preview;
    kit.group.visible = show;
    const max = MODULES[id]?.max || 8;
    const t = preview ? 0.18 : Math.max(0, Math.min(1, lv / max));
    for (const mesh of kit.glows) {
      if (!mesh.material?.emissive) continue;
      mesh.material.emissiveIntensity = preview ? 0.45 : 0.7 + t * 2.6;
      mesh.material.transparent = preview;
      mesh.material.opacity = preview ? 0.42 : 1;
    }
    for (const aura of kit.auras) {
      if (!aura.material) continue;
      aura.visible = show;
      aura.material.opacity = preview ? 0.18 : 0.28 + t * 0.62;
      aura.scale.setScalar(preview ? 0.92 : 0.9 + t * 0.45);
    }
    for (const extra of kit.extras) {
      extra.mesh.visible = show && (preview ? extra.at <= 3 : lv >= extra.at);
      if (extra.mesh.material?.emissive) {
        extra.mesh.material.emissiveIntensity = preview ? 0.4 : 1.2 + t * 2;
        extra.mesh.material.transparent = preview;
        extra.mesh.material.opacity = preview ? 0.38 : 1;
      }
    }
  }
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

  const kits = {};
  const spark = makeKit();
  spark.group.add(gunPodL, gunPodR);
  const sparkGlowL = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), kitGlow(0xc8fff6, 0.35));
  sparkGlowL.position.set(-0.38, -0.12, -1.18);
  const sparkGlowR = sparkGlowL.clone();
  sparkGlowR.position.x = 0.38;
  spark.group.add(sparkGlowL, sparkGlowR);
  spark.auras.push(sparkGlowL, sparkGlowR);
  const sparkXtraL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.85, 6), kitMat(0x1a2238, 0x5ce1ff, 0.8));
  sparkXtraL.rotation.x = Math.PI / 2;
  sparkXtraL.position.set(-0.22, -0.16, -0.95);
  const sparkXtraR = sparkXtraL.clone();
  sparkXtraR.position.x = 0.22;
  addKitPart(spark.group, sparkXtraL, spark.glows, spark.extras, 5);
  addKitPart(spark.group, sparkXtraR, spark.glows, spark.extras, 5);
  kits.spark = spark;

  kits.needle = buildNeedleKit();
  kits.seeker = buildSeekerKit();
  kits.shard = buildShardKit();
  kits.titan = buildTitanKit();
  kits.wing = buildWingKit();
  kits.helix = buildHelixKit();
  kits.drone = buildDroneKit();
  kits.mine = buildMineKit();
  kits.shear = buildShearKit();
  kits.spire = buildSpireKit();
  kits.nova = buildNovaKit();
  kits.prism = buildPrismKit();
  kits.tractor = buildTractorKit();
  kits.pull = buildPullKit();
  for (const id of MODULE_ORDER) {
    if (kits[id]) rig.add(kits[id].group);
  }

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

  const craft = {
    group,
    rig,
    exhausts: [exhaustL, exhaustR],
    lights: [lightL, lightR],
    core,
    muzzle,
    muzzleSpike,
    kits,
  };
  dressShip(craft, { spark: 1 });
  return craft;
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
