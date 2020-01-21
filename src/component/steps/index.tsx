import {Component, Provide, Vue} from "vue-property-decorator";
import {StepInterface, StepItemInterface} from "./define";

@Component<Step>({
    render() {
        const stepItems = this.$slots.default;

        return <div class={"xlb-step"}>
            {stepItems}
        </div>;
    }
})
export default class Step extends Vue implements StepInterface {
    @Provide("step")
    public step: StepInterface = this;

    private steps: StepItemInterface[] = [];

    public get length() {
        return this.steps.length;
    }

    public addStep(step: StepItemInterface): void {
        this.steps.push(step);
        step.index = this.steps.length - 1;
    }
}
