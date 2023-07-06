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
    path: '/dashboard',
    name: 'dashboard',
    component: () => import("@/pages/DashboardPage.vue" /* webpackChunkName: "dashboard" */),
    meta: {
      requiresAdmin: true
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
    name: 'News Page',
    path: '/news',
    component: () => import("@/pages/NewsPage.vue" /* webpackChunkName: "news" */)
  },
  {
    name: 'Top Page',
    path: '/top',
    component: () => import("@/pages/TopPage.vue")
  },
  {
    name: 'Faq Page',
    path: '/faq',
    component: () => import("@/pages/FaqPage.vue")
  },
  {
    name: 'Leguages Page',
    path: '/leage',
    component: () => import("@/pages/LeaguagesPage.vue")
  },
  {
    name: 'LeageId Page',
    path: '/leage/:id',
    component: () => import("@/pages/LeagePageId.vue")
  },
  {
    name: 'Leage Page',
    path: '/leage/:id/:leageid',
    component: () => import("@/pages/LeagePage.vue")
  },
  {
    name: 'Tournir Page',
    path: '/tournir',
    component: () => import("@/pages/TuornirPage.vue")
  },
  {
    name: 'Tournir Id',
    path: '/tournir/:id',
    component: () => import("@/pages/TournirIdPage.vue" /* webpackChunkName: "soon" */)
  },
  {
    name: 'Premium Page',
    path: '/premium',
    component: () => import("@/pages/PremiumPage.vue" /* webpackChunkName: "premium" */)
  },
  {
    name: 'Sponsorship Page',
    path: '/sponsorship',
    component: () => import("@/pages/SoonPage.vue" /* webpackChunkName: "sponsorship" */)
  },
  {
    name: 'Coming Soon',
    path: '/soon',
    component: () => import("@/pages/SoonPage.vue" /* webpackChunkName: "soon" */)
  },
 
  {
    name: 'Admin Table',
    path: '/table',
    component: () => import("@/pages/admins/PageTable.vue" /* webpackChunkName: "soon" */),
    props: (route) => ({
      queryParam: route.query.param
    }),
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
  } else if (to.matched.some((record) => record.meta.requiresAdmin)) {
    if (window.localStorage.getItem('isAdmin')) {
      next()
    }
    else {
      next('/')
    }
  } else {
    next()
  }
})

export default router
