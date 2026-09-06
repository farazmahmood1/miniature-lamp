export type MediaCard3Data = {
  style: string;
  imgSrc: string;
  title: string;
  description: string;
  id: string;
  href: string;
  target: string;
  label: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d, cids }: { d: MediaCard3Data; cids: string[] }) {
  return (
    <div data-cid={cids[0]} className="block min-w-0">
      <div data-cid={cids[1]} className="flex relative p-4 rounded-[10px] gap-4 bg-surface">
        <div data-cid={cids[2]} className="block relative min-w-0 shrink-0 basis-1/4">
          <div data-cid={cids[3]} className="block relative">
            <div data-cid={cids[4]} className="block absolute inset-0 rounded-[7px] bg-color-002" />
            {" "}
            <span data-cid={cids[5]} className="flex relative p-5 justify-center items-center aspect-square w-full">
              {" "}
              <div data-cid={cids[6]} className="block relative min-w-0 h-1/2 w-1/2">
                <div data-cid={cids[7]} className="w-full h-full block bg-foreground" style={d.style} aria-hidden="true" />
                {" "}
                <img data-cid={cids[8]} className="block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain aspect-[auto_32/32] align-middle h-full w-full" alt="" height="32" src={d.imgSrc} width="32" />
                {" "}
              </div>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div data-cid={cids[9]} className="flex min-w-0 flex-col justify-between grow gap-4">
          <div data-cid={cids[10]} className="flex min-w-0 flex-col gap-1.5">
            <h3 data-cid={cids[11]} className="block min-w-0 text-[1.3125rem] font-normal leading-7 tracking-[-0.52px]">
              {d.title}
            </h3>
            {" "}
            <p data-cid={cids[12]} className="block min-w-0 max-w-100 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]">
              {d.description}
            </p>
            {" "}
          </div>
          {" "}
          <div data-cid={cids[13]} className="flex min-w-0 justify-between items-center gap-0.5 max-lg:hidden">
            <span data-cid={cids[14]} className="block min-w-0 text-muted-foreground [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase underline">
              {" "}
              <c-scramble-text data-cid={cids[15]} class="inline" id={d.id}>
                {" Try now "}
              </c-scramble-text>
              {" "}
            </span>
            {" "}
            <span data-cid={cids[16]} className="block opacity-0 min-w-0 [translate:4px]" aria-hidden="true">
              {" "}
              <svg data-cid={cids[17]} className="w-6 h-6 block overflow-hidden align-middle" viewBox="0 0 256 256" fill="currentColor">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="m151 196.7 69-69-69-69" />
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="M220 127.7H99.3" />
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="M36 127.7h28.8" />
              </svg>
              {" "}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <a data-cid={cids[18]} className="block absolute inset-0 z-1 min-w-0 rounded-[10px] cursor-pointer" href={d.href} target={d.target}>
          {" "}
          <span data-cid={cids[19]} className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
            {d.label}
          </span>
          {" "}
        </a>
        {" "}
      </div>
      {" "}
    </div>
  );
}
