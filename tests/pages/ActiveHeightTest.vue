<template>
    <div class="active-height-content">
        <div class="item-content">
            <div class="title" @click="titleClick">标题</div>
            <div class="content" v-active-height="activeParam">
                <p v-for="i in 5">{{i}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {ActiveHeightParam} from "../../types/directives/ActiveHeight";

    @Component<ActiveHeightTest>({
        name: "active-height-test"
    })
    export default class ActiveHeightTest extends Vue {

        private activeParam: ActiveHeightParam = {
            transaction: true,
            active: false
        };

        private titleClick(): void {
            this.activeParam.active = !this.activeParam.active;
            this.$forceUpdate(); //  当修改的参数 不包含 template 渲染中的内容时，需要手动条用 forceUpdate 进行组件更新
        }
    }
</script>

<style scoped lang="scss">
    .item-content {
        margin: 20px;
        width: 300px;
        border: 1px solid #ddd;

        .title {
            height: 20px;
            font-weight: bold;
        }

        .content {
            height: 0;
            transition: height 0.5s ease-in;
            overflow: hidden;
            background-color: red;
        }
    }
</style>
