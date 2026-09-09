import ListRow, { type ListRowData } from "../components/list-row";
import TextLink, { type TextLinkData } from "../components/text-link";
import Icon from "../svgs/svg-icon";
import ListRow2, { type ListRow2Data } from "../components/list-row2";
import ProductCard from "../components/product-card";
import FeatureCard, { type FeatureCardData } from "../components/feature-card";
import Icon4 from "../svgs/svg-icon4";
import Icon5 from "../svgs/svg-icon5";
import Logo from "../components/logo";
import Tile, { type TileData } from "../components/tile";
import ListRow3, { type ListRow3Data } from "../components/list-row3";
import Icon6 from "../svgs/svg-icon6";
import Icon7 from "../svgs/svg-icon7";
import Tile2, { type Tile2Data } from "../components/tile2";
import Icon8 from "../svgs/svg-icon8";
import Icon9 from "../svgs/svg-icon9";
import Tile3, { type Tile3Data } from "../components/tile3";
import Icon10 from "../svgs/svg-icon10";
import { TextLink_meta } from "../ditto-meta";
import { ListRow_styles, TextLink_styles, ListRow2_styles, Tile_styles, Tile2_styles } from "../_styles";
import { products as productsContent, logos as logosContent, logos2 as logos2Content, logos3 as logos3Content, logos4 as logos4Content } from "../content";
import UseCasesDropdown from "../../ditto/UseCasesDropdown";
const ListRow_data: ListRowData[] = [
    { ariacurrent: "page", href: "/pricing", target: "_self", id: "scrambletext-18", text: " Pricing " },
    { href: "https://docs.cerebrium.ai/", target: "_blank", id: "scrambletext-19", text: " Docs " },
    { href: "/blog", target: "_self", id: "scrambletext-20", text: " Blog " },
    { href: "/about", target: "_self", id: "scrambletext-21", text: " Company " }
];
const TextLink_data: TextLinkData[] = [
    { kind: "link", href: "https://dashboard.cerebrium.ai/login", id: "scrambletext-22", text: " Log in " },
    { kind: "link", href: "https://dashboard.cerebrium.ai/signup", id: "scrambletext-23", text: " Sign up " },
    { href: "https://dashboard.cerebrium.ai/login", id: "scrambletext-24", text: " Log in " }
];
const ListRow2_data: ListRow2Data[] = [
    { text: " B200 ", text2: "\n$0.00167 ", text3: " /s " },
    { text: " H200 ", text2: "\n$0.001166 ", text3: " /s " },
    { text: " H100 ", text2: "\n$0.000944 ", text3: " /s " },
    { text: " RTX PRO 6000 ", text2: "\n$0.000694 ", text3: " /s " },
    { text: " A100 (80GB) ", text2: "\n$0.000583 ", text3: " /s " },
    { text: " A100 (40GB) ", text2: "\n$0.000555 ", text3: " /s " },
    { text: " L40s ", text2: "\n$0.000542 ", text3: " /s " },
    { text: " A10 ", text2: "\n$0.000306 ", text3: " /s " },
    { text: " L4 ", text2: "\n$0.000222 ", text3: " /s " },
    { text: " T4 ", text2: "\n$0.000164 ", text3: " /s " },
    { text: " CPU Only ", text2: "\n$0.00000655 ", text3: " /vCPU/s " }
];
const FeatureCard_data: FeatureCardData[] = [
    { title: "Projects", text: "  Unlimited ", text2: "  Unlimited ", text3: "  Unlimited " },
    { title: "Deployed applications", text: "  3 ", text2: "  Unlimited ", text3: "  Unlimited " },
    { title: "Seats", text: "  3 ", text2: "  10 ", text3: "  Custom " }
];
const Tile_data: TileData[] = [
    { href: "https://dashboard.cerebrium.ai/register", id: "scrambletext-36", text: " Start for free " },
    { href: "https://dashboard.cerebrium.ai/register", id: "scrambletext-37", text: " Start for free " },
    { href: "/contact", id: "scrambletext-38", text: " Contact us " }
];
const ListRow3_data: ListRow3Data[] = [
    { text: " Projects ", text2: "   Unlimited " },
    { text: " Deployed applications ", text2: "   Unlimited " },
    { text: " Seats ", text2: "   10 " }
];
const Tile2_data: Tile2Data[] = [
    { text: "GPU cost", text2: "$0.000306/s" },
    { text: "CPU cost", text2: "$0.000007/s" },
    { text: "Memory cost", text2: "$0.000018/s" },
    { text: "Total cost", text2: "$0.000330/s" }
];
const Tile3_data: Tile3Data[] = [
    { value: "cpu_only", text: "CPU only" },
    { value: "t4", text: "T4" },
    { value: "l4", text: "L4" },
    { value: "a10", selected: true, text: "A10" },
    { value: "a100_40", text: "A100 (40GB)" },
    { value: "l40s", text: "L40s" },
    { value: "a100_80", text: "A100 (80GB)" },
    { value: "h100", text: "H100" },
    { value: "h200", text: "H200" },
    { value: "b200", text: "B200" },
    { value: "BLACKWELL_RTX6000", text: "RTX PRO 6000" }
];
/** Product Grid section. */
export default function ProductGridSection({ listRowData = ListRow_data, textLinkData = TextLink_data, listRow2Data = ListRow2_data, products = productsContent, featureCardData = FeatureCard_data, logos = logosContent, logos2 = logos2Content, logos3 = logos3Content, logos4 = logos4Content, tileData = Tile_data, listRow3Data = ListRow3_data, tile2Data = Tile2_data, tile3Data = Tile3_data } = {}) {
  return (
    <main className="block">
      <div className="block">
        <c-header class="inline" id="header-53">
          {" "}
          <header className="h-20.5 block absolute inset-x-0 z-90 py-3.5 pointer-events-none max-lg:h-18 max-lg:py-[0.9375rem]">
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
                <ul className="h-full flex relative pl-2.5 rounded-[7px] [list-style-type:none] list-outside bg-background max-lg:hidden">
                  <UseCasesDropdown labelClass="h-full flex relative z-2 isolate px-3.5 justify-center items-center gap-1.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[110.7px] before:h-8.5 before:bg-clr-0 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:origin-[55.3359px_17px] before:rounded-tl-sm max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]" />
                  {listRowData.map((d, i) => <ListRow key={i} d={d} styles={ListRow_styles[i]} />)}
                  <li className="block">
                    <button className="w-13.5 h-13.5 flex p-2.5 justify-center items-center text-center cursor-pointer" data-component="button" type="button">
                      <span className="w-px h-px block absolute min-w-0 -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                        Open menu
                      </span>
                      {" "}
                      <span className="w-full h-full flex relative isolate justify-center items-center before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-8.5 before:h-8.5 before:bg-clr-0 before:opacity-0 before:transform-[matrix(0.9,0,0,0.7,0,0)] before:origin-[17px_17px] before:rounded-tl-sm max-lg:before:w-auto max-lg:before:h-auto max-lg:before:transform-[none] max-lg:before:origin-[initial]">
                        {" "}
                        <span className="w-3 h-[0.6875rem] flex flex-col justify-between">
                          {" "}
                          <span className="flex justify-center items-center gap-0.5">
                            {" "}
                            <span className="w-1 h-full block rounded-[100%] bg-foreground" />
                            {" "}
                            <span className="w-1 h-full block rounded-[100%] bg-foreground" />
                            {" "}
                          </span>
                          {" "}
                          <span className="flex justify-center items-center gap-0.5">
                            {" "}
                            <span className="w-1 h-full block rounded-[100%] bg-foreground" />
                            {" "}
                            <span className="w-1 h-full block rounded-[100%] bg-foreground" />
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
                  {textLinkData.map((d, i) => <TextLink key={i} d={d} meta={TextLink_meta[i]} styles={TextLink_styles[i]} />)}
                  {" "}
                  <button className="min-h-13.5 hidden relative isolate min-w-0 px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-background cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:flex max-lg:px-3.5" aria-expanded="false" type="button">
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
          <div className="block overflow-hidden">
            <div className="min-h-215 flex relative max-w-500 px-10 items-stretch max-lg:px-[0.9375rem] max-lg:flex-col max-lg:min-h-0 2xl:min-h-285">
              <div className="flex relative z-1 pt-24.5 pb-18 px-10 flex-col justify-center grow gap-10 h-auto w-full max-lg:pt-22 max-md:pb-8 max-lg:px-0 md:max-lg:pb-9">
                <h1 className="w-px h-px block absolute min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-component="heading">
                  Pricing
                </h1>
                {" "}
                <c-split-title class="block" id="splittitle-56">
                  <div className="block max-w-120 font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] max-md:max-w-65 max-md:pt-8 max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:max-w-80 md:max-lg:pt-9 md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]" aria-label="Pay for what you use">
                    <span className="inline text-clr-1 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-1)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-2) 100%)" }}>
                      <div className="inline-block relative -mb-[0.3375rem] pb-[0.3375rem] [background-clip:text] [-webkit-background-clip:text] max-md:-mb-[0.2rem] max-md:pb-[0.2rem] md:max-lg:mb-[-4.1px] md:max-lg:pb-1 2xl:-mb-[0.4375rem] 2xl:pb-[0.4375rem]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-2) 100%)" }} aria-hidden="true">
                        Pay
                      </div>
                    </span>
                    {" "}
                    <div className="inline-block relative" aria-hidden="true">
                      for
                    </div>
                    {" "}
                    <div className="inline-block relative" aria-hidden="true">
                      what
                    </div>
                    {" "}
                    <div className="inline-block relative" aria-hidden="true">
                      you
                    </div>
                    {" "}
                    <div className="inline-block relative" aria-hidden="true">
                      use
                    </div>
                  </div>
                  {" "}
                </c-split-title>
                {" "}
                <div className="w-[74.5%] block max-w-[66.8rem] leading-7 max-lg:w-full 2xl:w-[71.5%]">
                  <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                    Cerebrium charges based on actual compute time, measured in seconds. Resources scale dynamically with demand, allowing you to run everything from low-traffic workloads to high-throughput systems while maintaining precise, usage-based pricing at scale.
                  </p>
                </div>
                {" "}
                <div className="flex flex-wrap gap-4">
                  <div className="block">
                    <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-color-001 bg-primary cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="https://dashboard.cerebrium.ai/signup" target="_self">
                      {" "}
                      <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-31">
                        {" Get started "}
                      </c-scramble-text>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  <div className="block">
                    <a className="h-13.5 min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-background cursor-pointer max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/contact" target="_self">
                      {" "}
                      <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-32">
                        {" Contact us "}
                      </c-scramble-text>
                      {" "}
                    </a>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="w-160 block absolute top-0 -left-10 -z-1 min-w-0 bg-surface h-full max-md:w-[23.4375rem] max-lg:-left-[0.9375rem] md:max-lg:w-192 2xl:w-240" />
                {" "}
              </div>
              {" "}
              <div className="flex relative pt-24.5 pb-12.5 px-10 flex-col justify-center items-center grow bg-color-001 h-auto w-full max-md:pt-10 max-lg:px-0 md:max-lg:pt-[46.3px]">
                <c-pricing-table class="flex relative z-1 pb-12.5 flex-col justify-between grow gap-5 w-full max-w-[28rem] max-lg:gap-[0.9375rem] max-lg:max-w-md 2xl:max-w-lg" id="pricingtable-49">
                  <div className="flex flex-col justify-center grow">
                    <div className="block p-6 rounded-[7px] bg-surface w-full">
                      <h2 className="block mb-6 text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] text-center max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                        Compute costs
                      </h2>
                      {" "}
                      <div className="block">
                        <div className="flex mb-4 justify-between">
                          <h3 className="block opacity-60 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase" data-component="heading">
                            Compute
                          </h3>
                          {" "}
                          <p className="block opacity-60 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                            Price
                          </p>
                          {" "}
                        </div>
                        {" "}
                        <ul className="block [list-style-type:none] list-outside">
                          {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                        </ul>
                        {" "}
                        <p className="block opacity-60 mt-6 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase" />
                        {" "}
                      </div>
                      {" "}
                      <hr className="w-100 h-px border-t border-solid border-t-accent block my-6 overflow-hidden max-md:w-[18.5625rem] 2xl:w-116" />
                      {" "}
                      <div className="block">
                        <div className="flex mb-4 justify-between">
                          <h3 className="block opacity-60 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase" data-component="heading">
                            Other
                          </h3>
                          {" "}
                          <p className="block opacity-60 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                            Price
                          </p>
                          {" "}
                        </div>
                        {" "}
                        <ul className="block [list-style-type:none] list-outside">
                          <li className="flex mb-2 justify-between">
                            <span className="block text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                              {" Memory "}
                            </span>
                            {" "}
                            <span className="block text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                              {" "}
                              <span className="inline">
                                {" $0.00000222 "}
                              </span>
                              {" "}
                              <span className="inline opacity-60">
                                {" /GB/s "}
                              </span>
                              {" "}
                            </span>
                            {" "}
                          </li>
                          <li className="flex justify-between">
                            <span className="block text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                              {" Storage "}
                            </span>
                            {" "}
                            <span className="block text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                              {" "}
                              <span className="inline">
                                {" $0.05 "}
                              </span>
                              {" "}
                              <span className="inline opacity-60">
                                {" /GB/mo "}
                              </span>
                              {" "}
                            </span>
                            {" "}
                          </li>
                        </ul>
                        {" "}
                        <p className="block opacity-60 mt-6 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                          *First 100GB storage free
                        </p>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="flex">
                    <c-segmented-controls class="flex mx-auto flex-col max-w-full" id="segmentedcontrols-54">
                      <div className="flex relative p-1 rounded-[7px] shrink-0 overflow-x-auto overflow-y-hidden bg-background" role="tablist">
                        <div className="w-33.5 h-11 block absolute min-w-0 rounded-[7px] bg-muted-foreground pointer-events-none max-lg:w-[8.0625rem]" aria-hidden="true" />
                        {" "}
                        <c-segmented-tab class="min-h-11 flex relative z-1 py-2 px-5 rounded-[7px] justify-center items-center shrink-0 text-background text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[8.375rem] before:h-11 before:bg-muted-foreground before:opacity-0 before:rounded-tl-[7px] max-lg:before:w-[128.5px]" aria-selected="true" id="segmentedcontrols-54-tab-0" role="tab">
                          {" Per Second "}
                        </c-segmented-tab>
                        <c-segmented-tab class="min-h-11 flex relative z-1 py-2 px-5 rounded-[7px] justify-center items-center shrink-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:w-[111.3px] before:h-11 before:bg-clr-3 before:opacity-0 before:rounded-tl-[7px] max-lg:before:w-[6.6875rem]" aria-selected="false" id="segmentedcontrols-54-tab-1" role="tab">
                          {" Per Hour "}
                        </c-segmented-tab>
                        {" "}
                      </div>
                      {" "}
                    </c-segmented-controls>
                    {" "}
                  </div>
                  {" "}
                </c-pricing-table>
                {" "}
                <c-inline-video class="w-170 block absolute top-0 -left-10 min-w-0 h-full max-md:w-[23.4375rem] max-lg:-left-[0.9375rem] md:max-lg:w-192 2xl:w-250" id="inlinevideo-50">
                  <img className="w-170 h-[54.0625rem] block absolute top-0 left-0 z-0 max-w-full overflow-clip object-cover align-middle pointer-events-none max-md:w-[23.4375rem] max-md:h-[48.5625rem] md:max-lg:w-192 md:max-lg:h-[49.1875rem] 2xl:w-250 2xl:h-285" data-component="image" alt="" aria-hidden="true" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                  {" "}
                  <mux-video class="w-190 block absolute top-0 -left-10 opacity-0 leading-0 h-full" loop muted playsinline src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">
                    <video className="box-content w-full h-[54.0625rem] min-h-full inline min-w-full max-w-full max-h-full overflow-clip object-cover max-md:h-[48.5625rem] md:max-lg:h-[49.1875rem] 2xl:h-285" muted playsInline preload="none" />
                    {" "}
                  </mux-video>
                  {" "}
                </c-inline-video>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="block relative z-1 -mt-15 rounded-4xl bg-background max-lg:-mt-7.5">
            <section className="block rounded-4xl bg-background max-md:py-10 md:max-lg:py-[46.3px]">
              <div className="block max-w-500 mb-[7.5625rem] pt-[10.2125rem] px-10 max-md:mb-10 max-md:pt-10 max-lg:px-[0.9375rem] md:max-lg:mb-[46.3px] md:max-lg:pt-[46.3px] 2xl:mb-[150.3px] 2xl:pt-[11.8rem]">
                <div className="w-full grid gap-5 max-lg:gap-[0.9375rem] grid-cols-1 lg:grid-cols-3">
                  {products.map((d) => <ProductCard key={d.variant} d={d} />)}
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="block max-w-500 mt-[7.5625rem] px-10 max-md:mt-10 max-lg:px-[0.9375rem] md:max-lg:mt-[46.3px] 2xl:mt-[150.3px]">
                <div className="block max-w-310 px-10 mx-auto max-lg:px-[0.9375rem]">
                  <div className="block my-[10.2125rem] max-lg:hidden 2xl:my-[11.8rem]">
                    <div className="grid gap-5 grid-cols-12">
                      <div className="block col-start-[span_6] col-end-[span_6]">
                        <h2 className="h-full block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                          Detailed Plan Comparison
                        </h2>
                        {" "}
                      </div>
                      {" "}
                      <div className="flex justify-center items-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center">
                        {" Hobby "}
                      </div>
                      <div className="flex justify-center items-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center">
                        {" Standard "}
                      </div>
                      <div className="flex justify-center items-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center">
                        {" Enterprise "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <hr className="w-280 h-px border-t border-solid border-t-accent block my-9 overflow-hidden 2xl:w-290" />
                    {" "}
                    <div className="grid gap-5 grid-cols-12">
                      <div className="block col-start-[span_6] col-end-[span_6]">
                        <h2 className="h-full block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                          Price
                        </h2>
                        {" "}
                      </div>
                      {" "}
                      <div className="flex justify-center items-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] text-center 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]">
                        {" Free "}
                      </div>
                      <div className="flex justify-center items-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] text-center 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]">
                        {" $100 "}
                      </div>
                      <div className="flex justify-center items-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] text-center 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]">
                        {" Custom "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <hr className="w-280 h-px border-t border-solid border-t-accent block my-9 overflow-hidden 2xl:w-290" />
                    {" "}
                    <div className="grid mb-6 gap-5 grid-cols-12">
                      <div className="block col-start-[span_6] col-end-[span_6]">
                        <h2 className="h-full block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                          Workspace
                        </h2>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="flex flex-col gap-4">
                      {featureCardData.map((d, i) => <FeatureCard key={i} d={d} />)}
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            Custom Domains
                          </h2>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon4 />
                            {" "}
                          </span>
                          {" "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon5 />
                          </span>
                          {" "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon5 />
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <hr className="w-280 h-px border-t border-solid border-t-accent block my-9 overflow-hidden 2xl:w-290" />
                    {" "}
                    <div className="grid mb-6 gap-5 grid-cols-12">
                      <div className="block col-start-[span_6] col-end-[span_6]">
                        <h2 className="h-full block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                          {"Data & Compliance"}
                        </h2>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="flex flex-col gap-4">
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            Log retention
                          </h2>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" 7 day "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" 30 days "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" Unlimited "}
                        </div>
                        {" "}
                      </div>
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            SOC2 compliance
                          </h2>
                          {" "}
                        </div>
                        {logos.map((d, i) => <Logo key={i} d={d} />)}
                        {" "}
                      </div>
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            HIPPA, GDPR, ISO 27001
                          </h2>
                          {" "}
                        </div>
                        {logos2.map((d, i) => <Logo key={i} d={d} />)}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <hr className="w-280 h-px border-t border-solid border-t-accent block my-9 overflow-hidden 2xl:w-290" />
                    {" "}
                    <div className="grid mb-6 gap-5 grid-cols-12">
                      <div className="block col-start-[span_6] col-end-[span_6]">
                        <h2 className="h-full block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                          Project Specifics
                        </h2>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="flex flex-col gap-4">
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            CPU concurrency
                          </h2>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" 500 "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" 1000 "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" Unlimited "}
                        </div>
                        {" "}
                      </div>
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            GPU concurrency
                          </h2>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" 5 "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" 30 "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          {" Unlimited "}
                        </div>
                        {" "}
                      </div>
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            {"Real-time Observability (In-app logging & monitoring)"}
                          </h2>
                          {" "}
                        </div>
                        {logos3.map((d, i) => <Logo key={i} d={d} />)}
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <hr className="w-280 h-px border-t border-solid border-t-accent block my-9 overflow-hidden 2xl:w-290" />
                    {" "}
                    <div className="grid mb-6 gap-5 grid-cols-12">
                      <div className="block col-start-[span_6] col-end-[span_6]">
                        <h2 className="h-full block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                          Support
                        </h2>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="flex flex-col gap-4">
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            Community support
                          </h2>
                          {" "}
                        </div>
                        {logos4.map((d, i) => <Logo key={i} d={d} />)}
                        {" "}
                      </div>
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            Private Slack Channel
                          </h2>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon4 />
                            {" "}
                          </span>
                          {" "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon4 />
                            {" "}
                          </span>
                          {" "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon5 />
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      <div className="grid gap-5 grid-cols-12">
                        <div className="block col-start-[span_6] col-end-[span_6]">
                          <h2 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px]" data-component="heading">
                            ML Engineering Service
                          </h2>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon4 />
                            {" "}
                          </span>
                          {" "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon4 />
                            {" "}
                          </span>
                          {" "}
                        </div>
                        <div className="flex justify-center col-start-[span_2] col-end-[span_2] text-muted-foreground text-center">
                          <span className="block">
                            <Icon5 />
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="grid mt-12.5 gap-5 grid-cols-12">
                      <div className="block col-start-[span_6] col-end-[span_6]" />
                      {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="hidden mt-[7.5625rem] mb-[78.1px] max-lg:block max-md:mt-20 max-md:mb-14 md:max-lg:mt-[6.0875rem] md:max-lg:mb-[4.0875rem]">
                    <h2 className="block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] text-center max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px]">
                      Detailed Plan Comparison
                    </h2>
                    {" "}
                    <c-segmented-controls class="inline-flex mt-[2.55rem] flex-col w-full max-w-full max-md:mt-8 md:max-lg:mt-9" id="segmentedcontrols-55">
                      {" "}
                      <div className="flex relative min-w-0 p-1 rounded-[7px] shrink-0 overflow-x-auto overflow-y-hidden bg-surface w-full" role="tablist">
                        <div className="w-0 h-0 block absolute left-0 min-w-0 rounded-[7px] bg-muted-foreground pointer-events-none max-md:w-27.5 max-lg:h-11 max-md:left-23.5 md:max-lg:w-[14.8125rem] md:max-lg:left-[13.8125rem]" aria-hidden="true" />
                        {" "}
                        <c-segmented-tab class="min-h-11 flex relative z-1 min-w-0 py-2 px-5 rounded-[7px] justify-center items-center grow shrink-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:bg-accent before:opacity-0 before:rounded-tl-[7px] max-lg:before:h-11" aria-controls="segmentedcontrols-55-panel-0" aria-selected="false" id="segmentedcontrols-55-tab-0" role="tab">
                          {" Hobby "}
                        </c-segmented-tab>
                        <c-segmented-tab class="min-h-11 flex relative z-1 min-w-0 py-2 px-5 rounded-[7px] justify-center items-center grow shrink-0 text-background text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:bg-muted-foreground before:opacity-0 before:rounded-tl-[7px] max-lg:before:h-11" aria-controls="segmentedcontrols-55-panel-1" aria-selected="true" id="segmentedcontrols-55-tab-1" role="tab">
                          {" Standard "}
                        </c-segmented-tab>
                        <c-segmented-tab class="min-h-11 flex relative z-1 min-w-0 py-2 px-5 rounded-[7px] justify-center items-center grow shrink-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center cursor-pointer max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit] before:content-[''] before:block before:absolute before:inset-0 before:-z-1 before:bg-accent before:opacity-0 before:rounded-tl-[7px] max-lg:before:h-11" aria-controls="segmentedcontrols-55-panel-2" aria-selected="false" id="segmentedcontrols-55-tab-2" role="tab">
                          {" Enterprise "}
                        </c-segmented-tab>
                        {" "}
                      </div>
                      {" "}
                      <div className="block min-w-0 overflow-hidden">
                        <c-segmented-panel class="block mt-6" aria-labelledby="segmentedcontrols-55-tab-1" id="segmentedcontrols-55-panel-1" role="tabpanel">
                          <div className="flex flex-col">
                            <div className="flex min-w-0 justify-between gap-1">
                              <p className="block min-w-0 text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px]">
                                Price
                              </p>
                              {" "}
                              <p className="block min-w-0 text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px]">
                                $100
                              </p>
                              {" "}
                            </div>
                            {" "}
                            <hr className="h-0 border-t border-solid border-t-clr-3 block min-w-0 my-4 overflow-hidden max-md:w-[19.6875rem] max-lg:h-px md:max-lg:w-177" />
                            {" "}
                            <div className="flex min-w-0 flex-col gap-3">
                              <h3 className="block min-w-0 mb-2 text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px]">
                                {" Workspace "}
                              </h3>
                              {" "}
                              <ul className="flex min-w-0 flex-col gap-0.5 [list-style-type:none] list-outside" role="list">
                                {listRow3Data.map((d, i) => <ListRow3 key={i} d={d} />)}
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" Custom Domains "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" "}
                                    <span className="inline">
                                      <Icon6 />
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </li>
                              </ul>
                              {" "}
                            </div>
                            {" "}
                            <hr className="h-0 border-t border-solid border-t-clr-3 block min-w-0 my-4 overflow-hidden max-md:w-[19.6875rem] max-lg:h-px md:max-lg:w-177" />
                            {" "}
                            <div className="flex min-w-0 flex-col gap-3">
                              <h3 className="block min-w-0 mb-2 text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px]">
                                {" Data & Compliance "}
                              </h3>
                              {" "}
                              <ul className="flex min-w-0 flex-col gap-0.5 [list-style-type:none] list-outside" role="list">
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" Log retention "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" 30 days "}
                                  </span>
                                  {" "}
                                </li>
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" SOC2 compliance "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" "}
                                    <span className="inline">
                                      <Icon6 />
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </li>
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" HIPPA, GDPR, ISO 27001 "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" "}
                                    <span className="inline">
                                      <Icon6 />
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </li>
                              </ul>
                              {" "}
                            </div>
                            {" "}
                            <hr className="h-0 border-t border-solid border-t-clr-3 block min-w-0 my-4 overflow-hidden max-md:w-[19.6875rem] max-lg:h-px md:max-lg:w-177" />
                            {" "}
                            <div className="flex min-w-0 flex-col gap-3">
                              <h3 className="block min-w-0 mb-2 text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px]">
                                {" Project Specifics "}
                              </h3>
                              {" "}
                              <ul className="flex min-w-0 flex-col gap-0.5 [list-style-type:none] list-outside" role="list">
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" CPU concurrency "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" 1000 "}
                                  </span>
                                  {" "}
                                </li>
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" GPU concurrency "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" 30 "}
                                  </span>
                                  {" "}
                                </li>
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" Real-time Observability (In-app logging & monitoring) "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" "}
                                    <span className="inline">
                                      <Icon6 />
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </li>
                              </ul>
                              {" "}
                            </div>
                            {" "}
                            <hr className="h-0 border-t border-solid border-t-clr-3 block min-w-0 my-4 overflow-hidden max-md:w-[19.6875rem] max-lg:h-px md:max-lg:w-177" />
                            {" "}
                            <div className="flex min-w-0 flex-col gap-3">
                              <h3 className="block min-w-0 mb-2 text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px]">
                                {" Support "}
                              </h3>
                              {" "}
                              <ul className="flex min-w-0 flex-col gap-0.5 [list-style-type:none] list-outside" role="list">
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" Community support "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" "}
                                    <span className="inline">
                                      <Icon6 />
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </li>
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" Private Slack Channel "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" "}
                                    <span className="inline">
                                      <Icon7 />
                                      {" "}
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </li>
                                <li className="flex min-w-0 pb-2 justify-between items-center gap-4">
                                  <span className="block min-w-0 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" ML Engineering Service "}
                                  </span>
                                  {" "}
                                  <span className="block min-w-0 shrink-0 text-muted-foreground text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                                    {" "}
                                    <span className="inline">
                                      <Icon7 />
                                      {" "}
                                    </span>
                                    {" "}
                                  </span>
                                  {" "}
                                </li>
                              </ul>
                              {" "}
                            </div>
                            {" "}
                            <div className="block min-w-0 mt-6">
                              <a className="min-h-13.5 inline-flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-background bg-muted-foreground cursor-pointer w-full max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" href="https://dashboard.cerebrium.ai/register" target="_self">
                                {" "}
                                <c-scramble-text class="block z-2 min-w-0 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-40">
                                  {" Start for free "}
                                </c-scramble-text>
                                {" "}
                              </a>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </c-segmented-panel>
                        {" "}
                      </div>
                      {" "}
                    </c-segmented-controls>
                    {" "}
                  </div>
                  {" "}
                </div>
              </div>
              {" "}
            </section>
            {" "}
            <section className="block py-[78.1px] rounded-4xl bg-surface max-md:py-10 md:max-lg:py-[46.3px] 2xl:py-[5.875rem]">
              <div className="block max-w-500 mb-[7.5625rem] px-10 max-md:mb-10 max-lg:px-[0.9375rem] md:max-lg:mb-[46.3px] 2xl:mb-[150.3px]">
                <div className="grid mb-[10.2125rem] gap-5 grid-cols-12 max-lg:mb-10 max-lg:gap-[0.9375rem] max-lg:grid-cols-1 2xl:mb-[11.8rem]">
                  <div className="block col-start-7 col-end-[span_6] row-start-1 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial] max-lg:[grid-row-start:initial]">
                    <c-split-title class="inline" id="splittitle-57">
                      {" "}
                      <div className="block font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]" data-component="heading" aria-label="Transparent Pricing">
                        <div className="inline-block relative" aria-hidden="true">
                          Transparent
                        </div>
                        {" "}
                        <br className="inline" />
                        <span className="inline text-clr-1 [background-clip:text] [-webkit-background-clip:text] [-webkit-text-fill-color:var(--clr-1)]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-2) 100%)" }}>
                          <div className="inline-block relative -mb-[0.3375rem] pb-[0.3375rem] [background-clip:text] [-webkit-background-clip:text] max-md:-mb-[0.2rem] max-md:pb-[0.2rem] md:max-lg:mb-[-4.1px] md:max-lg:pb-1 2xl:-mb-[0.4375rem] 2xl:pb-[0.4375rem]" style={{ backgroundImage: "linear-gradient(to right in oklab, var(--primary) 0%, var(--clr-2) 100%)" }} aria-hidden="true">
                            Pricing
                          </div>
                        </span>
                      </div>
                      {" "}
                    </c-split-title>
                    {" "}
                  </div>
                  {" "}
                  <div className="block col-start-[span_4] col-end-[span_4] row-start-1 max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial] max-lg:[grid-row-start:initial]">
                    <div className="block max-w-[66.8rem] mb-8 leading-7 text-balance">
                      <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                        Calculate costs based on your exact workload
                      </p>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <astro-island class="contents">
                  <div className="grid gap-5 grid-cols-12 max-lg:gap-12.5 max-lg:grid-cols-1">
                    <div className="block col-start-[span_5] col-end-[span_5] max-lg:order-[2] max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                      <div className="flex p-8.5 rounded-[10px] flex-col bg-background">
                        <h3 className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] text-center max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]" data-component="heading">
                          Estimated monthly cost
                        </h3>
                        <p className="block mt-7.5 font-favorit text-[4.25rem] font-light leading-[4.4375rem] tracking-[-1.69px] text-center max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[5.5rem] 2xl:leading-[5.75rem] 2xl:tracking-[-2.19px]">
                          $0.0066
                        </p>
                        <div className="block mt-25">
                          <div className="flex justify-between">
                            <span className="block opacity-60 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                              Details
                            </span>
                            <span className="block opacity-60 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                              Estimated costs
                            </span>
                          </div>
                          <hr className="w-105 h-px border-t border-solid border-t-accent block my-4 overflow-hidden max-md:w-[17.3125rem] md:max-lg:w-167.5 2xl:w-[42.9375rem]" />
                          <div className="flex flex-col gap-1">
                            {tile2Data.map((d, i) => <Tile2 key={i} d={d} styles={Tile2_styles[i]} />)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-12.5 col-start-7 col-end-[span_6] max-lg:order-[1] max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                      <div className="block">
                        <div className="flex mb-4 justify-between items-center">
                          <div className="block">
                            <label className="block mb-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] cursor-default whitespace-nowrap max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]" htmlFor="pricing-requests">
                              Number of requests
                            </label>
                            <p className="block opacity-60 text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                              *Average per month
                            </p>
                          </div>
                          <input className="h-[1.6875rem] block shrink-0 overflow-clip text-lg font-normal leading-[1.6875rem] tracking-[0.18px] text-right cursor-text w-28 max-lg:h-6.5 max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]" data-component="input" id="pricing-requests" max="5000000" min="1" type="text" value="10" />
                        </div>
                        <div className="flex items-center">
                          <input className="w-auto h-1.5 block rounded-[999px] cursor-default" style={{ backgroundImage: "linear-gradient(to right, var(--foreground) 0%, var(--foreground) 0.00018%, var(--background) 0.00018%, var(--background) 100%)" }} data-component="input" max="5000000" min="1" step="1" type="range" value="10" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center gap-5 max-md:flex-col max-lg:gap-[0.9375rem]">
                        <div className="w-1/2 block grow max-md:w-full">
                          <label className="block mb-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] cursor-default max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]" htmlFor="pricing-runtime">
                            Average runtime
                          </label>
                          <div className="h-[3.4375rem] flex px-4 rounded-[7px] justify-between items-center text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] bg-background max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                            <div className="flex items-center gap-2">
                              <div className="flex -ml-1 flex-col">
                                <button className="w-4 h-4 flex justify-center items-center shrink-0 text-center cursor-pointer hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)]" data-component="button" aria-label="Increase runtime" type="button">
                                  <Icon8 />
                                </button>
                                <button className="w-4 h-4 flex justify-center items-center shrink-0 text-center cursor-pointer hover:border-muted-foreground hover:text-muted-foreground hover:outline-muted-foreground hover:[text-decoration-color:var(--muted-foreground)]" data-component="button" aria-label="Decrease runtime" type="button">
                                  <Icon9 />
                                </button>
                              </div>
                              <input className="w-15 h-[1.6875rem] block min-w-9 max-w-[60.1px] shrink-0 overflow-clip text-lg leading-[1.6875rem] tracking-[0.18px] cursor-text max-lg:w-[3.5625rem] max-lg:h-6.5 max-lg:min-w-[2.125rem] max-lg:max-w-[3.55rem] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px] focus:shadow-[var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px,var(--foreground)_0px_0px_0px_0px,var(--clr-1)_0px_0px_0px_0px]" data-component="input" id="pricing-runtime" max="3600" min="1" type="text" value="2" />
                            </div>
                            <div className="block">
                              <p className="block opacity-60 text-[0.9375rem] leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                                seconds
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-[47%] block grow max-md:w-full md:max-lg:w-[48%] 2xl:w-[48%]">
                          <label className="block mb-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] cursor-default max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]" htmlFor="pricing-hardware">
                            Hardware
                          </label>
                          <div className="h-[3.4375rem] block relative rounded-[7px] text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] bg-background max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                            <select className="w-full inline-block px-4 items-center whitespace-pre text-nowrap cursor-pointer h-full" data-component="select" id="pricing-hardware">
                              {tile3Data.map((d, i) => <Tile3 key={i} d={d} />)}
                            </select>
                            <div className="w-2 h-2 block absolute top-[27.5px] right-4 [translate:0px_-50%] pointer-events-none">
                              <Icon10 />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="block">
                        <div className="flex mb-4 justify-between items-center">
                          <div className="block">
                            <label className="block mb-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] cursor-default max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]" htmlFor="pricing-gpus">
                              GPUs
                            </label>
                            <p className="block opacity-60 text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] whitespace-nowrap max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                              24 GB VRAM per GPU
                            </p>
                          </div>
                          <span className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                            1
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input className="w-auto h-1.5 block rounded-[999px] cursor-default" style={{ backgroundImage: "linear-gradient(to right, var(--foreground) 0%, var(--foreground) 12.5%, var(--background) 12.5%, var(--background) 100%)" }} data-component="input" id="pricing-gpus" max="8" min="0" step="1" type="range" value="1" />
                        </div>
                      </div>
                      <div className="block">
                        <div className="flex mb-4 justify-between items-center">
                          <div className="block">
                            <label className="block mb-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] cursor-default max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]" htmlFor="pricing-vcpus">
                              vCPUs
                            </label>
                            <p className="block opacity-60 text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] whitespace-nowrap max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                              Only pay for what you use
                            </p>
                          </div>
                          <span className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                            1
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input className="w-auto h-1.5 block rounded-[999px] cursor-default" style={{ backgroundImage: "linear-gradient(to right, var(--foreground) 0%, var(--foreground) 0%, var(--background) 0%, var(--background) 100%)" }} data-component="input" id="pricing-vcpus" max="16" min="1" step="1" type="range" value="1" />
                        </div>
                      </div>
                      <div className="block">
                        <div className="flex mb-4 justify-between items-center">
                          <div className="block">
                            <label className="block mb-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] cursor-default max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]" htmlFor="pricing-memory">
                              Memory
                            </label>
                            <p className="block opacity-60 text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] whitespace-nowrap max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                              Requirement in GB
                            </p>
                          </div>
                          <span className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                            8 GB
                          </span>
                        </div>
                        <div className="flex items-center">
                          <input className="w-auto h-1.5 block rounded-[999px] cursor-default" style={{ backgroundImage: "linear-gradient(to right, var(--foreground) 0%, var(--foreground) 11.1111%, var(--background) 11.1111%, var(--background) 100%)" }} data-component="input" id="pricing-memory" max="64" min="1" step="1" type="range" value="8" />
                        </div>
                      </div>
                    </div>
                  </div>
                </astro-island>
                {" "}
              </div>
              {" "}
              <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                <hr className="w-300 h-px border-t border-solid border-t-clr-0 block my-[7.5625rem] overflow-hidden max-md:w-[21.5625rem] max-md:my-10 md:max-lg:w-184.5 md:max-lg:my-[46.3px] 2xl:w-460 2xl:my-[150.3px]" />
                {" "}
              </div>
              {" "}
              <div className="block max-w-500 mt-[7.5625rem] px-10 max-md:mt-10 max-lg:px-[0.9375rem] md:max-lg:mt-[46.3px] 2xl:mt-[150.3px]">
                <div className="grid gap-5 grid-cols-2 max-lg:gap-[0.9375rem] max-lg:grid-cols-1">
                  <div className="block">
                    <h2 className="block text-[2.125rem] font-light leading-[2.5rem] tracking-[-0.86px] max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-0.62px] md:max-lg:text-[1.8125rem] md:max-lg:leading-[2.0625rem] md:max-lg:tracking-[-0.72px] 2xl:text-[2.5625rem] 2xl:leading-[2.9375rem] 2xl:tracking-[-1.03px]" data-component="heading">
                      Pricing FAQs
                    </h2>
                    {" "}
                  </div>
                  {" "}
                  <div className="block">
                    <div className="block">
                      <c-accordion class="block" id="accordion-44">
                        <details className="block my-5 rounded-[7px] bg-background max-lg:my-3.5">
                          <summary className="flex p-6 items-center gap-5 list-inside cursor-pointer">
                            <span className="w-8.5 h-8.5 flex relative rounded-[7px] justify-center items-center shrink-0 bg-surface before:content-[''] before:block before:absolute before:inset-0 before:w-8.5 before:h-8.5 before:bg-clr-3 before:opacity-0 before:transform-[matrix(0.3,0,0,0.3,0,0)] before:origin-[17px_17px] before:rounded-tl-[7px]">
                              {" "}
                              <span className="w-3 h-3 block relative before:content-[''] before:block before:absolute before:inset-y-0 before:right-[0.3125rem] before:left-1.5 before:w-0.5 before:h-3 before:-ml-px before:bg-foreground after:content-[''] after:block after:absolute after:top-1.5 after:bottom-[0.3125rem] after:inset-x-0 after:w-3 after:h-0.5 after:-mt-px after:bg-foreground" />
                              {" "}
                            </span>
                            {" "}
                            <span className="block text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] max-md:text-lg max-md:leading-[1.5rem] max-md:tracking-[-0.45px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.625rem] md:max-lg:tracking-[-0.48px] 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]">
                              How does pricing compare to on-demand/spot on AWS?
                            </span>
                            {" "}
                          </summary>
                          {" "}
                          <div className="block pt-6 pb-10 px-6">
                            <div className="block max-w-[66.8rem] leading-7">
                              <p className="block mb-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mb-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                Cerebrium pricing shouldn’t be directly compared to raw CPU or GPU instance prices on AWS, GCP, or NeoClouds. Traditional cloud compute often includes minutes of provisioning, warm-up, and idle time that you still pay for, along with the added cost of overprovisioning for peak demand. Cerebrium, by contrast, scales containers up and down in 1–3 seconds, and its memory and GPU snapshotting can restore workloads even faster, reducing billable startup overhead.
                              </p>
                              <p className="block mt-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mt-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                Our pricing also includes orchestration, networking, and the serverless platform required to run AI workloads in production, so comparing GPU cost alone misses the bigger picture. In addition, Cerebrium integrates across multiple cloud providers globally, allowing us to route workloads to the most cost-efficient infrastructure available through a single integration. For bursty or unpredictable workloads, this often makes Cerebrium more cost-effective overall, since you pay for less idle time and avoid the burden of managing infrastructure yourself.
                              </p>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </details>
                        {" "}
                      </c-accordion>
                      {" "}
                    </div>
                    <div className="block">
                      <c-accordion class="block" id="accordion-45">
                        <details className="block my-5 rounded-[7px] bg-background max-lg:my-3.5">
                          <summary className="flex p-6 items-center gap-5 list-inside cursor-pointer">
                            <span className="w-8.5 h-8.5 flex relative rounded-[7px] justify-center items-center shrink-0 bg-surface before:content-[''] before:block before:absolute before:inset-0 before:w-8.5 before:h-8.5 before:bg-clr-3 before:opacity-0 before:transform-[matrix(0.3,0,0,0.3,0,0)] before:origin-[17px_17px] before:rounded-tl-[7px]">
                              {" "}
                              <span className="w-3 h-3 block relative before:content-[''] before:block before:absolute before:inset-y-0 before:right-[0.3125rem] before:left-1.5 before:w-0.5 before:h-3 before:-ml-px before:bg-foreground after:content-[''] after:block after:absolute after:top-1.5 after:bottom-[0.3125rem] after:inset-x-0 after:w-3 after:h-0.5 after:-mt-px after:bg-foreground" />
                              {" "}
                            </span>
                            {" "}
                            <span className="block text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] max-md:text-lg max-md:leading-[1.5rem] max-md:tracking-[-0.45px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.625rem] md:max-lg:tracking-[-0.48px] 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]">
                              Real world billing example
                            </span>
                            {" "}
                          </summary>
                          {" "}
                          <div className="block pt-6 pb-10 px-6">
                            <div className="block max-w-[66.8rem] leading-7">
                              <p className="block mb-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mb-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                If you run a transcription workload on an L4 GPU with 2 vCPUs and 10GB memory (costing you $0.000257 per second) and each request runs for 2.4 seconds, then 500,000 requests in a month would cost roughly $309.
                              </p>
                              <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                Because Cerebrium bills based on the resources you allocate and how long they actively run, you only pay for compute while your workload is processing requests.
                              </p>
                              <p className="block mt-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mt-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                {"If you want a more comprehensive breakdown, you can take a look in our docs "}
                                <a className="inline text-primary font-medium underline cursor-pointer" data-component="link" href="https://docs.cerebrium.ai/docs/calculating-cost" target="_blank">
                                  here.
                                </a>
                              </p>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </details>
                        {" "}
                      </c-accordion>
                      {" "}
                    </div>
                    <div className="block">
                      <c-accordion class="block" id="accordion-46">
                        <details className="block my-5 rounded-[7px] bg-background max-lg:my-3.5">
                          <summary className="flex p-6 items-center gap-5 list-inside cursor-pointer">
                            <span className="w-8.5 h-8.5 flex relative rounded-[7px] justify-center items-center shrink-0 bg-surface before:content-[''] before:block before:absolute before:inset-0 before:w-8.5 before:h-8.5 before:bg-clr-3 before:opacity-0 before:transform-[matrix(0.3,0,0,0.3,0,0)] before:origin-[17px_17px] before:rounded-tl-[7px]">
                              {" "}
                              <span className="w-3 h-3 block relative before:content-[''] before:block before:absolute before:inset-y-0 before:right-[0.3125rem] before:left-1.5 before:w-0.5 before:h-3 before:-ml-px before:bg-foreground after:content-[''] after:block after:absolute after:top-1.5 after:bottom-[0.3125rem] after:inset-x-0 after:w-3 after:h-0.5 after:-mt-px after:bg-foreground" />
                              {" "}
                            </span>
                            {" "}
                            <span className="block text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] max-md:text-lg max-md:leading-[1.5rem] max-md:tracking-[-0.45px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.625rem] md:max-lg:tracking-[-0.48px] 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]">
                              Can I use my AWS, GCP credits?
                            </span>
                            {" "}
                          </summary>
                          {" "}
                          <div className="block pt-6 pb-10 px-6">
                            <div className="block max-w-[66.8rem] leading-7">
                              <p className="block text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                No. Cerebrium pricing is separate from AWS and GCP, so their cloud credits can’t be applied to usage on our platform.
                              </p>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </details>
                        {" "}
                      </c-accordion>
                      {" "}
                    </div>
                    <div className="block">
                      <c-accordion class="block" id="accordion-47">
                        <details className="block my-5 rounded-[7px] bg-background max-lg:my-3.5">
                          <summary className="flex p-6 items-center gap-5 list-inside cursor-pointer">
                            <span className="w-8.5 h-8.5 flex relative rounded-[7px] justify-center items-center shrink-0 bg-surface before:content-[''] before:block before:absolute before:inset-0 before:w-8.5 before:h-8.5 before:bg-clr-3 before:opacity-0 before:transform-[matrix(0.3,0,0,0.3,0,0)] before:origin-[17px_17px] before:rounded-tl-[7px]">
                              {" "}
                              <span className="w-3 h-3 block relative before:content-[''] before:block before:absolute before:inset-y-0 before:right-[0.3125rem] before:left-1.5 before:w-0.5 before:h-3 before:-ml-px before:bg-foreground after:content-[''] after:block after:absolute after:top-1.5 after:bottom-[0.3125rem] after:inset-x-0 after:w-3 after:h-0.5 after:-mt-px after:bg-foreground" />
                              {" "}
                            </span>
                            {" "}
                            <span className="block text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] max-md:text-lg max-md:leading-[1.5rem] max-md:tracking-[-0.45px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.625rem] md:max-lg:tracking-[-0.48px] 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]">
                              Is there a discount for larger deployments or long-term contracts?
                            </span>
                            {" "}
                          </summary>
                          {" "}
                          <div className="block pt-6 pb-10 px-6">
                            <div className="block max-w-[66.8rem] leading-7">
                              <p className="block mb-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mb-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                Yes. We offer discounts for larger deployments and longer-term commitments.
                              </p>
                              <p className="block my-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:my-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                Pricing depends on several factors, including your expected spend, the number of consecutive months you plan to maintain that spend, and the specific GPU or compute SKUs you need. Discounts can also vary based on current infrastructure availability.
                              </p>
                              <p className="block mt-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mt-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                For larger or longer-term workloads, reach out to our team and we can put together pricing tailored to your deployment.
                              </p>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </details>
                        {" "}
                      </c-accordion>
                      {" "}
                    </div>
                    <div className="block">
                      <c-accordion class="block" id="accordion-48">
                        <details className="block my-5 rounded-[7px] bg-background max-lg:my-3.5">
                          <summary className="flex p-6 items-center gap-5 list-inside cursor-pointer">
                            <span className="w-8.5 h-8.5 flex relative rounded-[7px] justify-center items-center shrink-0 bg-surface before:content-[''] before:block before:absolute before:inset-0 before:w-8.5 before:h-8.5 before:bg-clr-3 before:opacity-0 before:transform-[matrix(0.3,0,0,0.3,0,0)] before:origin-[17px_17px] before:rounded-tl-[7px]">
                              {" "}
                              <span className="w-3 h-3 block relative before:content-[''] before:block before:absolute before:inset-y-0 before:right-[0.3125rem] before:left-1.5 before:w-0.5 before:h-3 before:-ml-px before:bg-foreground after:content-[''] after:block after:absolute after:top-1.5 after:bottom-[0.3125rem] after:inset-x-0 after:w-3 after:h-0.5 after:-mt-px after:bg-foreground" />
                              {" "}
                            </span>
                            {" "}
                            <span className="block text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] max-md:text-lg max-md:leading-[1.5rem] max-md:tracking-[-0.45px] md:max-lg:text-[1.1875rem] md:max-lg:leading-[1.625rem] md:max-lg:tracking-[-0.48px] 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]">
                              Do you offer guaranteed capacity without traditional reservations?
                            </span>
                            {" "}
                          </summary>
                          {" "}
                          <div className="block pt-6 pb-10 px-6">
                            <div className="block max-w-[66.8rem] leading-7">
                              <p className="block mb-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mb-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                Yes. For bursty workloads, Cerebrium can guarantee access to capacity without requiring you to reserve and pay for infrastructure 24/7. Instead, you pay for the compute you use, with a minimum monthly spend commitment.
                              </p>
                              <p className="block mt-[22.5px] text-lg font-normal leading-[1.6875rem] tracking-[0.18px] [word-break:break-word] [overflow-wrap:anywhere] max-lg:mt-[21.3px] max-lg:text-[1.0625rem] max-lg:leading-[1.625rem] max-lg:tracking-[0.17px]">
                                For example, we may guarantee access to up to 50 H100s at any point in time, for however long you need them, with a $10,000 minimum monthly spend.
                              </p>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </details>
                        {" "}
                      </c-accordion>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </section>
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
