import Vue from 'vue'
import Router from 'vue-router'

const index = () => import('@views/index')
const orderList = () => import('@views/orderList')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/orderList/:page',
      name: 'orderList',
      component: orderList
    },
    {
      path: '*',
      redirect: {
        name: 'index'
      }
    }
  ]
})
