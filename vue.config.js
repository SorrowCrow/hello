module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
            @import "@/scss/main.scss";
          `
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/hello/'
    : '/'
};
