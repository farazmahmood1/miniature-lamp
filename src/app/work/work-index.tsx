"use client";

/**
 * The filtered portfolio grid on /work.
 *
 * Same filter model as the "Selected work" block on the home page, but the cards are
 * the full portfolio treatment: project artwork, tags, title and the headline number.
 * The pill is measured from the active tab rather than computed as an equal fraction,
 * so labels of different lengths stay covered.
 */

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

import { workFilters, caseStudiesIn } from "../../config/work";

export default function WorkIndex() {
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
    <div className="pf">
      <div
        className="pf__tabs"
        role="tablist"
        aria-label="Filter work"
        onKeyDown={onKeyDown}
        ref={listRef}
      >
        <span
          className="pf__pill"
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
            className="pf__tab"
            onClick={() => setActive(i)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        className="pf__grid"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        // Re-keyed so the cards replay their entrance when the filter changes.
        key={filter.id}
      >
        {studies.map((study, i) => (
          <Link
            className="pf__card"
            href={`/work/${study.slug}`}
            key={study.slug}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <span className="pf__frame">
              <img
                src={study.images.hero}
                alt=""
                width={1200}
                height={800}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="pf__year">{study.year}</span>
            </span>

            <span className="pf__tags">
              {study.tags.slice(0, 3).map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </span>

            <span className="pf__title">{study.title}</span>

            <span className="pf__foot">
              <span className="pf__stat">
                {study.results[0] ? `${study.results[0].value} ${study.results[0].label}` : study.duration}
              </span>
              <span className="pf__more">
                Read case study
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
                  <path
                    d="M8 16 16 8M9 8h7v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
