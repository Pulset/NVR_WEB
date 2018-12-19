import Vue from 'vue'
import VueRouter from 'vue-router'

import preview from './components/preview.vue'
import playback from './components/playback.vue'
// import intellPlayback from './intellPlayback.vue'
// import alarm from './alarm.vue'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    component: preview
}, {
    path: '/playback',
    component: playback
}, {
    path: '/preview',
    component: preview
}]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router;