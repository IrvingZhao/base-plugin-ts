import {Component, Prop, Vue} from "vue-property-decorator";
import {CreateElement, VNode} from "vue";

@Component<ConfigSlot>({
    name: "xlb-config-slot",
    render(createElement: CreateElement) {
        const slotKeyMap: { [key: string]: any } = {};
        const sortKeys = this.sort || Object.keys(this.$slots);
        let hasDefault = false;
        const slotEls: VNode[] = [];
        this.slotKeys.forEach((item) => {
            slotKeyMap[item] = true;
        });
        sortKeys.forEach((item) => {
            if (!this.enabled || item === "default" || slotKeyMap[item]) {
                if (item === "default") {
                    hasDefault = true;
                }
                const slotItem = this.$slots[item];
                if (slotItem) {
                    slotItem.forEach((vNodeItem) => {
                        slotEls.push(vNodeItem);
                    });
                }
            }
        });

        if (!hasDefault) {
            if (this.$slots.default) {
                this.$slots.default.forEach((vNodeItem: VNode) => {
                    slotEls.push(vNodeItem);
                });
            }
        }
        return createElement("div", {}, slotEls);
    }
})
export default class ConfigSlot extends Vue {
    @Prop({type: Array, required: true})
    public slotKeys!: string[];

    @Prop({type: Array})
    public sort: string[] | undefined;

    @Prop({type: Boolean, default: false})
    public enabled!: boolean;
}
