/**
 * add headers, you can edit headers in header.js
 */
const fs = require('fs')
const app = fs.readFileSync('./lib/app.bundle.js', 'utf8')
const header = fs.readFileSync('./header.js', 'utf8')
fs.writeFileSync('./lib/app.bundle.js', header + '\n' + app)
console.log('build complete!')
