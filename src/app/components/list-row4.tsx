import type { ListRow4Styles } from "../node-styles";
import { cn } from "../../lib/utils";
export type ListRow4Data = {
  text: string;
};
/** A list row. */
export default function ListRow4({ d, cids, styles }: { d: ListRow4Data; cids: string[]; styles: ListRow4Styles }) {
  return (
    <li data-cid={cids[0]} className="list-item min-w-0">
      <span data-cid={cids[1]} className={cn("inline-flex p-2 rounded-[7px] text-background [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase", styles.className)}>
        {d.text}
      </span>
      {" "}
    </li>
  );
}
