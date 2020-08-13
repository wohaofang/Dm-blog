import axios from 'axios'
import Vue from 'vue'

// 全局设置
// axios.defaults.timeout = 10000; // 时间超时设置10s
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// const getHeaders = async () => {
//     const result = getSession('headers')
//     if (result) {
//       return result
//     }
//     return new Promise((resolve) => {
//       Vue.prototype.bus.$on('next', () => {
//         resolve(getSession('headers'))
//       })
//     })
//   }

// const instance = axios.create();
// instance.defaults.headers.post['Content-Type'] = 'application/json';

// // request拦截器，每次发送请求的时候拦截下来
// instance.interceptors.request.use(
//   config => {
//     // 每次发送请求，检查 vuex 中是否有token,如果有放在headers中
//     if(Vue.prototype.$getSession('token')){
//       config.headers.Authorization = Vue.prototype.$getSession('token')
//     }
//     console.log(123)
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// )

class DAxios {
  constructor(config = {}) {
    this.headers = {
      "content-type": "application/json;charset=UTF-8",
    };
    this.timeout = 10000;
    this.ipUrl = config.ipUrl;
  }

  async get(url, data, header = {}) {
    const _this = this;
    // const commonHeader = await getHeaders()
    return axios({
      method: "get",
      url,
      data:{
        ...data,
      },
      timeout: _this.timeout
    })
    .then((res)=>{
        if(res.status !== 200){
            return Promise.reject("未知错误");
        }
        return Promise.resolve(res.data)
    })
    .catch(function(err) {
        
        return Promise.reject(err);
        });
  }
}

export default new DAxios();
