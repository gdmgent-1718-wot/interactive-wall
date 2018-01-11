import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Create from '@/components/Create'
import PaintingsOverview from '@/components/PaintingsOverview'
import About from '@/components/About'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
    {
      path: '/nieuw',
      name: 'Create',
      component: Create,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
    {
      path: '/galerij',
      name: 'PaintingsOverview',
      component: PaintingsOverview,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    }
  ]
})
