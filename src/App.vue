<template>
    <svgs />
    <firstBlock />
    <benefitsBlock />
    <whoConductsBlock />
    <whatBlock />
    <whoBlock />
    <whatTheySayBlock />
</template>

<script>
import svgs from "./components/svgs.vue";
import firstBlock from "./components/firstBlock.vue";
import benefitsBlock from "./components/benefitsBlock.vue";
import whoConductsBlock from "./components/whoConductsBlock.vue";
import whatBlock from "./components/whatBlock.vue";
import whoBlock from "./components/whoBlock.vue";
import whatTheySayBlock from "./components/whatTheySayBlock.vue";

export default {
    name: "App",
    components: {
        svgs,
        firstBlock,
        benefitsBlock,
        whoConductsBlock,
        whatBlock,
        whoBlock,
        whatTheySayBlock,
    },
};
</script>
