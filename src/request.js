import axios from 'axios'
import { Message } from 'element-ui'
import { getToken ,setToken } from './utils/cookie'
import  jwt  from  'jsonwebtoken'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 12000, // 请求超时时间
})

// request拦截器设置
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 请求头设置自带 token
    }
    config.headers['Content-Type'] = 'application/json;charset=utf-8' // 请求的数据格式为 json  ;charset=UTF-8
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// response 拦截器设置
service.interceptors.response.use(
  response => {
    console.log("response = ",response)
        
    let {data, msg,status} = response || {};

    if (typeof data === "object" && data.hasOwnProperty("jwtToken")) {
      setToken(data.jwtToken);
      data = jwt.decode(data.jwtToken);
    }

    let newData = { data: data, code: status };
    // console.log("newData:",newData)
    if ( (status >= 200 && status<300) || status == 0 ) {
      console.log("newData:",newData)
      return newData
    } else {
      Message({
        type: 'error',
        message:msg
      })
      return Promise.reject(data)
    }
  },
  error => {
    const response = error.response
    const code = response.data.status
    if (!code) {
      Message({
        type: 'error',
        message: '接口请求失败'
      })
    }
    return Promise.reject(error)
  }
)

export default service
