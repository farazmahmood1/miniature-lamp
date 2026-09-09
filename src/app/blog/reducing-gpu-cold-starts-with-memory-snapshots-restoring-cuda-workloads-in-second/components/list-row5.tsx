export type ListRow5Data = {
  href: string;
  label: string;
};
/** A list row. */
export default function ListRow5({ d }: { d: ListRow5Data }) {
  return (
    <li className="list-item">
      <a className="inline text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] cursor-pointer max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px] hover:underline" data-component="link" href={d.href} target="_self">
        {d.label}
      </a>
      {" "}
    </li>
  );
}
