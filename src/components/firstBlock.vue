<template>
    <header class="hero">
        <div class="hero__logo mx-auto">
            <svg>
                <use xlink:href="#logo" />
            </svg>
        </div>
        <div class="block mx-auto">
            <div class="primary-text">Verify<br />Developers<br />Skills</div>
            <div class="sub-text">
                Hire talents faster and better with our technical interviews
            </div>
            <svg id="arrowToBenefits" class="pointer block__arrow">
                <use xlink:href="#arrowBenefits" />
            </svg>
        </div>
    </header>
</template>

<script>
import $ from "jquery";

$(document).ready(function () {
    $(function () {
        $("#arrowToBenefits").click(function () {
            $([document.documentElement, document.body]).animate(
                {
                    scrollTop: $("#benefits").offset().top,
                },
                500
            );
        });
    });
});

export default {
    name: "firstBlock",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hero {
    background-image: url(../assets/imgimg.jpg);
    background-repeat: no-repeat;
    background-size: 460px auto;
    background-position-x: -100px;

    &__logo {
        position: relative;
        padding-top: 58px;
        padding-left: 30px;
        max-width: 1440px;
        svg {
            @include wh(42px, 38px);
        }
    }
    .block {
        padding-top: 82px;
        div {
            position: relative;
        }
        .primary-text {
            font-size: 35px;
            &:before {
                top: 4px;
                bottom: 7px;
            }
        }
        .sub-text {
            padding-top: 27px;
            max-width: 248px;
        }
        &__arrow {
            margin-top: 20px;
            margin-bottom: 70px;
            @include wh(40px, 40px);
        }
    }
}

@media only screen and (min-width: 365px) {
    .hero {
        background-position-x: right;
    }
}

@media only screen and (min-width: 576px) {
    .hero {
        background-size: contain;
    }
}

@media only screen and (min-width: 768px) {
    .hero {
        &__logo {
            padding-top: 50px;
            padding-left: 46px;
            svg {
                @include wh(62px, 57px);
            }
        }
        .block {
            padding-top: 102px;
            .primary-text {
                font-size: 70px;
                &:before {
                    top: 12px;
                    bottom: 15px;
                }
            }
            .sub-text {
                max-width: 571px;
            }
            &__arrow {
                margin-top: 60px;
                @include wh(50px, 50px);
                margin-bottom: 104px;
            }
        }
    }
}
</style>
