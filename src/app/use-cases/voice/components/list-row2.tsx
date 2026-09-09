export type ListRow2Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item">
      <a className="inline text-accent font-favorit text-[2.5625rem] font-light leading-[2.9375rem] tracking-[-2.05px] cursor-pointer 2xl:text-[3.3125rem] 2xl:leading-[3.75rem] 2xl:tracking-[-2.63px]" data-component="link" href={d.href}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
