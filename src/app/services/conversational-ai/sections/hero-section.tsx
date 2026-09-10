/** Hero section — the page's lead block. */
export default function HeroSection() {
  return (
    <c-background-canvas class="w-320 h-200 block fixed -z-2 max-md:w-[23.4375rem] max-md:h-203 md:max-lg:w-192 md:max-lg:h-256 2xl:w-480 2xl:h-270" id="backgroundcanvas-1">
      <picture>
        <source media="(max-width: 571px)" srcSet="/assets/conversational-ai/images/globe-375.webp" />
        <source media="(max-width: 1024px)" srcSet="/assets/conversational-ai/images/globe-768.webp" />
        <source media="(min-width: 1601px)" srcSet="/assets/conversational-ai/images/globe-1920.webp" />
        <img className="w-full h-200 block overflow-clip aspect-[auto_1280/800] align-middle max-md:h-203 max-md:aspect-[auto_375/812] md:max-lg:h-256 md:max-lg:aspect-[auto_768/1024] 2xl:h-270 2xl:aspect-[auto_1920/1080]" height="800" src="/assets/conversational-ai/images/globe-1280.webp" width="1280" alt="" />
      </picture>
    </c-background-canvas>
  );
}
