import Vue from 'vue'

// 存session
export function setSession (key, val) {
  try {
    sessionStorage.setItem(key, JSON.stringify(val))
  } catch (e) {
    // empty
  }
}

// 取session
export function getSession (key) {
  let val = ''
  try {
    val = JSON.parse(sessionStorage.getItem(key)) || ''
  } catch (e) {
    // empty
  }
  return val
}



// 判断传入对象是否为字符串，是的话返回当前字符串，否则返回第二个参数
export function getString (e, str = '发生异常请重试') {
  if (typeof e === 'string') {
    return e
  }
  return str
}

Vue.prototype.$setSession = setSession
Vue.prototype.$getSession = getSession
Vue.prototype.$getString = getString


console.log("\n欢迎踩点丁大铭的博客，在这里与你一起分享生活，分享技术。%c\n\n联系方式: 1123 ", "color:red");