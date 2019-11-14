import {UtilInstance} from "./util/Util";
import {LoadingBar} from "./component";

declare module "vue/types/vue" {

    interface Vue {
        $util: UtilInstance;
        $loadingBar: LoadingBar;
    }

    interface VueConstructor {
        $util: UtilInstance;
        $loadingBar: LoadingBar;
    }
}
