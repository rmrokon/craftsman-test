const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/step1", {
            target: "http://localhost:3272",

            changeOrigin: true
        })
    );

    app.use(
        proxy("/step1", {
            target: "http://localhost:3272",

            changeOrigin: true
        })
    );
};