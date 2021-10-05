<template>
  <div>
    <img :class="{'bgCard': true, 'bgCard_active': status, 'bgCard_inactive': !status}" :src="getRedForestImage"
         alt="not found"/>
    <img :class="{'bgCard': true, 'bgCard_active': !status, 'bgCard_inactive': status}" :src="getColdMountains"
         alt="not found"/>

    <div :class="{'overlay': true, 'overlay_active': status, 'overlay_inactive': !status}"/>
  </div>

</template>

<script lang="ts">

import Vue from 'vue';

import redForest from '../../assets/images/red_forest.png';
import coldMountains from '../../assets/images/cold_mountains.png'


export default Vue.extend({
  name: "BackgroundCard",
  data() {
    return {
      // State для переключения состояния,
      // когда нужно менять одно изображение на другое
      status: true,

      // State - указатель на функцию setInterval
      setIntervalLink: setInterval.bind(window) as any
    }
  },
  computed: {
    getRedForestImage() {
      return redForest
    },

    getColdMountains() {
      return coldMountains
    },
  },

  mounted() {
    // Каждые 10 секунд переключается изображение
    this.setIntervalLink(() => {
      this.status = !this.status
    }, 10000)
  },

  destroyed() {
    // При размонтировании компонента отписываемся от setInterval
    clearInterval(this.setIntervalLink)
  }
})

</script>

<style scoped lang="scss">
.bgCard {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity 2s linear;

  &_active {
    transition: opacity 2s linear;
    opacity: 1;
  }

  &_inactive {
    opacity: 0;

    transition: opacity 2s linear;
  }
}

.overlay {
  background-color: black;
  opacity: 0.1;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;

  &_active {
    background-color: black;
    transition: background-color 2s linear;
  }

  &_inactive {
    background-color: white;
    transition: background-color 2s linear;
  }
}
</style>