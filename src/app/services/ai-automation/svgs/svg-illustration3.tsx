/**
 * Static illustration.
 *
 * This was a 3,459-line inline SVG (647 paths). Compiling three of these as JSX
 * exhausted the dev server's heap, so the artwork now lives at
 * /assets/ai-automation/svg/illustration3.svg and is served as an image.
 * The class list is unchanged, so sizing behaves exactly as before.
 */
export default function Illustration3({ nodeId }: { nodeId?: string }) {
  return (
    <img
      id={nodeId}
      className="w-147.5 h-[31.3125rem] block overflow-hidden align-middle max-md:w-103.5 max-md:h-103.5 md:max-lg:w-184.5 md:max-lg:h-156.5 2xl:w-192 2xl:h-163"
      src="/assets/ai-automation/svg/illustration3.svg"
      alt=""
      width="707"
      height="600"
      data-component="image"
    />
  );
}
