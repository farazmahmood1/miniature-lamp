/**
 * One item in the scrolling technology rail beneath the hero.
 *
 * The captured design ran a marquee of client logo images here. Codilated is a young
 * studio, so a wall of borrowed client marks would be dishonest — the rail shows the
 * stack we build on instead. The container keeps the captured box so the marquee
 * geometry, spacing and duplicated second track are unchanged.
 */
export type TechRailItemData = {
  label: string;
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
      className="flex relative justify-center items-center h-[3.25rem] w-[8.5rem] max-md:h-10 max-md:w-[6.25rem]"
    >
      <span
        data-cid={cids[1]}
        className="block text-background opacity-55 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] text-center uppercase whitespace-nowrap max-md:text-[0.6875rem]"
        aria-hidden={decorative || undefined}
      >
        {d.label}
      </span>
    </div>
  );
}
