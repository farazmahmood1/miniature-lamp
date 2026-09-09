import type { ListRowStyles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRowData = {
  ariacurrent?: string;
  href: string;
  target: string;
  id: string;
  text: string;
};
/** A list row. */
export default function ListRow({ d, styles }: { d: ListRowData; styles: ListRowStyles }) {
  return (
    <li className="block">
      <a className={cn("h-13.5 inline-flex py-2.5 items-center cursor-pointer", styles.className)} data-component="link" aria-current={d.ariacurrent} href={d.href} target={d.target}>
        {" "}
        <span className={cn("h-full flex relative z-2 isolate px-3.5 justify-center items-center gap-1.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:h-8.5 before:bg-clr-0 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:rounded-tl-sm max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]", styles.className2)}>
          {" "}
          <c-scramble-text class="block" id={d.id}>
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
