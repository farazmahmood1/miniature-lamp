"use client";

/**
 * Header "grid" dropdown — Book a demo / Contact us + socials.
 *
 * The capture recorded this panel in full (cid 416–471) but the generator dropped it:
 * it was `visibility:hidden` at capture time and the interaction pass logged
 * `disclosures: 0`, so no open/close spec was emitted and the subtree never reached the
 * generated markup. Only the trigger button survived.
 *
 * Every dimension, colour and transition below is taken from the captured computed
 * styles rather than eyeballed:
 *   .c-header_nav_dropdown        absolute top:54 right:0 left:0  464.297x244  pt:8  z:100
 *   .c-header_nav_dropdown_inner  white  464.297x236  p:10  gap:10  flex-col  overflow:hidden
 *                                 transition clip-path/opacity .3s cubic-bezier(.645,.045,.355,1)
 *   .c-header_nav_dropdown_item   444.297x78  opacity:0 translate(10,10) → .2s
 *   .c-header_nav_dropdown_link   flex row  p:10  gap:16  items-center
 *   ..._link_icon                 58x58  bg rgb(238,242,245)
 *   ..._link_label                350.297x26  gap:8  justify-between
 *                                 Suisse Int'l Mono 13px  ls -0.325px  uppercase  rgb(23,43,118)
 *   ..._social                    444.297x50  pt:10  justify-center  opacity:0 translateY(20) → .2s
 *   social ul                     152x26  gap:16
 *
 * The panel is absolutely positioned against the nav <ul> (the nearest positioned
 * ancestor, 464px wide), exactly as on the live site — which is why left:0/right:0 with
 * a 464px width lines up even though the trigger <li> is only 54px wide.
 *
 * The icon SVGs came back empty in the capture (the site loads them from an external
 * sprite), so the calendar and envelope below are redrawn to match the reference frame.
 */

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.645, 0.045, 0.355, 1)";
const INK = "rgb(23, 43, 118)";
const TILE = "rgb(238, 242, 245)";

const SOCIALS = [
  {
    href: "https://x.com/cerebriumai",
    label: "Twitter",
    path: "M18.666 4.592h2.896l-6.326 7.23 7.442 9.837H16.85l-4.563-5.966-5.222 5.966H4.169l6.765-7.733-7.138-9.334H9.77l4.125 5.453zM17.65 19.926h1.605L8.899 6.234H7.177z",
  },
  {
    href: "https://github.com/CerebriumAI",
    label: "GitHub",
    path: "M13.106 1.09c-6.66 0-12.062 5.493-12.062 12.269 0 5.42 3.456 10.019 8.249 11.641.603.114.824-.266.824-.59 0-.293-.011-1.26-.016-2.284-3.356.742-4.064-1.448-4.064-1.448-.549-1.418-1.34-1.795-1.34-1.795-1.094-.761.083-.746.083-.746 1.211.087 1.85 1.265 1.85 1.265 1.075 1.875 2.821 1.333 3.51 1.02.107-.793.42-1.335.765-1.641-2.68-.31-5.495-1.362-5.495-6.063 0-1.34.47-2.434 1.242-3.293-.125-.31-.538-1.557.117-3.247 0 0 1.013-.33 3.318 1.258a11.4 11.4 0 0 1 3.02-.413 11.4 11.4 0 0 1 3.021.413c2.302-1.587 3.314-1.258 3.314-1.258.656 1.69.243 2.938.118 3.247.773.86 1.241 1.954 1.241 3.293 0 4.712-2.821 5.75-5.507 6.053.432.381.818 1.128.818 2.272 0 1.642-.014 2.963-.014 3.367 0 .326.217.709.828.588 4.79-1.624 8.242-6.22 8.242-11.64 0-6.775-5.4-12.267-12.062-12.267",
  },
  {
    href: "https://discord.gg/ATj6USmeE2",
    label: "Discord",
    path: "M21.687 6.352C19.709 4.76 16.579 4.49 16.445 4.48a.49.49 0 0 0-.49.292 3 3 0 0 0-.152.413c1.308.221 2.916.666 4.37 1.569a.497.497 0 1 1-.524.844c-2.5-1.55-5.623-1.629-6.224-1.629-.602 0-3.726.078-6.224 1.63a.497.497 0 0 1-.524-.844c1.454-.902 3.061-1.349 4.37-1.568a4 4 0 0 0-.15-.415.49.49 0 0 0-.493-.292c-.134.01-3.263.28-5.269 1.893-1.046.969-3.14 6.63-3.14 11.524q0 .131.065.247c1.445 2.539 5.387 3.203 6.286 3.232h.016a.5.5 0 0 0 .402-.204l.908-1.25c-2.452-.633-3.704-1.709-3.776-1.773a.497.497 0 0 1 .658-.745c.03.027 2.336 1.984 6.87 1.984 4.543 0 6.85-1.965 6.873-1.984a.498.498 0 0 1 .656.745c-.072.064-1.324 1.14-3.776 1.773l.909 1.25a.5.5 0 0 0 .402.204h.015c.9-.03 4.842-.693 6.286-3.232a.5.5 0 0 0 .066-.247c0-4.894-2.094-10.555-3.168-11.545m-11.493 9.557c-.96 0-1.74-.889-1.74-1.988s.78-1.988 1.74-1.988c.961 0 1.74.89 1.74 1.988 0 1.099-.779 1.988-1.74 1.988m6.461 0c-.96 0-1.74-.889-1.74-1.988s.78-1.988 1.74-1.988c.961 0 1.74.89 1.74 1.988 0 1.099-.779 1.988-1.74 1.988",
  },
  {
    href: "https://www.linkedin.com/company/cerebrium/",
    label: "LinkedIn",
    path: "M2.903 4.562a1.66 1.66 0 0 1 1.66-1.66H21.11a1.66 1.66 0 0 1 1.662 1.66v16.546a1.66 1.66 0 0 1-1.66 1.662H4.562a1.66 1.66 0 0 1-1.66-1.66zm7.864 5.915h2.69v1.351c.389-.776 1.382-1.475 2.875-1.475 2.862 0 3.54 1.547 3.54 4.385v5.258h-2.896v-4.611c0-1.617-.388-2.529-1.374-2.529-1.369 0-1.938.983-1.938 2.529v4.61h-2.897zM5.8 19.872h2.897v-9.52H5.8zM9.112 7.248a1.863 1.863 0 1 1-3.725.082 1.863 1.863 0 0 1 3.725-.082",
    evenOdd: true,
  },
];

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M2.5 9.5h19" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 2.5v4M16.5 2.5v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="6.5" y="12.5" width="3" height="3" rx="0.7" fill="currentColor" />
      <rect x="14.5" y="12.5" width="3" height="3" rx="0.7" fill="currentColor" />
      <rect x="6.5" y="17" width="3" height="3" rx="0.7" fill="currentColor" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="m3.5 7.5 7.53 5.27a2 2 0 0 0 2.29 0L20.5 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const ITEMS = [
  { href: "/book-demo", label: "Book a demo", Icon: CalendarIcon },
  { href: "/contact", label: "Contact us", Icon: MailIcon },
];

export default function HeaderDropdown() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onDown = (e: PointerEvent) => {
      // Close on any press outside the trigger + panel.
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

  // The live panel dims and blurs the page behind it while open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.toggleAttribute("data-ditto-dropdown-open", open);
    return () => document.documentElement.removeAttribute("data-ditto-dropdown-open");
  }, [open]);

  return (
    // The generated trigger markup is reproduced verbatim (same classes, same data-cids)
    // so the nav is byte-identical to what ditto emitted; only the click handler and the
    // panel are new. The <li> is deliberately NOT positioned, so the panel's absolute
    // box resolves against the nav <ul> — the 464px-wide containing block the live site
    // uses.
    <li className="block" data-cid="n43" ref={rootRef}>
      <button
        className="w-13.5 h-13.5 flex p-2.5 justify-center items-center text-center cursor-pointer"
        data-cid="n44"
        data-component="button"
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n45">
          {open ? "Close menu" : "Open menu"}
        </span>
        {" "}
        <span className="w-full h-full flex relative isolate justify-center items-center before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-8.5 before:h-8.5 before:bg-surface-2 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:origin-[17px_17px] before:rounded-tl-sm max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]" data-cid="n46">
          {" "}
          <span className="w-3 h-[0.6875rem] flex flex-col justify-between" data-cid="n47">
            {" "}
            <span className="h-1 flex justify-center items-center gap-0.5" data-cid="n48">
              {" "}
              <span className="w-1 h-full block rounded-[100%] bg-background" data-cid="n49" />
              {" "}
              <span className="w-1 h-full block rounded-[100%] bg-background" data-cid="n50" />
              {" "}
            </span>
            {" "}
            <span className="h-1 flex justify-center items-center gap-0.5" data-cid="n51">
              {" "}
              <span className="w-1 h-full block rounded-[100%] bg-background" data-cid="n52" />
              {" "}
              <span className="w-1 h-full block rounded-[100%] bg-background" data-cid="n53" />
              {" "}
            </span>
            {" "}
          </span>
          {" "}
        </span>
        {" "}
      </button>

      <div
        // .c-header_nav_dropdown — positioned against the nav <ul>, not this <li>.
        className="absolute left-0 right-0 top-[54px] z-[100] pt-2"
        style={{
          width: "464.297px",
          visibility: open ? "visible" : "hidden",
          transition: open ? "visibility 0s" : "visibility 0s 0.2s",
        }}
      >
        <div
          // .c-header_nav_dropdown_inner
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
                // .c-header_nav_dropdown_item — staggered entrance
                style={{
                  height: "78px",
                  opacity: open ? 1 : 0,
                  transform: open ? "translate(0, 0)" : "translate(10px, 10px)",
                  transition: `transform 0.2s ${EASE} ${open ? 60 + i * 60 : 0}ms, opacity 0.2s ${EASE} ${open ? 60 + i * 60 : 0}ms`,
                }}
              >
                <a
                  href={it.href}
                  // .c-header_nav_dropdown_link
                  className="group flex h-full items-center rounded-lg p-2.5 transition-colors hover:bg-[rgb(246,248,250)]"
                  style={{ gap: "16px" }}
                  tabIndex={open ? 0 : -1}
                >
                  <span
                    // ..._link_icon
                    className="relative z-[2] flex shrink-0 items-center justify-center rounded-[10px]"
                    style={{ width: "58px", height: "58px", background: TILE }}
                  >
                    <it.Icon />
                  </span>
                  <span
                    // ..._link_label
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
                      // ..._link_icon_arrow — hidden until hover on the live site
                      viewBox="0 0 26 26"
                      width="26"
                      height="26"
                      fill="none"
                      aria-hidden="true"
                      className="shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    >
                      <path d="M8 18 18 8M10 8h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div
            // ..._social
            className="relative z-[2] flex items-center justify-center pt-2.5"
            style={{
              height: "50px",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transition: `transform 0.2s ${EASE} ${open ? 180 : 0}ms, opacity 0.2s ${EASE} ${open ? 180 : 0}ms`,
            }}
          >
            <ul className="flex list-none" style={{ gap: "16px" }}>
              {SOCIALS.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    tabIndex={open ? 0 : -1}
                    className="block opacity-80 transition-opacity hover:opacity-100"
                  >
                    <span className="sr-only">{s.label}</span>
                    <svg viewBox="0 0 26 26" width="26" height="26" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d={s.path}
                        {...(s.evenOdd ? { fillRule: "evenodd" as const, clipRule: "evenodd" as const } : {})}
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
