<template>
  <div class="contentBlock">

    <div class="contentBlock__headBlock headBlock">
      <h1 class="headBlock__cityTitle">
        {{ getCityName }}, {{ getCountryCode }}
      </h1>
      <h2 class="headBlock__secondaryTitle">{{getDate}}</h2>
    </div>

    <div class="contentBlock__degreeBlock degreeBlock">
      <span class="degreeBlock__degree">{{getCurrentTemperature}}°C</span>
    </div>

    <span class="contentBlock__splitLine">----------</span>

    <div class="contentBlock__cloudyBlock cloudyBlock">
      <span class="cloudyBlock__cloudStatus">{{ getWeatherType }}</span>
      <span class="cloudyBlock__middleTemperature">{{getMinTemperature}}/ {{getMaxTemperature}}°C</span>
    </div>
  </div>
</template>

<script lang="ts">

import Vue, {PropType} from 'vue';

import rv from "../../utils/rv";
import generateDate from "../../utils/generateDate";

export default Vue.extend({
  name: "WeatherCard",
  props: {
    weatherInfo: {
      type: Object as PropType<weatherInfoType>,
      required: true
    }
  },

  computed: {
    getMaxTemperature() {
      return rv(this.weatherInfo.main.temp_max)
    },

    getMinTemperature() {
      return rv(this.weatherInfo.main.temp_min)
    },

    getCurrentTemperature() {
      return rv(this.weatherInfo.main.temp)
    },

    // Typescript просит явно указать тип внутри computed-свойств Vue
    getWeatherType() {
      return (this.weatherInfo as weatherInfoType).weather[0].description
    },

    getCountryCode() {
      return (this.weatherInfo as weatherInfoType).sys.country
    },

    getCityName(): string {
      return (this.weatherInfo as weatherInfoType).name
    },

    getDate() {
      return generateDate()
    }
  },


})
</script>

<style scoped lang="scss">
.contentBlock {
  padding: 52px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: inherit;

  &__headBlock, .headBlock {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__cityTitle {
      @include fw500();
      font-size: 47px;
      line-height: 57px;
      color: $font-color-primary;
    }

    &__secondaryTitle {
      margin-top: 6px;
      font-size: 25px;
      line-height: 30px;
      @include fwNormal();
      color: $font-color-primary;
    }
  }

  &__degreeBlock, .degreeBlock {
    margin-top: 23px;

    &__degree {
      font-size: 75px;
      line-height: 89px;
      font-family: Rubik, sans-serif, Serif;
      font-style: normal;
      font-weight: bold;
      color: $font-color-primary;
    }
  }

  &__splitLine {
    @include fwNormal;
    font-size: 50px;
    line-height: 59px;
    color: $font-color-primary;
  }

  &__cloudyBlock, .cloudyBlock {
    margin-top: 9px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @include fw500;
    font-size: 25px;
    line-height: 30px;
    color: $font-color-secondary;

    &__cloudStatus {

    }

    &__middleTemperature {
      margin-top: 13px;
    }
  }


}
</style>