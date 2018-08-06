import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/Index'
import Market from '@/views/Market'
import OrderDetail from '@/views/OrderDetail'
import OrderResult from '@/views/OrderResult'

import MyPromotion from '@/views/MyPromotion'
import MyCommission from '@/views/MyCommission'
import Income from '@/views/Income'
import IncomeDetail from '@/views/IncomeDetail'

import Deposit from '@/views/Deposit'
import DepositList from '@/views/DepositList'
import DepositDetail from '@/views/DepositDetail'


import Register from '@/views/Register'
import PersonalCenter from '@/views/PersonalCenter'
import MyClass from '@/views/MyClass'
import MyOrder from '@/views/MyOrder'
import MyAddress from '@/views/MyAddress'
import MyNewAddress from '@/views/MyNewAddress'



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
    {
        path: '/myCommission',
        name: 'MyCommission',
        component: MyCommission,
        meta: {
            value: 1
        }
    },
    {
        path: '/income',
        name: 'Income',
        component: Income,
        meta: {
            value: 2
        }
    },
    {
        path: '/incomeDetail',
        name: 'IncomeDetail',
        component: IncomeDetail,
        meta: {
            value: 3
        }
    },
    {
        path: '/depositList',
        name: 'DepositList',
        component: DepositList,
        meta: {
            value: 2
        }
    },
    {
        path: '/depositDetail',
        name: 'DepositDetail',
        component: DepositDetail,
        meta: {
            value: 3
        }
    },
    {
        path: '/deposit',
        name: 'Deposit',
        component: Deposit,
        meta: {
            value: 2
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            value: 2
        }
    },
    {
        path: '/personalCenter',
        name: 'PersonalCenter',
        component: PersonalCenter,
        meta: {
            value: 2
        }
    },
    {
        path: '/myAddress',
        name: 'MyAddress',
        component: MyAddress,
        meta: {
            value: 3
        }
    },
    {
        path: '/myNewAddress',
        name: 'MyNewAddress',
        component: MyNewAddress,
        meta: {
            value: 4
        }
    },
    {
        path: '/myClass',
        name: 'MyClass',
        component: MyClass,
        meta: {
            value: 3
        }
    },
    {
        path: '/myOrder',
        name: 'MyOrder',
        component: MyOrder,
        meta: {
            value: 3
        }
    },
];

Vue.use(Router);

let router = new Router({
  routes
});

export default router
