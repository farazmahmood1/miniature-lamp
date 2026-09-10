"use client";

/**
 * The drifting rectangle field behind a page hero.
 *
 * Squares and rectangles start far away, rush toward the viewer and fade out as they
 * pass, which reads as depth rather than as decoration. Nothing repeats: each shape
 * is re-seeded with a new position, size and aspect the moment it retires, so the
 * field is continuous for as long as the page is open.
 *
 * Canvas rather than DOM nodes. Twenty-odd absolutely-positioned divs animating
 * scale and opacity would each take their own compositor layer; one canvas is a
 * single layer and one paint, and it can be stopped dead when it scrolls away.
 */

import { useEffect, useRef } from "react";

/** How many shapes are in flight at once. */
const COUNT = 34;

/** Depth bounds. Smaller z is nearer, so a shape travels from FAR down to NEAR. */
const Z_FAR = 6.5;
const Z_NEAR = 0.45;

/**
 * Depth decays exponentially rather than by a fixed amount per second.
 *
 * Under perspective, apparent motion goes as the inverse square of depth, so a
 * constant subtraction crawls at the far plane and then snaps past the camera. A
 * constant ratio per second is what the eye reads as steady travel. The rate is
 * the reciprocal of a time constant: crossing takes ln(Z_FAR / Z_NEAR) / rate,
 * which over this range is roughly eight to eighteen seconds.
 */
const RATE_MIN = 0.15;
const RATE_MAX = 0.34;

/** Where a shape starts fading out, as a fraction of its journey. */
const FADE_FROM = 0.62;

/** Journey length in log space, precomputed for the progress calculation. */
const Z_SPAN = Math.log(Z_FAR / Z_NEAR);

/** Peak alpha of a shape's fill. Deliberately low: this sits behind text. */
const ALPHA_MAX = 0.5;

/** Fill colours, sampled per shape. Brand magenta through to deep plum. */
const FILLS: [number, number, number][] = [
  [255, 72, 139],
  [188, 52, 128],
  [128, 36, 104],
  [92, 28, 84],
  [66, 22, 68],
];

type Shape = {
  /** World offset from the vanishing point, in reference-size units. */
  x: number;
  y: number;
  /** Half-extents, in the same units. */
  w: number;
  h: number;
  z: number;
  /** Fraction of remaining depth shed per second. */
  rate: number;
  fill: [number, number, number];
};

export default function ZoomField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const rand = (lo: number, hi: number) => lo + Math.random() * (hi - lo);

    /** A shape's starting state, used both at spawn and on retirement. */
    const seed = (shape: Shape, atFar: boolean) => {
      // World offsets. The perspective divide shrinks these toward the vanishing
      // point at depth and fans them out on the way in, so the spread is wide: a
      // shape that starts near the middle of the frame leaves through its edge.
      shape.x = rand(-2, 2);
      shape.y = rand(-1.5, 1.5);
      // A square about half the time, a rectangle the rest, in either orientation.
      const base = rand(0.1, 0.34);
      const ratio = Math.random() < 0.45 ? 1 : rand(0.35, 2.8);
      shape.w = base;
      shape.h = base * ratio;
      // Depths are staggered on the log scale the motion uses, so the initial
      // field is spread evenly on screen rather than bunched at the far plane.
      shape.z = atFar ? Z_FAR : Z_NEAR * Math.exp(Math.random() * Z_SPAN);
      shape.rate = rand(RATE_MIN, RATE_MAX);
      shape.fill = FILLS[Math.floor(Math.random() * FILLS.length)];
    };

    const shapes: Shape[] = Array.from({ length: COUNT }, () => {
      const shape = { x: 0, y: 0, w: 0, h: 0, z: 0, rate: 0, fill: FILLS[0] } as Shape;
      // Staggered depths on the first frame, so the field is already populated
      // rather than everything arriving together.
      seed(shape, false);
      return shape;
    });

    let width = 0;
    let height = 0;
    let reference = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // The larger axis drives sizing, so shapes stay proportionate on any shape
      // of viewport instead of turning into slivers on a wide one.
      reference = Math.max(width, height);
    };

    const draw = () => {
      if (!width || !height) return;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      for (const shape of shapes) {
        const scale = 1 / shape.z;
        const w = shape.w * reference * scale;
        const h = shape.h * reference * scale;
        const x = cx + shape.x * reference * scale;
        const y = cy + shape.y * reference * scale;

        // Fade in from the far plane, then out again on the way past. Progress is
        // measured in log space so it matches how the depth actually moves.
        const travelled = Math.log(Z_FAR / shape.z) / Z_SPAN;
        const fadeIn = Math.min(1, travelled / 0.12);
        const fadeOut =
          travelled < FADE_FROM ? 1 : 1 - (travelled - FADE_FROM) / (1 - FADE_FROM);
        const alpha = ALPHA_MAX * fadeIn * Math.max(0, fadeOut);
        if (alpha <= 0.002) continue;

        const [r, g, b] = shape.fill;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fillRect(x - w / 2, y - h / 2, w, h);
      }
    };

    resize();

    if (reduced) {
      // One frame, no loop: the depth still reads, nothing moves.
      draw();
      const ro = new ResizeObserver(() => {
        resize();
        draw();
      });
      ro.observe(canvas);
      return () => ro.disconnect();
    }

    let raf = 0;
    let last = 0;
    let running = false;

    const frame = (now: number) => {
      if (!running) return;
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
      last = now;

      for (const shape of shapes) {
        shape.z *= Math.exp(-shape.rate * dt);
        if (shape.z <= Z_NEAR) seed(shape, true);
      }

      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    // Off-screen or in a background tab, this stops entirely rather than burning a
    // frame budget nobody can see. Both conditions are tracked, because an observer
    // only fires on a change: coming back from a background tab is not one, so the
    // loop has to be restarted from the visibility handler itself.
    let onScreen = false;

    const sync = () => {
      if (onScreen && !document.hidden) start();
      else stop();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = Boolean(entry?.isIntersecting);
        sync();
      },
      { rootMargin: "120px 0px" },
    );
    io.observe(canvas);

    document.addEventListener("visibilitychange", sync);

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return <canvas aria-hidden="true" className={className} ref={canvasRef} />;
}
