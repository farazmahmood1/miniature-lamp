import ListRow, { type ListRowData } from "../components/list-row";
import TextLink, { type TextLinkData } from "../components/text-link";
import Icon from "../svgs/svg-icon";
import Icon2 from "../svgs/svg-icon2";
import Tile, { type TileData } from "../components/tile";
import FeatureCard from "../components/feature-card";
import Icon3 from "../svgs/svg-icon3";
import ListRow2 from "../components/list-row2";
import Icon4 from "../svgs/svg-icon4";
import { ListRow_styles, TextLink_styles, Tile_styles, FeatureCard_styles, ListRow2_styles } from "../_styles";
import { features as featuresContent, listRow2Data as listRow2DataContent } from "../content";
import UseCasesDropdown from "../../ditto/UseCasesDropdown";
const ListRow_data: ListRowData[] = [
    { href: "/pricing", target: "_self", id: "scrambletext-18", text: " Pricing " },
    { href: "https://docs.cerebrium.ai/", target: "_blank", id: "scrambletext-19", text: " Docs " },
    { href: "/blog", target: "_self", ariacurrent: "page", id: "scrambletext-20", text: " Blog " },
    { href: "/about", target: "_self", id: "scrambletext-21", text: " Company " }
];
const TextLink_data: TextLinkData[] = [
    { kind: "link", href: "https://dashboard.cerebrium.ai/login", id: "scrambletext-22", text: " Log in " },
    { kind: "link", href: "https://dashboard.cerebrium.ai/signup", id: "scrambletext-23", text: " Sign up " },
    { href: "https://dashboard.cerebrium.ai/login", id: "scrambletext-24", text: " Log in " }
];
const Tile_data: TileData[] = [
    { ariaselected: "true", id: "segmentedcontrols-54-tab-0", href: "/blog", label: "All articles", text: "All articles" },
    { ariaselected: "false", id: "segmentedcontrols-54-tab-1", href: "/blog/category/case-study", label: " Case Studies ", text: " Case Studies " },
    { ariaselected: "false", id: "segmentedcontrols-54-tab-2", href: "/blog/category/tutorial", label: " Tutorials ", text: " Tutorials " },
    { ariaselected: "false", id: "segmentedcontrols-54-tab-3", href: "/blog/category/annoucement", label: " Announcements ", text: " Announcements " },
    { ariaselected: "false", id: "segmentedcontrols-54-tab-4", href: "/blog/category/engineering", label: " Engineering ", text: " Engineering " }
];
/** Feature Grid section. */
export default function FeatureGridSection({ listRowData = ListRow_data, textLinkData = TextLink_data, tileData = Tile_data, features = featuresContent, listRow2Data = listRow2DataContent } = {}) {
  return (
    <main className="block">
      <div className="block">
        <c-header class="inline" id="header-56">
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
                  {textLinkData.map((d, i) => <TextLink key={i} d={d} styles={TextLink_styles[i]} />)}
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
          <div className="block rounded-br-4xl rounded-bl-4xl overflow-hidden">
            <div className="block bg-surface-2">
              <div className="block max-w-500 px-10 max-lg:px-[0.9375rem]">
                <header className="h-24.5 block mb-[2.55rem] max-lg:h-22 max-md:mb-8 md:max-lg:mb-9 2xl:mb-[2.95rem]">
                  <h1 className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-component="heading">
                    Engineering Blog
                  </h1>
                  {" "}
                </header>
                {" "}
                <div className="w-full grid mb-[3.4375rem] gap-5 grid-cols-12 max-lg:mb-6 max-lg:gap-[0.9375rem] max-lg:grid-cols-1 2xl:mb-[65.7px]">
                  <div className="block col-start-[span_8] col-end-[span_8] max-lg:[grid-column-start:initial] max-lg:[grid-column-end:initial]">
                    <div className="h-[36.275rem] min-h-128 block relative z-1 rounded-[10px] overflow-hidden bg-color-001 max-md:h-[431.3px] max-lg:aspect-[4/5] max-lg:min-h-0 md:max-lg:h-[922.5px] 2xl:h-[53.75rem] 2xl:min-h-192">
                      <div className="flex p-6 flex-col gap-6 h-full">
                        <div className="block">
                          <ul className="flex mb-4 gap-3.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                            <li className="list-item">
                              <time className="inline text-background" dateTime="2026-07-01T10:18:49-04:00">
                                {" July 1, 2026 "}
                              </time>
                              {" "}
                            </li>
                            <li className="list-item text-clr-1">
                              Engineering
                            </li>
                          </ul>
                          {" "}
                          <h3 className="w-3/4 block text-background font-favorit text-[2.5625rem] font-light leading-[2.9375rem] tracking-[-2.05px] text-balance max-md:w-full max-md:text-[1.5625rem] max-md:leading-[1.8125rem] max-md:tracking-[-1.25px] md:max-lg:text-[2rem] md:max-lg:leading-[2.3125rem] md:max-lg:tracking-[-1.59px] 2xl:text-[3.3125rem] 2xl:leading-[3.75rem] 2xl:tracking-[-2.63px]" data-component="heading" aria-hidden="true">
                            {" Reducing GPU Cold Starts with Memory Snapshots: Restoring CUDA Workloads in Seconds "}
                          </h3>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex relative z-1 max-w-55 py-6 justify-center items-center self-center grow">
                          <div className="block [filter:invert(1)] aspect-square w-full">
                            <img className="w-full block max-w-full overflow-clip object-contain aspect-[auto_1200/1200] align-middle h-full" data-component="image" alt="" height="1200" src="/assets/blog/svg/8e4655d0ba68.svg" width="1200" />
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="h-6 block opacity-0 shrink-0 text-background [translate:4px]" aria-hidden="true">
                          <Icon2 />
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <c-inner-parallax class="w-[793.3px] h-[36.275rem] block absolute top-0 left-0 -z-1 overflow-hidden max-md:w-[21.5625rem] max-md:h-[431.3px] md:max-lg:w-184.5 md:max-lg:h-[922.5px] 2xl:w-305 2xl:h-[53.75rem]">
                        <c-dato-image class="inline" id="datoimage-36">
                          {" "}
                          <picture className="w-full h-145 block absolute max-md:h-[26.9375rem] md:max-lg:h-[57.6875rem] 2xl:h-215">
                            <source className="inline" sizes="(max-width: 999px) 100vw, 66vw" srcSet="/assets/blog/images/17a5593dcc0f.jpg 240w, /assets/blog/images/8f58bf8a8d87.jpg 480w, /assets/blog/images/333677c422bb.jpg 720w, /assets/blog/images/ac7f9d6a3f68.jpg 960w, /assets/blog/images/364cd5061c67.jpg 1440w, /assets/blog/images/facfd2c3aa2e.jpg 1920w" />
                            {" "}
                            <img className="w-full h-193 block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[26.9375rem] max-lg:top-0 md:max-lg:h-[57.6875rem] 2xl:h-263" data-component="image" alt="" src="/assets/blog/images/ac7f9d6a3f68.jpg" />
                            {" "}
                          </picture>
                          {" "}
                        </c-dato-image>
                        {" "}
                      </c-inner-parallax>
                      {" "}
                      <a className="h-full block absolute top-0 inset-x-0 z-1 cursor-pointer" data-component="link" href="/blog/reducing-gpu-cold-starts-with-memory-snapshots-restoring-cuda-workloads-in-second">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          Reducing GPU Cold Starts with Memory Snapshots: Restoring CUDA Workloads in Seconds
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="block col-start-[span_4] col-end-[span_4] max-lg:hidden">
                    <div className="flex flex-col gap-5 h-full">
                      <div className="flex relative gap-5 group">
                        <div className="w-[128.9px] flex relative shrink-0 aspect-square 2xl:w-[12.5rem]">
                          <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-muted-foreground" />
                          {" "}
                          <div className="flex relative z-1 justify-center items-center grow">
                            <div className="w-1/2 flex justify-center items-center [filter:invert(1)] aspect-square">
                              <img className="w-auto block max-w-full overflow-clip object-contain aspect-[auto_1200/1200] align-middle h-full" data-component="image" alt="" height="1200" src="/assets/blog/svg/a50d90ee9913.svg" width="1200" />
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex flex-col justify-between gap-0.5">
                          <div className="block">
                            <ul className="flex mb-1 flex-wrap gap-x-5 leading-4 [list-style-type:none] list-outside">
                              <li className="list-item">
                                <time className="inline font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase" dateTime="2026-07-15T10:13:03-04:00">
                                  {" Jul 15, 2026 "}
                                </time>
                                {" "}
                              </li>
                              <li className="list-item">
                                <span className="inline text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                                  Tutorial
                                </span>
                                {" "}
                              </li>
                            </ul>
                            {" "}
                            <h3 className="overflow-hidden text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] line-clamp-3 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]" data-component="heading" aria-hidden="true">
                              {" A Low-Latency Architecture for Voice Agents with Real-time Web Search "}
                            </h3>
                            {" "}
                          </div>
                          {" "}
                          <div className="h-6 block opacity-0 shrink-0 [translate:4px] group-hover:opacity-100" aria-hidden="true">
                            <Icon2 />
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 cursor-pointer" data-component="link" aria-hidden="true" href="/blog/a-low-latency-architecture-for-voice-agents-with-real-time-web-search">
                          {" "}
                          <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                            A Low-Latency Architecture for Voice Agents with Real-time Web Search
                          </span>
                          {" "}
                        </a>
                        {" "}
                      </div>
                      <div className="flex relative gap-5 group">
                        <div className="w-[128.9px] flex relative shrink-0 aspect-square 2xl:w-[12.5rem]">
                          <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-muted-foreground" />
                          {" "}
                          <div className="flex relative z-1 justify-center items-center grow">
                            <div className="w-1/2 flex justify-center items-center [filter:invert(1)] aspect-square">
                              <img className="w-auto block max-w-full overflow-clip object-contain aspect-[auto_1200/1200] align-middle h-full" data-component="image" alt="" height="1200" src="/assets/blog/svg/aa2786ed4614.svg" width="1200" />
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex flex-col justify-between gap-0.5">
                          <div className="block">
                            <ul className="flex mb-1 flex-wrap gap-x-5 leading-4 [list-style-type:none] list-outside">
                              <li className="list-item">
                                <time className="inline font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase" dateTime="2026-06-04T13:45:45-04:00">
                                  {" Jun 4, 2026 "}
                                </time>
                                {" "}
                              </li>
                              <li className="list-item">
                                <span className="inline text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                                  Engineering
                                </span>
                                {" "}
                              </li>
                            </ul>
                            {" "}
                            <h3 className="overflow-hidden text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] line-clamp-3 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]" data-component="heading" aria-hidden="true">
                              {" Thalamus - Our Highly Available Distributed Router for Global Realtime AI Workloads "}
                            </h3>
                            {" "}
                          </div>
                          {" "}
                          <div className="h-6 block opacity-0 shrink-0 [translate:4px] group-hover:opacity-100" aria-hidden="true">
                            <Icon2 />
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 cursor-pointer" data-component="link" aria-hidden="true" href="/blog/thalamus-our-highly-available-distributed-router-for-global-realtime-ai-workloads">
                          {" "}
                          <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                            Thalamus - Our Highly Available Distributed Router for Global Realtime AI Workloads
                          </span>
                          {" "}
                        </a>
                        {" "}
                      </div>
                      <div className="flex relative gap-5">
                        <div className="w-[128.9px] flex relative shrink-0 aspect-square 2xl:w-[12.5rem]">
                          <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-muted-foreground" />
                          {" "}
                          <div className="flex relative z-1 justify-center items-center grow">
                            <div className="w-1/2 flex justify-center items-center [filter:invert(1)] aspect-square">
                              <c-dato-image class="block" id="datoimage-37">
                                <picture className="w-16 h-[4.0625rem] block 2xl:w-25 2xl:h-25">
                                  <source className="inline" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/blog/images/0f980585cb97.png 200w, /assets/blog/images/69d90a8e4f37.png 400w, /assets/blog/images/388bf69a77a5.png 600w, /assets/blog/images/198d7d0658fe.png 800w" />
                                  {" "}
                                  <img className="w-full h-[4.0625rem] block max-w-full overflow-clip aspect-[800/801] align-middle 2xl:h-25" data-component="image" alt="" src="/assets/blog/images/198d7d0658fe.png" />
                                  {" "}
                                </picture>
                                {" "}
                              </c-dato-image>
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex flex-col justify-between gap-0.5">
                          <div className="block">
                            <ul className="flex mb-1 flex-wrap gap-x-5 leading-4 [list-style-type:none] list-outside">
                              <li className="list-item">
                                <time className="inline font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase" dateTime="2026-03-01T19:00:00-05:00">
                                  {" Mar 2, 2026 "}
                                </time>
                                {" "}
                              </li>
                              <li className="list-item">
                                <span className="inline text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                                  Tutorial
                                </span>
                                {" "}
                              </li>
                            </ul>
                            {" "}
                            <h3 className="overflow-hidden text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] line-clamp-3 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]" data-component="heading" aria-hidden="true">
                              {" Why Serverless Compute Partners Are Now More Important Than Ever "}
                            </h3>
                            {" "}
                          </div>
                          {" "}
                          <div className="h-6 block opacity-0 shrink-0 [translate:4px]" aria-hidden="true">
                            <Icon2 />
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 cursor-pointer" data-component="link" aria-hidden="true" href="/blog/why-serverless-compute-partners-are-now-more-important-than-ever">
                          {" "}
                          <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                            Why Serverless Compute Partners Are Now More Important Than Ever
                          </span>
                          {" "}
                        </a>
                        {" "}
                      </div>
                      <div className="flex relative gap-5">
                        <div className="w-[128.9px] flex relative shrink-0 aspect-square 2xl:w-[12.5rem]">
                          <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-muted-foreground" />
                          {" "}
                          <div className="flex relative z-1 justify-center items-center grow">
                            <div className="w-1/2 flex justify-center items-center [filter:invert(1)] aspect-square">
                              <img className="w-auto block max-w-full overflow-clip object-contain aspect-[auto_624/536] align-middle h-full" data-component="image" alt="" height="536" src="/assets/blog/svg/b0855f3cecc5.svg" width="624" />
                              {" "}
                            </div>
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <div className="flex flex-col justify-between gap-0.5">
                          <div className="block">
                            <ul className="flex mb-1 flex-wrap gap-x-5 leading-4 [list-style-type:none] list-outside">
                              <li className="list-item">
                                <time className="inline font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase" dateTime="2026-03-07T19:00:00-05:00">
                                  {" Mar 8, 2026 "}
                                </time>
                                {" "}
                              </li>
                              <li className="list-item">
                                <span className="inline text-muted-foreground font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase">
                                  Engineering
                                </span>
                                {" "}
                              </li>
                            </ul>
                            {" "}
                            <h3 className="overflow-hidden text-[1.3125rem] font-normal leading-7 tracking-[-0.52px] line-clamp-3 2xl:text-[1.4375rem] 2xl:leading-[1.9375rem] 2xl:tracking-[-0.57px]" data-component="heading" aria-hidden="true">
                              {" Rethinking Container Image Distribution to eliminate cold starts "}
                            </h3>
                            {" "}
                          </div>
                          {" "}
                          <div className="h-6 block opacity-0 shrink-0 [translate:4px]" aria-hidden="true">
                            <Icon2 />
                            {" "}
                          </div>
                          {" "}
                        </div>
                        {" "}
                        <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 cursor-pointer" data-component="link" aria-hidden="true" href="/blog/rethinking-container-image-distribution-to-eliminate-cold-starts">
                          {" "}
                          <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                            Rethinking Container Image Distribution to eliminate cold starts
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
                <div className="block mb-6">
                  <nav className="block mt-4" data-component="nav" aria-label="Filter by category">
                    <c-segmented-controls class="inline-flex flex-col max-w-full" id="segmentedcontrols-54">
                      {" "}
                      <div className="flex relative p-1 rounded-[7px] shrink-0 overflow-x-auto overflow-y-hidden bg-background" role="tablist">
                        <div className="w-[7.8125rem] h-11 block absolute min-w-0 rounded-[7px] bg-muted-foreground pointer-events-none max-lg:w-30" aria-hidden="true" />
                        {tileData.map((d, i) => <Tile key={i} d={d} styles={Tile_styles[i]} />)}
                        {" "}
                      </div>
                      {" "}
                    </c-segmented-controls>
                    {" "}
                  </nav>
                  {" "}
                </div>
                {" "}
                <div className="block">
                  <div className="w-full grid gap-5 max-lg:gap-[0.9375rem] grid-cols-1 lg:grid-cols-3" id="blog-article-results">
                    <div className="flex relative flex-col h-full group">
                      <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-surface" />
                      {" "}
                      <div className="flex relative z-2 p-5 justify-center items-center overflow-hidden aspect-[464/392]">
                        <div className="w-1/2 h-[143.3px] block relative max-md:h-[125.7px] md:max-lg:h-[291.7px] 2xl:h-[14.5875rem]">
                          <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/blog/images/a1902802cb96.png\")" }} aria-hidden="true" />
                          {" "}
                          <c-dato-image class="w-[173.3px] block absolute opacity-1 h-full max-md:w-[152.5px] md:max-lg:w-[21.8125rem] 2xl:w-70" id="datoimage-38">
                            <picture className="w-full block h-full">
                              <source className="inline" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/blog/images/179d814b588a.png 200w, /assets/blog/images/1a1bf891da1a.png 400w, /assets/blog/images/825821d5a0cb.png 600w, /assets/blog/images/a1902802cb96.png 800w, /assets/blog/images/9bc54b034bf2.png 1200w, /assets/blog/images/256dd2234fde.png 1600w" />
                              {" "}
                              <img className="w-full block max-w-full overflow-clip object-contain aspect-square align-middle h-full" data-component="image" alt="" src="/assets/blog/images/a1902802cb96.png" />
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
                          {" Scaling Resemble AI’s Real-Time Deepfake Detection Models with Cerebrium "}
                        </h3>
                        {" "}
                        <div className="flex justify-between items-center">
                          <span className="block text-muted-foreground text-[0.9375rem] font-normal leading-[1.25rem] tracking-[0.15px] max-lg:text-sm max-lg:leading-[1.125rem] max-lg:tracking-[0.14px]">
                            Read Case Study
                          </span>
                          {" "}
                          <span className="h-6 block opacity-0 [translate:-4px] group-hover:opacity-100" aria-hidden="true">
                            {" "}
                            <Icon2 />
                            {" "}
                          </span>
                          {" "}
                        </div>
                        {" "}
                      </div>
                      {" "}
                      <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/scaling-resemble-ais-real-time-deepfake-models-with-cerebrium">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          {" Scaling Resemble AI’s Real-Time Deepfake Detection Models with Cerebrium "}
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full group">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-39">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/7cec6ed59ff8.jpg 240w, /assets/blog/images/b2a953597627.jpg 480w, /assets/blog/images/931d05b09eb6.jpg 720w, /assets/blog/images/7cc0eedc2b69.jpg 960w, /assets/blog/images/9b60c7e691bd.jpg 1440w, /assets/blog/images/3fec94600663.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/7cc0eedc2b69.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <img className="w-auto h-31 flex max-w-full justify-center items-center overflow-clip object-contain aspect-[auto_1200/1200] align-middle [filter:invert(1)] max-md:h-[6.9375rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0625rem]" data-component="image" alt="" height="1200" src="/assets/blog/svg/a50d90ee9913.svg" width="1200" />
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
                          <span className="h-6 block opacity-0 shrink-0 [translate:4px] group-hover:opacity-100" aria-hidden="true">
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
                          A Low-Latency Architecture for Voice Agents with Real-time Web Search
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-40">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/5b9e297cd5dc.jpg 240w, /assets/blog/images/0f35ab962857.jpg 480w, /assets/blog/images/825c3513fecd.jpg 720w, /assets/blog/images/6aec5298d9b0.jpg 960w, /assets/blog/images/3f516d703cfa.jpg 1440w, /assets/blog/images/ca1833da6f43.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/6aec5298d9b0.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <c-dato-image class="h-[124.1px] flex justify-center items-center object-contain [filter:invert(1)] w-1/4 max-md:h-[6.925rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0375rem]" id="datoimage-41">
                          <picture className="w-auto h-[6.0625rem] block max-md:h-21.5 md:max-lg:h-[11.5625rem] 2xl:h-37.5">
                            <source className="inline" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/blog/images/8bf737d1626e.png 200w, /assets/blog/images/a8a6ceb062cc.png 400w, /assets/blog/images/241a2f73e815.png 600w, /assets/blog/images/cf52d057750a.png 800w" />
                            {" "}
                            <img className="w-full h-[6.0625rem] block max-w-full overflow-clip aspect-square align-middle max-md:h-21.5 md:max-lg:h-[11.5625rem] 2xl:h-37.5" data-component="image" alt="" src="/assets/blog/images/cf52d057750a.png" />
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
                          2026 GPU Buyer’s Guide
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-42">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/cfe02a570ff7.jpg 240w, /assets/blog/images/cc4d1f34171f.jpg 480w, /assets/blog/images/d672dde8ec2e.jpg 720w, /assets/blog/images/59cdd3990ceb.jpg 960w, /assets/blog/images/191ec76fa273.jpg 1440w, /assets/blog/images/4d8a8180db80.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/59cdd3990ceb.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <c-dato-image class="h-[124.1px] flex justify-center items-center object-contain [filter:invert(1)] w-1/4 max-md:h-[6.925rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0375rem]" id="datoimage-43">
                          <picture className="w-auto h-[6.0625rem] block max-md:h-21.5 md:max-lg:h-[11.5625rem] 2xl:h-37.5">
                            <source className="inline" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/blog/images/52629b52ea82.png 200w, /assets/blog/images/d46eeab178b9.png 400w, /assets/blog/images/7c3d7da345fa.png 600w, /assets/blog/images/364b5f0ffd53.png 800w" />
                            {" "}
                            <img className="w-full h-[6.0625rem] block max-w-full overflow-clip aspect-square align-middle max-md:h-21.5 md:max-lg:h-[11.5625rem] 2xl:h-37.5" data-component="image" alt="" src="/assets/blog/images/364b5f0ffd53.png" />
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
                          Cerebrium Achieves SOC 2 Type II Compliance for Secure Production AI Infrastructure
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-44">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/17a5593dcc0f.jpg 240w, /assets/blog/images/8f58bf8a8d87.jpg 480w, /assets/blog/images/333677c422bb.jpg 720w, /assets/blog/images/ac7f9d6a3f68.jpg 960w, /assets/blog/images/364cd5061c67.jpg 1440w, /assets/blog/images/facfd2c3aa2e.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/ac7f9d6a3f68.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <img className="w-auto h-31 flex max-w-full justify-center items-center overflow-clip object-contain aspect-[auto_1200/1200] align-middle [filter:invert(1)] max-md:h-[6.9375rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0625rem]" data-component="image" alt="" height="1200" src="/assets/blog/svg/8e4655d0ba68.svg" width="1200" />
                        {" "}
                      </div>
                      {" "}
                      <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background">
                        <div className="flex justify-between items-center">
                          <ul className="flex gap-3.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                            <li className="list-item">
                              <time className="inline" dateTime="2026-07-01T10:18:49-04:00">
                                {" July 1, 2026 "}
                              </time>
                              {" "}
                            </li>
                            <li className="list-item text-muted-foreground">
                              {" Engineering "}
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
                          {" Reducing GPU Cold Starts with Memory Snapshots: Restoring CUDA Workloads in Seconds "}
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/reducing-gpu-cold-starts-with-memory-snapshots-restoring-cuda-workloads-in-second">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          Reducing GPU Cold Starts with Memory Snapshots: Restoring CUDA Workloads in Seconds
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-45">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/17a5593dcc0f.jpg 240w, /assets/blog/images/8f58bf8a8d87.jpg 480w, /assets/blog/images/333677c422bb.jpg 720w, /assets/blog/images/ac7f9d6a3f68.jpg 960w, /assets/blog/images/364cd5061c67.jpg 1440w, /assets/blog/images/facfd2c3aa2e.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/ac7f9d6a3f68.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <img className="w-auto h-31 flex max-w-full justify-center items-center overflow-clip object-contain aspect-[auto_1200/1200] align-middle [filter:invert(1)] max-md:h-[6.9375rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0625rem]" data-component="image" alt="" height="1200" src="/assets/blog/svg/aa2786ed4614.svg" width="1200" />
                        {" "}
                      </div>
                      {" "}
                      <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background">
                        <div className="flex justify-between items-center">
                          <ul className="flex gap-3.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                            <li className="list-item">
                              <time className="inline" dateTime="2026-06-04T13:45:45-04:00">
                                {" June 4, 2026 "}
                              </time>
                              {" "}
                            </li>
                            <li className="list-item text-muted-foreground">
                              {" Engineering "}
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
                          {" Thalamus - Our Highly Available Distributed Router for Global Realtime AI Workloads "}
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/thalamus-our-highly-available-distributed-router-for-global-realtime-ai-workloads">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          Thalamus - Our Highly Available Distributed Router for Global Realtime AI Workloads
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-46">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/f5ed072c66cd.jpg 240w, /assets/blog/images/8e1c2c53140f.jpg 480w, /assets/blog/images/e40f0e463cb6.jpg 720w, /assets/blog/images/12455f2b3ec7.jpg 960w, /assets/blog/images/cfa7a843c242.jpg 1440w, /assets/blog/images/f97a12947722.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/12455f2b3ec7.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <c-dato-image class="h-[124.1px] flex justify-center items-center object-contain [filter:invert(1)] w-1/4 max-md:h-[6.925rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0375rem]" id="datoimage-47">
                          <picture className="w-auto h-[5.4375rem] block max-md:h-19.5 md:max-lg:h-[10.4375rem] 2xl:h-34">
                            <source className="inline" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/blog/images/014d9ce77f12.png 200w, /assets/blog/images/ee6a903e8e4e.png 400w, /assets/blog/images/d7a8210caa5f.png 600w, /assets/blog/images/e87dfd43361b.png 800w" />
                            {" "}
                            <img className="w-full h-[5.4375rem] block max-w-full overflow-clip aspect-[800/723] align-middle max-md:h-19.5 md:max-lg:h-[10.4375rem] 2xl:h-34" data-component="image" alt="" src="/assets/blog/images/e87dfd43361b.png" />
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
                              <time className="inline" dateTime="2026-03-31T11:56:54-04:00">
                                {" March 31, 2026 "}
                              </time>
                              {" "}
                            </li>
                            <li className="list-item text-muted-foreground">
                              {" Generative AI "}
                            </li>
                            <li className="list-item text-muted-foreground">
                              {" Video "}
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
                          {" Achieving 83% Speed Improvements in Custom Container Images "}
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/achieving-speed-improvements-in-custom-container-images">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          Achieving 83% Speed Improvements in Custom Container Images
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative flex-col h-full">
                      <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-surface" />
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
                        <div className="w-1/2 h-[143.3px] block relative max-md:h-[125.7px] md:max-lg:h-[291.7px] 2xl:h-[14.5875rem]">
                          <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/blog/images/0fcf43eceab2.avif\")" }} aria-hidden="true" />
                          {" "}
                          <c-dato-image class="w-[173.3px] block absolute opacity-1 h-full max-md:w-[152.5px] md:max-lg:w-[21.8125rem] 2xl:w-70" id="datoimage-48">
                            <picture className="w-full block h-full">
                              <source className="inline" sizes="(max-width: 512px) 100vw, 512px" srcSet="/assets/blog/images/59a073098db5.avif 128w, /assets/blog/images/11f98b26cc05.avif 256w, /assets/blog/images/56c4bf0f22f3.avif 384w, /assets/blog/images/0fcf43eceab2.avif 512w" />
                              {" "}
                              <img className="w-full block max-w-full overflow-clip object-contain aspect-[512/103] align-middle h-full" data-component="image" alt="" src="/assets/blog/images/0fcf43eceab2.avif" />
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
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-49">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/082ecddfba7a.jpg 240w, /assets/blog/images/eb0d389cb60a.jpg 480w, /assets/blog/images/1a161ec5cb39.jpg 720w, /assets/blog/images/daf751fb66b7.jpg 960w, /assets/blog/images/239127d01261.jpg 1440w, /assets/blog/images/dc13a528a122.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/daf751fb66b7.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <img className="w-auto h-31 flex max-w-full justify-center items-center overflow-clip object-contain aspect-[auto_624/536] align-middle [filter:invert(1)] max-md:h-[6.9375rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0625rem]" data-component="image" alt="" height="536" src="/assets/blog/svg/b0855f3cecc5.svg" width="624" />
                        {" "}
                      </div>
                      {" "}
                      <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background">
                        <div className="flex justify-between items-center">
                          <ul className="flex gap-3.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                            <li className="list-item">
                              <time className="inline" dateTime="2026-03-07T19:00:00-05:00">
                                {" March 8, 2026 "}
                              </time>
                              {" "}
                            </li>
                            <li className="list-item text-muted-foreground">
                              {" Engineering "}
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
                          {" Rethinking Container Image Distribution to eliminate cold starts "}
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/rethinking-container-image-distribution-to-eliminate-cold-starts">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          Rethinking Container Image Distribution to eliminate cold starts
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-50">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/7cec6ed59ff8.jpg 240w, /assets/blog/images/b2a953597627.jpg 480w, /assets/blog/images/931d05b09eb6.jpg 720w, /assets/blog/images/7cc0eedc2b69.jpg 960w, /assets/blog/images/9b60c7e691bd.jpg 1440w, /assets/blog/images/3fec94600663.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/7cc0eedc2b69.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <c-dato-image class="h-[124.1px] flex justify-center items-center object-contain [filter:invert(1)] w-1/4 max-md:h-[6.925rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0375rem]" id="datoimage-51">
                          <picture className="w-auto h-[6.0625rem] block max-md:h-21.5 md:max-lg:h-[11.5625rem] 2xl:h-37.5">
                            <source className="inline" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/blog/images/0f980585cb97.png 200w, /assets/blog/images/69d90a8e4f37.png 400w, /assets/blog/images/388bf69a77a5.png 600w, /assets/blog/images/198d7d0658fe.png 800w" />
                            {" "}
                            <img className="w-full h-[6.0625rem] block max-w-full overflow-clip aspect-[800/801] align-middle max-md:h-21.5 md:max-lg:h-[11.5625rem] 2xl:h-37.5" data-component="image" alt="" src="/assets/blog/images/198d7d0658fe.png" />
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
                              <time className="inline" dateTime="2026-03-01T19:00:00-05:00">
                                {" March 2, 2026 "}
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
                          {" Why Serverless Compute Partners Are Now More Important Than Ever "}
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/why-serverless-compute-partners-are-now-more-important-than-ever">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          Why Serverless Compute Partners Are Now More Important Than Ever
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    <div className="flex relative flex-col h-full">
                      <div className="h-full block absolute top-0 inset-x-0 min-w-0 rounded-[10px] bg-surface" />
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
                        <div className="w-1/2 h-[143.3px] block relative max-md:h-[125.7px] md:max-lg:h-[291.7px] 2xl:h-[14.5875rem]">
                          <div className="h-full block bg-foreground" style={{ maskImage: "url(\"/assets/blog/images/687e66466c86.avif\")" }} aria-hidden="true" />
                          {" "}
                          <c-dato-image class="w-[173.3px] block absolute opacity-1 h-full max-md:w-[152.5px] md:max-lg:w-[21.8125rem] 2xl:w-70" id="datoimage-52">
                            <picture className="w-full block h-full">
                              <source className="inline" sizes="(max-width: 512px) 100vw, 512px" srcSet="/assets/blog/images/7405a5326b27.avif 128w, /assets/blog/images/c42f2019d058.avif 256w, /assets/blog/images/5af7aef5c3e1.avif 384w, /assets/blog/images/687e66466c86.avif 512w" />
                              {" "}
                              <img className="w-full block max-w-full overflow-clip object-contain aspect-[512/65] align-middle h-full" data-component="image" alt="" src="/assets/blog/images/687e66466c86.avif" />
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
                          {" How DistilLabs is Delivering 50% Lower Inference Costs with Production-Grade Autoscaling on Cerebrium "}
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
                      <a className="h-full block absolute top-0 inset-x-0 z-3 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/how-distillabs-is-delivering-50percent-lower-inference-costs-with-production-grad">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          {" How DistilLabs is Delivering 50% Lower Inference Costs with Production-Grade Autoscaling on Cerebrium "}
                        </span>
                        {" "}
                      </a>
                      {" "}
                    </div>
                    {features.map((d, i) => <FeatureCard key={i} d={d} styles={FeatureCard_styles[i]} />)}
                    <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full">
                      <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]">
                        <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[21.5625rem] max-md:h-[291.5px] md:max-lg:w-184.5 md:max-lg:h-[623.5px] 2xl:w-150 2xl:h-[506.9px]">
                          <c-dato-image class="inline" id="datoimage-53">
                            {" "}
                            <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[18.1875rem] max-lg:transform-[none] md:max-lg:h-[38.9375rem] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]">
                              <source className="inline" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/blog/images/20237852c7a3.jpg 240w, /assets/blog/images/99baf26672ef.jpg 480w, /assets/blog/images/a1f06d189b3b.jpg 720w, /assets/blog/images/d9193e626345.jpg 960w, /assets/blog/images/3a1e58b43d05.jpg 1440w, /assets/blog/images/f3a48f316a03.jpg 1920w" />
                              {" "}
                              <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[18.1875rem] max-lg:top-0 md:max-lg:h-[38.9375rem] 2xl:h-[43.6875rem]" data-component="image" alt="" src="/assets/blog/images/d9193e626345.jpg" />
                              {" "}
                            </picture>
                            {" "}
                          </c-dato-image>
                          {" "}
                        </c-inner-parallax>
                        {" "}
                        <img className="w-auto h-31 flex max-w-full justify-center items-center overflow-clip object-contain aspect-[auto_760/719] align-middle [filter:invert(1)] max-md:h-[6.9375rem] md:max-lg:h-[14.8125rem] 2xl:h-[12.0625rem]" data-component="image" alt="" height="719" src="/assets/blog/svg/26012347e74d.svg" width="760" />
                        {" "}
                      </div>
                      {" "}
                      <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background">
                        <div className="flex justify-between items-center">
                          <ul className="flex gap-3.5 font-suisse-mono text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside">
                            <li className="list-item">
                              <time className="inline" dateTime="2026-01-26T19:00:00-05:00">
                                {" January 27, 2026 "}
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
                          {" Cerebrium is now ISO 27001 Compliant "}
                        </h3>
                        {" "}
                      </div>
                      {" "}
                      <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-component="link" href="/blog/cerebrium-is-now-iso-27001-compliant">
                        {" "}
                        <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]">
                          Cerebrium is now ISO 27001 Compliant
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
            <div className="block py-[7.5625rem] bg-surface-2 max-md:py-20 md:max-lg:py-[6.0875rem] 2xl:py-[150.3px]">
              <div className="flex max-w-500 px-10 justify-center max-lg:px-[0.9375rem]">
                <div className="flex p-2.5 rounded-[7px] justify-center items-center gap-6 bg-background">
                  <button className="flex relative opacity-50 isolate rounded-[7px] justify-center items-center gap-2 overflow-hidden text-center bg-surface-2 cursor-pointer h-[2.125rem] w-[2.125rem]" data-component="button" type="button">
                    {" "}
                    <c-scramble-text class="w-px h-px block absolute z-2 min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="scrambletext-31">
                      {" Previous "}
                    </c-scramble-text>
                    {" "}
                    <span className="flex relative justify-center items-center pointer-events-none w-5 h-5">
                      {" "}
                      <Icon3 />
                      {" "}
                    </span>
                  </button>
                  <ul className="flex justify-center items-center [list-style-type:none] list-outside">
                    {listRow2Data.map((d, i) => <ListRow2 key={i} d={d} styles={ListRow2_styles[i]} />)}
                  </ul>
                  <a className="flex relative isolate rounded-[7px] justify-center items-center gap-2 overflow-hidden bg-surface-2 cursor-pointer h-[2.125rem] w-[2.125rem]" data-component="link" href="/blog/page/2" target="_self">
                    {" "}
                    <c-scramble-text class="w-px h-px block absolute z-2 min-w-0 -m-px overflow-hidden font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase whitespace-nowrap text-nowrap [clip-path:inset(50%)]" id="scrambletext-32">
                      {" Next "}
                    </c-scramble-text>
                    {" "}
                    <span className="flex relative justify-center items-center pointer-events-none w-5 h-5">
                      {" "}
                      <Icon4 />
                      {" "}
                    </span>
                  </a>
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
