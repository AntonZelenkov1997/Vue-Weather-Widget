<template>
  <div class="emptyWidgetContainer">
    <h1 class="emptyWidgetTitle">
      Setup your Weather!
    </h1>
  </div>
</template>

<script lang="ts">
export default {
  name: "EmptyWidget",

}
</script>

<style scoped lang="scss">
.emptyWidgetContainer {
  position: relative;
  padding: 52px 28px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
}

.emptyWidgetTitle {
  @include fw500;
  font-size: 27px;
  color: $font-color-secondary;
}
</style>