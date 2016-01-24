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
        // "src/**/*.js",
        'node_modules/power-assert/build/power-assert.js',
        // "test/**/*.js",
        "test/**/*.coffee",
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/**/*.js': ['webpack'],
        'test/**/*.coffee': ['webpack'],
        // 'test/**/*.js': ['webpack'],
        // '**/*.coffee': 'webpack',
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
            ],
            modulesDirectories: ["node_modules"],
        },
        module: {
            loaders: [
                { test: /\.coffee$/, exclude: /test/, loader: 'coffee-loader' },
                { test: /Test\.js$/, loader: "webpack-espower-loader" },
                { test: /Test\.coffee$/, loader: "webpack-espower-loader" },
            ],
            preLoaders: [
                { test: /Test\.coffee$/, loader: 'coffee-loader' },
            ]
        },
        // devtool: 'inline-source-map',


    //     resolve: {
    //         // Tell webpack to look in node_modules, then bower_components when resolving dependencies
    //         // If your bower component has a package.json file, this is all you need.
    //         modulesDirectories: ["node_modules"]
    //     },
    //     plugins: [
    //         new webpack.ResolverPlugin([
    //           new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( "bower.json", ["main", ["main", "1"]] )
    //       ], ["normal", "loader"])
    //     ]

    },
    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        noInfo: true
    },
    // plugins: [
    //     "karma-webpack",
    //     "karma-jasmine",
    //     "karma-phantomjs-launcher",
    //     "karma-sourcemap-loader",
    // ],

  })
}
