import Vue from 'vue'
import App from "./Components/App/App.vue";
import store from "./store";


new Vue({
  components: { App },
  render: (h) => h(App),
  store: store
}).$mount('#root');
