import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Create from '@/components/Create'
import PaintingsOverview from '@/components/PaintingsOverview'
import About from '@/components/About'  
import Contact from '@/components/Contact'
import Wall from '@/components/Wall'

import Login from '@/components/backend/Login'
import Paintings from '@/components/backend/Paintings'
import PaintingDetail from '@/components/backend/PaintingDetail'
import PaintingEdit from '@/components/backend/PaintingEdit'
import PaintingDelete from '@/components/backend/PaintingDelete'

Vue.use(Router)

let routes = [
    { path: '/', component: Home },
    { path: '/nieuw', component: Create },
    { path: '/galerij', component: PaintingsOverview },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/wall', component: Wall },
    { path: '/login', component: Login },
    { path: '/dashboard/paintings', component: Paintings },
    { path: '/dashboard/painting/:id', component: PaintingDetail },
    { path: '/dashboard/painting/:id/edit', component: PaintingEdit },
    { path: '/dashboard/painting/:id/delete', component: PaintingDelete },
];

export default new Router({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } }
});
