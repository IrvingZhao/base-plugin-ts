<template>
    <div class="slot-content">
        <div> enable</div>
        <xlb-config-slot :slot-keys="slotKeys" :enabled="true">
            <el-button slot="add">新增</el-button>
            <el-button slot="edit">修改</el-button>
            <el-button slot="remove">删除</el-button>
            <el-button slot="other">其他</el-button>
            <el-button>默认</el-button>
        </xlb-config-slot>
        <div>enable - sort</div>
        <xlb-config-slot :slot-keys="slotKeys" :sort="sort" :enabled="true">
            <el-button slot="add">新增</el-button>
            <el-button slot="edit">修改</el-button>
            <el-button slot="remove">删除</el-button>
            <el-button slot="other">其他</el-button>
            <el-button>默认</el-button>
        </xlb-config-slot>
        <div> disable</div>
        <xlb-config-slot :slot-keys="slotKeys" :enabled="false">
            <el-button slot="add">新增</el-button>
            <el-button slot="edit">修改</el-button>
            <el-button slot="remove">删除</el-button>
            <el-button slot="other">其他</el-button>
            <el-button>默认</el-button>
        </xlb-config-slot>
        <div> disable - sort</div>
        <xlb-config-slot :slot-keys="slotKeys" :sort="sort" :enabled="false">
            <el-button slot="add">新增</el-button>
            <el-button slot="edit">修改</el-button>
            <el-button slot="remove">删除</el-button>
            <el-button slot="other">其他</el-button>
            <el-button>默认</el-button>
        </xlb-config-slot>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component<ConfigSlotTest>({
        name: "config-slot-test"
    })
    export default class ConfigSlotTest extends Vue {
        public slotKeys: string[] = [
            "add", "edit", "remove"
        ];

        public sort = [
            "other", "remove", "add", "edit"
        ];

    }
</script>

<style scoped>

</style>
