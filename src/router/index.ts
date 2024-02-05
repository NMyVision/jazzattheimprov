import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/shows',
      name: 'shows',
      children: [
        {
          path: '',
          name: 'shows',
          component: () => import('../views/ShowsView.vue')
        },
        {
          path: ':id',
          name: 'shows-detail',
          component: () => import('../views/ShowsDetailView.vue'),
          props: true
        }
      ]
    },
    {
      path: '/termsandconditions',
      name: 'terms',
      component: () => import('../views/TermsView.vue')
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: () => import('../views/PrivacyView.vue')
    }
  ]
})

export default router
