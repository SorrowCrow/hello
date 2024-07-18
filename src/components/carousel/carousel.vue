<template>
    <div class="block__slider">
        <Slide
            say="Money"
            name="Mr Krabs"
            job="CEO, Krusty Krab"
            url="mrkrabs.png"
        />
        <Slide
            say="Our verification process is designed by the top programmers in the
            industry. It has been polished on a large number of candidates."
            name="Eugene Pavlenko"
            job="CEO, Axioma"
            url="image1.jpg"
        />
    </div>
</template>

<script>
import Slide from "./Slide.vue";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import $ from "jquery";

$(document).ready(function () {
    $(".block__slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        prevArrow:
            '<svg class="nextBtn">  <use xlink:href="#arrowScroll" /> </svg>',
        nextArrow:
            '<svg class="prevBtn">  <use xlink:href="#arrowScroll" /> </svg>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                },
            },
        ],
    });
});

export default {
    // eslint-disable-next-line
    name: "carousel",
    components: {
        Slide,
    },
};
</script>

<style lang="scss">
.block {
    .secondary-title {
        font-weight: normal;
    }
    .bio {
        float: left;
        padding-left: 22px;
    }
    .say {
        position: relative;
        margin: 47px 0 45px 22px;
        max-width: 1090px;
    }
    &__photo {
        float: left;
        padding-left: 15px;
        padding-right: 15px;
        padding-bottom: 22px;
    }
    &__image-crop {
        @include wh(60px, 60px);
        transform: rotate(45deg);
    }
    &__image {
        position: absolute;
        background-size: contain;
        @include wh(86px, 86px);
        left: -22%;
        top: -22%;
        transform: rotate(-45deg);
    }
}
.nextBtn,
.prevBtn {
    position: absolute;
    @include wh(44px, 44px);
    bottom: -37px;
    z-index: 100;
}
.nextBtn:hover,
.prevBtn:hover {
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

@media only screen and (min-width: 768px) {
    .block {
        .say {
            margin-top: 55px;
            margin-bottom: 97px;
            margin-left: 27px;
            font-size: 40px;
        }
        .bio {
            padding-left: 38px;
        }
        &__image {
            @include wh(143px, 143px);
        }
        &__image-crop {
            @include wh(100px, 100px);
        }
        &__photo {
            padding-left: 27px;
        }
    }
    .nextBtn,
    .prevBtn {
        @include wh(60px, 60px);
        bottom: 0px;
    }
    .nextBtn {
        left: auto;
        right: 100px;
    }
    .prevBtn {
        right: 20px;
    }
}
@media only screen and (min-width: 768px) {
    .block {
        .nextBtn {
            left: 570px;
            right: auto;
        }
        .prevBtn {
            left: 650px;
            right: auto;
        }
    }
}
</style>
