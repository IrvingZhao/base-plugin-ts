import {VueConstructor} from "vue";
import ActiveHeight, {ActiveHeightParam} from "./activeHeight";
import MockScroll from "./mockScroll";
import Resize from "./resize";

export default {
    install(Vue: VueConstructor) {
        Vue.directive("active-height", ActiveHeight);
        // Vue.directive("gemini-scroll", new GeminiScrollbar());
        Vue.directive("resize", Resize);
        Vue.directive("mock-scroll", MockScroll);
    }
};

export {
    ActiveHeight,
    MockScroll,
    Resize
};
export {
    ActiveHeightParam,
};
