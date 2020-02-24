import {Vue} from "vue-property-decorator";

export type ScrollType = "page" | "item";

export interface ScrollAreaInterface extends Vue {
    itemWidth?: number | string;

    perSize?: number;

    scrollType?: ScrollType | number;

    scrollLeftIcon?: string;

    scrollRightIcon?: string;

    controlSize?: number;

    scrollLeft(): void;

    scrollRight(): void;

    scrollTo(index: number): void;
}
