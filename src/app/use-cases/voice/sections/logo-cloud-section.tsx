import ListRow, { type ListRowData } from "../components/list-row";
import TextLink, { type TextLinkData } from "../components/text-link";
import Icon from "../svgs/svg-icon";
import ListRow2 from "../components/list-row2";
import Illustration from "../svgs/svg-illustration";
import Illustration2 from "../svgs/svg-illustration2";
import Illustration3 from "../svgs/svg-illustration3";
import Logo, { type LogoData } from "../components/logo";
import MediaCard from "../components/media-card";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import { Logo_meta } from "../ditto-meta";
import { ListRow_styles, TextLink_styles, Logo_styles, MediaCard_styles } from "../_styles";
import { listRow2Data as listRow2DataContent, cards as cardsContent } from "../content";
import UseCasesDropdown from "../../../ditto/UseCasesDropdown";
const ListRow_data: ListRowData[] = [
    { href: "/pricing", target: "_self", id: "scrambletext-19", text: " Pricing " },
    { href: "https://docs.cerebrium.ai/", target: "_blank", id: "scrambletext-20", text: " Docs " },
    { href: "/blog", target: "_self", id: "scrambletext-21", text: " Blog " },
    { href: "/about", target: "_self", id: "scrambletext-22", text: " Company " }
];
const TextLink_data: TextLinkData[] = [
    { kind: "link", href: "https://dashboard.cerebrium.ai/login", id: "scrambletext-23", text: " Log in " },
    { kind: "link", href: "https://dashboard.cerebrium.ai/signup", id: "scrambletext-24", text: " Sign up " },
    { href: "https://dashboard.cerebrium.ai/login", id: "scrambletext-25", text: " Log in " }
];
const Logo_data: LogoData[] = [
    { ariahidden: "true", style: { maskImage: "url(\"/assets/voice/svg/4417c17ef015.svg\")" }, height: "24", imgSrc: "/assets/voice/svg/4417c17ef015.svg", width: "81" },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/voice/images/2752282a18c7.png\")" }, height: "269", imgSrc: "/assets/voice/images/2752282a18c7.png", width: "1280" },
    { style: { maskImage: "url(\"/assets/voice/svg/22ef432010b6.svg\")" }, height: "28", imgSrc: "/assets/voice/svg/22ef432010b6.svg", width: "123" },
    { style: { maskImage: "url(\"/assets/voice/svg/5cc158def43b.svg\")" }, height: "80", imgSrc: "/assets/voice/svg/5cc158def43b.svg", width: "80" },
    { style: { maskImage: "url(\"/assets/voice/svg/c2ff037e4dc4.svg\")" }, height: "33", imgSrc: "/assets/voice/svg/c2ff037e4dc4.svg", width: "146" },
    { style: { maskImage: "url(\"/assets/voice/svg/87722bcc21a1.svg\")" }, height: "59", imgSrc: "/assets/voice/svg/87722bcc21a1.svg", width: "317" },
    { style: { maskImage: "url(\"/assets/voice/images/2752282a18c7.png\")" }, height: "269", imgSrc: "/assets/voice/images/2752282a18c7.png", width: "1280" },
    { style: { maskImage: "url(\"/assets/voice/svg/4417c17ef015.svg\")" }, height: "24", imgSrc: "/assets/voice/svg/4417c17ef015.svg", width: "81" },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/voice/svg/22ef432010b6.svg\")" }, height: "28", imgSrc: "/assets/voice/svg/22ef432010b6.svg", width: "123" },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/voice/svg/5cc158def43b.svg\")" }, height: "80", imgSrc: "/assets/voice/svg/5cc158def43b.svg", width: "80" }
];
/** Logo Cloud section. */
export default function LogoCloudSection({ listRowData = ListRow_data, textLinkData = TextLink_data, listRow2Data = listRow2DataContent, logoData = Logo_data, cards = cardsContent } = {}) {
  return (
    <main className="block">
      <div className="block">
        <c-header class="inline" id="header-47">
          {" "}
          <header className="h-20.5 block absolute inset-x-0 z-90 py-3.5 text-background pointer-events-none max-lg:h-18 max-lg:py-[0.9375rem]">
            <div className="h-full flex relative z-3 max-w-500 px-10 justify-between pointer-events-none max-lg:px-[0.9375rem]">
              <a className="flex items-center gap-[0.9375rem] cursor-pointer" data-ditto-id="menu-trigger-link" data-component="link" href="/">
                {" "}
                <span className="w-6 h-6 flex flex-col justify-between max-lg:w-5.5 max-lg:h-5.5">
                  {" "}
                  <span className="h-1 flex justify-end">
                    {" "}
                    <span className="w-[1.1875rem] block rounded-md bg-primary" />
                    {" "}
                  </span>
                  {" "}
                  <span className="h-1 flex gap-[0.1875rem]">
                    {" "}
                    <span className="w-[0.8125rem] block rounded-md bg-primary" />
                    {" "}
                    <span className="w-1 block rounded-md bg-primary" />
                    {" "}
                  </span>
                  {" "}
                  <span className="h-1 flex justify-end">
                    {" "}
                    <span className="w-[1.1875rem] block rounded-md bg-primary" />
                    {" "}
                  </span>
                  {" "}
                </span>
                {" "}
                <span className="block text-[1.625rem] leading-[2.4375rem] tracking-[-0.39px] max-lg:text-[1.375rem] max-lg:leading-[2.0625rem] max-lg:tracking-[-0.33px]">
                  Cerebrium
                </span>
                {" "}
              </a>
              {" "}
              <nav className="flex justify-end items-center grow gap-[0.9375rem] pointer-events-none" data-component="nav">
                <ul className="h-full flex relative pl-2.5 rounded-[7px] [list-style-type:none] list-outside bg-clr-0 [backdrop-filter:blur(17.5px)] max-lg:hidden">
                  <UseCasesDropdown labelClass="h-full flex relative z-2 isolate px-3.5 justify-center items-center gap-1.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[110.7px] before:h-8.5 before:bg-surface-2 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:origin-[55.3359px_17px] before:rounded-tl-sm max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]" />
                  {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                  <li className="block">
                    <button className="w-13.5 h-13.5 flex p-2.5 justify-center items-center text-center cursor-pointer" data-component="button" type="button">
                      <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                        Open menu
                      </span>
                      {" "}
                      <span className="w-full h-full flex relative isolate justify-center items-center before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-8.5 before:h-8.5 before:bg-surface-2 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:origin-[17px_17px] before:rounded-tl-sm max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]">
                        {" "}
                        <span className="w-3 h-[0.6875rem] flex flex-col justify-between">
                          {" "}
                          <span className="flex justify-center items-center gap-0.5">
                            {" "}
                            <span className="w-1 h-full block rounded-[100%] bg-background" />
                            {" "}
                            <span className="w-1 h-full block rounded-[100%] bg-background" />
                            {" "}
                          </span>
                          {" "}
                          <span className="flex justify-center items-center gap-0.5">
                            {" "}
                            <span className="w-1 h-full block rounded-[100%] bg-background" />
                            {" "}
                            <span className="w-1 h-full block rounded-[100%] bg-background" />
                            {" "}
                          </span>
                          {" "}
                        </span>
                        {" "}
                      </span>
                      {" "}
                    </button>
                    {" "}
                  </li>
                </ul>
                {" "}
                <div className="h-full flex gap-3">
                  {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
                  {" "}
                  <button className="min-h-13.5 hidden relative isolate min-w-0 px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-clr-1 [backdrop-filter:blur(16px)] cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:flex max-lg:px-3.5" aria-expanded="false" type="button">
                    {" "}
                    <c-scramble-text class="inline-block z-2 min-w-10.5 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase max-lg:block" id="scrambletext-26">
                      {" Menu "}
                    </c-scramble-text>
                    {" "}
                    <span className="inline-flex relative justify-center items-center pointer-events-none w-5 h-5 max-lg:flex">
                      {" "}
                      <span className="block min-w-0 align-middle pointer-events-none">
                        {" "}
                        <Icon />
                        {" "}
                      </span>
                      {" "}
                    </span>
                  </button>
                  {" "}
                </div>
                {" "}
              </nav>
              {" "}
            </div>
            {" "}
          </header>
          {" "}
        </c-header>
        {" "}
      </div>
      {" "}
      <div className="block">
        <div className="block">
          <c-hero-use-case class="block relative pb-[7.05rem] text-background max-md:pb-26 md:max-lg:pb-[6.7375rem] 2xl:pb-[7.45rem]" id="herousecase-42">
            <div className="min-h-screen flex relative z-1 pt-20.5 flex-col justify-end max-lg:pt-18">
              <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                <div className="grid gap-y-[2.55rem] gap-x-5 grid-cols-12 max-md:gap-y-8 max-lg:gap-x-[0.9375rem] max-md:grid-cols-1 md:max-lg:gap-y-9 2xl:gap-y-[2.95rem]">
                  <div className="block col-start-9 col-end-12 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-end-13">
                    <h1 className="flex items-center gap-2" data-component="heading">
                      <span className="w-1.5 h-1.5 block bg-primary [clip-path:inset(0%_round_7px)]" />
                      {" "}
                      <span className="block font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                        {" Voice "}
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
                    <c-split-title class="inline" id="splittitle-55">
                      {" "}
                      <div className="block font-favorit text-[5rem] font-light leading-[5rem] tracking-[-2px] max-md:text-[2.8125rem] max-md:leading-[2.8125rem] max-md:tracking-[-1.12px] md:max-lg:text-6xl md:max-lg:leading-[3.75rem] md:max-lg:tracking-[-1.49px] 2xl:text-[6.5625rem] 2xl:leading-[6.5625rem] 2xl:tracking-[-2.62px]" data-component="heading" aria-label="Infrastructure built for low-latency voice at scale">
                        <div className="inline-block relative" aria-hidden="true">
                          Infrastructure
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          built
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          for
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          low-latency
                        </div>
                        {" "}
                        <span className="inline text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }}>
                          <div className="inline-block relative -mb-[0.4rem] pb-[0.4rem] [background-clip:text] [-webkit-background-clip:text] max-md:-mb-[0.225rem] max-md:pb-[0.225rem] md:max-lg:-mb-[0.3rem] md:max-lg:pb-[0.3rem] 2xl:-mb-[0.525rem] 2xl:pb-[0.525rem]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }} aria-hidden="true">
                            voice
                          </div>
                        </span>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          at
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          scale
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
                          Deploy STT, LLM, and TTS pipelines with sub-second latency and autoscale globally in seconds - without managing infrastructure.
                        </p>
                      </div>
                      {" "}
                      <div className="flex flex-wrap gap-4">
                        <div className="block">
                          <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-color-001 bg-primary cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="https://dashboard.cerebrium.ai/signup" target="_self">
                            {" "}
                            <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-32">
                              {" Try it now "}
                            </c-scramble-text>
                            {" "}
                          </a>
                          {" "}
                        </div>
                        <div className="block">
                          <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-clr-1 [backdrop-filter:blur(16px)] cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/book-demo" target="_self">
                            {" "}
                            <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-33">
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
            </div>
            {" "}
            <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
              <c-voice-visualizer class="h-[299.5px] flex justify-between max-md:h-50 md:max-lg:h-[242.3px] 2xl:h-[23.1875rem]" id="voicevisualizer-49">
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.611894,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.496359,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.56682,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.607285,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.59806,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.530752,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.543209,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.614442,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.574327,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.591319,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.563047,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.581815,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.569398,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.541282,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.647817,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.569778,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.525418,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.587919,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.622107,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.579312,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.550147,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.607256,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.522654,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.58098,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.569691,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.558621,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.621377,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.588028,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.540838,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.45726,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.584547,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.604197,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.5948,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.512073,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.623561,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.548446,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.625993,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.528943,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.587039,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.583764,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.563447,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.628345,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.610151,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.548358,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.557903,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.703896,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.545505,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.598472,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.55325,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.594842,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.598563,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.510981,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.586455,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.539418,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.567861,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.486776,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.56802,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.612646,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.552816,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.585392,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.645346,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.537354,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.585986,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.591771,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.608346,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.528035,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.526316,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.533697,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.575891,0,0)] origin-[0.5px_299.5px] max-md:h-50 max-md:transform-[matrix(1,0,0,0.530147,0,0)] max-md:origin-[0.5px_200px] md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.549131,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.529144,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.519536,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.531741,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.615906,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.52867,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.578054,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.522883,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.56377,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.585899,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.68026,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.584954,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.515742,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.579571,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.516023,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.550481,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.539214,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.560145,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.533017,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.61096,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.559511,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.534481,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.599125,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.572529,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.537794,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.583833,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-background transform-[matrix(1,0,0,0.560026,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.517813,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.591053,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="w-px h-[299.5px] block bg-primary transform-[matrix(1,0,0,0.569043,0,0)] origin-[0.5px_299.5px] max-md:hidden md:max-lg:h-[242.3px] md:max-lg:transform-[matrix(1,0,0,0.583209,0,0)] md:max-lg:origin-[0.5px_242.25px] 2xl:h-[23.1875rem] 2xl:transform-[matrix(1,0,0,0.516214,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.554744,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.609481,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.569504,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.582541,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.597997,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.619166,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.598165,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.562976,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.555127,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.631314,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.432263,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.52961,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.640317,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.678196,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.6154,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.582296,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.496269,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.631147,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.586453,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.626228,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.620054,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.679168,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-background 2xl:transform-[matrix(1,0,0,0.573215,0,0)] 2xl:origin-[0.5px_371.047px]" />
                <div className="hidden 2xl:w-px 2xl:h-[23.1875rem] 2xl:block 2xl:bg-primary 2xl:transform-[matrix(1,0,0,0.461711,0,0)] 2xl:origin-[0.5px_371.047px]" />
              </c-voice-visualizer>
              {" "}
            </div>
            {" "}
          </c-hero-use-case>
          {" "}
          <div className="block relative z-1 -mt-15 rounded-4xl bg-background max-lg:-mt-7.5">
            <div className="block py-[78.1px] rounded-4xl bg-background max-md:py-10 md:max-lg:py-[46.3px] 2xl:py-[5.875rem]">
              <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                <div className="grid mb-[7.5625rem] gap-5 grid-cols-2 max-lg:hidden 2xl:mb-[150.3px]">
                  <div className="block max-w-120 text-balance">
                    <p className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]">
                      Infrastructure designed for real-time voice workloads and reliability at scale.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="block">
                    <c-split-title class="inline" id="splittitle-56">
                      {" "}
                      <div className="block -mt-[0.425rem] font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] 2xl:-mt-[0.55rem] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]" aria-label="Why Cerebrium for Voice?">
                        <div className="inline-block relative" aria-hidden="true">
                          Why
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          Cerebrium
                        </div>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          for
                        </div>
                        {" "}
                        <span className="inline text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }}>
                          <div className="inline-block relative -mb-[0.3375rem] pb-[0.3375rem] [background-clip:text] [-webkit-background-clip:text] 2xl:-mb-[0.4375rem] 2xl:pb-[0.4375rem]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }} aria-hidden="true">
                            Voice?
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
                <c-feature-cards class="grid mb-[78.1px] gap-5 grid-cols-[590px_590px] max-md:mb-14 max-lg:gap-[0.9375rem] max-md:grid-cols-[345px] md:max-lg:mb-[4.0875rem] md:max-lg:grid-cols-[738px] 2xl:mb-[5.875rem] 2xl:grid-cols-[910px_910px]" id="featurecards-54">
                  <div className="block">
                    <div className="h-[15.7875rem] block sticky top-24.5 max-lg:h-auto max-lg:static max-lg:top-auto 2xl:h-[305.7px]">
                      <h2 className="flex mb-12.5 items-center gap-2 max-lg:mb-6" data-component="heading">
                        <span className="w-1.5 h-1.5 block bg-foreground [clip-path:inset(0%_round_7px)]" />
                        {" "}
                        <span className="block font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase" data-ditto-id="motion-span">
                          {" Features "}
                        </span>
                        {" "}
                      </h2>
                      {" "}
                      <div className="hidden mb-[78.1px] max-lg:block max-md:mb-14 md:max-lg:mb-[4.0875rem]">
                        <c-split-title class="inline" id="splittitle-57">
                          {" "}
                          <div className="block font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px]" aria-label="Why Cerebrium for Voice?">
                            <div className="inline-block relative" aria-hidden="true">
                              Why
                            </div>
                            {" "}
                            <div className="inline-block relative" aria-hidden="true">
                              Cerebrium
                            </div>
                            {" "}
                            <div className="inline-block relative" aria-hidden="true">
                              for
                            </div>
                            {" "}
                            <span className="inline text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }}>
                              <div className="inline-block relative -mb-[0.3375rem] pb-[0.3375rem] [background-clip:text] [-webkit-background-clip:text] max-md:-mb-[0.2rem] max-md:pb-[0.2rem] md:max-lg:mb-[-4.1px] md:max-lg:pb-1" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }} aria-hidden="true">
                                Voice?
                              </div>
                            </span>
                          </div>
                          {" "}
                        </c-split-title>
                        {" "}
                      </div>
                      {" "}
                      <ul className="block [list-style-type:none] list-outside max-lg:hidden">
                        {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} />)}
                      </ul>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="grid gap-[78.1px] grid-cols-1 max-w-3xl max-md:gap-14 md:max-lg:gap-[4.0875rem] 2xl:gap-[5.875rem]">
                    <div className="block" id="co-located-compute">
                      <c-feature-card-workloads-animation class="flex flex-col gap-6" id="featurecardworkloadsanimation-48">
                        <div className="grid relative p-6 rounded-[15px] justify-center content-center grid-cols-[500px] overflow-hidden bg-color-001 aspect-[707/600] max-md:grid-cols-[297px] 2xl:grid-cols-[558px]">
                          <c-inner-parallax class="w-147.5 h-[500.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[18.3rem] md:max-lg:w-184.5 md:max-lg:h-[626.3px] 2xl:w-192 2xl:h-[40.7375rem]">
                            <c-dato-image class="inline" id="datoimage-43">
                              {" "}
                              <picture className="w-147.5 h-[31.3125rem] block absolute top-0 left-0 text-clr-2 bg-cover [background-position:50%_50%] bg-no-repeat transform-[matrix(1,0,0,1,0,-80)] max-md:w-[21.5625rem] max-md:h-[18.3125rem] max-lg:transform-[none] md:max-lg:w-184.5 md:max-lg:h-156.5 2xl:w-192 2xl:h-163 2xl:transform-[matrix(1,0,0,1,0,-108)]" style={{ backgroundImage: "url(data:image/jpeg" }}>
                                <source className="inline" sizes="(max-width: 100px) 100vw, 33vw" srcSet="/assets/voice/images/66b5686b2f31.jpg 325w, /assets/voice/images/d6191539cbe2.jpg 650w, /assets/voice/images/527734c524b8.jpg 975w, /assets/voice/images/48ef972392c0.jpg 1300w" />
                                {" "}
                                <img className="w-full h-[43.3125rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.3125rem] max-lg:top-0 md:max-lg:h-156.5 2xl:h-211" data-component="image" alt="" src="/assets/voice/images/48ef972392c0.jpg" />
                                {" "}
                              </picture>
                              {" "}
                            </c-dato-image>
                            {" "}
                          </c-inner-parallax>
                          {" "}
                          <div className="block relative z-2 max-w-125 rounded-[10px] bg-clr-4 [backdrop-filter:blur(50px)] aspect-[558/359] w-full 2xl:max-w-none">
                            <Illustration />
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            Zero network hops between workloads
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              Run STT, LLM, and TTS workloads on co-located CPU and GPU infrastructure, eliminating cross-network latency and delivering faster end-to-end voice interactions.
                            </p>
                          </div>
                          {" "}
                          <div className="flex flex-wrap gap-4" />
                          {" "}
                        </div>
                        {" "}
                      </c-feature-card-workloads-animation>
                      {" "}
                    </div>
                    <div className="block" id="instant-startups">
                      <c-feature-card-containers-animation class="flex flex-col gap-6" id="featurecardcontainersanimation-50">
                        <div className="block rounded-[15px] overflow-hidden bg-surface-2 aspect-[707/600]">
                          <Illustration2 />
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            Burst to thousands of containers in seconds
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              <span className="inline" />
                              <span className="inline" />
                              <span className="inline">
                                Rapid autoscaling handles sudden spikes in call volume, scaling to thousands of containers in seconds without pre-provisioning or degraded performance.
                              </span>
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
                    <div className="block" id="global-regions">
                      <c-feature-card-world-map-animation class="flex relative flex-col gap-6" id="featurecardworldmapanimation-51">
                        <div className="block relative">
                          <div className="w-[9.075rem] h-6 block absolute top-3 left-3 z-2 md:max-lg:top-6 md:max-lg:left-6 2xl:top-6 2xl:left-6">
                            <span className="inline p-2 rounded-[7px] text-background font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase bg-foreground">
                              Capacity : 2500+
                            </span>
                            {" "}
                          </div>
                          {" "}
                          <div className="h-[1.875rem] block absolute top-[28.675rem] inset-x-3 z-2 max-md:top-[18.9375rem] md:max-lg:top-6 md:max-lg:right-6 md:max-lg:left-[21.5625rem] md:max-lg:max-w-[50%] 2xl:top-6 2xl:right-6 2xl:left-90 2xl:max-w-[50%]">
                            <span className="block p-2 rounded-[7px] overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap bg-background">
                              {" Regions : us-east-1, eu-west-2, eu-north-1, ap-south-1 "}
                            </span>
                            {" "}
                          </div>
                          {" "}
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
                            Close to users, compliant by design
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              <span className="inline" />
                              <span className="inline" />
                              <span className="inline" />
                              <span className="inline">
                                Deploy voice workloads in regions closest to your users to minimize latency while meeting data residency and compliance requirements.
                              </span>
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
                    <div className="block" id="strategic-partnerships">
                      <c-feature-card-logo-carousel class="flex flex-col gap-6" id="featurecardlogocarousel-52">
                        <div className="flex relative rounded-[15px] justify-center items-center overflow-hidden aspect-[707/600] bg-color-001">
                          <c-inner-parallax class="w-147.5 h-[500.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[18.3rem] md:max-lg:w-184.5 md:max-lg:h-[626.3px] 2xl:w-192 2xl:h-[40.7375rem]">
                            <c-dato-image class="inline" id="datoimage-44">
                              {" "}
                              <picture className="w-147.5 h-[31.3125rem] block absolute top-0 left-0 text-clr-2 bg-cover [background-position:50%_50%] bg-no-repeat transform-[matrix(1,0,0,1,0,80)] max-md:w-[21.5625rem] max-md:h-[18.3125rem] max-lg:transform-[none] md:max-lg:w-184.5 md:max-lg:h-156.5 2xl:w-192 2xl:h-163 2xl:transform-[matrix(1,0,0,1,0,108)]" style={{ backgroundImage: "url(data:image/jpeg" }}>
                                <source className="inline" sizes="(max-width: 100px) 100vw, 33vw" srcSet="/assets/voice/images/e02da3a8ca29.jpg 325w, /assets/voice/images/146ca5c3ac39.jpg 650w, /assets/voice/images/76279b947570.jpg 975w, /assets/voice/images/a470a94c4455.jpg 1300w" />
                                {" "}
                                <img className="w-full h-[43.3125rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.3125rem] max-lg:top-0 md:max-lg:h-156.5 2xl:h-211" data-component="image" alt="" src="/assets/voice/images/a470a94c4455.jpg" />
                                {" "}
                              </picture>
                              {" "}
                            </c-dato-image>
                            {" "}
                          </c-inner-parallax>
                          {" "}
                          <div className="w-1/3 h-full block relative z-2">
                            {logoData.map((d, i) => <Logo key={i} d={d} meta={Logo_meta[i]} styles={Logo_styles[i]} />)}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            Use the tools you already trust
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              Build voice applications with your preferred frameworks - like LiveKit and Pipecat - and deploy best-in-class STT and TTS models locally on Cerebrium through strategic partnerships with providers such as Deepgram, AssemblyAI, Rime, and Resemble AI.
                            </p>
                          </div>
                          {" "}
                          <div className="flex flex-wrap gap-4">
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                      </c-feature-card-logo-carousel>
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
                  <c-split-title class="block" id="splittitle-58">
                    <div className="block font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]" data-ditto-id="motion-examples" aria-label="Examples">
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
                    </div>
                    {" "}
                    <div className="w-full grid gap-5 max-lg:gap-[0.9375rem] grid-cols-1 md:grid-cols-2">
                      {cards.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
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
                  <c-carousel-tile class="block relative z-1" id="carouseltile-53">
                    <div className="flex mb-[2.55rem] justify-between items-center max-md:mb-8 md:max-lg:mb-9 2xl:mb-[2.95rem]">
                      <div className="block">
                        <h3 className="block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-[2.5625rem] 2xl:leading-[2.9375rem] 2xl:tracking-[-1.03px]" data-component="heading">
                          Real teams building with voice on Cerebrium
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <div className="block max-lg:hidden">
                        <button className="inline-flex relative opacity-50 isolate rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-background cursor-pointer h-[3.375rem] w-[3.375rem] max-lg:h-[2.625rem] max-lg:w-[2.625rem]" data-ditto-id="interaction-previous-slide" data-component="button" aria-label="Previous slide" disabled type="button">
                          {" "}
                          <c-scramble-text class="w-px h-px block absolute z-2 min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="scrambletext-38" />
                          {" "}
                          <span className="flex relative justify-center items-center pointer-events-none w-5 h-5">
                            {" "}
                            <Icon2 />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <button className="inline-flex relative isolate rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-background cursor-pointer h-[3.375rem] w-[3.375rem] max-lg:h-[2.625rem] max-lg:w-[2.625rem]" data-ditto-id="interaction-next-slide" data-component="button" aria-label="Next slide" type="button">
                          {" "}
                          <c-scramble-text class="w-px h-px block absolute z-2 min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="scrambletext-39" />
                          {" "}
                          <span className="flex relative justify-center items-center pointer-events-none w-5 h-5">
                            {" "}
                            <Icon3 />
                            {" "}
                          </span>
                        </button>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="box-content flex relative z-1 items-stretch" data-ditto-id="interaction-div">
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
                            <div className="w-1/2 h-[144.7px] block relative max-md:h-[95.3px] md:max-lg:h-[132.7px] 2xl:h-[14.675rem]">
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/voice/svg/b5a2c37372fd.svg\")" }} aria-hidden="true" />
                              {" "}
                              <img className="w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain aspect-[auto_2471/489] align-middle h-full" data-component="image" alt="" height="489" src="/assets/voice/svg/b5a2c37372fd.svg" width="2471" />
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="flex relative z-2 p-5 flex-col justify-between grow gap-3.5">
                            <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                              {" How Tavus Scaled Human-like AI Experiences with Cerebrium "}
                            </h3>
                            {" "}
                            <div className="flex justify-between items-center">
                              <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                                Read Case Study
                              </span>
                              {" "}
                              <span className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
                                {" "}
                                <Icon4 />
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/how-tavus-scaled-human-like-ai-experiences-with-cerebrium">
                            {" "}
                            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                              {" How Tavus Scaled Human-like AI Experiences with Cerebrium "}
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
                            <div className="w-1/2 h-[144.7px] block relative max-md:h-[95.3px] max-md:w-auto md:max-lg:h-[132.7px] 2xl:h-[14.675rem]">
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/voice/images/0fcf43eceab2.avif\")" }} aria-hidden="true" />
                              {" "}
                              <c-dato-image class="w-[10.9375rem] block absolute opacity-1 h-full md:max-lg:w-[10.05rem] 2xl:w-[281.7px]" id="datoimage-45">
                                <picture className="w-full block h-full">
                                  <source className="inline" sizes="(max-width: 512px) 100vw, 512px" srcSet="/assets/voice/images/59a073098db5.avif 128w, /assets/voice/images/11f98b26cc05.avif 256w, /assets/voice/images/56c4bf0f22f3.avif 384w, /assets/voice/images/0fcf43eceab2.avif 512w" />
                                  {" "}
                                  <img className="w-full block max-w-full overflow-clip object-contain aspect-[512/103] align-middle h-full" data-component="image" alt="" src="/assets/voice/images/0fcf43eceab2.avif" />
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
                              {" Scaling AI Tutors: How Creatium Achieved 18x Faster Cold Starts with Cerebrium "}
                            </h3>
                            {" "}
                            <div className="flex justify-between items-center">
                              <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                                Read Case Study
                              </span>
                              {" "}
                              <span className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
                                {" "}
                                <Icon4 />
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/scaling-ai-tutors-how-creatium-achieved-18x-faster-cold-starts-with-cerebrium">
                            {" "}
                            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                              {" Scaling AI Tutors: How Creatium Achieved 18x Faster Cold Starts with Cerebrium "}
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
                            <ul className="w-[17.525rem] h-3.5 flex absolute top-5 left-5 min-w-0 gap-3.5 text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                              <li className="list-item">
                                Digital Avatars
                              </li>
                              <li className="list-item">
                                Virtual Assistants
                              </li>
                            </ul>
                            {" "}
                            <div className="w-1/2 h-[144.7px] block relative max-md:h-[95.3px] max-lg:w-auto md:max-lg:h-[132.7px] 2xl:h-[14.675rem]">
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/voice/svg/2d60944a7d85.svg\")" }} aria-hidden="true" />
                              {" "}
                              <img className="w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain aspect-[auto_415/119] align-middle h-full" data-component="image" alt="" height="119" src="/assets/voice/svg/2d60944a7d85.svg" width="415" />
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="flex relative z-2 p-5 flex-col justify-between grow gap-3.5">
                            <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                              {" How bitHuman Scaled Digital Humans 10x Faster with Cerebrium "}
                            </h3>
                            {" "}
                            <div className="flex justify-between items-center">
                              <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                                Read Case Study
                              </span>
                              {" "}
                              <span className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
                                {" "}
                                <Icon4 />
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/how-bithuman-scaled-digital-humans-10x-faster-with-cerebrium">
                            {" "}
                            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                              {" How bitHuman Scaled Digital Humans 10x Faster with Cerebrium "}
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
                            <ul className="w-[151.3px] h-3.5 flex absolute top-5 left-5 min-w-0 gap-3.5 text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                              <li className="list-item">
                                LLMs
                              </li>
                              <li className="list-item">
                                Generative AI
                              </li>
                            </ul>
                            {" "}
                            <div className="block relative h-1/2 w-1/2">
                              <div className="h-[144.7px] block bg-foreground max-md:h-[95.3px] md:max-lg:h-[132.7px] 2xl:h-[14.675rem]" style={{ maskImage: "url(\"/assets/voice/svg/b415e5819d2f.svg\")" }} aria-hidden="true" />
                              {" "}
                              <img className="block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain aspect-[auto_900/364] align-middle h-full w-full" alt="" height="364" src="/assets/voice/svg/b415e5819d2f.svg" width="900" />
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="flex relative z-2 p-5 flex-col justify-between grow gap-3.5">
                            <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading" aria-hidden="true">
                              {" Lelapa AI uses Cerebrium to Break Language Barriers "}
                            </h3>
                            {" "}
                            <div className="flex justify-between items-center">
                              <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                                Read Case Study
                              </span>
                              {" "}
                              <span className="h-6 block opacity-0 [translate:-4px]" aria-hidden="true">
                                {" "}
                                <Icon5 />
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/lelapa-ai-uses-cerebrium-to-break-language-barriers">
                            {" "}
                            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                              {" Lelapa AI uses Cerebrium to Break Language Barriers "}
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
