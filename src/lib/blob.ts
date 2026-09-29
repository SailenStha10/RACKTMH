/**
 * Deterministic organic "ink splat" outline as a CSS clip-path polygon().
 * Seeded so server and client render the same shape.
 */
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function blobPolygon(seed: number, points = 96, roughness = 0.035): string {
  const rand = mulberry32(seed);
  const phase = [rand() * 6.28, rand() * 6.28, rand() * 6.28];
  const coords: string[] = [];

  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2;
    // Low-frequency wobble plus high-frequency jitter for the torn edge.
    const wobble =
      0.05 * Math.sin(angle * 2 + phase[0]) +
      0.04 * Math.sin(angle * 3 + phase[1]) +
      0.025 * Math.sin(angle * 5 + phase[2]);
    const jitter = (rand() - 0.5) * 2 * roughness;
    const r = 0.9 + wobble + jitter;
    const x = 50 + Math.cos(angle) * r * 50;
    const y = 50 + Math.sin(angle) * r * 50;
    coords.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
  }

  return `polygon(${coords.join(", ")})`;
}

export { blobPolygon };
