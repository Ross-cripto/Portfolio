import { TransitionLink } from "./TransitionLink";
import { ChevronLeft } from "./Icons";
import type { CSSProperties } from "react";

export function BackPill({ href, label, stagger = 0 }: { href: string; label: string; stagger?: number }) {
  return (
    <TransitionLink className="back stagger-in" href={href} aria-label={label} style={{ "--stagger": stagger } as CSSProperties}>
      <ChevronLeft />
    </TransitionLink>
  );
}
