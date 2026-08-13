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
| Mouse | Look / aim |
| A / D | Strafe |
| W / S | Throttle / brake |
| Click / Space | Fire |
| Shift | Boost |
| 1 / 2 / 3 | Chase / cockpit / scroll camera |
| V | Cycle camera |
| P | Pause |

The cyan ribbon is a guide, not a cage — fly out into the canyon. Amber cores sit in your path and will wreck the hull unless you shoot them. Red hunters chase you; gold gunships sit ahead and fire. Locked magenta gates have to be shot open. Combat is the score. Orbs off the path are just snacks.

## Why this stack

The brief was visually expensive, simple to demonstrate, and actually finishable. A browser WebGL game is the sweet spot:

- Custom fragment shaders for nebula, crystals, atmosphere, the rift ribbon, and orbs
- HDR bloom, chromatic aberration, god-ray shafts, film grain, and hurt flash
- Dynamic point lights from engines, pickups, and the sentinel
- No installers, no GPU API mismatch, one `npm run dev` to show it off
