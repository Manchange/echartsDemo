import axios from 'axios'
import {
  MessageBox,
  Message,
  Loading
} from 'element-ui'
import store from '@/store'

// 创建一个axios实例

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, //跨域请求时发送cookie
  timeout: 5000 // 请求超时
})
let loading //定义loading变量

export function startLoading() { //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
export function endLoading() { //使用Element loading-close 方法
  loading.close()
}

let needLoadingRequestCount = 0
export function showFullScreenLoading() {
  console.log(needLoadingRequestCount)
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做一些事情
    if (config.url !== "/api/v1/login/getkey" && config.url !== "/api/v1/login/login") {
      let userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      let userSign = userInfo.account + "token";
      let token = window.localStorage.getItem(userSign);

      let id = '';
      let name = '';
      let account = '';
      if (userInfo) {
        id = userInfo.userId;
        name = encodeURI(userInfo.name);
        account = userInfo.account;
      }
      if (token) {
        // 每个请求带上cook
        // ['X-Token'] is a custom headers key
        // 根据实际情况修改
        config.headers['X-Token'] = token;
        config.headers['X-Id'] = id;
        config.headers['x-Name'] = name;
        config.headers['X-Account'] = account;
      }

      
      if (config.method === "get") {
        if(config.url.indexOf("?") === -1) {
          config.url = config.url + "?t=" + new Date().getTime();
        }
      }
    }
    showFullScreenLoading()
    return config
  },
  error => {
    // 请求错误时候处理的事情
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   * 如果您想获取诸如标题或状态之类的http信息
   * 请返回 response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   * 通过自定义代码确定请求状态
   * 这只是一个例子
   * 您还可以通过HTTP状态代码判断状态
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    // 如果自定义代码不是20000，则判断为错误。
    if (res.code !== 200) {
      endLoading()
      Message({
        message: res.statustext || 'error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // 50008：非法令牌; 50012：其他客户登录; 50014：令牌已过期;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        endLoading()
        // 重新登录
        MessageBox.confirm('您已退出，可以取消此页面，或者重新登录', '确认注销', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          location.reload()
        })
      }
      if (res.StatusCode === 50014) {
        endLoading()
        // 重新登录
        MessageBox.confirm('登录过期，请重新登录', '确认注销', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          location.reload()
        })
      }
      if (res.code === 50016) {
        endLoading()
        Message({
          message: res.message || '账号密码有误',
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(res.message || 'error')
    } else {
      tryHideFullScreenLoading()
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
)

export default service
