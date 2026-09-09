import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type FeatureCardData = {
  text: string;
  style: string;
  height: string;
  imgSrc: string;
  width: string;
  title: string;
  href: string;
  label: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, styles }: { d: FeatureCardData; styles: FeatureCardStyles }) {
  return (
    <div className="flex relative flex-col h-full">
      <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-surface" />
      {" "}
      <div className="flex relative z-2 p-5 justify-center items-center overflow-hidden aspect-[464/392]">
        <ul className={cn("h-3.5 flex absolute top-5 left-5 min-w-0 gap-3.5 text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside", styles.className)}>
          <li className="list-item">
            {d.text}
          </li>
          <li className="list-item">
            {d.description}
          </li>
        </ul>
        {" "}
        <div className="w-1/2 h-[143.3px] block relative max-md:h-[125.7px] md:max-lg:h-[291.7px] 2xl:h-[14.5875rem]">
          <div className="h-full block bg-foreground" style={d.style} aria-hidden="true" />
          {" "}
          <img className={cn("w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain align-middle h-full", styles.className2)} data-component="image" alt="" height={d.height} src={d.imgSrc} width={d.width} />
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div className="flex relative z-2 p-5 flex-col justify-between grow gap-3.5">
        <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
          {d.title}
        </h3>
        {" "}
        <div className="flex justify-between items-center">
          <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
            Read Case Study
          </span>
          {" "}
          <span className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
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
      <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href={d.href}>
        {" "}
        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
          {d.label}
        </span>
        {" "}
      </a>
      {" "}
    </div>
  );
}
