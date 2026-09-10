"use client";

/**
 * The engagement cards, with the delivery-speed control above them.
 *
 * The control is the reason this is a client component: switching speed re-prices
 * every card, so the price has to be derived at render rather than baked into the
 * copy. The pill is measured from the active button so labels of any length stay
 * covered, the same approach the work filter uses.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";

import { engagements, deliverySpeeds, formatPrice } from "./content";

export default function Plans() {
  const [speed, setSpeed] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Array<HTMLElement | null>>([]);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  const measure = useCallback(() => {
    const btn = btnRefs.current[speed];
    if (!btn) return;
    setPill({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [speed]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    const list = listRef.current;
    if (!list || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    return () => ro.disconnect();
  }, [measure]);

  const active = deliverySpeeds[speed];

  return (
    <div className="pr-plans">
      <div className="pr-toggle-wrap">
        <div
          className="pr-toggle"
          role="tablist"
          aria-label="Delivery speed"
          ref={listRef}
          onKeyDown={(e) => {
            if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
            e.preventDefault();
            const next =
              (speed + (e.key === "ArrowRight" ? 1 : deliverySpeeds.length - 1)) %
              deliverySpeeds.length;
            setSpeed(next);
            btnRefs.current[next]?.focus();
          }}
        >
          <span
            className="pr-toggle__pill"
            aria-hidden="true"
            style={
              pill
                ? { width: pill.width, transform: `translateX(${pill.left}px)` }
                : { opacity: 0 }
            }
          />
          {deliverySpeeds.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                btnRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              aria-selected={i === speed}
              tabIndex={i === speed ? 0 : -1}
              className="pr-toggle__btn"
              onClick={() => setSpeed(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
        <p className="pr-toggle__note" key={active.id}>
          {active.note}
        </p>
      </div>

      <ul className="pr-grid">
        {engagements.map((plan) => (
          <li
            className={`pr-card${plan.featured ? " pr-card--featured" : ""}`}
            key={plan.slug}
          >
            {plan.badge && <span className="pr-card__ribbon">{plan.badge}</span>}

            <span className="pr-card__name">{plan.name}</span>

            <span className="pr-card__price">
              {plan.pricePrefix}
              <b key={`${plan.slug}-${active.id}`}>
                {formatPrice(plan.amount * active.multiplier)}
              </b>
              {plan.priceSuffix}
            </span>
            <span className="pr-card__note">{plan.priceNote}</span>

            <p className="pr-card__desc">{plan.description}</p>

            <Link className="pr-card__cta" href={plan.href}>
              {plan.cta}
            </Link>

            <span className="pr-card__rule" aria-hidden="true" />

            <span className="pr-card__label">What is included</span>
            <ul className="pr-card__list">
              {plan.includes.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                    <path
                      d="m3 8.4 3.2 3.2L13 4.8"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <span className="pr-card__best">
              Best for <b>{plan.bestFor}</b>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
