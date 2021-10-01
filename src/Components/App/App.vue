<template>
  <weather-widget />
</template>

<script lang="ts">
import Vue from "vue";
import WeatherWidget from "../WeatherWidget/WeatherWidget.vue";

export default Vue.extend({
  name: "App",
  components: {WeatherWidget},
  data() {
    return {
      msg: "Heo",
    };
  },
});
</script>

<style lang="scss">

</style>