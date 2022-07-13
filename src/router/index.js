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
        path: '/',
        name: 'home',
        redirect: "/welcome",
        component: () => import('@/layout/index'),
        children: [
            {
                path: '/welcome',
                name: 'welcome',
                meta: {
                    title: '控制台'
                },
                component: () => import('../views/welcome')
            }
        ]
    },
    {
        path: '/sys',
        name: 'sys',
        component: () => import('../layout/index'),
        redirect: '/sys/users',
        children: [
            {
                path: '/sys/users',
                name: 'sys:users',
                meta: {
                    title: '用户管理',
                    icon: 'el-icon-user'
                },
                component: () => import('../views/users')
            },
            {
                path: '/sys/roles',
                name: 'sys:roles',
                meta: {
                    title: '角色管理',
                    icon: 'el-icon-user-solid'
                },
                component: () => import('../views/roles')
            },
            {
                path: '/sys/menus',
                name: 'sys:menus',
                meta: {
                    title: '菜单管理',
                    icon: 'el-icon-menu'
                },
                component: () => import('../views/menus')
            },

        ]
    },

]

const router = new VueRouter({
    routes
})

export default router
