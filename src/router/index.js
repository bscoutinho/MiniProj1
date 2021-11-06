import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/who',
    name: 'Who',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Who.vue')
  },
  {
    path: '/what',
    name: 'What',
    component: () => import('../views/What.vue')
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: () => import('../views/Hobbies.vue')
  },
  //catchall redirect
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
