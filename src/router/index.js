import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import("@/pages/ProfilePage.vue" /* webpackChunkName: "profile" */),
    meta: {
      requiresAuth: true
    }
  },
  {
    name: 'Contact Page',
    path: '/contacts',
    component: () => import("@/pages/ContactsPage.vue" /* webpackChunkName: "contacts" */)
  },
  {
    name: 'Rules Page',
    path: '/rules',
    component: () => import("@/pages/RulesPage.vue" /* webpackChunkName: "rules" */)
  },
  {
    name: 'Games Page',
    path: '/games',
    component: () => import("@/pages/GamesPage.vue" /* webpackChunkName: "games" */)
  },
  {
    name: 'Not Found',
    path: '/:pathMatch(.*)*',
    component: () => import("@/pages/NotFound.vue" /* webpackChunkName: "not-found" */)
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    else {
      return {
        top: 0,
        behavior: "smooth"
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (window.localStorage.getItem('isAuthorised')) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
  // if (to.matched.some((record) => record.meta.requiresAdmin)) {
  //   if (JSON.parse(window.localStorage.isAdmin)) {
  //     next();
  //   }
  //   else {
  //     next('/');
  //   }
  // }
  // else if (to.matched.some((record) => record.meta.requiresAuth)) {
  //   if (JSON.parse(window.localStorage.currentUser) && !JSON.parse(window.localStorage.isAdmin)) {
  //     next();
  //   }
  //   else {
  //     next('/');
  //   }
  // }
  // else {
  //   next();
  // }
})

export default router
