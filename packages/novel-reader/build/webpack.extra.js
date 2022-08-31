/**
 * add headers, you can edit headers in header.js
 */
 const fs = require("fs");
 const app = fs.readFileSync("./dist/app.bundle.js", "utf8");
 let header = fs.readFileSync("./header.js", "utf8");
 const packageJSON = require("../package.json")
 const versionReg = /(\d+\.\d+\.\d+)/g;
 const currentVersion = packageJSON.version;
 header = header.replace(versionReg, currentVersion);
 fs.writeFileSync(`./dist/${packageJSON.name}.user.js`, header + "\n" + app);
 console.log("build complete!");
 