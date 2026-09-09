export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <a className="inline font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase cursor-pointer hover:underline" data-component="link" href={d.href} target="_self">
        {d.label}
      </a>
      {" "}
    </li>
  );
}
