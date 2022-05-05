const path = require('path')
const defaultSetting = require('./src/setting.js')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSetting.name || 'vue'
module.exports = {
  devServer: {
    port: process.env.NODE_ENV === 'development' ? 8080 : 3000,
    proxy: {
      '/dev-api': {
        target: 'http://ge.junhao.fun:8111',
        pathRewrite: {
          '^/dev-api': '',
        },
        changeOrigin: true,
        logLevel: 'debug',
      },
    },
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
