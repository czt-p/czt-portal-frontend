const webpack = require('webpack')
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
// console.log('PrerenderSPAPlugin', PrerenderSPAPlugin)

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl:'/',
    // outputDir:'dist',
    lintOnSave: false,
    assetsDir:'assets',
    devServer:{
        open:true,
        port:8888,
        proxy:{
            '/develop':{
                // target: 'http://cezhitong.com',
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
            }),
            new PrerenderSPAPlugin({
                // 编译后的html需要存放的路径
                staticDir: path.join(__dirname, './dist'),
                // 列出哪些路由需要预渲染
                routes: ['/', '/home.html', '/evaluating.html', '/newRate.html', '/rateResult.html', '/subsidize.html',
                    '/costing.html', '/FAQs.html', '/about.html'
                ]
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