// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type ListRowStyles = {
  className: string;
};
export type TextLinkStyles = {
  className: string;
  className2: string;
};
export type LogoStyles = {
  className: string;
  className2: string;
  className3: string;
};
export type MediaCardStyles = {
  className: string;
  className2: string;
  className3: string;
};

export const ListRow_styles: ListRowStyles[] = [
    { className: "before:w-[84.5px] before:origin-[42.2578px_17px]" },
    { className: "before:w-[60.3px] before:origin-[30.1484px_17px]" },
    { className: "before:w-[60.3px] before:origin-[30.1484px_17px]" },
    { className: "before:w-[84.5px] before:origin-[42.2578px_17px]" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "h-13.5 flex text-foreground bg-accent max-lg:hidden", className2: "block" },
    { className: "h-13.5 flex text-color-001 bg-primary max-lg:hidden", className2: "block" },
    { className: "hidden min-w-0 text-color-001 bg-primary md:max-lg:h-10.5 md:max-lg:min-h-10.5 md:max-lg:flex md:max-lg:px-3.5", className2: "inline-block md:max-lg:block" }
];
export const Logo_styles: LogoStyles[] = [
    { className: "hidden max-lg:border max-lg:border-solid max-lg:border-background max-lg:block", className2: "hidden max-lg:h-full max-lg:block max-lg:relative max-lg:aspect-square", className3: "hidden max-lg:w-auto max-md:h-[4.5625rem] max-lg:block max-lg:overflow-hidden max-lg:align-middle md:max-lg:h-[6.8125rem]" },
    { className: "border border-solid border-primary block text-primary 2xl:hidden", className2: "h-full block relative aspect-square 2xl:hidden", className3: "w-auto h-[11.3125rem] block overflow-hidden align-middle max-md:h-[4.5625rem] md:max-lg:h-[6.8125rem] 2xl:hidden" },
    { className: "border border-solid border-primary block text-primary max-md:border-background max-md:text-[color:inherit] 2xl:hidden", className2: "h-full block relative aspect-square 2xl:hidden", className3: "w-auto h-[11.3125rem] block overflow-hidden align-middle max-md:h-[4.5625rem] md:max-lg:h-[6.8125rem] 2xl:hidden" },
    { className: "border border-solid border-background block md:max-lg:hidden", className2: "h-full block relative aspect-square md:max-lg:hidden", className3: "w-auto h-[11.3125rem] block overflow-hidden align-middle max-md:h-[4.5625rem] md:max-lg:hidden 2xl:h-72" },
    { className: "hidden 2xl:border 2xl:border-solid 2xl:border-background 2xl:block", className2: "hidden 2xl:block 2xl:relative 2xl:aspect-square", className3: "hidden 2xl:w-72 2xl:h-72 2xl:block 2xl:overflow-hidden 2xl:align-middle" },
    { className: "border border-solid border-primary block text-primary max-md:hidden", className2: "h-full block relative aspect-square", className3: "w-auto h-[11.3125rem] block overflow-hidden align-middle md:max-lg:h-[6.8125rem] 2xl:h-72" },
    { className: "hidden 2xl:border 2xl:border-solid 2xl:border-primary 2xl:block 2xl:text-primary", className2: "hidden 2xl:block 2xl:relative 2xl:aspect-square", className3: "hidden 2xl:w-72 2xl:h-72 2xl:block 2xl:overflow-hidden 2xl:align-middle" },
    { className: "border border-solid border-background block max-md:hidden md:max-lg:border-primary md:max-lg:text-primary", className2: "h-full block relative aspect-square", className3: "w-auto h-[11.3125rem] block overflow-hidden align-middle md:max-lg:h-[6.8125rem] 2xl:h-72" },
    { className: "border border-solid border-background block max-md:hidden", className2: "h-full block relative aspect-square max-md:hidden", className3: "w-auto h-[11.3125rem] block overflow-hidden align-middle max-md:hidden md:max-lg:h-[6.8125rem] 2xl:h-72" }
];
export const MediaCard_styles: MediaCardStyles[] = [
    { className: "-top-165.5 transform-[matrix(0.65,0,0,0.65,0,0)] max-md:h-[6.05rem] max-md:-top-125.5 max-md:origin-[138px_48.3984px] md:max-lg:-top-[16.5625rem] 2xl:-top-245.5 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_46/46]", className3: "opacity-60 2xl:w-[33.6rem]" },
    { className: "-top-137 transform-[matrix(0.65,0,0,0.65,0,0)] max-md:h-[6.1875rem] max-md:-top-105.5 max-md:origin-[138px_49.5391px] md:max-lg:-top-31.5 2xl:-top-209.5 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_1919/1176]", className3: "opacity-60 2xl:w-[33.6rem]" },
    { className: "-top-108.5 transform-[matrix(0.65,0,0,0.65,0,0)] max-md:h-[6.05rem] max-md:-top-85.5 max-md:origin-[138px_48.3984px] md:max-lg:top-7.5 md:max-lg:transform-[matrix(0.8334,0,0,0.8334,0,0)] 2xl:-top-[43.3125rem] 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_1919/1176]", className3: "opacity-60 md:max-lg:opacity-[0.325] 2xl:w-[33.6rem]" },
    { className: "-top-80 transform-[matrix(0.65,0,0,0.65,0,0)] max-md:h-[6.05rem] max-md:-top-[16.3125rem] max-md:origin-[138px_48.3984px] md:max-lg:top-[13.3125rem] md:max-lg:transform-[matrix(0.9875,0,0,0.9875,0,0)] 2xl:-top-[34.3125rem] 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_1919/1176]", className3: "opacity-60 md:max-lg:opacity-[0.025] 2xl:w-[33.6rem]" },
    { className: "-top-51.5 transform-[matrix(0.65,0,0,0.65,0,0)] max-md:h-[6.05rem] max-md:-top-[11.3125rem] max-md:origin-[138px_48.3984px] md:max-lg:top-[24.9375rem] md:max-lg:transform-[matrix(0.8625,0,0,0.8625,0,0)] 2xl:-top-[25.3125rem] 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_276/66]", className3: "opacity-60 md:max-lg:opacity-[0.275] 2xl:w-[33.6rem]" },
    { className: "-top-23 transform-[matrix(0.6597,0,0,0.6597,0,0)] max-md:h-[6.05rem] max-md:-top-[6.3125rem] max-md:transform-[matrix(0.65,0,0,0.65,0,0)] max-md:origin-[138px_48.3984px] md:max-lg:top-139.5 md:max-lg:transform-[matrix(0.6666,0,0,0.6666,0,0)] 2xl:-top-65 2xl:transform-[matrix(0.65,0,0,0.65,0,0)] 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_1919/1176]", className3: "opacity-[0.5854] max-md:opacity-60 md:max-lg:opacity-[0.575] 2xl:w-[33.6rem] 2xl:opacity-60" },
    { className: "top-[2.3125rem] transform-[matrix(0.8573,0,0,0.8573,0,0)] max-md:h-[6.1875rem] max-md:-top-[0.8125rem] max-md:transform-[matrix(0.8415,0,0,0.8415,0,0)] max-md:origin-[138px_49.5391px] md:max-lg:top-174.5 md:max-lg:transform-[matrix(0.65,0,0,0.65,0,0)] 2xl:-top-29 2xl:transform-[matrix(0.65,0,0,0.65,0,0)] 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_1919/1176]", className3: "opacity-[0.2854] max-md:opacity-[0.3128] md:max-lg:opacity-60 2xl:w-[33.6rem] 2xl:opacity-60" },
    { className: "top-[11.8125rem] transform-[matrix(0.9927,0,0,0.9927,0,0)] max-md:h-[6.05rem] max-md:top-[5.8125rem] max-md:transform-[matrix(0.9936,0,0,0.9936,0,0)] max-md:origin-[138px_48.3984px] md:max-lg:top-209.5 md:max-lg:transform-[matrix(0.65,0,0,0.65,0,0)] 2xl:top-11.5 2xl:transform-[matrix(0.85,0,0,0.85,0,0)] 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_46/46]", className3: "opacity-[0.0146] max-md:opacity-[0.0128] md:max-lg:opacity-60 2xl:w-[33.6rem] 2xl:opacity-30" },
    { className: "top-85 transform-[matrix(0.8403,0,0,0.8403,0,0)] max-md:h-[6.05rem] max-md:top-50 max-md:transform-[matrix(0.8564,0,0,0.8564,0,0)] max-md:origin-[138px_48.3984px] md:max-lg:top-[61.0625rem] md:max-lg:transform-[matrix(0.65,0,0,0.65,0,0)] 2xl:top-[14.9375rem] 2xl:transform-[none] 2xl:origin-[initial]", className2: "aspect-[auto_1919/1176]", className3: "opacity-[0.3146] max-md:opacity-[0.2872] md:max-lg:opacity-60 2xl:opacity-0" },
    { className: "top-[29.1875rem] transform-[matrix(0.65,0,0,0.65,0,0)] max-md:h-[6.05rem] max-md:top-72.5 max-md:transform-[matrix(0.6585,0,0,0.6585,0,0)] max-md:origin-[138px_48.3984px] md:max-lg:top-279 2xl:top-[26.9375rem] 2xl:transform-[matrix(0.85,0,0,0.85,0,0)] 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_276/66]", className3: "opacity-60 max-md:opacity-[0.5872] 2xl:w-[33.6rem] 2xl:opacity-30" },
    { className: "top-145 transform-[matrix(0.65,0,0,0.65,0,0)] max-md:h-[6.05rem] max-md:top-[23.1875rem] max-md:origin-[138px_48.3984px] md:max-lg:top-314 2xl:top-[37.0625rem] 2xl:origin-[268.797px_87.6328px]", className2: "aspect-[auto_1919/1176]", className3: "opacity-60 2xl:w-[33.6rem]" }
];
