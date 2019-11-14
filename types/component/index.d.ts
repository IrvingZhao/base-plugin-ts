// tslint:disable:max-classes-per-file
import {CreateElement, VNodeDirective, VueConstructor} from "vue";
import {GeminiScrollbarConfig, GeminiScrollBaseConfig, GeminiScrollD} from "./GeminiScroll";
import {ScrollBarConfig} from "./GeminiScrollBar";
import {LoadingBar} from "./LoadingBar";
import {Vue} from "vue-property-decorator";
import {XlbConfigSlot} from "./ConfigSlot";
import {ScrollAreaD, ScrollType} from "./ScrollArea";
import {TimesIteratorD} from "./TimesIterator";
import {TreeTableClass, TableColumnD, ColumnRenderConfig} from "./TreeTable";

export function install(Vue: VueConstructor): void;

export declare class ConfigSlot extends Vue implements XlbConfigSlot {
    public slotKeys: string[];
    public sort?: string[];
    public enable?: boolean;
}

export interface GeminiScrollDirectiveConfig extends GeminiScrollBaseConfig {
    autoCreate?: boolean;
    instance?: GeminiScrollD;
}

export declare class GeminiScroll extends GeminiScrollD {
}

export interface GeminiScrollDirective extends VNodeDirective {
    name: "gemini-scroll";
    value: GeminiScrollDirectiveConfig;
}

export declare class ScrollArea extends Vue implements ScrollAreaD {
    public itemWidth: number | string;
    public perSize: number;
    public scrollType: ScrollType | number;
    public scrollLeftIcon?: string;
    public scrollRightIcon?: string;
}

export declare class ScrollItem extends Vue {
}

export declare class TreeTable extends Vue implements TreeTableClass {
    public closeIcon?: string;
    public normalIcon?: string;
    public openIcon: string;

    public addColumns(column: ColumnRenderConfig): void;

    public pageResizeHandle(): void;

    public tableBodyScroll(target: HTMLElement): void;

}

export declare class TreeTableColumn extends Vue implements TableColumnD {
    public formatter?: (h: CreateElement, row: any, column: TableColumnD, $index: number) => any;
    public label?: string;
    public prop?: string;
    public property?: string;
    public renderHeader?: (h: CreateElement, data: any) => void;
    public width: number | string;

}

export declare class TimesIterator implements TimesIteratorD {
    public data: [];
    public firstTimes?: number;
    public times: number;
}

export {
    GeminiScrollbarConfig,
    ScrollBarConfig,
    LoadingBar,
};
