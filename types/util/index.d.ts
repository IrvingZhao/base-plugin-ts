import {VueConstructor} from "vue";

// import {
//     getItem,
//     setItem,
//     clearStorage,
//     getSimpleDate,
//     getFullDate,
//     generateTree,
//     getTreePath,
//     setCurrentAndChildProp,
//     getCurrentAndChildProp,
//     dateFormat
// } from "./Util";
// import * as Util from "./Util";

import {UtilInstance as Util} from "./Util";

export default function install(Vue: VueConstructor): void;
export {
    Util
};

// export declare class UtilInstance {
//     public getItem: getItem;
//     setItem: setItem;
//     clearStorage: clearStorage;
//     getSimpleDate: getSimpleDate;
//     getFullDate: getFullDate;
//     generateTree: generateTree;
//     getTreePath: getTreePath;
//     setCurrentAndChildProp: setCurrentAndChildProp;
//     getCurrentAndChildProp: getCurrentAndChildProp;
//     dateFormat: dateFormat;
// }
