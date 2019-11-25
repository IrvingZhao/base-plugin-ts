import GeminiScroll from "./src/GeminiScroll";
import {DirectiveOptions, DirectiveBinding} from "vue/types/options";
import Vue from "vue";
import {GeminiScrollDirectiveConfig} from "./src/define";

const instanceCache: { [key: string]: GeminiScroll } = {};

const GeminiScrollDirective: DirectiveOptions = {
    bind(el: HTMLElement, binding: DirectiveBinding) {
        const scroll = new GeminiScroll({
            element: el,
            ...binding.value,
        });
        if (binding.value.autoCreate) {
            Vue.nextTick(() => {
                scroll.create();
            });
        }
        binding.value.instance = scroll;
        const scrollId = "geminiScroll_" + Date.now();
        instanceCache[scrollId] = scroll;
        el.dataset.geminiScroll = scrollId;
    },

    unbind(el: HTMLElement, binding: DirectiveBinding) {
        const scrollId = el.dataset["gemini-scroll"];
        if (scrollId && instanceCache[scrollId]) {
            instanceCache[scrollId].destroy();
            delete instanceCache[scrollId];
        }
    },
    componentUpdated(el: HTMLElement, binding: DirectiveBinding) {
        const scrollId = el.dataset.geminiScroll;
        if (scrollId && instanceCache[scrollId]) {
            instanceCache[scrollId].update();
        }
    }
};

export default GeminiScrollDirective;

export {
    GeminiScroll,
    GeminiScrollDirectiveConfig,
};
