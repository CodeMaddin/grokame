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
  const wingMat = stdMat(0x2a0a12, MAGENTA, 1.45);
  const trimMat = stdMat(HULL_DARK, MAGENTA, 1.2);
  const nozzleMat = stdMat(0x160b12, ORANGE_EMISSIVE, 1.4);
  const body = new THREE.Mesh(new THREE.OctahedronGeometry(1.05, 1), bodyMat);
  body.scale.set(0.48, 0.43, 2.15);
  body.position.z = 0.12;

  const wings = new THREE.Group();
  const parts = [];
  const spine = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.32, 2.75), trimMat);
  spine.position.set(0, 0.08, 0.22);
  const shoulderL = new THREE.Mesh(new THREE.BoxGeometry(1.65, 0.12, 0.78), wingMat);
  shoulderL.position.set(-0.95, 0, 0.22);
  shoulderL.rotation.z = 0.14;
  const shoulderR = shoulderL.clone();
  shoulderR.position.x = 0.95;
  shoulderR.rotation.z = -0.14;
  const outerL = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.58), wingMat);
  outerL.position.set(-1.92, -0.02, 0.62);
  outerL.rotation.set(0, -0.16, 0.28);
  const outerR = outerL.clone();
  outerR.position.x = 1.92;
  outerR.rotation.y = 0.16;
  outerR.rotation.z = -0.28;
  const canardL = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.09, 0.5), trimMat);
  canardL.position.set(-0.82, 0.02, -1.03);
  canardL.rotation.set(0, 0.14, 0.3);
  const canardR = canardL.clone();
  canardR.position.x = 0.82;
  canardR.rotation.y = -0.14;
  canardR.rotation.z = -0.3;
  const finL = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.82, 4), trimMat);
  finL.position.set(-2.18, 0.22, 0.54);
  const finR = finL.clone();
  finR.position.x = 2.18;
  const keel = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.52, 1.28), trimMat);
  keel.position.set(0, -0.34, 0.68);
  const intakeL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.3, 0.78), nozzleMat);
  intakeL.position.set(-0.5, -0.12, 0.78);
  const intakeR = intakeL.clone();
  intakeR.position.x = 0.5;
  const noseArmor = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.28, 0.66), trimMat);
  noseArmor.position.set(0, 0.01, -1.3);
  noseArmor.rotation.y = Math.PI / 4;
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.86, 5), trimMat);
  nose.rotation.x = -Math.PI / 2;
  nose.position.z = -1.98;
  const noseSpike = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.68, 4), wingMat);
  noseSpike.rotation.x = -Math.PI / 2;
  noseSpike.position.z = -2.63;

  const panelL = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.018, 1.42), glowMat(MAGENTA, 0.75));
  panelL.position.set(-0.26, 0.31, -0.05);
  panelL.rotation.y = -0.08;
  const panelR = panelL.clone();
  panelR.position.x = 0.26;
  panelR.rotation.y = 0.08;
  const panelNose = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.025, 0.035), glowMat(MAGENTA, 0.8));
  panelNose.position.set(0, 0.25, -1.18);
  const panelTail = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.025, 0.04), glowMat(CYAN, 0.7));
  panelTail.position.set(0, 0.28, 1.18);

  const tipLightL = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), glowMat(CYAN, 0.95));
  tipLightL.position.set(-2.42, 0.02, 0.72);
  const tipLightR = tipLightL.clone();
  tipLightR.position.x = 2.42;
  wings.add(shoulderL, shoulderR, outerL, outerR, canardL, canardR, finL, finR, tipLightL, tipLightR);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.07, 8, 24), glowMat(MAGENTA, 0.8));
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, 0.02, -1.15);
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.29, 12, 8), glowMat(MAGENTA, 0.78));
  core.position.set(0, 0.04, -0.48);
  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), glowMat(0xff5ad4, 0.95));
  weak.position.copy(core.position);

  const engines = [];
  const engineNozzles = [];
  for (const x of [-0.42, 0.42]) {
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.32, 0.36, 8), nozzleMat);
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(x, -0.1, 1.75);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.045, 6, 12), glowMat(ORANGE, 0.75));
    collar.rotation.x = Math.PI / 2;
    collar.position.set(x, -0.1, 1.96);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.27, 10, 6), glowMat(ORANGE, 0.92));
    flame.position.set(x, -0.1, 2.08);
    engineNozzles.push(nozzle, collar);
    engines.push(flame);
  }

  parts.push(
    spine, shoulderL, shoulderR, outerL, outerR, canardL, canardR, finL, finR,
    keel, intakeL, intakeR, noseArmor, nose, noseSpike, panelL, panelR, panelNose,
    panelTail, ...engineNozzles
  );
  mesh.add(body, spine, wings, keel, intakeL, intakeR, noseArmor, nose, noseSpike,
    panelL, panelR, panelNose, panelTail, ring, core, weak, ...engineNozzles, ...engines);
  return makeCraft(mesh, body, wings, ring, core, engines, weak, parts);
}

export function createSineHunter() {
  const mesh = new THREE.Group();
  const bodyMat = stdMat(HULL_MID, MAGENTA, 1.9);
  const wingMat = stdMat(0x190b1d, MAGENTA, 1.35);
  const goldMat = stdMat(0x2a1708, GOLD, 1.65);
  const nozzleMat = stdMat(HULL_DARK, ORANGE_EMISSIVE, 1.35);
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.98, 1.12, 0.62, 12), bodyMat);
  body.rotation.x = Math.PI / 2;
  body.position.z = 0.12;
  const noseBlock = new THREE.Mesh(new THREE.OctahedronGeometry(0.82, 1), wingMat);
  noseBlock.scale.set(0.85, 0.52, 0.95);
  noseBlock.position.set(0, 0.02, -0.62);
  const tailSpine = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.28, 1.8), goldMat);
  tailSpine.position.set(0, -0.03, 1.12);

  const wings = new THREE.Group();
  const parts = [noseBlock, tailSpine];
  const segmentX = [1.0, 1.48, 2.05, 2.64, 3.18, 3.62];
  const segmentZ = [0.15, 0.28, 0.48, 0.74, 1.0, 0.58];
  const segmentWidth = [1.0, 1.08, 1.12, 1.06, 0.9, 0.68];
  const segmentMeshes = [];
  for (const side of [-1, 1]) {
    for (let i = 0; i < segmentX.length; i++) {
      const segment = new THREE.Mesh(
        new THREE.BoxGeometry(segmentWidth[i], 0.12, 0.58 + (i % 2) * 0.12),
        wingMat
      );
      segment.position.set(side * segmentX[i], 0.02 + Math.sin(i * 0.8) * 0.05, segmentZ[i]);
      segment.rotation.y = side * (0.12 + i * 0.075);
      segment.rotation.z = side * (0.1 - i * 0.035);
      wings.add(segment);
      segmentMeshes.push(segment);
      if (i >= 2) parts.push(segment);
    }
  }
  for (const side of [-1, 1]) {
    const vane = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.1, 1.15), goldMat);
    vane.position.set(side * 2.1, -0.18, 1.72);
    vane.rotation.y = side * 0.22;
    const tailVane = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.08, 1.28), wingMat);
    tailVane.position.set(side * 3.18, -0.1, 1.88);
    tailVane.rotation.y = side * 0.3;
    wings.add(vane, tailVane);
    parts.push(vane, tailVane);
  }
  const tipShardL = new THREE.Mesh(new THREE.OctahedronGeometry(0.35, 0), wingMat);
  tipShardL.scale.set(0.7, 0.42, 1.25);
  tipShardL.position.set(-3.9, 0, 0.44);
  const tipShardR = tipShardL.clone();
  tipShardR.position.x = 3.9;
  wings.add(tipShardL, tipShardR);
  parts.push(tipShardL, tipShardR);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.42, 0.11, 8, 28), glowMat(GOLD, 0.86));
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, 0.08, -0.55);
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.44, 12, 8), glowMat(CYAN, 0.72));
  core.position.set(0, 0, -0.03);
  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 8), glowMat(MAGENTA, 0.92));
  weak.position.copy(core.position);

  const filamentMeshes = [];
  for (const [x, y, z, length, tilt] of [
    [-0.72, -0.08, 1.35, 2.45, -0.12],
    [0.72, -0.08, 1.35, 2.45, 0.12],
    [-0.34, 0.18, 1.72, 1.7, -0.22],
    [0.34, 0.18, 1.72, 1.7, 0.22],
  ]) {
    const filament = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, length, 6), goldMat);
    filament.rotation.x = Math.PI / 2;
    filament.rotation.y = tilt;
    filament.position.set(x, y, z);
    filamentMeshes.push(filament);
  }
  const filamentGlow = filamentMeshes.map((filament) => {
    const glow = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.06, filament.geometry.parameters.height, 5), glowMat(GOLD, 0.48));
    glow.position.copy(filament.position);
    glow.rotation.copy(filament.rotation);
    return glow;
  });

  const engines = [];
  const engineShells = [];
  for (const x of [-1.22, 1.22]) {
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 0.72, 8), nozzleMat);
    shell.rotation.x = Math.PI / 2;
    shell.position.set(x, -0.16, 2.08);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 6, 14), glowMat(ORANGE, 0.72));
    collar.rotation.x = Math.PI / 2;
    collar.position.set(x, -0.16, 2.45);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.34, 10, 6), glowMat(ORANGE, 0.9));
    flame.position.set(x, -0.16, 2.55);
    engineShells.push(shell, collar);
    engines.push(flame);
  }
  parts.push(...filamentMeshes, ...filamentGlow, ...engineShells);
  mesh.add(body, noseBlock, tailSpine, wings, ring, core, weak,
    ...filamentMeshes, ...filamentGlow, ...engineShells, ...engines);
  return makeCraft(mesh, body, wings, ring, core, engines, weak, parts);
}

export function createHeavyHunter() {
  const mesh = new THREE.Group();
  const bodyMat = stdMat(0x2a1200, ORANGE_EMISSIVE, 2.6);
  const armorMat = stdMat(0x2a1808, GOLD, 1.8);
  const darkArmorMat = stdMat(HULL_DARK, GOLD, 1.45);
  const cannonMat = stdMat(0x1a0a04, ORANGE_EMISSIVE, 2.4);
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.7, 1.45, 3.1), bodyMat);
  body.position.set(0, 0.02, 0.15);
  const noseBlock = new THREE.Mesh(new THREE.OctahedronGeometry(1.2, 0), bodyMat);
  noseBlock.scale.set(0.95, 0.62, 1.15);
  noseBlock.position.set(0, 0.02, -1.02);
  const belly = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.4, 2.0), darkArmorMat);
  belly.position.set(0, -0.72, 0.5);
  const wings = new THREE.Group();
  const parts = [noseBlock, belly];
  const slabL = new THREE.Mesh(new THREE.BoxGeometry(2.65, 0.42, 1.72), armorMat);
  slabL.position.set(-2.0, 0, 0.52);
  const slabR = slabL.clone();
  slabR.position.x = 2.0;
  const shoulderL = new THREE.Mesh(new THREE.BoxGeometry(1.28, 0.68, 1.32), darkArmorMat);
  shoulderL.position.set(-3.36, 0.02, 0.46);
  shoulderL.rotation.y = -0.1;
  const shoulderR = shoulderL.clone();
  shoulderR.position.x = 3.36;
  shoulderR.rotation.y = 0.1;
  const rearPlateL = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.28, 1.52), armorMat);
  rearPlateL.position.set(-1.72, 0.48, 1.34);
  const rearPlateR = rearPlateL.clone();
  rearPlateR.position.x = 1.72;
  const brow = new THREE.Mesh(new THREE.BoxGeometry(3.7, 0.3, 0.72), darkArmorMat);
  brow.position.set(0, 0.63, -0.68);
  brow.rotation.x = -0.08;
  wings.add(slabL, slabR, shoulderL, shoulderR, rearPlateL, rearPlateR);
  parts.push(slabL, slabR, shoulderL, shoulderR, rearPlateL, rearPlateR, brow);

  const cannons = [];
  const muzzleRings = [];
  for (const x of [-1.02, 1.02]) {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.38, 1.55, 8), cannonMat);
    barrel.rotation.x = Math.PI / 2;
    barrel.position.set(x, 0.42, -1.78);
    const muzzle = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.065, 6, 12), glowMat(ORANGE, 0.8));
    muzzle.rotation.x = Math.PI / 2;
    muzzle.position.set(x, 0.42, -2.56);
    cannons.push(barrel);
    muzzleRings.push(muzzle);
  }
  const turretL = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.42, 0.42, 8), cannonMat);
  turretL.position.set(-1.22, 0.95, 0.18);
  const turretR = turretL.clone();
  turretR.position.x = 1.22;
  const ventL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.8), glowMat(CYAN, 0.7));
  ventL.position.set(-0.72, 0.75, 0.55);
  const ventR = ventL.clone();
  ventR.position.x = 0.72;
  parts.push(...cannons, ...muzzleRings, turretL, turretR, ventL, ventR);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.48, 0.2, 8, 30), glowMat(GOLD, 0.88));
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, -0.08, -0.32);
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.57, 12, 8), glowMat(ORANGE, 0.82));
  core.position.set(0, -0.02, -0.05);
  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.64, 10, 8), glowMat(GOLD, 0.95));
  weak.position.copy(core.position);

  const engines = [];
  const engineNozzles = [];
  for (const [x, y, z, scale] of [[-0.94, -0.43, 2.1, 1], [0.94, -0.43, 2.1, 1], [0, -0.52, 2.32, 0.88]]) {
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.36 * scale, 0.47 * scale, 0.5, 8), cannonMat);
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(x, y, z);
    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.39 * scale, 0.065, 6, 14), glowMat(ORANGE, 0.72));
    collar.rotation.x = Math.PI / 2;
    collar.position.set(x, y, z + 0.27);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.4 * scale, 10, 6), glowMat(ORANGE, 0.93));
    flame.position.set(x, y, z + 0.42);
    engineNozzles.push(nozzle, collar);
    engines.push(flame);
  }
  const tower = new THREE.Mesh(new THREE.BoxGeometry(1.15, 1.15, 1.0), darkArmorMat);
  tower.position.set(0, 0.88, 0.22);
  parts.push(tower, ...engineNozzles);
  mesh.add(body, noseBlock, belly, wings, brow, ...cannons, ...muzzleRings,
    turretL, turretR, ventL, ventR, ring, core, weak, tower, ...engineNozzles, ...engines);
  return makeCraft(mesh, body, wings, ring, core, engines, weak, parts);
}

export function createQueen() {
  const mesh = new THREE.Group();
  const bodyMat = stdMat(HULL_MID, MAGENTA, 2.4);
  const wingMat = stdMat(0x1a0818, MAGENTA, 1.6);
  const shardMat = stdMat(HULL_DARK, MAGENTA, 2.0);
  const goldMat = stdMat(0x261707, GOLD, 1.6);
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(1.25, 1), bodyMat);
  body.position.set(0, 0.12, 0.18);
  const lattice = new THREE.Mesh(new THREE.IcosahedronGeometry(1.7, 2), wireMat(MAGENTA, 0.52));
  lattice.position.copy(body.position);
  const innerLattice = new THREE.Mesh(new THREE.IcosahedronGeometry(1.42, 1), wireMat(CYAN, 0.32));
  innerLattice.position.set(0, 0.12, 0.18);

  const wings = new THREE.Group();
  const parts = [lattice, innerLattice];
  const segmentX = [1.15, 1.82, 2.62, 3.5, 4.38, 5.22, 6.03, 6.65];
  const segmentZ = [0.12, 0.24, 0.43, 0.64, 0.82, 0.94, 0.76, 0.45];
  const segmentWidth = [1.15, 1.3, 1.42, 1.45, 1.32, 1.14, 0.92, 0.58];
  for (const side of [-1, 1]) {
    for (let i = 0; i < segmentX.length; i++) {
      const segment = new THREE.Mesh(
        new THREE.BoxGeometry(segmentWidth[i], 0.16, 0.78 + (i % 3) * 0.12),
        wingMat
      );
      segment.position.set(side * segmentX[i], 0.03 + Math.sin(i) * 0.08, segmentZ[i]);
      segment.rotation.y = side * (0.08 + i * 0.065);
      segment.rotation.z = side * (0.08 + i * 0.025);
      wings.add(segment);
      if (i >= 3) parts.push(segment);
    }
  }
  const vaneMeshes = [];
  for (const [x, y, z, sx, sy, sz, rot] of [
    [-3.2, 1.05, -0.18, 0.34, 0.9, 0.5, -0.4],
    [3.2, 1.05, -0.18, 0.34, 0.9, 0.5, 0.4],
    [-5.18, -0.42, 1.05, 0.26, 0.75, 0.42, -0.55],
    [5.18, -0.42, 1.05, 0.26, 0.75, 0.42, 0.55],
    [-6.78, 0.36, 0.32, 0.2, 0.65, 0.34, -0.72],
    [6.78, 0.36, 0.32, 0.2, 0.65, 0.34, 0.72],
  ]) {
    const vane = new THREE.Mesh(new THREE.OctahedronGeometry(0.75, 0), shardMat);
    vane.position.set(x, y, z);
    vane.scale.set(sx, sy, sz);
    vane.rotation.z = rot;
    vaneMeshes.push(vane);
  }
  const crownMeshes = [];
  for (const [x, y, z, rot] of [
    [-1.55, 1.22, -0.18, -0.45], [-0.78, 1.55, -0.32, -0.2], [0, 1.75, -0.4, 0],
    [0.78, 1.55, -0.32, 0.2], [1.55, 1.22, -0.18, 0.45], [-2.4, 0.88, -0.08, -0.65],
    [2.4, 0.88, -0.08, 0.65],
  ]) {
    const crown = new THREE.Mesh(new THREE.ConeGeometry(0.26, 1.08, 5), shardMat);
    crown.position.set(x, y, z);
    crown.rotation.z = rot;
    crownMeshes.push(crown);
  }
  wings.add(...vaneMeshes, ...crownMeshes);
  parts.push(...vaneMeshes, ...crownMeshes);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.82, 0.13, 10, 42), glowMat(MAGENTA, 0.88));
  ring.rotation.x = Math.PI / 2;
  ring.position.set(0, 0.3, 0.1);
  const core = new THREE.Mesh(new THREE.SphereGeometry(0.68, 14, 10), glowMat(CYAN, 0.68));
  core.position.set(0, 0.08, 0.1);
  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.92, 14, 10), glowMat(MAGENTA, 1.0));
  weak.position.set(0, -1.55, 0.28);

  const engines = [];
  const engineShells = [];
  for (const x of [-1.82, 0, 1.82]) {
    const shell = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.5, 0.58, 8), goldMat);
    shell.rotation.x = Math.PI / 2;
    shell.position.set(x, -0.25, 2.55);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(x === 0 ? 0.42 : 0.47, 10, 6), glowMat(ORANGE, 0.9));
    flame.position.set(x, -0.25, 2.92);
    engineShells.push(shell);
    engines.push(flame);
  }
  parts.push(...engineShells);
  mesh.add(body, lattice, innerLattice, wings, ring, core, weak, ...engineShells, ...engines);
  return makeCraft(mesh, body, wings, ring, core, engines, weak, parts);
}

export function createWarden() {
  const mesh = new THREE.Group();
  const slabMat = stdMat(HULL_DARK, GOLD, 2.0);
  const armMat = stdMat(0x2a1200, GOLD, 2.2);
  const orangeMat = stdMat(0x1a0a08, ORANGE_EMISSIVE, 2.3);
  const cannonMat = stdMat(0x1a0804, ORANGE_EMISSIVE, 2.8);
  const body = new THREE.Mesh(new THREE.BoxGeometry(3.65, 1.5, 3.65), slabMat);
  body.position.set(0, 0, 0.12);
  const midSlab = new THREE.Mesh(new THREE.BoxGeometry(3.05, 1.0, 3.05), orangeMat);
  midSlab.position.set(0, 0.48, 0.18);
  const tower = new THREE.Mesh(new THREE.BoxGeometry(1.65, 2.25, 1.65), slabMat);
  tower.position.set(0, 1.18, 0.08);

  const wings = new THREE.Group();
  const parts = [midSlab, tower];
  const crossX = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.58, 1.38), armMat);
  crossX.position.set(0, -0.02, 0.16);
  const crossZ = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.58, 11.0), armMat);
  crossZ.position.set(0, -0.02, 0.16);
  const diagonalL = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.42, 1.05), slabMat);
  diagonalL.position.set(-2.45, 0.35, -2.45);
  diagonalL.rotation.y = -Math.PI / 4;
  const diagonalR = diagonalL.clone();
  diagonalR.position.x = 2.45;
  diagonalR.rotation.y = Math.PI / 4;
  wings.add(crossX, crossZ, diagonalL, diagonalR);
  parts.push(crossX, crossZ, diagonalL, diagonalR);

  const cannonMeshes = [];
  for (const [x, z, facing] of [[-4.55, -4.32, -1], [4.55, -4.32, -1], [-4.55, 4.62, 1], [4.55, 4.62, 1]]) {
    const cannon = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.54, 1.6, 8), cannonMat);
    cannon.rotation.x = Math.PI / 2;
    cannon.position.set(x, 0.32, z);
    if (facing > 0) cannon.rotation.x = -Math.PI / 2;
    const muzzle = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.07, 6, 14), glowMat(ORANGE, 0.82));
    muzzle.rotation.x = Math.PI / 2;
    muzzle.position.set(x, 0.32, z + facing * 0.8);
    cannonMeshes.push(cannon, muzzle);
  }
  wings.add(...cannonMeshes);
  parts.push(...cannonMeshes);
  const armorBlocks = [];
  for (const [x, z] of [[-2.15, -2.1], [2.15, -2.1], [-2.15, 2.32], [2.15, 2.32]]) {
    const armor = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.72, 0.92), slabMat);
    armor.position.set(x, 0.82, z);
    armor.rotation.y = x * z < 0 ? 0.16 : -0.16;
    armorBlocks.push(armor);
  }
  wings.add(...armorBlocks);
  parts.push(...armorBlocks);

  const ringInner = new THREE.Mesh(new THREE.TorusGeometry(3.25, 0.15, 9, 36), glowMat(GOLD, 0.9));
  ringInner.rotation.x = Math.PI / 2;
  ringInner.position.set(0, -0.38, 0.1);
  const ringOuter = new THREE.Mesh(new THREE.TorusGeometry(6.28, 0.12, 9, 44), glowMat(GOLD, 0.72));
  ringOuter.rotation.x = Math.PI / 2;
  ringOuter.position.set(0, -0.56, 0.08);
  const ring = ringInner;
  parts.push(ringOuter);

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.74, 14, 10), glowMat(ORANGE, 0.78));
  core.position.set(0, 0.12, 0.16);
  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.86, 14, 10), glowMat(GOLD, 0.96));
  weak.position.copy(core.position);

  const engines = [];
  const engineNozzles = [];
  for (const [x, y, z] of [[-1.26, -0.42, 3.05], [1.26, -0.42, 3.05], [0, -0.54, 3.45]]) {
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.56, 0.58, 8), cannonMat);
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(x, y, z);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.48, 10, 6), glowMat(ORANGE, 0.92));
    flame.position.set(x, y, z + 0.42);
    engineNozzles.push(nozzle);
    engines.push(flame);
  }
  parts.push(...engineNozzles);
  mesh.add(body, midSlab, tower, wings, ringInner, ringOuter, core, weak, ...engineNozzles, ...engines);
  return makeCraft(mesh, body, wings, ring, core, engines, weak, parts);
}

export function createSentinel() {
  const mesh = new THREE.Group();
  const scale = 1.7;
  const bodyMat = stdMat(HULL_DARK, CYAN, 2.5);
  const shellMat = stdMat(HULL_MID, MAGENTA, 1.8);
  const spikeMat = stdMat(HULL_MID, MAGENTA, 2.8);
  const body = new THREE.Mesh(new THREE.IcosahedronGeometry(1.62, 1), bodyMat);
  body.scale.setScalar(scale * 0.95);
  const innerShell = new THREE.Mesh(new THREE.IcosahedronGeometry(2.12, 1), shellMat);
  innerShell.scale.setScalar(scale * 0.84);
  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(2.78, 2), wireMat(CYAN, 0.55));
  shell.scale.setScalar(scale * 0.92);
  const outerShell = new THREE.Mesh(new THREE.IcosahedronGeometry(2.45, 1), wireMat(MAGENTA, 0.28));
  outerShell.scale.setScalar(scale * 1.02);

  const wings = new THREE.Group();
  const parts = [innerShell, outerShell];
  const spikeDirs = [
    [0, 0, -1], [0.72, 0.28, -0.62], [-0.72, 0.28, -0.62],
    [0.76, -0.3, 0.58], [-0.76, -0.3, 0.58], [0, 0.82, 0.38],
    [0, -0.82, 0.42], [0.72, 0.5, 0.18],
  ];
  const spikeMeshes = [];
  const up = new THREE.Vector3(0, 1, 0);
  for (const [dx, dy, dz] of spikeDirs) {
    const direction = new THREE.Vector3(dx, dy, dz).normalize();
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.34, 1.8, 5), spikeMat);
    spike.position.copy(direction).multiplyScalar(scale * 3.12);
    spike.quaternion.setFromUnitVectors(up, direction);
    spike.scale.setScalar(scale);
    spikeMeshes.push(spike);
  }
  wings.add(...spikeMeshes);
  parts.push(...spikeMeshes);

  const ringXZ = new THREE.Mesh(new THREE.TorusGeometry(3.92 * scale, 0.13 * scale, 9, 42), glowMat(CYAN, 0.82));
  ringXZ.rotation.x = Math.PI / 2;
  const ringXY = new THREE.Mesh(new THREE.TorusGeometry(3.62 * scale, 0.1 * scale, 9, 38), glowMat(CYAN, 0.68));
  const ringYZ = new THREE.Mesh(new THREE.TorusGeometry(4.25 * scale, 0.115 * scale, 9, 44), glowMat(MAGENTA, 0.74));
  ringYZ.rotation.y = Math.PI / 2;
  const ring = ringXZ;
  parts.push(ringXY, ringYZ);

  const core = new THREE.Mesh(new THREE.SphereGeometry(0.7, 14, 10), glowMat(MAGENTA, 0.74));
  core.scale.setScalar(scale * 0.82);
  const weak = new THREE.Mesh(new THREE.SphereGeometry(0.86, 14, 10), glowMat(MAGENTA, 1.0));
  weak.scale.setScalar(scale * 0.82);
  weak.position.set(0, -0.28 * scale, 0.22 * scale);

  const engines = [];
  const engineNozzles = [];
  for (const [x, y] of [[-1.38, -0.72], [1.38, -0.72], [-1.38, 0.72], [1.38, 0.72]]) {
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.5, 0.62, 8), shellMat);
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(x * scale, y * scale, 3.35 * scale);
    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 6), glowMat(ORANGE, 0.94));
    flame.position.set(x * scale, y * scale, 3.78 * scale);
    engineNozzles.push(nozzle);
    engines.push(flame);
  }
  parts.push(...engineNozzles);
  mesh.add(body, innerShell, shell, outerShell, wings, ringXZ, ringXY, ringYZ, core, weak,
    ...engineNozzles, ...engines);
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
