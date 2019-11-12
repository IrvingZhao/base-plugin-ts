// tslint:disable:max-classes-per-file
import {VueConstructor} from "vue";
import {XlbMockScroll} from "./MockScroll";
import {XlbResize} from "./Resize";

export function install(Vue: VueConstructor): void;

export declare class MockScroll implements XlbMockScroll {
    public name: "mock-scroll";
}

export declare class Resize implements XlbResize {
    public name: "resize";
    public value: typeof Function;
}
