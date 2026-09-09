// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type ListRowStyles = {
  className?: string;
  className2: string;
};
export type TextLinkStyles = {
  className: string;
  className2: string;
};
export type ListRow2Styles = {
  className?: string;
};
export type TileStyles = {
  className: string;
};
export type Tile2Styles = {
  className: string;
  className2: string;
};

export const ListRow_styles: ListRowStyles[] = [
    { className: "underline", className2: "before:w-[84.5px] before:origin-[42.2578px_17px]" },
    { className2: "before:w-[60.3px] before:origin-[30.1484px_17px]" },
    { className2: "before:w-[60.3px] before:origin-[30.1484px_17px]" },
    { className2: "before:w-[84.5px] before:origin-[42.2578px_17px]" }
];
export const TextLink_styles: TextLinkStyles[] = [
    { className: "h-13.5 flex bg-accent max-lg:hidden", className2: "block" },
    { className: "h-13.5 flex text-color-001 bg-primary max-lg:hidden", className2: "block" },
    { className: "hidden min-w-0 text-color-001 bg-primary md:max-lg:h-10.5 md:max-lg:min-h-10.5 md:max-lg:flex md:max-lg:px-3.5", className2: "inline-block md:max-lg:block" }
];
export const ListRow2_styles: ListRow2Styles[] = [
    { className: "mb-2" },
    { className: "mb-2" },
    { className: "mb-2" },
    { className: "mb-2" },
    { className: "mb-2" },
    { className: "mb-2" },
    { className: "mb-2" },
    { className: "mb-2" },
    { className: "mb-2" },
    { className: "mb-2" },
    {  }
];
export const Tile_styles: TileStyles[] = [
    { className: "text-background bg-muted-foreground" },
    { className: "text-background bg-muted-foreground" },
    { className: "text-color-001 bg-primary" }
];
export const Tile2_styles: Tile2Styles[] = [
    { className: "font-normal", className2: "font-normal" },
    { className: "font-normal", className2: "font-normal" },
    { className: "font-normal", className2: "font-normal" },
    { className: "font-bold", className2: "font-bold" }
];
