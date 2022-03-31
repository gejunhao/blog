import Vue from 'vue'
import Vuex from 'vuex'
import user from './components/user'
import getters from './getters'
Vue.use(Vuex)
// authToken: '',
//     avator: '',
//     roleId: '',
//     isRoot: '',
const store = new Vuex.Store({
  modules: {
    user,
  },
  getters,
})
export default store
