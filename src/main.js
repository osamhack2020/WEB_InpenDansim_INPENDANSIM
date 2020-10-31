import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Clipboard from "v-clipboard";
import { auth } from "./firebase";

Vue.config.productionTip = false;
Vue.use(Clipboard);
// new ClipboardJS('.btn');
let app;
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }

  if (user) {
    store.dispatch("fetchUserProfile", user);
  }
});
