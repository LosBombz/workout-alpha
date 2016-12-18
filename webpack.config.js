var path = require('path');
var webpack = require('webpack');
var plugins = require('webpack-load-plugins')();

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            './src/index.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    plugins: [

    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader'
            }
        ]
    }
}
