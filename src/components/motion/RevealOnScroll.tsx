"use client";

/**
 * Generic entrance reveal for hand-written pages.
 *
 * `ScrollReveal` replays captured per-element style snapshots and needs a spec.
 * Pages written by hand have no spec, so this is the plain version: mark a block
 * with `data-reveal`, and it gets `data-reveal-in` once it has scrolled into view.
 * The stylesheet owns what that looks like.
 *
 * The hidden state is applied from JavaScript rather than from CSS, so a page with
 * scripting unavailable shows all of its content rather than none of it. Elements
 * are unobserved after firing: the reveal is one-way, so nothing re-runs on the way
 * back up, and the observer empties itself as the reader moves down the page.
 */

import { useEffect } from "react";

/** Fire a little before the block reaches the fold, so it is settled on arrival. */
const ROOT_MARGIN = "0px 0px -12% 0px";

export default function RevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!nodes.length) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      for (const node of nodes) node.setAttribute("data-reveal-in", "");
      return;
    }

    // Arming here rather than in CSS is what keeps the no-JS page readable.
    for (const node of nodes) node.setAttribute("data-reveal-armed", "");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-reveal-in", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: ROOT_MARGIN, threshold: 0.08 },
    );

    for (const node of nodes) io.observe(node);
    return () => io.disconnect();
  }, []);

  return null;
}
