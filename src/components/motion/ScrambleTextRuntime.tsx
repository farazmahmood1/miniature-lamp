"use client";

/**
 * `<c-scramble-text>` — the site's text-scramble custom element.
 *
 * The capture recorded 52 of these in the DOM (32 survived into the generated
 * components) wrapping mono-uppercase link and heading labels. The element name and its
 * text content are in the clone; the class that defined its behavior was site JS and was
 * not captured. This registers a behavior for the existing tag, so none of the 32 call
 * sites need to change.
 *
 * Behavior: resolve-scramble on first scroll-into-view, and re-scramble on hover/focus
 * when the label sits inside a link or button.
 */

import { useEffect } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&/*+-<>";

function defineScramble() {
  if (typeof window === "undefined") return;
  if (customElements.get("c-scramble-text")) return;

  class ScrambleText extends HTMLElement {
    private original = "";
    private raf = 0;
    private io?: IntersectionObserver;
    private played = false;
    private reduced = false;

    connectedCallback() {
      // textContent is the server-rendered label; cache it before any mutation.
      this.original = this.textContent ?? "";
      if (!this.original.trim()) return;

      this.reduced =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (this.reduced) return;

      // Reserve the final width so resolving text doesn't reflow the line.
      this.style.display ||= "inline-block";

      this.io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting && !this.played) {
              this.played = true;
              this.scramble();
              this.io?.disconnect();
            }
          }
        },
        { threshold: 0.35 },
      );
      this.io.observe(this);

      // Re-scramble on hover of the enclosing control, matching the live nav labels.
      const host = this.closest("a, button") as HTMLElement | null;
      if (host) {
        this.hostEl = host;
        host.addEventListener("pointerenter", this.onEnter);
        host.addEventListener("focus", this.onEnter);
      }
    }

    disconnectedCallback() {
      cancelAnimationFrame(this.raf);
      this.io?.disconnect();
      this.hostEl?.removeEventListener("pointerenter", this.onEnter);
      this.hostEl?.removeEventListener("focus", this.onEnter);
      // Leave the DOM holding the real text, not a half-scrambled frame.
      if (this.original) this.textContent = this.original;
    }

    private hostEl: HTMLElement | null = null;

    private onEnter = () => {
      if (!this.reduced) this.scramble();
    };

    /** Each character resolves at its own random time; unresolved ones cycle glyphs. */
    private scramble() {
      const text = this.original;
      const n = text.length;
      if (!n) return;

      cancelAnimationFrame(this.raf);

      // Per-character resolve deadline, staggered left-to-right with jitter.
      const settle = new Float32Array(n);
      for (let i = 0; i < n; i++) {
        settle[i] = (i / n) * 0.55 + Math.random() * 0.35;
      }

      const DURATION = 620;
      const start = performance.now();

      const step = (now: number) => {
        const p = Math.min((now - start) / DURATION, 1);
        let out = "";
        for (let i = 0; i < n; i++) {
          const ch = text[i]!;
          // Whitespace never scrambles — it would change the visual word shape.
          if (ch === " " || ch === "\n" || ch === " ") {
            out += ch;
          } else if (p >= settle[i]!) {
            out += ch;
          } else {
            out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
          }
        }
        this.textContent = out;

        if (p < 1) {
          this.raf = requestAnimationFrame(step);
        } else {
          this.textContent = text;
        }
      };

      this.raf = requestAnimationFrame(step);
    }
  }

  customElements.define("c-scramble-text", ScrambleText);
}

export default function ScrambleTextRuntime() {
  useEffect(() => {
    defineScramble();
  }, []);
  return null;
}
