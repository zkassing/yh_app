import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/client/list/list'
import type from '@/components/client/type/index'
import works from '@/components/client/works/works'
import Case from '@/components/client/case/case'

import Admin from "@/components/admin/container/container"
import item from "@/components/admin/content/item"
import _type from "@/components/admin/content/type"
import subject from "@/components/admin/content/subject"
import menu from "@/components/admin/content/menu"

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

    },
    {
      path:'/list',
      component:list
    },
    {
      path: "/admin",
      component: Admin,
      children:[
        {
          path:"item",
          component:item
        },{
          path:"type",
          component:_type
        },{
          path:"subject",
          component:subject
        },{
          path:"menu",
          component:menu
        }
      ]
    }
  ]
})
