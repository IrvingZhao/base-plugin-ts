<template>
    <xlb-tree-table :data="tableData">
        <!--<xlb-tree-table-column label="Label A" property="A" width="150">-->
        <!--<template slot-scope="{column,row,$index}">-->
        <!--{{row.A}} - {{column.property}} - {{$index}}-->
        <!--</template>-->
        <!--</xlb-tree-table-column>-->
        <!--<xlb-tree-table-column label="LabelB" property="B" width="150"></xlb-tree-table-column>-->
        <!--<xlb-tree-table-column label="C" property="C" width="150"></xlb-tree-table-column>-->
        <!--<xlb-tree-table-column label="D" property="D" width="150"></xlb-tree-table-column>-->
        <!--<xlb-tree-table-column label="E" property="E" width="150"></xlb-tree-table-column>-->
        <!--<xlb-tree-table-column label="F" property="F" width="150"></xlb-tree-table-column>-->

        <xlb-tree-table-column label="A" property="A" width="200">
            <template slot-scope="{column,row,$index}">
                {{row.A}} - {{column.property}} - {{$index}}
            </template>
        </xlb-tree-table-column>
        <xlb-tree-table-column label="B" property="B" width="400"></xlb-tree-table-column>
        <xlb-tree-table-column label="C" property="C" width="600"></xlb-tree-table-column>
        <xlb-tree-table-column label="D" property="D" width="800"></xlb-tree-table-column>
        <xlb-tree-table-column label="E" property="E" width="1000"></xlb-tree-table-column>
        <xlb-tree-table-column label="F" property="F" width="1200"></xlb-tree-table-column>

        <!--<xlb-tree-table-column label="test" :renderHeader="testRenderHead">-->
        <!--<template slot-scope="column">-->
        <!--{{column}}-->
        <!--</template>-->
        <!--</xlb-tree-table-column>-->
        <!--<xlb-tree-table-column label="abs"></xlb-tree-table-column>-->
    </xlb-tree-table>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    function generateChildren(row: any, index: any, t = 0) {
        row.children = [];
        for (let i = 1; i < 10; i++) {
            const item = {
                A: "A" + "-" + index + "-" + i,
                B: "B" + "-" + index + "-" + i,
                C: "C" + "-" + index + "-" + i,
                D: "D" + "-" + index + "-" + i,
                E: "E" + "-" + index + "-" + i,
                F: "F" + "-" + index + "-" + i,
            };
            if (i % 3 === 0 && t < 2) {
                generateChildren(item, i, t + 1);
            }
            row.children.push(item);
        }
    }

    function generateTableData() {
        const result = [];
        for (let i = 1; i < 10; i++) {
            const item = {
                A: "A" + "-" + i,
                B: "B" + "-" + i,
                C: "C" + "-" + i,
                D: "D" + "-" + i,
                E: "E" + "-" + i,
                F: "F" + "-" + i
            };
            generateChildren(item, i);
            result.push(item);
        }
        return result;
    }

    @Component<TreeTableTest>({
        name: "tree-table",
        data() {
            return {
                tableData: generateTableData(),
            };
        },
        methods: {
            printData(data) {
                console.info(data);
                return "success";
            },
            testRenderHead(h, scope) {
                console.info("test render head");
                // return "aaaaa";
                return h("span", {style: {color: "red"}}, "测试中文信息");
            }
        }
    })
    export default class TreeTableTest extends Vue {
    }

</script>

<style scoped>

</style>
