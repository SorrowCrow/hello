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
    mounted() {
        // let jquery = document.createElement("script");
        // let slick = document.createElement("script");
        // let slickcss = document.createElement("link");
        // jquery.setAttribute(
        //     "src",
        //     "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        // );
        // slick.setAttribute(
        //     "src",
        //     "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
        // );
        // slickcss.setAttribute(
        //     "rel",
        //     "stylesheet",
        //     "href",
        //     "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
        // );
        // document.head.appendChild(jquery);
        // document.head.appendChild(slick);
        // document.head.appendChild(slickcss);
    },
};
</script>
