import Icon2 from "../svgs/svg-icon2";
export type FeatureGridItemData = {
  variant: string;
  eyebrow?: string;
  title: string;
  date: string;
  category: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "cerebrium-achieves-soc-2-type-ii-complianc":
      return (
        <div className="w-[386.7px] block max-md:w-[17.8125rem] max-lg:shrink-0 md:max-lg:w-[307.7px] 2xl:w-150">
          <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
            <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
              <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[17.8125rem] max-md:h-[15.05rem] md:max-lg:w-[307.7px] md:max-lg:h-[16.25rem] 2xl:w-150 2xl:h-[506.9px]">
                <c-dato-image class="inline" id="datoimage-39">
                  {" "}
                  <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[15.0625rem] max-lg:transform-[none] md:max-lg:h-65 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                    <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog-detail/images/c8ca1ff82047.jpg 480w, /assets/blog-detail/images/0dba53209d00.jpg 960w, /assets/blog-detail/images/dd1de99a11c5.jpg 1440w, /assets/blog-detail/images/3d6712a3b54a.jpg 1920w" />
                    {" "}
                    <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[15.0625rem] max-lg:top-0 md:max-lg:h-65 2xl:h-[43.6875rem]" data-ditto-id="motion-image-3" data-component="image" alt="" src="/assets/blog-detail/images/3d6712a3b54a.jpg" />
                    {" "}
                  </picture>
                  {" "}
                </c-dato-image>
                {" "}
              </c-inner-parallax>
              {" "}
              <c-dato-image class="h-[124.1px] flex justify-center items-center object-contain [filter:invert(1)] w-1/4 max-md:h-[91.5px] md:max-lg:h-[6.175rem] 2xl:h-[12.0375rem]" id="datoimage-40">
                <picture className="w-auto h-[6.0625rem] block max-md:h-[4.4375rem] md:max-lg:h-[4.8125rem] 2xl:h-37.5">
                  <source className="inline" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/blog-detail/images/52629b52ea82.png 200w, /assets/blog-detail/images/d46eeab178b9.png 400w, /assets/blog-detail/images/7c3d7da345fa.png 600w, /assets/blog-detail/images/364b5f0ffd53.png 800w" />
                  {" "}
                  <img className="w-full h-[6.0625rem] block max-w-full overflow-clip aspect-square align-middle max-md:h-[4.4375rem] md:max-lg:h-[4.8125rem] 2xl:h-37.5" data-component="image" alt="" src="/assets/blog-detail/images/364b5f0ffd53.png" />
                  {" "}
                </picture>
                {" "}
              </c-dato-image>
              {" "}
            </div>
            {" "}
            <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background">
              <div className="flex justify-between items-center">
                <ul className="flex gap-3.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                  <li className="list-item">
                    <time className="inline" dateTime="2026-07-07T22:28:30-04:00">
                      {" July 8, 2026 "}
                    </time>
                    {" "}
                  </li>
                  <li className="list-item text-muted-foreground">
                    {" Product Update "}
                  </li>
                  <li className="list-item text-muted-foreground">
                    {" Annoucement "}
                  </li>
                </ul>
                {" "}
                <span className="h-6 block opacity-0 shrink-0 [translate:4px]" aria-hidden="true">
                  {" "}
                  <Icon2 />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                {" Cerebrium Achieves SOC 2 Type II Compliance for Secure Production AI Infrastructure "}
              </h3>
              {" "}
            </div>
            {" "}
            <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/cerebrium-achieves-soc-2-type-ii-compliance-for-secure-production-ai-infrastructure">
              {" "}
              <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                {d.title}
              </span>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
      );
    case "a-low-latency-architecture-for-voice-agent":
      return (
        <div className="w-[386.7px] block max-md:w-[17.8125rem] max-lg:shrink-0 md:max-lg:w-[307.7px] 2xl:w-150">
          <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
            <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
              <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[17.8125rem] max-md:h-[15.05rem] md:max-lg:w-[307.7px] md:max-lg:h-[16.25rem] 2xl:w-150 2xl:h-[506.9px]">
                <c-dato-image class="inline" id="datoimage-41">
                  {" "}
                  <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[15.0625rem] max-lg:transform-[none] md:max-lg:h-65 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                    <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog-detail/images/82cbf0761249.jpg 480w, /assets/blog-detail/images/b40d124269e6.jpg 960w, /assets/blog-detail/images/33ba94bf83df.jpg 1440w, /assets/blog-detail/images/71250fc9b6bb.jpg 1920w" />
                    {" "}
                    <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[15.0625rem] max-lg:top-0 md:max-lg:h-65 2xl:h-[43.6875rem]" data-ditto-id="motion-image-4" data-component="image" alt="" src="/assets/blog-detail/images/71250fc9b6bb.jpg" />
                    {" "}
                  </picture>
                  {" "}
                </c-dato-image>
                {" "}
              </c-inner-parallax>
              {" "}
              <img className="w-auto h-31 flex max-w-full justify-center items-center overflow-clip object-contain aspect-[auto_1200/1200] align-middle [filter:invert(1)] max-md:h-[5.6875rem] md:max-lg:h-[6.1875rem] 2xl:h-[12.0625rem]" data-component="image" alt="" height="1200" src="/assets/blog-detail/svg/a50d90ee9913.svg" width="1200" />
              {" "}
            </div>
            {" "}
            <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background">
              <div className="flex justify-between items-center">
                <ul className="flex gap-3.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                  <li className="list-item">
                    <time className="inline" dateTime="2026-07-15T10:13:03-04:00">
                      {" July 15, 2026 "}
                    </time>
                    {" "}
                  </li>
                  <li className="list-item text-muted-foreground">
                    {" Tutorial "}
                  </li>
                </ul>
                {" "}
                <span className="h-6 block opacity-0 shrink-0 [translate:4px]" aria-hidden="true">
                  {" "}
                  <Icon2 />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                {" A Low-Latency Architecture for Voice Agents with Real-time Web Search "}
              </h3>
              {" "}
            </div>
            {" "}
            <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/a-low-latency-architecture-for-voice-agents-with-real-time-web-search">
              {" "}
              <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                {d.title}
              </span>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
      );
    case "2026-gpu-buyer-s-guide":
      return (
        <div className="w-[386.7px] block max-md:w-[17.8125rem] max-lg:shrink-0 md:max-lg:w-[307.7px] 2xl:w-150">
          <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
            <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
              <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden md:max-lg:w-[307.7px] md:max-lg:h-[16.25rem] 2xl:w-150 2xl:h-[506.9px]">
                <c-dato-image class="inline" id="datoimage-42">
                  {" "}
                  <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] md:max-lg:h-65 md:max-lg:transform-[none] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                    <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog-detail/images/5e276b05211e.jpg 480w, /assets/blog-detail/images/1b766d0917c6.jpg 960w, /assets/blog-detail/images/719ca410822e.jpg 1440w, /assets/blog-detail/images/e7d44a8246c0.jpg 1920w" />
                    {" "}
                    <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle md:max-lg:h-65 md:max-lg:top-0 2xl:h-[43.6875rem]" data-ditto-id="motion-image-5" data-component="image" alt="" src="/assets/blog-detail/images/e7d44a8246c0.jpg" />
                    {" "}
                  </picture>
                  {" "}
                </c-dato-image>
                {" "}
              </c-inner-parallax>
              {" "}
              <c-dato-image class="h-[124.1px] flex justify-center items-center object-contain [filter:invert(1)] w-1/4 max-md:h-[91.5px] md:max-lg:h-[6.175rem] 2xl:h-[12.0375rem]" id="datoimage-43">
                <picture className="w-auto h-[6.0625rem] block max-md:h-[4.4375rem] md:max-lg:h-[4.8125rem] 2xl:h-37.5">
                  <source className="inline" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/blog-detail/images/8bf737d1626e.png 200w, /assets/blog-detail/images/a8a6ceb062cc.png 400w, /assets/blog-detail/images/241a2f73e815.png 600w, /assets/blog-detail/images/cf52d057750a.png 800w" />
                  {" "}
                  <img className="w-full h-[6.0625rem] block max-w-full overflow-clip aspect-square align-middle max-md:h-[4.4375rem] md:max-lg:h-[4.8125rem] 2xl:h-37.5" data-component="image" alt="" src="/assets/blog-detail/images/cf52d057750a.png" />
                  {" "}
                </picture>
                {" "}
              </c-dato-image>
              {" "}
            </div>
            {" "}
            <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background">
              <div className="flex justify-between items-center">
                <ul className="flex gap-3.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                  <li className="list-item">
                    <time className="inline" dateTime="2026-07-13T15:12:28-04:00">
                      {" July 13, 2026 "}
                    </time>
                    {" "}
                  </li>
                  <li className="list-item text-muted-foreground">
                    {" Annoucement "}
                  </li>
                </ul>
                {" "}
                <span className="h-6 block opacity-0 shrink-0 [translate:4px]" aria-hidden="true">
                  {" "}
                  <Icon2 />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                {" 2026 GPU Buyer’s Guide "}
              </h3>
              {" "}
            </div>
            {" "}
            <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/2026-gpu-buyers-guide">
              {" "}
              <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                {d.title}
              </span>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
      );
    default:
      return null;
  }
}
