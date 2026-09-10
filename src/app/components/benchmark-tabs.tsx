"use client";

/**
 * The segmented control on the delivery-speed card.
 *
 * The capture emitted two tabs, one panel and no handler, so the second tab was
 * dead: clicking it changed nothing. This restores the markup exactly — the sliding
 * pill, the tab classes, the panel box — and gives it real state and a second
 * dataset.
 *
 * Kept as a React component rather than a captured interaction spec because there
 * was no spec for this control to replay.
 */

import { useId, useRef, useState } from "react";
import FeatureCard from "./feature-card";
import { benchmarkSeries } from "../content";

const TAB_BASE =
  "min-h-11 flex relative z-1 py-2 px-5 rounded-[7px] justify-center items-center shrink-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]";

export default function BenchmarkTabs({ cids }: { cids: string[][] }) {
  const [active, setActive] = useState(0);
  const baseId = useId().replace(/:/g, "");
  const tabRefs = useRef<Array<HTMLElement | null>>([]);

  // Roving focus: arrow keys move between tabs, as the tablist role implies.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      (active + (e.key === "ArrowRight" ? 1 : benchmarkSeries.length - 1)) %
      benchmarkSeries.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <c-segmented-controls
      class="inline-flex flex-col gap-y-6 w-full max-w-full"
      data-cid="n344"
      id="segmentedcontrols-76"
    >
      <div
        className="flex relative p-1 rounded-[7px] self-center shrink-0 overflow-x-auto overflow-y-hidden bg-surface"
        data-cid="n345"
        role="tablist"
        aria-label="Delivery speed by project type"
        onKeyDown={onKeyDown}
      >
        {/* The pill that slides behind the active tab. */}
        <div
          className="block absolute inset-y-1 min-w-0 rounded-[7px] bg-muted-foreground pointer-events-none transition-transform duration-300 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
          data-cid="n346"
          aria-hidden="true"
          style={{
            width: `calc((100% - 0.5rem) / ${benchmarkSeries.length})`,
            transform: `translateX(${active * 100}%)`,
          }}
        />

        {benchmarkSeries.map((s, i) => (
          <c-segmented-tab
            key={s.label}
            ref={(el: HTMLElement | null) => {
              tabRefs.current[i] = el;
            }}
            class={`${TAB_BASE} whitespace-nowrap ${i === active ? "text-background" : ""}`}
            role="tab"
            id={`${baseId}-tab-${i}`}
            aria-controls={`${baseId}-panel`}
            aria-selected={i === active ? "true" : "false"}
            tabIndex={i === active ? 0 : -1}
            style={{ flex: `1 1 ${100 / benchmarkSeries.length}%` }}
            onClick={() => setActive(i)}
          >
            {` ${s.label} `}
          </c-segmented-tab>
        ))}
      </div>

      <div
        className="w-[460.7px] block my-[78.1px] mx-auto rounded-[10px] overflow-hidden bg-clr-5 [backdrop-filter:blur(50px)] max-md:w-[18.5625rem] max-md:my-14 md:max-lg:w-[586.5px] md:max-lg:my-[4.0875rem] 2xl:w-153 2xl:my-[5.875rem]"
        data-cid="n349"
      >
        {/* Only the active panel is rendered, keyed by index. Switching tabs therefore
            remounts the rows, which replays their entrance and makes the chart read
            as redrawing rather than swapping. */}
        <c-segmented-panel
          key={active}
          class="flex flex-col h-full"
          role="tabpanel"
          id={`${baseId}-panel`}
          aria-labelledby={`${baseId}-tab-${active}`}
        >
          <div className="flex p-6 flex-col gap-4">
            {benchmarkSeries[active].rows.map((row, j) => (
              <FeatureCard key={row.title} d={row} cids={cids[j] ?? cids[0]} index={j} />
            ))}
            <p
              className="ct-bar-caption mt-2 block [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase"
              style={{ animationDelay: `${benchmarkSeries[active].rows.length * 90}ms` }}
            >
              {benchmarkSeries[active].caption}
            </p>
          </div>
        </c-segmented-panel>
      </div>
    </c-segmented-controls>
  );
}
