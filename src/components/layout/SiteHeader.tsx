"use client";

/**
 * The site header, used by every route.
 *
 * Replaces the five copies of this markup that the original capture inlined into each
 * page's section file. Structure, classes and the `c-header` / `c-scramble-text`
 * custom elements are kept from the captured design so the visual result is unchanged;
 * links, labels and the menus are driven from `src/config`.
 *
 * Two things that were dead in the capture now work: the mobile menu button (it had
 * `aria-expanded` but no handler and no panel) and the services menu (the trigger
 * survived, the panel did not).
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../../config/site";
import { primaryNav, primaryCta, routes } from "../../config/navigation";
import { serviceGroups } from "../../config/services";
import Wordmark from "../brand/Wordmark";

const EASE = "cubic-bezier(0.645, 0.045, 0.355, 1)";
const INK = "rgb(23, 43, 118)";

const NAV_LABEL_CLASS =
  "h-full flex relative z-2 isolate px-3.5 justify-center items-center gap-1.5 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:h-8.5 before:bg-surface-2 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:rounded-tl-sm hover:before:opacity-15 before:transition-opacity before:duration-200 max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none]";

export default function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  // Any navigation closes both menus. Without this the panel survives a client-side
  // route change and hangs over the new page.
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Escape and outside-pointer close the services panel.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    const onDown = (e: PointerEvent) => {
      const li = servicesRef.current;
      if (li && !li.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [servicesOpen]);

  // The open services panel dims and blurs the page behind it (see motion.css).
  useEffect(() => {
    const root = document.documentElement;
    root.toggleAttribute("data-menu-open", servicesOpen);
    return () => root.removeAttribute("data-menu-open");
  }, [servicesOpen]);

  // Lock the page behind the mobile panel, and restore the exact scroll position after.
  useEffect(() => {
    if (!mobileOpen) return;
    const { body } = document;
    const y = window.scrollY;
    const prev = body.style.cssText;
    body.style.position = "fixed";
    body.style.top = `-${y}px`;
    body.style.width = "100%";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      body.style.cssText = prev;
      window.scrollTo(0, y);
      document.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href);

  return (
    <c-header class="inline">
      <header
        className="h-20.5 block absolute inset-x-0 z-90 py-3.5 text-background pointer-events-none max-lg:h-18 max-lg:py-[0.9375rem]"
        data-cid="n8"
      >
        <div className="h-full flex relative z-3 max-w-500 px-10 justify-between pointer-events-none max-lg:px-[0.9375rem]">
          <Link
            className="flex items-center gap-[0.9375rem] cursor-pointer pointer-events-auto"
            href={routes.home}
            aria-label={`${site.name} home`}
          >
            <Wordmark />
          </Link>

          <nav
            className="flex justify-end items-center grow gap-[0.9375rem] pointer-events-none"
            aria-label="Primary"
          >
            {/* pointer-events-auto: the parent <nav> is pointer-events-none, as on the
                captured design, and this <ul> opts back in. */}
            <ul className="h-full flex relative pl-2.5 rounded-[7px] [list-style-type:none] list-outside bg-clr-0 [backdrop-filter:blur(17.5px)] pointer-events-auto max-lg:hidden">
              <li className="block" ref={servicesRef}>
                <button
                  className="h-13.5 inline-flex py-2.5 items-center text-center cursor-pointer"
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  <span className={NAV_LABEL_CLASS}>
                    <c-scramble-text class="block">{" Services "}</c-scramble-text>
                    <span
                      className="w-1 h-1 block rounded-[100%] bg-background transition-transform duration-200"
                      style={{ transform: servicesOpen ? "scale(1.9)" : "scale(1)" }}
                    />
                  </span>
                </button>

                <ServicesPanel open={servicesOpen} />
              </li>

              {primaryNav
                .filter((item) => item.href !== routes.services)
                .map((item) => (
                  <li className="block" key={item.href}>
                    <Link
                      className="h-13.5 inline-flex py-2.5 items-center cursor-pointer"
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      <span className={NAV_LABEL_CLASS}>
                        <c-scramble-text class="block">{` ${item.label} `}</c-scramble-text>
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>

            <div className="h-full flex gap-3 pointer-events-auto">
              <Link
                className="min-h-13.5 hidden relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-primary text-color-001 cursor-pointer lg:flex"
                href={primaryCta.href}
              >
                <c-scramble-text class="z-2 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase">
                  {` ${primaryCta.label} `}
                </c-scramble-text>
              </Link>

              <button
                className="min-h-13.5 hidden relative isolate min-w-0 px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-color-003 [backdrop-filter:blur(16px)] cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:flex max-lg:px-3.5"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <c-scramble-text class="inline-block z-2 min-w-10.5 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase max-lg:block">
                  {mobileOpen ? " Close " : " Menu "}
                </c-scramble-text>
                <span className="inline-flex relative justify-center items-center pointer-events-none w-5 h-5 max-lg:flex">
                  <MenuGlyph open={mobileOpen} />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </c-header>
  );
}

/**
 * The services mega-panel, positioned against the nav <ul>.
 *
 * Anchored to the nav's right edge, not its left. The nav sits at the right of the
 * header, so a left-anchored panel of this width ran off the viewport and clipped
 * the badge on the last column.
 */
function ServicesPanel({ open }: { open: boolean }) {
  return (
    <div
      className="absolute right-0 top-[54px] z-[100] pt-2"
      style={{
        width: "min(620px, calc(100vw - 40px))",
        visibility: open ? "visible" : "hidden",
        transition: open ? "visibility 0s" : "visibility 0s 0.2s",
      }}
    >
      <div
        className="relative grid grid-cols-2 gap-x-2 gap-y-1 overflow-hidden rounded-xl bg-white p-2.5"
        style={{
          color: INK,
          opacity: open ? 1 : 0,
          clipPath: open ? "inset(0 0 0% 0 round 12px)" : "inset(0 0 100% 0 round 12px)",
          transition: `clip-path 0.3s ${EASE}, opacity 0.3s ${EASE}`,
          boxShadow: "0 18px 48px -12px rgba(9, 17, 48, 0.28)",
        }}
      >
        {serviceGroups.map((group, gi) => (
          <div key={group.title} className="flex flex-col">
            <p
              className="px-2.5 pb-1 pt-2 uppercase opacity-50"
              style={{
                fontFamily: "'Suisse Int\\'l Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.04em",
              }}
            >
              {group.title}
            </p>
            <ul className="flex flex-col list-none">
              {group.items.map((s, i) => (
                <li
                  key={s.slug}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translate(0, 0)" : "translate(10px, 10px)",
                    transition: `transform 0.2s ${EASE} ${open ? 50 + (gi * 4 + i) * 25 : 0}ms, opacity 0.2s ${EASE} ${open ? 50 + (gi * 4 + i) * 25 : 0}ms`,
                  }}
                >
                  <Link
                    href={s.href}
                    className="group flex items-center justify-between gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-[rgb(246,248,250)]"
                    tabIndex={open ? 0 : -1}
                  >
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: "'Suisse Int\\'l Mono', monospace",
                        fontSize: "13px",
                        letterSpacing: "-0.325px",
                      }}
                    >
                      {s.shortName}
                    </span>
                    {s.tag ? (
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 uppercase"
                        style={{
                          fontFamily: "'Suisse Int\\'l Mono', monospace",
                          fontSize: "10px",
                          letterSpacing: "0.04em",
                          background: "rgb(255, 72, 139)",
                          color: "white",
                        }}
                      >
                        {s.tag}
                      </span>
                    ) : (
                      <ArrowGlyph />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div
          className="col-span-2 mt-1 border-t pt-2.5"
          style={{
            borderColor: "rgba(23, 43, 118, 0.1)",
            opacity: open ? 1 : 0,
            transition: `opacity 0.2s ${EASE} ${open ? 300 : 0}ms`,
          }}
        >
          <Link
            href={routes.services}
            className="flex items-center justify-between rounded-lg px-2.5 py-2 transition-colors hover:bg-[rgb(246,248,250)]"
            tabIndex={open ? 0 : -1}
          >
            <span
              className="uppercase"
              style={{
                fontFamily: "'Suisse Int\\'l Mono', monospace",
                fontSize: "13px",
                letterSpacing: "-0.325px",
              }}
            >
              All services
            </span>
            <ArrowGlyph alwaysVisible />
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Full-screen mobile navigation. */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      // `data-lenis-prevent` keeps the smooth-scroll runtime off this nested scroller.
      data-lenis-prevent
      className="fixed inset-0 z-[95] flex flex-col overflow-y-auto px-[0.9375rem] pb-10 pt-24 lg:hidden"
      style={{
        background: "rgb(16, 20, 33)",
        color: "white",
        visibility: open ? "visible" : "hidden",
        opacity: open ? 1 : 0,
        transform: open ? "translateY(0)" : "translateY(-8px)",
        pointerEvents: open ? "auto" : "none",
        transition: open
          ? `opacity 0.25s ${EASE}, transform 0.25s ${EASE}, visibility 0s`
          : `opacity 0.2s ${EASE}, transform 0.2s ${EASE}, visibility 0s 0.2s`,
      }}
      aria-hidden={!open}
    >
      <nav aria-label="Mobile" className="flex flex-col gap-10">
        <ul className="flex flex-col gap-1 list-none">
          {primaryNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="block py-2 text-[1.75rem] font-light leading-[2.25rem] tracking-[-0.7px]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {serviceGroups.map((group) => (
          <div key={group.title}>
            <p
              className="mb-3 uppercase opacity-50"
              style={{
                fontFamily: "'Suisse Int\\'l Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.04em",
              }}
            >
              {group.title}
            </p>
            <ul className="flex flex-col gap-2 list-none">
              {group.items.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.href}
                    onClick={onClose}
                    tabIndex={open ? 0 : -1}
                    className="block py-1 text-[0.9375rem] leading-[1.375rem] opacity-80"
                  >
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <Link
          href={primaryCta.href}
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          className="h-13.5 flex items-center justify-center rounded-[7px] bg-primary text-color-001"
        >
          <span
            className="uppercase"
            style={{
              fontFamily: "'Suisse Int\\'l Mono', monospace",
              fontSize: "13px",
              letterSpacing: "-0.325px",
            }}
          >
            {primaryCta.label}
          </span>
        </Link>
      </nav>
    </div>
  );
}

function ArrowGlyph({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  return (
    <svg
      viewBox="0 0 26 26"
      width="20"
      height="20"
      fill="none"
      aria-hidden="true"
      className={
        alwaysVisible
          ? "shrink-0"
          : "shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      }
    >
      <path
        d="M8 18 18 8M10 8h8v8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuGlyph({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
      <path
        d={open ? "M5 5l10 10" : "M3 6h14"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d={open ? "M15 5L5 15" : "M3 12h14"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
