import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list/list'
import type from '@/components/type/index'
import works from '@/components/works/works'
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
        path:"/case"
      }]

    },{
      path:'/list',
      component:list
     }
  ]
})
