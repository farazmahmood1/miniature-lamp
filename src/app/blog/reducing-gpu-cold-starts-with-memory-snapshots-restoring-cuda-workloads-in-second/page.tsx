import DittoMotion from "./ditto/DittoMotion";
import DropdownMenu from "./ditto/DropdownMenu";
import HeroSection from "./sections/hero-section";
import Navbar from "./sections/navbar";
import ReducingGpuColdSection from "./sections/reducing-gpu-cold-section";
import WhereDoTheSection from "./sections/where-do-the-section";
import FeatureGridSection from "./sections/feature-grid-section";
import Footer from "./sections/footer";

export const metadata = {
  "title": "Reducing GPU Cold Starts with Memory Snapshots: Restoring CUDA Workloads in Seconds",
  "description": "Cerebrium is a serverless AI infrastructure platform for real-time, high-performance applications. Deploy globally, reduce latency, scale instantly, and maintain data sovereignty with region-aware infrastructure.",
  "alternates": {
    "canonical": "/blog/reducing-gpu-cold-starts-with-memory-snapshots-restoring-cuda-workloads-in-second"
  },
  "openGraph": {
    "title": "Reducing GPU Cold Starts with Memory Snapshots: Restoring CUDA Workloads in Seconds",
    "description": "Cerebrium is a serverless AI infrastructure platform for real-time, high-performance applications. Deploy globally, reduce latency, scale instantly, and maintain data sovereignty with region-aware infrastructure.",
    "type": "article",
    "siteName": "Cerebrium | Real-time serverless AI infrastructure",
    "images": [
      "https://www.datocms-assets.com/180613/1774904124-og-image.png"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Reducing GPU Cold Starts with Memory Snapshots: Restoring CUDA Workloads in Seconds",
    "description": "Cerebrium is a serverless AI infrastructure platform for real-time, high-performance applications. Deploy globally, reduce latency, scale instantly, and maintain data sovereignty with region-aware infrastructure.",
    "images": [
      "https://www.datocms-assets.com/180613/1774904124-og-image.png"
    ]
  }
};

export default function Page() {
  return (
    <>
      <HeroSection />
      {" "}
      <div className="block relative" id="swup">
        <div className="block">
          {" "}
        </div>
        {" "}
        <main className="block">
          <div className="block">
            <c-header class="inline" id="header-45">
              <Navbar />
              {" "}
            </c-header>
            {" "}
          </div>
          {" "}
          <div className="block">
            <div className="block">
              <div className="block pb-1 bg-clr-1">
                <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                  <div className="block relative pt-24.5 max-lg:pt-22">
                    <article className="block mt-[7.5625rem] mb-[10.2125rem] max-md:mt-20 max-md:mb-14 md:max-lg:mt-[6.0875rem] md:max-lg:mb-[4.0875rem] 2xl:mt-[150.3px] 2xl:mb-[11.8rem]">
                      <ReducingGpuColdSection />
                      <WhereDoTheSection />
                      {" "}
                    </article>
                    {" "}
                    <div className="w-[10.575rem] h-[684.0375rem] block absolute top-0 left-0 pointer-events-none max-md:w-[21.5625rem] max-lg:h-auto max-lg:static max-lg:top-auto max-lg:left-auto md:max-lg:w-184.5 2xl:h-[10012.7px]">
                      <div className="w-[10.575rem] h-200 flex sticky top-0 pb-5 items-end pointer-events-none max-lg:hidden 2xl:h-270">
                        <a className="h-13.5 min-h-13.5 flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-background bg-muted-foreground cursor-pointer" data-component="link" href="/blog" target="_self">
                          {" "}
                          <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-31">
                            {" See all articles "}
                          </c-scramble-text>
                          {" "}
                        </a>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <hr className="w-300 h-px border-t border-solid border-t-clr-0 block mt-[7.5625rem] overflow-hidden max-md:w-[21.5625rem] max-md:my-10 md:max-lg:w-184.5 md:max-lg:my-[46.3px] 2xl:w-460 2xl:mt-[150.3px]" />
                  {" "}
                </div>
                {" "}
              </div>
              <FeatureGridSection />
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </main>
        <Footer />
        {" "}
      </div>
      {" "}
      <DittoMotion spec={{"waapi":[],"rotators":[{"anchor":"motion-1","texts":["SignQCD","SignCWU","Sign WU","Sign HD","Sign uD","Sign uA","Sign up"],"intervalMs":33}],"reveals":[{"anchor":"motion-backgroundcanvas-46","opacity":"0","transform":"none","transition":"opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)"},{"anchor":"motion-image","opacity":"0","transform":"none","transition":"opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"},{"anchor":"motion-image-2","opacity":"0","transform":"none","transition":"opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"},{"anchor":"motion-image-3","opacity":"0","transform":"none","transition":"transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), translate 0.6s cubic-bezier(0.4, 0, 0.2, 1), scale 0.6s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.6s cubic-bezier(0.4, 0, 0.2, 1)"},{"anchor":"motion-image-4","opacity":"0","transform":"none","transition":"transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), translate 0.6s cubic-bezier(0.4, 0, 0.2, 1), scale 0.6s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.6s cubic-bezier(0.4, 0, 0.2, 1)"},{"anchor":"motion-image-5","opacity":"0","transform":"none","transition":"transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), translate 0.6s cubic-bezier(0.4, 0, 0.2, 1), scale 0.6s cubic-bezier(0.4, 0, 0.2, 1), rotate 0.6s cubic-bezier(0.4, 0, 0.2, 1)"}],"marquees":[]}} />
      <DropdownMenu menus={[{"trigger":"menu-trigger-link","hoverOpen":true,"gap":456,"align":"left","html":"<div style=\"position:absolute;margin:0;display:flex;box-sizing:border-box;width:384px;height:285.75px;min-width:0px;max-width:384px;min-height:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(23, 43, 118);border-right-color:rgb(23, 43, 118);border-bottom-color:rgb(23, 43, 118);border-left-color:rgb(23, 43, 118);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgb(255, 255, 255);color:rgb(23, 43, 118);box-shadow:rgba(0, 0, 2, 0.3) 0px 10px 30px 0px;opacity:0;font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;;font-size:16px;font-weight:400;font-style:normal;line-height:18.4px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:hidden\"></div>"}]} />
    </>
  );
}
