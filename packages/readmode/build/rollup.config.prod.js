
// rollup.config.js
import path from "path";
import scss from "rollup-plugin-scss";

const config = {
  input: path.resolve(__dirname, "../src/main.js"),
  output: {
    file: path.resolve(__dirname, "../lib/app.bundle.js"), // 打包后的全局变量，如浏览器端 window.ReactRedux
    name: "uukanshu", // 打包后的全局变量，如浏览器端 window.ReactRedux
    format: "esm", // 输出UMD格式，各种模块规范通用
  },
  plugins: [
    scss({
      output: 'lib/app.bundle.css',
      outputStyle: "compressed",
    }),
  ],
};

export default config;
