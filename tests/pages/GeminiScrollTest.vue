<template>
    <div class="gemini-scroll-test">
        <div class="content">
            <div class="item" v-gemini-scroll="scrollConfig">
                <div class="gm-scroll-view">
                    <div class="view-content">
                        <p v-for="i in 7">
                            <span style="padding:0 10px" v-for="j in 30">{{i+j}}</span>
                        </p>
                    </div>
                </div>
                <div class="gm-scrollbar -horizontal">
                    <div class="thumb"></div>
                </div>
                <div class="gm-scrollbar -vertical">
                    <div class="thumb"></div>
                </div>
            </div>
            <div class="item" ref="manualScroll">
                <div class="gm-scroll-view">
                    <div class="view-content">
                        <p v-for="i in 20">
                            <span style="padding:0 10px" v-for="j in 30">{{i+j}}</span>
                        </p>
                    </div>
                </div>
                <div class="gm-scrollbar -horizontal">
                    <div class="thumb"></div>
                </div>
                <div class="gm-scrollbar -vertical">
                    <div class="thumb"></div>
                </div>
            </div>
            <!--            <div class="item barItem ">-->
            <!--                <div class="gm-scrollbar-container" v-resize="horBarResize" ref="horContainer">-->
            <!--                    <div class="gm-scroll-view" ref="horView">-->
            <!--                        <div class="view-content">-->
            <!--                            <p>-->
            <!--                                <span style="padding:0 10px" v-for="j in 30">{{j}}</span>-->
            <!--                            </p>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                    <div class="gm-scrollbar -horizontal" ref="horBar">-->
            <!--                        <div class="thumb" ref="horThumb"></div>-->
            <!--                    </div>-->
            <!--                </div>-->
            <!--            </div>-->
        </div>
        <div class="resize">
            <div class="resize-content" v-gemini-scroll="scrollConfig2">
                <!--            <div class="resize-content">-->
                <div class="gm-scroll-view">
                    <div class="view-content">
                        <p v-for="i in 7">
                            <span style="padding:0 10px" v-for="j in 12">{{i}}-{{j}}</span>
                        </p>
                    </div>
                </div>
                <div class="gm-scrollbar -horizontal">
                    <div class="thumb"></div>
                </div>
                <div class="gm-scrollbar -vertical">
                    <div class="thumb"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {GeminiScrollDirectiveConfig} from "../../types/component";
    import {GeminiScroll} from "../../src";

    @Component<GeminiScrollTest>({
        name: "gemini-scroll-test",
        mounted() {
            // this.scrollConfig.instance.create();
            console.info(this);
            const demoScroll = new GeminiScroll({
                element: this.$refs.manualScroll,
            });
            this.$nextTick(() => {
                demoScroll.create();
            });
            // const horBar = new HorScrollBar({
            //     container: this.$refs.horContainer,
            // });
            // this.horBar = horBar;
            // horBar.update();
            // console.info(horBar);
        }
    })
    export default class GeminiScrollTest extends Vue {
        public $refs!: {
            manualScroll: HTMLElement,
            horContainer: HTMLElement,
        };
        private scrollConfig: GeminiScrollDirectiveConfig = {
            autoCreate: true,
        };
        private scrollConfig2: GeminiScrollDirectiveConfig = {
            autoCreate: true,
        };
        // private horBar!: HorScrollBar;

        // public horBarResize() {
        //     this.horBar.update();
        // }
    }
</script>

<style scoped lang="scss">
    .content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .item {
            flex: 0 0 300px;
            height: 300px;
            margin: 20px;

            .view-content {
                display: inline-block;

                p {
                    display: inline-block;
                }
            }
        }

        .barItem {
            position: relative;
            overflow: hidden;

            .gm-scrollbar-container {
                width: 100%;
                height: 100%;
            }
        }
    }

    .resize {
        resize: both;
        width: 300px;
        height: 300px;
        background-color: red;
        overflow: auto;
        position: relative;

        .resize-content {
            width: 98%;
            height: 100%;
            position: absolute;

            .view-content {
                display: inline-block;
                white-space: pre-wrap;
                background-color: rgba(0, 255, 0, 0.3);

                p {
                    display: inline-block;
                    white-space: nowrap;
                    background-color: rgba(0, 0, 255, 0.3);
                }
            }
        }
    }
</style>
