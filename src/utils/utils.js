
/**
 * 判断机型
 */
export function IsIOS () {
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { // ios
      return 'ios'
    }
    if (/(Android)/i.test(navigator.userAgent)) {
      return 'android'
    }
  }
  
export function getArgs (strParame) {
    const args = {}
    let query
    // eslint-disable-next-line prefer-rest-params
    if (arguments.length === 2) { [query] = arguments } else { query = window.location.search.substring(1) }
    const pairs = query.split('&')
    for (let i = 0; i < pairs.length; i += 1) {
      const pos = pairs[i].indexOf('=')
      // eslint-disable-next-line no-continue
      if (pos === -1) continue
      const argname = pairs[i].substring(0, pos)
      let value = pairs[i].substring(pos + 1)
      value = decodeURIComponent(value)
      args[argname] = value
    }
    return args[strParame]
  }