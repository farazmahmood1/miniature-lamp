"use client";

/**
 * The "Use Cases" nav dropdown.
 *
 * The capture emitted the trigger as a plain <button> with a dot indicator and no
 * panel behind it — the menu itself never came across. The trigger markup below is
 * reproduced verbatim (same classes, same data-cids) so the nav renders exactly as
 * before; only the handler and the panel are new.
 *
 * Chrome, timings and easing are deliberately shared with HeaderDropdown so the two
 * menus in the same nav bar read as one component. Items differ: these are page
 * links, so they carry a label and an arrow rather than an icon tile.
 */

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.645, 0.045, 0.355, 1)";
const INK = "rgb(23, 43, 118)";

const ITEMS = [
  { href: "/use-cases/large-language-models", label: "Large Language Models" },
  { href: "/use-cases/voice", label: "Voice" },
  { href: "/use-cases/image-and-video", label: "Image & Video" },
];

/**
 * The home page and the cloned sub-pages were captured at different times, so their
 * trigger label carries slightly different utility classes (an arbitrary
 * [font-family:...] on one, `font-suisse-mono` on the other). Passing the class
 * string in lets one component serve every header without normalising the markup.
 */
const HOME_LABEL_CLASS =
  "h-full flex relative z-2 isolate px-3.5 justify-center items-center gap-1.5 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[110.7px] before:h-8.5 before:bg-surface-2 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:origin-[55.3359px_17px] before:rounded-tl-sm max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]";

export default function UseCasesDropdown({
  labelClass = HOME_LABEL_CLASS,
}: {
  labelClass?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: PointerEvent) => {
      const li = rootRef.current;
      if (li && !li.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    // Deliberately NOT positioned: the panel's absolute box resolves against the
    // nav <ul> (which is `relative`), matching HeaderDropdown.
    <li className="block" data-cid="n22" ref={rootRef}>
      <button
        className="h-13.5 inline-flex py-2.5 items-center text-center cursor-pointer"
        data-cid="n23"
        data-component="button"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {" "}
        <span className={labelClass} data-cid="n24">
          {" "}
          <c-scramble-text class="block" data-cid="n25" id="scrambletext-17">
            {" Use Cases "}
          </c-scramble-text>
          {" "}
          {/* The dot doubles as the open/closed affordance. */}
          <span
            className="w-1 h-1 block rounded-[100%] bg-background transition-transform duration-200"
            data-cid="n26"
            style={{ transform: open ? "scale(1.9)" : "scale(1)" }}
          />
          {" "}
        </span>
        {" "}
      </button>

      <div
        className="absolute left-0 right-0 top-[54px] z-[100] pt-2"
        style={{
          width: "300px",
          visibility: open ? "visible" : "hidden",
          transition: open ? "visibility 0s" : "visibility 0s 0.2s",
        }}
      >
        <div
          className="relative flex flex-col overflow-hidden rounded-xl bg-white p-2.5"
          style={{
            gap: "10px",
            color: INK,
            opacity: open ? 1 : 0,
            clipPath: open ? "inset(0 0 0% 0 round 12px)" : "inset(0 0 100% 0 round 12px)",
            transition: `clip-path 0.3s ${EASE}, opacity 0.3s ${EASE}`,
            boxShadow: "0 18px 48px -12px rgba(9, 17, 48, 0.28)",
          }}
        >
          <ul className="relative z-[2] flex flex-col list-none">
            {ITEMS.map((it, i) => (
              <li
                key={it.href}
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translate(0, 0)" : "translate(10px, 10px)",
                  transition: `transform 0.2s ${EASE} ${open ? 60 + i * 60 : 0}ms, opacity 0.2s ${EASE} ${open ? 60 + i * 60 : 0}ms`,
                }}
              >
                <a
                  href={it.href}
                  className="group flex h-full items-center rounded-lg p-2.5 transition-colors hover:bg-[rgb(246,248,250)]"
                  style={{ gap: "16px" }}
                  // Keep hidden items out of the tab order while the panel is closed.
                  tabIndex={open ? 0 : -1}
                >
                  <span
                    className="relative z-[2] flex grow items-center justify-between uppercase"
                    style={{
                      gap: "8px",
                      height: "26px",
                      fontFamily: "'Suisse Int\\'l Mono', monospace",
                      fontSize: "13px",
                      letterSpacing: "-0.325px",
                    }}
                  >
                    <c-scramble-text class="inline-block">{it.label}</c-scramble-text>
                    <svg
                      viewBox="0 0 26 26"
                      width="26"
                      height="26"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      <path
                        d="M8 18 18 8M10 8h8v8"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
