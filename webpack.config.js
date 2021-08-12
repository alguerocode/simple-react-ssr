const path = require("path");


const clientConfig = { // client webpack confiure object
  entry:"./client/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build", "client"),
    publicPath: "./",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

const serverConfig = { // server webpack configure object
  mode:'development',
  devtool: false,
  entry: "./index.js",
  target: "node",
  output: {
    clean: true,
    filename: "server.js",
    path: path.resolve(__dirname, "build", "server"),
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

module.exports = [clientConfig, serverConfig];
