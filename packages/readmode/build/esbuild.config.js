const {sassPlugin} =  require("esbuild-sass-plugin") ;
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");

require("esbuild")
  .build({
    entryPoints: ["./src/main.js"],
    bundle: true,
    outfile: "./lib/app.bundle.js",
    format: "cjs", // cjs iife esm
    minify: false, // true false 是否压缩代码
    plugins: [
        postCssPlugin(),
        sassPlugin()
    ],
    define: {
      "process.env.NODE_ENV": JSON.stringify("development")
    }
  })
  .then(() => {
    console.log("Build completed");
  })
  .catch(() => process.exit(1));