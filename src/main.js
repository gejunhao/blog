import Vue from 'vue'
import router from './router'
import App from './App'
import scss from 'scss'
import '@/styles/app.scss'
Vue.use(scss)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
