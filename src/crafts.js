import * as THREE from 'three';

const MAGENTA = 0xff3bd4;
const CYAN = 0x5ce1ff;
const GOLD = 0xffd166;
const HULL_DARK = 0x0a0614;
const HULL_MID = 0x1a0508;
const ORANGE = 0xff8a1a;
const ORANGE_EMISSIVE = 0xff6a1a;
const PINK_EMISSIVE = 0xff2458;

function stdMat(color, emissive, intensity = 2.2) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.72,
    roughness: 0.28,
    emissive,
    emissiveIntensity: intensity,
  });
}

function glowMat(color, opacity = 0.85) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

function wireMat(color, opacity = 0.55) {
  return new THREE.MeshBasicMaterial({
    color,
    wireframe: true,
    transparent: true,
    opacity,
  });
}

function makeCraft(mesh, body, wings, ring, core, engines, weak, parts = []) {
  const craft = {
    mesh,
    body,
    wings,
    ring,
    core,
    engines,
    weak,
    parts,
    _baseEmissive: body.material.emissiveIntensity,
    _coreBaseScale: core.scale.x,
  };
  return craft;
}

export function createDiveHunter() {
  const mesh = new THREE.Group();

  const bodyMat = stdMat(HULL_MID, PINK_EMISSIVE, 2.2);
  const body = new THREE.Mesh(new THREE.OctahedronGeometry(1.1, 0), bodyMat);
  body.scale.set(0.38, 0.38, 2.65);
  body.position.z = 0.35;

  const wingMat = stdMat(0x2a0a12, MAGENTA, 1.15);
  const wings = new THREE.Group();
  const canardL = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.08, 0.72), wingMat);
  canardL.position.set(-1.05, 0, -1.15);
  canardL.rotation.z = 0.22;
  const canardR = canardL.clone();
  canardR.position.x = 1.05;
  canardR.rotation.z = -0.22;
  wings.add(canardL, canardR);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.62, 0.07, 8, 20),
    new THREE.MeshBasicMaterial({ color: 0xff6b8a })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.z = -1.85;

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), glowMat(MAGENTA, 0.75));
  core.position.z = 0.1;

  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 8), glowMat(0xff5ad4, 0.95));
  weak.position.copy(core.position);

  const engineMat = new THREE.MeshBasicMaterial({ color: ORANGE });
  const engineL = new THREE.Mesh(new THREE.SphereGeometry(0.26, 8, 6), engineMat);
  engineL.position.set(-0.42, -0.1, 2.05);
  const engineR = engineL.clone();
  engineR.position.x = 0.42;
  const engines = [engineL, engineR];

  const spikeTip = new THREE.Mesh(
    new THREE.ConeGeometry(0.22, 0.85, 4),
    stdMat(HULL_DARK, MAGENTA, 1.4)
  );
  spikeTip.rotation.x = Math.PI / 2;
  spikeTip.position.z = -2.35;

  mesh.add(body, wings, ring, core, weak, engineL, engineR, spikeTip);

  return makeCraft(mesh, body, wings, ring, core, engines, weak);
}

export function createSineHunter() {
  const mesh = new THREE.Group();

  const bodyMat = stdMat(HULL_MID, MAGENTA, 1.9);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.15, 0.55, 8), bodyMat);
  body.rotation.x = Math.PI / 2;
  body.position.z = 0.15;

  const wingMat = stdMat(0x1a0818, 0xff3bd4, 1.3);
  const wings = new THREE.Group();

  const wingSegments = 5;
  for (let i = 0; i < wingSegments; i++) {
    const t = i / (wingSegments - 1);
    const side = i % 2 === 0 ? -1 : 1;
    const seg = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.1, 0.95), wingMat);
    const spread = 1.8 + t * 2.6;
    seg.position.set(side * spread, 0, 0.35 + t * 0.55);
    seg.rotation.y = side * (0.18 + t * 0.35);
    seg.rotation.z = side * (0.12 - t * 0.08);
    wings.add(seg);
  }

  const crescentL = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.12, 1.4), wingMat);
  crescentL.position.set(-3.85, 0, 0.55);
  crescentL.rotation.z = 0.28;
  const crescentR = crescentL.clone();
  crescentR.position.x = 3.85;
  crescentR.rotation.z = -0.28;
  wings.add(crescentL, crescentR);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.45, 0.11, 8, 24),
    new THREE.MeshBasicMaterial({ color: GOLD })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.z = -0.55;

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), glowMat(CYAN, 0.7));
  core.position.z = 0.05;

  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), glowMat(MAGENTA, 0.9));
  weak.position.copy(core.position);

  const filamentMat = stdMat(0x2a1020, GOLD, 1.6);
  const filaments = new THREE.Group();
  for (let i = -1; i <= 1; i++) {
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.04, 2.4, 5), filamentMat);
    rod.rotation.x = Math.PI / 2;
    rod.position.set(i * 0.55, -0.08, 2.15);
    filaments.add(rod);
  }

  const engineMat = new THREE.MeshBasicMaterial({ color: ORANGE });
  const engineL = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), engineMat);
  engineL.position.set(-1.35, -0.12, 2.55);
  const engineR = engineL.clone();
  engineR.position.x = 1.35;
  const engines = [engineL, engineR];

  mesh.add(body, wings, ring, core, weak, filaments, engineL, engineR);

  return makeCraft(mesh, body, wings, ring, core, engines, weak);
}

export function createHeavyHunter() {
  const mesh = new THREE.Group();

  const bodyMat = stdMat(0x2a1200, ORANGE_EMISSIVE, 2.6);
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, 0), bodyMat);
  body.scale.set(1.15, 0.85, 1.05);
  body.position.z = 0.2;

  const wingMat = stdMat(0x2a1808, GOLD, 1.8);
  const wings = new THREE.Group();
  const slabL = new THREE.Mesh(new THREE.BoxGeometry(2.85, 0.35, 1.65), wingMat);
  slabL.position.set(-2.35, 0, 0.45);
  const slabR = slabL.clone();
  slabR.position.x = 2.35;
  wings.add(slabL, slabR);

  const cannonMat = stdMat(0x1a0a04, ORANGE_EMISSIVE, 2.4);
  const cannonL = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.48, 1.55, 6), cannonMat);
  cannonL.rotation.z = Math.PI / 2;
  cannonL.position.set(-2.95, 0, 0.35);
  const cannonR = cannonL.clone();
  cannonR.position.x = 2.95;
  wings.add(cannonL, cannonR);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(2.15, 0.22, 8, 28),
    new THREE.MeshBasicMaterial({ color: GOLD })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.z = -0.25;

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 8), glowMat(ORANGE, 0.8));
  core.position.z = 0.15;

  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.62, 10, 8), glowMat(GOLD, 0.95));
  weak.position.copy(core.position);

  const engineMat = new THREE.MeshBasicMaterial({ color: ORANGE });
  const engineL = new THREE.Mesh(new THREE.SphereGeometry(0.42, 8, 6), engineMat);
  engineL.position.set(-0.95, -0.2, 2.35);
  const engineR = engineL.clone();
  engineR.position.x = 0.95;
  const engineC = engineL.clone();
  engineC.position.set(0, -0.35, 2.55);
  engineC.scale.setScalar(0.85);
  const engines = [engineL, engineR, engineC];

  const brow = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.28, 0.85), stdMat(HULL_DARK, GOLD, 1.5));
  brow.position.set(0, 0.35, -0.65);

  mesh.add(body, wings, ring, core, weak, brow, engineL, engineR, engineC);

  return makeCraft(mesh, body, wings, ring, core, engines, weak);
}

export function createQueen() {
  const mesh = new THREE.Group();

  const bodyMat = stdMat(HULL_MID, MAGENTA, 2.4);
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(1.15, 0), bodyMat);
  body.position.set(0, 0.15, 0.2);

  const lattice = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.55, 1),
    wireMat(MAGENTA, 0.5)
  );
  lattice.position.copy(body.position);

  const wingMat = stdMat(0x1a0818, MAGENTA, 1.6);
  const wings = new THREE.Group();

  const crescentL = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.18, 2.2), wingMat);
  crescentL.position.set(-4.2, 0, 0.35);
  crescentL.rotation.z = 0.32;
  const crescentR = crescentL.clone();
  crescentR.position.x = 4.2;
  crescentR.rotation.z = -0.32;

  const wingTipL = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.14, 1.35), wingMat);
  wingTipL.position.set(-6.85, 0, 0.75);
  wingTipL.rotation.z = 0.45;
  const wingTipR = wingTipL.clone();
  wingTipR.position.x = 6.85;
  wingTipR.rotation.z = -0.45;

  wings.add(crescentL, crescentR, wingTipL, wingTipR);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.85, 0.12, 8, 36),
    new THREE.MeshBasicMaterial({ color: MAGENTA, transparent: true, opacity: 0.85 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, 0.35, 0.1);

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.65, 12, 10), glowMat(CYAN, 0.65));
  core.position.set(0, 0.1, 0.15);

  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.95, 12, 10), glowMat(MAGENTA, 1.0));
  weak.position.set(0, -1.35, 0.25);

  const shardMat = stdMat(HULL_DARK, MAGENTA, 2.0);
  const shards = new THREE.Group();
  const shardOffsets = [
    [-2.8, 0.85, -0.4],
    [2.8, 0.85, -0.4],
    [-1.6, -0.55, 1.2],
    [1.6, -0.55, 1.2],
  ];
  const shardMeshes = [];
  for (const [x, y, z] of shardOffsets) {
    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 0), shardMat);
    shard.position.set(x, y, z);
    shard.scale.set(0.65, 1.1, 0.45);
    shards.add(shard);
    shardMeshes.push(shard);
  }

  const engineMat = new THREE.MeshBasicMaterial({ color: MAGENTA });
  const engineL = new THREE.Mesh(new THREE.SphereGeometry(0.45, 8, 6), engineMat);
  engineL.position.set(-1.85, -0.25, 2.85);
  const engineR = engineL.clone();
  engineR.position.x = 1.85;
  const engines = [engineL, engineR];

  const parts = [wingTipL, wingTipR, shardMeshes[0], shardMeshes[1]];

  mesh.add(body, lattice, wings, ring, core, weak, shards, engineL, engineR);

  return makeCraft(mesh, body, wings, ring, core, engines, weak, parts);
}

export function createWarden() {
  const mesh = new THREE.Group();

  const slabMat = stdMat(HULL_DARK, GOLD, 2.0);
  const body = new THREE.Mesh(new THREE.BoxGeometry(5.2, 1.35, 2.85), slabMat);
  body.position.set(0, 0, 0.15);

  const midSlab = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.95, 2.35), stdMat(0x1a0a08, ORANGE_EMISSIVE, 2.3));
  midSlab.position.set(0, 0.55, 0.25);

  const wings = new THREE.Group();
  const armMat = stdMat(0x2a1200, GOLD, 2.2);
  const armN = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.55, 2.65), armMat);
  armN.position.set(0, 0, -1.85);
  const armS = armN.clone();
  armS.position.z = 2.15;
  const armE = new THREE.Mesh(new THREE.BoxGeometry(2.65, 0.55, 1.35), armMat);
  armE.position.set(3.15, 0, 0.2);
  const armW = armE.clone();
  armW.position.x = -3.15;

  const cannonMat = stdMat(0x1a0804, ORANGE_EMISSIVE, 2.8);
  const cannonNE = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.52, 1.85, 6), cannonMat);
  cannonNE.rotation.z = Math.PI / 2;
  cannonNE.position.set(3.55, 0.15, -1.45);
  const cannonNW = cannonNE.clone();
  cannonNW.position.set(-3.55, 0.15, -1.45);
  const cannonSE = cannonNE.clone();
  cannonSE.position.set(3.55, 0.15, 1.65);
  const cannonSW = cannonNE.clone();
  cannonSW.position.set(-3.55, 0.15, 1.65);

  wings.add(armN, armS, armE, armW, cannonNE, cannonNW, cannonSE, cannonSW);

  const ringInner = new THREE.Mesh(
    new THREE.TorusGeometry(2.65, 0.14, 8, 32),
    new THREE.MeshBasicMaterial({ color: GOLD })
  );
  ringInner.rotation.x = Math.PI / 2;
  ringInner.position.set(0, -0.35, 0.1);

  const ringOuter = new THREE.Mesh(
    new THREE.TorusGeometry(3.45, 0.1, 8, 36),
    new THREE.MeshBasicMaterial({ color: GOLD, transparent: true, opacity: 0.7 })
  );
  ringOuter.rotation.x = Math.PI / 2;
  ringOuter.position.set(0, -0.55, 0.05);

  const ring = ringInner;

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.72, 12, 10), glowMat(ORANGE, 0.75));
  core.position.set(0, 0.15, 0.2);

  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.85, 12, 10), glowMat(GOLD, 0.95));
  weak.position.copy(core.position);

  const engineMat = new THREE.MeshBasicMaterial({ color: ORANGE });
  const engineL = new THREE.Mesh(new THREE.SphereGeometry(0.5, 8, 6), engineMat);
  engineL.position.set(-1.45, -0.35, 2.75);
  const engineR = engineL.clone();
  engineR.position.x = 1.45;
  const engines = [engineL, engineR];

  const tower = new THREE.Mesh(new THREE.BoxGeometry(1.65, 1.85, 1.65), stdMat(HULL_MID, GOLD, 1.8));
  tower.position.set(0, 1.15, 0.1);

  const parts = [ringOuter, armE, armW, cannonNE, cannonNW];

  mesh.add(body, midSlab, wings, ringInner, ringOuter, core, weak, tower, engineL, engineR);

  return makeCraft(mesh, body, wings, ring, core, engines, weak, parts);
}

export function createSentinel() {
  const mesh = new THREE.Group();
  const scale = 1.7;

  const bodyMat = stdMat(HULL_DARK, CYAN, 2.5);
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(1.45, 0), bodyMat);
  body.scale.setScalar(scale * 0.55);

  const shell = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.05, 1),
    wireMat(CYAN, 0.55)
  );
  shell.scale.setScalar(scale * 0.55);

  const wings = new THREE.Group();
  const spikeMat = stdMat(HULL_MID, MAGENTA, 2.8);
  const spikeCrown = new THREE.Group();
  const spikeDirs = [
    [0, 0, -1],
    [0.6, 0.3, -0.5],
    [-0.6, 0.3, -0.5],
    [0.6, -0.3, 0.4],
    [-0.6, -0.3, 0.4],
    [0, 0.65, 0.35],
  ];
  const spikeMeshes = [];
  for (const [dx, dy, dz] of spikeDirs) {
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.85, 4), spikeMat);
    spike.rotation.x = Math.PI / 2;
    spike.position.set(dx * scale * 1.35, dy * scale * 1.35, dz * scale * 1.15);
    spike.rotation.y = Math.atan2(dx, dz);
    spikeCrown.add(spike);
    spikeMeshes.push(spike);
  }
  wings.add(spikeCrown);

  const ringMat = new THREE.MeshBasicMaterial({ color: CYAN, transparent: true, opacity: 0.8 });
  const ringXZ = new THREE.Mesh(new THREE.TorusGeometry(3.2 * scale * 0.45, 0.1, 8, 36), ringMat);
  ringXZ.rotation.x = Math.PI / 2;
  const ringXY = new THREE.Mesh(new THREE.TorusGeometry(2.85 * scale * 0.45, 0.08, 8, 32), ringMat.clone());
  const ringYZ = new THREE.Mesh(new THREE.TorusGeometry(3.55 * scale * 0.45, 0.09, 8, 34), ringMat.clone());
  ringYZ.rotation.y = Math.PI / 2;

  const ring = ringXZ;

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.55, 12, 10), glowMat(MAGENTA, 0.7));
  core.scale.setScalar(scale * 0.5);

  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.72, 12, 10), glowMat(MAGENTA, 1.0));
  weak.scale.setScalar(scale * 0.5);

  const engineMat = new THREE.MeshBasicMaterial({ color: MAGENTA });
  const engineMeshes = [];
  for (let i = 0; i < 4; i++) {
    const ang = (i / 4) * Math.PI * 2;
    const eng = new THREE.Mesh(new THREE.SphereGeometry(0.38, 8, 6), engineMat);
    eng.position.set(Math.cos(ang) * scale * 1.15, Math.sin(ang) * scale * 0.35, scale * 1.05);
    engineMeshes.push(eng);
  }
  const engines = engineMeshes;

  const parts = [ringXZ, ringXY, ringYZ, spikeCrown, spikeMeshes[0], spikeMeshes[1]];

  mesh.add(body, shell, wings, ringXZ, ringXY, ringYZ, core, weak, ...engineMeshes);

  return makeCraft(mesh, body, wings, ring, core, engines, weak, parts);
}

export function applyCraftFlash(craft, amount) {
  const base = craft._baseEmissive ?? 2.2;
  const flash = Math.max(0, Math.min(1, amount));
  craft.body.material.emissiveIntensity = base + flash * 8;
}

export function setCraftPhase(craft, phase) {
  const p = Math.max(1, Math.min(3, phase));
  const parts = craft.parts ?? [];
  const baseScale = craft._coreBaseScale ?? 1;

  if (p === 1) {
    for (const part of parts) part.visible = true;
    craft.core.scale.setScalar(baseScale);
    if (craft.weak) craft.weak.visible = true;
    if (craft.ring) craft.ring.visible = true;
    if (craft.wings) craft.wings.visible = true;
  } else if (p === 2) {
    const hideCount = Math.max(1, Math.floor(parts.length * 0.45));
    parts.forEach((part, i) => {
      part.visible = i >= hideCount;
    });
    craft.core.scale.setScalar(baseScale * 1.35);
    if (craft.weak) craft.weak.visible = true;
  } else {
    parts.forEach((part) => {
      part.visible = false;
    });
    craft.core.scale.setScalar(baseScale * 1.85);
    if (craft.weak) craft.weak.visible = true;
    if (craft.ring) craft.ring.visible = false;
  }
}
