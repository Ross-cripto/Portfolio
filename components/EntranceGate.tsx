"use client";

import { useEffect } from "react";

/**
 * While the entrance stagger runs, rows can't be hovered (`.loading`). Once it's done we
 * also strip `.stagger-in` — the animation's fill-mode would otherwise pin `filter`
 * and `transform`, and the hover blur / polaroid fan would never apply.
 */
export function EntranceGate({ steps }: { steps: number }) {
  useEffect(() => {
    const view = document.querySelector<HTMLElement>(".view");
    if (!view) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 0 : 150 + steps * 65 + 350 + 60;
    const t = window.setTimeout(() => {
      view.classList.remove("loading");
      view.querySelectorAll(".stagger-in").forEach((el) => el.classList.remove("stagger-in"));
    }, total);
    window.scrollTo({ top: 0 });
    return () => window.clearTimeout(t);
  }, [steps]);
  return null;
}
