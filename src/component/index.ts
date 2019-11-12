import {VueConstructor} from "vue";
import ConfigSlot from "./configSlot";
import GeminiScrollDirective, {GeminiScroll} from "./geminiScrollbar";
import LoadingBar from "./loadingBar";
import ScrollArea from "./scrollArea/index.vue";
import ScrollItem from "./scrollArea/scrollItem.vue";

export default {
    install(Vue: VueConstructor): void {
        Vue.component("xlb-config-slot", ConfigSlot);
        Vue.component("xlb-scroll-area", ScrollArea);
        Vue.component("xlb-scroll-item", ScrollItem);
        // TODO ScrollArea 图标
        Vue.directive("gemini-scroll", new GeminiScrollDirective());
        Vue.$loadingBar = LoadingBar;
        Vue.prototype.$loadingBar = LoadingBar;
    }
};

export {
    ConfigSlot,
    GeminiScroll,
    // HorScrollBar,
    // VerScrollBar,
};
