<template>
  <div class="containerSettings">
    <div class="cityBlocksWrapper">
      <city-block
          v-for="weatherInfo in GET_CITIES"
          :weatherInfo="weatherInfo"
          :key="weatherInfo.id"
      />
    </div>

    <div class="inputWrapper">
      <input class="inputText" type="text" placeholder="Add Location" ref="input" @keypress.enter="onKeyEnter"/>
      <button class="buttonSend" title="Отправить" @click="setWeatherByCity">

        <svg class="sendIcon" viewBox="0 0 24 24" aria-hidden="true">
          <path
              d="m3.4 20.4 17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"></path>
        </svg>

      </button>
    </div>

  </div>
</template>

<script lang="ts">

import {mapActions, mapGetters} from "vuex";
import Vue from "vue";

import CityBlock from "../CityBlock/CityBlock.vue";


export default Vue.extend({
  name: "SettingsComponent",
  components: {CityBlock},

  methods: {
    ...mapActions([
      'SET_NEW_CITY'
    ]),

    // Асинхронная функция, вызывающаяся при клике на кнопку
    async setWeatherByCity() {

      // Передаём в action значение input-поля
      await this.SET_NEW_CITY((this.$refs.input as HTMLInputElement)?.value)

      // Очищаем форму
      this.clearInput()
    },

    // Асинхронная функция, вызывающаяся при нажатии на кнопку Enter
    async onKeyEnter(e: KeyboardEvent) {

      // Передаём в action значение input-поля
      await this.SET_NEW_CITY((e.target as HTMLInputElement).value);

      // Очищаем форму
      this.clearInput()

    },

    // Функция, выпоняющая очистку input поля
    clearInput() {
      if ("input" in this.$refs) {
        (this.$refs.input as HTMLInputElement).value = ''
      }
    }
  },

  computed: {
    ...mapGetters([
      'GET_CITIES'
    ])
  },
})
</script>

<style scoped lang="scss">

.sendIcon {
  fill: white;
  width: 50%;
  height: 50%;
}

.buttonSend {
  cursor: pointer;
  background-color: dodgerblue;
  outline: none;
  border: none;
  border-radius: 0 10px 10px 0;
  width: 51px;
  display: flex;
  align-items: center;
  justify-content: center;

  @include hover {
    background-color: darken(dodgerblue, 15);
  }
}

.inputText {
  background-color: rgba(255, 255, 255, .8);
  outline: none;
  border: none;
  border-radius: 10px 0 0 10px;
  padding: 15px;

  @include fwNormal;
  font-size: 18px;
  line-height: 21px;
  color: $font-color-primary;
}

.inputWrapper {
  display: flex;
  margin-top: 50px;
}

.containerSettings {
  padding: 52px 28px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
  align-items: center;
}

.cityBlocksWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
}


</style>