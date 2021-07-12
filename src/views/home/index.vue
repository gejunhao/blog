<template>
  <div class="container">
    <div class="home-theme">
      <Homebody></Homebody>
    </div>
  </div>
</template>

<script>
import Homebody from '@/components/homebody'
export default {
  name: 'homeIndex',
  components: {
    Homebody
  }
}
</script>

<style scoped lang="scss">
.container {
  min-width: 3rem;
  // max-width: 12rem;
  margin: 0 auto;
  height: 100vh;
  // background-color: aqua;
}

.home-theme {
  position: relative;
  width: 100%;
  height: 100vh;
  z-index: 3;

  &::after {
    content: '';
    display: block;
    clear: both;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background: url('../../assets/homebanner.jpg') no-repeat center center;
  }
  &::before {
    content: '';
    display: block;
    clear: both;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }
}
</style>