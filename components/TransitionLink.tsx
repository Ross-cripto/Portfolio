"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type Props = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode };

const LEAVE_MS = 240;

/**
 * A next/link that first blurs the current view out (`.view.leaving`), then navigates —
 * the same "fade-out, stagger-in" hand-off the reference site does between pages.
 * Modifier-clicks, middle-clicks and reduced-motion users get a plain navigation.
 */
export function TransitionLink({ href, onClick, children, ...rest }: Props) {
  const router = useRouter();
  const go = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    const view = document.querySelector<HTMLElement>(".view");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!view || reduce) return;
    e.preventDefault();
    view.classList.add("leaving");
    window.setTimeout(() => router.push(String(href)), LEAVE_MS);
  };
  return (
    <Link href={href} onClick={go} {...rest}>
      {children}
    </Link>
  );
}
