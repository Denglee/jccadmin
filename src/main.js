import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

import Axios from "axios";
/*引用axios*/
Vue.prototype.$axios = Axios;

/*第一层if判断生产环境和开发环境*/
if (process.env.NODE_ENV === "production") {
  /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
  if (process.env.VUE_APP_FLAG === "pro") {
    //production 生产环境发布 地址
    Axios.defaults.baseURL = "http://8.129.189.135:8090/cc"; //路径
  } else {
    //test 测试环境 测试地址 http://vikily.f3322.net:20000
    Axios.defaults.baseURL = "http://8.129.189.135:8090/cc"; //路径
    // config.optimization.minimize(false)
  }
} else {
  // dev 开发环境 本地 /api
  Axios.defaults.baseURL = "/api";
  // Axios.defaults.baseURL = 'http://vikily.f3322.net:10007';
}

/*引入自己的全局的css*/
import "@/assets/css/global.scss";
import "@/assets/css/home.scss";

/*引用全局js*/
import GLOBAL from "@/assets/js/global.js";
Vue.prototype.GLOBAL = GLOBAL;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, {
  size: "small"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
