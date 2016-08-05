const path = require('path');
const webpack = require('webpack');

const BASE_CONFIG = {
    entry: [
        './src/index.js',
    ],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: [
            {
                include: /\.json$/,
                loaders: ['json'],
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
            },
        ],
    },
    resolve: {
        extensions: ['', '.js'],
    },
};

module.exports = [Object.assign({}, BASE_CONFIG, {
    // Output an common.js version that can be imported.
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
    },
}), Object.assign({}, BASE_CONFIG, {
    // Output a browser version.
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'shrugapillar.js',
        library: 'Shrugapillar',
        libraryTarget: 'var',
    },
})];
