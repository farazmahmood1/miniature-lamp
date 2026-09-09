export type LogoData = Record<string, never>;
/** A logo. */
export default function Logo({ d }: { d: LogoData }) {
  return (
    <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
      <span className="block">
        <svg className="w-5 h-5 block mt-1 overflow-hidden align-middle" data-component="icon" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <rect width="256" height="256" fill="none" />
          <polyline points="40 144 96 200 224 72" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
        </svg>
      </span>
      {" "}
    </div>
  );
}
