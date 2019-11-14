import ScrollBar from "./ScrollBar";
import {ScrollProperty} from "./define";

export default class VerScrollBar extends ScrollBar {

    public static BAR_CLASS: string = ".gm-scrollbar.-vertical";

    public scrollHandle(scrollPos: number): void {
        const pos = (scrollPos * this.trackMax / this.scrollMax) || 0;
        this.thumbElement.style.transform = "translate3d(0, " + pos + "px, 0)";
    }

    public setScrollOption(current: ScrollToOptions, target: number) {
        current.top = target;
    }

    protected barClasses(): string[] {
        return ["-vertical"];
    }

    protected getScrollProperty(): ScrollProperty {
        return {
            client: "clientHeight",
            area: "height",
            clientPos: "clientY",
            pos: "top",
            offsetPos: "offsetY",
        };
    }

}
