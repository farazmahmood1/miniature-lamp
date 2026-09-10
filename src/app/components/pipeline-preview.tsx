"use client";

/**
 * The visual on the "Code you can hand to anyone" block.
 *
 * Replaces the captured terminal, which was a training run rendered as ASCII blocks
 * and read as noise rather than as craft. This runs the pipeline the copy describes:
 * a commit moving through lint, types, tests, build and deploy, each stage filling in
 * turn and ticking over, ending in a released badge.
 *
 * The sequence is driven from state rather than CSS keyframes because five stages
 * chained on one loop desynchronise when expressed as delays: each stage would reset
 * on its own cycle rather than with the run. A single step counter keeps them in
 * lockstep, and the bars are plain CSS transitions between steps.
 *
 * It only runs while on screen, and holds a completed run under reduced motion.
 */

import { useEffect, useRef, useState } from "react";

const STAGES = [
  { name: "Lint", detail: "214 files" },
  { name: "Types", detail: "0 errors" },
  { name: "Tests", detail: "186 passed" },
  { name: "Build", detail: "33 routes" },
  { name: "Deploy", detail: "44s" },
];

/** How long each stage takes to fill. */
const STEP_MS = 1100;
/** How long the finished run is held before it starts again. */
const HOLD_MS = 2600;

export default function PipelinePreview() {
  // -1 is the idle frame before the run starts; STAGES.length means every stage done.
  const [step, setStep] = useState(-1);
  const [entered, setEntered] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStep(STAGES.length);
      return;
    }

    let timer: ReturnType<typeof setTimeout> | undefined;
    let running = false;

    const tick = () => {
      setStep((prev) => {
        const next = prev >= STAGES.length ? 0 : prev + 1;
        timer = setTimeout(tick, next >= STAGES.length ? HOLD_MS : STEP_MS);
        return next;
      });
    };

    // Off-screen the loop is pure waste, so it only runs while the card is in view.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setEntered(true);
        if (entry.isIntersecting && !running) {
          running = true;
          timer = setTimeout(tick, 240);
        } else if (!entry.isIntersecting && running) {
          running = false;
          clearTimeout(timer);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const complete = step >= STAGES.length;

  return (
    <div className="ct-pipe" ref={rootRef} aria-hidden="true" data-entered={entered ? "" : undefined}>
      <div className="ct-pipe__head">
        <span className="ct-pipe__branch">main</span>
        <span className="ct-pipe__sha">a3f19c2</span>
        <span className="ct-pipe__msg">handover: pipeline + docs</span>
      </div>

      <ol className="ct-pipe__stages">
        {STAGES.map((stage, i) => {
          const state = step > i ? "done" : step === i ? "run" : "idle";
          return (
            <li
              className="ct-pipe__stage"
              data-state={state}
              key={stage.name}
              style={{ transitionDelay: `${180 + i * 70}ms` }}
            >
              <span className="ct-pipe__dot">
                <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
                  <path
                    d="M2.6 6.3 5 8.7l4.4-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              <span className="ct-pipe__name">{stage.name}</span>

              <span className="ct-pipe__track">
                <span className="ct-pipe__fill" />
              </span>

              <span className="ct-pipe__detail">{stage.detail}</span>
            </li>
          );
        })}
      </ol>

      <div className="ct-pipe__foot" data-complete={complete ? "" : undefined}>
        <span className="ct-pipe__badge">
          {complete ? "Released to production" : "Running"}
        </span>
      </div>
    </div>
  );
}
