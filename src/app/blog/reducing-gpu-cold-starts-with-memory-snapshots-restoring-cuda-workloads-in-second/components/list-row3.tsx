export type ListRow3Data = {
  description: string;
  description2: string;
};
/** A list row. */
export default function ListRow3({ d }: { d: ListRow3Data }) {
  return (
    <li className="list-item my-[0.5625rem] pl-[0.425rem] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[8.5px] max-lg:pl-[0.4rem]">
      <p className="block my-[22.5px] max-lg:my-[21.3px]">
        <strong className="inline font-semibold">
          {d.description}
        </strong>
        {d.description2}
      </p>
    </li>
  );
}
