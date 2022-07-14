const px2rem = require('postcss-px2rem')

const postcss = px2rem({
    remUnit: 100   //基准大小 baseSize,建议写100 因为可以根据1rem=100px 快速算出设计图的尺寸
})


module.exports = {
    lintOnSave: false, // 当保存时不进行eslint的检查
    devServer: {
        open: false//自动打开默认浏览器
    },
    css: {
        loaderOptions: {
            postcss: {//postcss-px2rem 插件的配置
                plugins: [
                    postcss
                ]
            },
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.sass` 这个文件
                // 注意：在 sass-loader v9 中，这个选项名是 "additionalData" v7中这个选项名是data
                prependData: `@import "@/assets/styles/common.scss";`
            }
        },
        
    }
}