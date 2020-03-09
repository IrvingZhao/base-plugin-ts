import defaultLang from "./lang/zh-CN";
import Vue from "vue";
import Format from "./format";

let lang = defaultLang;
let merged = false;
let i18nHandler = function(this: any, ...args: any[]): any {
    const vuei18n = Object.getPrototypeOf(this || Vue).$i18n;
    const $t = vuei18n.$t;

    if (typeof $t === "function" && !!vuei18n.locale) {
        if (!merged) {
            merged = true;
            vuei18n.mergeLocaleMessage(vuei18n.lang, lang);
        }
        return $t.apply(this, arguments);
        // return vuei18n.apply(this, arguments);
    }
};

export const t = function(this: any, path: string, options: any) {
    const args = [...arguments];
    let value = i18nHandler.apply(this, args);
    if (value !== null && value !== undefined) {
        return value;
    }

    const array = path.split(".");
    let current: any = lang;

    for (let i = 0, j = array.length; i < j; i++) {
        const property = array[i];
        value = current[property];
        if (i === j - 1) {
            return Format(value, options);
        }
        if (!value) {
            return "";
        }
        current = value;
    }
    return "";
};

export const use = (l: any) => {
    lang = l || lang;
};

export const i18n = (fn: () => string) => {
    i18nHandler = fn || i18nHandler;
};

export default {use, t, i18n};
