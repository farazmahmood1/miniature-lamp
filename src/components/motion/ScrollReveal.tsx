"use client";

/**
 * Replays the page motion the stylesheet cannot express.
 *
 * Three families, all described by a per-page `spec`:
 *   - WAAPI animations and marquees, re-issued through `element.animate`
 *   - rotating text, cycled on an interval
 *   - scroll reveals: hidden on mount, transitioned in when scrolled into view
 *
 * This replaces six near-identical copies of the same runtime, one per route folder.
 * They differed only in how a spec entry named its target: some used `cid` against
 * `data-cid`, the rest `anchor` against `data-node-id`. Both are accepted here, so
 * every page's existing spec keeps working untouched.
 *
 * Reveals are hidden from JavaScript rather than from CSS, so a page with scripting
 * unavailable still shows all of its content.
 */

import { useEffect } from "react";

/** A spec entry names its target by either key, depending on which page emitted it. */
type NodeRef = { cid?: string; anchor?: string };

type RTWaapi = NodeRef & {
  keyframes: Array<Record<string, string | number>>;
  duration: number;
  delay: number;
  easing: string;
  iterations: number;
  direction: string;
  fill: string;
};
type RTRotator = NodeRef & { texts: string[]; intervalMs: number };
type RTReveal = NodeRef & {
  opacity: string;
  transform: string;
  transition: string;
  visibility?: "hidden";
  animationName?: string;
  animationDuration?: string;
  animationDelay?: string;
  animationTiming?: string;
};
type RTMarquee = NodeRef & { pxPerSec: number; periodPx: number };

export type MotionSpec = {
  waapi: RTWaapi[];
  rotators: RTRotator[];
  reveals: RTReveal[];
  marquees: RTMarquee[];
};

const resolve = (ref: NodeRef): HTMLElement | null => {
  if (ref.cid) {
    const el = document.querySelector<HTMLElement>(`[data-cid="${ref.cid}"]`);
    if (el) return el;
  }
  if (ref.anchor) {
    return document.querySelector<HTMLElement>(`[data-node-id="${ref.anchor}"]`);
  }
  return null;
};

/**
 * Reveal pacing caps.
 *
 * On the source design an entrance stagger plays once, on first load, with the whole
 * group already in view. Replaying it per-element on scroll means a long captured
 * delay or duration can leave a tile blank while a reader scrolls past it. Capping
 * both keeps the relative order while guaranteeing each tile paints promptly.
 */
const REVEAL_MAX_DELAY_MS = 300;
const REVEAL_MAX_DURATION_MS = 600;

const parseTimeMs = (raw: string | undefined): number => {
  if (!raw) return 0;
  const first = String(raw).split(",")[0]!.trim();
  const m = /^(-?[0-9.]+)(ms|s)?$/.exec(first);
  if (!m) return 0;
  let ms = parseFloat(m[1]!);
  if (m[2] !== "ms") ms *= 1000;
  return isFinite(ms) ? ms : 0;
};
const clampDelay = (raw: string | undefined): string => {
  const ms = parseTimeMs(raw);
  return ms <= 0 ? "0s" : `${Math.min(ms, REVEAL_MAX_DELAY_MS)}ms`;
};
const clampDuration = (raw: string | undefined): string => {
  const ms = parseTimeMs(raw);
  if (ms <= 0) return raw && String(raw).trim() ? String(raw) : "1s";
  return `${Math.min(ms, REVEAL_MAX_DURATION_MS)}ms`;
};

export default function ScrollReveal({ spec }: { spec: MotionSpec }) {
  useEffect(() => {
    const intervals: ReturnType<typeof setInterval>[] = [];
    const rotators: Array<{ el: HTMLElement; original: Node[] }> = [];
    const anims: Animation[] = [];
    /** Per-reveal "show now" callbacks. `animate: false` jumps to the settled frame. */
    const revealed: Array<(animate: boolean) => void> = [];
    let io: IntersectionObserver | null = null;
    let forceTimer: ReturnType<typeof setTimeout> | null = null;
    const settleTimers: ReturnType<typeof setTimeout>[] = [];

    for (const w of spec.waapi) {
      const el = resolve(w);
      if (!el) continue;
      try {
        anims.push(
          el.animate(w.keyframes, {
            duration: w.duration || 0,
            delay: w.delay || 0,
            easing: w.easing || "linear",
            iterations: w.iterations < 0 ? Infinity : w.iterations || 1,
            direction: (w.direction as PlaybackDirection) || "normal",
            fill: (w.fill as FillMode) || "none",
          }),
        );
      } catch {
        /* unsupported keyframe shape — leave the element static */
      }
    }

    // Marquees are continuous tickers: an infinite linear translateX over one duplicated
    // copy of the track (periodPx). Leftward travel runs 0 to -period, rightward the reverse.
    for (const m of spec.marquees) {
      const el = resolve(m);
      if (!el || !m.periodPx || !m.pxPerSec) continue;
      const left = m.pxPerSec < 0;
      const a = "translateX(0px)";
      const z = `translateX(-${m.periodPx}px)`;
      const durationMs = Math.max(1000, Math.round((m.periodPx / Math.abs(m.pxPerSec)) * 1000));
      try {
        anims.push(
          el.animate([{ transform: left ? a : z }, { transform: left ? z : a }], {
            duration: durationMs,
            iterations: Infinity,
            easing: "linear",
          }),
        );
      } catch {
        /* leave static */
      }
    }

    for (const r of spec.rotators) {
      const el = resolve(r);
      if (!el || r.texts.length < 2) continue;
      // A genuine rotating word is a text leaf. If the target has element children it was
      // misclassified, and writing text would destroy the subtree — so skip it.
      if (el.childElementCount > 0) continue;
      // Keep the original child nodes rather than a flattened string, so restore rebuilds
      // the exact subtree instead of collapsing it to a text node.
      const original = Array.from(el.childNodes).map((n) => n.cloneNode(true));
      const start = r.texts.findIndex(
        (t) => t === (el.textContent || "").replace(/\s+/g, " ").trim(),
      );
      let i = start < 0 ? 0 : start;
      rotators.push({ el, original });
      intervals.push(
        setInterval(
          () => {
            i = (i + 1) % r.texts.length;
            el.textContent = r.texts[i]!;
          },
          Math.max(400, r.intervalMs),
        ),
      );
    }

    if (spec.reveals.length) {
      /**
       * Reveal to the full resting state. Setting opacity 1 / transform none, rather than
       * clearing back to the base CSS, is required for scroll-scrubbed panels whose base
       * value is a frozen mid-scrub frame.
       */
      const show = (el: HTMLElement, rv: RTReveal, animate: boolean) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        if (rv.visibility === "hidden") el.style.visibility = "visible";
        if (rv.animationName) {
          if (animate) {
            // Restart the entrance from zero: none, reflow, then the name again.
            el.style.animationName = "none";
            void el.offsetWidth;
            el.style.animationName = rv.animationName;
            el.style.animationDuration = clampDuration(rv.animationDuration);
            el.style.animationDelay = clampDelay(rv.animationDelay);
            el.style.animationTimingFunction = rv.animationTiming || "ease";
            el.style.animationFillMode = "both";
            el.style.animationIterationCount = "1";
          } else {
            el.style.animationName = "none";
          }
        }
      };

      const shows = new Map<Element, (animate: boolean) => void>();
      for (const rv of spec.reveals) {
        const el = resolve(rv);
        if (!el) continue;
        if (rv.visibility === "hidden") {
          el.style.visibility = "hidden";
          el.style.animationName = "none";
        } else {
          el.style.transition = rv.transition;
          el.style.opacity = rv.opacity;
          if (rv.transform !== "none") el.style.transform = rv.transform;
        }
        const fn = (animate: boolean) => show(el, rv, animate);
        shows.set(el, fn);
        revealed.push(fn);
      }

      // A bounded time after a tile animates in, force it to its settled frame so a fast
      // scroll cannot catch it mid-entrance.
      const settleAfter = REVEAL_MAX_DELAY_MS + REVEAL_MAX_DURATION_MS + 100;
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const f = shows.get(e.target);
            if (!f) continue;
            f(true);
            io!.unobserve(e.target);
            settleTimers.push(setTimeout(() => f(false), settleAfter));
          }
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      for (const el of shows.keys()) io.observe(el);

      // Failsafe: settle everything after four seconds, so an element the observer never
      // fired for is painted rather than left hidden.
      forceTimer = setTimeout(() => {
        for (const f of revealed) f(false);
      }, 4000);
    }

    return () => {
      for (const id of intervals) clearInterval(id);
      for (const r of rotators) r.el.replaceChildren(...r.original.map((n) => n.cloneNode(true)));
      for (const a of anims) {
        try {
          a.cancel();
        } catch {
          /* ignore */
        }
      }
      if (io) io.disconnect();
      if (forceTimer) clearTimeout(forceTimer);
      for (const t of settleTimers) clearTimeout(t);
      // Leave every reveal in its settled state, so unmounting cannot hide content.
      for (const f of revealed) f(false);
    };
  }, [spec]);

  return null;
}
