import {RouteConfig} from "vue-router";
import ResizeTest from "./Resize.vue";
import GeminiScrollTest from "./GeminiScrollTest.vue";
import ConfigSlotTest from "./ConfigSlotTest.vue";
import ActiveHeightTest from "./ActiveHeightTest.vue";
import ScrollAreaTest from "./ScrollAreaTest.vue";
import TreeTableTest from "./TreeTableTest.vue";

const routes: RouteConfig[] = [
    {
        path: "/resize",
        component: ResizeTest,
    },
    {
        path: "/geminiScroll",
        component: GeminiScrollTest
    },
    {
        path: "/configSlot",
        component: ConfigSlotTest,
    },
    {
        path: "/activeHeight",
        component: ActiveHeightTest,
    },
    {
        path: "/scrollAreaTest",
        component: ScrollAreaTest,
    },
    {
        path: "/treeTableTest",
        component: TreeTableTest
    }
];

export default {
    routes
};
