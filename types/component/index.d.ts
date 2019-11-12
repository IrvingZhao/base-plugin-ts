// tslint:disable:max-classes-per-file
import {VueConstructor} from "vue";
import {GeminiScrollbarConfig, GeminiScrollBaseConfig, GeminiScrollD} from "./GeminiScroll";
import {ScrollBarConfig} from "./GeminiScrollBar";
import {LoadingBar} from "./LoadingBar";
import {Vue} from "vue-property-decorator";
import {XlbConfigSlot} from "./ConfigSlot";

export function install(Vue: VueConstructor): void;

export interface GeminiScrollDirectiveConfig extends GeminiScrollBaseConfig {
    autoCreate?: boolean;
    instance?: GeminiScrollD;
}

export declare class GeminiScroll extends GeminiScrollD {
}

export declare class ConfigSlot implements XlbConfigSlot {
    public slotKeys: string[];
    public sort?: string[];
    public enable?: boolean;
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
