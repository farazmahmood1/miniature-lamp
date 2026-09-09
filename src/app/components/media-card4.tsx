import type { CSSProperties } from "react";
import type { MediaCard4Styles } from "../node-styles";
import { cn } from "../../lib/utils";
export type MediaCard4Data = {
  text: string;
  text2: string;
  style: CSSProperties;
  kind?: string;
  height: string;
  imgSrc: string;
  width: string;
  title: string;
  kind2?: string;
  href: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard4({ d, cids, styles }: { d: MediaCard4Data; cids: string[]; styles: MediaCard4Styles }) {
  return (
    <div data-cid={cids[0]} className="w-97.5 block relative mr-[0.9375rem] shrink-0 max-md:w-[17.0625rem] md:max-lg:w-[361.5px] 2xl:w-[603.3px]">
      <div data-cid={cids[1]} className="flex relative flex-col h-full">
        <div data-cid={cids[2]} className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-surface-2" />
        {" "}
        <div data-cid={cids[3]} className="flex relative z-2 p-5 justify-center items-center overflow-hidden aspect-[464/392]">
          <ul data-cid={cids[4]} className={cn("h-3.5 flex absolute top-5 left-5 min-w-0 gap-3.5 text-muted-foreground [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside", styles.className)}>
            <li data-cid={cids[5]} className="list-item">
              {d.text}
            </li>
            <li data-cid={cids[6]} className="list-item">
              {d.text2}
            </li>
          </ul>
          {" "}
          <div data-cid={cids[7]} className={cn("h-[144.7px] block relative max-md:h-[95.3px] md:max-lg:h-[132.7px] 2xl:h-[14.675rem]", styles.className2)}>
            <div data-cid={cids[8]} className="h-full block bg-foreground" style={d.style} aria-hidden="true" />
            {" "}
            <img data-cid={cids[9]} className={cn("w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain align-middle h-full", styles.className3)} data-component={d.kind} alt="" height={d.height} src={d.imgSrc} width={d.width} />
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div data-cid={cids[10]} className="flex relative z-2 p-5 flex-col justify-between grow gap-3.5">
          <h3 data-cid={cids[11]} className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
            {d.title}
          </h3>
          {" "}
          <div data-cid={cids[12]} className="flex justify-between items-center">
            <span data-cid={cids[13]} className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
              Read Case Study
            </span>
            {" "}
            <span data-cid={cids[14]} className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
              {" "}
              <svg data-cid={cids[15]} className="w-6 h-6 block overflow-hidden align-middle" data-component={d.kind2} viewBox="0 0 256 256" fill="currentColor">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="m151 196.7 69-69-69-69" />
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="M220 127.7H99.3" />
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="M36 127.7h28.8" />
              </svg>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <a data-cid={cids[16]} className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href={d.href}>
          {" "}
          <span data-cid={cids[17]} className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
            {d.label}
          </span>
          {" "}
        </a>
        {" "}
      </div>
      {" "}
    </div>
  );
}
