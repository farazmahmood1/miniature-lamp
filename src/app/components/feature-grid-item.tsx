import Icon8 from "../svgs/svg-icon8";
export type FeatureGridItemData = {
  variant: string;
  title: string;
  date: string;
  category: string;
  eyebrow?: string;
};
/** feature grid item component. */
export default function FeatureGridItem({ d }: { d: FeatureGridItemData }) {
  switch (d.variant) {
    case "a-low-latency-architecture-for-voice-agent":
      return (
        <div className="w-[386.7px] block max-md:w-[17.8125rem] max-lg:shrink-0 md:max-lg:w-[307.7px] 2xl:w-150" data-cid="n1081">
          <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full" data-cid="n1082">
            <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]" data-cid="n1083">
              <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[17.8125rem] max-md:h-[15.05rem] md:max-lg:w-[307.7px] md:max-lg:h-[16.25rem] 2xl:w-150 2xl:h-[506.9px]" data-cid="n1084">
                <c-dato-image class="inline" data-cid="n1085" id="datoimage-67">
                  {" "}
                  <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[15.0625rem] max-lg:transform-[none] md:max-lg:h-65 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]" data-cid="n1086">
                    <source className="inline" data-cid="n1087" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/cloned/images/7cec6ed59ff8.jpg 240w, /assets/cloned/images/b2a953597627.jpg 480w, /assets/cloned/images/931d05b09eb6.jpg 720w, /assets/cloned/images/7cc0eedc2b69.jpg 960w, /assets/cloned/images/9b60c7e691bd.jpg 1440w, /assets/cloned/images/3fec94600663.jpg 1920w" />
                    {" "}
                    <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[15.0625rem] max-lg:top-0 md:max-lg:h-65 2xl:h-[43.6875rem]" data-cid="n1088" data-component="image" alt="" src="/assets/cloned/images/7cc0eedc2b69.jpg" />
                    {" "}
                  </picture>
                  {" "}
                </c-dato-image>
                {" "}
              </c-inner-parallax>
              {" "}
              <img className="w-auto h-31 flex max-w-full justify-center items-center overflow-clip object-contain aspect-[auto_1200/1200] align-middle [filter:invert(1)] max-md:h-[5.6875rem] md:max-lg:h-[6.1875rem] 2xl:h-[12.0625rem]" data-cid="n1089" data-component="image" alt="" height="1200" src="/assets/cloned/svg/a50d90ee9913.svg" width="1200" />
              {" "}
            </div>
            {" "}
            <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background" data-cid="n1090">
              <div className="flex justify-between items-center" data-cid="n1091">
                <ul className="flex gap-3.5 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside" data-cid="n1092">
                  <li className="list-item" data-cid="n1093">
                    <time className="inline" data-cid="n1094" dateTime="2026-07-15T10:13:03-04:00">
                      {" July 15, 2026 "}
                    </time>
                    {" "}
                  </li>
                  <li className="list-item text-muted-foreground" data-cid="n1095">
                    {" Tutorial "}
                  </li>
                </ul>
                {" "}
                <span className="h-6 block opacity-0 shrink-0 [translate:4px]" data-cid="n1096" aria-hidden="true">
                  {" "}
                  <Icon8 cid={"n1097"} />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-cid="n1098" data-component="heading" aria-hidden="true">
                {" A Low-Latency Architecture for Voice Agents with Real-time Web Search "}
              </h3>
              {" "}
            </div>
            {" "}
            <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-cid="n1099" data-component="link" href="/blog/a-low-latency-architecture-for-voice-agents-with-real-time-web-search">
              {" "}
              <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n1100">
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
        <div className="w-[386.7px] block max-md:w-[17.8125rem] max-lg:shrink-0 md:max-lg:w-[307.7px] 2xl:w-150" data-cid="n1101">
          <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full" data-cid="n1102">
            <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]" data-cid="n1103">
              <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden max-md:w-[17.8125rem] max-md:h-[15.05rem] md:max-lg:w-[307.7px] md:max-lg:h-[16.25rem] 2xl:w-150 2xl:h-[506.9px]" data-cid="n1104">
                <c-dato-image class="inline" data-cid="n1105" id="datoimage-68">
                  {" "}
                  <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] max-md:h-[15.0625rem] max-lg:transform-[none] md:max-lg:h-65 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]" data-cid="n1106">
                    <source className="inline" data-cid="n1107" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/cloned/images/5b9e297cd5dc.jpg 240w, /assets/cloned/images/0f35ab962857.jpg 480w, /assets/cloned/images/825c3513fecd.jpg 720w, /assets/cloned/images/6aec5298d9b0.jpg 960w, /assets/cloned/images/3f516d703cfa.jpg 1440w, /assets/cloned/images/ca1833da6f43.jpg 1920w" />
                    {" "}
                    <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle max-md:h-[15.0625rem] max-lg:top-0 md:max-lg:h-65 2xl:h-[43.6875rem]" data-cid="n1108" data-component="image" alt="" src="/assets/cloned/images/6aec5298d9b0.jpg" />
                    {" "}
                  </picture>
                  {" "}
                </c-dato-image>
                {" "}
              </c-inner-parallax>
              {" "}
              <c-dato-image class="h-[124.1px] flex justify-center items-center object-contain [filter:invert(1)] w-1/4 max-md:h-[91.5px] md:max-lg:h-[6.175rem] 2xl:h-[12.0375rem]" data-cid="n1109" id="datoimage-69">
                <picture className="w-auto h-[6.0625rem] block max-md:h-[4.4375rem] md:max-lg:h-[4.8125rem] 2xl:h-37.5" data-cid="n1110">
                  <source className="inline" data-cid="n1111" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/cloned/images/8bf737d1626e.png 200w, /assets/cloned/images/a8a6ceb062cc.png 400w, /assets/cloned/images/241a2f73e815.png 600w, /assets/cloned/images/cf52d057750a.png 800w" />
                  {" "}
                  <img className="w-full h-[6.0625rem] block max-w-full overflow-clip aspect-square align-middle max-md:h-[4.4375rem] md:max-lg:h-[4.8125rem] 2xl:h-37.5" data-cid="n1112" data-component="image" alt="" src="/assets/cloned/images/cf52d057750a.png" />
                  {" "}
                </picture>
                {" "}
              </c-dato-image>
              {" "}
            </div>
            {" "}
            <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background" data-cid="n1113">
              <div className="flex justify-between items-center" data-cid="n1114">
                <ul className="flex gap-3.5 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside" data-cid="n1115">
                  <li className="list-item" data-cid="n1116">
                    <time className="inline" data-cid="n1117" dateTime="2026-07-13T15:12:28-04:00">
                      {" July 13, 2026 "}
                    </time>
                    {" "}
                  </li>
                  <li className="list-item text-muted-foreground" data-cid="n1118">
                    {" Annoucement "}
                  </li>
                </ul>
                {" "}
                <span className="h-6 block opacity-0 shrink-0 [translate:4px]" data-cid="n1119" aria-hidden="true">
                  {" "}
                  <Icon8 cid={"n1120"} />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-cid="n1121" data-component="heading" aria-hidden="true">
                {" 2026 GPU Buyer’s Guide "}
              </h3>
              {" "}
            </div>
            {" "}
            <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-cid="n1122" data-component="link" href="/blog/2026-gpu-buyers-guide">
              {" "}
              <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n1123">
                {d.title}
              </span>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
      );
    case "cerebrium-achieves-soc-2-type-ii-complianc":
      return (
        <div className="w-[386.7px] block max-md:w-[17.8125rem] max-lg:shrink-0 md:max-lg:w-[307.7px] 2xl:w-150" data-cid="n1124">
          <div className="flex relative rounded-[10px] flex-col overflow-hidden h-full" data-cid="n1125">
            <div className="flex relative justify-center items-center overflow-hidden aspect-[464/392]" data-cid="n1126">
              <c-inner-parallax class="w-[386.7px] h-[326.7px] block absolute top-0 left-0 min-w-0 overflow-hidden md:max-lg:w-[307.7px] md:max-lg:h-[16.25rem] 2xl:w-150 2xl:h-[506.9px]" data-cid="n1127">
                <c-dato-image class="inline" data-cid="n1128" id="datoimage-70">
                  {" "}
                  <picture className="w-full h-[20.4375rem] block absolute transform-[matrix(1,0,0,1,0,-80)] md:max-lg:h-65 md:max-lg:transform-[none] 2xl:h-[31.6875rem] 2xl:transform-[matrix(1,0,0,1,0,-108)]" data-cid="n1129">
                    <source className="inline" data-cid="n1130" sizes="(max-width: 999px) 100vw, 33vw" srcSet="/assets/cloned/images/cfe02a570ff7.jpg 240w, /assets/cloned/images/cc4d1f34171f.jpg 480w, /assets/cloned/images/d672dde8ec2e.jpg 720w, /assets/cloned/images/59cdd3990ceb.jpg 960w, /assets/cloned/images/191ec76fa273.jpg 1440w, /assets/cloned/images/4d8a8180db80.jpg 1920w" />
                    {" "}
                    <img className="w-full h-[32.4375rem] block absolute -top-24 max-w-full overflow-clip object-cover align-middle md:max-lg:h-65 md:max-lg:top-0 2xl:h-[43.6875rem]" data-cid="n1131" data-component="image" alt="" src="/assets/cloned/images/59cdd3990ceb.jpg" />
                    {" "}
                  </picture>
                  {" "}
                </c-dato-image>
                {" "}
              </c-inner-parallax>
              {" "}
              <c-dato-image class="h-[124.1px] flex justify-center items-center object-contain [filter:invert(1)] w-1/4 max-md:h-[91.5px] md:max-lg:h-[6.175rem] 2xl:h-[12.0375rem]" data-cid="n1132" id="datoimage-71">
                <picture className="w-auto h-[6.0625rem] block max-md:h-[4.4375rem] md:max-lg:h-[4.8125rem] 2xl:h-37.5" data-cid="n1133">
                  <source className="inline" data-cid="n1134" sizes="(max-width: 800px) 100vw, 800px" srcSet="/assets/cloned/images/52629b52ea82.png 200w, /assets/cloned/images/d46eeab178b9.png 400w, /assets/cloned/images/7c3d7da345fa.png 600w, /assets/cloned/images/364b5f0ffd53.png 800w" />
                  {" "}
                  <img className="w-full h-[6.0625rem] block max-w-full overflow-clip aspect-square align-middle max-md:h-[4.4375rem] md:max-lg:h-[4.8125rem] 2xl:h-37.5" data-cid="n1135" data-component="image" alt="" src="/assets/cloned/images/364b5f0ffd53.png" />
                  {" "}
                </picture>
                {" "}
              </c-dato-image>
              {" "}
            </div>
            {" "}
            <div className="flex pt-5 pb-7 px-5 flex-col grow gap-3.5 bg-background" data-cid="n1136">
              <div className="flex justify-between items-center" data-cid="n1137">
                <ul className="flex gap-3.5 [font-family:'Suisse_Int'l_Mono',_monospace] text-[0.8125rem] font-normal leading-3.5 tracking-[-0.32px] uppercase [list-style-type:none] list-outside" data-cid="n1138">
                  <li className="list-item" data-cid="n1139">
                    <time className="inline" data-cid="n1140" dateTime="2026-07-07T22:28:30-04:00">
                      {" July 8, 2026 "}
                    </time>
                    {" "}
                  </li>
                  <li className="list-item text-muted-foreground" data-cid="n1141">
                    {" Product Update "}
                  </li>
                  <li className="list-item text-muted-foreground" data-cid="n1142">
                    {" Annoucement "}
                  </li>
                </ul>
                {" "}
                <span className="h-6 block opacity-0 shrink-0 [translate:4px]" data-cid="n1143" aria-hidden="true">
                  {" "}
                  <Icon8 cid={"n1144"} />
                  {" "}
                </span>
                {" "}
              </div>
              {" "}
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-cid="n1145" data-component="heading" aria-hidden="true">
                {" Cerebrium Achieves SOC 2 Type II Compliance for Secure Production AI Infrastructure "}
              </h3>
              {" "}
            </div>
            {" "}
            <a className="h-full block absolute top-0 inset-x-0 z-1 min-w-0 rounded-[10px] cursor-pointer" data-cid="n1146" data-component="link" href="/blog/cerebrium-achieves-soc-2-type-ii-compliance-for-secure-production-ai-infrastructure">
              {" "}
              <span className="w-px h-px block absolute -m-px overflow-hidden whitespace-nowrap text-nowrap [clip-path:inset(50%)]" data-cid="n1147">
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
