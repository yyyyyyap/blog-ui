import axios from 'axios'

const service = axios.create({
  // 基础的请求地址
  baseURL: 'http://1.15.139.29/api/',
  // 设置超时时间 5s
  timeout: 5000
})

// 添加超时后的处理
axios().catch(error => {
  console.log(error)
})

export default service
