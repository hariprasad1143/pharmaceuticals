// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: 'https://s3-ap-southeast-1.amazonaws.com/flash-dev-assets/flash-aws-ui/',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all stati assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },

  dev: {
    env: require('./dev.env'),
    port: 9100,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  },
  dev_nomock: {
    env: require('./dev.env-nomock'),
    port: 9100,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/backend/flashsale': {
        // UAT1
        // target: 'http://172.17.130.134:8080/',
        // UAT5
        // target: 'http://172.17.138.100:8080/',
        // target: 'http://eventbackendapp-01.uata.lokal:8080/',
        target: 'http://eventbackendapp-01.uatb.lokal:8080/',
        changeOrigin: true
      },
      '/backend/common/': {
        // UATB
        // target: 'http://172.20.32.211:8080/',
        // UAT1
        // target: 'http://172.17.130.128:8080/',
        // UAT5
        // target: 'http://172.17.138.84:8080/',
        target: 'http://seoulbackendapp-01.uata.lokal:8080/',
        changeOrigin: true
      },
      '/backend/flash/': {
        // perf
        // target: 'http://flashsale-01.perf.lokal:8080',
        target: 'https://flashsale-dev.gdn-app.com/',
        changeOrigin: true
      },
      '/sqs-service/api/': {
        target: 'https://flashsale-dev.gdn-app.com/',
        changeOrigin: true
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
