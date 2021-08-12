const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const clientConfig = { // client webpack confiure object
    entry:'./client/index.js',
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname,"build","client"),
        assetModuleFilename: "assets/images/[name][ext]",
        publicPath:'./',
        clean:true
    },
    stats: {
        errorDetails: true,
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

const serverConfig = { // server webpack configure object
    entry:'./index.js',
    target:"node",
    output:{
        clean:true,
        filename: 'server.js',
        path: path.resolve(__dirname,'build','server'),
        assetModuleFilename: "assets/images/[hash][ext]",
        publicPath:'./',
    },
    stats: {
        errorDetails: true,
    },
    devtool:false,
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[{loader:'css-loader/locals'}] // css locals tell server to care about css import without using it
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

module.exports = [clientConfig, serverConfig];