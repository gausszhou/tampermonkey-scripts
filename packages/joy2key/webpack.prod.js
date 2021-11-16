const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
  mode: 'production',
  externals: {
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'lib')
  },
  optimization: {
    minimize: false
  },
})
