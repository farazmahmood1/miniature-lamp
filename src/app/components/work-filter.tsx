"use client";

/**
 * The filtered case-study grid in the "Selected work" section.
 *
 * Replaces the last captured tab control on this page. That one had two problems:
 * its spec pinned each tab to a recorded pixel width, so the short "AI" label left
 * the pill overlapping its neighbour, and all three panels rendered the same cards,
 * so the filter never actually filtered anything.
 *
 * This filters real case studies, and the pill is measured from the active tab so a
 * label of any length is safe.
 */

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { workFilters, caseStudiesIn } from "../../config/work";

const MONO =
  "[font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase";

export default function WorkFilter() {
  const [active, setActive] = useState(0);
  const baseId = useId().replace(/:/g, "");
  const listRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLElement | null>>([]);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  const measure = useCallback(() => {
    const tab = tabRefs.current[active];
    if (!tab) return;
    setPill({ left: tab.offsetLeft, width: tab.offsetWidth });
  }, [active]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    return () => ro.disconnect();
  }, [measure]);

  const filter = workFilters[active];
  const studies = caseStudiesIn(filter.id);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      (active + (e.key === "ArrowRight" ? 1 : workFilters.length - 1)) % workFilters.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="ct-work">
      <div
        className="ct-work__tabs"
        role="tablist"
        aria-label="Filter work"
        onKeyDown={onKeyDown}
        ref={listRef}
      >
        <span
          className="ct-work__pill"
          aria-hidden="true"
          style={
            pill ? { width: pill.width, transform: `translateX(${pill.left}px)` } : { opacity: 0 }
          }
        />
        {workFilters.map((f, i) => (
          <button
            key={f.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-controls={`${baseId}-panel`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className={`ct-work__tab ${MONO}`}
            onClick={() => setActive(i)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        className="ct-work__grid"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        // Re-keyed so the cards replay their entrance when the filter changes.
        key={filter.id}
      >
        {studies.map((study, i) => (
          <Link
            className="ct-work__card"
            href={`/work/${study.slug}`}
            key={study.slug}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className="ct-work__mark" aria-hidden="true">
              <span
                className="ct-work__glyph"
                style={{ maskImage: `url("${study.logoSrc}")`, WebkitMaskImage: `url("${study.logoSrc}")` }}
              />
            </span>

            <span className="ct-work__body">
              <span className={`ct-work__tags ${MONO}`}>
                {study.tags.slice(0, 2).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </span>

              <span className="ct-work__title">{study.title}</span>

              <span className="ct-work__meta">
                <span className={MONO}>{study.results[0]?.value ?? study.year}</span>
                <span className={`${MONO} ct-work__more`}>
                  Read case study
                  <svg viewBox="0 0 26 26" width="18" height="18" fill="none" aria-hidden="true">
                    <path
                      d="M8 18 18 8M10 8h8v8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
