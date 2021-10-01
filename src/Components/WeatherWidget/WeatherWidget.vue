<template>
  <article class="containerWeatherWidget">
    <div class="containerWeatherWidget__bgCardContainer bgCardContainer">
      <img class="bgCardContainer__bgCard" :src="getRedForestImage" alt="not found"/>
    </div>
    <div class="containerWeatherWidget__contentBlock contentBlock">
      <div class="contentBlock__headBlock headBlock">
        <h1 class="headBlock__cityTitle">
          Vancouver, CA
        </h1>
        <h2 class="headBlock__secondaryTitle">Monday, April 26, 2021 </h2>
      </div>

    </div>
  </article>
</template>

<script lang="ts">

import redForest from '../../assets/images/red_forest.png';

export default {
  name: "WeatherWidget",
  computed: {
    getRedForestImage() {
      return redForest
    }
  }
}
</script>

<style scoped lang="scss">

.containerWeatherWidget {
  position: relative;
  width: 432px;
  height: 768px;
  border-radius: 20px;
  overflow: hidden;

  &__bgCardContainer, .bgCardContainer {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &__bgCard {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &__contentBlock, .contentBlock {
    padding: 163px 28px 52px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__headBlock, .headBlock {
      display: flex;
      flex-direction: column;
      align-items: center;

      &__cityTitle {
        @include fw500();
        font-size: 50px;
        line-height: 59px;
      }

      &__secondaryTitle {
        font-size: 25px;
        line-height: 30px;
        @include fwNormal();
      }
    }


  }
}
</style>