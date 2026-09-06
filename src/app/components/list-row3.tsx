import type { ListRow3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type ListRow3Data = {
  text: string;
};
/** A list row. */
export default function ListRow3({ d, cids, styles }: { d: ListRow3Data; cids: string[]; styles: ListRow3Styles }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <span data-cid={cids[1]} className={cn("inline-flex p-2 rounded-[7px] text-background [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase", styles.className)} data-component="badge">
        {d.text}
      </span>
      {" "}
    </li>
  );
}
