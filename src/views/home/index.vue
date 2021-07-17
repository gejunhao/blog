<template>
  <div class="container">
    <div class="home-theme clearfix">
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
}

.home-theme {
  width: 100%;
  background: url('../../assets/homebanner.jpg') no-repeat center center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    clear: both;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.6);
  }
}
.clearfix::before {
  content: '';
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
  overflow: hidden;
}
</style>