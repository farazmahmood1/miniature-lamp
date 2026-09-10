"use client";

/**
 * Smooth scroll (Lenis) + scroll-driven motion (GSAP ScrollTrigger).
 *
 * The live site runs Lenis — the capture recorded `data-lenis-prevent` on the mobile
 * menu panels, which is Lenis's opt-out attribute for nested scrollers. That attribute
 * survived into the clone's markup, so the hook points are already in the DOM; only the
 * library was missing.
 *
 * Lenis drives ScrollTrigger's update instead of the native scroll event, otherwise
 * pinned/scrubbed elements lag one frame behind the smoothed position.
 */

import { useEffect } from "react";

// Rail travel per pixel of page scroll. Under 1 the strip trails the scroll slightly, which
// reads as depth rather than as the page dragging the logos along with it.
const RAIL_SPEED = 0.9;

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scroll fights assistive tech and vestibular sensitivity — skip it entirely.
    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let disposed = false;
    let cleanup: (() => void) | undefined;

    void Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([lenisMod, gsapMod, stMod]) => {
        if (disposed) return;

        const Lenis = lenisMod.default;
        const gsap = gsapMod.gsap ?? gsapMod.default;
        const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
          duration: 1.1,
          // Slight exponential ease-out — the standard Lenis feel.
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          // Touch devices already have native momentum; doubling it feels wrong.
          syncTouch: false,
        });

        // Expose for anchor links and any other code that wants to scroll.
        (window as unknown as { lenis?: unknown }).lenis = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        // Single RAF: GSAP's ticker drives Lenis, so there's only one loop on the page.
        const tick = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        // --- anchor links --------------------------------------------------------
        // Native `scroll-behavior` is bypassed once Lenis owns the scroll position.
        const onClick = (e: MouseEvent) => {
          const a = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]');
          if (!a) return;
          const href = a.getAttribute("href");
          if (!href || href === "#") return;
          const target = document.querySelector(href);
          if (!target) return;
          e.preventDefault();
          lenis.scrollTo(target as HTMLElement, { offset: -80 });
        };
        document.addEventListener("click", onClick);

        // --- hero parallax -------------------------------------------------------
        // The fixed background canvas drifts slower than the page, which is what gives
        // the hero its depth on the live site.
        const heroBg = document.querySelector<HTMLElement>("c-background-canvas");
        const railClones: HTMLElement[] = [];
        const ctx = gsap.context(() => {
          if (heroBg) {
            // Drift UPWARD, and only within the slack motion.css guarantees, so the
            // parallax can never uncover the top of the viewport.
            //
            // The captured value did the opposite: yPercent 12 pushed the backdrop
            // DOWN by 12% of its own height — 130px on the 1080px-tall 2xl box — so
            // past a few hundred px of scroll a strip of bare <html> background
            // (rgb(16,20,33)) showed above it. Positive yPercent also contradicted
            // the intent below: a backdrop that drifts slower than the page moves up
            // as the page scrolls down, not down.
            const travel = () => {
              const overscan = parseFloat(
                getComputedStyle(heroBg).getPropertyValue("--bg-overscan"),
              );
              const slack = heroBg.offsetHeight - window.innerHeight;
              return Math.max(0, Math.min(Number.isFinite(overscan) ? overscan : 0, slack));
            };

            gsap.to(heroBg, {
              // Function form + invalidateOnRefresh: a resize re-reads both the slack
              // and the overscan rather than reusing a start-up measurement.
              y: () => -travel(),
              ease: "none",
              force3D: true,
              scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "+=1200",
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            });
          }

          // --- logo rails ----------------------------------------------------------
          // <c-rail> came out of the capture as a dead custom element: its track carried a frozen
          // transform (the marquee position at capture time) and nothing ever moved it. Rebuild it
          // as a scroll-scrubbed marquee — the track slides right-to-left while the rail crosses
          // the viewport, wrapping modulo one content cycle so it never runs out of logos.
          document.querySelectorAll<HTMLElement>("c-rail").forEach((rail) => {
            const track = rail.firstElementChild as HTMLElement | null;
            if (!track) return;

            const groups = Array.from(track.children) as HTMLElement[];
            // One cycle is the original groups. Each group's right padding IS the inter-group gap,
            // and offsetWidth includes padding, so this is exactly the distance that must repeat.
            // Every logo box is CSS-sized (w-[8.5rem]), so this measures correctly before the
            // SVGs finish loading.
            const cycle = groups.reduce((sum, g) => sum + g.offsetWidth, 0);
            if (!cycle) return;

            // Clone whole cycles until the track covers the rail plus one full wrap step —
            // otherwise the modulo jump would expose empty space at the right edge.
            for (let width = cycle; width < cycle + rail.offsetWidth; width += cycle) {
              for (const g of groups) {
                const copy = g.cloneNode(true) as HTMLElement;
                // The copies are pure decoration: keep them out of the a11y tree and tab order.
                copy.setAttribute("aria-hidden", "true");
                copy
                  .querySelectorAll<HTMLElement>("a, button")
                  .forEach((el) => el.setAttribute("tabindex", "-1"));
                track.appendChild(copy);
                railClones.push(copy);
              }
            }

            gsap.set(track, { x: 0 });
            gsap.to(track, {
              // Function form + invalidateOnRefresh so a resize re-tunes the travel distance.
              x: () => -(window.innerHeight + rail.offsetHeight) * RAIL_SPEED,
              ease: "none",
              force3D: true,
              modifiers: {
                // Only the rendered value wraps; the tween's own value keeps advancing, so the
                // strip reads as endless and stays reversible when scrolling back up.
                x: gsap.utils.unitize(gsap.utils.wrap(-cycle, 0), "px"),
              },
              scrollTrigger: {
                trigger: rail,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
                invalidateOnRefresh: true,
              },
            });
          });

          // --- feature rail scroll-spy ---------------------------------------------
          // The four labels sit in a sticky rail while their cards scroll past. The
          // capture painted every label the same pale --accent with no active state,
          // so the rail never told you which card you were looking at. Each label
          // already links to its card by id, so that mapping drives the highlight
          // rather than a second hand-maintained list.
          // Every page with a rail carries `data-rail` on it, so this works on the
          // home page and on each service page rather than being scoped to one
          // captured node id.
          for (const rail of Array.from(document.querySelectorAll<HTMLElement>("[data-rail]"))) {
            const spyLinks = Array.from(
              rail.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
            );
            if (!spyLinks.length) continue;

            const light = (active: HTMLAnchorElement) => {
              for (const a of spyLinks) {
                if (a === active) a.setAttribute("data-spy-active", "");
                else a.removeAttribute("data-spy-active");
              }
            };

            for (const link of spyLinks) {
              const card = document.querySelector<HTMLElement>(link.hash);
              if (!card) continue;
              // Hand over at mid-screen, and light the same card again on the way back
              // up, so exactly one label is ever active in both directions.
              ScrollTrigger.create({
                trigger: card,
                start: "top 50%",
                end: "bottom 50%",
                onEnter: () => light(link),
                onEnterBack: () => light(link),
              });
            }
            light(spyLinks[0]!);
          }

          // --- "Selected work" reveal ----------------------------------------------
          // Scrubbed rather than a one-shot tween: the section grows as it rises into
          // view and is at full size by the time it is properly on screen, so the
          // growth is tied to the scroll rather than firing once and finishing late.
          const builtWith = document.querySelector<HTMLElement>('[data-cid="n643"]');
          if (builtWith) {
            gsap.fromTo(
              builtWith,
              { scale: 0.9 },
              {
                scale: 1,
                ease: "none",
                force3D: true,
                transformOrigin: "50% 50%",
                scrollTrigger: {
                  trigger: builtWith,
                  start: "top bottom",
                  end: "top 35%",
                  scrub: 0.6,
                  invalidateOnRefresh: true,
                },
              },
            );
          }
        });

        ScrollTrigger.refresh();

        cleanup = () => {
          ctx.revert();
          railClones.forEach((el) => el.remove());
          document.removeEventListener("click", onClick);
          gsap.ticker.remove(tick);
          lenis.off("scroll", ScrollTrigger.update);
          ScrollTrigger.getAll().forEach((t: { kill: () => void }) => t.kill());
          lenis.destroy();
          delete (window as unknown as { lenis?: unknown }).lenis;
        };
      },
    );

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return null;
}
