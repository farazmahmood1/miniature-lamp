import DittoThree from "../ditto/DittoThree";

/** Hero section — the page's lead block.
 *
 *  The live site paints this with a fixed, full-viewport three.js canvas. The capture
 *  froze that canvas to a PNG but the WebGL readback came back blank, so the original
 *  clone shipped an empty white image here (`/assets/cloned/images/efb0506b4ae9.png`).
 *  `DittoThree` renders the scene live. The black backdrop stays on the host element so
 *  the block reads correctly even when WebGL is unavailable. */
export default function HeroSection() {
  return (
    <c-background-canvas class="w-320 h-200 block fixed -z-2 bg-black overflow-hidden max-md:w-[23.4375rem] max-md:h-203 md:max-lg:w-192 md:max-lg:h-256 2xl:w-480 2xl:h-270" data-cid="n1" id="backgroundcanvas-1">
      <div className="relative h-full w-full" data-cid="n2">
        <DittoThree />
      </div>
    </c-background-canvas>
  );
}
