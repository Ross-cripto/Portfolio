/* Generated "photos" for rows without a screenshot (companies, areas, links). 57×32 viewBox. */
import type { ReactNode } from "react";
import type { Art, ArtKind } from "@/content/site";

export function artGlyph(kind: ArtKind, fg: string, bg: string, v: 0 | 1 | 2 = 0): ReactNode {
  switch (kind) {
    case "gear": return (<><circle cx="28.5" cy="16" r="6.5" fill="none" stroke={fg} strokeWidth="2.4"/><circle cx="28.5" cy="16" r="2" fill={fg}/><path d="M28.5 6v4M28.5 22v4" stroke={fg} strokeWidth="2.4" strokeLinecap="round" transform="rotate(0 28.5 16)"/><path d="M28.5 6v4M28.5 22v4" stroke={fg} strokeWidth="2.4" strokeLinecap="round" transform="rotate(45 28.5 16)"/><path d="M28.5 6v4M28.5 22v4" stroke={fg} strokeWidth="2.4" strokeLinecap="round" transform="rotate(90 28.5 16)"/><path d="M28.5 6v4M28.5 22v4" stroke={fg} strokeWidth="2.4" strokeLinecap="round" transform="rotate(135 28.5 16)"/></>);
    case "receipt": return (<><rect x="17" y="5" width="23" height="24" fill={fg} opacity=".9"/><path d="M21 11h15M21 15h15M21 19h9M21 24h15" stroke={bg} strokeWidth="1.6" strokeLinecap="round"/></>);
    case "cross": return (<><path d="M24 9h9v5h5v9h-5v5h-9v-5h-5v-9h5z" fill={fg}/></>);
    case "laptop": return (<><rect x="17" y="8" width="23" height="14" rx="1.5" fill="none" stroke={fg} strokeWidth="2"/><path d="M13 25h31" stroke={fg} strokeWidth="2.4" strokeLinecap="round"/><path d="M22 13h6M22 17h10" stroke={fg} strokeWidth="1.5" strokeLinecap="round" opacity=".7"/></>);
    case "term": return (<><path d="M8 10l4 3-4 3" stroke={fg} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d={`M15 13h${[26,18,32][v]}`} stroke={fg} strokeWidth="2.2" strokeLinecap="round" opacity=".9"/><path d={`M8 21h${[30,38,20][v]}M8 26h${[16,24,30][v]}`} stroke={fg} strokeWidth="2" strokeLinecap="round" opacity=".45"/></>);
    case "bars": return (<><rect x="10" y={[7,9,6][v]} width="37" height="5" rx="1.5" fill={fg} opacity=".95"/><rect x="10" y={[15,17,14][v]} width={[30,37,24][v]} height="5" rx="1.5" fill={fg} opacity=".7"/><rect x="10" y={[23,25,22][v]} width={[22,30,37][v]} height="5" rx="1.5" fill={fg} opacity=".45"/></>);
    case "nodes": return (<><path d="M28.5 9v9M28.5 18l-12 6M28.5 18l12 6" stroke={fg} strokeWidth="1.6" strokeDasharray="2 2" opacity=".8"/><circle cx="28.5" cy="9" r="3.5" fill="#e0234e"/><circle cx="16.5" cy="24" r="3" fill={fg}/><circle cx="28.5" cy="24" r="3" fill={fg}/><circle cx="40.5" cy="24" r="3" fill={fg}/></>);
    case "braces": return (<><text x="28.5" y="22" textAnchor="middle" fontFamily="ui-monospace,Menlo,monospace" fontSize="17" fontWeight="600" fill={fg}>{`${['{ }','[ ]','( )'][v]}`}</text></>);
    case "py": return (<><text x="28.5" y="21" textAnchor="middle" fontFamily="ui-monospace,Menlo,monospace" fontSize="13" fontWeight="600" fill={fg}>py</text></>);
    case "tag": return (<><text x="28.5" y="21" textAnchor="middle" fontFamily="ui-monospace,Menlo,monospace" fontSize="13" fontWeight="600" fill={fg}>{"</>"}</text></>);
    case "db": return (<><ellipse cx="28.5" cy="10" rx="10" ry="3.5" fill="none" stroke={fg} strokeWidth="2"/><path d="M18.5 10v12c0 2 4.5 3.5 10 3.5s10-1.5 10-3.5V10M18.5 16c0 2 4.5 3.5 10 3.5s10-1.5 10-3.5" fill="none" stroke={fg} strokeWidth="2"/></>);
    case "cloud": return (<><path d="M20 24a5 5 0 0 1-.7-9.95A7 7 0 0 1 32.5 12a5.5 5.5 0 0 1 0 12z" fill="none" stroke={fg} strokeWidth="2" strokeLinejoin="round" transform="translate(4 -1)"/></>);
    case "check": return (<><path d="M18 17l7 6 14-14" fill="none" stroke={fg} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></>);
    case "spark": return (<><path d="M28.5 6l2.4 6.1 6.1 2.4-6.1 2.4-2.4 6.1-2.4-6.1-6.1-2.4 6.1-2.4z" fill={fg}/><path d="M40 20l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" fill={fg} opacity=".7"/></>);
    case "gh": return (<><text x="28.5" y="21" textAnchor="middle" fontFamily="ui-monospace,Menlo,monospace" fontSize="13" fontWeight="700" fill={fg}>gh</text></>);
    case "in": return (<><text x="28.5" y="21" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize="14" fontWeight="800" fill={fg}>in</text></>);
    case "mail": return (<><rect x="17" y="9" width="23" height="15" rx="2" fill="none" stroke={fg} strokeWidth="2"/><path d="M17 11l11.5 8L40 11" fill="none" stroke={fg} strokeWidth="2" strokeLinejoin="round"/></>);
    case "panda": return (<><circle cx="20" cy="9" r="4.5" fill={fg}/><circle cx="37" cy="9" r="4.5" fill={fg}/><path d="M15 18c0-6 6-10 13.5-10S42 12 42 18s-6 10-13.5 10S15 24 15 18z" fill="#fbfbf8" stroke={fg} strokeWidth="1.5"/><ellipse cx="23" cy="17" rx="4" ry="3.4" fill={fg} transform="rotate(-12 23 17)"/><ellipse cx="34" cy="17" rx="3.5" ry="3" fill={fg} transform="rotate(10 34 17)"/><circle cx="34" cy="17" r=".9" fill="#fff"/><path d="M26.5 22.5c1.3 1 2.7 1 4 0" fill="none" stroke={fg} strokeWidth="1.2" strokeLinecap="round"/></>);
    default: return null;
  }
}

/** A full 57×32 tile: solid background, tone shift per variant, glyph on top. */
export function ArtTile({ art, v = 0, className }: { art: Art; v?: 0 | 1 | 2; className?: string }) {
  return (
    <svg viewBox="0 0 57 32" className={className} aria-hidden="true" focusable="false">
      <rect width="57" height="32" fill={art.bg} />
      {v === 1 && <rect width="57" height="32" fill="#fff" opacity=".07" />}
      {v === 2 && <rect width="57" height="32" fill="#000" opacity=".12" />}
      {artGlyph(art.kind, art.fg, art.bg, v)}
    </svg>
  );
}

/** Just the glyph, centred — used at hero size. */
export function ArtGlyph({ art, className }: { art: Art; className?: string }) {
  return (
    <svg viewBox="12 4 33 24" className={className} aria-hidden="true" focusable="false">
      {artGlyph(art.kind, art.fg, art.bg, 0)}
    </svg>
  );
}
