export type Tile3Data = {
  value: string;
  text: string;
  selected?: boolean;
};
/** A content tile. */
export default function Tile3({ d }: { d: Tile3Data }) {
  return (
    <option className="min-h-6 block min-w-6 items-center gap-[8.5px] whitespace-nowrap" value={d.value} selected={d.selected}>
      {d.text}
    </option>
  );
}
