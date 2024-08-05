import { createRouter, createWebHashHistory } from "vue-router";



const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})