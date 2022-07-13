import router from '@/router/index'
import store from "@/store";
import {Message} from 'element-ui'

router.beforeEach(async (to, from, next) => {

    if (to.path !== '/login') {

        if (to.meta.title) {
            const obj = {
                title: to.meta.title,
                path: to.path
            }
            console.log(obj, 'tag')
            store.commit('tag/addTags', obj)
        }
    }
    const token = store.getters.token;

    const hasMenus = store.getters.nav.length

    if (to.path === '/login' && token) {
        Message('请不要重复登录')

        return next('/')
    }
    if (to.path !== '/login' && !token) {

        return next('/login')
    }
    if (to.path !== '/login' && token) {
        if (!hasMenus) {
            const res = await store.dispatch('user/getNav')
        }
        return next()
    }
    next()
})
