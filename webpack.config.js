// entry -> output
const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ] // use allows us to set up an array of loaders
        }, {
            test: /\.(png|jpe?g|gif|jfif|pdf)$/i,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }, {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        }
    ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 8080
    },
    plugins: [
        new CompressionPlugin({
            test: /\.js(\?.*)?$/i,
            exclude: /node_modules/
        }),
    ],
    mode: 'development'
};