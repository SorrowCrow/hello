<template>
    <div class="block mx-auto overflow-hidden">
        <div class="description">{ what do we check }</div>
        <div class="sub-text">
            Our approach to technical interviews allows us to verify:
        </div>
        <div class="block__grid">
            <div class="what__item">
                <svg>
                    <use xlink:href="#logo" />
                </svg>
                <div class="secondary-title">
                    Ability to solve problems in close to real conditions
                </div>
            </div>
            <div class="what__item">
                <svg>
                    <use xlink:href="#logo" />
                </svg>
                <div class="secondary-title">
                    How a candidate behaves in a time pressured environment
                </div>
            </div>
            <div class="what__item">
                <svg>
                    <use xlink:href="#logo" />
                </svg>
                <div class="secondary-title">
                    Ability to perform a task from the first time
                </div>
            </div>
            <div class="what__item">
                <svg>
                    <use xlink:href="#logo" />
                </svg>
                <div class="secondary-title">Theoretical knowledge</div>
            </div>
            <div class="pb-md-0 what__item">
                <svg>
                    <use xlink:href="#logo" />
                </svg>
                <div class="secondary-title">
                    Ability to estimate the task in time
                </div>
            </div>
            <div class="what__item">
                <svg>
                    <use xlink:href="#logo" />
                </svg>
                <div class="secondary-title">
                    Knowledge of tools, frameworks, ability to apply
                    architectular patterns
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "whatBlock",
};
</script>

<style lang="scss" scoped>
.block {
    padding-top: 70px;
    padding-bottom: 57px;
    .sub-text {
        padding-top: 40px;
        padding-bottom: 40px;
        max-width: 590px;
    }
    .secondary-title {
        font-size: 17px;
        padding-bottom: 30px;
    }
    svg {
        float: left;
        position: relative;
        padding-bottom: 30px;
        margin-right: 23px;
        top: -5px;
        @include wh(27px, 25px);
    }
}
@media only screen and (min-width: 768px) {
    .block {
        padding-top: 113px;
        padding-bottom: 130px;
        .sub-text {
            padding-top: 61px;
            padding-bottom: 72px;
        }
        .secondary-title {
            font-size: 25px;
        }
        svg {
            margin-right: 30px;
            top: -7px;
            padding-bottom: 70px;
        }
    }
}
</style>