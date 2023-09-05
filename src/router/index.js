import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosPage from '../views/productos/ProductosPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosPage
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
