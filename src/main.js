import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入调用接口的包
import axios from "axios";
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8088';
Vue.prototype.$http = axios;
// 导入全局样式表
import "./assets/css/global.css";
// 导入字体图标iconfont
import "./assets/font/iconfont.css";
import "./plugins/element.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
