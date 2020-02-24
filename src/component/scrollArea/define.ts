import {Vue} from "vue-property-decorator";

export type ScrollType = "page" | "item";

export interface ScrollAreaInterface extends Vue {
    scrollType?: ScrollType | number;

    scrollLeftIcon?: string;

    scrollRightIcon?: string;

    controlSize?: number;

    readonly marginLeft: number;

    scrollLeft(): void;

    scrollRight(): void;

    scrollTo(index: number): void;
}
