import UtilClass from "./util";
import {VueConstructor} from "vue";
import DateFormatter from "./DateFormatter";
import DownloadUtil from "./DownLoad";

const Util: UtilClass = new UtilClass();
const Download: DownloadUtil = new DownloadUtil();

export default {
    install(Vue: VueConstructor) {
        Vue.$util = Util;
        Vue.prototype.$util = Util;
        Vue.$download = Vue.prototype.$download = Download;

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
    Util, Download
};
