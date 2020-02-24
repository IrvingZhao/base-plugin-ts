import {Component, Inject, Prop, Vue} from "vue-property-decorator";
import {ScrollAreaInterface} from "../define";

@Component<ScrollItem>({
    created() {
        if (!this.scrollArea) {
            throw new Error("scroll-item must be child of scroll-area");
        }
    },
    render() {
        return (
            <div class={"scroll-item"} style={this.itemStyle}>
                {this.$slots.default}
            </div>
        );
    }
})
export default class ScrollItem extends Vue {
    @Inject("scrollArea")
    public scrollArea!: ScrollAreaInterface;

    @Prop({type: String, default: "auto"})
    public width!: string;

    private get itemStyle() {
        return {
            flex: `0 0 ${this.width}`,
        };
    }
}
