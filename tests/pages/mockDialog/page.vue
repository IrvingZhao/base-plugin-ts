<template>
    <div>
        <el-button @click="openDialog">打开</el-button>
        <xlb-mock-dialog :visible.sync="pageState.dialogVisible" :vertical-middle="true" title="测试标题">
            <div class="dialog-content">
                <div v-for="i in 20">
                    <el-button>Button - {{i}}</el-button>
                </div>
            </div>
            <div slot="footer">
                <el-button type="primary">aaaa</el-button>
            </div>
        </xlb-mock-dialog>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component<MockDialogTest>({})
    export default class MockDialogTest extends Vue {
        private pageState = {
            dialogVisible: false,
        };

        private openDialog() {
            this.pageState.dialogVisible = true;
        }
    }
</script>

<style scoped>
    .dialog-content {
        height: 100%;
    }
</style>
