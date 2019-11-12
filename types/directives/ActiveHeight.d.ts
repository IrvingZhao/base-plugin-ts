import {VNodeDirective} from "vue";

export interface ActiveHeight extends VNodeDirective {
    name: "active-height";
    value: typeof Function; // TODO 更换为 具体的 内容
}
