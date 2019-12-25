import {ScrollBarConfig, ScrollProperty} from "./define";

export default abstract class ScrollBar {

    // 状态
    public hidden: boolean = false;

    // 必备内容
    public barElement: HTMLElement;
    protected readonly thumbElement: HTMLElement;
    // 配置内容
    protected scrollMax: number = 300; // 最大滚动区域，scroll - offset
    protected trackMax: number = 0; // 滚动槽 空白大小，滚动槽 尺寸 - 滑块 尺寸
    private naturalThumbSize: number = 0; // 计算后的 滑块尺寸
    private thumbSize: number = 0; // 实际滑块尺寸
    private prevPage: number = 0; // 滑块拖拽时，鼠标点击的位置
    private readonly minThumbSize: number; // 滑块最小尺寸
    // 事件
    private readonly barMouseDownHandleCache: (e: MouseEvent) => void; // 滑道鼠标按下事件
    private readonly thumbMouseDownHandleCache: (e: MouseEvent) => void; // 滑块鼠标按下事件
    private readonly mouseMoveHandleCache: (e: MouseEvent) => void; // 鼠标移动事件
    private readonly mouseUpHandleCache: (e: MouseEvent) => void; // 滑块鼠标抬起事件
    private readonly barMoveHandle: (scrollBar: ScrollBar, val: number) => void; // 滚动条移动 事件
    // 运行参数
    private created = false;
    private cursorDown = false; // 鼠标是否在滑块区域按下
    private createElement = false;

    public constructor(config: ScrollBarConfig) {
        this.barElement = config.barElement || this.generateBarElement();
        this.thumbElement = this.barElement.querySelectorAll<HTMLElement>(".thumb")[0];
        if (!this.thumbElement) {
            throw new Error("cannot find element with class 'thumb'");
        }
        this.minThumbSize = config.minThumbSize;

        this.barMouseDownHandleCache = this.trackHandle.bind(this);
        this.mouseMoveHandleCache = this.documentMoveHandle.bind(this);
        this.mouseUpHandleCache = this.thumbMouseUpHandle.bind(this);
        this.thumbMouseDownHandleCache = this.thumbMouseDownHandle.bind(this);
        this.barMoveHandle = config.barMoveHandle;

        this.create();
    }

    public destroy(): void {
        if (!this.created) {
            return;
        }
        this.created = false;
        this.barElement.removeEventListener("mousedown", this.barMouseDownHandleCache);
        this.thumbElement.removeEventListener("mousedown", this.thumbMouseDownHandleCache);
        if (this.createElement) {
            this.barElement.remove();
        }
    }

    /**
     * 更新滚动条尺寸 和 滑块位置
     * @param scrollSize 滚动区域大小
     * @param clientSize 视图区域大小
     * @param scrollPos 滚动位置
     * */
    public update(scrollSize: number, clientSize: number, scrollPos: number): void {
        const property = this.getScrollProperty();
        this.scrollMax = scrollSize - clientSize;
        // 计算滑块大小，滑块大小 = 滑道长度 / 滚动区域长度  *  滑道长度
        this.naturalThumbSize = this.barElement[property.client] / scrollSize * this.barElement[property.client];
        if (this.scrollMax) {
            // 设置隐藏
            this.hidden = false;
            // 设置滑道样式
            this.barElement.classList.remove("hidden");
            // 设置滑块尺寸
            this.thumbElement.style[property.area] = Math.max(this.naturalThumbSize, this.minThumbSize) + "px";
        } else {
            // 设置隐藏
            this.hidden = true;
            // 隐藏滑道
            this.barElement.classList.add("hidden");
        }

        this.thumbSize = this.thumbElement[property.client];
        this.trackMax = this.barElement[property.client] - this.thumbSize;
        this.scrollHandle(scrollPos);
    }

    /**
     * 更新滑块位置
     * @param scrollPos 滚动位置
     * */
    public abstract scrollHandle(scrollPos: number): void;

    /**
     * 设置滚动属性
     * */
    public abstract setScrollOption(current: ScrollToOptions, target: number): void;

    /**
     * 构建
     * */
    protected create(): void {
        if (this.created) {
            return;
        }
        this.created = true;
        this.barElement.addEventListener("mousedown", this.barMouseDownHandleCache);
        this.thumbElement.addEventListener("mousedown", this.thumbMouseDownHandleCache);
    }

    /**
     * 滚动条属性获取
     * @return 属性
     * */
    protected abstract getScrollProperty(): ScrollProperty;

    /**
     * 滚动条额外样式
     * @return 滚动条额外样式
     * */
    protected abstract barClasses(): string[];

    private generateBarElement(): HTMLElement {
        this.createElement = true;
        // 构建 滑道
        const result: HTMLElement = document.createElement("div");
        const barClass = this.barClasses();
        result.classList.add.apply(result.classList, ["gm-scrollbar", ...barClass]);

        // 构建滑块
        const thumbElement = document.createElement("div");
        thumbElement.classList.add("thumb");
        result.append(thumbElement);

        return result;
    }

    /**
     * 滑道鼠标按下事件
     * @param e 鼠标事件对象
     * */
    private trackHandle(e: MouseEvent): any {
        if (e.target !== e.currentTarget) {
            return;
        }
        const property = this.getScrollProperty();
        const offset = e[property.offsetPos] - this.naturalThumbSize * .5;
        const thumbPositionPercentage = offset * 100 / this.barElement[property.client];

        const scrollVal = thumbPositionPercentage * this.scrollMax / 100;
        this.barMoveHandle(this, scrollVal);
        // const scrollOption = this.generateScrollTo(scrollVal);
        // this.viewElement.scrollTo(scrollOption);
    }

    /**
     * 滑块 鼠标按下事件
     * @param e 鼠标事件对象
     * */
    private thumbMouseDownHandle(e: MouseEvent): any {
        const property = this.getScrollProperty();
        this.prevPage = this.thumbSize - e[property.offsetPos];
        this.startDrag();
    }

    /**
     * 滑块按下后，鼠标移动事件
     * @param e 事件对象
     * */
    private documentMoveHandle(e: MouseEvent): any {
        if (!this.cursorDown) {
            return;
        }
        if (this.prevPage) {
            const property = this.getScrollProperty();
            const offset = e[property.clientPos] - this.barElement.getBoundingClientRect()[property.pos];
            const thumbClickPosition = this.thumbSize - this.prevPage;
            const scrollVal = this.scrollMax * (offset - thumbClickPosition) / this.trackMax;
            this.barMoveHandle(this, scrollVal);
            // const scrollOption = this.generateScrollTo(this.scrollMax * (offset - thumbClickPosition) / this.trackMax);
            // this.viewElement.scrollTo(scrollOption);
        }
    }

    /**
     * 启动拖拽方法
     * */
    private startDrag() {
        this.cursorDown = true;
        document.body.classList.add("gm-scrollbar-disable-selection");
        document.addEventListener("mousemove", this.mouseMoveHandleCache);
        document.addEventListener("mouseup", this.mouseUpHandleCache);
        document.onselectstart = () => false;
    }

    /**
     * 取消拖拽方法
     * */
    private thumbMouseUpHandle(): any {
        this.cursorDown = false;
        this.prevPage = 0;
        document.body.classList.remove("gm-scrollbar-disable-selection");
        document.removeEventListener("mousemove", this.mouseMoveHandleCache);
        document.removeEventListener("mouseup", this.mouseUpHandleCache);
        document.onselectstart = null;
    }
}
