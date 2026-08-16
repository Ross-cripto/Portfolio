/**
 * Deterministic PRNG seeded from a string (FNV-1a → mulberry32).
 * Every polaroid tilt / fan offset is derived from its slug, so the layout is
 * identical on the server, on the client, and on every visit — no hydration drift.
 */
export function rng(seed: string): () => number {
  let h = 2166136261 >>> 0;
  for (const c of seed) {
    h ^= c.charCodeAt(0);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return () => {
    h += 0x6d2b79f5;
    let t = Math.imul(h ^ (h >>> 15), 1 | h);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type StackCard = {
  fanX: number;
  fanY: number;
  fanRot: number;
  rot: number;
  tilt: number;
};

/**
 * Geometry for a photo stack. Mirrors the reference site:
 * two back cards fan up-left / up-right (±8–14px, −11…−15px, ±3–5°), the front card
 * drops slightly; rest offset = fan × .15; rot-from = rot-to + 1.5°.
 */
export function stackGeometry(seed: string, cards: 1 | 3): StackCard[] {
  const r = rng(seed);
  const out: StackCard[] = [];
  for (let i = 0; i < cards; i++) {
    const last = i === cards - 1;
    let rot: number, fanX: number, fanY: number, fanRot: number;
    if (cards === 1) {
      rot = (r() < 0.5 ? -1 : 1) * (2 + r() * 2.5);
      fanX = 0; fanY = 0; fanRot = 0;
    } else if (last) {
      rot = (r() - 0.5) * 2;
      fanX = -3 + r() * 2; fanY = 4 + r() * 2; fanRot = -(2.5 + r() * 1.5);
    } else {
      const s = i === 0 ? 1 : -1;
      rot = s * (6 + r() * 2);
      fanX = s * (8 + r() * 6); fanY = -(11 + r() * 4); fanRot = -s * (3 + r() * 2);
    }
    out.push({ fanX, fanY, fanRot, rot, tilt: i % 2 === 0 ? -1.5 : 1.5 });
  }
  return out;
}

export const fx = (n: number) => Number(n.toFixed(2));
