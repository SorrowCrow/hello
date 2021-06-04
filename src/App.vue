<template>
    <svgs />
    <firstBlock />
</template>

<script>
import svgs from "./components/svgs.vue";
import firstBlock from "./components/firstBlock.vue";

export default {
    name: "App",
    components: {
        firstBlock,
        svgs
    },
};
</script>

<style lang="scss">
</style>
