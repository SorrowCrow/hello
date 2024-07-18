<template>
    <div class="slide">
        <div class="secondary-title say">{{ say }}</div>
        <div class="block__photo" align="center">
            <div class="block__image-crop overflow-hidden">
                <div class="block__image" :style="cssProps"></div>
            </div>
        </div>
        <div class="bio">
            <div class="secondary-title">{{ name }}</div>
            <div class="secondary-sub">{{ job }}</div>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Slide",
    props: {
        say: String,
        name: String,
        job: String,
        url: String,
    },
    computed: {
        cssProps() {
            return (
                "background-image: url(" + require("@/assets/" + this.url) + ")"
            );
        },
    },
};
</script>

<style lang="scss" scoped></style>
