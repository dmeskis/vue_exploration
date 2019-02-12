import Vue from 'vue'
import Router from 'vue-router'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Directives from '@/components/Directives'

// @ is an alias of src
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: Skills
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/directives',
      name: 'directives',
      component: Directives
    }
  ]
})
