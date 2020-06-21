import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router.js";
import ajax from "./ajax.js";
import store from "./store/index.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.ajax = ajax;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
