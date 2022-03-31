/*
 * @Author: your name
 * @Date: 2021-12-17 17:03:57
 * @LastEditTime: 2021-12-17 17:15:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blog\src\permission.js
 */
import router from './router'
router.beforeEach((to, form, next) => {
  console.log(to, form)
  // alert('正在登录')
  next()
})
