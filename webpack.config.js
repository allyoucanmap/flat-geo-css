const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const babelOptions = require('./babel.config');

module.exports = {
    mode: 'production',
    entry: {
        'flat-geo-css': path.resolve(__dirname, 'index.js')
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions
                }
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]',
        libraryTarget: 'umd'
    }
};
