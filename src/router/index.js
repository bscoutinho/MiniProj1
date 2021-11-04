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
    component: () => import(/* webpackChunkName: "about" */ '../views/Who.vue')
  },
  {
    path: '/what',
    name: 'What',
    component: () => import(/* webpackChunkName: "about" */ '../views/What.vue')
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: () => import(/* webpackChunkName: "about" */ '../views/Hobbies.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
