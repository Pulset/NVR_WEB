import Vue from 'vue'
import VueRouter from 'vue-router'

import preview from './components/preview.vue'
import playback from './components/playback.vue'
import setting from './components/setting.vue'
import alarm from './components/alarm.vue'
import info from './components/info.vue'
import device from './components/setting/image/device.vue'
import camera from './components/setting/image/camera.vue'
import encode from './components/setting/image/encode.vue'
import channelName from './components/setting/image/channelName.vue'
import tcpIp from './components/setting/network/tcpIp.vue'
import port from './components/setting/network/port.vue'
import pppoe from './components/setting/network/pppoe.vue'
import ddns from './components/setting/network/ddns.vue'
import baseInfo from './components/info/baseInfo.vue'
import hdd from './components/info/hdd.vue'
import log from './components/info/log.vue'
import onlineAccount from './components/info/onlineAccount.vue'
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
        }, {
            path: 'network/tcpIp',
            component: tcpIp
        }, {
            path: 'network/port',
            component: port
        }, {
            path: 'network/pppoe',
            component: pppoe
        }, {
            path: 'network/ddns',
            component: ddns
        }]
    }, {
        path: '/info',
        component: info,
        children:[{
            path: 'baseInfo',
            component: baseInfo
        },{
            path: 'hdd',
            component: hdd
        },{
            path: 'log',
            component: log
        },{
            path: 'onlineAccount',
            component: onlineAccount
        }]
    }]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
export default router;