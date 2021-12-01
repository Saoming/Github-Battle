// webpack config js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'app', 'index.js'),
    module: {
        rules: [
            {test: /\.svg$/, use: 'svg-inline-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.jsx?$/, use: 'babel-loader'},
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        // new webpack.EnvironmentPlugin({
        //     'NODE_ENV': 'production'
        // })
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}