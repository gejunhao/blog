<template>
  <div id="app-main">
    <Appheader></Appheader>
    <div id="app-body">
      <Appmain></Appmain>
      <Appfooter></Appfooter>
    </div>

  </div>
</template>

<script>
import Appheader from './components/header.vue'
import Appfooter from './components/footer.vue'
import Appmain from './components/Appmain/index.vue'
export default {
  name: 'Layout',
  components: {
    Appheader,
    Appfooter,
    Appmain
  }
}
</script>

<style lang='scss' scoped>
.app-mian {
  max-width: 1400px;
  min-width: 600px;
  height: auto;
  min-height: 100vh;
  background-color: red;
}
</style>