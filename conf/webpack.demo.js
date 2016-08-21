const path = require('path');
const webpack = require('webpack');

const BASE_CONFIG = {
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
                path.resolve(__dirname, '../demo/src'),
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
};

module.exports = [Object.assign({}, BASE_CONFIG, {
    // Output a browser version of the library in the demo dist folder.
    entry: [
        path.resolve(__dirname, '../src/index.js'),
    ],
    output: {
        path: path.join(__dirname, '../demo/dist'),
        filename: 'shrugapillar.js',
        library: 'Shrugapillar',
        libraryTarget: 'var',
    },
}), Object.assign({}, BASE_CONFIG, {
    // Compile the demo source.
    entry: [
        path.resolve(__dirname, '../demo/src/index.js'),
    ],
    output: {
        path: path.resolve(__dirname, '../demo/dist'),
        filename: 'demo.js',
    },
})];
