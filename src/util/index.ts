import Util from "./util";
import {VueConstructor} from "vue";
import DateFormatter from "./DateFormatter";

const UtilInstance: Util = new Util();

export default {
    install(Vue: VueConstructor) {
        Vue.$util = UtilInstance;
        Vue.prototype.$util = UtilInstance;

        Vue.filter("simpleDate", (val: Date | number) => {
            return DateFormatter(val, "yyyy-MM-dd");
        });

        Vue.filter("fullDate", (val: Date | number) => {
            return DateFormatter(val, "yyyy-MM-dd HH:mm:ss");
        });

        Vue.filter("dateFormat", (val: Date | number, pattern: string) => {
            return DateFormatter(val, pattern);
        });
    },
};

export {
    UtilInstance
};
