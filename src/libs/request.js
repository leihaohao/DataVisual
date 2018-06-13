import axios from 'axios'
import { getSession } from './session'
//import { Notification } from 'element-ui'
import router from '../router'

// 只显示一个错误提示
let networkError = false
const warn = (message) => {
  if (!message) return
  if (!networkError) {
    networkError = true
    // Notification.error({
    //   message,
    //   onClose () {
    //     networkError = false
    //   }
    // })
  }
}

// export const baseURL = process.env.VUE_APP_BACKEND_SERVER
export const baseURL = 'http://47.97.37.145:9899'
export const CancelToken = axios.CancelToken // 取消请求

const res = axios.create({
  baseURL,
  timeout: 0
})

// 添加请求拦截器
res.interceptors.request.use((config) => {
  // 带上用户token
  const authToken = getSession() && getSession().userId
  if (authToken) {
    config.headers['Authorization'] = 'Bearer ' + authToken
  }

  // 清除不需要的参数
  if (typeof config.params === 'object') {
    config.params = JSON.parse(JSON.stringify(config.params)) // 清除与原数据的引用关联
    for (const i in config.params) {
      if (config.params[i] === undefined ||
        config.params[i] === null ||
        config.params[i] === '') {
        delete config.params[i]
      }
    }
  }
  return config
})

// 添加响应拦截器
res.interceptors.response.use(response => response, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        router.push({ path: '/login' })
        break

      case 403:
        err.message = '拒绝访问'
        router.push({ path: '/login' })
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  } else if (err.message === 'Network Error') {
    err.message = '网络错误，请稍后再试！'
  }
  if (err && err.response && err.response.data && err.response.data.message) {
    warn(err.response.data.message)
  } else {
    warn(err.message)
  }
  return Promise.reject(err)
})

export default res
