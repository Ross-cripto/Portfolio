import { rng } from "@/lib/rng";

const W = 1600, H = 1000;
const PALETTE = ["#b98b57", "#8c5b2c", "#c9a878", "#5e3d1d", "#a66f3f", "#d9c19a", "#7a4a22", "#e2cfae"];

/**
 * The watercolor wall behind the sheet: sepia brush strokes on cream, displaced by
 * turbulence, plus paper grain and a vignette. Deterministic, rendered on the server.
 */
export function Wall() {
  const r = rng("wall");
  const strokes = Array.from({ length: 270 }, (_, i) => {
    const x = r() * W, y = r() * H - 140;
    const w = 7 + r() * 22, h = 120 + r() * 380;
    const rot = (r() - 0.5) * 16;
    const fill = PALETTE[Math.floor(r() * PALETTE.length)] ?? PALETTE[0];
    const opacity = 0.18 + r() * 0.55;
    return (
      <rect key={i} x={x.toFixed(0)} y={y.toFixed(0)} width={w.toFixed(0)} height={h.toFixed(0)} rx={(w / 2).toFixed(0)}
        fill={fill} opacity={opacity.toFixed(2)} transform={`rotate(${rot.toFixed(1)} ${x.toFixed(0)} ${(y + h / 2).toFixed(0)})`} />
    );
  });
  const pools = Array.from({ length: 40 }, (_, i) => {
    const x = r() * W, y = r() * H;
    const rx = 10 + r() * 40, ry = 30 + r() * 120;
    const dark = r() < 0.5;
    const opacity = 0.15 + r() * 0.35;
    const rot = (r() - 0.5) * 20;
    return (
      <ellipse key={i} cx={x.toFixed(0)} cy={y.toFixed(0)} rx={rx.toFixed(0)} ry={ry.toFixed(0)}
        fill={dark ? "#4a2c12" : "#f3e6cf"} opacity={opacity.toFixed(2)} transform={`rotate(${rot.toFixed(1)} ${x.toFixed(0)} ${y.toFixed(0)})`} />
    );
  });
  return (
    <svg className="wall" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice" viewBox={`0 0 ${W} ${H}`}>
      <defs>
        <filter id="wc" x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency=".011 .018" numOctaves="3" seed="11" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="26" xChannelSelector="R" yChannelSelector="G" result="d" />
          <feGaussianBlur in="d" stdDeviation=".6" />
        </filter>
        <filter id="grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3" stitchTiles="stitch" />
          <feColorMatrix values="0 0 0 0 .3  0 0 0 0 .2  0 0 0 0 .1  0 0 0 .18 0" />
        </filter>
        <radialGradient id="vig" cx="50%" cy="45%" r="75%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#3a2410" stopOpacity=".35" />
        </radialGradient>
      </defs>
      <rect width={W} height={H} fill="#f0e6d2" />
      <g filter="url(#wc)" style={{ mixBlendMode: "multiply" }}>{strokes}{pools}</g>
      <rect width={W} height={H} filter="url(#grain)" opacity=".7" />
      <rect width={W} height={H} fill="url(#vig)" />
    </svg>
  );
}
