import request from "@/utils/request";
// 获取验证码
const getCaptcha = () => {
    return request({
        url: '/captcha',
        method: 'GET'
    })
}
// 登录的接口
const login = (data) => {
    return request({
        url: '/login?username=' + data.username + '&password=' + data.password + '&code=' + data.code + '&token=' + data.token,
        method: 'POST',
        data
    })
}

// 用户信息接口
const userInfo = () => {
    return request({
        url: '/user/info',
        method: "GET",
    })
}

// 权限的接口
const getNav = () => {
    return request({
        url: '/menu/nav',
        method: 'GET'
    })
}

const getUserList = (data) => {
    return request(({
        url: '/user/list',
        method: "GET",
        data
    }))
}
// 用户列表
const getRoleList = (data) => {
    return request({
        url: '/role/list',
        method: "get",
        data
    })
}
// 菜单数据
const getMenuList = (data) => {
    return request({
        url: '/menu/list',
        method: "get",
        data
    })
}
export default {
    getCaptcha, login, userInfo, getNav, getUserList, getRoleList, getMenuList
}
