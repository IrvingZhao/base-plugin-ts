<template>
    <div>
        <div class="scroll1" style="width: 364px;height: 100px;">
            <xlb-scroll-area :perSize="3" scroll-type="item">
                <xlb-scroll-item class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </xlb-scroll-item>
            </xlb-scroll-area>
        </div>
        <div class="scroll1" style="width: 364px;height: 100px;">
            <xlb-scroll-area :item-width="150" scroll-type="page">
                <xlb-scroll-item class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </xlb-scroll-item>
            </xlb-scroll-area>
        </div>
        <div class="scroll1" style="width: 364px;height: 100px;">
            <xlb-scroll-area :item-width="150" scroll-type="item">
                <xlb-scroll-item class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </xlb-scroll-item>
            </xlb-scroll-area>
        </div>
        <div class="scroll1" style="width: 364px;height: 100px;">
            <xlb-scroll-area :perSize="3" :scroll-type="150">
                <xlb-scroll-item class="demo" v-for="(item,index) in scrollContent" :key="index">
                    <div :style="'width:100%;height:100px;background: '+item+';'"></div>
                </xlb-scroll-item>
            </xlb-scroll-area>
        </div>

        <div class="scroll1" style="width: 364px;height: 100px;">
            <xlb-scroll-area :scroll-type="150">
                <xlb-scroll-item class="demo" :style="'width:'+(index*100)+'px'" v-for="(item,index) in scrollContent"
                                 :key="index">
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

        private scrollContent=[
            "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff"
        ];

    }
</script>

<style scoped>

</style>
