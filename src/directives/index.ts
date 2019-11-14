import {VueConstructor} from "vue";
import ActiveHeight, {ActiveHeightParam} from "./activeHeight";
import MockScroll from "./mockScroll";
import Resize from "./resize";

export default {
    install(Vue: VueConstructor) {
        Vue.directive("active-height", new ActiveHeight());
        // Vue.directive("gemini-scroll", new GeminiScrollbar());
        Vue.directive("resize", new Resize());
        Vue.directive("mock-scroll", new MockScroll());
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
