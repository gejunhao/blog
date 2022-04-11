const path = require('path')
const defaultSetting = require('./src/setting.js')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSetting.name || 'vue'
module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
  },
}
