/** Hero section — the page's lead block.
 *
 *  The source page paints this with a Three.js sphere (SphereGeometry +
 *  ShaderMaterial) on a single fixed WebGL canvas. The capture pipeline emitted
 *  a blank PNG for it, because reading pixels back off a WebGL canvas only
 *  works when the context was created with preserveDrawingBuffer:true —
 *  otherwise the buffer is cleared the moment it is composited.
 *
 *  These stills were re-captured with that flag forced on, one per breakpoint,
 *  since the scene reframes with the viewport. Swap the <picture> for a live
 *  Three.js scene if you need the slow rotation as well as the look.
 */
export default function HeroSection() {
  return (
    <c-background-canvas
      class="w-320 h-200 block fixed -z-2 max-md:w-[23.4375rem] max-md:h-203 md:max-lg:w-192 md:max-lg:h-256 2xl:w-480 2xl:h-270"
      id="backgroundcanvas-1"
    >
      <picture>
        {/* Breakpoints mirror globals.css: md 572px, lg 1025px, 2xl 1601px. */}
        <source media="(max-width: 571px)" srcSet="/assets/ai-automation/images/globe-375.webp" />
        <source media="(max-width: 1024px)" srcSet="/assets/ai-automation/images/globe-768.webp" />
        <source media="(min-width: 1601px)" srcSet="/assets/ai-automation/images/globe-1920.webp" />
        <img
          className="w-full h-200 block overflow-clip object-cover aspect-[auto_1280/800] align-middle max-md:h-203 max-md:aspect-[auto_375/812] md:max-lg:h-256 md:max-lg:aspect-[auto_768/1024] 2xl:h-270 2xl:aspect-[auto_1920/1080]"
          height="800"
          src="/assets/ai-automation/images/globe-1280.webp"
          width="1280"
          alt=""
          fetchPriority="high"
        />
      </picture>
    </c-background-canvas>
  );
}
