import type { TileStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type TileData = {
  href: string;
  id: string;
  text: string;
};
/** A content tile. */
export default function Tile({ d, styles }: { d: TileData; styles: TileStyles }) {
  return (
    <div className="block col-start-[span_2] col-end-[span_2]">
      <a className={cn("h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden cursor-pointer w-full", styles.className)} data-component="link" href={d.href} target="_self">
        {"  "}
        <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id={d.id}>
          {d.text}
        </c-scramble-text>
        {" "}
      </a>
      {" "}
    </div>
  );
}
