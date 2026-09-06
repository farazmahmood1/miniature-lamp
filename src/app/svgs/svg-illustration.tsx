export default function Illustration({ cid }: { cid?: string }) {
  return (
    <svg className="w-auto h-37.5 block overflow-hidden align-middle transform-[matrix(0,-0.72,0.72,0,0,0)] origin-[75px_75px] pointer-events-none mx-auto focus:outline-clr-9 focus:[outline-style:auto] focus:outline-[5px]" data-component="image" viewBox="0 0 150 150" data-hero-cursor-svg="" fill="currentColor" data-cid={cid}>
      <circle className="c-cursor_ring" cx="75" cy="75" r="71" />
      <circle className="c-cursor_progress" cx="75" cy="75" r="71" data-hero-cursor-progress="" style={{ strokeDasharray: "446.106", strokeDashoffset: "446.106" }} />
    </svg>
  );
}
