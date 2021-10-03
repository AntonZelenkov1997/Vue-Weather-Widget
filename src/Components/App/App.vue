<template>
  <weather-widget/>
</template>

<script lang="ts">
import Vue from "vue";
import WeatherWidget from "../WeatherWidget/WeatherWidget.vue";
import getLocation from "../../utils/getLocation";
import {mapActions} from "vuex";
import {getFromLocalStorage, localStorageKeyIsEmpty} from "../../utils/localStorageUtils";

export default Vue.extend({
  name: "App",
  components: {WeatherWidget},
  methods: {
    ...mapActions(['SET_NEW_CITY_BY_LAT_AND_LON', 'SET_NEW_CITY'])
  },
  mounted() {
    getLocation((position => {
      if (localStorageKeyIsEmpty('settings')) this.SET_NEW_CITY_BY_LAT_AND_LON(position)
      else {
        const weatherInfo = getFromLocalStorage('settings');
        weatherInfo.forEach((city) => this.SET_NEW_CITY(city.name));
      }
    }));
  }
});
</script>

<style lang="scss">

</style>