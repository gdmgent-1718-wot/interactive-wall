import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Create from '@/components/Create'
import PaintingsOverview from '@/components/PaintingsOverview'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Wall from '@/components/Wall'

Vue.use(Router)

let routes = [
    { path: '/', component: Home },
    { path: '/nieuw', component: Create },
    { path: '/galerij', component: PaintingsOverview },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/wall', component: Wall },
];

export default new Router({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } }
});
