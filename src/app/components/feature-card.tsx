import type { CSSProperties } from "react";

export type FeatureCardData = {
  title: string;
  description: string;
  /** Drawn bar length as a percentage of the row width. Defaults to a full bar. */
  bar?: number;
};

/**
 * One row of the comparison chart: a label, a proportional bar and a value.
 *
 * The bar grows from its left edge on mount and the value fades in behind it, both
 * staggered by `index`. Since the animation is tied to mount, remounting the chart
 * replays it — which is how switching tabs reads as a redraw.
 */
export default function FeatureCard({
  d,
  cids,
  /** Row position, used to stagger the entrance down the list. */
  index = 0,
}: {
  d: FeatureCardData;
  cids: string[];
  index?: number;
}) {
  const delay: CSSProperties = { animationDelay: `${index * 90}ms` };

  return (
    <div data-cid={cids[0]} className="block">
      <h3
        data-cid={cids[1]}
        className="block [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase text-balance"
        data-component="heading"
      >
        {d.title}
      </h3>
      {" "}
      <div data-cid={cids[2]} className="flex items-center gap-2">
        <div
          data-cid={cids[3]}
          className="ct-bar block rounded-[10px] bg-background h-[0.3125rem] w-full"
          style={d.bar == null ? delay : { ...delay, width: `${d.bar}%` }}
        >
          {" "}
        </div>
        {" "}
        <p
          data-cid={cids[4]}
          className="ct-bar-value block basis-[56px] text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px]"
          style={delay}
        >
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
    </div>
  );
}
