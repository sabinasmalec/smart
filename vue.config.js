module.exports = {
    baseUrl: '',
    css: {
        loaderOptions: {
            sass: {
                data: `
          @import "@/scss/style.scss";
        `
            }
        }
    }
};
