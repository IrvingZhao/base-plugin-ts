<template>
    <div>
        <h1>{{a.a}}</h1>
        <p v-for="i in arr">
            {{i}}
        </p>
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

<style scoped>

</style>
