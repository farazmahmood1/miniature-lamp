import type { CSSProperties } from "react";
import type { NodeMetaMap } from "../node-meta";
import type { LogoStyles } from "../node-styles";
import { cn } from "../../../../lib/utils";
export type LogoData = {
  /** "true" hides the tile from assistive technology; the duplicated track uses it. */
  ariahidden?: "true" | "false";
  style: CSSProperties;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, meta, styles }: { d: LogoData; meta: NodeMetaMap; styles: LogoStyles }) {
  return (
    <div data-node-id={meta[0]?.anchor} className={cn("w-[196.7px] h-[196.7px] flex absolute rounded-[10px] justify-center items-center overflow-hidden aspect-square origin-[98.3281px_98.3281px] max-md:w-[7.1875rem] max-md:h-[7.1875rem] md:max-lg:w-[15.375rem] md:max-lg:h-[15.375rem] 2xl:w-64 2xl:h-64 2xl:origin-[127.992px_127.992px]", styles.className)} aria-hidden={d.ariahidden}>
      <div data-node-id={meta[1]?.anchor} className="h-full flex p-[19.7px] justify-center items-center aspect-square max-md:p-[11.5px] md:max-lg:p-[1.5375rem] 2xl:p-[1.6rem]">
        <div className="w-full h-full block relative">
          <div className="h-full block bg-foreground" style={d.style} aria-hidden="true" />
          {" "}
          <img className={cn("w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain align-middle h-full", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
