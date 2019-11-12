// tslint:disable:max-classes-per-file
import {VueConstructor} from "vue";
import {GeminiScrollbarConfig, GeminiScrollBaseConfig, GeminiScrollD} from "./GeminiScroll";
import {ScrollBarConfig} from "./GeminiScrollBar";
import {LoadingBar} from "./LoadingBar";
import {Vue} from "vue-property-decorator";
import {XlbConfigSlot} from "./ConfigSlot";
import {ScrollAreaD, ScrollType} from "./ScrollArea";

export function install(Vue: VueConstructor): void;

export declare class ConfigSlot extends Vue implements XlbConfigSlot {
    public slotKeys: string[];
    public sort?: string[];
    public enable?: boolean;
}

export interface GeminiScrollDirectiveConfig extends GeminiScrollBaseConfig {
    autoCreate?: boolean;
    instance?: GeminiScrollD;
}

export declare class GeminiScroll extends GeminiScrollD {
}

export declare class ScrollArea extends Vue implements ScrollAreaD {
    public itemWidth: number | string;
    public perSize: number;
    public scrollType: ScrollType | number;
}

export declare class ScrollItem extends Vue {
}

export {
    GeminiScrollbarConfig,
    ScrollBarConfig,
};

declare module "vue/types/vue" {

    interface Vue {
        $loadingBar: LoadingBar;
    }

    interface VueConstructor {
        $loadingBar: LoadingBar;
    }
}
