import type { ReactNode } from "react";
export type MediaTileData = {
  icon: ReactNode;
  description: string;
  description2: string;
};
/** A media tile. */
export default function MediaTile({ d, cids }: { d: MediaTileData; cids: string[] }) {
  return (
    <li data-cid={cids[0]} className="w-full max-w-115 flex flex-col gap-1">
      <div data-cid={cids[1]} className="flex items-center gap-2">
        <span data-cid={cids[2]} className="block">
          <svg data-cid={cids[3]} className="w-7 h-7 block opacity-75 overflow-hidden align-middle" data-component="icon" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor">{d.icon}</svg>
        </span>
        {" "}
        <p data-cid={cids[4]} className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]">
          {d.description}
        </p>
        {" "}
      </div>
      {" "}
      <p data-cid={cids[5]} className="block opacity-75">
        {d.description2}
      </p>
      {" "}
    </li>
  );
}
