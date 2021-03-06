import {Component, Prop, Vue} from "vue-property-decorator";
import {CreateElement, VNode} from "vue";

@Component<TimesIterator>({
    name: "xlb-times-iterator",
    render(createElement: CreateElement): VNode {
        const children = [];
        if (this.data && this.$scopedSlots.default) {
            for (let i = 0; i < this.data.length; i += this.times) {
                const dataArr: any = [];
                const times = (i === 0 ? this.firstTimes : this.times) || this.times;
                for (let j = 0; j < times; j++) {
                    dataArr.push(this.data[i + j]);
                }
                children.push(this.$scopedSlots.default(dataArr));
            }
        }
        return createElement(this.tag, {}, children);
    }
})
export default class TimesIterator extends Vue {
    @Prop({required: true, type: Number})
    public times!: number;

    @Prop({type: Array})
    public data?: [];

    @Prop({type: Number})
    public firstTimes!: number;

    @Prop({type: String, default: "div"})
    public tag!: string;
}
