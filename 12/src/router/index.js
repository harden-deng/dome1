import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Aa from '@/components/aa'
import Bb from '@/components/bb'
import Vv from '@/components/vv'
import Aom from '@/components/vv/aom'
import  Me from '@/components/vv/me'
import  Search from '@/components/vv/search'
import Order from '@/components/vv/order'
import Food from '@/components/tvv/food'
import Shop from '@/components/tvv/shop'

Vue.use(Router)

export default new Router({
  routes: [
    //首页城市列表页
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    //当前选择城市页
    {
      path: '/bb/:id',
      name: 'Bb',
      component: Bb,
    },
    //饭店
    {
      path: '/food',
      name: 'Food',
      component:Food,
    },
    //购物车
    {
      path: '/shop',
      name: 'Shop',
      component:Shop,
    },

    {            //参数
      path: '/aa',
      name: 'Aa',
      component: Aa,
      children:[
        {
        path:"/aa/aom/:geohash",
        name:"Aom",
        component:Aom,
       },
       {
        path:"/aa/me/",
        name:"Me",
        component:Me,
       },
       {
        path:"/aa/order/",
        name:"Order",
        component:Order,
       },
       {
        path:"/aa/search/",
        name:"Search",
        component:Search,
       },

      ]  
    },
    {
      path: '/vv',
      name: 'Vv',
      component: Vv,
    },

  ]
})
