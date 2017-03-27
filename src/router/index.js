import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/client/list/list'
import type from '@/components/client/type/index'
import works from '@/components/client/works/works'
import Case from '@/components/client/case/case'

import Admin from "@/components/admin/container/container"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: type,
      redirect:'/skill',
      children:[{
        path:"/skill",
        // component:
      },{
        path:"/works",
        component:works
      },{
        path:"/case",
        component:Case
      }]

    },{
      path:'/list',
      component:list
     },
     {
          path: "/admin",
          component: Admin
      }
  ]
})
