import Vue from "vue";
import App from "./app.vue";
import Plugin from "../src";
import ElementUI from "element-ui";
import VueRouter from "vue-router";

import Route from "./pages";

Vue.use(VueRouter);
Vue.use(Plugin);
Vue.use(ElementUI);

import "../src/styles/index.scss";
import "element-ui/packages/theme-chalk/src/index.scss";

const router = new VueRouter({
    routes: Route.routes,
    mode: "history",
});

new Vue({
    render(createElement) {
        return createElement(App);
    },
    router
}).$mount("#app");
