"use client";

/**
 * First-load preloader.
 *
 * The progress is real. It tracks three things the browser is genuinely waiting on —
 * every webfont, every image in the document, and the window `load` event, which
 * covers stylesheets, scripts and everything else — and the curtain stays up until
 * all of them have settled. Nothing is on a timer, so the bar reaching 100% means
 * the page behind it is actually ready.
 *
 * One deliberate exception: a hard ceiling. If a single slow resource hangs, the
 * visitor must not be trapped behind a curtain, so after `SAFETY_MS` the loader
 * leaves regardless and lets the page finish in the background.
 *
 * It shows once per browser session. A curtain that drops on every client-side
 * navigation reads as a bug rather than as polish, and those navigations load no new
 * assets anyway. The flag lives in sessionStorage.
 *
 * The overlay is server-rendered, so it covers the page from the first paint rather
 * than flashing the content and then hiding it.
 */

import { useEffect, useRef, useState } from "react";
import { site } from "../../config/site";
import Wordmark from "../brand/Wordmark";

/** Nothing holds the curtain longer than this, however slow the network. */
const SAFETY_MS = 12000;
/** Exit transition length. Must match the CSS. */
const EXIT_MS = 800;
/** A beat at 100% before leaving, so the bar is seen to complete. */
const SETTLE_MS = 260;
const STORAGE_KEY = "codilated:intro-shown";

export default function Preloader() {
  // Gates the session check to the client, so the server markup and the first client
  // render agree and React does not warn about a mismatch.
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  /** Progress only ever moves forward, however the signals happen to resolve. */
  const shown = useRef(0);

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

    let cancelled = false;
    const timers: Array<ReturnType<typeof setTimeout>> = [];

    /* ---- the things the browser is actually waiting for ---- */

    const waitFor: Array<Promise<unknown>> = [];

    // Webfonts. Text reflows when these land, so they are part of "ready".
    waitFor.push(
      document.fonts ? document.fonts.ready.catch(() => undefined) : Promise.resolve(),
    );

    // Every image already in the document. These give the bar its resolution:
    // one step per image rather than three coarse jumps.
    for (const img of Array.from(document.images)) {
      if (img.complete) continue;
      waitFor.push(
        new Promise<void>((resolve) => {
          const settle = () => resolve();
          img.addEventListener("load", settle, { once: true });
          // A broken image must not hold the curtain up.
          img.addEventListener("error", settle, { once: true });
        }),
      );
    }

    // The window load event: stylesheets, scripts, media, everything remaining.
    waitFor.push(
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            window.addEventListener("load", () => resolve(), { once: true });
          }),
    );

    const total = waitFor.length;
    let settled = 0;

    const advance = () => {
      if (cancelled) return;
      settled += 1;
      // Hold at 99 until everything is in, so 100 always means finished.
      const next = Math.min(99, Math.round((settled / total) * 100));
      if (next > shown.current) {
        shown.current = next;
        setProgress(next);
      }
    };

    for (const task of waitFor) task.then(advance, advance);

    /* ---- leaving ---- */

    let finished = false;
    const finish = () => {
      if (finished || cancelled) return;
      finished = true;

      shown.current = 100;
      setProgress(100);

      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }

      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setLeaving(true);
          timers.push(setTimeout(() => !cancelled && setDone(true), EXIT_MS));
        }, SETTLE_MS),
      );
    };

    Promise.all(waitFor).then(finish, finish);
    timers.push(setTimeout(finish, SAFETY_MS));

    return () => {
      cancelled = true;
      for (const t of timers) clearTimeout(t);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className="ct-preloader"
      data-leaving={leaving ? "" : undefined}
      // Decorative: the page behind it is the content.
      aria-hidden="true"
      role="presentation"
      style={mounted ? undefined : { opacity: 1 }}
    >
      {/* Centre: the mark over its glow, with the wordmark beneath. */}
      <div className="ct-preloader__lockup">
        <span className="ct-preloader__glow" aria-hidden="true" />
        <span className="ct-preloader__mark">
          <Wordmark markOnly />
        </span>
        <p className="ct-preloader__word">{site.name}</p>
      </div>

      {/* Foot: the line we stand on, the count, and the bar across the bottom. */}
      <div className="ct-preloader__foot">
        <p className="ct-preloader__tagline">{site.shortTagline}</p>
        <p className="ct-preloader__count">{progress}%</p>
      </div>

      {/* data-complete stops the shimmer. While a slow resource blocks, the number
          stays truthful and the bar shimmers instead of inventing progress. */}
      <div className="ct-preloader__track" data-complete={progress === 100 ? "" : undefined}>
        <span
          className="ct-preloader__fill"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </div>
    </div>
  );
}
