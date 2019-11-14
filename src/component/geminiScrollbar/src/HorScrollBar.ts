import ScrollBar from "./ScrollBar";
import {ScrollProperty} from "./define";

export default class HorScrollBar extends ScrollBar {

    public static BAR_CLASS: string = ".gm-scrollbar.-horizontal";

    public scrollHandle(scrollPos: number): void {
        const pos = (scrollPos * this.trackMax / this.scrollMax) || 0;
        this.thumbElement.style.transform = "translate3d(" + pos + "px, 0, 0)";
    }

    public setScrollOption(current: ScrollToOptions, target: number) {
        current.left = target;
    }

    protected barClasses(): string[] {
        return ["-horizontal"];
    }

    protected getScrollProperty(): ScrollProperty {
        return {
            client: "clientWidth",
            area: "width",
            clientPos: "clientX",
            pos: "left",
            offsetPos: "offsetX",
        };
    }

}
