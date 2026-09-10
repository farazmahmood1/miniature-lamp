import HeroCanvas from "../../components/motion/HeroCanvas";

/**
 * The fixed, full-viewport backdrop behind the hero.
 *
 * HeroCanvas paints it live with WebGL. The black ground stays on the host element
 * so the block still reads correctly where WebGL is unavailable.
 */
export default function HeroBackdrop() {
  return (
    <c-background-canvas class="w-320 h-200 block fixed -z-2 bg-black overflow-hidden max-md:w-[23.4375rem] max-md:h-203 md:max-lg:w-192 md:max-lg:h-256 2xl:w-480 2xl:h-270" data-cid="n1" id="backgroundcanvas-1">
      <div className="relative h-full w-full" data-cid="n2">
        <HeroCanvas />
      </div>
    </c-background-canvas>
  );
}
