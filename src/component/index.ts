import {VueConstructor} from "vue";
import ConfigSlot from "./configSlot";
import GeminiScrollDirective, {GeminiScroll, GeminiScrollDirectiveConfig} from "./geminiScrollbar";
import LoadingBar from "./loadingBar";
import ScrollArea from "./scrollArea/index.vue";
import ScrollItem from "./scrollArea/scrollItem.vue";
import TimesIterator from "./timesIterator";
import TreeTable from "./treeTable/index.vue";
import TreeTableColumn from "./treeTable/TableColumn";
import {LoadingBarOperator, LoadingBarOptions} from "./loadingBar/define";
import {TreeTableClass, TableColumnClass} from "./treeTable/define";

export default {
    install(Vue: VueConstructor): void {
        Vue.component("xlb-config-slot", ConfigSlot);
        Vue.component("xlb-scroll-area", ScrollArea);
        Vue.component("xlb-scroll-item", ScrollItem);
        Vue.component("xlb-times-iterator", TimesIterator);
        Vue.component("xlb-tree-table", TreeTable);
        Vue.component("xlb-tree-table-column", TreeTableColumn);
        Vue.directive("gemini-scroll", GeminiScrollDirective);
        Vue.$loadingBar = new LoadingBar();
        Vue.prototype.$loadingBar = new LoadingBar();
    }
};

export {
    ConfigSlot,
    GeminiScroll,
    GeminiScrollDirective,
    ScrollArea,
    ScrollItem,
    TimesIterator,
    TreeTable,
    TreeTableColumn
};

export {
    GeminiScrollDirectiveConfig,
    LoadingBarOptions, LoadingBarOperator,
    TreeTableClass, TableColumnClass,
};
