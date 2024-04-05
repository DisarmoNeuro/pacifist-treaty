import { HomeView, ProposalsView } from '@/views'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/proposals',
    component: ProposalsView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

export default routes
