import Vue from 'vue'
import VueRouter from 'vue-router'

import preview from './components/preview.vue'
import playback from './components/playback.vue'
import setting from './components/setting.vue'
import alarm from './components/alarm.vue'
import device from './components/setting/image/device.vue'
import camera from './components/setting/image/camera.vue'
import encode from './components/setting/image/encode.vue'
import channelName from './components/setting/image/channelName.vue'
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
    }, {
        path: '/alarm',
        component: alarm
    }, {
        path: '/setting',
        component: setting,
        children: [{
            path: 'image/device',
            component: device
        }, {
            path: 'image/camera',
            component: camera
        }, {
            path: 'image/encode',
            component: encode
        }, {
            path: 'image/channelName',
            component: channelName
        }]
    }]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router;