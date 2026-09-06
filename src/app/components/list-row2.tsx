export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d, cids }: { d: ListRow2Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <a data-cid={cids[1]} className="inline text-accent [font-family:'ABC_Favorit_Trial',_sans-serif] text-[2.5625rem] font-light leading-[2.9375rem] tracking-[-2.05px] cursor-pointer 2xl:text-[3.3125rem] 2xl:leading-[3.75rem] 2xl:tracking-[-2.63px]" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
