import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list/list'
import type from '@/components/type/index'
import works from '@/components/works/works'
import Case from '@/components/case/case'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: type,
      // redirect:'/list',
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
     }
  ]
})
