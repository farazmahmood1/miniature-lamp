"use client";

/**
 * First-load preloader.
 *
 * Shows once per browser session, not on every client-side navigation — a curtain that
 * drops each time someone clicks a nav link reads as a bug, not as polish. The flag
 * lives in sessionStorage so a returning visitor in the same session goes straight to
 * the page.
 *
 * The overlay is rendered on the server too, so there is no flash of the page before
 * the curtain appears. It removes itself once the window `load` event has fired AND a
 * minimum on-screen time has elapsed, so a fast connection gets a deliberate beat
 * rather than a flicker.
 *
 * Under `prefers-reduced-motion` the counter and bar still run but the exit is a plain
 * fade with no transform, and the hold is shortened.
 */

import { useEffect, useState } from "react";
import { site } from "../../config/site";

/** Minimum time the curtain stays up, so it never flickers on a warm cache. */
const MIN_VISIBLE_MS = 900;
/** How long the exit transition runs. Must match the CSS duration below. */
const EXIT_MS = 700;
const STORAGE_KEY = "codilated:intro-shown";

export default function Preloader() {
  // `mounted` gates the session check to the client, so the server-rendered markup and
  // the first client render agree and React does not warn about a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Private mode or blocked storage: show the intro rather than failing.
    }
    if (seen) {
      setDone(true);
      return;
    }

    const started = Date.now();
    let raf = 0;
    let exitTimer: ReturnType<typeof setTimeout>;
    let doneTimer: ReturnType<typeof setTimeout>;

    // Ease the counter toward 90% while loading, then let `finish` take it to 100.
    const tick = () => {
      const elapsed = Date.now() - started;
      setProgress((p) => (p >= 90 ? p : Math.min(90, (elapsed / MIN_VISIBLE_MS) * 90)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const finish = () => {
      const wait = Math.max(0, MIN_VISIBLE_MS - (Date.now() - started));
      exitTimer = setTimeout(() => {
        cancelAnimationFrame(raf);
        setProgress(100);
        setLeaving(true);
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* ignore */
        }
        doneTimer = setTimeout(() => setDone(true), EXIT_MS);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      window.removeEventListener("load", finish);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="ct-preloader"
      data-leaving={leaving ? "" : undefined}
      // Before mount the overlay is inert and invisible to assistive tech; it is decor.
      aria-hidden="true"
      role="presentation"
      style={mounted ? undefined : { opacity: 1 }}
    >
      <div className="ct-preloader__inner">
        <div className="ct-preloader__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="ct-preloader__word">{site.name}</p>
        <p className="ct-preloader__tagline">{site.tagline}</p>

        <div className="ct-preloader__bar">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <p className="ct-preloader__count">{String(Math.round(progress)).padStart(3, "0")}</p>
      </div>
    </div>
  );
}
