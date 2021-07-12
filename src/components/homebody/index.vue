<template>
  <div class="home-body">
    <img
      src="../../assets/homebanner.jpg"
      alt=""
    >
    <h1>一起学前端</h1>
    <ul>
      <li>
        <a href="">
          <i class="iconfont icon-github"></i>
        </a>
      </li>
      <li><a href=""><i class="iconfont icon-gitee-fill-round"></i></a></li>
      <li><a href=""><i class="iconfont icon-csdn1-copy"></i></a></li>
      <li><a href=""><i class="iconfont icon-avatar"></i></a></li>
      <li><a href=""><i class="iconfont icon-email"></i></a></li>
      <li><a href=""><i class="iconfont icon-weixin2"></i></a></li>
      <li><a href=""><i class="iconfont icon-QQ"></i></a></li>
    </ul>
    <div class="signing">love and share , 分享热爱~</div>
    <hr>
    <h5>“孤独是从人群中偷来的享受”</h5>
    <h5>“她优美”</h5>
    <h5>“生趣”</h5>
    <h5>“是精神的自由~”</h5>
    <div class="home-body-router">
      <ul>
        <li>
          <router-link :to="{path:'/home'}"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
        </li>
        <li>
          <router-link :to="{path:'/home'}"><i class="iconfont icon-time"></i><span>时间轴</span></router-link>
        </li>
        <li>
          <router-link :to="{path:'/home'}"><i class="iconfont icon-guanyu"></i><span>关于我</span></router-link>
        </li>
        <li>
          <router-link :to="{path:'/home'}"><i class="iconfont icon-link"></i><span>友链</span></router-link>
        </li>
        <li>
          <router-link :to="{path:'/home'}"><i class="iconfont icon-wenjianjia"></i><span>资源库</span></router-link>
        </li>
        <li>
          <router-link :to="{path:'/home'}"><i class="iconfont icon-liuyanpinglun"></i><span>留言板</span></router-link>
        </li>
        <li>
          <router-link :to="{path:'/home'}"><i class="iconfont icon-zhaopian"></i><span>照片墙</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homebody',
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.home-body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 4;
  color: #fff;
  img {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    margin: 1.5rem auto 0.3rem;
  }
  h1 {
    text-align: center;
  }
  ul {
    width: 3.5rem;
    margin: 0.1rem auto 0.1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      display: inline-block;
      width: 0.36rem;
      height: 0.36rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        background-color: #e0e1e2;
        opacity: 0.7;
        font-size: 0.16rem;
      }
    }
  }
  .signing {
    color: #fff;
    font: 14px/1.5 Tahoma, Helvetica, Arial, '宋体', sans-seri;
    line-height: 0.5rem;
    font-size: 0.26rem;
    text-align: center;
  }
  hr {
    width: 40%;
    margin: 0 auto;
  }
  h5 {
    box-sizing: content-box;
    text-align: center;
    font-size: 0.24rem;
    font-family: 'STXingkai';
    line-height: 1.3;
    margin: 0.24rem 0 0rem;
  }
  & > hr + h5 {
    margin-top: 0.48rem;
  }
  .home-body-router {
    margin: 0.48rem 0 0.24rem;
    ul {
      width: 8rem;
      li {
        width: 1rem;
        height: 0.36rem;
        a {
          border-radius: 0.18rem;
          overflow: hidden;
          font-size: 0.12rem;
          span {
            margin-left: 0.05rem;
          }
        }
      }
      li:nth-child(1) > a > i {
        margin-top: -0.05rem;
      }
    }
  }
}
</style>