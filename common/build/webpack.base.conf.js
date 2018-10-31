var path = require('path')
var vueLoaderConfig = require('./vue-loader.conf')
var utils = require('./utils')
var webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [
      resolve('src'),
      resolve('../node_modules')
    ],
    alias: {
      'vue': 'vue/dist/vue' + (process.env.NODE_ENV === 'production' ? '.min' : '') + '.js',
      'src': resolve('src'),
      '@': resolve('src'),
      '@common': resolve('./'),
      '@test': resolve('test'),
      'assets': resolve('../default/src/assets'),
      '@bwajs': (process.env.NODE_ENV !== 'production'
        ? resolve('../common/src/empty.js') : resolve('../common/src/trackers/bwa.js'))
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: 'vue'
    })
  ]
}
