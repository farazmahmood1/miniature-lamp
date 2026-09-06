export type MediaTile2Data = {
  href: string;
  label: string;
};
/** A media tile. */
export default function MediaTile2({ d, cids }: { d: MediaTile2Data; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="list-item relative before:content-[''] before:block before:absolute before:top-[73.5px] before:bottom-0 before:inset-x-0 before:h-px before:bg-color-002 before: before:origin-[194.336px_0.5px] max-md:before:top-13.5 max-md:before:origin-[172.5px_0.5px] md:max-lg:before:top-[4.325rem] md:max-lg:before:origin-[180.5px_0.5px] 2xl:before:top-[4.925rem] 2xl:before:origin-[301px_0.5px]">
      <a data-cid={cids[1]} className="h-full flex relative py-5 justify-between items-center cursor-pointer max-md:py-3.5 before:content-[''] before:block before:absolute before:-top-px before:bottom-0 before:inset-x-0 before:bg-background before:opacity-0 before:transform-[matrix(0.95,0,0,0.7,0,0)] before:origin-[194.336px_37.7266px] before:rounded-tl-[10px] max-md:before:origin-[172.5px_28px] md:max-lg:before:origin-[180.5px_35.5781px] 2xl:before:origin-[301px_40.4062px]" data-component="link" href={d.href} target="_blank">
        {" "}
        <span data-cid={cids[2]} className="h-full block relative z-1 text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]">
          {d.label}
        </span>
        {" "}
        <span data-cid={cids[3]} className="block relative z-1 shrink-0">
          {" "}
          <svg data-cid={cids[4]} className="w-6 h-6 block overflow-hidden align-middle focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" viewBox="0 0 256 256" fill="currentColor">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="m151 196.7 69-69-69-69" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="M220 127.7H99.3" />
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="M36 127.7h28.8" />
          </svg>
          {" "}
        </span>
        {" "}
      </a>
      {" "}
    </li>
  );
}
