/** Shared easing and timing so the whole site moves with one rhythm (design/DESIGN_SPEC.md). */
export const ease = {
  out: [0.22, 1, 0.36, 1] as [number, number, number, number],
  inOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
};

export const duration = {
  micro: 0.2,
  standard: 0.7,
  slow: 0.9,
  hero: 1.2,
};
