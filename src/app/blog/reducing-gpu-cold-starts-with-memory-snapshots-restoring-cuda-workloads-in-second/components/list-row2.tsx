export type ListRow2Data = {
  href: string;
  description: string;
};
/** A list row. */
export default function ListRow2({ d }: { d: ListRow2Data }) {
  return (
    <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
      <p className="block my-[22.5px] max-lg:my-[21.3px]">
        <a className="inline text-primary font-medium underline cursor-pointer" data-component="link" href={d.href} target="_blank">
          {d.description}
        </a>
      </p>
    </li>
  );
}
