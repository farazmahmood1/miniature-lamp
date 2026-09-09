import ListRow, { type ListRowData } from "../components/list-row";
import TextLink, { type TextLinkData } from "../components/text-link";
import Icon from "../svgs/svg-icon";
import { TextLink_meta } from "../ditto-meta";
import { ListRow_styles, TextLink_styles } from "../_styles";
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
/** Top navigation bar. */
export default function Navbar({ listRowData = ListRow_data, textLinkData = TextLink_data } = {}) {
  return (
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
  );
}
