const common = require("./webpack.common.js");
const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    https: false,
    port: 8080,
    static: path.join(__dirname, "dist"),
    hot: true // hot reload
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Test Page"
    }),
    new webpack.DefinePlugin({
      "env": JSON.stringify("dev")
    })
  ]
});
