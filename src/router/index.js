import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      name: 'Not Found',
      path: '/:pathMatch(.*)*',
      component: () => import("@/pages/NotFound.vue")
    },
    {
      name: 'Contact Page',
      path: '/contacts',
      component: () => import("@/pages/ContactsPage.vue")
    }
  ]
})

export default router
