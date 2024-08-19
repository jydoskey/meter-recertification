import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'meter',
      component: () => import('@/components/meter.vue')
    }
  ]
})

export default router
