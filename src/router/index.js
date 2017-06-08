import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import shop from '@/pages/shop'
import goods from '@/pages/goods'
import error from '@/pages/error'
import reg from '@/pages/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/shop',
      name: 'shop',
      component: shop
    },
     {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
     {
      path: '*',
      name: 'error',
      component: error
    }
  ]
})
