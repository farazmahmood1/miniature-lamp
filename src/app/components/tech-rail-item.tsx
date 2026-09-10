import TechLogo, { type TechName } from "./tech-logo";

/**
 * One lockup in the scrolling technology rail beneath the hero.
 *
 * The captured design ran a marquee of client logo images here. Codilated is a young
 * studio, so a wall of borrowed client marks would be a claim we cannot make — the
 * rail shows the stack we build on instead. The container keeps the captured box, so
 * the marquee geometry, spacing and duplicated second track are unchanged.
 */
export type TechRailItemData = {
  name: TechName;
};

export default function TechRailItem({
  d,
  cids,
  /** The duplicated track is decorative; the first one carries the readable list. */
  decorative = false,
}: {
  d: TechRailItemData;
  cids: string[];
  decorative?: boolean;
}) {
  return (
    <div
      data-cid={cids[0]}
      className="flex relative justify-center items-center h-[3.25rem] w-auto max-md:h-10"
      aria-hidden={decorative || undefined}
    >
      <span
        data-cid={cids[1]}
        className="flex items-center gap-2.5 text-background opacity-70 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.9375rem] font-normal leading-none tracking-[-0.32px] uppercase whitespace-nowrap max-md:gap-2 max-md:text-[0.75rem]"
      >
        <TechLogo name={d.name} />
      </span>
    </div>
  );
}
