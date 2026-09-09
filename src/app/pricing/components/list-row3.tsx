export type ListRow3Data = {
  text: string;
  text2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
      <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
        {d.text}
      </span>
      {" "}
      <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
        {d.text2}
      </span>
      {" "}
    </li>
  );
}
