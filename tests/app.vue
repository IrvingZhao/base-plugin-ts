<template>
    <div class="content">
        <div class="labels">
            <div :class="{'label-item':true,active:activeItem === item.key}" v-for="item in labels" @click="activeLabel(item)">{{item.text}}</div>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component<App>({})
    export default class App extends Vue {
        public activeItem: string = "";

        private labels = [
            {key: "resize", text: "Resize"},
            {key: "geminiScroll", text: "GeminiScroll"},
            {key: "configSlot", text: "ConfigSlot"},
            {key: "activeHeight", text: "ActiveHeight"},
            {key: "scrollAreaTest", text: "ScrollAreaTest"},
            {key: "timeIteratorTest", text: "TimeIteratorTest"},
            {key: "treeTableTest", text: "TreeTableTest"},
            {key: "updateTest", text: "UpdateTest"},
        ];

        private activeLabel(item: any) {
            this.activeItem = item.key;
            this.$router.push(item.key);
        }
    }
</script>
<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
    }
</style>
<style scoped lang="scss">
    .content {
        display: flex;
        flex-direction: column;
        height: 100%;

        .labels {
            flex: 0 0 auto;
            display: flex;
            flex-direction: row;
            margin: 10px;

            .label-item {
                flex: 0 0 auto;
                margin: 0 10px;
                cursor: pointer;

                &.active {
                    color: #4A90E2;
                }
            }
        }

        .body {
            flex: 1 1;
            margin: 10px;
            overflow: auto;
            border: 1px solid #D8D8D8;
        }
    }
</style>
