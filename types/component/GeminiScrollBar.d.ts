// tslint:disable:max-classes-per-file
export interface ScrollBarConfig {
    barElement?: HTMLElement;
    minThumbSize: number;
    barMoveHandle: (scrollBar: ScrollBarD, val: number) => void;
}

export declare class ScrollBarD {

    /**
     * 滚动条节点
     * */
    public barElement: HTMLElement;

    constructor(config: ScrollBarConfig);

    /**
     * 销毁
     * */
    public destroy(): void;

    /**
     * 更新滚动条尺寸 和 滑块位置
     * @param scrollSize 滚动区域大小
     * @param clientSize 视图区域大小
     * @param scrollPos 滚动位置
     * */
    public update(scrollSize: number, clientSize: number, scrollPos: number): void;

    /**
     * 更新滑块位置
     * @param scrollPos 滚动位置
     * */
    public scrollHandle(scrollPos: number): void;

    /**
     * 设置滚动属性
     * @param current 当前滚动信息
     * @param target 目标滚动位置
     * */
    public setScrollOption(current: ScrollToOptions, target: number): void;

}
