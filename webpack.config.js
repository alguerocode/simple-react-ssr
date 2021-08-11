const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports.browserConfig = {
    entry:'.client/index.js',
    ouptut:{
        filename: '[name].js',
        path: path.resolve(__dirname,"build"),
        assetModuleFilename: "assets/images/[name][ext]",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:"assets/styles/[name].css",
            chunkFilename:"assets/styles/chunk.[name].css"
        })
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset",
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    }
}

module.exports.serverConfig = {
    entry:'./index.js',
    target:"node",
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname,"build"),
        assetModuleFilename: "assets/images/[hash][ext]",
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['css-loader/locals']
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset",
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            }
        ]
    }
}   
