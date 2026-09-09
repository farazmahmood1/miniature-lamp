export default function Icon4({ nodeId }: { nodeId?: string }) {
  return (
    <svg className="w-5 h-5 block overflow-hidden align-middle pointer-events-none focus:outline-clr-5 focus:[outline-style:auto] focus:outline-[5px]" data-component="icon" viewBox="0 0 256 256" fill="currentColor" data-node-id={nodeId}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="m105 58.7-69 69 69 69" />
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="M36 127.7h120.8" />
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="16" d="M220 127.7h-28.8" />
    </svg>
  );
}
