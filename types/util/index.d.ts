import {VueConstructor} from "vue";
import {UtilInstance} from "./Util";

export function install(Vue: VueConstructor): void;

export * from "./Util";

declare module "vue/types/vue" {

    interface Vue {
        $util: UtilInstance;
    }

    interface VueConstructor {
        $util: UtilInstance;
    }
}
