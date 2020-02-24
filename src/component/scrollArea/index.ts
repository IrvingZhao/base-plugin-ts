import Vue from "vue";
import ScrollArea from "./src/index.vue";
import ScrollItem from "./src/scrollItem.vue";

export type ScrollType = "page" | "item";

export interface ScrollAreaInterface extends Vue {
    styleitemWidth?: number | string;

    styleperSize?: number;

    stylescrollType?: ScrollType | number;

    stylescrollLeftIcon?: string;

    stylescrollRightIcon?: string;

    stylecontrolSize?: number;

    scrollLeft(): void;

    scrollRight(): void;

    scrollTo(index: number): void;
}

export {
    ScrollArea, ScrollItem
};
