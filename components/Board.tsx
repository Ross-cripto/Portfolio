import type { CSSProperties } from "react";
import type { Section } from "@/content/site";
import { MARKS } from "./marks";
import { rng, fx } from "@/lib/rng";
import { TransitionLink } from "./TransitionLink";

function ToolPolaroid({ id, stagger, seed }: { id: string; stagger: number; seed: string }) {
  const m = MARKS[id];
  if (!m) return null;
  const rot = fx((rng(seed + id)() - 0.5) * 7);
  return (
    <figure className="tp" title={m.name}
      style={{ "--rot-from": `${fx(rot + 1.5)}deg`, "--rot-to": `${rot}deg`, "--stagger": fx(stagger) } as CSSProperties}>
      <svg viewBox="0 0 56 38" aria-hidden="true" focusable="false"><rect width="56" height="38" fill={m.bg} />{m.mark}</svg>
      <figcaption>{m.name}</figcaption>
    </figure>
  );
}

/** The toolbox pinboard: one line per area, each tool a tiny tilted polaroid. */
export function Board({ section, stagger }: { section: Section; stagger: number }) {
  let n = stagger;
  return (
    <div className="board">
      {section.items.map((it) => {
        const s = n++;
        return (
          <div key={it.slug} className="tb-row stagger-in" style={{ "--stagger": s } as CSSProperties}>
            <TransitionLink className="tb-label" href={`/${section.key}/${it.slug}`}>
              {it.title}<span className="tb-sub">{it.kind}</span>
            </TransitionLink>
            <div className="tb-cards">
              {(it.tools ?? []).map((k, i) => <ToolPolaroid key={k} id={k} stagger={s + i * 0.35} seed={it.slug} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** how many stagger steps a board consumes (one per line) */
export const boardSteps = (section: Section) => section.items.length;
