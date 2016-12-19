var path = require('path');
var webpack = require('webpack');
var plugins = require('webpack-load-plugins')();

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                loader: 'react-hot!babel'
            }
        ]
    }
}
