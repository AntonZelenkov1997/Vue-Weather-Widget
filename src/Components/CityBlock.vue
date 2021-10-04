<template>
  <div
      class="cityBlock"
      draggable="true"

      @dragstart="dragStartHandler"
      @dragover.prevent
      @drop.prevent="dropHandler"

  >
    <div class="cityBlockLeftSide">
      <div class="hamburgerWrapper">
        <svg class="hamburgerIcon" xmlns="http://www.w3.org/2000/svg" x="0px"
             y="0px" viewBox="0 0 124 124">
          <g>
            <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"/>
            <path
                d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"/>
            <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"/>
          </g>
        </svg>
      </div>

      <div class="cityTitleBlock">
        <span class="cityTitle">{{ getCityName }}</span>
      </div>
    </div>

    <div class="cityBlockRightSide">
      <div class="trashWrapper" @click="deleteCityBlock">
        <svg class="trashIcon" xmlns="http://www.w3.org/2000/svg" id="Layer_1"
             x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <path class="st0"
                  d="M68.3,34.1c-18.8,0-34.1,15.3-34.1,34.1v34.1c0,18.8,15.3,34.1,34.1,34.1h17.1v307.2   c0,37.7,30.6,68.3,68.3,68.3h204.8c37.7,0,68.3-30.6,68.3-68.3V136.5h17.1c18.8,0,34.1-15.3,34.1-34.1V68.3   c0-18.8-15.3-34.1-34.1-34.1H324.3C324.3,15.3,309,0,290.1,0h-68.3c-18.8,0-34.1,15.3-34.1,34.1H68.3z M170.7,170.7   c9.4,0,17.1,7.6,17.1,17.1v238.9c0,9.4-7.6,17.1-17.1,17.1c-9.4,0-17.1-7.6-17.1-17.1V187.7C153.6,178.3,161.2,170.7,170.7,170.7z    M256,170.7c9.4,0,17.1,7.6,17.1,17.1v238.9c0,9.4-7.6,17.1-17.1,17.1c-9.4,0-17.1-7.6-17.1-17.1V187.7   C238.9,178.3,246.6,170.7,256,170.7z M358.4,187.7c0-9.4-7.6-17.1-17.1-17.1c-9.4,0-17.1,7.6-17.1,17.1v238.9   c0,9.4,7.6,17.1,17.1,17.1c9.4,0,17.1-7.6,17.1-17.1V187.7z"/>
          </g>
        </svg>
      </div>
    </div>

  </div>
</template>

<script lang="ts">

import {mapActions} from "vuex";

export default Vue.extend({
  name: "CityBlock",
  props: {
    weatherInfo: {
      type: Object as weatherInfoType,
      required: true
    },
  },


  methods: {
    ...mapActions([
      'DELETE_CITY_SETTINGS',
      'SET_CURRENT_CITY_BLOCK_DRAG',
      'SET_CHANGE_ORDER'
    ]),

    deleteCityBlock() {

      this.DELETE_CITY_SETTINGS(this.weatherInfo.id)
    },


    dragStartHandler(e) {
      this.SET_CURRENT_CITY_BLOCK_DRAG(this.weatherInfo)
    },

    dropHandler(e) {
      this.SET_CHANGE_ORDER(this.weatherInfo)
    },

  },

  computed: {
    getCityName(): string {
      return this.weatherInfo.name
    }
  }
})
</script>

<style scoped lang="scss">
.cityBlock {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: rgba(255, 255, 255, .8);
  border-radius: 10px;

  .cityBlockLeftSide {
    display: flex;
    flex-direction: row;
    align-items: center;

    .hamburgerWrapper {
      width: 24px;
      height: 24px;
      cursor: pointer;

      .hamburgerIcon {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .cityTitleBlock {
      margin-left: 16px;

      .cityTitle {
        @include fwNormal;
        font-size: 18px;
        line-height: 21px;
        color: $font-color-primary;
      }
    }
  }

  .cityBlockRightSide {
    .trashWrapper {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }

    .trashIcon {
      width: 100%;
      height: 100%;
      object-fit: contain;

      .st0 {
        fill-rule: evenodd;
        clip-rule: evenodd;
      }
    }
  }
}
</style>