/**
 * add headers, you can edit headers in header.js
 */
const fs = require("fs");
const path = require("path");
const app = fs.readFileSync(path.resolve(process.cwd(), "./dist/app.bundle.js"), "utf8");
let header = fs.readFileSync(path.resolve(process.cwd(), "./header.js"), "utf8");
const packageJSON = require(path.resolve(process.cwd(), "./package.json"))
const versionReg = /(\d+\.\d+\.\d+)/g;
const currentVersion = packageJSON.version;
header = header.replace(versionReg, currentVersion);
fs.writeFileSync(path.resolve(process.cwd(), `./dist/${packageJSON.name}.${currentVersion}.user.js`), header + "\n" + app);

console.log("build complete!");
