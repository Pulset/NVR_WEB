import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isLogin: false
};

export default new Vuex.Store({
  state,
  mutations: {
    login(state) {
      state.isLogin = true;
    },
    loginOut(state) {
      state.isLogin = false;
    }
  }
});
