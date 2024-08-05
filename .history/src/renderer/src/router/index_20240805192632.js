import { createRouter, createWebHashHistory } from "vue-router";



const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '默认路径 ',
      redirect: '/login'
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    }
  ]
})