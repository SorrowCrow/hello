<template>
    <div class="block overflow-hidden">
        <div class="description">{ what they say }</div>
        <!-- <svg
                style="display: none; position: fixed"
                class="
                    prevBtn
                    nextBtn
                    slick-dots
                    li.slick-active
                    button::before
                "
            ></svg> -->
        <!-- The above svg is required so that purgecss in gulpfile doesn't delete the classes attached to it (_default.scss - .whatTheySay) -->
        <slither-slider :options="{ fullscreen: true }">
            <!-- Slide 1 -->
            <div :style="{ backgroundColor: 'red', height: '1000px' }">Oh</div>

            <!-- Slide 2 -->
            <div>
                Mah
                <img src="https://picsum.photos/id/237/200/300" />
            </div>

            <!-- Slide 3 -->
            <div>Gawd</div>
        </slither-slider>

        <div class="ml-n5 block__slider"></div>
    </div>
</template>

<script>

export default {
    name: "whatTheySayBlock",
};
</script>

<style lang="scss" scoped>
.whatTheySay {
    .secondary-title {
        color: $primary;
        margin: 47px 0 45px 10px;
        max-width: 1090px;
    }
    &__image-crop {
        @include wh(60px, 60px);
        transform: rotate(45deg);
    }
    &__image {
        background-size: contain;
        @include wh(86px, 86px);
        left: -22%;
        top: -22%;
        transform: rotate(-45deg);
    }
    svg {
        @include wh(44px, 44px);
        bottom: -37px;
        z-index: 100;
    }
    svg:hover {
        @extend .pointer;
    }
    .nextBtn {
        left: 50px;
    }
    .prevBtn {
        transform: rotate(180deg);
        right: 50px;
    }
    .slick-dots li.slick-active button::before {
        color: $pink;
        opacity: 1;
    }
}
@media only screen and (min-width: 768px) {
    .whatTheySay {
        .secondary-title {
            margin-top: 55px;
            margin-bottom: 97px;
            font-size: 40px;
        }
        .secondary-title:before {
            top: 12px;
            bottom: 6px;
        }
        &__image {
            @include wh(143px, 143px);
        }
        &__image-crop {
            @include wh(100px, 100px);
        }
        svg {
            @include wh(60px, 60px);
            bottom: 100px;
        }
        .nextBtn {
            left: auto;
            right: 100px;
        }
        .prevBtn {
            right: 20px;
        }
    }
}
</style>
