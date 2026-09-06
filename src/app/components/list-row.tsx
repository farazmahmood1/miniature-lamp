import type { ListRowStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRowData = {
  href: string;
  target: string;
  id: string;
  text: string;
};
/** A list row. */
export default function ListRow({ d, cids, styles }: { d: ListRowData; cids: string[]; styles: ListRowStyles }) {
  return (
    <li data-cid={cids[0]} className="block">
      <a data-cid={cids[1]} className="h-13.5 inline-flex py-2.5 items-center cursor-pointer" data-component="link" href={d.href} target={d.target}>
        {" "}
        <span data-cid={cids[2]} className={cn("h-full flex relative z-2 isolate px-3.5 justify-center items-center gap-1.5 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:h-8.5 before:bg-surface-2 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:rounded-tl-sm max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]", styles.className)}>
          {" "}
          <c-scramble-text data-cid={cids[3]} class="block" id={d.id}>
            {d.text}
          </c-scramble-text>
          {" "}
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}
