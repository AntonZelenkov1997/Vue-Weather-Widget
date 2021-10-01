import Vue from 'vue'
import App from "./Components/App/App.vue";

import './styles/index.scss'

new Vue({
  components: { App },
  render: (h) => h(App)
}).$mount('#root');
