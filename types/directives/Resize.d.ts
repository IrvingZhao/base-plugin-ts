import {VNodeDirective} from "vue";

export interface XlbResize extends VNodeDirective {
    name: "resize";
    value: typeof Function;
}
