import Cookies from 'js-cookie'
const baseUrl = process.env.VUE_APP_BASE_API
// console.log(baseUrl, '12222233333')
// console.log(process.env.NODE_ENV)
const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new XMLHttpRequest('Microsoft.XMLHTTP')
const _axios = (obj) => {
  return new Promise((resolve, reject) => {
    const { url, method, data, ContentType = 'application/json;charset=UTF-8' } = obj
    var methods = method.toUpperCase()
    if (methods === 'GET') {
      const params = formatParams(data)
      xhr.open('GET', baseUrl + url + '?' + params, true)
      xhr.setRequestHeader('authToken', Cookies.get('authToken'))
      xhr.send(null)
    } else if (methods === 'POST') {
      xhr.open('POST', baseUrl + url, true)
      xhr.setRequestHeader('authToken', Cookies.get('authToken'))
      xhr.setRequestHeader('Content-type', ContentType)
      xhr.send(data)
    }
    xhr.onreadystatechange = function() {
      // console.log(xhr, '11111')
      if (xhr.readyState == 4 && xhr.status === 200) {
        // console.log(xhr.responseText, '11111')
        resolve(JSON.parse(xhr.responseText))
        reject()
      }
    }
  })
}
function formatParams(obj = {}) {
  const params = Object.keys(obj) || []
  var arr = []
  if (params.length) {
    for (var key of params) {
      const item = key.toString() + '=' + obj[key]
      arr.push(item)
    }
    return arr.join('&')
  }
  return ''
}

export default _axios
