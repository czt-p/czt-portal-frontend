const webpack = require('webpack')
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl:'/',
    outputDir:'dist',
    lintOnSave: false,
    assetsDir:'assets',
    devServer:{
        open:true,
        port:8888,
        proxy:{
            '/develop':{
                target: 'http://192.168.0.65:9090',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/develop':''
                }
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
        ]
    },
    productionSourceMap: false,
    lintOnSave: false,
    chainWebpack: config => {
        config.entry.app = ["babel-polyfill", resolve('src/main.js')],
            config.resolve.alias
            .set('@', resolve('src'))
            .set('./@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'))
            .set('@font', resolve('src/font'));
    }
}