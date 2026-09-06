import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  text: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("min-h-[0.8125rem] block leading-3.5", styles.className)}>
      <span data-cid={cids[1]} className="inline text-primary">
        {d.text}
      </span>
      {" "}
    </div>
  );
}
