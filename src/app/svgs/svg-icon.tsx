export default function Icon({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-[0.6875rem] block overflow-hidden align-middle pointer-events-none" aria-hidden="true" height="1em" viewBox="0 0 11 11" width="1em" focusable="false" data-icon="menu" fill="currentColor" data-cid={cid}>
      <rect width="4" height="4" x=".001" fill="currentColor" rx="2" />
      <rect width="4" height="4" x="7" fill="currentColor" rx="2" />
      <rect width="4.001" height="4.001" x=".001" y="7" fill="currentColor" rx="2" />
      <rect width="4.001" height="4.001" x="6.999" y="7" fill="currentColor" rx="2" />
    </svg>
  );
}
