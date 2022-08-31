const common = require("./webpack.common.js");
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
    })
  ]
});
