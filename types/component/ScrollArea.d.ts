export type ScrollType = "page" | "item";

export interface ScrollAreaD {
    itemWidth?: number | string;
    perSize?: number;
    scrollType: ScrollType | number;
}
