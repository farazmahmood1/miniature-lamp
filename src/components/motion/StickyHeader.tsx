"use client";

/**
 * Hide the navbar on the way down, bring it back on the way up.
 *
 * The capture shipped <header> as position:absolute, so it scrolled off the top of
 * the document and there was nothing left to reveal. motion.css pins it; this decides
 * when it is out of the way.
 *
 * Deliberately NOT part of SmoothScroll: that component bails out entirely under
 * prefers-reduced-motion, and a navbar is a navigation control rather than
 * decoration. Here reduced motion only drops the slide (see motion.css), so the bar
 * still appears when the reader scrolls up.
 */

import { useEffect } from "react";

// Ignore sub-pixel jitter and trackpad rubber-banding, so the bar doesn't flicker
// on tiny direction changes.
const DELTA = 6;
// Near the top the bar always shows, whichever way the reader is going.
const TOP_ZONE = 80;

export default function StickyHeader() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("c-header > header");
    if (!header) return;

    let last = window.scrollY;
    let hidden = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const dy = y - last;

      // Accumulate until the movement is decisive; `last` only advances then, so a
      // slow drift still eventually crosses the threshold.
      if (Math.abs(dy) < DELTA) return;
      last = y;

      const nextHidden = dy > 0 && y > TOP_ZONE;
      if (nextHidden === hidden) return;
      hidden = nextHidden;
      header.toggleAttribute("data-nav-hidden", hidden);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      header.removeAttribute("data-nav-hidden");
    };
  }, []);

  return null;
}
