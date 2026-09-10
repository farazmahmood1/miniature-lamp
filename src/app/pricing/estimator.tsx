"use client";

/**
 * Indicative project estimator.
 *
 * It exists so a visitor can work out whether we are in their range before booking
 * a call. It is deliberately a band rather than a number, and it says so: the real
 * figure comes out of discovery, and anything else would be a guess dressed up as a
 * quote.
 *
 * The maths is one line and lives here rather than in the config, because the config
 * is copy that a non-engineer should be able to edit.
 */

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  ESTIMATE_BASE,
  ESTIMATE_SPREAD,
  estimatorInputs,
  estimatorOptions,
  deliverySpeeds,
  formatPrice,
} from "./content";
import { primaryCta } from "../../config/navigation";

const initialValues = () =>
  Object.fromEntries(estimatorInputs.map((i) => [i.id, i.initial])) as Record<string, number>;

export default function Estimator() {
  const [values, setValues] = useState<Record<string, number>>(initialValues);
  const [options, setOptions] = useState<Record<string, boolean>>({});
  const [speed, setSpeed] = useState(deliverySpeeds[0].id);

  const { low, high, weeks } = useMemo(() => {
    const units = estimatorInputs.reduce(
      (sum, input) => sum + (values[input.id] ?? 0) * input.unitCost,
      0,
    );
    const optionMultiplier = estimatorOptions.reduce(
      (m, o) => (options[o.id] ? m * o.multiplier : m),
      1,
    );
    const speedMultiplier =
      deliverySpeeds.find((s) => s.id === speed)?.multiplier ?? 1;

    const mid = (ESTIMATE_BASE + units) * optionMultiplier * speedMultiplier;
    // Paced to the 6-to-20-week band the comparison table states for a project,
    // and floored at the shortest engagement we would actually take on.
    // Accelerated delivery buys weeks back, so its multiplier divides out here.
    const estimatedWeeks = Math.max(4, Math.round(mid / 2000 / speedMultiplier));

    return {
      low: mid * (1 - ESTIMATE_SPREAD),
      high: mid * (1 + ESTIMATE_SPREAD),
      weeks: estimatedWeeks,
    };
  }, [values, options, speed]);

  return (
    <div className="pr-calc">
      <div className="pr-calc__controls">
        {estimatorInputs.map((input) => {
          const value = values[input.id] ?? input.initial;
          const percent = ((value - input.min) / (input.max - input.min)) * 100;
          return (
            <div className="pr-calc__row" key={input.id}>
              <label className="pr-calc__head" htmlFor={`est-${input.id}`}>
                <span>{input.label}</span>
                <output htmlFor={`est-${input.id}`}>{input.unit(value)}</output>
              </label>
              <input
                className="pr-calc__slider"
                id={`est-${input.id}`}
                type="range"
                min={input.min}
                max={input.max}
                step={input.step}
                value={value}
                style={{ "--pct": `${percent}%` } as React.CSSProperties}
                onChange={(e) =>
                  setValues((v) => ({ ...v, [input.id]: Number(e.target.value) }))
                }
              />
              <p className="pr-calc__help">{input.help}</p>
            </div>
          );
        })}

        <fieldset className="pr-calc__options">
          <legend>Anything else in scope?</legend>
          {estimatorOptions.map((option) => (
            <label className="pr-calc__opt" key={option.id}>
              <input
                type="checkbox"
                checked={Boolean(options[option.id])}
                onChange={(e) =>
                  setOptions((o) => ({ ...o, [option.id]: e.target.checked }))
                }
              />
              <span className="pr-calc__box" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="none">
                  <path
                    d="m3 8.4 3.2 3.2L13 4.8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="pr-calc__opt-text">
                <b>{option.label}</b>
                {option.help}
              </span>
            </label>
          ))}
        </fieldset>

        <fieldset className="pr-calc__options">
          <legend>Delivery speed</legend>
          <div className="pr-calc__speeds">
            {deliverySpeeds.map((s) => (
              <label className="pr-calc__speed" key={s.id}>
                <input
                  type="radio"
                  name="estimator-speed"
                  value={s.id}
                  checked={speed === s.id}
                  onChange={() => setSpeed(s.id)}
                />
                <span>{s.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <aside className="pr-calc__out" aria-live="polite">
        <p className="pr-calc__out-label">Indicative range</p>
        <p className="pr-calc__out-value">
          {formatPrice(low)}
          <span aria-hidden="true"> – </span>
          <span className="sr-only"> to </span>
          {formatPrice(high)}
        </p>
        <p className="pr-calc__out-weeks">About {weeks} weeks of delivery</p>

        <p className="pr-calc__out-note">
          A band, not a quote. It moves once we know what is genuinely unknown, and the
          real number is written down at the end of discovery.
        </p>

        <Link className="pr-calc__cta" href={primaryCta.href}>
          {primaryCta.label}
        </Link>
      </aside>
    </div>
  );
}
