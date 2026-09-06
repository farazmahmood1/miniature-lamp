import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  href: string;
  height: string;
  imgSrc: string;
  width: string;
  kind?: string;
  kind2?: string;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <div data-cid={cids[0]} className="flex relative justify-center items-center h-[3.25rem] w-[8.5rem] max-md:h-10 max-md:w-[6.25rem]">
      <a data-cid={cids[1]} className={cn("block absolute top-0 min-w-0", styles.className)} href={d.href} target="_blank" data-component={d.kind}>
        {" "}
        <img data-cid={cids[2]} className={cn("w-full block max-w-full overflow-clip object-contain align-middle [filter:invert(1)] h-full", styles.className2)} alt="" height={d.height} src={d.imgSrc} width={d.width} data-component={d.kind2} />
        {" "}
      </a>
      {" "}
    </div>
  );
}
