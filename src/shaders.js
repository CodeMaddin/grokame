import * as THREE from 'three';

export const noiseGLSL = /* glsl */ `
float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float vnoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
    mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y),
    f.z
  );
}

float fbm(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 5; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + 17.1;
    a *= 0.5;
  }
  return s;
}
`;

export const nebulaVertex = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vDir;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  vDir = position;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const nebulaFragment = /* glsl */ `
uniform float uTime;
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uC;
varying vec3 vWorldPos;
varying vec3 vDir;

${noiseGLSL}

void main() {
  vec3 dir = normalize(vDir);
  float t = uTime * 0.018;

  float n1 = fbm(dir * 2.6 + vec3(t, 0.0, -t * 0.6));
  float n2 = fbm(dir * 5.4 + vec3(-t * 1.3, t * 0.4, 0.2));
  float n3 = fbm(dir * 9.0 - vec3(0.0, t, t * 0.7));

  float veil = smoothstep(0.28, 0.85, n1);
  float veins = smoothstep(0.55, 0.92, n2) * veil;
  float cores = pow(smoothstep(0.62, 1.0, n3 * n1), 2.2);

  vec3 col = vec3(0.015, 0.01, 0.04);
  col += uA * veil * 0.85;
  col += uB * veins * 1.15;
  col += uC * cores * 1.6;

  float pole = pow(abs(dir.y), 1.6);
  col += vec3(0.05, 0.12, 0.28) * pole * 0.35;

  float star = hash(dir * 420.0);
  float twinkle = 0.65 + 0.35 * sin(uTime * (8.0 + star * 12.0) + star * 40.0);
  float starMask = step(0.9965, star) * twinkle;
  col += vec3(0.85, 0.92, 1.0) * starMask * 1.8;

  float brightStar = step(0.9994, hash(dir * 180.0));
  col += vec3(1.0, 0.85, 1.0) * brightStar * 2.4;

  gl_FragColor = vec4(col, 1.0);
}
`;

export const crystalVertex = /* glsl */ `
varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vObjectPos;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  vObjectPos = position;
  vNormal = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const crystalFragment = /* glsl */ `
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uGlow;
uniform vec3 uLightPos[6];
uniform vec3 uLightColor[6];
uniform float uLightInt[6];
uniform vec3 uFogColor;
uniform float uFogDensity;

varying vec3 vWorldPos;
varying vec3 vNormal;
varying vec3 vObjectPos;

${noiseGLSL}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float ndv = max(dot(N, V), 0.0);
  float fresnel = pow(1.0 - ndv, 2.8);

  float inner = fbm(vObjectPos * 2.4 + vec3(0.0, uTime * 0.22, 0.0));
  vec3 irid = 0.5 + 0.5 * cos(6.2831 * (vec3(0.0, 0.33, 0.67) + inner + fresnel * 0.7));

  vec3 albedo = mix(uColor, irid, 0.42);
  vec3 col = albedo * 0.12;

  for (int i = 0; i < 6; i++) {
    vec3 L = uLightPos[i] - vWorldPos;
    float d = length(L);
    L /= max(d, 0.0001);
    float att = uLightInt[i] / (1.0 + d * d * 0.045);
    float diff = max(dot(N, L), 0.0);
    vec3 H = normalize(L + V);
    float spec = pow(max(dot(N, H), 0.0), 48.0);
    float wrap = diff * 0.65 + 0.35;
    col += uLightColor[i] * att * (albedo * wrap * 0.85 + spec * 1.35);
  }

  col += uGlow * (0.28 + inner * 0.9);
  col += fresnel * mix(uGlow, vec3(0.75, 0.95, 1.0), 0.5) * 1.55;
  col += pow(inner, 3.0) * uGlow * 1.8;

  float fog = 1.0 - exp(-uFogDensity * length(vWorldPos - cameraPosition));
  col = mix(col, uFogColor, clamp(fog, 0.0, 0.92));

  gl_FragColor = vec4(col, 0.94);
}
`;

export const riftVertex = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;

void main() {
  vUv = uv;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const riftFragment = /* glsl */ `
uniform float uTime;
uniform vec3 uColorA;
uniform vec3 uColorB;
varying vec2 vUv;
varying vec3 vWorldPos;

${noiseGLSL}

void main() {
  float flow = vUv.x * 18.0 - uTime * 1.6;
  float n = fbm(vec3(vUv.x * 6.0, vUv.y * 4.0, uTime * 0.25));
  float ring = abs(vUv.y - 0.5) * 2.0;
  float core = pow(1.0 - ring, 3.4);
  float bands = 0.55 + 0.45 * sin(flow + n * 8.0);
  vec3 col = mix(uColorA, uColorB, n);
  col *= core * (1.2 + bands);
  col += vec3(1.0) * pow(core, 6.0) * 1.8;
  float fog = smoothstep(220.0, 40.0, length(vWorldPos - cameraPosition));
  float alpha = core * 0.85 * fog;
  gl_FragColor = vec4(col, alpha);
}
`;

export const planetVertex = /* glsl */ `
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vObj;

void main() {
  vObj = position;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const planetFragment = /* glsl */ `
uniform float uTime;
uniform vec3 uLightDir;
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vObj;

${noiseGLSL}

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float ndl = max(dot(N, normalize(uLightDir)), 0.0);
  float n = fbm(vObj * 2.2);
  float n2 = fbm(vObj * 6.0 + 4.0);
  vec3 land = mix(vec3(0.08, 0.05, 0.16), vec3(0.22, 0.08, 0.34), n);
  vec3 ocean = vec3(0.03, 0.08, 0.2);
  vec3 col = mix(ocean, land, smoothstep(0.46, 0.58, n));
  col += vec3(0.7, 0.35, 1.0) * smoothstep(0.72, 0.9, n2) * 0.18;
  col *= 0.12 + ndl * 0.95;
  float night = pow(1.0 - ndl, 3.0);
  float cities = step(0.82, n2) * night;
  col += vec3(1.0, 0.75, 0.45) * cities * 0.9;
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 3.0);
  col += vec3(0.35, 0.55, 1.0) * fresnel * 0.45;
  gl_FragColor = vec4(col, 1.0);
}
`;

export const atmosphereVertex = /* glsl */ `
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const atmosphereFragment = /* glsl */ `
uniform vec3 uColor;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float fresnel = pow(1.0 - abs(dot(N, V)), 2.4);
  float alpha = fresnel * 0.85;
  gl_FragColor = vec4(uColor * (0.6 + fresnel), alpha);
}
`;

export const orbVertex = /* glsl */ `
uniform float uTime;
uniform float uSeed;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec3 p = position * (1.0 + 0.08 * sin(uTime * 4.0 + uSeed));
  vec4 world = modelMatrix * vec4(p, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const orbFragment = /* glsl */ `
uniform vec3 uColor;
uniform float uTime;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.0);
  vec3 col = uColor * (1.4 + 0.6 * sin(uTime * 6.0));
  col += vec3(1.0) * fresnel * 1.6;
  gl_FragColor = vec4(col, 0.9);
}
`;

export const particleVertex = /* glsl */ `
attribute float aSize;
attribute vec3 aColor;
attribute float aSeed;
uniform float uTime;
uniform float uPixelRatio;
varying vec3 vColor;
varying float vSeed;

void main() {
  vColor = aColor;
  vSeed = aSeed;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float pulse = 0.75 + 0.25 * sin(uTime * 3.0 + aSeed * 12.0);
  gl_PointSize = aSize * uPixelRatio * pulse * (180.0 / max(0.001, -mv.z));
  gl_Position = projectionMatrix * mv;
}
`;

export const particleFragment = /* glsl */ `
varying vec3 vColor;
varying float vSeed;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float core = smoothstep(0.5, 0.0, d);
  vec3 col = vColor * (0.6 + core * 1.8);
  gl_FragColor = vec4(col, core * core);
}
`;

export const trailVertex = /* glsl */ `
attribute vec3 aColor;
attribute float aAlpha;
varying vec3 vColor;
varying float vAlpha;

void main() {
  vColor = aColor;
  vAlpha = aAlpha;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const trailFragment = /* glsl */ `
varying vec3 vColor;
varying float vAlpha;

void main() {
  gl_FragColor = vec4(vColor, vAlpha);
}
`;

export const hullVertex = /* glsl */ `
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPos = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

export const hullFragment = /* glsl */ `
uniform vec3 uColor;
uniform vec3 uRim;
uniform vec3 uLightDir;
varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec3 N = normalize(vNormal);
  vec3 V = normalize(cameraPosition - vWorldPos);
  float ndv = max(dot(N, V), 0.0);
  float fresnel = pow(1.0 - ndv, 2.4);
  float ndl = max(dot(N, normalize(uLightDir)), 0.0);
  vec3 col = uColor * (0.5 + ndl * 0.7);
  col += uRim * fresnel * 2.2;
  col += uRim * pow(ndv, 8.0) * 0.15;
  gl_FragColor = vec4(col, 1.0);
}
`;

export const cinematicShader = {
  uniforms: {
    tDiffuse: { value: null },
    uTime: { value: 0 },
    uBoost: { value: 0 },
    uHurt: { value: 0 },
    uSunPos: { value: new THREE.Vector2(0.72, 0.68) },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uFlare: { value: 1 },
    uCockpit: { value: 0 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uBoost;
    uniform float uHurt;
    uniform vec2 uSunPos;
    uniform vec2 uResolution;
    uniform float uFlare;
    uniform float uCockpit;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      vec2 center = uv - 0.5;
      float dist = length(center);

      float aberr = (0.0018 + uBoost * 0.0045 + dist * 0.004) * mix(1.0, 0.28, uCockpit);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + center * aberr).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - center * aberr).b;

      vec2 sun = uSunPos;
      float onScreen = step(0.0, sun.x) * step(sun.x, 1.0) * step(0.0, sun.y) * step(sun.y, 1.0);
      vec2 dir = sun - uv;
      float decay = 0.93;
      vec2 stepDir = dir / 10.0;
      vec3 shafts = vec3(0.0);
      vec2 suv = uv;
      float w = 1.0;
      for (int i = 0; i < 10; i++) {
        suv += stepDir;
        vec3 s = texture2D(tDiffuse, clamp(suv, 0.0, 1.0)).rgb;
        float lum = dot(s, vec3(0.299, 0.587, 0.114));
        float sunProx = smoothstep(0.12, 0.018, length(suv - sun));
        shafts += s * step(1.55, lum) * w * sunProx;
        w *= decay;
      }
      col += shafts * 0.03 * onScreen * uFlare;

      float vig = smoothstep(0.95, 0.28, dist);
      col *= mix(0.55, 1.0, vig);

      float grain = fract(sin(dot(uv * uResolution + uTime * 40.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (grain - 0.5) * 0.035;

      col *= 1.0 + uBoost * 0.12;
      col = mix(col, vec3(0.7, 0.05, 0.12), uHurt * 0.45);

      float scan = 0.96 + 0.04 * sin(uv.y * uResolution.y * 1.6 + uTime * 8.0);
      col *= scan;

      gl_FragColor = vec4(col, 1.0);
    }
  `,
};
