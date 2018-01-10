import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import PaintingsOverview from '@/components/PaintingsOverview'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nieuw',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/galerij',
      name: 'PaintingsOverview',
      component: PaintingsOverview
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
