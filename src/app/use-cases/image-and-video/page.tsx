import DittoMotion from "./ditto/DittoMotion";
import DropdownMenu from "./ditto/DropdownMenu";
import HeroSection from "./sections/hero-section";
import CerebriumUseCasesSection from "./sections/cerebrium-use-cases-section";
import Footer from "./sections/footer";

export const metadata = {
  "title": "Image & Video AI Infrastructure | Cerebrium",
  "description": "Run image and video models — Stable Diffusion, ComfyUI, AI avatars, real-time video — on Cerebrium's serverless GPU infrastructure.",
  "alternates": {
    "canonical": "/use-cases/image-and-video"
  },
  "openGraph": {
    "title": "Image & Video AI Infrastructure",
    "description": "Run image and video models — Stable Diffusion, ComfyUI, AI avatars, real-time video — on Cerebrium's serverless GPU infrastructure.",
    "type": "article",
    "siteName": "Cerebrium | Real-time serverless AI infrastructure",
    "images": [
      "https://www.datocms-assets.com/180613/1774904124-og-image.png?auto=format&fit=max&w=1200"
    ]
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Image & Video AI Infrastructure",
    "description": "Run image and video models — Stable Diffusion, ComfyUI, AI avatars, real-time video — on Cerebrium's serverless GPU infrastructure.",
    "images": [
      "https://www.datocms-assets.com/180613/1774904124-og-image.png?auto=format&fit=max&w=1200"
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
        <CerebriumUseCasesSection />
        <Footer />
        {" "}
      </div>
      {" "}
      <DittoMotion spec={{"waapi":[],"rotators":[],"reveals":[{"anchor":"motion-span","opacity":"0","transform":"matrix(1, 0, 0, 1, 10, 0)","transition":"transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s, opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s"}],"marquees":[]}} />
      <DropdownMenu menus={[{"trigger":"menu-trigger-link","hoverOpen":true,"gap":456,"align":"left","html":"<div style=\"position:absolute;margin:0;display:flex;box-sizing:border-box;width:384px;height:285.75px;min-width:0px;max-width:384px;min-height:0px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;border-top-width:0px;border-right-width:0px;border-bottom-width:0px;border-left-width:0px;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-top-color:rgb(23, 43, 118);border-right-color:rgb(23, 43, 118);border-bottom-color:rgb(23, 43, 118);border-left-color:rgb(23, 43, 118);border-top-left-radius:8px;border-top-right-radius:8px;border-bottom-right-radius:8px;border-bottom-left-radius:8px;background-color:rgb(255, 255, 255);color:rgb(23, 43, 118);box-shadow:rgba(0, 0, 2, 0.3) 0px 10px 30px 0px;opacity:0;font-family:-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Helvetica, Arial, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;;font-size:16px;font-weight:400;font-style:normal;line-height:18.4px;letter-spacing:normal;text-align:start;text-transform:none;text-decoration-line:none;white-space:normal;flex-direction:column;flex-wrap:nowrap;justify-content:normal;align-items:normal;gap:normal;row-gap:normal;column-gap:normal;grid-template-columns:none;grid-template-rows:none;list-style-type:disc;vertical-align:baseline;object-fit:fill;cursor:auto;overflow:hidden\"></div>"}]} />
    </>
  );
}
