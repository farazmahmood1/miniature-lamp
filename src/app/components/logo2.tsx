import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  kind?: string;
  href: string;
  kind2?: string;
  height: string;
  imgSrc: string;
  width: string;
};
/** A logo. */
export default function Logo2({ d, cids, styles }: { d: Logo2Data; cids: string[]; styles: Logo2Styles }) {
  return (
    <div data-cid={cids[0]} className="flex relative justify-center items-center h-[3.25rem] w-[8.5rem] max-md:h-10 max-md:w-[6.25rem]">
      <a data-cid={cids[1]} className={cn("w-34 block absolute top-0 min-w-0", styles.className)} data-component={d.kind} href={d.href} target="_blank">
        {" "}
        <img data-cid={cids[2]} className={cn("w-full block max-w-full overflow-clip object-contain align-middle [filter:invert(1)] h-full", styles.className2)} data-component={d.kind2} alt="" height={d.height} src={d.imgSrc} width={d.width} />
        {" "}
      </a>
      {" "}
    </div>
  );
}
