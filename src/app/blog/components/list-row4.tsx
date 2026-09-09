export type ListRow4Data = {
  href: string;
  target: string;
  label: string;
  rel?: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item">
      <a className="inline text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] cursor-pointer max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px] hover:underline" data-component="link" href={d.href} target={d.target} rel={d.rel}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
