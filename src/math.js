import * as THREE from 'three';

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function createFrenet(tangent, upHint = new THREE.Vector3(0, 1, 0)) {
  const t = tangent.clone().normalize();
  const up = upHint.clone();
  if (Math.abs(t.dot(up)) > 0.96) up.set(1, 0, 0);
  const binormal = new THREE.Vector3().crossVectors(t, up).normalize();
  const normal = new THREE.Vector3().crossVectors(binormal, t).normalize();
  return { tangent: t, normal, binormal };
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function clamp(v, a, b) {
  return Math.max(a, Math.min(b, v));
}

export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export class InfinitePath {
  constructor() {
    this.points = [];
    this.rng = mulberry32(0xa37e);
    this.cursor = 0;
    for (let i = 0; i < 64; i++) this._append();
    this.curve = new THREE.CatmullRomCurve3(this.points, false, 'catmullrom', 0.45);
    this._length = this.curve.getLength();
  }

  _append() {
    const i = this.cursor++;
    const x =
      Math.sin(i * 0.21) * 38 +
      Math.sin(i * 0.07) * 22 +
      Math.cos(i * 0.031) * 12;
    const y =
      Math.cos(i * 0.17) * 16 +
      Math.sin(i * 0.39) * 11 +
      Math.sin(i * 0.053) * 8;
    const z = -i * 34;
    this.points.push(new THREE.Vector3(x, y, z));
  }

  ensure(distance) {
    while (this._length - distance < 900) {
      this._append();
      if (this.points.length > 220) {
        this.points.splice(0, 20);
      }
      this.curve = new THREE.CatmullRomCurve3(this.points, false, 'catmullrom', 0.45);
      this._length = this.curve.getLength();
    }
  }

  sample(distance) {
    this.ensure(distance);
    const len = this._length;
    const u = clamp(distance / len, 0, 0.995);
    const pos = this.curve.getPointAt(u);
    const tangent = this.curve.getTangentAt(u).normalize();
    const ahead = this.curve.getPointAt(clamp(u + 0.01, 0, 1));
    return { pos, tangent, ahead, u };
  }

  rebuildRibbon() {
    return new THREE.TubeGeometry(this.curve, 360, 1.35, 12, false);
  }
}
