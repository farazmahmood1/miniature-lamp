"use client";

/**
 * Real Lottie playback.
 *
 * The capture downloaded the site's animation data (`/lottie/map.json`, 707×600, 60fps,
 * 542 frames, 47 layers) into `public/assets/cloned/lottie/`, but the generator also
 * inlined a single frozen frame of it as a 2.2MB static SVG component and rendered that
 * instead — leaving the JSON orphaned. This plays the real data and drops the frozen SVG.
 *
 * Playback starts on scroll-into-view and pauses when out of view, so a 47-layer SVG
 * animation isn't burning CPU while it's off screen.
 */

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  cid?: string;
  className?: string;
  /** Frame to hold when the viewer prefers reduced motion. */
  posterFrame?: number;
};

export default function DittoLottie({ src, cid, className, posterFrame = 120 }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    // The SVG renderer build — no canvas/html renderers pulled in.
    void import("lottie-web/build/player/lottie_svg").then((mod) => {
      if (disposed) return;
      const lottie = (mod as { default?: unknown }).default ?? mod;

      const reduced =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const anim = (
        lottie as {
          loadAnimation: (o: Record<string, unknown>) => {
            addEventListener: (e: string, f: () => void) => void;
            goToAndStop: (v: number, isFrame?: boolean) => void;
            play: () => void;
            pause: () => void;
            destroy: () => void;
          };
        }
      ).loadAnimation({
        container: host,
        renderer: "svg",
        loop: true,
        // Held until it scrolls into view.
        autoplay: false,
        path: src,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          progressiveLoad: true,
        },
      });

      if (reduced) {
        anim.addEventListener("DOMLoaded", () => anim.goToAndStop(posterFrame, true));
        cleanup = () => anim.destroy();
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) anim.play();
            else anim.pause();
          }
        },
        { threshold: 0.1 },
      );
      io.observe(host);

      const onVis = () => (document.hidden ? anim.pause() : anim.play());
      document.addEventListener("visibilitychange", onVis);

      cleanup = () => {
        io.disconnect();
        document.removeEventListener("visibilitychange", onVis);
        anim.destroy();
      };
    });

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, [src, posterFrame]);

  return (
    <div
      ref={hostRef}
      data-cid={cid}
      data-ditto-lottie=""
      aria-hidden="true"
      className={className ?? "h-full w-full"}
    />
  );
}
