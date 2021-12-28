const CopyWebpackPlugin = require('copy-webpack-plugin')

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

module.exports = {
  configureWebpack: {
    module:{
        rules:[{
            test:/\.mjs$/,
            include: /node_modules/,
            type: "javascript/auto"
        }]
    },
},
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/style',
          to: 'style/',
          toType: 'dir'
        }
      ]),
      new CompressionWebpackPlugin({
        // asset: '[path].gz[query]', // 提示compression-webpack-plugin@3.0.0的话asset改为filename
        algorithm: 'gzip',
        test: new RegExp('\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  }
}
