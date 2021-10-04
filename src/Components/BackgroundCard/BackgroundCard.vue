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

import redForest from '../../assets/images/red_forest.png';
import coldMountains from '../../assets/images/cold_mountains.png'
import Vue from 'vue';

export default Vue.extend({
  name: "BackgroundCard",
  data() {
    return {
      status: true,
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
    this.setIntervalLink(() => {
      this.status = !this.status
    }, 10000)
  },

  destroyed() {
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