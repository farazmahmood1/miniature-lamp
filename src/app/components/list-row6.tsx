export type ListRow6Data = {
  href: string;
  target: string;
  label: string;
  rel?: string;
};
/** A list row. */
export default function ListRow6({ d, cids }: { d: ListRow6Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item">
      <a data-cid={cids[1]} className="inline text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] cursor-pointer max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px] hover:underline" data-component="link" href={d.href} target={d.target} rel={d.rel}>
        {d.label}
      </a>
      {" "}
    </li>
  );
}
