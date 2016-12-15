module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: ['lib.angular.js',

        'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.js',
        'src/test/test-context.js',
        'lib/angular-mocks.js'
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'src/test-context.js': ['webpack']
        },
        webpack: {
            module: {
                loaders: [
                    { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};