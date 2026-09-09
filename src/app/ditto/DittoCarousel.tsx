"use client";

/**
 * Case-study carousel arrows.
 *
 * <c-carousel-tile> is another dead custom element from the capture: the prev/next
 * buttons carry real aria-labels but never had a handler, and the track kept a frozen
 * transform, so the arrows did nothing at all.
 *
 * DittoWire can already drive a carousel, but only from a list of captured per-index
 * transform strings — and this page never emitted a carousel spec, so there is nothing
 * for it to replay. The step is measured from the live slides instead, which is both
 * what the missing spec would have contained and correct across breakpoints, where the
 * slide width changes (390px, 603px at 2xl) but the markup does not.
 */

import { useEffect } from "react";

export default function DittoCarousel() {
  useEffect(() => {
    const tiles = Array.from(document.querySelectorAll<HTMLElement>("c-carousel-tile"));
    if (!tiles.length) return;

    const disposers: Array<() => void> = [];

    for (const tile of tiles) {
      // The track is the tile's last child; the header with the buttons precedes it.
      const track = tile.lastElementChild as HTMLElement | null;
      const slides = track ? (Array.from(track.children) as HTMLElement[]) : [];
      const prev = tile.querySelector<HTMLButtonElement>('button[aria-label="Previous slide"]');
      const next = tile.querySelector<HTMLButtonElement>('button[aria-label="Next slide"]');
      if (!track || slides.length < 2 || !prev || !next) continue;

      // Distance between two slide origins — the slide plus whatever gap the markup
      // uses (here a right margin). Measured rather than assumed so a breakpoint that
      // changes either one still steps by exactly one slide.
      const step = () => {
        const a = slides[0]!.getBoundingClientRect();
        const b = slides[1]!.getBoundingClientRect();
        return Math.round(b.left - a.left) || Math.round(a.width);
      };
      // Stop once the last slide has been pulled into view; paging past that would
      // leave empty space at the right.
      const maxIndex = () => {
        const s = step();
        if (s <= 0) return 0;
        return Math.max(0, slides.length - Math.max(1, Math.floor(tile.clientWidth / s)));
      };

      let index = 0;
      // Below lg the arrows are hidden and ditto.css hands the track to native scroll
      // with snap, so the button-driven transform must stand down or it fights the
      // user's scroll position.
      const arrowsDrive = window.matchMedia("(min-width: 1025px)");

      const render = () => {
        if (!arrowsDrive.matches) {
          index = 0;
          track.style.removeProperty("transform");
          return;
        }
        index = Math.max(0, Math.min(index, maxIndex()));
        track.style.transform = "translate3d(" + -(index * step()) + "px, 0, 0)";
        // Reflect the ends on the buttons: disabled stops the click AND the capture's
        // own 50% dimming is what the design already used for the unavailable arrow.
        prev.disabled = index <= 0;
        next.disabled = index >= maxIndex();
        prev.style.opacity = prev.disabled ? "0.5" : "1";
        next.style.opacity = next.disabled ? "0.5" : "1";
      };

      const go = (delta: number) => (e: Event) => {
        e.preventDefault();
        index += delta;
        render();
      };
      const onPrev = go(-1);
      const onNext = go(1);
      // A resize can change both the slide width and how many fit, so re-clamp.
      const onResize = () => render();
      // Crossing the breakpoint swaps which mechanism owns the track; reset so the
      // reader lands at the start of the row rather than mid-way through it.
      const onModeChange = () => {
        index = 0;
        track.scrollLeft = 0;
        render();
      };

      prev.addEventListener("click", onPrev);
      next.addEventListener("click", onNext);
      window.addEventListener("resize", onResize);
      arrowsDrive.addEventListener("change", onModeChange);
      render();

      disposers.push(() => {
        prev.removeEventListener("click", onPrev);
        next.removeEventListener("click", onNext);
        window.removeEventListener("resize", onResize);
        arrowsDrive.removeEventListener("change", onModeChange);
        track.style.removeProperty("transform");
        prev.style.removeProperty("opacity");
        next.style.removeProperty("opacity");
        prev.disabled = false;
        next.disabled = false;
      });
    }

    return () => disposers.forEach((d) => d());
  }, []);

  return null;
}
