export type ListRow4Data = {
  description: string;
};
/** A list row. */
export default function ListRow4({ d }: { d: ListRow4Data }) {
  return (
    <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
      <p className="block my-[22.5px] max-lg:my-[21.3px]">
        {d.description}
      </p>
    </li>
  );
}
