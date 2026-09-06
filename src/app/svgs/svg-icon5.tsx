export default function Icon5({ cid }: { cid?: string }) {
  return (
    <svg className="w-full block overflow-hidden align-middle pointer-events-none h-full focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" fill="none" height="24" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-cid={cid}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
