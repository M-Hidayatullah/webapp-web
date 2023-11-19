//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '@/views/home/IndexWeb.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '@/views/auth/LoginWeb.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import( /* webpackChunkName: "register" */ '@/views/auth/RegisterWeb.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "dashboard" */ '@/views/dashboard/IndexWeb.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router