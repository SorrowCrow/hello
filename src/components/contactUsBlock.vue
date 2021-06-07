<template>
    <div class="contactUs">
        <div class="block overflow-hidden mx-auto">
            <div class="col-12 description text-white">{ contact us }</div>
            <div class="col-12 sub-text text-white">
                Feel free to write and call us. <br />
                We really love to communicate with our clients.
            </div>

            <form>
                <div class="container">
                    <input
                        type="text"
                        name="firstname"
                        placeholder="/ Your Name"
                    />

                    <input
                        type="text"
                        name="email"
                        placeholder="/ Your E-mail"
                    />
                </div>
                <div class="container">
                    <textarea
                        type="text"
                        name="message"
                        placeholder="/ Your message"
                    ></textarea>
                </div>
                <button type="submit" class="pointer">SEND</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "contactUsBlock",
};
</script>

<style lang="scss" scoped>
.contactUs {
    background-image: url("../assets/Group\ 23.jpg");
    background-size: contain;
}
.block {
    padding-top: 70px;
    padding-bottom: 70px;
    .sub-text {
        padding-top: 44px;
        padding-bottom: 19px;
    }
    .description,
    .sub-text {
        color: white;
    }
    .container {
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        float: left;
        height: 150px;
    }
    input {
        width: 100%;
        font-size: 20px;
        margin-bottom: 20px;
        padding: 16.5px 10px 16.5px 34px;
    }
    textarea {
        @extend input;
        padding-bottom: 0px;
    }
    button {
        border: 3px solid white;
        border-radius: 5px;
        background-color: transparent;
        color: white;
        font-weight: bold;
        width: 100%;
        height: 60px;
        margin-top: 30px;
        transition: 0.3s;
        &:hover {
            background-color: #e3e3e5;
        }
    }
}
@media only screen and (min-width: 768px) {
    .block {
        padding-top: 128px;
        padding-bottom: 128px;
        .sub-text {
            padding-bottom: 80px;
        }
        .container {
            width: 50%;
            height: 155px;
        }
        input {
            margin-bottom: 35px;
            margin-right: 30px;
        }
        textarea {
            margin-right: 0;
            height: calc(100% - 20.5px);
        }
        button {
            width: 200px;
        }
    }
}
</style>