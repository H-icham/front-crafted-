import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsList from '@/views/ProductsList.vue'
import Login from '@/components/Login.vue'
import Cart from '@/components/Cart.vue'
import Validation from '@/components/Validation.vue'
import Home from '@/components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/productlist',
      name: 'productlist',
      // components:()=> import('../views/ProductsList.vue')
      component: ProductsList
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/validation',
      name: 'validation',
      component: Validation
    },
  ]
})

export default router
