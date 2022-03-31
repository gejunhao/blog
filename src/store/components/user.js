const state = {
  userInfo: {},
}
const mutations = {
  USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
}
const actions = {
  SET_USERINFO: ({ commit }, userInfo) => {
    commit('USERINFO', userInfo)
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
