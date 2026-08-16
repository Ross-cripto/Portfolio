import type { CSSProperties } from "react";
import type { Item, Section } from "@/content/site";
import { Stack } from "./Stack";
import { TransitionLink } from "./TransitionLink";
import { ArrowUpRight, Chevron } from "./Icons";

export function Row({ section, item, stagger, extra = false }: { section: Section; item: Item; stagger: number; extra?: boolean }) {
  const single = !!section.single;
  const cls = `item ${single ? "has-single" : "has-stack"} ${extra ? "" : "stagger-in"}`;
  const style = { "--stagger": stagger } as CSSProperties;
  const inner = (
    <>
      <Stack item={item} single={single} stagger={stagger} />
      <span className="row-title">{item.title}</span>
      <span className="row-meta"><span className="t">{item.meta}</span>{item.ext ? <ArrowUpRight /> : null}</span>
    </>
  );
  return (
    <div className={cls} style={style}>
      {item.ext ? (
        <a className="row" href={item.ext} target="_blank" rel="noopener noreferrer">{inner}</a>
      ) : (
        <TransitionLink className="row" href={`/${section.key}/${item.slug}`}>{inner}</TransitionLink>
      )}
    </div>
  );
}

/** The "More" row: previews the next item's photos and links to the section page. */
export function MoreRow({ section, next, stagger }: { section: Section; next: Item; stagger: number }) {
  const single = !!section.single;
  return (
    <div className={`item more-row ${single ? "has-single" : "has-stack"} stagger-in`} style={{ "--stagger": stagger } as CSSProperties}>
      <TransitionLink className="row" href={`/${section.key}`} aria-label={`show all ${section.title}`}>
        <Stack item={next} single={single} stagger={stagger} />
        <span className="row-title">More</span>
        <span className="row-meta"><Chevron /></span>
      </TransitionLink>
    </div>
  );
}
