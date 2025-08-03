const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// console.log(path.resolve(__dirname, 'src'))
module.exports = {
  entry: {
    app: "@/main.js"
  },
  resolve: {
    // 设置别名
    alias: {
      "@": path.resolve(__dirname, "../src") // 这样配置后 @ 可以指向 src 目录
    }
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
