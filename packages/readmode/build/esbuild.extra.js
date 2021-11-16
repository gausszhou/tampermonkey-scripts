/**
 * add headers, you can edit headers in header.js
 */
const fs = require("fs");
const app = fs.readFileSync("./lib/app.bundle.js", "utf8");
const header = fs.readFileSync("./header.js", "utf8");
const style = fs.readFileSync("./lib/app.bundle.css", "utf8");
let footer = `
window.onDOMContentLoaded = ()=> {
    var styleDom = document.createElement('style');
    styleDom.innerText =  \`
    ${style}
    \`
    document.body.appendChild(styleDom)
}
`;
fs.writeFileSync("./lib/app.bundle.js", header + "\n" + app + "\n" + footer);
// 删除css文件
fs.unlinkSync("./lib/app.bundle.css");
console.log("build complete!");
