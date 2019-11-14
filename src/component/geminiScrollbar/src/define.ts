import ScrollBar from "./ScrollBar";
import GeminiScroll from "./GeminiScroll";

export interface GeminiScrollBaseConfig {
    forceGemini?: boolean;
    autoShow?: boolean;
    enableHor?: boolean;
    enableVer?: boolean;
    offsetX?: number;
    offsetY?: number;
    minThumbSize?: number;
}

export interface GeminiScrollbarConfig extends GeminiScrollBaseConfig {
    element: HTMLElement;
}

export interface ScrollBarConfig {
    barElement?: HTMLElement;
    minThumbSize: number;
    barMoveHandle: (scrollBar: ScrollBar, val: number) => void;
}

export declare interface ScrollProperty {
    client: "clientWidth" | "clientHeight";
    area: "width" | "height";
    clientPos: "clientX" | "clientY";
    pos: "left" | "top";
    offsetPos: "offsetX" | "offsetY";
}

export interface GeminiScrollDirectiveConfig extends GeminiScrollBaseConfig {
    autoCreate?: boolean;
    instance?: GeminiScroll;
}
