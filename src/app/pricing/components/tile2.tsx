import type { Tile2Styles } from "../_styles";
import { cn } from "../../../lib/utils";
export type Tile2Data = {
  text: string;
  text2: string;
};
/** A content tile. */
export default function Tile2({ d, styles }: { d: Tile2Data; styles: Tile2Styles }) {
  return (
    <div className="flex justify-between text-sm leading-5">
      <span className={cn("block text-[0.9375rem] leading-[1.25rem] tracking-[0.15px] max-lg:leading-[1.125rem] max-lg:tracking-[0.14px] max-lg:[font-size:inherit]", styles.className)}>
        {d.text}
      </span>
      <span className={cn("block text-[0.9375rem] leading-[1.25rem] tracking-[0.15px] max-lg:leading-[1.125rem] max-lg:tracking-[0.14px] max-lg:[font-size:inherit]", styles.className2)}>
        {d.text2}
      </span>
    </div>
  );
}
