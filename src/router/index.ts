import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: to => {
    return {
      top: 0,
      el: to.hash || 'body',
      behavior: 'smooth'
    }
  },
  routes
})

export default router
