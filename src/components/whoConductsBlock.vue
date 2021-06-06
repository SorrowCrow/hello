<template>
    <div class="whoConducts">
        <div class="block mx-auto overflow-hidden">
            <div class="description">{ who conducts the interviews }</div>
            <div class="secondary-title">
                Our verification process is designed by the top programmers in
                the industry. It has been polished on a large number of
                candidates. These same programmers will interview your
                candidates.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "whoConductsBlock",
};
</script>

<style lang="scss" scoped>
.whoConducts {
    background-image: url("../assets/Frame\ 11-1.jpg");
    background-size: contain;
}
.block {
    padding-top: 70px;
    padding-bottom: 78px;

    .secondary-title {
        position: relative;
        margin-top: 47px;
        font-weight: normal;
        color: white;
    }
}
@media only screen and (min-width: 768px) {
    .block {
        padding-top: 107px;
        padding-bottom: 113px;
        .secondary-title {
            margin-top: 55px;
            font-size: 40px;
        }
        .secondary-title:before {
            top: 10px;
            bottom: 7px;
        }
    }
}
</style>