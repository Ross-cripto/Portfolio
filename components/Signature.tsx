/** Hand-drawn "Ross" — one stroke, drawn on with stroke-dashoffset at load. */
export function Signature({ label = "Ross" }: { label?: string }) {
  return (
    <svg className="sig" viewBox="0 0 220 100" role="img" aria-label={label}>
      <path d="M16 78 C 18 62, 22 36, 28 12 C 32 4, 48 4, 54 14 C 60 26, 46 38, 34 40 C 32 40, 32 41, 34 42 C 42 44, 52 56, 60 74 C 62 80, 70 78, 74 70 M 100 62 C 100 44, 78 42, 78 58 C 78 70, 90 74, 98 66 C 102 62, 108 60, 112 62 C 116 56, 122 48, 126 46 C 133 50, 132 62, 120 66 C 115 68, 118 73, 127 70 C 134 62, 142 48, 148 46 C 155 50, 154 62, 142 66 C 137 68, 140 73, 152 69" />
    </svg>
  );
}
