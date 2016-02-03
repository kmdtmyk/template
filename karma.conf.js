// Karma configuration
// Generated on Wed Jan 20 2016 22:19:37 GMT+0900 (JST)

// var webpack = require("webpack");


module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/power-assert/build/power-assert.js',
      "test/**/*.js",
      "test/**/*.coffee",
      "test/**/*.ts",
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*.js': ['webpack'],
      'test/**/*.coffee': ['webpack'],
      'test/**/*.ts': ['webpack'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS',
      // 'Chrome',
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


    webpack: {
      resolve: {
        extensions: [
          '',
          '.js',
          '.coffee',
          '.ts',
        ],
        modulesDirectories: ["node_modules"],
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
          { test: /\.coffee$/, loader: 'coffee-loader' },
          { test: /\.ts$/, loader: 'ts-loader' },
        ],
        preLoaders: [
        ],
        postLoaders: [
          { test: /Test\.js$/, loader: 'webpack-espower-loader' },
          { test: /Test\.coffee$/, loader: 'webpack-espower-loader' },
          { test: /Test\.ts$/, loader: 'webpack-espower-loader' },
        ],
      },
      // devtool: 'inline-source-map',
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true
    },

  })
}
