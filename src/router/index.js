import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'app',
    redirect: "/login"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    children: [{
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('../views/home/children/HomePage.vue'),
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: () => import('../views/home/children/ShoppingCart.vue'),
    }, {
      path: '/OrderForGoods',
      name: 'OrderForGoods',
      component: () => import('../views/home/children/OrderForGoods.vue'),
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/home/children/mine.vue'),
    },]
  },
  {
    path: '/StorePopUp',
    name: 'StorePopUp',
    component: () => import('../views/home/children/StorePopUp.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
