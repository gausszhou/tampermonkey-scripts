const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
console.log(path.resolve(__dirname, "src"));
module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src")
    }
  },
  entry: {
    app: "@/main.js"
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
};
