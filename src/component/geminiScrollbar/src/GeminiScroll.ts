import HorScrollBar from "./HorScrollBar";
import VerScrollBar from "./VerScrollBar";
import {GeminiScrollD, GeminiScrollbarConfig} from "../../../../types/component/GeminiScroll";
import {ScrollBarConfig, ScrollBarD} from "../../../../types/component/GeminiScrollBar";

function getScrollbarWidth(): number {
    const e = document.createElement("div");
    let sw: number;
    e.style.position = "absolute";
    e.style.top = "-9999px";
    e.style.width = "100px";
    e.style.height = "100px";
    e.style.overflow = "scroll";
    e.style.msOverflowStyle = "scrollbar";
    document.body.appendChild(e);
    sw = (e.offsetWidth - e.clientWidth);
    document.body.removeChild(e);
    return sw;
}

function isIE(): boolean {
    const agent = navigator.userAgent.toLowerCase();
    return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
}

type ScrollBarInter<T> = new(config: ScrollBarConfig) => T;


export default class GeminiScroll implements GeminiScrollD {
    public SCROLLBAR_WIDTH: number = getScrollbarWidth();
    private readonly forceGemini: boolean;
    private readonly DONT_CREATE_GEMINI: boolean = ((this.SCROLLBAR_WIDTH === 0) && this.forceGemini);
    private readonly autoShow: boolean;
    private readonly offsetX: number;
    private readonly offsetY: number;
    private readonly onResize?: () => void;
    private readonly minThumbSize: number;

    private enableHor: boolean;
    private enableVer: boolean;

    private readonly element: HTMLElement;
    private viewElement?: HTMLElement;
    private horizontalScrollBar?: ScrollBarD;
    private verticalScrollBar?: ScrollBarD;
    private resizeTriggerElement?: HTMLElement;

    private created = false;
    private addElement = false;

    private readonly viewScrollHandleCache: (e: Event) => void;

    public constructor(config: GeminiScrollbarConfig) {
        this.element = config.element;
        this.forceGemini = config.forceGemini !== false;
        this.autoShow = config.autoShow === true;
        this.enableHor = config.enableHor !== false;
        this.enableVer = config.enableVer !== false;
        this.offsetX = config.offsetX || 0;
        this.offsetY = config.offsetY || 0;
        this.minThumbSize = config.minThumbSize === 0 ? 0 : config.minThumbSize || 20;

        this.viewScrollHandleCache = this.viewScrollHandle.bind(this);
    }

    public create(): void {
        if (this.created) {
            return;
        }
        this.created = true;
        if (this.DONT_CREATE_GEMINI) {
            this.enableVer = false;
            this.enableHor = false;
        }

        this.element.classList.add("gm-scrollbar-container");
        const container = this.element;
        let viewElement = container.querySelectorAll<HTMLElement>(".gm-scroll-view")[0];
        if (!viewElement) {
            this.addElement = true;
            viewElement = document.createElement("div");
            while (container.childNodes.length > 0) {
                viewElement.appendChild(container.childNodes[0]);
            }
            container.appendChild(viewElement);
        }
        this.viewElement = viewElement;
        viewElement.classList.add("gm-scroll-view");
        if (this.enableHor || this.enableVer) {
            if (this.autoShow) {
                this.element.classList.add("gm-autoshow");
            }
            if (this.enableHor) {
                this.horizontalScrollBar = this.buildBar(HorScrollBar, HorScrollBar.BAR_CLASS);
            }
            if (this.enableVer) {
                this.verticalScrollBar = this.buildBar(VerScrollBar, VerScrollBar.BAR_CLASS);
            }
            viewElement.addEventListener("scroll", this.viewScrollHandleCache);
            this.update();
        }
        if (this.enableHor || this.enableVer || this.onResize) {
            this.createResizeTrigger();
        }
    }

    public update(): void {
        if (this.viewElement) {
            const viewElement = this.viewElement;
            if (this.horizontalScrollBar) {
                // 横向滚动条需调整 纵向值
                this.horizontalScrollBar.update(viewElement.scrollWidth, viewElement.clientWidth, viewElement.scrollLeft);
                this.viewElement.style.height = (this.element.offsetHeight + this.SCROLLBAR_WIDTH - this.offsetY).toString() + "px";
            }
            if (this.verticalScrollBar) {
                // 纵向滚动条 需 调整 横向值
                this.verticalScrollBar.update(viewElement.scrollHeight, viewElement.clientHeight, viewElement.scrollTop);
                this.viewElement.style.width = (this.element.offsetWidth + this.SCROLLBAR_WIDTH - this.offsetX).toString() + "px";
            }
        }
    }

    public destroy() {
        if (this.resizeTriggerElement) {
            this.resizeTriggerElement.remove();
        }
        if (this.DONT_CREATE_GEMINI || !this.created || !this.viewElement) {
            return;
        }
        this.element.classList.remove("gm-scrollbar-container", "gm-autoshow");
        if (this.addElement) {
            while (this.viewElement.childNodes.length > 0) {
                this.element.appendChild(this.viewElement.childNodes[0]);
            }
            this.element.removeChild(this.viewElement);
        } else {
            this.viewElement.style.width = "";
            this.viewElement.style.height = "";
        }
        if (this.horizontalScrollBar) {
            this.horizontalScrollBar.destroy();
        }
        if (this.verticalScrollBar) {
            this.verticalScrollBar.destroy();
        }
        this.created = false;
    }

    private viewScrollHandle(): void {
        if (this.viewElement) {
            if (this.horizontalScrollBar) {
                this.horizontalScrollBar.scrollHandle(this.viewElement.scrollLeft);
            }
            if (this.verticalScrollBar) {
                this.verticalScrollBar.scrollHandle(this.viewElement.scrollTop);
            }
        }
    }

    private createResizeTrigger(this: GeminiScroll) {
        const obj = document.createElement("object");
        obj.classList.add("gm-resize-trigger");
        obj.type = "text/html";
        obj.setAttribute("tabindex", "-1");
        const resizeHandler: EventListenerOrEventListenerObject = this.resizeHandler.bind(this);
        obj.onload = () => {
            const win = obj.contentDocument ? obj.contentDocument.defaultView : null;
            if (win) {
                win.addEventListener("resize", resizeHandler);
            }
        };

        // IE: Does not like that this happens before, even if it is also added after.
        if (!isIE()) {
            obj.data = "about:blank";
        }

        this.element.appendChild(obj);

        // IE: This must occur after adding the object to the DOM.
        if (isIE()) {
            obj.data = "about:blank";
        }

        this.resizeTriggerElement = obj;
    }

    private resizeHandler(this: GeminiScroll): void {
        this.update();
        if (this.onResize) {
            this.onResize();
        }
    }

    private buildBar(Constract: ScrollBarInter<ScrollBarD>, barClass: string): ScrollBarD {
        const container = this.element;
        const barElement = container.querySelectorAll<HTMLElement>(barClass);
        const result = new Constract({
            barElement: barElement[0],
            barMoveHandle: this.barMoveHandle.bind(this),
            minThumbSize: this.minThumbSize
        });
        // 如果 bar 没找到，追加
        if (barElement.length === 0) {
            container.appendChild(result.barElement);
        }
        return result;
    }

    private barMoveHandle(this: GeminiScroll, scrollBar: ScrollBarD, val: number): void {
        const viewElement = this.viewElement;
        if (viewElement) {
            const scrollOption = {
                left: viewElement.scrollLeft,
                top: viewElement.scrollTop
            };
            scrollBar.setScrollOption(scrollOption, val);
            viewElement.scrollTo(scrollOption);
        }
    }

}
