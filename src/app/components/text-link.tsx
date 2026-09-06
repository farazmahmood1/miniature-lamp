import type { TextLinkStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TextLinkData = {
  kind?: string;
  href: string;
  id: string;
  text: string;
};
/** A text link. */
export default function TextLink({ d, cids, styles }: { d: TextLinkData; cids: string[]; styles: TextLinkStyles }) {
  return (
    <a data-cid={cids[0]} className={cn("min-h-13.5 relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden cursor-pointer", styles.className)} data-component={d.kind} href={d.href} rel="noopener noreferrer" target="_blank">
      {"  "}
      <c-scramble-text data-cid={cids[1]} class={cn("z-2 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase", styles.className2)} id={d.id}>
        {d.text}
      </c-scramble-text>
      {" "}
    </a>
  );
}
