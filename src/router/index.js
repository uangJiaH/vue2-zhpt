import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',

        component: () => import('../views/login')
    },
    {
        path: '/welcome',
        name: 'layout',

        component: () => import('../layout/index')
    }
]

const router = new VueRouter({
    routes
})

export default router
