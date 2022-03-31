import request from '@/utils/request.js'
export function login(data) {
  return request({
    url: '/login',
    method: 'GET',
    data,
  })
}
export function register(data) {
  return request({
    url: '/register',
    method: 'GET',
    data,
  })
}
