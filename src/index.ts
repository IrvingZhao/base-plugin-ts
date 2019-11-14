import Component, {LoadingBarOperator} from "./component";
import Directives from "./directives";
import Util from "./util";
import {VueConstructor} from "vue";
import UtilClass from "./util/util";

export default {
    install(Vue: VueConstructor) {
        Vue.use(Component);
        Vue.use(Directives);
        Vue.use(Util);
    }
};

export * from "./component";
export * from "./directives";

export * from "./util";

declare module "vue/types/vue" {

    interface Vue {
        $util: UtilClass;
        $loadingBar: LoadingBarOperator;
    }

    interface VueConstructor {
        $util: UtilClass;
        $loadingBar: LoadingBarOperator;
    }
}
