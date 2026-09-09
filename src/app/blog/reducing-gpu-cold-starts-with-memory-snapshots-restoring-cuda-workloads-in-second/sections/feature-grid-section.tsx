import FeatureGridItem from "../components/feature-grid-item";
import { features as featuresContent } from "../content";
/** Feature Grid section. */
export default function FeatureGridSection({ features = featuresContent } = {}) {
  return (
    <div className="block pb-[7.5625rem] rounded-br-4xl rounded-bl-4xl overflow-hidden bg-clr-1 max-md:pb-20 md:max-lg:pb-[6.0875rem] 2xl:pb-[150.3px]">
      <div className="block max-w-500 mt-[78.1px] px-10 max-md:mt-14 max-lg:px-[0.9375rem] md:max-lg:mt-[4.0875rem] 2xl:mt-[5.875rem]">
        <div className="block">
          <div className="flex mb-[2.55rem] justify-between items-center max-md:mb-8 md:max-lg:mb-9 2xl:mb-[2.95rem]">
            <h3 className="block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-[2.5625rem] 2xl:leading-[2.9375rem] 2xl:tracking-[-1.03px]" data-component="heading">
              Related articles
            </h3>
            {" "}
            <a className="h-13.5 min-h-13.5 flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-background cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/blog" target="_self">
              {" "}
              <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-32">
                {" See all "}
              </c-scramble-text>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
          <div className="w-full grid gap-5 max-lg:flex max-lg:-mx-[0.9375rem] max-lg:pb-[0.9375rem] max-lg:px-[0.9375rem] max-lg:gap-[0.9375rem] max-lg:overflow-auto grid-cols-2 md:grid-cols-3">
            {features.map((d) => <FeatureGridItem key={d.variant} d={d} />)}
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </div>
  );
}
