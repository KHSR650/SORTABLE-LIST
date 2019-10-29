import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import store from "@/store";
import router from "@/router";
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(Element)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
