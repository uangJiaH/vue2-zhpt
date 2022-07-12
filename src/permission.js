import router from '@/router/index'
import store from "@/store";

router.beforeEach(async (to, from, next) => {
    if (to.path !== '/login' && to.path !== '/welcome') {
        if (to.meta.title) {
            const obj = {
                title: to.meta.title,
                path: to.path
            }
            // store.commit('tagsView/addTag', obj)
        }
    }
    const token = store.getters.token;
    console.log(token, 'token11')
    const hasMenus = store.getters.nav.length
    console.log(hasMenus, 'hasmenu')
    if (to.path === '/login' && token) {
        console.log('1')
        return next('/')
    }
    if (to.path !== '/login' && !token) {
        console.log(token, '2')
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
