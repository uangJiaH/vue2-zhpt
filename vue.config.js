const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
        transpileDependencies: true,
        publicPath: './',
        devServer: {
            open: true,
            host: 'localhost',
            port: 9090,
            https: false,
            proxy: {
                [process.env.VUE_APP_BASE_API]: {
                    target: process.env.VUE_APP_CROSS_ORIGIN,
                    changeOrigin: false,
                    pathRewrite: {
                        ['^' + process.env.VUE_APP_BASE_API]: ''
                    }
                }
            }
        },
        // css: {
        //     loaderOptions: {
        //         sass: {
        //             prependData: '@import "@/styles/common.scss";'
        //         }
        //     }
        // }
    }
)
