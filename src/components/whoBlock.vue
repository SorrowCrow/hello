<template>
    <div class="block overflow-hidden">
        <div class="description">{ who we are }</div>
        <div class="sub-text">
            The company was created by combining the efforts of two enterprises.
            We have accumulated a wealth of experience in selecting programmers
            and building strong teams.
        </div>
        <div class="block__grid mx-auto">
            <div class="block__item mx-auto">
                <div class="block__axioma">
                    <svg class="block__axioma">
                        <use xlink:href="#axioma-logo" />
                    </svg>
                </div>
                <div class="secondary-sub">
                    11 years in the IT outsourcing market, more than 30 complex
                    projects of medium and large size have been developed.
                </div>
            </div>
            <div class="block__item mx-auto">
                <div class="block__itsm">
                    <svg class="block__itsm">
                        <use xlink:href="#itsm-logo" />
                    </svg>
                </div>
                <div class="secondary-sub">
                    6 years in the IT recruiting market.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "whoBlock",
};
</script>

<style lang="scss" scoped>
.block {
    background-color: $background-gray;
    padding-top: 70px;
    padding-bottom: 70px;
    .sub-text {
        padding-top: 44px;
        padding-bottom: 70px;
        max-width: 1080px;
    }
    &__item {
        max-width: 470px;
    }
    &__axioma,
    &__itsm {
        position: relative;
        @extend .primary-text;
    }
    &__axioma {
        @include wh(200px, 46px);
    }
    &__itsm {
        @include wh(295px, 42px);
        top: 5px;
    }
    &__itsm:before {
        top: 1%;
        height: 79%;
    }
}

@media only screen and (min-width: 768px) {
    .block {
        padding-top: 119px;
        padding-bottom: 127px;
        &__item {
            min-width: 500px;
        }
        .sub-text {
            padding-top: 61px;
            padding-bottom: 112px;
        }
        &__axioma {
            @include wh(305px, 71px);
        }
        &__axioma:before {
            top: 12%;
            height: 77%;
        }
        &__itsm {
            @include wh(470px, 86px);
            top: 0px;
        }
        &__itsm:before {
            top: 12%;
            height: 63%;
        }
    }
}
</style>