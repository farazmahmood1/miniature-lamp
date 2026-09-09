"use client";

import { useEffect } from "react";

/**
 * Brings the crossword grid to life.
 *
 * The capture pipeline froze this grid at a single instant: every cell holds
 * whatever character happened to be on screen, and the compiler's only guess at
 * the motion was two "rotators" that flipped one letter each. On the source page
 * the filler characters churn continuously while the real words stay legible
 * underneath their highlight pills.
 *
 * This restores that: lock the cells spelling the keywords, then cycle the rest.
 * All mutation happens after mount against textContent, so there is no
 * server/client markup mismatch to hydrate around.
 */

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// The keywords planted in the captured grid. Longest first, so that a short
// word can't claim cells out from under a longer one that contains it.
const WORDS = ["BATCHING", "LATENCY", "GLOBAL", "DEPLOY", "GPU"];

const TICK_MS = 90; // how often a batch of filler cells is redrawn
const CHURN = 0.06; // fraction of unlocked cells redrawn per tick

export default function CrosswordScramble({
  gridId = "crosswordgrid-44",
}: {
  gridId?: string;
}) {
  useEffect(() => {
    const root = document.getElementById(gridId);
    if (!root) return;

    // Honour the OS "reduce motion" setting: leave the grid as captured.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    // Cells are the single-character spans, in document order.
    const cells = Array.from(root.querySelectorAll("span")).filter((el) => {
      const t = el.textContent?.trim() ?? "";
      return t.length === 1 && /[A-Z0-9]/.test(t);
    }) as HTMLElement[];
    if (cells.length === 0) return;

    // Walk the flattened grid text and pin every cell belonging to a keyword.
    const flat = cells.map((c) => c.textContent!.trim()).join("");
    const locked = new Set<number>();
    for (const word of WORDS) {
      let from = 0;
      for (;;) {
        const at = flat.indexOf(word, from);
        if (at === -1) break;
        // Skip a hit that overlaps a word already claimed.
        let free = true;
        for (let i = at; i < at + word.length; i++) {
          if (locked.has(i)) free = false;
        }
        if (free) {
          for (let i = at; i < at + word.length; i++) locked.add(i);
        }
        from = at + 1;
      }
    }

    const free = cells.map((_, i) => i).filter((i) => !locked.has(i));
    if (free.length === 0) return;

    const perTick = Math.max(1, Math.round(free.length * CHURN));
    let timer = 0;
    let running = true;

    const tick = () => {
      if (!running) return;
      for (let n = 0; n < perTick; n++) {
        const idx = free[(Math.random() * free.length) | 0];
        cells[idx].textContent = CHARS[(Math.random() * CHARS.length) | 0];
      }
    };

    // Only churn while the grid is actually on screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !timer) {
          timer = window.setInterval(tick, TICK_MS);
        } else if (!entry.isIntersecting && timer) {
          window.clearInterval(timer);
          timer = 0;
        }
      },
      { threshold: 0 },
    );
    io.observe(root);

    return () => {
      running = false;
      io.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, [gridId]);

  return null;
}
