import Cookies from 'js-cookie'
import { getUserInfo } from '../../api/login'
const state = {
  userInfo: {},
  authToken: '',
}
const mutations = {
  USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  AUTHTOKEN: (state, authToken) => {
    state.authToken = authToken
    Cookies.set('authToken', authToken, { expires: 7 })
  },
  RESET: (state) => {
    state.userInfo = {}
    state.authToken = ''
    localStorage.removeItem('authToken')
    Cookies.remove('authToken')
  },
}
const actions = {
  SET_USERINFO: ({ commit }, userInfo) => {
    commit('USERINFO', userInfo)
  },
  SET_AUTHTOKEN: ({ commit }, authToken) => {
    commit('AUTHTOKEN', authToken)
  },
  RESET: ({ commit }) => {
    console.log('登录状态重置')
    commit('RESET')
  },
  GET_USERINFO: ({ commit }, token) => {
    return new Promise((resolve, reject) => {
      getUserInfo({ token: token }).then((res) => {
        if (res.code === 1) {
          commit('USERINFO', res.data)
          commit('AUTHTOKEN', res.token)
          localStorage.setItem('authToken', JSON.stringify(res.token))
          resolve(res.data)
        } else {
          commit('RESET')
          reject(false)
        }
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
