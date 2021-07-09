import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout/index'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
  },
  {
    name: 'home',
    path: '/home',
    redirect: '/home/index',
    component: Layout,
    children: [
      {
        path: '/home/index',
        name: 'homeIndex',
        component: () => import('@/views/home'),
      },
    ],
  },
]
const router = new VueRouter({
  routes,
})
export default router
