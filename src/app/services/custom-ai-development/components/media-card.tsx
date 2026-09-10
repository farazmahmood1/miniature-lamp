import type { CSSProperties } from "react";
import type { MediaCardStyles } from "../node-styles";
import { cn } from "../../../../lib/utils";
export type MediaCardData = {
  /** "true" hides the tile from assistive technology; the duplicated track uses it. */
  ariahidden?: "true" | "false";
  style: CSSProperties;
  height: string;
  imgSrc: string;
  width: string;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, styles }: { d: MediaCardData; styles: MediaCardStyles }) {
  return (
    <div className={cn("w-[25.8125rem] h-[137.9px] block absolute origin-[206.5px_68.9453px] max-md:w-69 md:max-lg:w-[32.2875rem] md:max-lg:h-[10.5625rem] md:max-lg:origin-[258.297px_84.4844px] 2xl:w-[33.6rem] 2xl:h-[175.3px]", styles.className)} aria-hidden={d.ariahidden}>
      <div className="h-full flex relative p-2.5 rounded-[10px] items-center gap-5 overflow-hidden bg-background">
        <div className="flex rounded-[10px] justify-center items-center shrink-0 basis-[30%] overflow-hidden aspect-square bg-accent">
          <div className="w-[70%] h-[82.5px] block relative max-md:h-[3.3625rem] md:max-lg:h-[104.3px] 2xl:h-[108.7px]">
            <div className="h-full block bg-foreground" style={d.style} aria-hidden="true" />
            {" "}
            <img className={cn("w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain align-middle h-full", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="flex flex-col gap-2">
          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-lg max-md:leading-[1.5rem] max-md:tracking-[-0.45px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
            {d.title}
          </h3>
          {" "}
          <p className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] text-balance max-md:text-xs max-md:leading-[1rem] max-md:tracking-[0.12px] md:max-lg:text-sm md:max-lg:leading-[1.125rem] md:max-lg:tracking-[0.14px]">
            {d.description}
          </p>
          {" "}
        </div>
        {" "}
        <div className={cn("w-[25.8125rem] h-full block absolute top-0 left-0 min-w-0 bg-surface pointer-events-none max-md:w-69 md:max-lg:w-[32.2875rem]", styles.className3)} />
        {" "}
      </div>
      {" "}
    </div>
  );
}
