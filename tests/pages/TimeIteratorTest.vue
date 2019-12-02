<template>
    <xlb-times-iterator :data="data" :times="2" class="test-page-item">
        <template v-slot="[a,b]">
            <div class="test-item">{{a}}-{{b}}</div>
        </template>
    </xlb-times-iterator>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component<TimeIteratorTest>({})
    export default class TimeIteratorTest extends Vue {
        public data = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ];
    }
</script>

<style scoped>

</style>
