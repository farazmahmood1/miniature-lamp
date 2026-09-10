"use client";

/**
 * Cursor-proximity dot grids for <c-interactive-dots>.
 *
 * Each cell's ::before is a dot the capture left frozen at scale 0. This drives a
 * per-cell --dot-s (see motion.css) from the cursor's distance to that cell, so dots
 * swell as the pointer approaches and sink back once it has gone.
 *
 * The trail comes from an ASYMMETRIC response, not from a transition: dots rise
 * quickly under the cursor and fall slowly behind it, so a smear of still-shrinking
 * dots marks the path. A CSS transition can't express that — it eases both directions
 * with the same curve, which reads as a moving spotlight rather than a trail.
 *
 * Frame budget matters here: two grids of ~105 cells means ~210 elements touched per
 * frame. So the loop NEVER measures. Rects are cached and refreshed only when they can
 * actually have changed (scroll, resize), leaving tick() as pure writes — interleaving
 * reads and writes forces a full layout recalc every frame, which on a page this heavy
 * collapsed the effective rate to single-digit fps and made the ramp visibly crawl.
 */

import { useEffect } from "react";

// How far the cursor's influence reaches, in px. Cells are 64px, so this is a little
// under three cells — wide enough to read as a blob, tight enough to feel pointed.
const RADIUS = 150;
// Per-frame approach rates at 60fps. ATTACK is the rise under the cursor, RELEASE the
// decay behind it; the gap between them IS the trail. At these values a dot reaches
// full size in ~10 frames (~0.17s) and falls back to nothing over ~80 (~1.3s).
const ATTACK = 0.3;
const RELEASE = 0.055;
// --dot-s is written at 3 decimals, so this is one quantisation step: below it the dot
// is both invisible and unchanged, and the grid counts as settled.
const EPSILON = 0.001;

type Grid = {
  el: HTMLElement;
  cells: HTMLElement[];
  /** Grid box in viewport coords. Refreshed on scroll/resize, never inside tick(). */
  box: { x: number; y: number; w: number; h: number };
  /** Cell centres relative to the grid box, so scrolling only moves `box`. */
  offsets: Array<{ x: number; y: number }>;
  scale: Float32Array;
  /** Last value written, in thousandths — lets tick() skip no-op style writes. */
  written: Int16Array;
};

export default function InteractiveDots() {
  useEffect(() => {
    const mm = window.matchMedia;
    if (typeof mm === "function") {
      // A field of dots chasing the cursor is exactly the kind of motion that
      // reduced-motion users are opting out of.
      if (mm("(prefers-reduced-motion: reduce)").matches) return;
      // Proximity to a cursor means nothing on a touch-only device; there, the
      // captured resting state is the right state.
      if (!mm("(hover: hover)").matches) return;
    }

    const grids: Grid[] = [];
    document.querySelectorAll<HTMLElement>("c-interactive-dots").forEach((el) => {
      const cells = Array.from(el.children) as HTMLElement[];
      if (!cells.length) return;
      el.setAttribute("data-dots-live", "");
      grids.push({
        el,
        cells,
        box: { x: 0, y: 0, w: 0, h: 0 },
        offsets: [],
        scale: new Float32Array(cells.length),
        written: new Int16Array(cells.length),
      });
    });
    if (!grids.length) return;

    // The only place that reads layout. Everything else works off these numbers.
    const measure = () => {
      for (const g of grids) {
        const r = g.el.getBoundingClientRect();
        g.box = { x: r.left, y: r.top, w: r.width, h: r.height };
        g.offsets = g.cells.map((c) => {
          const cr = c.getBoundingClientRect();
          return { x: cr.left + cr.width / 2 - r.left, y: cr.top + cr.height / 2 - r.top };
        });
      }
    };
    measure();

    let px = 0;
    let py = 0;
    let tracking = false;
    let frame = 0;

    const tick = () => {
      let awake = false;

      for (const g of grids) {
        const cx = px - g.box.x;
        const cy = py - g.box.y;
        // A grid the cursor is nowhere near just decays; no per-cell distance work.
        const near =
          tracking &&
          cx > -RADIUS &&
          cy > -RADIUS &&
          cx < g.box.w + RADIUS &&
          cy < g.box.h + RADIUS;

        for (let i = 0; i < g.cells.length; i++) {
          let target = 0;
          if (near) {
            const o = g.offsets[i]!;
            const t = 1 - Math.hypot(cx - o.x, cy - o.y) / RADIUS;
            // Smoothstep, so the blob's edge falls off softly rather than ending
            // on a hard circle.
            target = t <= 0 ? 0 : t * t * (3 - 2 * t);
          }

          const cur = g.scale[i]!;
          let next = cur + (target - cur) * (target > cur ? ATTACK : RELEASE);
          // Exponential decay only approaches zero, so a settling dot would park at
          // 0.001 forever. Snap it to exactly the captured resting value instead.
          if (target === 0 && next <= EPSILON) next = 0;
          g.scale[i] = next;

          // Most dots sit at rest most of the time. Writing only on a real change
          // keeps a frame to the few dozen cells actually under the cursor.
          const q = Math.round(next * 1000);
          if (q !== g.written[i]) {
            g.written[i] = q;
            g.cells[i]!.style.setProperty("--dot-s", (q / 1000).toString());
          }
          if (next > EPSILON) awake = true;
        }
      }

      // Park once every dot has settled — no idle rAF burning frames on a still page.
      frame = awake ? requestAnimationFrame(tick) : 0;
    };

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      px = e.clientX;
      py = e.clientY;
      tracking = true;
      wake();
    };
    // Cursor gone from the document: let everything fall back to rest.
    const onLeave = () => {
      tracking = false;
      wake();
    };
    // Rects are viewport-relative, so both of these invalidate the cache.
    const onScroll = () => measure();
    const onResize = () => measure();

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
      for (const g of grids) {
        g.el.removeAttribute("data-dots-live");
        g.cells.forEach((c) => c.style.removeProperty("--dot-s"));
      }
    };
  }, []);

  return null;
}
