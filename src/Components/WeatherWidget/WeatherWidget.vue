<template>
  <article class="containerWeatherWidget">
    <div class="containerWeatherWidget__settingGear settingGear" @click="toggleStatus">
      <img src="../../assets/images/icons/setting_gear.png" class="settingGear__icon" alt=""/>
    </div>
    <div class="containerWeatherWidget__bgCardContainer bgCardContainer">
      <background-card/>
    </div>

    <empty-widget v-if="isEmptyWidget"/>

    <weather-card v-if="isWeatherCard" v-for="weatherInfo in GET_CITIES" :weatherInfo="weatherInfo"
                  :key="weatherInfo.id"/>

    <settings-component v-if="isSettingsVisible"/>
  </article>
</template>

<script lang="ts">

import Vue from 'vue';

import {mapActions, mapGetters} from "vuex";
import WeatherCard from "../WeatherCard/WeatherCard.vue";
import EmptyWidget from "../EmptyWidget/EmptyWidget.vue";
import SettingsComponent from "../SettingsComponent/SettingsComponent.vue";
import BackgroundCard from "../BackgroundCard/BackgroundCard.vue";
import getLocation from "../../utils/getLocation";
import {getFromLocalStorage, localStorageKeyIsEmpty} from "../../utils/localStorageUtils";


export default Vue.extend({
  name: "WeatherWidget",
  components: {SettingsComponent, WeatherCard, EmptyWidget, BackgroundCard},
  computed: {
    ...mapGetters([
      'GET_CITIES_IS_EMPTY',
      'GET_CITIES'
    ]),


    isEmptyWidget(): boolean {
      return this.GET_CITIES_IS_EMPTY && !this.isSettingsVisible
    },

    isWeatherCard(): boolean {
      return !this.GET_CITIES_IS_EMPTY && !this.isSettingsVisible
    },
  },

  data() {
    return {
      isSettingsVisible: false
    }
  },

  methods: {
    ...mapActions(['SET_NEW_CITY_BY_LAT_AND_LON', 'SET_NEW_CITY']),


    toggleStatus(): void {
      this.isSettingsVisible = !this.isSettingsVisible
    }
  },

  mounted() {
    // Функция, в которой происходит проверка существующих настроек в localStorage.
    // Если в localStorage нет никаких данных по ключу settings - мы рассчитываем погоду согласно местоположению пользователя
    // Если настройки есть - получаем список городов, сохранённых в localStorage и узнаём актуальные данные о погоде в этих городах
    getLocation((position => {
      if (localStorageKeyIsEmpty('settings')) this.SET_NEW_CITY_BY_LAT_AND_LON(position)
      else {
        const weatherInfo = getFromLocalStorage('settings');
        weatherInfo.forEach((city) => this.SET_NEW_CITY(city.name));
      }
    }));
  }
})

</script>

<style scoped lang="scss">

.containerWeatherWidget {
  position: relative;
  max-width: 432px;

  border-radius: 20px;
  overflow: hidden;

  &__bgCardContainer, .bgCardContainer {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__settingGear, .settingGear {
    z-index: 2;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    width: 20px;
    height: 20px;

    &__icon {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>