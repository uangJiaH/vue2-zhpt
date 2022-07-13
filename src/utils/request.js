import axios from "axios";
import store from '@/store/index'
// 导入message消息提示组件
import {Message} from 'element-ui'

// 导入自定义消息提示
import exceptionMessage from './exception-message'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
});
// 创建实例
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = store.getters.token
    if (token) config.headers.token = token
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code === 200) {
        return response.data.data
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
// 错误信息提示
const _showErrorMessage = (code, msg) => {
    const message = exceptionMessage[code] || msg || '未知错误'
    Message({message, type: 'error'})
}
// 统一了传参处理
const
    request = (options) => {
        if (options.method.toLowerCase() === 'get') {
            options.params = options.data || {}
        }
        return service(options)
    }

export default request
