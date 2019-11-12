import {RouteConfig} from "vue-router";
import ResizeTest from "./Resize.vue";
import GeminiScrollTest from "./geminiScrollTest.vue";
import ConfigSlotTest from "./ConfigSlotTest.vue";
import ActiveHeightTest from "./ActiveHeightTest.vue";

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
    }
];

export default {
    routes
};
