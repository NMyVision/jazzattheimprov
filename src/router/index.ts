import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/ContactUs',
      name: 'contact-us',
      component: () => import('@/views/ContactUs.vue')
    },
    {
      path: '/TOS',
      name: 'terms-of-service',
      component: () => import('@/views/TOS.vue')
    }
  ]
})

export default router
