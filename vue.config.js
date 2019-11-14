const host = "localhost";
const port = 3000;
const baseUrl = "/";
const outputDir = "dist";
const assertDir = "";

module.exports = {
    publicPath: baseUrl,
    outputDir: outputDir,
    assetsDir: assertDir,
    devServer: {
        clientLogLevel: 'info',
        quiet: true,
        host: host,
        port: port,
    },
    configureWebpack: {
        entry: process.env.NODE_ENV === 'production' ? "./src/index.ts" : "./tests/main.ts"
    },
    chainWebpack(config) {
        if (process.env.NODE_ENV === 'production') {
            console.info("=============== use production ================")
            config.plugins.delete("copy");
            config.plugins.delete("html");
            config.plugins.delete("preload");
            config.plugins.delete("prefetch");
            config.plugins.delete("fork-ts-checker");
            config.output.filename("index.js");
            config.output.chunkFilename("[name].js");
        }
    }
};
