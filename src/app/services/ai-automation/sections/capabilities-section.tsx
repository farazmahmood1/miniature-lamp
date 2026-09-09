import ListRow2 from "../components/list-row2";
import Illustration from "../svgs/svg-illustration";
import MediaCard, { type MediaCardData } from "../components/media-card";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Illustration2 from "../svgs/svg-illustration2";
import Illustration3 from "../svgs/svg-illustration3";
import MediaCard2 from "../components/media-card2";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import Icon6 from "../svgs/svg-icon6";
import { ListRow2_styles, MediaCard_styles, MediaCard2_styles } from "../node-styles";
import { listRow2Data as listRow2DataContent, cards as cardsContent } from "../content";
const MediaCard_data: MediaCardData[] = [
    { ariahidden: "true", style: { maskImage: "url(\"/assets/ai-automation/svg/94ec329b31c6.svg\")" }, height: "26", imgSrc: "/assets/ai-automation/svg/94ec329b31c6.svg", width: "26", title: "OpenAI", description: " Frontier models for the reasoning-heavy steps " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/ai-automation/svg/c73fb6786013.svg\")" }, height: "46", imgSrc: "/assets/ai-automation/svg/c73fb6786013.svg", width: "46", title: "Anthropic", description: " Long-context work and careful instruction following " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/ai-automation/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/ai-automation/svg/bbf73e985df9.svg", width: "1919", title: "Slack", description: " Where the exception queue lands in front of a person " },
    { style: { maskImage: "url(\"/assets/ai-automation/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/ai-automation/svg/bbf73e985df9.svg", width: "1919", title: "HubSpot", description: " Records created and updated without anyone retyping " },
    { style: { maskImage: "url(\"/assets/ai-automation/svg/04358fc6abba.svg\")" }, height: "66", imgSrc: "/assets/ai-automation/svg/04358fc6abba.svg", width: "276", title: "Postgres", description: " The system of record the workflow reads and writes " },
    { style: { maskImage: "url(\"/assets/ai-automation/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/ai-automation/svg/bbf73e985df9.svg", width: "1919", title: "Zapier", description: " The long tail of tools not worth a custom integration " },
    { style: { maskImage: "url(\"/assets/ai-automation/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/ai-automation/svg/bbf73e985df9.svg", width: "1919", title: "Slack", description: " Where the exception queue lands in front of a person " },
    { style: { maskImage: "url(\"/assets/ai-automation/svg/c73fb6786013.svg\")" }, height: "46", imgSrc: "/assets/ai-automation/svg/c73fb6786013.svg", width: "46", title: "Anthropic", description: " Long-context work and careful instruction following " },
    { style: { maskImage: "url(\"/assets/ai-automation/svg/94ec329b31c6.svg\")" }, height: "26", imgSrc: "/assets/ai-automation/svg/94ec329b31c6.svg", width: "26", title: "OpenAI", description: " Frontier models for the reasoning-heavy steps " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/ai-automation/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/ai-automation/svg/bbf73e985df9.svg", width: "1919", title: "HubSpot", description: " Records created and updated without anyone retyping " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/ai-automation/svg/04358fc6abba.svg\")" }, height: "66", imgSrc: "/assets/ai-automation/svg/04358fc6abba.svg", width: "276", title: "Postgres", description: " The system of record the workflow reads and writes " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/ai-automation/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/ai-automation/svg/bbf73e985df9.svg", width: "1919", title: "Zapier", description: " The long tail of tools not worth a custom integration " }
];
/** The AI Automation page body: hero, capability blocks and case studies. */
export default function CapabilitiesSection({ listRow2Data = listRow2DataContent, mediaCardData = MediaCard_data, cards = cardsContent } = {}) {
  return (
    <main className="block">
      <div className="block">
        <div className="block">
          <c-hero-use-case class="block relative pb-[7.05rem] text-background max-md:pb-26 md:max-lg:pb-[6.7375rem] 2xl:pb-[7.45rem]" id="herousecase-43">
            <div className="min-h-screen flex relative z-1 pt-20.5 flex-col justify-end max-lg:pt-18">
              <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                <div className="grid gap-y-[2.55rem] gap-x-5 grid-cols-12 max-md:gap-y-8 max-lg:gap-x-[0.9375rem] max-md:grid-cols-1 md:max-lg:gap-y-9 2xl:gap-y-[2.95rem]">
                  <div className="block col-start-9 col-end-12 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-end-13">
                    <h1 className="flex items-center gap-2" data-component="heading">
                      <span className="w-1.5 h-1.5 block bg-accent [clip-path:inset(0%_round_7px)]" />
                      {" "}
                      <span className="block font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                        {" AI Automation "}
                      </span>
                      {" "}
                    </h1>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="block my-5">
                  <div className="h-px block opacity-20 bg-background" />
                  {" "}
                </div>
                {" "}
                <div className="min-h-100 grid pb-[78.1px] gap-y-[2.55rem] gap-x-5 grid-cols-12 max-md:min-h-101.5 max-md:pb-10 max-md:gap-y-8 max-lg:gap-x-[0.9375rem] max-md:grid-cols-1 md:max-lg:min-h-128 md:max-lg:pb-[46.3px] md:max-lg:gap-y-9 2xl:min-h-135 2xl:pb-[5.875rem] 2xl:gap-y-[2.95rem]">
                  <div className="block col-start-1 col-end-7 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial]">
                    <c-split-title class="inline" id="splittitle-52">
                      {" "}
                      <div className="block font-favorit text-[5rem] font-light leading-[5rem] tracking-[-2px] max-md:text-[2.8125rem] max-md:leading-[2.8125rem] max-md:tracking-[-1.12px] md:max-lg:text-6xl md:max-lg:leading-[3.75rem] md:max-lg:tracking-[-1.49px] 2xl:text-[6.5625rem] 2xl:leading-[6.5625rem] 2xl:tracking-[-2.62px]" data-component="heading" aria-label="Put the repetitive work on autopilot">
                        <div className="inline-block relative" aria-hidden="true">
                          Put
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          the
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          repetitive
                        </div>
                        {" "}
                        <span className="inline text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--accent) 0%, var(--clr-3) 100%)" }}>
                          <div className="inline-block relative -mb-[0.4rem] pb-[0.4rem] [background-clip:text] [-webkit-background-clip:text] max-md:-mb-[0.225rem] max-md:pb-[0.225rem] md:max-lg:-mb-[0.3rem] md:max-lg:pb-[0.3rem] 2xl:-mb-[0.525rem] 2xl:pb-[0.525rem]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--accent) 0%, var(--clr-3) 100%)" }} aria-hidden="true">
                            work
                          </div>
                        </span>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          on
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          autopilot
                        </div>
                      </div>
                      {" "}
                    </c-split-title>
                    {" "}
                  </div>
                  {" "}
                  <div className="block col-start-9 col-end-12 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-end-13">
                    <div className="w-full max-w-100 flex flex-col gap-7.5">
                      <div className="block max-w-[66.8rem] leading-7 text-balance">
                        <p className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                          We find the processes worth automating, build the agents that run them, and stay on to keep them honest once they are live.
                        </p>
                      </div>
                      {" "}
                      <div className="flex flex-wrap gap-4">
                        <div className="block">
                          <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-color-001 bg-accent cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/contact" target="_self">
                            {" "}
                            <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-32">
                              {" Start a project "}
                            </c-scramble-text>
                            {" "}
                          </a>
                          {" "}
                        </div>
                        <div className="block">
                          <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-clr-1 [backdrop-filter:blur(16px)] cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/work" target="_self">
                            {" "}
                            <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-33">
                              {" See our work "}
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
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <c-crossword-grid class="flex relative max-w-500 px-10 justify-center items-center max-lg:px-[0.9375rem]" aria-hidden="true" id="crosswordgrid-44">
              <div className="w-full block relative">
                <div className="h-full block absolute top-0 inset-x-0 z-0 pointer-events-none" aria-hidden="true">
                  <div className="hidden max-md:w-[21.9375rem] max-lg:h-8 max-lg:block max-lg:absolute max-md:top-[7.5875rem] max-md:-left-[0.1875rem] max-lg:opacity-85 max-lg:[mix-blend-mode:screen] max-lg:rounded-[7px] max-lg:overflow-hidden max-lg:bg-accent max-lg:transform-[matrix(0,0,0,1,0,0)] max-lg:origin-[0px_16px] max-lg:[animation-name:crossword-highlight-wipe-x] max-lg:[animation-duration:0.7s] max-lg:[animation-timing-function:cubic-bezier(0.645,_0.045,_0.355,_1)] max-lg:[animation-fill-mode:forwards] max-lg:pointer-events-none md:max-lg:w-[241.3px] md:max-lg:top-[5.575rem] md:max-lg:left-[499.7px] 2xl:w-[428.1px] 2xl:h-[49.3px] 2xl:block 2xl:absolute 2xl:-top-3.5 2xl:left-[65.0375rem] 2xl:z-0 2xl:transform-[matrix(-0.78969,0.613506,-0.613506,-0.78969,0,0)] 2xl:origin-[0px_24.6328px] 2xl:pointer-events-none" />
                  <div className="hidden 2xl:w-[204.5px] 2xl:h-12 2xl:block 2xl:absolute 2xl:top-14.5 2xl:left-[86.7rem] 2xl:opacity-85 2xl:[mix-blend-mode:screen] 2xl:rounded-[7px] 2xl:overflow-hidden 2xl:bg-accent 2xl:[animation-name:crossword-highlight-exit-x] 2xl:[animation-duration:0.55s] 2xl:[animation-timing-function:cubic-bezier(0.645,_0.045,_0.355,_1)] 2xl:[animation-fill-mode:forwards] 2xl:pointer-events-none" />
                </div>
                <div className="grid relative z-1 gap-y-4 gap-x-[0.85rem] grid-cols-24 grid-rows-5 max-md:gap-y-[13.1px] max-md:gap-x-[11.3px] max-md:grid-cols-6 max-md:grid-rows-4 md:max-lg:gap-y-[1.1rem] md:max-lg:gap-x-4">
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    6
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    L
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    R
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    T
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    U
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    U
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    A
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    8
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    B
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    H
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    D
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]" data-node-id="motion-span-2">
                    U
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    M
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:z-2 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    S
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    8
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    5
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    W
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-lg:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-lg:max-h-none max-lg:aspect-[initial] md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    T
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    4
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    5
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    H
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    W
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    0
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    2
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    U
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    Y
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    S
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    G
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    P
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    S
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    1
                  </span>
                  <span className="grid relative z-2 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-md:max-h-none max-md:aspect-[initial] md:max-lg:hidden 2xl:hidden">
                    L
                  </span>
                  <span className="grid relative z-2 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-md:max-h-none max-md:aspect-[initial] md:max-lg:hidden 2xl:hidden">
                    A
                  </span>
                  <span className="grid relative z-2 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-md:max-h-none max-md:aspect-[initial] md:max-lg:hidden 2xl:hidden">
                    T
                  </span>
                  <span className="grid relative z-2 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-md:max-h-none max-md:aspect-[initial] md:max-lg:hidden 2xl:hidden">
                    E
                  </span>
                  <span className="grid relative z-2 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-md:max-h-none max-md:aspect-[initial] md:max-lg:hidden 2xl:hidden">
                    N
                  </span>
                  <span className="grid relative z-2 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:min-h-7 max-md:text-[0.625rem] max-md:leading-[0.6875rem] max-md:tracking-[-0.26px] max-md:max-h-none max-md:aspect-[initial] md:max-lg:hidden 2xl:hidden">
                    C
                  </span>
                  <span className="grid relative z-2 max-h-11 items-center grid-cols-[37px] justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase max-lg:hidden 2xl:hidden">
                    Y
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    K
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    8
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    K
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    C
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    G
                  </span>
                  <span className="hidden 2xl:grid 2xl:relative 2xl:z-2 2xl:max-h-11 2xl:items-center 2xl:grid-cols-[44px] 2xl:justify-items-center 2xl:aspect-square 2xl:font-suisse-mono 2xl:text-[0.9375rem] 2xl:font-normal 2xl:leading-[1rem] 2xl:tracking-[-0.38px] 2xl:uppercase">
                    C
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    P
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    U
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    M
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    S
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    S
                  </span>
                  <span className="hidden 2xl:grid 2xl:relative 2xl:z-2 2xl:max-h-11 2xl:items-center 2xl:grid-cols-[44px] 2xl:justify-items-center 2xl:aspect-square 2xl:font-suisse-mono 2xl:text-[0.9375rem] 2xl:font-normal 2xl:leading-[1rem] 2xl:tracking-[-0.38px] 2xl:uppercase">
                    G
                  </span>
                  <span className="hidden 2xl:grid 2xl:relative 2xl:z-2 2xl:max-h-11 2xl:items-center 2xl:grid-cols-[44px] 2xl:justify-items-center 2xl:aspect-square 2xl:font-suisse-mono 2xl:text-[0.9375rem] 2xl:font-normal 2xl:leading-[1rem] 2xl:tracking-[-0.38px] 2xl:uppercase">
                    P
                  </span>
                  <span className="hidden 2xl:grid 2xl:relative 2xl:z-2 2xl:max-h-11 2xl:items-center 2xl:grid-cols-[44px] 2xl:justify-items-center 2xl:aspect-square 2xl:font-suisse-mono 2xl:text-[0.9375rem] 2xl:font-normal 2xl:leading-[1rem] 2xl:tracking-[-0.38px] 2xl:uppercase">
                    U
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    D
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    E
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    P
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    L
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    O
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    Y
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    T
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]" data-node-id="motion-span">
                    E
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    F
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    R
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    U
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    A
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    R
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    Q
                  </span>
                  <span className="hidden 2xl:grid 2xl:relative 2xl:z-2 2xl:max-h-11 2xl:items-center 2xl:grid-cols-[44px] 2xl:justify-items-center 2xl:aspect-square 2xl:font-suisse-mono 2xl:text-[0.9375rem] 2xl:font-normal 2xl:leading-[1rem] 2xl:tracking-[-0.38px] 2xl:uppercase">
                    A
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    W
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    7
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    B
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    A
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    T
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    C
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    H
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    I
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    N
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:z-2 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    G
                  </span>
                  <span className="hidden md:max-lg:min-h-7 md:max-lg:grid md:max-lg:relative md:max-lg:z-2 md:max-lg:items-center md:max-lg:grid-cols-[15.4px] md:max-lg:justify-items-center md:max-lg:font-suisse-mono md:max-lg:text-xs md:max-lg:font-normal md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:uppercase">
                    A
                  </span>
                  <span className="hidden md:max-lg:min-h-7 md:max-lg:grid md:max-lg:relative md:max-lg:z-2 md:max-lg:items-center md:max-lg:grid-cols-[15.4px] md:max-lg:justify-items-center md:max-lg:font-suisse-mono md:max-lg:text-xs md:max-lg:font-normal md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:uppercase">
                    T
                  </span>
                  <span className="hidden md:max-lg:min-h-7 md:max-lg:grid md:max-lg:relative md:max-lg:z-2 md:max-lg:items-center md:max-lg:grid-cols-[15.4px] md:max-lg:justify-items-center md:max-lg:font-suisse-mono md:max-lg:text-xs md:max-lg:font-normal md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:uppercase">
                    C
                  </span>
                  <span className="hidden md:max-lg:min-h-7 md:max-lg:grid md:max-lg:relative md:max-lg:z-2 md:max-lg:items-center md:max-lg:grid-cols-[15.4px] md:max-lg:justify-items-center md:max-lg:font-suisse-mono md:max-lg:text-xs md:max-lg:font-normal md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:uppercase">
                    H
                  </span>
                  <span className="hidden md:max-lg:min-h-7 md:max-lg:grid md:max-lg:relative md:max-lg:z-2 md:max-lg:items-center md:max-lg:grid-cols-[15.4px] md:max-lg:justify-items-center md:max-lg:font-suisse-mono md:max-lg:text-xs md:max-lg:font-normal md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:uppercase">
                    I
                  </span>
                  <span className="hidden md:max-lg:min-h-7 md:max-lg:grid md:max-lg:relative md:max-lg:z-2 md:max-lg:items-center md:max-lg:grid-cols-[15.4px] md:max-lg:justify-items-center md:max-lg:font-suisse-mono md:max-lg:text-xs md:max-lg:font-normal md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:uppercase">
                    N
                  </span>
                  <span className="hidden md:max-lg:min-h-7 md:max-lg:grid md:max-lg:relative md:max-lg:z-2 md:max-lg:items-center md:max-lg:grid-cols-[15.4px] md:max-lg:justify-items-center md:max-lg:font-suisse-mono md:max-lg:text-xs md:max-lg:font-normal md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:uppercase">
                    G
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    E
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    P
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    8
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    R
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    B
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    A
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    B
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    3
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    3
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    E
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    L
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    L
                  </span>
                  <span className="hidden 2xl:grid 2xl:relative 2xl:z-2 2xl:max-h-11 2xl:items-center 2xl:grid-cols-[44px] 2xl:justify-items-center 2xl:aspect-square 2xl:font-suisse-mono 2xl:text-[0.9375rem] 2xl:font-normal 2xl:leading-[1rem] 2xl:tracking-[-0.38px] 2xl:uppercase">
                    L
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    U
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    Z
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    8
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    Y
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    S
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    R
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    X
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    F
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    0
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    O
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    1
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    N
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    O
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    G
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    L
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    O
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    B
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    A
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    L
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    I
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    2
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    E
                  </span>
                  <span className="hidden 2xl:grid 2xl:relative 2xl:z-2 2xl:max-h-11 2xl:items-center 2xl:grid-cols-[44px] 2xl:justify-items-center 2xl:aspect-square 2xl:font-suisse-mono 2xl:text-[0.9375rem] 2xl:font-normal 2xl:leading-[1rem] 2xl:tracking-[-0.38px] 2xl:uppercase">
                    E
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    O
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    8
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    N
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    C
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    I
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    1
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    V
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    5
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    M
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    N
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    K
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    M
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    6
                  </span>
                  <span className="grid relative z-1 max-h-11 items-center justify-items-center aspect-square font-suisse-mono text-[0.8125rem] font-normal leading-[0.875rem] tracking-[-0.33px] uppercase grid-cols-[minmax(0,_1fr)] max-md:hidden md:max-lg:min-h-7 md:max-lg:text-xs md:max-lg:leading-[0.75rem] md:max-lg:tracking-[-0.29px] md:max-lg:max-h-none md:max-lg:aspect-[initial] 2xl:text-[0.9375rem] 2xl:leading-[1rem] 2xl:tracking-[-0.38px]">
                    G
                  </span>
                </div>
              </div>
            </c-crossword-grid>
            {" "}
          </c-hero-use-case>
          {" "}
          <div className="block relative z-1 -mt-15 rounded-4xl bg-background max-lg:-mt-7.5">
            <div className="block py-[78.1px] rounded-4xl bg-background max-md:py-10 md:max-lg:py-[46.3px] 2xl:py-[5.875rem]">
              <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                <div className="grid mb-[7.5625rem] gap-5 grid-cols-2 max-lg:hidden 2xl:mb-[150.3px]">
                  <div className="block max-w-120 text-balance">
                    <p className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]">
                      Built for the work that actually lands on somebody's desk every day.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="block">
                    <c-split-title class="inline" id="splittitle-53">
                      {" "}
                      <div className="block -mt-[0.425rem] font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] 2xl:-mt-[0.55rem] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]" aria-label="Why Codilated for automation">
                        <div className="inline-block relative" aria-hidden="true">
                          Why
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          Codilated
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          for
                        </div>
                        {" "}
                        <span className="inline text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--accent) 0%, var(--clr-3) 100%)" }}>
                          <div className="inline-block relative -mb-[0.3375rem] pb-[0.3375rem] [background-clip:text] [-webkit-background-clip:text] 2xl:-mb-[0.4375rem] 2xl:pb-[0.4375rem]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--accent) 0%, var(--clr-3) 100%)" }} aria-hidden="true">
                            automation
                          </div>
                        </span>
                      </div>
                      {" "}
                    </c-split-title>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <c-feature-cards class="grid mb-[78.1px] gap-5 grid-cols-[590px_590px] max-md:mb-14 max-lg:gap-[0.9375rem] max-md:grid-cols-[345px] md:max-lg:mb-[4.0875rem] md:max-lg:grid-cols-[738px] 2xl:mb-[5.875rem] 2xl:grid-cols-[910px_910px]" id="featurecards-60">
                  <div className="block">
                    <div className="h-[15.7875rem] block sticky top-24.5 max-lg:h-auto max-lg:static max-lg:top-auto 2xl:h-[305.7px]">
                      <h2 className="flex mb-12.5 items-center gap-2 max-lg:mb-6" data-component="heading">
                        <span className="w-1.5 h-1.5 block bg-foreground [clip-path:inset(0%_round_7px)]" />
                        {" "}
                        <span className="block font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                          {" What you get "}
                        </span>
                        {" "}
                      </h2>
                      {" "}
                      <div className="hidden mb-[78.1px] max-lg:block max-md:mb-14 md:max-lg:mb-[4.0875rem]">
                        <c-split-title class="inline" id="splittitle-54">
                          {" "}
                          <div className="block font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px]" aria-label="Why Codilated for automation">
                            <div className="inline-block relative" aria-hidden="true">
                              Why
                            </div>
                            {" "}
                            <div className="inline-block relative" aria-hidden="true">
                              Codilated
                            </div>
                            {" "}
                            <div className="inline-block relative" aria-hidden="true">
                              for
                            </div>
                            {" "}
                            <span className="inline text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--accent) 0%, var(--clr-3) 100%)" }}>
                              <div className="inline-block relative -mb-[0.3375rem] pb-[0.3375rem] [background-clip:text] [-webkit-background-clip:text] max-md:-mb-[0.2rem] max-md:pb-[0.2rem] md:max-lg:mb-[-4.1px] md:max-lg:pb-1" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--accent) 0%, var(--clr-3) 100%)" }} aria-hidden="true">
                                automation
                              </div>
                            </span>
                          </div>
                          {" "}
                        </c-split-title>
                        {" "}
                      </div>
                      {" "}
                      <ul className="block [list-style-type:none] list-outside max-lg:hidden">
                        {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                      </ul>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="grid gap-[78.1px] grid-cols-1 max-w-3xl max-md:gap-14 md:max-lg:gap-[4.0875rem] 2xl:gap-[5.875rem]">
                    <div className="block" id="process-audit">
                      <c-feature-card-containers-animation class="flex flex-col gap-6" id="featurecardcontainersanimation-57">
                        <div className="block rounded-[15px] overflow-hidden bg-surface-2 aspect-[707/600]">
                          <Illustration />
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            We start by counting the work
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              Two weeks ranking processes by volume, error cost and how cleanly the inputs arrive. Every audit we run names at least one thing that should stay manual, and we say so.
                            </p>
                          </div>
                          {" "}
                          <div className="flex flex-wrap gap-4" />
                          {" "}
                        </div>
                        {" "}
                      </c-feature-card-containers-animation>
                      {" "}
                    </div>
                    <div className="block" id="agent-workflows">
                      <c-feature-card-gpu-carousel class="flex flex-col gap-6" id="featurecardgpucarousel-58">
                        <div className="flex relative rounded-[15px] justify-center items-center overflow-hidden aspect-[707/600] bg-surface">
                          <div className="w-[70%] h-full block relative max-md:w-4/5">
                            {mediaCardData.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            Agents wired into your own tools
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              Workflows run against the systems you already pay for, so there is no new interface for anyone to learn and no parallel copy of your data to keep in sync.
                            </p>
                          </div>
                          {" "}
                          <div className="flex flex-wrap gap-4" />
                          {" "}
                        </div>
                        {" "}
                      </c-feature-card-gpu-carousel>
                      {" "}
                    </div>
                    <div className="block" id="human-checkpoints">
                      <c-feature-card-inference-animation class="flex flex-col gap-6" id="featurecardinferenceanimation-59">
                        <div className="h-[601.9px] min-h-125 flex relative p-6 rounded-[15px] justify-center gap-6 overflow-hidden bg-color-001 max-md:h-[26.6875rem] max-lg:min-h-0 md:max-lg:h-[576.5px] 2xl:h-[41.2125rem]">
                          <c-inner-parallax class="w-147.5 h-[601.9px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[26.6875rem] md:max-lg:w-184.5 md:max-lg:h-[576.5px] 2xl:w-192 2xl:h-[41.2125rem]">
                            <c-dato-image class="inline" id="datoimage-46">
                              {" "}
                              <picture className="w-147.5 h-150.5 block absolute top-0 left-0 text-clr-2 bg-cover [background-position:50%_50%] bg-no-repeat transform-[matrix(1,0,0,1,0,-80)] max-md:w-[21.5625rem] max-md:h-[26.6875rem] max-lg:transform-[none] md:max-lg:w-184.5 md:max-lg:h-144 2xl:w-192 2xl:h-[41.1875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]" style={{ backgroundImage: "url(data:image/jpeg" }}>
                                <source className="inline" sizes="(max-width: 100px) 100vw, 33vw" srcSet="/assets/ai-automation/images/067176fd130b.jpg 325w, /assets/ai-automation/images/4b6a8895a7ac.jpg 650w, /assets/ai-automation/images/01ee14449280.jpg 975w, /assets/ai-automation/images/0adef3306d7e.jpg 1300w" />
                                {" "}
                                <img className="w-full h-198.5 block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[26.6875rem] max-lg:top-0 md:max-lg:h-144 2xl:h-[53.1875rem]" data-component="image" alt="" src="/assets/ai-automation/images/0adef3306d7e.jpg" />
                                {" "}
                              </picture>
                              {" "}
                            </c-dato-image>
                            {" "}
                          </c-inner-parallax>
                          {" "}
                          <div className="block relative z-2 w-full">
                            <c-segmented-controls class="inline-flex flex-col gap-y-6 w-full max-w-full" id="segmentedcontrols-51">
                              {" "}
                              <div className="flex relative p-1 rounded-[7px] self-center shrink-0 overflow-x-auto overflow-y-hidden bg-surface" role="tablist">
                                <div className="w-[8.3125rem] h-11 block absolute left-50.5 min-w-0 rounded-[7px] bg-muted-foreground pointer-events-none max-md:w-[6.6875rem] max-md:left-22 md:max-lg:w-32 md:max-lg:left-[12.1875rem]" aria-hidden="true" />
                                {" "}
                                <c-segmented-tab class="min-h-11 flex relative z-1 py-2 px-5 rounded-[7px] justify-center items-center shrink-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[5.425rem] before:h-11 before:bg-primary before:opacity-0 before:rounded-tl-[7px] max-lg:before:w-21" data-node-id="interaction-segmentedcontrols-51-tab-0" aria-controls="segmentedcontrols-51-panel-0" aria-selected="false" id="segmentedcontrols-51-tab-0" role="tab">
                                  {" Static "}
                                </c-segmented-tab>
                                <c-segmented-tab class="min-h-11 flex relative z-1 py-2 px-5 rounded-[7px] justify-center items-center shrink-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-md:text-background max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[110.9px] before:h-11 before:bg-primary before:opacity-0 before:rounded-tl-[7px] max-lg:before:w-[106.7px] max-md:before:bg-muted-foreground" data-node-id="interaction-segmentedcontrols-51-tab-1" aria-controls="segmentedcontrols-51-panel-1" aria-selected="false" id="segmentedcontrols-51-tab-1" role="tab">
                                  {" Dynamic "}
                                </c-segmented-tab>
                                <c-segmented-tab class="min-h-11 flex relative z-1 py-2 px-5 rounded-[7px] justify-center items-center shrink-0 text-background text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-md:text-[color:inherit] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[8.325rem] before:h-11 before:bg-muted-foreground before:opacity-0 before:rounded-tl-[7px] max-lg:before:w-32 max-md:before:bg-primary" data-node-id="interaction-segmentedcontrols-51-tab-2" aria-controls="segmentedcontrols-51-panel-2" aria-selected="true" id="segmentedcontrols-51-tab-2" role="tab">
                                  {" Continuous "}
                                </c-segmented-tab>
                                {" "}
                              </div>
                              {" "}
                              <div className="h-[321.7px] block relative max-w-125 my-[78.1px] mx-auto rounded-[10px] overflow-hidden bg-surface max-md:h-[11.9375rem] max-md:my-14 md:max-lg:my-[4.0875rem] 2xl:h-[21.7125rem] 2xl:min-h-[21.7125rem] 2xl:min-w-135 2xl:max-w-135 2xl:max-h-[21.7125rem] 2xl:my-[5.875rem]">
                                <c-segmented-panel class="hidden" data-node-id="interaction-segmentedcontrols-51-panel-0" aria-labelledby="segmentedcontrols-51-tab-0" id="segmentedcontrols-51-panel-0" role="tabpanel">
                                  <div className="block">
                                    <Icon2 />
                                  </div>
                                  {" "}
                                </c-segmented-panel>
                                <c-segmented-panel class="hidden transform-[none] max-md:w-[18.5625rem] max-md:h-[11.9375rem] max-md:block 2xl:w-135 2xl:h-[21.7125rem] 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-1 2xl:opacity-[0.4206] 2xl:transform-[matrix(1,0,0,1,-15.6433,0)]" data-node-id="interaction-segmentedcontrols-51-panel-1" aria-labelledby="segmentedcontrols-51-tab-1" id="segmentedcontrols-51-panel-1" role="tabpanel">
                                  <div className="h-full block">
                                    <Icon3 nodeId={"interaction-5"} />
                                  </div>
                                  {" "}
                                </c-segmented-panel>
                                <c-segmented-panel class="block transform-[none] max-md:hidden 2xl:opacity-[0.5794] 2xl:transform-[matrix(1,0,0,1,11.3567,0)]" data-node-id="interaction-segmentedcontrols-51-panel-2" aria-labelledby="segmentedcontrols-51-tab-2" id="segmentedcontrols-51-panel-2" role="tabpanel">
                                  <div className="block">
                                    <Illustration2 />
                                  </div>
                                  {" "}
                                </c-segmented-panel>
                              </div>
                              {" "}
                            </c-segmented-controls>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            A person on the expensive calls
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              Every workflow ships with a confidence threshold. Below it a task routes to a person with the model's reasoning attached, so the exception is faster to clear than the manual task was.
                            </p>
                          </div>
                          {" "}
                          <div className="flex flex-wrap gap-4" />
                          {" "}
                        </div>
                        {" "}
                      </c-feature-card-inference-animation>
                      {" "}
                    </div>
                    <div className="block" id="monitoring">
                      <c-feature-card-world-map-animation class="flex relative flex-col gap-6" id="featurecardworldmapanimation-56">
                        <div className="block relative">
                          <div className="block relative rounded-[15px] overflow-hidden bg-surface-2 aspect-[707/600] max-md:aspect-square">
                            <div className="h-[500.7px] block absolute top-0 inset-x-0 max-md:h-103.5 max-md:top-[-34.5px] max-md:inset-x-[-34.5px] md:max-lg:h-[626.3px] 2xl:h-[40.7375rem]">
                              <Illustration3 />
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            Monitored, so drift is visible
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              An evaluation suite runs on every change, and logging and alerting are in place before launch, so a quiet degradation shows up in a dashboard rather than in a complaint.
                            </p>
                          </div>
                          {" "}
                          <div className="flex flex-wrap gap-4" />
                          {" "}
                        </div>
                        {" "}
                      </c-feature-card-world-map-animation>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </c-feature-cards>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="block relative z-1 -mt-15 py-[78.1px] rounded-4xl bg-surface max-lg:-mt-7.5 max-md:py-10 md:max-lg:py-[46.3px] 2xl:py-[5.875rem]">
              <div className="block max-w-500 mb-[3.4375rem] px-10 max-md:mb-10 max-lg:px-[0.9375rem] md:max-lg:mb-[46.3px] 2xl:mb-[65.7px]">
                <div className="flex flex-col gap-12.5">
                  <c-split-title class="block" id="splittitle-55">
                    <div className="block font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]" aria-label="Examples">
                      <div className="inline-block relative" aria-hidden="true">
                        Examples
                      </div>
                    </div>
                    {" "}
                  </c-split-title>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="block mt-[3.4375rem] mb-[7.5625rem] max-md:my-10 md:max-lg:my-[46.3px] 2xl:mt-[65.7px] 2xl:mb-[150.3px]">
                <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                  <div className="block">
                    <div className="flex mb-[2.55rem] justify-between items-center max-md:mb-8 md:max-lg:mb-9 2xl:mb-[2.95rem]">
                      {" "}
                      <div className="block">
                        <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-background cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/work" target="_self">
                          {" "}
                          <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-34">
                            {" All work "}
                          </c-scramble-text>
                          {" "}
                        </a>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="w-full grid gap-5 max-lg:gap-[0.9375rem] grid-cols-1 md:grid-cols-2">
                      {cards.map((d, i) => <MediaCard2 key={i} d={d} styles={MediaCard2_styles[i]} />)}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              <div className="block mt-[3.4375rem] pb-4 overflow-hidden max-md:mt-10 md:max-lg:mt-[46.3px] 2xl:mt-[65.7px]">
                <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                  <c-carousel-tile class="block relative z-1" id="carouseltile-45">
                    <div className="flex mb-[2.55rem] justify-between items-center max-md:mb-8 md:max-lg:mb-9 2xl:mb-[2.95rem]">
                      <div className="block">
                        <h3 className="block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-[2.5625rem] 2xl:leading-[2.9375rem] 2xl:tracking-[-1.03px]" data-component="heading">
                          What we have automated for other teams
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <div className="block max-lg:hidden">
                        <button className="inline-flex relative opacity-50 isolate rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-background cursor-pointer h-[3.375rem] w-[3.375rem] max-lg:h-[2.625rem] max-lg:w-[2.625rem]" data-component="button" aria-label="Previous slide" disabled type="button">
                          {" "}
                          <c-scramble-text class="w-px h-px block absolute z-2 min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="scrambletext-39" />
                          {" "}
                          <span className="flex relative justify-center items-center pointer-events-none w-5 h-5">
                            {" "}
                            <Icon4 />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <button className="inline-flex relative opacity-50 isolate rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-background cursor-pointer h-[3.375rem] w-[3.375rem] max-lg:h-[2.625rem] max-lg:w-[2.625rem]" data-component="button" aria-label="Next slide" disabled type="button">
                          {" "}
                          <c-scramble-text class="w-px h-px block absolute z-2 min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="scrambletext-40" />
                          {" "}
                          <span className="flex relative justify-center items-center pointer-events-none w-5 h-5">
                            {" "}
                            <Icon5 />
                            {" "}
                          </span>
                        </button>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="box-content flex relative z-1 items-stretch">
                      <div className="w-97.5 block relative mr-[0.9375rem] shrink-0 max-md:w-[17.0625rem] md:max-lg:w-[361.5px] 2xl:w-[603.3px]">
                        <div className="flex relative flex-col h-full">
                          <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-surface-2" />
                          {" "}
                          <div className="flex relative z-2 p-5 justify-center items-center overflow-hidden aspect-[464/392]">
                            <ul className="w-[159.3px] h-3.5 flex absolute top-5 left-5 min-w-0 gap-3.5 text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                              <li className="list-item">
                                Video
                              </li>
                              <li className="list-item">
                                Generative AI
                              </li>
                            </ul>
                            {" "}
                            <div className="w-1/2 h-[144.7px] block relative max-md:h-[95.3px] md:max-lg:h-[132.7px] 2xl:h-[14.675rem]">
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/ai-automation/images/687e66466c86.avif\")" }} aria-hidden="true" />
                              {" "}
                              <c-dato-image class="w-[10.9375rem] block absolute opacity-1 h-full max-md:w-[116.5px] md:max-lg:w-[10.05rem] 2xl:w-[281.7px]" id="datoimage-47">
                                <picture className="w-full block h-full">
                                  <source className="inline" sizes="(max-width: 512px) 100vw, 512px" srcSet="/assets/ai-automation/images/7405a5326b27.avif 128w, /assets/ai-automation/images/c42f2019d058.avif 256w, /assets/ai-automation/images/5af7aef5c3e1.avif 384w, /assets/ai-automation/images/687e66466c86.avif 512w" />
                                  {" "}
                                  <img className="w-full block max-w-full overflow-clip object-contain aspect-[512/65] align-middle h-full" data-component="image" alt="" src="/assets/ai-automation/images/687e66466c86.avif" />
                                  {" "}
                                </picture>
                                {" "}
                              </c-dato-image>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="flex relative z-2 p-5 flex-col justify-between grow gap-3.5">
                            <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                              {" Rebuilding a storefront around the two steps that were leaking revenue "}
                            </h3>
                            {" "}
                            <div className="flex justify-between items-center">
                              <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                                Read Case Study
                              </span>
                              {" "}
                              <span className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
                                {" "}
                                <Icon6 />
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/work/kestrel-outdoors-storefront">
                            {" "}
                            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                              {" Rebuilding a storefront around the two steps that were leaking revenue "}
                            </span>
                            {" "}
                          </a>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      <div className="w-97.5 block relative mr-[0.9375rem] shrink-0 max-md:w-[17.0625rem] md:max-lg:w-[361.5px] 2xl:w-[603.3px]">
                        <div className="flex relative flex-col h-full">
                          <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-surface-2" />
                          {" "}
                          <div className="flex relative z-2 p-5 justify-center items-center overflow-hidden aspect-[464/392]">
                            <ul className="w-[175.5px] h-3.5 flex absolute top-5 left-5 min-w-0 gap-3.5 text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                              <li className="list-item">
                                Video
                              </li>
                              <li className="list-item">
                                Digital Avatars
                              </li>
                            </ul>
                            {" "}
                            <div className="w-1/2 h-[144.7px] block relative max-md:h-[95.3px] max-md:w-auto md:max-lg:h-[132.7px] 2xl:h-[14.675rem]">
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/ai-automation/svg/b5a2c37372fd.svg\")" }} aria-hidden="true" />
                              {" "}
                              <img className="w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain aspect-[auto_2471/489] align-middle h-full" data-component="image" alt="" height="489" src="/assets/ai-automation/svg/b5a2c37372fd.svg" width="2471" />
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="flex relative z-2 p-5 flex-col justify-between grow gap-3.5">
                            <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                              {" From spreadsheet pricing to a product their customers log into "}
                            </h3>
                            {" "}
                            <div className="flex justify-between items-center">
                              <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                                Read Case Study
                              </span>
                              {" "}
                              <span className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
                                {" "}
                                <Icon6 />
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/work/atlas-supply-pricing-platform">
                            {" "}
                            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                              {" From spreadsheet pricing to a product their customers log into "}
                            </span>
                            {" "}
                          </a>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      <div className="w-97.5 block relative mr-[0.9375rem] shrink-0 max-md:w-[17.0625rem] md:max-lg:w-[361.5px] 2xl:w-[603.3px]">
                        <div className="flex relative flex-col h-full">
                          <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-surface-2" />
                          {" "}
                          <div className="flex relative z-2 p-5 justify-center items-center overflow-hidden aspect-[464/392]">
                            <ul className="w-[159.3px] h-3.5 flex absolute top-5 left-5 min-w-0 gap-3.5 text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                              <li className="list-item">
                                Video
                              </li>
                              <li className="list-item">
                                Generative AI
                              </li>
                            </ul>
                            {" "}
                            <div className="w-1/2 h-[144.7px] block relative max-md:h-[95.3px] max-lg:w-auto md:max-lg:h-[132.7px] 2xl:h-[14.675rem]">
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/ai-automation/images/0fcf43eceab2.avif\")" }} aria-hidden="true" />
                              {" "}
                              <c-dato-image class="w-[10.9375rem] block absolute opacity-1 h-full 2xl:w-[281.7px]" id="datoimage-48">
                                <picture className="w-full block h-full">
                                  <source className="inline" sizes="(max-width: 512px) 100vw, 512px" srcSet="/assets/ai-automation/images/59a073098db5.avif 128w, /assets/ai-automation/images/11f98b26cc05.avif 256w, /assets/ai-automation/images/56c4bf0f22f3.avif 384w, /assets/ai-automation/images/0fcf43eceab2.avif 512w" />
                                  {" "}
                                  <img className="w-full block max-w-full overflow-clip object-contain aspect-[512/103] align-middle h-full" data-component="image" alt="" src="/assets/ai-automation/images/0fcf43eceab2.avif" />
                                  {" "}
                                </picture>
                                {" "}
                              </c-dato-image>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="flex relative z-2 p-5 flex-col justify-between grow gap-3.5">
                            <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                              {" Forecasting that a planning team finally stopped overriding "}
                            </h3>
                            {" "}
                            <div className="flex justify-between items-center">
                              <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                                Read Case Study
                              </span>
                              {" "}
                              <span className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
                                {" "}
                                <Icon6 />
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/work/orbit-labs-demand-forecasting">
                            {" "}
                            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                              {" Forecasting that a planning team finally stopped overriding "}
                            </span>
                            {" "}
                          </a>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </c-carousel-tile>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </main>
  );
}
