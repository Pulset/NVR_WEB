import Vue from "vue";
import VueRouter from "vue-router";

// import login from "./components/login.vue";
import preview from "./components/menu/preview.vue";
import playback from "./components/menu/playback.vue";
import setting from "./components/menu/setting.vue";
import alarm from "./components/menu/alarm.vue";
import info from "./components/menu/info.vue";
import device from "./components/setting/image/device.vue";
import camera from "./components/setting/image/camera.vue";
import encode from "./components/setting/image/encode.vue";
import channelName from "./components/setting/image/channelName.vue";
import tcpIp from "./components/setting/network/tcpIp.vue";
import port from "./components/setting/network/port.vue";
import pppoe from "./components/setting/network/pppoe.vue";
import ddns from "./components/setting/network/ddns.vue";
import baseInfo from "./components/info/baseInfo.vue";
import hdd from "./components/info/hdd.vue";
import log from "./components/info/log.vue";
import onlineAccount from "./components/info/onlineAccount.vue";
import loginOut from "./components/loginOut/loginOut.vue";
// import intellPlayback from './intellPlayback.vue'
// import alarm from './alarm.vue'

Vue.use(VueRouter);
const routes = [
  // {
  //   // 会匹配所有路径
  //   path: "*",
  //   component: login
  // },
  // {
  //   path: "/",
  //   component: login
  // },
  {
    path: "/playback",
    component: playback
  },
  {
    path: "/preview",
    component: preview
  },
  {
    path: "/alarm",
    component: alarm
  },
  {
    path: "/setting",
    component: setting,
    children: [
      {
        path: "image/device",
        component: device
      },
      {
        path: "image/camera",
        component: camera
      },
      {
        path: "image/encode",
        component: encode
      },
      {
        path: "image/channelName",
        component: channelName
      },
      {
        path: "network/tcpIp",
        component: tcpIp
      },
      {
        path: "network/port",
        component: port
      },
      {
        path: "network/pppoe",
        component: pppoe
      },
      {
        path: "network/ddns",
        component: ddns
      }
    ]
  },
  {
    path: "/info",
    component: info,
    children: [
      {
        path: "baseInfo",
        component: baseInfo
      },
      {
        path: "hdd",
        component: hdd
      },
      {
        path: "log",
        component: log
      },
      {
        path: "onlineAccount",
        component: onlineAccount
      }
    ]
  },
  {
    path: "/loginOut",
    component: loginOut
  }
];

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  if (to.path === "/info/baseInfo") {
    next();
  } else {
    next();
  }
});
export default router;
