<template>
    <div class="block mx-auto overflow-hidden" id="benefits">
        <div class="description">{ benefits of our service }</div>
        <div class="block__grid">
            <div class="block__item">
                <svg class="block__clock block__firstRow">
                    <use xlink:href="#benefits-clock" />
                </svg>
                <div class="secondary-title">
                    Free your senior developers from the burden of screening
                    candidates
                </div>
                <div class="secondary-sub">
                    Your team can now focus on creating added value for your
                    business.
                </div>
            </div>
            <div class="block__item">
                <svg class="block__clock block__firstRow">
                    <use xlink:href="#benefits-like" />
                </svg>
                <div class="secondary-title">
                    Dramatically increase the throughput of your interview
                    process
                </div>
                <div class="secondary-sub">
                    Out team already includes more than 10 interview engineers
                    who are availavle 7 days a week
                </div>
            </div>
            <div class="block__item">
                <svg class="block__shield block__secondRow">
                    <use xlink:href="#benefits-shield" />
                </svg>
                <div class="secondary-title">
                    Minimise the risk of erroneous hiring with
                </div>
                <div class="secondary-sub">
                    A reliable test of the candidates' ability to solve real
                    problems Evaluation of the personal qualities of candidates
                </div>
            </div>
            <div class="block__item">
                <svg class="block__heart block__secondRow">
                    <use xlink:href="#benefits-heart" />
                </svg>
                <div class="secondary-title">
                    Minimise the risk of losing good candidates due to
                </div>
                <div class="secondary-sub">
                    The need to wait for the interviewer to be free. Too time
                    consuming homeworks. Misinterpreting the results of
                    interviews or tests
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "benefitsBlock",
};
</script>

<style lang="scss" scoped>
.block {
    padding-top: 70px;
    padding-bottom: 73px;
    background-color: $background-gray;
    div {
        position: relative;
    }
    &__item {
        padding-top: 42px;
    }
    &__firstRow {
        padding-bottom: 19px;
    }
    &__secondRow {
        padding-bottom: 13px;
    }
    &__clock {
        @include wh(40px, 45px);
    }
    &__shield {
        @include wh(40px, 62px);
    }
    &__heart {
        @include wh(40px, 50px);
    }
}

@media only screen and (min-width: 768px) {
    .block {
        padding-top: 97px;
        padding-bottom: 139px;
        &__item {
            padding-top: 80px;
        }
        svg {
            padding-bottom: 30px;
        }
        &__clock {
            @include wh(50px, 58px);
        }
        &__shield {
            @include wh(46px, 70px);
        }
        &__heart {
            @include wh(56px, 70px);
        }
    }
}
</style>