import Icon2 from "../svgs/svg-icon2";
import Icon3 from "../svgs/svg-icon3";
export type ProductCardData = {
  variant: string;
  title: string;
  description: string;
  label: string;
  price?: string;
  badge?: string;
};
/** A product card. */
export default function ProductCard({ d }: { d: ProductCardData }) {
  switch (d.variant) {
    case "hobby":
      return (
        <div className="block relative h-auto">
          <div className="flex p-5 rounded-[10px] flex-col gap-15 bg-surface h-full max-md:p-6 max-md:gap-10 md:max-lg:p-[0.9375rem]">
            <div className="block">
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                {d.title}
              </h3>
              {" "}
              <p className="block text-muted-foreground">
                For developers getting started
              </p>
              {" "}
            </div>
            {" "}
            <div className="block">
              <p className="block font-favorit text-[3.3125rem] font-light leading-[3.5rem] tracking-[-2.66px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[4.375rem] 2xl:leading-[4.5625rem] 2xl:tracking-[-3.5px]">
                {" Free "}
                <span className="inline text-muted-foreground font-suisse text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[0.16px]">
                  + compute / month
                </span>
                {" "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="block">
              <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    3 user seats
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Up to 3 deployed apps
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    {d.description}
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    {"Stack & intercom support"}
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    1 day log retention
                  </span>
                  {" "}
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div className="flex items-end grow">
              <a className="h-13.5 min-h-13.5 flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-background bg-muted-foreground cursor-pointer w-full max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="https://dashboard.cerebrium.ai/register" target="_self">
                {" "}
                <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-33">
                  {" Start for free "}
                </c-scramble-text>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      );
    case "standard":
      return (
        <div className="block relative h-auto">
          <div className="flex p-5 rounded-[10px] flex-col gap-15 bg-surface h-full max-md:p-6 max-md:gap-10 md:max-lg:p-[0.9375rem]">
            <div className="block">
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                {d.title}
              </h3>
              {" "}
              <p className="block text-muted-foreground">
                {d.description}
              </p>
              {" "}
            </div>
            {" "}
            <div className="block">
              <p className="block font-favorit text-[3.3125rem] font-light leading-[3.5rem] tracking-[-2.66px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[4.375rem] 2xl:leading-[4.5625rem] 2xl:tracking-[-3.5px]">
                {" $100 "}
                <span className="inline text-muted-foreground font-suisse text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[0.16px]">
                  + compute / month
                </span>
                {" "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="block">
              <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Everything in Hobby plan
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Unlimited seats
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Unlimited apps
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    1000 containers + 30 GPU concurency
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Custom domains
                  </span>
                  {" "}
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div className="flex items-end grow">
              <a className="h-13.5 min-h-13.5 flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-background bg-muted-foreground cursor-pointer w-full max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="https://dashboard.cerebrium.ai/register" target="_self">
                {" "}
                <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-34">
                  {" Start for free "}
                </c-scramble-text>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      );
    case "enterprise":
      return (
        <div className="block relative h-auto max-lg:mt-13">
          <div className="h-[3.4375rem] flex absolute bottom-[35.375rem] inset-x-0 py-4 px-8.5 rounded-tl-[10px] rounded-tr-[10px] justify-between items-center text-color-001 bg-primary max-lg:h-[3.35rem] max-md:bottom-[29.5375rem] md:max-lg:bottom-[33.125rem] 2xl:bottom-[36.8rem]">
            <span className="block text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
              {d.badge}
            </span>
            {" "}
            <span className="block">
              {" "}
              <Icon3 />
              {" "}
            </span>
            {" "}
          </div>
          {" "}
          <div className="flex p-5 rounded-br-[10px] rounded-bl-[10px] flex-col gap-15 bg-surface h-full max-md:p-6 max-md:gap-10 md:max-lg:p-[0.9375rem]">
            <div className="block">
              <h3 className="block text-[1.625rem] font-normal leading-[2.1875rem] tracking-[-0.64px] max-md:text-xl max-md:leading-[1.6875rem] max-md:tracking-[-0.5px] md:max-lg:text-[1.375rem] md:max-lg:leading-[1.875rem] md:max-lg:tracking-[-0.56px] 2xl:text-3xl 2xl:leading-[2.5rem] 2xl:tracking-[-0.74px]" data-component="heading">
                {d.title}
              </h3>
              {" "}
              <p className="block text-muted-foreground">
                {d.description}
              </p>
              {" "}
            </div>
            {" "}
            <div className="block">
              <p className="block font-favorit text-[3.3125rem] font-light leading-[3.5rem] tracking-[-2.66px] max-md:text-[2.5rem] max-md:leading-10.5 max-md:tracking-[-1px] md:max-lg:text-[3.25rem] md:max-lg:leading-[3.375rem] md:max-lg:tracking-[-1.29px] 2xl:text-[4.375rem] 2xl:leading-[4.5625rem] 2xl:tracking-[-3.5px]">
                {" Custom "}
                <span className="inline text-muted-foreground font-suisse text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:text-base max-lg:leading-[1.375rem] max-lg:tracking-[0.16px]" />
                {" "}
              </p>
              {" "}
            </div>
            {" "}
            <div className="block">
              <ul className="flex flex-col gap-2 [list-style-type:none] list-outside">
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Everything in Standard plan
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Volume Discounts
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Unlimited Concurrent GPUs
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    Dedicated Slack support
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    White glove onboarding
                  </span>
                  {" "}
                </li>
                <li className="flex gap-2 text-[1.0625rem] font-normal leading-[1.4375rem] tracking-[0.17px] max-lg:leading-[1.375rem] max-lg:tracking-[0.16px] max-lg:[font-size:inherit]">
                  <span className="block">
                    {" "}
                    <Icon2 />
                    {" "}
                  </span>
                  {" "}
                  <span className="block text-muted-foreground">
                    ML engineering services
                  </span>
                  {" "}
                </li>
              </ul>
              {" "}
            </div>
            {" "}
            <div className="flex items-end grow">
              <a className="h-13.5 min-h-13.5 flex relative isolate px-5 rounded-[7px] justify-center items-center gap-2 overflow-hidden text-color-001 bg-primary cursor-pointer w-full max-lg:h-10.5 max-lg:min-h-10.5 max-lg:px-3.5" data-component="link" href="/contact" target="_self">
                {" "}
                <c-scramble-text class="block z-2 font-suisse-mono text-[0.8125rem] font-normal leading-[0.8125rem] tracking-[-0.32px] uppercase" id="scrambletext-35">
                  {" Contact us "}
                </c-scramble-text>
                {" "}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
      );
    default:
      return null;
  }
}
