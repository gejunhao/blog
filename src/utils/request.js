const baseUrl = 'http://localhost:3000'
const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new XMLHttpRequest('Microsoft.XMLHTTP')
const _axios = (obj) => {
  const { url, method, data, ContentType = 'application/json;charset=UTF-8' } = obj
  var methods = method.toUpperCase()
  if (methods === 'GET') {
    const params = formatParams(data)
    xhr.open('GET', baseUrl + url + '?' + params, true)
    xhr.send(null)
  } else if (methods === 'POST') {
    xhr.open('POST', baseUrl + url, true)
    xhr.setRequestHeader('Content-type', ContentType)
    xhr.send(data)
  }
  xhr.onreadystatechange = function() {
    if (xhr.readuState == 4 && xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
}
function formatParams(obj) {
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
