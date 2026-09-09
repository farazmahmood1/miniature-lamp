import Logo, { type LogoData } from "../components/logo";
import ListRow3 from "../components/list-row3";
import ListRow4 from "../components/list-row4";
import ListRow5 from "../components/list-row5";
import { listRow3Data as listRow3DataContent, listRow4Data as listRow4DataContent, listRow5Data as listRow5DataContent } from "../content";
const Logo_data: LogoData[] = [
    { href: "https://x.com/cerebriumai", label: "Twitter", dataicon: "x", icon: <>
            <path fill="currentColor" d="M18.666 4.592h2.896l-6.326 7.23 7.442 9.837H16.85l-4.563-5.966-5.222 5.966H4.169l6.765-7.733-7.138-9.334H9.77l4.125 5.453zM17.65 19.926h1.605L8.899 6.234H7.177z" />
            </> },
    { href: "https://github.com/CerebriumAI", label: "GitHub", dataicon: "github", icon: <>
            <path fill="currentColor" d="M13.106 1.09c-6.66 0-12.062 5.493-12.062 12.269 0 5.42 3.456 10.019 8.249 11.641.603.114.824-.266.824-.59 0-.293-.011-1.26-.016-2.284-3.356.742-4.064-1.448-4.064-1.448-.549-1.418-1.34-1.795-1.34-1.795-1.094-.761.083-.746.083-.746 1.211.087 1.85 1.265 1.85 1.265 1.075 1.875 2.821 1.333 3.51 1.02.107-.793.42-1.335.765-1.641-2.68-.31-5.495-1.362-5.495-6.063 0-1.34.47-2.434 1.242-3.293-.125-.31-.538-1.557.117-3.247 0 0 1.013-.33 3.318 1.258a11.4 11.4 0 0 1 3.02-.413 11.4 11.4 0 0 1 3.021.413c2.302-1.587 3.314-1.258 3.314-1.258.656 1.69.243 2.938.118 3.247.773.86 1.241 1.954 1.241 3.293 0 4.712-2.821 5.75-5.507 6.053.432.381.818 1.128.818 2.272 0 1.642-.014 2.963-.014 3.367 0 .326.217.709.828.588 4.79-1.624 8.242-6.22 8.242-11.64 0-6.775-5.4-12.267-12.062-12.267" />
            </> },
    { href: "https://discord.gg/ATj6USmeE2", label: "Discord", dataicon: "discord", icon: <>
            <path fill="currentColor" d="M21.687 6.352C19.709 4.76 16.579 4.49 16.445 4.48a.49.49 0 0 0-.49.292 3 3 0 0 0-.152.413c1.308.221 2.916.666 4.37 1.569a.497.497 0 1 1-.524.844c-2.5-1.55-5.623-1.629-6.224-1.629-.602 0-3.726.078-6.224 1.63a.497.497 0 0 1-.524-.844c1.454-.902 3.061-1.349 4.37-1.568a4 4 0 0 0-.15-.415.49.49 0 0 0-.493-.292c-.134.01-3.263.28-5.269 1.893-1.046.969-3.14 6.63-3.14 11.524q0 .131.065.247c1.445 2.539 5.387 3.203 6.286 3.232h.016a.5.5 0 0 0 .402-.204l.908-1.25c-2.452-.633-3.704-1.709-3.776-1.773a.497.497 0 0 1 .658-.745c.03.027 2.336 1.984 6.87 1.984 4.543 0 6.85-1.965 6.873-1.984a.498.498 0 0 1 .656.745c-.072.064-1.324 1.14-3.776 1.773l.909 1.25a.5.5 0 0 0 .402.204h.015c.9-.03 4.842-.693 6.286-3.232a.5.5 0 0 0 .066-.247c0-4.894-2.094-10.555-3.168-11.545m-11.493 9.557c-.96 0-1.74-.889-1.74-1.988s.78-1.988 1.74-1.988c.961 0 1.74.89 1.74 1.988 0 1.099-.779 1.988-1.74 1.988m6.461 0c-.96 0-1.74-.889-1.74-1.988s.78-1.988 1.74-1.988c.961 0 1.74.89 1.74 1.988 0 1.099-.779 1.988-1.74 1.988" />
            </> },
    { href: "https://www.linkedin.com/company/cerebrium/", label: "LinkedIn", dataicon: "linkedin", icon: <>
            <path fill="currentColor" fillRule="evenodd" d="M2.903 4.562a1.66 1.66 0 0 1 1.66-1.66H21.11a1.66 1.66 0 0 1 1.662 1.66v16.546a1.66 1.66 0 0 1-1.66 1.662H4.562a1.66 1.66 0 0 1-1.66-1.66zm7.864 5.915h2.69v1.351c.389-.776 1.382-1.475 2.875-1.475 2.862 0 3.54 1.547 3.54 4.385v5.258h-2.896v-4.611c0-1.617-.388-2.529-1.374-2.529-1.369 0-1.938.983-1.938 2.529v4.61h-2.897zM5.8 19.872h2.897v-9.52H5.8zM9.112 7.248a1.863 1.863 0 1 1-3.725.082 1.863 1.863 0 0 1 3.725-.082" clipRule="evenodd" />
            </> }
];
/** Site footer. */
export default function Footer({ logos = Logo_data, listRow3Data = listRow3DataContent, listRow4Data = listRow4DataContent, listRow5Data = listRow5DataContent } = {}) {
  return (
    <footer className="block relative -mt-7.5 pt-7.5 text-background">
      <div className="block relative">
        <div className="flex relative z-1 max-w-500 pt-10 px-10 flex-col gap-30 max-lg:pt-7 max-lg:px-[0.9375rem] max-lg:gap-12">
          <div className="grid gap-5 grid-cols-2 max-lg:gap-10 max-lg:grid-cols-1">
            <div className="block">
              <ul className="flex gap-4 [list-style-type:none] list-outside">
                {logos.map((d, i) => <Logo key={i} d={d} />)}
              </ul>
              {" "}
            </div>
            {" "}
            <div className="grid gap-y-50 gap-x-5 grid-cols-2 max-lg:gap-y-32.5 max-lg:gap-x-[0.9375rem]">
              <div className="block">
                <h2 className="block opacity-65 mb-5 text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]" data-component="heading">
                  Use Cases
                </h2>
                {" "}
                <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                  {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
                </ul>
                {" "}
              </div>
              {" "}
              <div className="block">
                <h2 className="block opacity-65 mb-5 text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]" data-component="heading">
                  Cerebrium
                </h2>
                {" "}
                <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                  {listRow4Data.map((d, i) => <ListRow4 key={i} d={d} />)}
                </ul>
                {" "}
              </div>
              {" "}
              <div className="flex flex-col gap-6 col-start-[span_2] col-end-[span_2]">
                <p className="w-full max-w-180 block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-balance max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-[2.5625rem] 2xl:leading-[2.9375rem] 2xl:tracking-[-1.03px]">
                  Start serving LLMs in production today or talk to us about your workload.
                </p>
                {" "}
                <div className="block">
                  <div className="flex flex-wrap gap-4">
                    <div className="block">
                      <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-color-001 bg-accent cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="https://dashboard.cerebrium.ai/signup" rel="noopener noreferrer" target="_blank">
                        {" "}
                        <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-41">
                          {" Get started "}
                        </c-scramble-text>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="block">
                      <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-clr-1 [backdrop-filter:blur(16px)] cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/book-demo" target="_self">
                        {" "}
                        <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-42">
                          {" Book a demo "}
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
          <div className="border-t border-solid border-t-clr-4 grid py-7.5 gap-5 grid-cols-12 max-lg:items-end max-lg:gap-y-2 max-lg:gap-x-[0.9375rem] max-md:grid-cols-2">
            <div className="flex justify-end order-[2] col-start-[span_10] col-end-[span_10] max-lg:col-start-1 max-lg:[justify-content:initial] max-lg:order-[initial] max-lg:[grid-column-end:initial]">
              <ul className="flex gap-6 [list-style-type:none] list-outside max-lg:flex-col max-lg:gap-2">
                {listRow5Data.map((d, i) => <ListRow5 key={i} d={d} />)}
                <li className="list-item">
                  <button className="inline-block font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] text-left uppercase cursor-pointer whitespace-nowrap hover:underline" data-component="button" type="button">
                    {" Cookie Preferences "}
                  </button>
                  {" "}
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div className="block order-[1] col-start-[span_2] col-end-[span_2] max-lg:col-start-2 max-lg:row-start-1 max-lg:text-right max-lg:order-[initial] max-lg:[grid-column-end:initial]">
              {" 2026 © Cerebrium "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
    </footer>
  );
}
