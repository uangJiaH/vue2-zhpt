import {getItem, removeItem, setItem} from "@/utils/storage";
import UserApi from '@/api/user'

export default {
    namespaced: true,
    state: {
        token: getItem('token') || '',
        userInfo: getItem('userInfo') || {},
        nav: getItem('nav') || []
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            setItem('token', token)
        },

        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        },
        setNav(state, nav) {
            state.nav = nav
        }
    },
    actions: {
        async login({commit}, loginForm) {
            const token = await UserApi.login(loginForm)
            commit('setToken', token)
            return token
        },
        async getNav({commit}) {
            const navlist = await UserApi.getNav()
            commit('setNav', navlist)
         
            const user = await UserApi.userInfo()
            commit('setUserInfo', user)

            return navlist
        },
        loginOut({commit}) {
            commit('setToken', '')
            commit('setUserInfo', '')
            removeItem('setToken', '')
            removeItem('setUserInfo', '')
        }
    }
}
