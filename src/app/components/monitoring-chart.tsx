"use client";

/**
 * The visual on the "Launch is where the work starts" block.
 *
 * Replaces the captured chart, whose tab control was driven by a recorded interaction
 * spec. That spec pinned every tab to the pixel width it had at capture time, so the
 * moment the labels changed, clicking one clamped it and broke the row. State lives
 * here instead, and nothing is measured in advance.
 *
 * It shows what the copy claims: the monitoring wired in before release, reporting a
 * median, a 90th percentile and a worst case over the first weeks in production.
 *
 * Lines draw themselves in on mount and on every tab change, so switching metrics
 * reads as the chart redrawing.
 */

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";

type Series = { p50: number[]; p90: number[]; max: number[] };

type Metric = {
  id: string;
  label: string;
  /** Axis caption. */
  unit: string;
  /** Upper bound of the y axis, and the tick step. */
  ceiling: number;
  step: number;
  series: Series;
};

/** Eight weekly readings, the first two months after a release. */
const METRICS: Metric[] = [
  {
    id: "latency",
    label: "Response time",
    unit: "ms",
    ceiling: 800,
    step: 200,
    series: {
      p50: [214, 198, 186, 174, 171, 165, 162, 158],
      p90: [430, 402, 371, 344, 330, 318, 306, 298],
      max: [742, 690, 638, 574, 540, 512, 486, 470],
    },
  },
  {
    id: "errors",
    label: "Error rate",
    unit: "per 1k requests",
    ceiling: 4,
    step: 1,
    series: {
      p50: [0.9, 0.7, 0.55, 0.42, 0.36, 0.3, 0.26, 0.22],
      p90: [2.1, 1.7, 1.4, 1.15, 0.98, 0.84, 0.72, 0.63],
      max: [3.6, 3.1, 2.6, 2.1, 1.8, 1.5, 1.3, 1.1],
    },
  },
  {
    id: "conversion",
    label: "Conversion",
    unit: "%",
    ceiling: 6,
    step: 1.5,
    series: {
      p50: [1.8, 2.0, 2.2, 2.5, 2.7, 2.9, 3.1, 3.3],
      p90: [2.9, 3.2, 3.5, 3.9, 4.2, 4.4, 4.6, 4.8],
      max: [3.9, 4.3, 4.6, 5.0, 5.3, 5.5, 5.7, 5.9],
    },
  },
];

const LINES = [
  { key: "p50" as const, label: "P50", className: "ct-chart__line--p50" },
  { key: "p90" as const, label: "P90", className: "ct-chart__line--p90" },
  { key: "max" as const, label: "Max", className: "ct-chart__line--max" },
];

/* Chart geometry, in viewBox units. */
const W = 480;
const H = 232;
const PAD = { top: 14, right: 16, bottom: 26, left: 44 };

/**
 * A cardinal spline through the points, emitted as cubic beziers.
 * A polyline reads as a sawtooth at this size; the curve is what makes it look like
 * a real monitoring chart rather than a sketch.
 */
function smoothPath(values: number[], ceiling: number) {
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const pts = values.map((v, i) => ({
    x: PAD.left + (i / (values.length - 1)) * innerW,
    y: PAD.top + innerH - (Math.min(v, ceiling) / ceiling) * innerH,
  }));

  if (pts.length < 2) return "";

  const t = 0.22; // tension: higher bows the curve more
  let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) * t;
    const c1y = p1.y + (p2.y - p0.y) * t;
    const c2x = p2.x - (p3.x - p1.x) * t;
    const c2y = p2.y - (p3.y - p1.y) * t;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }
  return d;
}

export default function MonitoringChart() {
  const [active, setActive] = useState(0);
  const baseId = useId().replace(/:/g, "");
  const tabRefs = useRef<Array<HTMLElement | null>>([]);

  // Re-keys the drawing so the lines redraw on every tab change.
  const [drawKey, setDrawKey] = useState(0);
  useEffect(() => setDrawKey((k) => k + 1), [active]);

  /**
   * The pill is measured from the active tab rather than assuming equal widths.
   * The labels differ in length, and a computed fraction clipped the longest one —
   * the same mistake the captured control made with recorded pixel widths.
   */
  const listRef = useRef<HTMLDivElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  const measure = useCallback(() => {
    const list = listRef.current;
    const tab = tabRefs.current[active];
    if (!list || !tab) return;
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

  const metric = METRICS[active];
  const innerH = H - PAD.top - PAD.bottom;

  const ticks: number[] = [];
  for (let v = 0; v <= metric.ceiling + 1e-9; v += metric.step) ticks.push(v);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : METRICS.length - 1)) % METRICS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="ct-chart">
      <div
        className="ct-chart__tabs"
        role="tablist"
        aria-label="Post-launch metrics"
        onKeyDown={onKeyDown}
        ref={listRef}
      >
        <span
          className="ct-chart__pill"
          aria-hidden="true"
          style={
            pill
              ? { width: pill.width, transform: `translateX(${pill.left}px)` }
              : { opacity: 0 }
          }
        />
        {METRICS.map((m, i) => (
          <button
            key={m.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-controls={`${baseId}-panel`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className="ct-chart__tab"
            onClick={() => setActive(i)}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div
        className="ct-chart__panel"
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
      >
        <p className="ct-chart__caption">
          {metric.label} <span>{metric.unit}</span>
        </p>

        <svg
          className="ct-chart__svg"
          viewBox={`0 0 ${W} ${H}`}
          role="img"
          aria-label={`${metric.label} over the first eight weeks after release`}
          key={drawKey}
        >
          <defs>
            <linearGradient id={`${baseId}-fill`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary, rgb(255,72,139))" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--primary, rgb(255,72,139))" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Gridlines and the value axis. */}
          {ticks.map((v, i) => {
            const y = PAD.top + innerH - (v / metric.ceiling) * innerH;
            return (
              <g className="ct-chart__grid" key={v} style={{ animationDelay: `${i * 45}ms` }}>
                <line x1={PAD.left} y1={y} x2={W - PAD.right} y2={y} />
                <text x={PAD.left - 10} y={y + 3.5} textAnchor="end">
                  {Number.isInteger(v) ? v : v.toFixed(1)}
                </text>
              </g>
            );
          })}

          {/* Week axis. */}
          {[0, 2, 4, 6].map((wk, i) => {
            const x = PAD.left + (wk / 7) * (W - PAD.left - PAD.right);
            return (
              <text
                className="ct-chart__xtick"
                key={wk}
                x={x}
                y={H - 8}
                textAnchor="middle"
                style={{ animationDelay: `${260 + i * 50}ms` }}
              >
                {`wk ${wk + 1}`}
              </text>
            );
          })}

          {/* Area under the median, then the three lines. */}
          <path
            className="ct-chart__area"
            fill={`url(#${baseId}-fill)`}
            d={`${smoothPath(metric.series.p50, metric.ceiling)} L ${W - PAD.right} ${H - PAD.bottom} L ${PAD.left} ${H - PAD.bottom} Z`}
          />

          {LINES.map((line, i) => (
            <path
              key={line.key}
              className={`ct-chart__line ${line.className}`}
              d={smoothPath(metric.series[line.key], metric.ceiling)}
              style={{ animationDelay: `${i * 140}ms` }}
            />
          ))}
        </svg>

        <ul className="ct-chart__legend">
          {LINES.map((line, i) => (
            <li key={line.key} style={{ animationDelay: `${700 + i * 80}ms` }}>
              <span className={`ct-chart__swatch ${line.className}`} aria-hidden="true" />
              {line.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
