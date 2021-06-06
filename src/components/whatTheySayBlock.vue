<template>
    <div class="block mx-auto overflow-hidden">
        <div class="description">{ what they say }</div>
        <svg
            style="display: none; position: fixed"
            class="prevBtn nextBtn slick-dots li.slick-active button::before"
        ></svg>
        <!-- The above svg is required so that purgecss in gulpfile doesn't delete the classes attached to it (_default.scss - .whatTheySay) -->
        <carousel />
    </div>
</template>

<script>
import carousel from "./carousel/carousel.vue";

export default {
    name: "whatTheySayBlock",
    components: {
        carousel,
    },
};
</script>

<style lang="scss" scoped>
.block {
    padding-bottom: 70px;
    padding-top: 70px;
    padding-left: 20px;
    .description {
        padding-left: 20px;
    }
}
@media only screen and (min-width: 768px) {
    .block {
        padding-bottom: 117px;
        padding-top: 119px;
        padding-left: 28px;
        .description {
            padding-left: 27px;
        }
    }
}
</style>
