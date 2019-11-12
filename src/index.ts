import Component from "./component";
import Directives from "./directives";
import Util from "./util";
import {VueConstructor} from "vue";

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

export {
    Directives, Util
};
