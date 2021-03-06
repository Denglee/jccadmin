import Vue from "vue";
import Vuex, { mapActions, mapGetters } from "vuex";

import StoreTagNav from "@/store/StoreTagNav";
import StoreActiveNav from "@/store/StoreActiveNav";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    StoreTagNav,
    StoreActiveNav
  }
});
