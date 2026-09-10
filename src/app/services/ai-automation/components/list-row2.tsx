import type { ListRow2Styles } from "../node-styles";
import { cn } from "../../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline text-color-002 font-favorit text-[2.5625rem] font-light leading-[2.9375rem] tracking-[-2.05px] cursor-pointer 2xl:text-[3.3125rem] 2xl:leading-[3.75rem] 2xl:tracking-[-2.63px]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
