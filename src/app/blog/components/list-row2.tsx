import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className="list-item">
      <a className={cn("inline-block min-w-5 p-1 text-[1.0625rem] font-normal leading-[1.0625rem] tracking-[0.17px] cursor-pointer max-lg:leading-4 max-lg:tracking-[0.16px] max-lg:[font-size:inherit]", styles.className)} data-component="link" href={d.href}>
        {d.label}
      </a>
    </li>
  );
}
