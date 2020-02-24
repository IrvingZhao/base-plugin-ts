<template>
    <div>
        <div class="scroll1" style="width:300px;height:100px">
            <xlb-scroll-area scrollType="item">
                <xlb-scroll-item width="100px" class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </xlb-scroll-item>
            </xlb-scroll-area>
        </div>
        <div class="scroll1" style="width:300px;height:100px">
            <xlb-scroll-area scrollType="page">
                <xlb-scroll-item width="100px" class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </xlb-scroll-item>
            </xlb-scroll-area>
        </div>
        <div class="scroll1" style="width:300px;height:100px">
            <xlb-scroll-area :scrollType="100">
                <xlb-scroll-item width="100px" class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </xlb-scroll-item>
            </xlb-scroll-area>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component<ScrollAreaTest>({
        name: "scroll-area-test"
    })
    export default class ScrollAreaTest extends Vue {

        private scrollContent = [
            "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff"
        ];

    }
</script>

<style scoped>
    .scroll1{
        margin-bottom: 20px;
    }
</style>
