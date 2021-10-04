import Vue from 'vue'

import store from "./store";
import WeatherWidget from "./Components/WeatherWidget/WeatherWidget.vue";

new Vue({
  components: { WeatherWidget },
  render: (h) => h(WeatherWidget),
  store: store
}).$mount('#root')