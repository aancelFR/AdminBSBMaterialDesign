const path = require("path");
const webpack = require("webpack");
//const devMode = process.env.NODE_ENV !== "production";
function resolve(dir) {
    return path.join(__dirname, dir);
}
/*
function assetsPath(_path) {
    const assetsSubDirectory =
        process.env.NODE_ENV === "production"
            ? config.build.assetsSubDirectory
            : config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);
}*/
module.exports = {
    runtimeCompiler: true,
    css: {
        requireModuleExtension: true,
        sourceMap: true,
    },
    chainWebpack: (config) => {
        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .options({
                prettify: false,
            });
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                fs: "fs",
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                _map: ["lodash", "map"],
            }),
            new webpack.ContextReplacementPlugin(
                /moment[\\/]locale$/,
                /^\.\/(en|fr|ko|ja|zh-cn)$/
            ),
            new webpack.ContextReplacementPlugin(
                /fullcalendar[\\/]dist[\\/]locale$/,
                /^\.\/(en|fr|ko|ja|zh-cn)$/
            ),
        ],
        resolve: {
            alias: {
                "@": resolve("src"),
                "+": resolve("node_modules"),
                "./images/layers.png$": resolve(
                    "node_modules/leaflet/dist/images/layers.png"
                ),
                "./images/layers-2x.png$": resolve(
                    "node_modules/leaflet/dist/images/layers-2x.png"
                ),
                "./images/marker-icon.png$": resolve(
                    "node_modules/leaflet/dist/images/marker-icon.png"
                ),
                "./images/marker-icon-2x.png$": resolve(
                    "node_modules/leaflet/dist/images/marker-icon-2x.png"
                ),
                "./images/marker-shadow.png$": resolve(
                    "node_modules/leaflet/dist/images/marker-shadow.png"
                ),
                "../img/error.svg$": resolve(
                    "node_modules/blueimp-gallery/img/error.svg"
                ),
                "../img/error.png$": resolve(
                    "node_modules/blueimp-gallery/img/error.png"
                ),
                "../img/loading.gif$": resolve(
                    "node_modules/blueimp-gallery/img/loading.gif"
                ),
                "../img/play-pause.png$": resolve(
                    "node_modules/blueimp-gallery/img/play-pause.png"
                ),
                "../img/play-pause.svg$": resolve(
                    "node_modules/blueimp-gallery/img/play-pause.svg"
                ),
                "../img/video-play.png$": resolve(
                    "node_modules/blueimp-gallery/img/video-play.png"
                ),
                "../img/video-play.svg$": resolve(
                    "node_modules/blueimp-gallery/img/video-play.svg"
                ),
                "../img/switch.png$": resolve(
                    "node_modules/multiselect/img/switch.png"
                ),
                "./images/user-img-background.jpg$": resolve(
                    "src/images/user-img-background.jpg"
                ),
                "../images/user-img-background.jpg$": resolve(
                    "src/images/user-img-background.jpg"
                ),
            },
        },
    },
};
