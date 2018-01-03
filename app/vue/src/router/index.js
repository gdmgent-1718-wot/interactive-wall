import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PaintingsOverview from '@/components/PaintingsOverview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/paintings',
      name: 'PaintingsOverview',
      component: PaintingsOverview
    }
  ]
})
