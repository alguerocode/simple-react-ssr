const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const browserConfig = {
    entry:'./client/index.js',
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname,"build","client"),
        assetModuleFilename: "assets/images/[name][ext]",
        publicPath:'./',
        clean:true
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

const serverConfig = {
    entry:'./index.js',
    target:"node",
    output:{
        filename: 'server.js',
        path: __dirname,
        assetModuleFilename: "assets/images/[hash][ext]",
        publicPath:'./',
        libraryTarget: "commonjs2"
    },
    devtool:false,
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[{loader:'css-loader/locals'}]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                type: "asset",
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader",
            }
        ]
    }
}   

module.exports = [browserConfig, serverConfig];