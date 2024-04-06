import { createRouter, createWebHashHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: to => {
    return {
      top: 56,
      el: to.hash || 'body',
      behavior: 'smooth'
    }
  },
  routes
})

export default router
