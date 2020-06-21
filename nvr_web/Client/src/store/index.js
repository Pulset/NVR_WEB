import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  isLogin: true
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

// (function(window, undefined) {
//   var jQuery = (function() {
//     // 构建jQuery对象
//     var jQuery = function(selector, context) {
//       return new jQuery.fn.init(selector, context, rootjQuery);
//     };

//     // jQuery对象原型
//     jQuery.fn = jQuery.prototype = {
//       constructor: jQuery,
//       init: function(selector, context, rootjQuery) {
//         // something to do
//       }
//     };

//     // Give the init function the jQuery prototype for later instantiation
//     jQuery.fn.init.prototype = jQuery.fn;

//     // 合并内容到第一个参数中，后续大部分功能都通过该函数扩展
//     // 通过jQuery.fn.extend扩展的函数，大部分都会调用通过jQuery.extend扩展的同名函数
//     jQuery.extend = jQuery.fn.extend = function() {};

//     // 在jQuery上扩展静态方法
//     jQuery.extend({
//       // something to do
//     });

//     // 到这里，jQuery对象构造完成，后边的代码都是对jQuery或jQuery对象的扩展
//     return jQuery;
//   })();

//   window.jQuery = window.$ = jQuery;
// })(window);
