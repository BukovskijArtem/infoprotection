import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: main
    },
    {
      path: '/about',
      name: 'About',
      component: about
    }
  ]
})
