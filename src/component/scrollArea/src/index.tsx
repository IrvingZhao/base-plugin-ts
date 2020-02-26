import {Component, Prop, Provide, Vue} from "vue-property-decorator";
import {ScrollAreaInterface, ScrollType} from "../define";

@Component<ScrollArea>({
    created() {
        this.state.index = this.initIndex;
    },
    render() {
        return (
            <div class={"scroll-area"}>
                <div class={["scroll-control", "left", {disable: this.state.index === 0}]} style={this.controlStyle} onclick={this.scrollLeft}>
                    <i class={this.scrollLeftIcon}/>
                </div>
                <div class={"scroll-content"}>
                    <div class={["scroll-content-wrapper", {trans: this.enableTrans}]} style={this.wrapperStyle} ref={"scrollContent"}>
                        {this.$slots.default}
                    </div>
                </div>
                <div class={["scroll-control", "right", {disable: this.state.index === this.maxScrollIndex}]} style={this.controlStyle}
                     onclick={this.scrollRight}>
                    <i class={this.scrollRightIcon}/>
                </div>
            </div>
        );
    },
    mounted() {
        console.info("scroll - area =========== ", this);
        this.state.scrollContent = this.$refs.scrollContent;
    }
})
export default class ScrollArea extends Vue implements ScrollAreaInterface {
    public $refs!: { scrollContent: HTMLElement };

    @Prop({type: [String, Number], default: "page"})
    public scrollType!: ScrollType | number;

    @Prop({type: String, default: "sys-icon-prevpage"})
    public scrollLeftIcon!: string;

    @Prop({type: String, default: "sys-icon-nextpage"})
    public scrollRightIcon!: string;

    @Prop({type: Number, default: 34})
    public controlSize!: number;

    @Prop({type: Number, default: 0})
    public initIndex!: number;

    @Prop({type: Boolean, default: false})
    public enableTrans!: boolean;

    @Provide("scrollArea")
    private scrollArea: ScrollAreaInterface = this;

    public get wrapperStyle() {
        return {
            "margin-left": (this.marginLeft * -1) + "px"
        };
    }

    public get marginLeft(): number {
        const $scrollContent = this.state.scrollContent;
        if (!$scrollContent) {
            return 0;
        }
        if (this.scrollType === "page") {
            return $scrollContent.offsetWidth * this.state.index;
        } else if (this.scrollType === "item") {
            if (this.state.index >= $scrollContent.childElementCount) {
                this.state.index = $scrollContent.childElementCount - 1;
            }
            const $indexChild = $scrollContent.children.item(this.state.index);
            if ($indexChild && $indexChild instanceof HTMLElement) {
                return $indexChild.offsetLeft;
            } else {
                return 0;
            }
        } else {
            return this.scrollType * this.state.index;
        }
    }

    private get controlStyle() {
        return {
            "font-size": `${this.controlSize}px`,
        };
    }

    private get maxScrollIndex() {
        const $scrollContent = this.state.scrollContent;
        if (!$scrollContent) {
            return 0;
        }
        if (this.scrollType === "page") {
            return Math.ceil($scrollContent.scrollWidth / $scrollContent.offsetWidth) - 1;
        } else if (this.scrollType === "item") {
            return $scrollContent.children.length - 1;
        } else {
            return Math.ceil(($scrollContent.scrollWidth - $scrollContent.offsetWidth) / this.scrollType);
        }
    }

    private state: { index: number, scrollContent: HTMLElement | null } = {
        index: 0,
        scrollContent: null
    };

    public scrollLeft(): void {
        if (this.state.index === 0) {
            return;
        }
        this.state.index -= 1;
        this.$emit("scrollTo", this.state.index);
    }

    public scrollRight(): void {
        if (this.state.index === this.maxScrollIndex) {
            return;
        }
        this.state.index += 1;
        this.$emit("scrollTo", this.state.index);
    }

    public scrollTo(index: number): void {
        if (index < 0) {
            index = 0;
        } else if (index > this.maxScrollIndex) {
            index = this.maxScrollIndex;
        }
        this.state.index = index;
        this.$emit("scrollTo", this.state.index);
    }
}
