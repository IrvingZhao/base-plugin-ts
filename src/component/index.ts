import {VueConstructor} from "vue";
import ConfigSlot from "./configSlot";
import GeminiScroll from "./geminiScrollbar";

export default {
    install(Vue: VueConstructor): void {
        Vue.component("xlb-config-slot", ConfigSlot);
        Vue.use(GeminiScroll);
    }
};

export * from "./geminiScrollbar";

// import ConfigSlot from "./configSlot";
// import GeminiScrollDirective, {GeminiScroll, GeminiScrollDirectiveConfig} from "./geminiScrollbar";
// import LoadingBar from "./loadingBar";
// import {ScrollArea, ScrollItem, ScrollAreaInterface, ScrollType} from "./scrollArea";
// import TimesIterator from "./timesIterator";
// import TreeTable from "./treeTable/index.vue";
// import TreeTableColumn from "./treeTable/TableColumn";
// import {LoadingBarOperator, LoadingBarOptions} from "./loadingBar/define";
// import {TreeTableClass, TableColumnClass} from "./treeTable/define";
// import Step from "./steps";
// import StepItem from "./steps/StepItem";
// import MockDialog from "./mockDialog";
//
// export default {
//     install(Vue: VueConstructor): void {
//         Vue.component("xlb-config-slot", ConfigSlot);
//         Vue.component("xlb-scroll-area", ScrollArea);
//         Vue.component("xlb-scroll-item", ScrollItem);
//         Vue.component("xlb-times-iterator", TimesIterator);
//         Vue.component("xlb-tree-table", TreeTable);
//         Vue.component("xlb-tree-table-column", TreeTableColumn);
//         Vue.component("xlb-step", Step);
//         Vue.component("xlb-step-item", StepItem);
//         Vue.component("xlb-mock-dialog", MockDialog);
//         Vue.directive("gemini-scroll", GeminiScrollDirective);
//         Vue.$loadingBar = new LoadingBar();
//         Vue.prototype.$loadingBar = new LoadingBar();
//     }
// };
//
// export {
//     ConfigSlot,
//     GeminiScroll,
//     GeminiScrollDirective,
//     ScrollArea,
//     ScrollItem,
//     TimesIterator,
//     TreeTable,
//     TreeTableColumn
// };
//
// export {
//     GeminiScrollDirectiveConfig,
//     LoadingBarOptions, LoadingBarOperator,
//     TreeTableClass, TableColumnClass,
//     ScrollAreaInterface,
// };
