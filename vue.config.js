const webpack = require('webpack')
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

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
                target: 'http://cezhitong.com',
                // target: 'http://192.168.0.65:9090',
                changeOrigin:true,
                ws:true,
                pathRewrite:{
                    '^/develop':''
                }
            }
        }
    },
    configureWebpack: config=>{
        if (process.env.NODE_ENV == 'production'){
            return {
                plugins: [
                    new webpack.ProvidePlugin({
                        jQuery: 'jquery',
                        $: 'jquery'
                    }),
                    new PrerenderSPAPlugin({
                        // 编译后的html需要存放的路径
                        staticDir: path.join(__dirname, './dist'),
                        // 列出哪些路由需要预渲染
                        routes: ['/', '/evaluating', '/newRate', '/rateResult', '/subsidize',
                            '/costing', '/FAQs', '/about', '/subsidize/detail', '/FAQs/detail',
                        ],
                        //这个很重要，如果没有配置这段，也不会进行预编译
                        renderer: new Renderer({
                            inject: {foo: 'bar'},
                            headless: false,
                            // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                            renderAfterDocumentEvent: 'render-event'
                        })
                    })
                ]
            }
        }else {
            return{
                plugins: [
                    new webpack.ProvidePlugin({
                        jQuery: 'jquery',
                        $: 'jquery'
                    })
                ]
            }
        }
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