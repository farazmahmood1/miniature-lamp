import ListRow, { type ListRowData } from "../components/list-row";
import TextLink, { type TextLinkData } from "../components/text-link";
import Icon from "../svgs/svg-icon";
import Logo, { type LogoData } from "../components/logo";
import ListRow2 from "../components/list-row2";
import Illustration from "../svgs/svg-illustration";
import MediaCard, { type MediaCardData } from "../components/media-card";
import Illustration2 from "../svgs/svg-illustration2";
import Illustration3 from "../svgs/svg-illustration3";
import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
import Icon4 from "../svgs/svg-icon4";
import { ListRow_styles, TextLink_styles, Logo_styles, MediaCard_styles } from "../_styles";
import { listRow2Data as listRow2DataContent } from "../content";
import UseCasesDropdown from "../../../ditto/UseCasesDropdown";
const ListRow_data: ListRowData[] = [
    { href: "/pricing", target: "_self", id: "scrambletext-18", text: " Pricing " },
    { href: "https://docs.cerebrium.ai/", target: "_blank", id: "scrambletext-19", text: " Docs " },
    { href: "/blog", target: "_self", id: "scrambletext-20", text: " Blog " },
    { href: "/about", target: "_self", id: "scrambletext-21", text: " Company " }
];
const TextLink_data: TextLinkData[] = [
    { kind: "link", href: "https://dashboard.cerebrium.ai/login", id: "scrambletext-22", text: " Log in " },
    { kind: "link", href: "https://dashboard.cerebrium.ai/signup", id: "scrambletext-23", text: " Sign up " },
    { href: "https://dashboard.cerebrium.ai/login", id: "scrambletext-24", text: " Log in " }
];
const Logo_data: LogoData[] = [
    { icon: <>
          <defs>
            <path id="media-transform-path-0-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-0-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
          </> },
    { kind: "image", icon: <>
          <defs>
            <path id="media-transform-path-0-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-0-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M75.72 117.24 C76.83 131.69 90.56 143.2 107.24 142.09 123.91 140.97 137.64 127.25 138.75 110.57 139.86 93.9 128.35 80.17 113.9 79.06 99.45 77.94 87.94 89.45 89.05 103.9 M97.34 112.73 C98.82 107.92 100.3 103.11 101.78 98.3 108.71 102.94 115.64 107.59 122.57 112.23 118.6 116.87 114.63 121.52 110.67 126.07 " fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
          </> },
    { kind: "image", icon: <>
          <defs>
            <path id="media-transform-path-1-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-1-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M106.71 85.39 C110.99 101.69 105.36 115.68 97.42 119.77 89.64 124.14 84.18 118.61 88.63 110.77 92.82 102.87 106.91 97.29 123.32 101.62 139.74 105.95 153.83 120.18 158.03 136.73 M132.21 92.05 C126.51 93.29 120.42 94.45 114.24 95.21 112.33 103.39 110.52 111.19 109.09 118.9 104.1 122.51 99.5 126.21 95 130.31 90.49 134.4 85.89 138.88 80.9 143.46 " fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </> },
    { kind: "image", icon: <>
          <defs>
            <path id="media-transform-path-2-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-2-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M64.24 133.44 C68.03 142.81 82.47 149.68 99.39 145.9 116.32 142.12 130.76 127.68 134.54 110.75 138.33 93.81 131.45 79.38 122.09 75.59 112.72 71.81 105.84 78.68 109.62 88.05 M82.28 95.5 C87.32 95.24 92.37 94.97 97.41 94.69 107.05 102.41 116.7 110.13 126.34 117.83 126.79 125.55 127.22 133.27 127.66 140.91 " fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
          </> },
    { icon: <>
          <defs>
            <path id="media-transform-path-1-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-1-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </> },
    { kind: "image", icon: <>
          <defs>
            <path id="media-transform-path-3-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-3-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M140.49 110.49 C140.49 127.06 127.06 140.49 110.49 140.49 93.93 140.49 80.5 127.06 80.5 110.5 80.5 93.93 93.93 80.5 110.5 80.5 127.06 80.5 140.5 93.93 140.5 110.5 M103.6 119.89 C103.6 113.19 103.6 106.49 103.6 99.79 109.4 103.16 115.19 106.53 120.99 109.9 115.19 113.26 109.39 116.63 103.59 120 " fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
          </> },
    { icon: <>
          <defs>
            <path id="media-transform-path-3-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-3-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
          </> },
    { kind: "image", icon: <>
          <defs>
            <path id="media-transform-path-4-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-4-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </> },
    { kind: "image", icon: <>
          <defs>
            <path id="media-transform-path-5-image" d="M0.4 1.8L220.2 221.7M1.8 221.7L221.6 1.8" />
            <path id="media-transform-path-5-video" d="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </defs>
          <path data-media-transform="morph" d="M136.35 113.76 C136.71 129.43 124.08 142.07 108.4 141.71 92.73 141.35 80.1 127.99 80.46 111.59 81.15 94.84 94.85 81.12 111.57 80.4 128.32 79.71 142.03 92.02 142.74 107.36 M100.71 116.43 C101.24 110.53 101.73 104.62 102.21 98.67 108.31 102.46 114.41 106.21 120.56 109.95 118.28 112.06 116.05 114.18 113.83 116.34 111.61 118.51 109.37 120.71 107.1 122.92 " fill="none" strokeLinecap="round" strokeLinejoin="round" data-original="M140.5 110.5A30 30 0 0 1 110.5 140.5A30 30 0 0 1 80.5 110.5A30 30 0 0 1 110.5 80.5A30 30 0 0 1 140.5 110.5ZM103.6 119.9V99.8l17.4 10.1-17.4 10.1Z" />
          </> }
];
const MediaCard_data: MediaCardData[] = [
    { ariahidden: "true", style: { maskImage: "url(\"/assets/image-and-video/svg/c73fb6786013.svg\")" }, height: "46", imgSrc: "/assets/image-and-video/svg/c73fb6786013.svg", width: "46", title: "AWS Trainium", description: " AWS chip production inference " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/image-and-video/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/image-and-video/svg/bbf73e985df9.svg", width: "1919", title: "NVIDIA L4", description: " Efficient choice for low-latency, cost-sensitive tasks " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/image-and-video/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/image-and-video/svg/bbf73e985df9.svg", width: "1919", title: "NVIDIA A100", description: " Optimized for most LLM inference workloads " },
    { style: { maskImage: "url(\"/assets/image-and-video/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/image-and-video/svg/bbf73e985df9.svg", width: "1919", title: "NVIDIA H100", description: " Ideal for demanding inference and training tasks " },
    { style: { maskImage: "url(\"/assets/image-and-video/svg/04358fc6abba.svg\")" }, height: "66", imgSrc: "/assets/image-and-video/svg/04358fc6abba.svg", width: "276", title: "AMD MI300X", description: " High memory bandwidth for large context windows " },
    { style: { maskImage: "url(\"/assets/image-and-video/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/image-and-video/svg/bbf73e985df9.svg", width: "1919", title: "NVIDIA A100", description: " Optimized for most LLM inference workloads " },
    { style: { maskImage: "url(\"/assets/image-and-video/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/image-and-video/svg/bbf73e985df9.svg", width: "1919", title: "NVIDIA L4", description: " Efficient choice for low-latency, cost-sensitive tasks " },
    { style: { maskImage: "url(\"/assets/image-and-video/svg/c73fb6786013.svg\")" }, height: "46", imgSrc: "/assets/image-and-video/svg/c73fb6786013.svg", width: "46", title: "AWS Trainium", description: " AWS chip production inference " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/image-and-video/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/image-and-video/svg/bbf73e985df9.svg", width: "1919", title: "NVIDIA H100", description: " Ideal for demanding inference and training tasks " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/image-and-video/svg/04358fc6abba.svg\")" }, height: "66", imgSrc: "/assets/image-and-video/svg/04358fc6abba.svg", width: "276", title: "AMD MI300X", description: " High memory bandwidth for large context windows " },
    { ariahidden: "true", style: { maskImage: "url(\"/assets/image-and-video/svg/bbf73e985df9.svg\")" }, height: "1176", imgSrc: "/assets/image-and-video/svg/bbf73e985df9.svg", width: "1919", title: "NVIDIA A100", description: " Optimized for most LLM inference workloads " }
];
/** Cerebrium Use Cases section. */
export default function CerebriumUseCasesSection({ listRowData = ListRow_data, textLinkData = TextLink_data, logoData = Logo_data, listRow2Data = listRow2DataContent, mediaCardData = MediaCard_data } = {}) {
  return (
    <main className="block">
      <div className="block">
        <c-header class="inline" id="header-41">
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
                    <c-scramble-text class="inline-block z-2 min-w-10.5 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase max-lg:block" id="scrambletext-25">
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
          <c-hero-use-case class="block relative pb-[7.05rem] text-background max-md:pb-26 md:max-lg:pb-[6.7375rem] 2xl:pb-[7.45rem]" id="herousecase-38">
            <div className="min-h-screen flex relative z-1 pt-20.5 flex-col justify-end max-lg:pt-18">
              <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                <div className="grid gap-y-[2.55rem] gap-x-5 grid-cols-12 max-md:gap-y-8 max-lg:gap-x-[0.9375rem] max-md:grid-cols-1 md:max-lg:gap-y-9 2xl:gap-y-[2.95rem]">
                  <div className="block col-start-9 col-end-12 max-md:[grid-column-start:initial] max-md:[grid-column-end:initial] md:max-lg:col-end-13">
                    <h1 className="flex items-center gap-2" data-component="heading">
                      <span className="w-1.5 h-1.5 block bg-primary [clip-path:inset(0%_round_7px)]" />
                      {" "}
                      <span className="block font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                        {" Image & Video "}
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
                    <c-split-title class="inline" id="splittitle-51">
                      {" "}
                      <div className="block font-favorit text-[5rem] font-light leading-[5rem] tracking-[-2px] max-md:text-[2.8125rem] max-md:leading-[2.8125rem] max-md:tracking-[-1.12px] md:max-lg:text-6xl md:max-lg:leading-[3.75rem] md:max-lg:tracking-[-1.49px] 2xl:text-[6.5625rem] 2xl:leading-[6.5625rem] 2xl:tracking-[-2.62px]" data-component="heading" aria-label="Run image and video pipelines at scale">
                        <div className="inline-block relative" aria-hidden="true">
                          Run
                        </div>
                        {" "}
                        <span className="inline text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }}>
                          <div className="inline-block relative -mb-[0.4rem] pb-[0.4rem] [background-clip:text] [-webkit-background-clip:text] max-md:-mb-[0.225rem] max-md:pb-[0.225rem] md:max-lg:-mb-[0.3rem] md:max-lg:pb-[0.3rem] 2xl:-mb-[0.525rem] 2xl:pb-[0.525rem]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }} aria-hidden="true">
                            image
                          </div>
                        </span>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          and
                        </div>
                        {" "}
                        <span className="inline text-clr-2 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-2)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }}>
                          <div className="inline-block relative -mb-[0.4rem] pb-[0.4rem] [background-clip:text] [-webkit-background-clip:text] max-md:-mb-[0.225rem] max-md:pb-[0.225rem] md:max-lg:-mb-[0.3rem] md:max-lg:pb-[0.3rem] 2xl:-mb-[0.525rem] 2xl:pb-[0.525rem]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-3) 100%)" }} aria-hidden="true">
                            video
                          </div>
                        </span>
                        {" "}
                        <div className="inline-block relative" aria-hidden="true">
                          pipelines
                        </div>
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
                          Deploy production image and video workloads with fast startup times and on-demand autoscaling — without managing infrastructure.
                        </p>
                      </div>
                      {" "}
                      <div className="flex flex-wrap gap-4">
                        <div className="block">
                          <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-color-001 bg-primary cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="https://dashboard.cerebrium.ai/signup" target="_self">
                            {" "}
                            <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-31">
                              {" Try it now "}
                            </c-scramble-text>
                            {" "}
                          </a>
                          {" "}
                        </div>
                        <div className="block">
                          <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-clr-1 [backdrop-filter:blur(16px)] cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/book-demo" target="_self">
                            {" "}
                            <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-32">
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
              <c-media-transform class="w-full grid gap-5 grid-cols-[183.328px_183.328px_183.328px_183.344px_183.328px_183.328px] max-lg:gap-[0.9375rem] max-md:grid-cols-[75px_75px_75px_75px] md:max-lg:grid-cols-[110.5px_110.5px_110.5px_110.5px_110.5px_110.5px] 2xl:grid-cols-[290px_290px_290px_290px_290px_290px]" id="mediatransform-39">
                {logoData.map((d, i) => <Logo key={i} d={d} styles={Logo_styles[i]} />)}
                {" "}
              </c-media-transform>
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
                      Production infrastructure for demanding media workloads at scale.
                    </p>
                    {" "}
                  </div>
                  {" "}
                  <div className="block">
                    <c-split-title class="inline" id="splittitle-52">
                      {" "}
                      <div className="block -mt-[0.425rem] font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] 2xl:-mt-[0.55rem] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]" aria-label="Why Cerebrium for video/image?">
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
                            video/image?
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
                <c-feature-cards class="grid mb-[78.1px] gap-5 grid-cols-[590px_590px] max-md:mb-14 max-lg:gap-[0.9375rem] max-md:grid-cols-[345px] md:max-lg:mb-[4.0875rem] md:max-lg:grid-cols-[738px] 2xl:mb-[5.875rem] 2xl:grid-cols-[910px_910px]" id="featurecards-55">
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
                        <c-split-title class="inline" id="splittitle-53">
                          {" "}
                          <div className="block font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px]" aria-label="Why Cerebrium for video/image?">
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
                                video/image?
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
                    <div className="block" id="instant-startups">
                      <c-feature-card-containers-animation class="flex flex-col gap-6" id="featurecardcontainersanimation-45">
                        <div className="block rounded-[15px] overflow-hidden bg-surface-2 aspect-[707/600]">
                          <Illustration />
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            Built for bursty, unpredictable traffic
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              <span className="inline" />
                              <span className="inline" />
                              <span className="inline">
                                Spin up containers globally in 1–2 seconds, even under sudden traffic spikes. Cerebrium scales CPU and GPU workloads on demand without pre-warming or reserved capacity, so you can handle bursts without over-provisioning or idle cost.
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
                    <div className="block" id="moderns-gpus">
                      <c-feature-card-gpu-carousel class="flex flex-col gap-6" id="featurecardgpucarousel-42">
                        <div className="flex relative rounded-[15px] justify-center items-center overflow-hidden aspect-[707/600] bg-surface">
                          <div className="w-[70%] h-full block relative max-md:w-4/5">
                            {mediaCardData.map((d, i) => <MediaCard key={i} d={d} styles={MediaCard_styles[i]} />)}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            Latest Compute, At Scale
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              Access the latest hardware - across B200s, H100s, L40S, AMD MI300X and more so you can balance performance and cost for every workload.
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
                    <div className="block" id="cost-efficient-at-scale">
                      <div className="h-full flex flex-col gap-6">
                        <div className="flex relative py-10 rounded-[15px] justify-center gap-6 overflow-hidden bg-color-001 aspect-[707/600] max-md:px-6 max-md:aspect-square">
                          <c-inner-parallax class="w-147.5 h-[500.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[21.5625rem] md:max-lg:w-184.5 md:max-lg:h-[626.3px] 2xl:w-192 2xl:h-[40.7375rem]">
                            <c-dato-image class="inline" id="datoimage-43">
                              {" "}
                              <picture className="w-147.5 h-[31.3125rem] block absolute top-0 left-0 text-clr-2 bg-cover [background-position:50%_50%] bg-no-repeat transform-[matrix(1,0,0,1,0,80)] max-md:w-[21.5625rem] max-md:h-[21.5625rem] max-lg:transform-[none] md:max-lg:w-184.5 md:max-lg:h-156.5 2xl:w-192 2xl:h-163 2xl:transform-[matrix(1,0,0,1,0,108)]" style={{ backgroundImage: "url(data:image/jpeg" }}>
                                <source className="inline" sizes="(max-width: 100px) 100vw, 33vw" srcSet="/assets/image-and-video/images/b47f3edcfcc2.jpg 325w, /assets/image-and-video/images/8f6fcd4011bb.jpg 650w, /assets/image-and-video/images/29243a3e7b71.jpg 975w, /assets/image-and-video/images/9eaee82b4b29.jpg 1300w" />
                                {" "}
                                <img className="w-full h-[43.3125rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[21.5625rem] max-lg:top-0 md:max-lg:h-156.5 2xl:h-211" data-component="image" alt="" src="/assets/image-and-video/images/9eaee82b4b29.jpg" />
                                {" "}
                              </picture>
                              {" "}
                            </c-dato-image>
                            {" "}
                          </c-inner-parallax>
                          {" "}
                          <c-segmented-controls class="flex relative z-2 flex-col grow gap-y-6 w-full max-w-full" id="segmentedcontrols-49">
                            {" "}
                            <div className="w-[501.5px] block my-[31.3px] mx-[44.3px] py-2.5 rounded-[10px] overflow-hidden bg-clr-4 [backdrop-filter:blur(50px)] max-md:w-[18.5625rem] max-md:my-[0.825rem] max-md:mx-0 md:max-lg:w-[627.3px] md:max-lg:my-[52.5px] md:max-lg:mx-[55.3px] 2xl:w-[40.8rem] 2xl:my-[3.55rem] 2xl:mx-[3.6rem]">
                              <c-segmented-panel class="flex relative pt-4 pb-14 px-12.5 flex-col justify-center max-md:pb-18" aria-labelledby="segmentedcontrols-49-tab-0" id="segmentedcontrols-49-panel-0" role="tabpanel">
                                <span className="w-[11.1rem] h-3.5 block absolute left-5 min-w-0 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [translate:-50%] [rotate:-90deg]">
                                  {" GPUs needed for volume "}
                                </span>
                                <span className="w-[501.5px] h-3.5 block absolute bottom-2 left-0 min-w-0 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] text-center uppercase max-md:w-[18.5625rem] max-md:bottom-11 md:max-lg:w-[627.3px] 2xl:w-[40.8rem]">
                                  {" Time "}
                                </span>
                                <c-animated-chart class="block w-full aspect-[486/322]" id="animatedchart-47">
                                  <div className="block">
                                    <Illustration2 />
                                  </div>
                                  {" "}
                                </c-animated-chart>
                                {" "}
                                <ul className="w-[161.1px] h-[1.875rem] flex absolute bottom-0 left-2.5 min-w-0 gap-2 [list-style-type:none] list-outside">
                                  <li className="list-item">
                                    <span className="inline-flex p-2 rounded-[7px] text-background font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase bg-clr-5" data-component="badge">
                                      {" Request "}
                                    </span>
                                    {" "}
                                  </li>
                                  <li className="list-item">
                                    <span className="inline-flex p-2 rounded-[7px] text-background font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase bg-primary" data-component="badge">
                                      {" Capacity "}
                                    </span>
                                    {" "}
                                  </li>
                                </ul>
                                {" "}
                              </c-segmented-panel>
                              {" "}
                            </div>
                            {" "}
                          </c-segmented-controls>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex pr-[88.5px] flex-col gap-4 max-md:pr-0 md:max-lg:pr-[13.8375rem] 2xl:pr-[7.2rem]">
                          <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-[1.5625rem] max-lg:font-light max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                            Pay only for the compute you use
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              Run image and video workloads with usage-based pricing down to the second, so costs scale with demand. Avoid idle GPU spend while still supporting large batch jobs and demanding media pipelines.
                            </p>
                          </div>
                          {" "}
                          <div className="flex flex-wrap gap-4" />
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    <div className="block" id="global-orchestration">
                      <c-feature-card-world-map-animation class="flex relative flex-col gap-6" id="featurecardworldmapanimation-48">
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
                            Performance without hardware lock-in
                          </h3>
                          {" "}
                          <div className="block max-w-[66.8rem] leading-7">
                            <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                              <span className="inline" />
                              <span className="inline" />
                              <span className="inline">
                                Cerebrium’s global orchestrator routes jobs across CPUs and GPUs in multiple regions and clouds to meet demand in real time. Workloads are scheduled where capacity is available, so even the most demanding image and video jobs run quickly without manual provisioning or capacity bottlenecks.
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
                  <c-split-title class="block" id="splittitle-54">
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
                    </div>
                    {" "}
                    <div className="grid gap-5 grid-cols-2 max-lg:gap-[0.9375rem] max-md:grid-cols-1">
                      <div className="block">
                        <div className="h-full flex relative p-4 rounded-[10px] gap-4 bg-background">
                          <div className="w-[139.5px] block relative shrink-0 basis-1/4 max-md:w-[78.3px] md:max-lg:w-[5.15rem] 2xl:w-[219.5px]">
                            <div className="block relative">
                              <div className="h-full block absolute top-0 inset-x-0 rounded-[7px] bg-accent" />
                              {" "}
                              <span className="flex relative p-5 justify-center items-center aspect-square w-full">
                                {" "}
                                <div className="w-1/2 h-[3.1125rem] block relative max-md:h-[19.1px] md:max-lg:h-[1.325rem] 2xl:h-[5.6125rem]">
                                  <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/image-and-video/svg/d569fb7c4dea.svg\")" }} aria-hidden="true" />
                                  {" "}
                                  <img className="w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain aspect-[auto_32/32] align-middle h-full" data-component="image" alt="" height="32" src="/assets/image-and-video/svg/d569fb7c4dea.svg" width="32" />
                                  {" "}
                                </div>
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <div className="flex flex-col justify-between grow gap-4">
                            <div className="flex flex-col gap-1.5">
                              <h3 className="block text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] max-md:text-lg max-md:leading-[1.5rem] max-md:tracking-[-0.45px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.625rem] md:max-lg:tracking-[-0.48px] 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]" data-component="heading">
                                Generate Images using SDXL
                              </h3>
                              {" "}
                              <p className="w-full max-w-100 block text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                {"Generate high quality images using SDXL with refiner "}
                              </p>
                              {" "}
                            </div>
                            {" "}
                            <div className="flex justify-between items-center gap-0.5 max-lg:hidden">
                              <span className="block text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase underline">
                                {" "}
                                <c-scramble-text class="inline" id="scrambletext-33">
                                  {" Try now "}
                                </c-scramble-text>
                                {" "}
                              </span>
                              {" "}
                              <span className="h-6 block opacity-0 [translate:4px]" aria-hidden="true">
                                {" "}
                                <Icon2 />
                                {" "}
                              </span>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                          <a className="w-147.5 h-full block absolute top-0 left-0 z-1 min-w-0 rounded-[10px] cursor-pointer max-md:w-[21.5625rem] md:max-lg:w-[361.5px] 2xl:w-227.5" data-component="link" href="https://docs.cerebrium.ai/docs/v4/examples/sdxl" target="_blank">
                            {" "}
                            <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                              Generate Images using SDXL
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
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              <div className="block mt-[3.4375rem] pb-4 overflow-hidden max-md:mt-10 md:max-lg:mt-[46.3px] 2xl:mt-[65.7px]">
                <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                  <c-carousel-tile class="block relative z-1" id="carouseltile-50">
                    <div className="flex mb-[2.55rem] justify-between items-center max-md:mb-8 md:max-lg:mb-9 2xl:mb-[2.95rem]">
                      <div className="block">
                        <h3 className="block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-[2.5625rem] 2xl:leading-[2.9375rem] 2xl:tracking-[-1.03px]" data-component="heading">
                          Real teams building with Video on Cerebrium
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <div className="block max-lg:hidden">
                        <button className="inline-flex relative opacity-50 isolate rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-background cursor-pointer h-[3.375rem] w-[3.375rem] max-lg:h-[2.625rem] max-lg:w-[2.625rem]" data-component="button" aria-label="Previous slide" disabled type="button">
                          {" "}
                          <c-scramble-text class="w-px h-px block absolute z-2 min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="scrambletext-34" />
                          {" "}
                          <span className="flex relative justify-center items-center pointer-events-none w-5 h-5">
                            {" "}
                            <Icon3 />
                            {" "}
                          </span>
                        </button>
                        {" "}
                        <button className="inline-flex relative opacity-50 isolate rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-background cursor-pointer h-[3.375rem] w-[3.375rem] max-lg:h-[2.625rem] max-lg:w-[2.625rem]" data-component="button" aria-label="Next slide" disabled type="button">
                          {" "}
                          <c-scramble-text class="w-px h-px block absolute z-2 min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="scrambletext-35" />
                          {" "}
                          <span className="flex relative justify-center items-center pointer-events-none w-5 h-5">
                            {" "}
                            <Icon4 />
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
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/image-and-video/images/0fcf43eceab2.avif\")" }} aria-hidden="true" />
                              {" "}
                              <c-dato-image class="w-[10.9375rem] block absolute opacity-1 h-full max-md:w-[116.5px] md:max-lg:w-[10.05rem] 2xl:w-[281.7px]" id="datoimage-44">
                                <picture className="w-full block h-full">
                                  <source className="inline" sizes="(max-width: 512px) 100vw, 512px" srcSet="/assets/image-and-video/images/59a073098db5.avif 128w, /assets/image-and-video/images/11f98b26cc05.avif 256w, /assets/image-and-video/images/56c4bf0f22f3.avif 384w, /assets/image-and-video/images/0fcf43eceab2.avif 512w" />
                                  {" "}
                                  <img className="w-full block max-w-full overflow-clip object-contain aspect-[512/103] align-middle h-full" data-component="image" alt="" src="/assets/image-and-video/images/0fcf43eceab2.avif" />
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
                                <Icon2 />
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
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/image-and-video/svg/b5a2c37372fd.svg\")" }} aria-hidden="true" />
                              {" "}
                              <img className="w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain aspect-[auto_2471/489] align-middle h-full" data-component="image" alt="" height="489" src="/assets/image-and-video/svg/b5a2c37372fd.svg" width="2471" />
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
                                <Icon2 />
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
                              <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/image-and-video/svg/2d60944a7d85.svg\")" }} aria-hidden="true" />
                              {" "}
                              <img className="w-full block absolute top-0 left-0 opacity-1 max-w-full overflow-clip object-contain aspect-[auto_415/119] align-middle h-full" data-component="image" alt="" height="119" src="/assets/image-and-video/svg/2d60944a7d85.svg" width="415" />
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
                                <Icon2 />
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
