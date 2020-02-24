<template>
    <div>
        <h1>{{a.a}}</h1>
        <p v-for="i in arr">
            {{i}}
        </p>
        <xlb-step>
            <xlb-step-item title="步骤1" desc="步骤1描述信息" status="finished"></xlb-step-item>
            <xlb-step-item title="步骤2" desc="步骤2描述信息" status="current">
                <span slot="icon" class="step-icon-span">&#xe66c;</span>
            </xlb-step-item>
            <xlb-step-item>
                <span slot="title">标题信息</span>
                <div slot="desc">描述信息<img/></div>
                <span slot="icon" class="step-icon-span">&#xe66f;</span>
            </xlb-step-item>
        </xlb-step>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component<UpdateTest>({
        created() {
            console.info(this);
        },
        beforeUpdate() {
            console.info("============== before update ============");
        }
    })
    export default class UpdateTest extends Vue {
        public a: object = {a: "123"};
        public arr = ["1", "2", "3"];

    }
</script>

<style scoped lang="scss">
    @font-face {
        font-family: 'iconfont';  /* project id 1605460 */
        src: url('//at.alicdn.com/t/font_1605460_3t7d849ow98.eot');
        src: url('//at.alicdn.com/t/font_1605460_3t7d849ow98.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_1605460_3t7d849ow98.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_1605460_3t7d849ow98.woff') format('woff'),
        url('//at.alicdn.com/t/font_1605460_3t7d849ow98.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_1605460_3t7d849ow98.svg#iconfont') format('svg');
    }

    .step-icon-span {
        font-family: "iconfont", serif;
    }
</style>
