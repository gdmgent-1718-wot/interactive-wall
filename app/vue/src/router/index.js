import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'
import PaintingsOverview from '@/components/PaintingsOverview'
import About from '@/components/About'  
import Contact from '@/components/Contact'

import Login from '@/components/backend/Login'
import Paintings from '@/components/backend/Paintings'
import PaintingDetail from '@/components/backend/PaintingDetail'
import PaintingEdit from '@/components/backend/PaintingEdit'
import PaintingDelete from '@/components/backend/PaintingDelete'

Vue.use(Router)

export default new Router({
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
      name: 'HelloWorld',
      component: HelloWorld,
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
    },
    {
      path: '/dashboard/login',
      name: 'Login',
      component: Login,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
    {
      path: '/dashboard/paintings',
      name: 'Paintings',
      component: Paintings,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
    {
      path: '/dashboard/painting/:id',
      name: 'PaintingDetail',
      component: PaintingDetail,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
    {
      path: '/dashboard/painting/:id/edit',
      name: 'PaintingEdit',
      component: PaintingEdit,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
    {
      path: '/dashboard/painting/:id/delete',
      name: 'PaintingDelete',
      component: PaintingDelete,
      beforeEnter: (to, from, next) => {
        window.scrollTo(0, 0)
        next();
      }
    },
  ]
})
