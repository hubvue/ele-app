<template>
  <div id="app">
      <router-view :key="key"></router-view>
      <footer class="footer">
      <div class="footer__nav">
          <router-link to="/" exact-active-class="footer_active">
            <img src alt />
            <span>首页</span>
          </router-link>
          <router-link to="/discover" exact-active-class="footer_active">
            <img src alt />
            <span>发现</span>
          </router-link>
          <router-link to="/order" exact-active-class="footer_active">
            <img src alt />
            <span>订单</span>
          </router-link>
          <router-link to="/profile" exact-active-class="footer_active">
            <img src alt />
            <span>我的</span>
          </router-link>
      </div>
    </footer>
  </div>
</template>

<script >
import "./assets/styles/reset.css";
import "./assets/styles/icon.css";
export default {
  name: "app",
  computed: {
    key(){
      //避免路由定位到同一个页面切换不触发vue的created和mounted钩子函数。
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date();
    }
  }
};
</script>

<style>
/* footer */
.footer{
  height:40px;
}
.footer__nav {
  position: fixed;
  bottom: -1px;
  width:100%;
  display:flex;
  justify-content:space-around;
  height:40px;
  background-color:#fff;
  align-items:center;
  box-shadow: -1px 0px 3px 0 rgba(0,0,0,.5);
  
 /* border-top:1px solid #ccc; */
}
.footer__nav a {
  color:#999;
}
a.footer_active {
  color:#0089dc;
}
</style>
