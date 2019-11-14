<template>
    <div class="resize" v-resize="resizeHandle" resize="both"></div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class ResizeTest extends Vue {
        private resizeHandle(): void {
            console.info("resize==========");
        }
    }
</script>

<style scoped>
    .resize {
        resize: both;
        width: 100px;
        height: 100px;
        background-color: red;
        overflow: auto;
    }
</style>
