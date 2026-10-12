"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface ScrollRevealProps {
  /** Element type to render — matches whatever tag the original markup used. */
  as?: ElementType;
  /** Base class name(s) for the element (e.g. "service-card", "team-card"). */
  className?: string;
  children: ReactNode;
  /** IntersectionObserver threshold — defaults to match the original site's reveal. */
  threshold?: number;
}

/**
 * Drop-in replacement for the old `data-row` + global IntersectionObserver
 * pattern. Each instance watches itself and adds an `in-view` class once it
 * scrolls into the viewport — the same class the stylesheet already
 * transitions on (`.service-card.in-view`, `.work-card.in-view`, etc.),
 * so no CSS changes were needed.
 */
export default function ScrollReveal({
  as: Tag = "div",
  className = "",
  children,
  threshold = 0.25,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const combined = [className, inView ? "in-view" : ""].filter(Boolean).join(" ");

  const Component = Tag as any;
  return (
    <Component ref={ref} className={combined}>
      {children}
    </Component>
  );
}
