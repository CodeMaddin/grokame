# AETHER DRIFT

A third-person rift flyer with custom GLSL shaders, volumetric nebula, iridescent crystals, bloom, and cinematic post-processing. Built with **JavaScript + Three.js + WebGL** so it runs in any modern browser.

## Play

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (default `http://localhost:5173`).

```bash
npm run build
npm run preview
```

## Controls

| Input | Action |
| --- | --- |
| Mouse / WASD / Arrows | Steer |
| Click / Space | Fire |
| Shift | Boost |
| P | Pause |

Collect cyan and gold cores, thread the neon gates, and burn down red sentinels before a crystal shears your hull. Combo multiplies everything. Survive the rift.

## Why this stack

The brief was visually expensive, simple to demonstrate, and actually finishable. A browser WebGL game is the sweet spot:

- Custom fragment shaders for nebula, crystals, atmosphere, the rift ribbon, and orbs
- HDR bloom, chromatic aberration, god-ray shafts, film grain, and hurt flash
- Dynamic point lights from engines, pickups, and the sentinel
- No installers, no GPU API mismatch, one `npm run dev` to show it off
