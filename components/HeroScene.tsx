import Image from "next/image";
import type { Item } from "@/content/site";
import { ArtGlyph } from "./art";

/** Hero photo for an entry: real screenshot, hand-made scene, or icon-on-colour. */
export function Hero({ item }: { item: Item }) {
  if (item.shot) {
    return (
      <div className="hero-img" role="img" aria-label={item.title}>
        <Image src={`/shots/${item.shot}.jpg`} alt="" fill priority sizes="(max-width: 600px) 90vw, 520px" />
      </div>
    );
  }
  const scene = item.art ? sceneFor(item.art.kind) : null;
  if (scene) return <div className="hero-img" role="img" aria-label={item.title} style={{ background: item.art!.bg }}>{scene}</div>;
  if (item.art) {
    return (
      <div className="hero-img tone" role="img" aria-label={item.title} style={{ background: item.art.bg }}>
        <ArtGlyph art={item.art} className="hero-icon" />
      </div>
    );
  }
  return <div className="hero-img" />;
}

function sceneFor(kind: string) {
  switch (kind) {
    case "term":
      return (
        <pre className="h-term" style={{ "--bg": "#13261c", "--fg": "#c9ebd9" } as React.CSSProperties}>
<span className="p">›</span> <span className="k">/goza</span> linus-torvalds cubano{"\n"}
<span className="c">✓ personality loaded (2 of 180+)</span>{"\n\n"}
<span className="p">›</span> should I split into microservices?{"\n"}
<span className="g">Mira, sin rodeos: no — todavía.</span>{"\n"}
<span className="s">Show me where the monolith actually hurts.</span> <span className="cur" /></pre>
      );
    case "braces":
      return (
        <pre className="h-term" style={{ "--bg": "#0b2b1d", "--fg": "#c9ebd9" } as React.CSSProperties}>
<span className="p">$</span> curl api/products/1/{"\n"}
<span className="c">HTTP 200 · 38ms</span>{"\n"}
{"{"}{"\n"}
{"  "}<span className="k">&quot;name&quot;</span>: <span className="s">&quot;panda tee&quot;</span>,{"\n"}
{"  "}<span className="k">&quot;price&quot;</span>: 19.90,{"\n"}
{"  "}<span className="k">&quot;in_stock&quot;</span>: true{"\n"}
{"}"}{"\n"}
<span className="p">$</span> <span className="cur" /></pre>
      );
    case "bars":
      return (
        <svg className="h-svg rag" viewBox="0 0 120 84" aria-hidden="true">
          <g className="doc"><rect x="4" y="6" width="9" height="11" rx="1" /><rect x="8" y="3" width="9" height="11" rx="1" /></g>
          <text className="lbl" x="21" y="12">docs/*.pdf</text><path className="ar" d="M12 18v6" />
          <rect className="bx" x="4" y="25" width="112" height="14" /><text x="9" y="34.5">knowledge</text><text className="lbl" x="111" y="34.5" textAnchor="end">chunk → embed</text>
          <path className="ar" d="M60 39v6" />
          <rect className="bx" x="4" y="45" width="112" height="14" /><text x="9" y="54.5">retrieval</text><text className="lbl" x="111" y="54.5" textAnchor="end">filter → top-k</text>
          <path className="ar" d="M60 59v6" />
          <rect className="bx" x="4" y="65" width="112" height="14" /><text x="9" y="74.5">validation</text><text className="lbl" x="111" y="74.5" textAnchor="end">score + cite</text>
          <circle className="dot" r="1.8"><animateMotion dur="3s" repeatCount="indefinite" path="M12 18 V25 M12 25 H60 V45 M60 45 V65" /></circle>
        </svg>
      );
    case "nodes":
      return (
        <svg className="h-svg svc" viewBox="0 0 120 64" aria-hidden="true">
          <path className="l" d="M60 22 L20 48M60 22 L60 48M60 22 L100 48" />
          <rect className="n h" x="38" y="12" width="44" height="14" rx="4" /><text x="60" y="21.5" textAnchor="middle" style={{ fill: "#160f12" }}>gateway</text>
          <rect className="n" x="4" y="42" width="32" height="14" rx="4" /><text x="20" y="51.5" textAnchor="middle">products</text>
          <rect className="n" x="44" y="42" width="32" height="14" rx="4" /><text x="60" y="51.5" textAnchor="middle">users</text>
          <rect className="n" x="84" y="42" width="32" height="14" rx="4" /><text x="100" y="51.5" textAnchor="middle">parking</text>
          <circle className="pk" r="1.8"><animateMotion dur="2.4s" repeatCount="indefinite" path="M60 22 L20 48" /></circle>
          <circle className="pk" r="1.8"><animateMotion dur="2.4s" begin=".8s" repeatCount="indefinite" path="M60 22 L60 48" /></circle>
          <circle className="pk" r="1.8"><animateMotion dur="2.4s" begin="1.6s" repeatCount="indefinite" path="M60 22 L100 48" /></circle>
        </svg>
      );
    case "panda":
      return (
        <svg className="h-svg" viewBox="0 0 100 108" aria-hidden="true" style={{ left: "30%", width: "40%", height: "100%" }}>
          <g stroke="#151513" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
            <circle cx="30" cy="16" r="9" fill="#151513" /><circle cx="66" cy="14" r="9" fill="#151513" />
            <path fill="#fbfbf8" d="M18 32c1-13 13-21 30-21s30 8 30 21c0 12-12 21-30 21S17 45 18 32z" />
            <ellipse cx="36" cy="32" rx="10" ry="8.5" fill="#151513" transform="rotate(-12 36 32)" /><ellipse cx="61" cy="31" rx="8" ry="7" fill="#151513" transform="rotate(10 61 31)" />
            <path d="M36 32c.4-1.6 2.4-2 3.4-.8 1.2 1.5-.2 3.6-2.2 3.4-2.8-.3-3.8-3.4-2.4-5.6 1.6-2.6 5.4-2.8 7.4-.6" fill="none" stroke="#fbfbf8" strokeWidth="1.7" /><circle cx="61" cy="31" r="1.6" fill="#fbfbf8" stroke="none" />
            <path d="M45.5 43c2.6 2 6.4 2 9 0" fill="none" strokeWidth="1.8" /><path d="M48 42.2l-1 3.4M52 42.2l1 3.4" fill="none" strokeWidth="1.4" />
            <path fill="#fbfbf8" d="M30 54c-2 8-2 18 1 26 2 6 9 10 18 10s16-4 18-10c3-8 3-18 1-26" />
            <path fill="#151513" d="M27 56c-6 2-10 8-9 14 1 5 6 6 10 3 4-2 6-8 6-12z" /><path fill="#151513" d="M71 56c6 2 10 8 9 14-1 5-6 6-10 3-4-2-6-8-6-12z" />
            <ellipse cx="38" cy="92" rx="9" ry="11" fill="#151513" /><ellipse cx="60" cy="92" rx="9" ry="11" fill="#151513" />
            <path d="M49 62v16" fill="none" strokeDasharray="3 3" strokeWidth="1.4" />
          </g>
        </svg>
      );
    default:
      return null;
  }
}
