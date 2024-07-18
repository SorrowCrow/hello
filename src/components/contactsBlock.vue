<template>
    <div id="contacts" class="block overflow-hidden block__grid mx-auto">
        <div class="block__contact">
            <a class="block__phone" href="tel:+371 29435847">+371 29435847</a>
            <a class="block__email" href="mailto:welcome@verify.dev"
                >welcome@verify.dev</a
            >
        </div>
        <div class="block__address">
            Gustava Zemgala Gatve 76<br />
            Riga, Latvia
        </div>
        <div class="block__copyright">
            © 2020 verify.dev. All rights reserved.
        </div>
    </div>
    <div id="contactsScroll" class="contactUsButton" align="center">
        <div
            class="contactUsButton__background pointer overflow-hidden"
            id="contactsScroll"
        >
            <div class="contactUsButton__text">
                CONTACT<br />
                US
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";

$(document).ready(function () {
    $(function () {
        $("#contactsScroll").click(function () {
            console.log("1");
            $([document.documentElement, document.body]).animate(
                {
                    scrollTop: $("#contacts").offset().top,
                },
                1000
            );
        });
    });
});

export default {
    name: "contactsBlock",
};
</script>

<style lang="scss" scoped>
.block {
    padding-top: 91px;
    padding-bottom: 68px;
    &__email {
        color: $primary;
    }
    &__phone {
        width: 100%;
        display: block;
    }
    &__copyright,
    &__phone,
    &__address {
        color: $secondary;
    }
    &__address {
        font-size: 20px;
    }
    &__copyright {
        font-size: inherit;
    }
    &__contact {
        font-size: 25px;
    }
    &__address,
    &__contact {
        padding-bottom: 56px;
    }
}

.contactUsButton {
    position: fixed;
    display: flex;
    @include wh(100px, 100px);
    top: 225px;
    right: 22px;
    z-index: 10000;
    &__background {
        transform: rotate(-45deg);
        @include wh(70px, 70px);
        background-color: $pink;
    }
    &__text {
        @include wh(100px, 100px);
        display: grid;
        transform: rotate(45deg);
        left: -24%;
        top: -18%;
        font-size: 12px;
        justify-content: center;
        align-items: center;
        position: absolute;
        color: white;
        font-weight: bold;
    }
}

@media only screen and (min-width: 768px) {
    .block {
        padding-top: 113px;
        padding-bottom: 108px;
        &__address {
            font-size: 25px;
            padding-bottom: 183px;
        }
        &__copyright {
            font-size: 18px;
        }
        &__contact {
            font-size: 40px;
            padding-bottom: 183px;
            width: 50%;
        }
        &__address,
        &__contact,
        &__copyright {
            width: 500px;
        }
    }
    .contactUsButton {
        @include wh(176px, 176px);
        right: 31px;
        bottom: 50px;
        top: auto;
        &__background {
            @include wh(124px, 124px);
            margin: auto;
        }
        &__text {
            @include wh(176px, 176px);
            font-size: 20px;
            letter-spacing: 0.05em;
        }
    }
}
</style>
