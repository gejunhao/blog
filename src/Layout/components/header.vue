<template>
  <header>
    <div class="logo">
      <img
        src="../../../public/logo.png"
        alt=""
      />
      <span>一起学前端</span>
    </div>
    <div class="user_avatar">
      <div
        class="logind"
        v-if="userInfo.username"
      >
        <Dropdown
          style="margin-left: 0.2rem"
          placement="bottom-end"
          trigger="click"
        >
          <Avatar :style="{ background: color }"><span style="cursor: pointer;">{{ userInfo.username }}</span></Avatar>
          <DropdownMenu slot="list">
            <DropdownItem>我的主页</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>设置</DropdownItem>
            <DropdownItem>退出登录</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div
        class="no-login"
        v-else
      >
        <Button
          style="marginRight: 0.05rem"
          @click="tologin"
        >登录</Button>
        <Button @click="toregister">注册</Button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Appheader',
  data() {
    return {
      bgcolor: ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'],
      token: false
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    color() {
      const col = this.bgcolor[this.random(4)]
      return col
    }
  },
  watch: {
    $router(now) {
      if (now.path === '/home/index') {
        this.token = true
      }
    }
  },
  mounted() {
    document.querySelector('#app-main>header').style.top = 0
    window.addEventListener('scroll', this.autofix)
  },
  destroyed() {
    window.removeEventListener('scroll', this.autofix)
  },
  methods: {
    autofix() {
      const scrollTop = document.documentElement.scrollTop
      const tag = document.querySelector('#app-main>header')
      if (scrollTop >= 50) {
        tag.style.top = -0.6 + 'rem'
      } else {
        tag.style.top = 0
      }
    },
    resetFixed() {
      const tag = document.querySelector('#app-main>header')
      tag.style.top = -0.6 + 'rem'
    },
    //随机背景色 range 范围 type Number
    random(range) {
      const index = Math.floor(Math.random() * range)
      return index
    },
    tologin() {
      this.$router.push({ path: '/login', query: { type: 'login' } })
    },
    toregister() {
      this.$router.push({ path: '/login', query: { type: 'register' } })
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