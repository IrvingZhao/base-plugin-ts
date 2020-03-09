import {Dialog} from "element-ui";
import {Component, Prop, Vue, Watch} from "vue-property-decorator";

@Component<MockDialog>({
    mixins: [Dialog],
    mounted() {
        if (this.verticalMiddle) {
            this.$refs.dialog.classList.add("platform-dialog-vertical-middle");
        }
        const parentElement = this.$refs.dialog.parentElement;
        if (parentElement) {
            parentElement.addEventListener("mousedown", this.handleWrapperMouseDown.bind(this));
        }
        this.diaContentHeight = this.$refs.dialog.offsetHeight;
    },
})
export default class MockDialog extends Vue {

    @Prop({type: Boolean, default: false})
    public verticalMiddle?: boolean;
    @Prop({type: Boolean, default: false})
    public dialogScroll?: boolean;

    public $refs!: { dialog: HTMLElement };
    public closeOnClickModal!: boolean;
    public fullscreen!: boolean;
    public handleClose!: () => void;
    public top!: string;
    public width!: string;

    public diaContentHeight: number = 0;

    private mouseDownElement?: HTMLElement;

    get style() {
        const style: any = {};
        if (!this.fullscreen) {
            if (this.verticalMiddle) {
                const marginTop = (window.innerHeight - this.diaContentHeight) / 2;
                style.marginTop = (marginTop > 0 ? marginTop : "0") + "px";
            } else {
                style.marginTop = this.top;
            }
            if (this.width) {
                style.width = this.width;
            }
        }
        return style;
    }

    public handleWrapperClick(e: Event) {
        if (e.target === this.mouseDownElement) {
            if (!this.closeOnClickModal) {
                return;
            }
            this.handleClose();
        }
    }

    public handleWrapperMouseDown(e: Event) {
        if (e.target instanceof HTMLElement) {
            this.mouseDownElement = e.target;
        }
    }

    @Watch("visible")
    private updateVisible(newVal: any) {
        if (newVal) {
            this.$nextTick(() => {
                this.diaContentHeight = this.$refs.dialog.offsetHeight;
            });
        }
    }
}
