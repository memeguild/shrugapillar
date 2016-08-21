const path = require('path');
const webpack = require('webpack');

module.exports = [{
    entry: [
        path.resolve(__dirname, '../src/index.js'),
    ],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [{
            include: /\.json$/,
            loaders: [
                'json'
            ],
        }, {
            test: /\.js$/,
            include: [
                path.resolve(__dirname, '../src'),
            ],
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
            },
        }],
    },
    resolve: {
        extensions: ['', '.js'],
    },
    output: {
        path: path.join(__dirname, '../lib'),
        filename: 'common.js',
        libraryTarget: 'commonjs2',
    },
}];
