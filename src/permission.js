/*
 * @Author: your name
 * @Date: 2021-12-17 17:03:57
 * @LastEditTime: 2021-12-17 17:15:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blog\src\permission.js
 */
import router from './router'
import store from './store'
import Cookies from 'js-cookie'
router.beforeEach(async (to, form, next) => {
  const authToken = Cookies.get('authToken') || ''
  var userId = store.getters.userInfo.id || ''
  console.log(authToken, userId + '1')
  if (authToken && userId) {
    next()
  } else {
    if (authToken) {
      try {
        const res = await store.dispatch('user/GET_USERINFO', authToken)
        console.log(res, '1111')
        userId = res.id
        next({ path: '/' })
      } catch (err) {
        await store.dispatch('user/RESET')
        next(`/sso?redirect=${to.path}`)
      }
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next('/login?type=login')
        // this.$message.error('请登录')
      }
    }
  }
  // alert('正在登录')
})
