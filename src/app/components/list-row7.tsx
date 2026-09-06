export type ListRow7Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow7({ d, cids }: { d: ListRow7Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <a data-cid={cids[1]} className="inline [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase cursor-pointer hover:underline" data-component="link" href={d.href} target="_self">
        {d.label}
      </a>
      {" "}
    </li>
  );
}
