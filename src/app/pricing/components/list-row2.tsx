import type { ListRow2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type ListRow2Data = {
  text: string;
  text2: string;
  text3: string;
};
/** A list row. */
export default function ListRow2({ d, styles }: { d: ListRow2Data; styles: ListRow2Styles }) {
  return (
    <li className={cn("flex justify-between", styles.className)}>
      <span className="block text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
        {d.text}
      </span>
      {" "}
      <span className="block text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
        {" "}
        <span className="inline">
          {d.text2}
        </span>
        {" "}
        <span className="inline opacity-60">
          {d.text3}
        </span>
        {" "}
      </span>
      {" "}
    </li>
  );
}
