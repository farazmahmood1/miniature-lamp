export default function Icon2({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-6.5 block overflow-hidden align-middle pointer-events-none" aria-hidden="true" height="1em" viewBox="0 0 256 256" width="1em" focusable="false" data-icon="play" fill="currentColor" data-cid={cid}>
      <path fill="none" d="M0 0h256v256H0z" />
      <path fill="currentColor" d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82 16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128" />
    </svg>
  );
}
