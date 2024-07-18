module.exports = {
    outputDir: "./docs",
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
            @import "@/scss/main.scss";
          `,
            },
        },
    },

    publicPath:
        process.env.NODE_ENV === "production" ? "/vue-verify-dev/" : "/",

    transpileDependencies: true,
};
