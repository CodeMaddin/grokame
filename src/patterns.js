/** Authored elite volleys. `fire(pathDist, laneX, speed, fat)` shoots one rail bullet. */

export function nextVolley(en, span, playerLane, time, fire) {
  const x = en.offset?.x ?? 0;
  const s = en.pathDist - 4;
  const aim = playerLane ?? x;
  en.patternI = (en.patternI || 0) % 12;
  const i = en.patternI;
  en.patternI += 1;

  if (en.role === 'queen') return queenVolley(i, s, x, aim, span, fire, en);
  if (en.role === 'empress') return empressVolley(i, s, x, aim, span, fire, en);
  if (en.role === 'warden') return wardenVolley(i, s, x, aim, span, fire, en);
  if (en.role === 'coil') return coilVolley(i, s, x, aim, span, fire, en);
  if (en.role === 'finale') return finaleVolley(en, s, span, aim, time, fire);
  if (en.role === 'cinder') {
    fire(s, x - span * 0.04, 7.8, false);
    fire(s, x + span * 0.04, 7.8, false);
    return 0;
  }
  if (en.role === 'acolyte') {
    fire(s, x, 7.2, false);
    fire(s - 3, x, 6.8, false);
    return 0;
  }
  if (en.role === 'heavy' || en.role === 'slag' || en.role === 'chime') {
    const spread = Math.min(8, span * 0.08);
    if (i % 3 === 0) {
      fire(s, x - spread, 7, false);
      fire(s, x + spread, 7, false);
    } else if (i % 3 === 1) {
      fire(s, aim, 7.4, true);
      fire(s, x, 7, false);
    } else {
      fire(s, x - spread * 0.5, 6.8, false);
      fire(s, x + spread * 0.5, 6.8, false);
      fire(s - 3, x, 7.2, true);
    }
    return 0;
  }
  if (en.role === 'prism') {
    fire(s, x - span * 0.08, 7.2, false);
    fire(s, x + span * 0.08, 7.2, false);
    fire(s - 2, x - span * 0.14, 6.6, false);
    fire(s - 2, x + span * 0.14, 6.6, false);
    return 0;
  }
  if (en.role === 'ion') {
    fire(s, x - span * 0.045, 8.2, false);
    fire(s, x + span * 0.045, 8.2, false);
    return 0;
  }
  if (en.role === 'bloom') {
    fire(s, x - span * 0.06, 7.6, false);
    fire(s, x + span * 0.06, 7.6, false);
    return 0;
  }
  if (en.role === 'wisp') {
    fire(s + 1, x + Math.sin(time * 3.2) * span * 0.1, 7.4, false);
    return 0;
  }
  fire(s + 1, x, 8, false);
  return 0;
}

function climax(en) {
  return !!(en && (en.levelBoss || en.superBoss) && (en.phase || 1) >= 3);
}

function queenVolley(i, s, x, aim, span, fire, en) {
  if (climax(en)) {
    const beat = i % 4;
    if (beat === 0) {
      for (let k = 0; k < 5; k++) fire(s - k * 3, x + (k - 2) * span * 0.15, 6.8, k === 2);
      return 0;
    }
    if (beat === 1) return en.superBoss ? 0.72 : 0.58;
    if (beat === 2) {
      fire(s, aim, 7.5, true);
      fire(s - 6, aim - span * 0.2, 6.6, true);
      fire(s - 6, aim + span * 0.2, 6.6, true);
      return 0;
    }
    return 0.46;
  }
  const step = i % 6;
  const fan = span * 0.16;
  const curtain = span * 0.12;
  if (step === 0) {
    for (let k = -2; k <= 2; k++) fire(s, x + k * fan, 7.2, k === 0);
    return 0;
  }
  if (step === 1) {
    fire(s, aim, 7.6, true);
    fire(s, aim - span * 0.06, 7.2, false);
    fire(s, aim + span * 0.06, 7.2, false);
    return 0;
  }
  if (step === 2) return 0.55;
  if (step === 3) {
    for (let k = -3; k <= 3; k++) fire(s - Math.abs(k) * 2, x + k * curtain, 6.4, false);
    return 0;
  }
  if (step === 4) {
    fire(s, x - fan * 1.4, 6.8, true);
    fire(s, x + fan * 1.4, 6.8, true);
    fire(s - 5, aim, 7.4, true);
    return 0;
  }
  return 0.4;
}

function empressVolley(i, s, x, aim, span, fire, en) {
  if (climax(en)) {
    const beat = i % 4;
    if (beat === 0) {
      fire(s, x - span * 0.72, 6.6, true);
      fire(s, x + span * 0.72, 6.6, true);
      fire(s - 4, x - span * 0.82, 6.4, false);
      fire(s - 4, x + span * 0.82, 6.4, false);
      return 0;
    }
    if (beat === 1) return en.superBoss ? 0.64 : 0.5;
    if (beat === 2) {
      fire(s, aim, 7.4, true);
      fire(s - 5, x, 7.0, true);
      return 0;
    }
    return 0.4;
  }
  const step = i % 6;
  const fan = span * 0.18;
  const curtain = span * 0.13;
  if (step === 0) {
    for (let k = -3; k <= 3; k++) fire(s, x + k * fan * 0.72, 7.1, k === 0);
    return 0;
  }
  if (step === 1) {
    fire(s, aim, 7.6, true);
    fire(s, aim - span * 0.07, 7.2, false);
    fire(s, aim + span * 0.07, 7.2, false);
    fire(s - 4, x, 7.0, true);
    return 0;
  }
  if (step === 2) return 0.5;
  if (step === 3) {
    for (let k = -3; k <= 3; k++) fire(s - Math.abs(k) * 2, x + k * curtain, 6.4, false);
    return 0;
  }
  if (step === 4) {
    fire(s, x - fan * 1.5, 6.8, true);
    fire(s, x + fan * 1.5, 6.8, true);
    fire(s - 5, aim, 7.4, true);
    fire(s - 8, aim - fan, 6.6, false);
    fire(s - 8, aim + fan, 6.6, false);
    return 0;
  }
  return 0.38;
}

function coilVolley(i, s, x, aim, span, fire, en) {
  if (climax(en)) {
    const well = span * 0.28;
    if (i % 2 === 0) {
      fire(s, x - well, 6.4, true);
      fire(s - 5, x - well * 0.5, 6.6, false);
      return 0.16;
    }
    fire(s, x + well, 6.4, true);
    fire(s - 5, x + well * 0.5, 6.6, false);
    fire(s - 8, aim, 7.1, true);
    return en.superBoss ? 0.55 : 0.42;
  }
  const step = i % 6;
  const well = span * 0.2;
  if (step === 0) {
    fire(s, x - well, 6.6, true);
    fire(s, x + well, 6.6, true);
    fire(s, x, 7.4, true);
    return 0;
  }
  if (step === 1) {
    fire(s, aim, 7.3, true);
    fire(s, x - well * 0.5, 6.8, false);
    fire(s, x + well * 0.5, 6.8, false);
    return 0;
  }
  if (step === 2) return 0.52;
  if (step === 3) {
    for (let k = -2; k <= 2; k++) fire(s, x + k * well * 0.55, 6.4, k === 0);
    return 0;
  }
  if (step === 4) {
    fire(s, x - well, 6.5, true);
    fire(s, x + well, 6.5, true);
    fire(s - 6, aim, 7.1, true);
    return 0;
  }
  return 0.42;
}

function wardenVolley(i, s, x, aim, span, fire, en) {
  if (climax(en)) {
    const beat = i % 4;
    if (beat === 0) {
      fire(s, x - span * 0.5, 6.3, true);
      fire(s, x + span * 0.5, 6.3, true);
      fire(s - 6, x - span * 0.66, 6.1, false);
      fire(s - 6, x + span * 0.66, 6.1, false);
      return 0;
    }
    if (beat === 1) return en.superBoss ? 0.76 : 0.62;
    if (beat === 2) {
      fire(s, aim - span * 0.48, 6.8, true);
      fire(s, aim + span * 0.48, 6.8, true);
      return 0;
    }
    return 0.44;
  }
  const step = i % 6;
  const cross = span * 0.22;
  if (step === 0) {
    fire(s, x - cross, 6.4, true);
    fire(s, x + cross, 6.4, true);
    fire(s, x, 7.5, true);
    fire(s - 6, x - cross * 0.5, 6.8, false);
    fire(s - 6, x + cross * 0.5, 6.8, false);
    return 0;
  }
  if (step === 1) {
    fire(s, aim - 4, 6.8, true);
    fire(s, aim + 4, 6.8, true);
    fire(s, aim, 7.2, true);
    return 0;
  }
  if (step === 2) return 0.62;
  if (step === 3) {
    for (let k = -2; k <= 2; k++) fire(s, x + k * cross * 0.55, 6.2, k === 0);
    return 0;
  }
  if (step === 4) {
    fire(s, x - cross, 6.2, true);
    fire(s, x + cross, 6.2, true);
    fire(s - 8, aim - 6, 6.6, false);
    fire(s - 8, aim + 6, 6.6, false);
    fire(s - 4, aim, 7, true);
    return 0;
  }
  return 0.48;
}

function finaleVolley(en, s, span, aim, time, fire) {
  const phase = en.phase || 1;
  const spread = span * (phase === 3 ? 0.34 : 0.26);
  const beat = (en.patternI || 0) % 4;
  if (phase === 1) {
    if (beat === 2) return 0.42;
    const n = 3;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1) - 0.5;
      fire(s, t * spread * 2, 8, true);
    }
    fire(s - 3, aim, 7.4, true);
    return 0;
  }
  if (phase === 2) {
    if (beat % 2 === 0) {
      for (let i = 0; i < 5; i++) {
        const t = i / 4 - 0.5;
        fire(s, t * spread * 2, 7.6, true);
      }
      return 0;
    }
    if (beat === 1) {
      fire(s, aim - spread * 0.35, 7.2, true);
      fire(s, aim + spread * 0.35, 7.2, true);
      fire(s - 5, aim, 6.8, true);
      return 0;
    }
    return 0.4;
  }
  if (beat === 0) {
    fire(s, -spread * 0.7, 6.6, true);
    fire(s, spread * 0.7, 6.6, true);
    fire(s - 8, Math.sin(time * 2.4) * spread, 6.4, true);
    return 0;
  }
  if (beat === 1) return 0.58;
  if (beat === 2) {
    fire(s, aim, 6.8, true);
    fire(s - 6, -spread * 0.45, 6.4, true);
    fire(s - 6, spread * 0.45, 6.4, true);
    return 0;
  }
  return 0.4;
}
