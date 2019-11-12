import {CreateElement, VNode} from "vue";
import {Inject, Prop} from "vue-property-decorator";

export interface ColumnRenderConfig {
    label: string;
    index?: number;
    renderHeader: (h: CreateElement, config: RenderHeadConfig) => VNode;
    renderCell: (h: CreateElement, config: RenderCellConfig) => VNode;
}

export interface RenderCellConfig {
    row: any;
    rIndex: number;
    index: number;
    level: number;
    hasChildren: boolean;
    rowActive: boolean;
}

export interface RenderHeadConfig {
    label: string;
}

export interface TreeTableClass {

    normalIcon?: string;

    openIcon?: string;

    closeIcon?: string;

    addColumns(column: ColumnRenderConfig): void;

    tableBodyScroll(target: HTMLElement): void;

    pageResizeHandle(): void;

}

export interface TableColumnD {
    property?: string;

    formatter?: (h: CreateElement, row: any, column: TableColumnD, $index: number) => any;

    renderHeader?: (h: CreateElement, data: any) => void;

    prop?: string;

    label?: string;

    width: number | string;
}
