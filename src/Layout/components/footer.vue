<template>
  <footer>
    <ul>
      <li>
        <h3>联系我</h3>
        <p>邮箱:1208851253@qq.com</p>
          <p>Q Q :1208851253</p>
        
      </li>
      <li>
        <h3>打赏</h3>
        <img src="../../assets/zfb.png" alt="" />
      </li>
      <li>
        <h3>QQ交流群</h3>
        <img src="../../assets/qq.png" alt="" />
      </li>
    </ul>
    <hr />
    <div class="beian">
      <img src="../../../public/beianIcon.png" alt="" />
      <span>豫备网@123456789</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Appfooter",
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #1b1c1d;
  color: rgba(255, 255, 255, 0.9);
  padding: 0.3rem 0.2rem 0;
}
ul {
  width: calc(100vw - 0.4rem);
  height: 1.5rem;
  margin-bottom: 0.2rem;
  li {
    width: calc((100vw - 0.4rem) / 3);
    height: 100%;
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    &:not(:last-child) {
      border-right: 0.01rem solid rgba(255, 255, 255, 0.9);
    }
    // &:not(:last-child)::after{
    //   content: '';
    //   clear: both;
    //   display: inline-block;
    //   margin-left: 0.3rem;
    //   width: 0.01rem;
    //   height: 0.6rem;
    //   border-right: 1px solid rgba(255, 255, 255, 0.9);
    // }
    h3,p {
      text-align: center;
       margin:0.1rem 0;
    }
    img{
      width: 1rem;
      height: 1rem;
      display: block;
      margin:0.1rem auto;
    }
  }
}
.beian {
  width: calc(100vw - 0.4rem);
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  vertical-align: middle;
  img {
    display: inline-block;
    width: 0.14rem;
    height: 0.14rem;
  }
}
</style>