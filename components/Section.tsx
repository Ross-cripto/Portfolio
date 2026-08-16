import type { CSSProperties } from "react";
import type { Section as SectionT } from "@/content/site";
import { Row, MoreRow } from "./Row";
import { Board, boardSteps } from "./Board";
import { BackPill } from "./BackPill";

/** stagger steps used by a section (h2 + visible rows + more row), so the next one continues the count */
export function sectionSteps(section: SectionT, expanded: boolean): number {
  if (section.board) return 1 + boardSteps(section);
  const shown = expanded ? section.items.length : Math.min(section.show, section.items.length);
  const more = !expanded && section.items.length > section.show ? 1 : 0;
  return 1 + shown + more;
}

export function SectionBlock({ section, stagger, expanded = false }: { section: SectionT; stagger: number; expanded?: boolean }) {
  let n = stagger;
  const h2 = <h2 className="stagger-in" style={{ "--stagger": n++ } as CSSProperties}>{section.title}</h2>;
  if (section.board) {
    return (
      <section id={section.key} className={expanded ? "open" : undefined}>
        {expanded && <BackPill href="/" label="back home" />}
        {h2}
        <Board section={section} stagger={n} />
      </section>
    );
  }
  const shown = expanded ? section.items.length : Math.min(section.show, section.items.length);
  const hasMore = !expanded && section.items.length > shown;
  return (
    <section id={section.key} className={expanded ? "open" : undefined}>
      {expanded && <BackPill href="/" label="back home" />}
      {h2}
      <div className="list">
        {section.items.slice(0, shown).map((it) => <Row key={it.slug} section={section} item={it} stagger={n++} />)}
        {hasMore && <MoreRow section={section} next={section.items[shown]!} stagger={n++} />}
      </div>
    </section>
  );
}
