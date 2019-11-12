import {VNodeDirective} from "vue";

interface ActiveHeightParam {
    transaction?: boolean;
    noTransactionClass?: string;
    active: boolean;
    remove?: boolean;
}

export interface ActiveHeight extends VNodeDirective {
    name: "active-height";
    value: ActiveHeightParam;
}
