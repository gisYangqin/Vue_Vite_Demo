import axios from 'axios'

const request = axios.create({
  baseURL: 'http://loaclhost:80'
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 统一设置用户 token
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
// Add a response interceptor
// 统一处理接口响应错误，比如token过期无效，服务端异常
request.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

export default request
