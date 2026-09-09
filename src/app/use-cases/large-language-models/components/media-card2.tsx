import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../../../lib/utils";
export type MediaCard2Data = {
  style: string;
  height: string;
  imgSrc: string;
  width: string;
  title: string;
  description: string;
  id: string;
  href: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, styles }: { d: MediaCard2Data; styles: MediaCard2Styles }) {
  return (
    <div className="block">
      <div className={cn("flex relative p-4 rounded-[10px] gap-4 bg-background", styles.className)}>
        <div className="w-[139.5px] block relative shrink-0 basis-1/4 max-md:w-[78.3px] md:max-lg:w-[5.15rem] 2xl:w-[219.5px]">
          <div className="block relative">
            <div className="h-full block absolute top-0 inset-x-0 rounded-[7px] bg-primary" />
            {" "}
            <span className="flex relative p-5 justify-center items-center aspect-square w-full">
              {" "}
              <div className="w-1/2 h-[3.1125rem] block relative max-md:h-[19.1px] md:max-lg:h-[1.325rem] 2xl:h-[5.6125rem]">
                <div className="h-full block bg-foreground" style={d.style} aria-hidden="true" />
                {" "}
                <img className={cn("w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain align-middle h-full", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
                {" "}
              </div>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div className="flex flex-col justify-between grow gap-4">
          <div className="flex flex-col gap-1.5">
            <h3 className="block text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] max-md:text-lg max-md:leading-[1.5rem] max-md:tracking-[-0.45px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.625rem] md:max-lg:tracking-[-0.48px] 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]" data-component="heading">
              {d.title}
            </h3>
            {" "}
            <p className="w-full max-w-100 block text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
          <div className="flex justify-between items-center gap-0.5 max-lg:hidden">
            <span className="block text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase underline">
              {" "}
              <c-scramble-text class="inline" id={d.id}>
                {" Try now "}
              </c-scramble-text>
              {" "}
            </span>
            {" "}
            <span className="h-6 block opacity-0 [translate:4px]" aria-hidden="true">
              {" "}
              <svg className="w-6 h-6 block overflow-hidden align-middle" data-component="icon" viewBox="0 0 256 256" fill="currentColor">
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
        <a className="w-147.5 h-full block absolute top-0 left-0 z-1 min-w-0 rounded-[10px] cursor-pointer max-md:w-[21.5625rem] md:max-lg:w-[361.5px] 2xl:w-227.5" data-component="link" href={d.href} target="_blank">
          {" "}
          <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
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
