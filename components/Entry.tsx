import type { CSSProperties } from "react";
import type { Item, Section } from "@/content/site";
import { rng, fx } from "@/lib/rng";
import { Hero } from "./HeroScene";
import { BackPill } from "./BackPill";
import { EntranceGate } from "./EntranceGate";
import { ArrowUpRight, GitHubMark } from "./Icons";

/** Detail page for a job / project / toolbox area / about. */
export function Entry({ section, item }: { section: Section; item: Item }) {
  const meta = [item.kind, item.when].filter(Boolean).join(" · ");
  const rot = fx(rng(item.slug + "h")() * 1.4 - 0.7);
  let n = 1;
  const st = (cls: string) => ({ className: `${cls} stagger-in`, style: { "--stagger": n++ } as CSSProperties });
  const chips = item.chips ?? [];
  const links = item.links ?? [];
  return (
    <div className="view entry loading">
      <EntranceGate steps={7} />
      <BackPill href={section.key === "toolbox" || section.items.length > section.show ? `/${section.key}` : "/"} label={`back to ${section.title}`} />
      <div className="hero pop" style={{ "--stagger": 0, "--rot-to": `${rot}deg` } as CSSProperties}>
        <Hero item={item} />
      </div>
      <h1 {...st("entry-title")}>{item.title}</h1>
      {meta && <div {...st("entry-meta")}>{meta}</div>}
      <div {...st("entry-body")}>
        {(item.body ?? []).map((p, i) => <p key={i} dangerouslySetInnerHTML={{ __html: p }} />)}
      </div>
      {(chips.length > 0 || item.stars) && (
        <div {...st("chips")}>
          {chips.map((c) => <span key={c} className={`chip ${item.main?.includes(c) ? "main" : ""}`}>{c}</span>)}
          {item.stars ? <span className="chip">★ {item.stars} on GitHub</span> : null}
        </div>
      )}
      {links.length > 0 && (
        <div {...st("actions")}>
          {links.map(([kind, url]) => (
            <a key={url} className="btn" href={url} target="_blank" rel="noopener noreferrer">
              {kind === "live" ? <>open site <ArrowUpRight /></> : <>source on GitHub <GitHubMark /></>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
