// tslint:disable:max-classes-per-file
import {VueConstructor} from "vue";
import * as Component from "./component";
import * as Directives from "./directives";
import * as Util from "./util";

export function install(Vue: VueConstructor): void;

export * from "./component";

export * from "./directives";

export * from "./util";

export {
    Component,
    Directives,
    Util
};
