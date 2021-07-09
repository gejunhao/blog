<template>
  <header>
    <div class="logo">
      <img
        src="../../../public/logo.png"
        alt=""
      >
      <span>一起学前端</span>
    </div>
    <div class="user_author">
      <div class="no-logind">
        <button>登录</button>
        <button>注册</button>
      </div>
      <div class="logind">

      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Appheader',
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', this.autofix)
  },
  destroyed() {
    window.removeEventListener('scroll', this.resetFixed)
  },
  methods: {
    autofix() {
      const scrollTop = document.documentElement.scrollTop
      const tag = document.querySelector('#app-main>header')
      if (scrollTop >= 50) {
        tag.style.top = 0
      } else {
        tag.style.top = -0.6 + 'rem'
      }
    },
    resetFixed() {
      const tag = document.querySelector('#app-main>header')
      tag.style.top = -0.6 + 'rem'
    }
  }
}
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  display: inline-block;

  img {
    display: inline-block;
    width: 0.6rem;
    height: 0.6rem;
  }
  span {
    display: inline-block;
    height: 0.6rem;
    vertical-align: top;
    line-height: 0.6rem;
  }
}
</style>