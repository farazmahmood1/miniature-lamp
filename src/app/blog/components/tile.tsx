import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  ariaselected: string;
  id: string;
  href: string;
  label: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <c-segmented-tab class={cn("min-h-11 flex relative z-1 py-2 px-5 rounded-[7px] justify-center items-center shrink-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:h-11 before:opacity-0 before:rounded-tl-[7px]", styles.className)} aria-selected={d.ariaselected} id={d.id} role="tab">
      <a className={cn("h-11 block absolute top-0 left-0 z-1 min-w-0", styles.className2)} data-component="link" href={d.href}>
        {" "}
        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
          {d.label}
        </span>
        {" "}
      </a>
      {" "}
      <span className={cn("block", styles.className3)} aria-hidden="true">
        {d.text}
      </span>
      {" "}
    </c-segmented-tab>
  );
}
