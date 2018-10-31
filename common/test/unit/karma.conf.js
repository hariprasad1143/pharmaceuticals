// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: [
      '../../../node_modules/es6-promise/dist/es6-promise.auto.js',
      '../../../common/src/libs/array.js',
      '../../../common/src/libs/classlist.js',
      '../../../common/src/libs/lite-date-format.js',
      './index.js',
      {pattern: './dummy/empty.js', watched: false, served: true, included: true},
    ],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    exclude: [
      '/**/trackers/*.js'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    },
    plugins: [
      'karma-babel-preprocessor',
      'karma-coverage',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-webpack',
      'karma-phantomjs-launcher',
    ],
    captureTimeout: 60000, // it was already there
    browserDisconnectTimeout : 10000,
    browserDisconnectTolerance : 1,
    browserNoActivityTimeout : 60000 //by default 10000
  })
}
