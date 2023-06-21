import axios from "axios"

// 创建axios实例
// const url = process.env.VUE_APP_API;
// console.log(url + "1111");
const service = axios.create({
  baseURL: "http://localhost:8888",
})
// 添加请求拦截器

service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // console.log(222);
  return response;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  console.log(error);
  if (error.request.status === 404) {
    return alert('服务器找不到当前地址');
  }
  return Promise.reject(error);
});

export default service