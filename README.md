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
| A / D | Slide left / right — the ship stays where you leave it |
| W / S | Move up / down the playfield |
| Click / Space | Fire straight forward |
| Shift | Boost |
| 1 / 2 / 3 | Chase / cockpit / scroll camera |
| V | Cycle camera |
| P | Pause |

The rift auto-scrolls like a vertical shmup. Strafe across the playfield; the ship never yaws or springs back to center, and the guns always shoot up the screen. Enemies enter from the top in lanes and descend. Amber cores sit in your path and will wreck the hull unless you shoot them. Locked magenta gates have to be shot open. Combat is the score. Orbs off the path are just snacks.

## Why this stack

The brief was visually expensive, simple to demonstrate, and actually finishable. A browser WebGL game is the sweet spot:

- Custom fragment shaders for nebula, crystals, atmosphere, the rift ribbon, and orbs
- HDR bloom, chromatic aberration, god-ray shafts, film grain, and hurt flash
- Dynamic point lights from engines, pickups, and the sentinel
- No installers, no GPU API mismatch, one `npm run dev` to show it off
