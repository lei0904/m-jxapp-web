import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Market from '@/views/Market'
import OrderDetail from '@/views/OrderDetail'
import OrderResult from '@/views/OrderResult'

import MyPromotion from '@/views/MyPromotion'


var routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      value: 1
    }
  },
  {
    path: '/market',
    name: 'Market',
    component: Market,
    meta: {
      value: 1
    }
  },
  {
    path: '/orderDetail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: {
      value: 2
    }
  },
  {
    path: '/orderResult',
    name: 'OrderResult',
    component: OrderResult,
    meta: {
      value: 3
    }
  },
  {
    path: '/myPromotion',
    name: 'MyPromotion',
    component: MyPromotion,
    meta: {
      value: 1
    }
  },
];

Vue.use(Router);

let router = new Router({
  routes
});

export default router
