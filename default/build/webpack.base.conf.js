var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var WebpackRuntimePublicPathPlugin = require('webpack-runtime-public-path-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: 'src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('src'),
      resolve('../node_modules')
    ],
    alias: {
      'vue': 'vue/dist/vue' + (process.env.NODE_ENV === 'production' ? '.min' : '') + '.js',
      'src': resolve('src'),
      'assets': resolve('src/assets'),
      'components': resolve('src/components'),
      '@': resolve('src'),
      '@common': resolve('../common'),
      '@test': resolve('test'),
      '@vue-mock': (process.env.NODE_ENV === 'production'
        ? resolve('../common/src/empty.js') : resolve('../common/src/api-mock/vue-mock.js')),
      '@bwajs': (process.env.NODE_ENV !== 'production'
        ? resolve('../common/src/empty.js') : resolve('../common/src/trackers/bwa.js'))
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test'), resolve('../common')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('../common')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 2048,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      // sw
      { from: 'common/www' }
    ]),
    new WebpackRuntimePublicPathPlugin({
      runtimePublicPath: 'window._main_staticPublicPath()'
    }),
    new webpack.ProvidePlugin({
      Vue: 'vue'
    })
  ]
}
