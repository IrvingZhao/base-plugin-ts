import {Component, Inject, Prop, Vue} from "vue-property-decorator";
import {StepInterface, StepItemInterface, StepItemStatus} from "./define";

@Component<StepItem>({
    // inject: ["step"],
    created() {
        this.step.addStep(this);
    },
    render() {
        const icon = this.$slots.icon || this.icon || (this.index + 1);
        const title = this.$slots.title || this.title;
        const desc = this.$slots.desc || this.desc;
        return <div class={["step-item", this.status || "wait", {"is-last": this.isLast}]} style={this.styles}>
            <div class={"step-title"}>
                <div class={"step-icon"}>{icon}</div>
                <div class={"title-text"}>{title}</div>
                <div class={"step-line"}/>
            </div>
            <div class={"step-desc"}>{desc}</div>
        </div>;
    }
})
export default class StepItem extends Vue implements StepItemInterface {
    @Prop(String) public status?: StepItemStatus;
    @Prop(String) public icon?: string;
    @Prop(String) public title?: string;
    @Prop(String) public desc?: string;
    public index: number = 0;

    @Inject("step")
    public step!: StepInterface;

    public get isLast() {
        return this.step.length - this.index === 1;
    }

    public get styles() {
        return this.isLast ? {
            "max-width": (100 / this.step.length) + "%",
        } : {};
    }
}
