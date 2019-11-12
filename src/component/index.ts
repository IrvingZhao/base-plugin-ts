import {VueConstructor} from "vue";
import ConfigSlot from "./configSlot";
import GeminiScrollDirective, {GeminiScroll} from "./geminiScrollbar";
import LoadingBar from "./loadingBar";

export default {
    install(Vue: VueConstructor): void {
        Vue.component("xlb-config-slot", ConfigSlot);
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
