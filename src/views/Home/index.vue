<template>
  <div class="container">
    <!-- header -->
    <header class="header">
      <div class="location">
        <span class="icon__left">
          <span class="pin-solid icon"></span>
        </span>
        <router-link to="/location" class="location__message">{{locationMessage}}</router-link>
        <span class="icon__right"></span>
      </div>
    </header>
    <div class="search__container">
      <div class="search">
        <router-link to="/search">
          <span class="search__icon">
            <span class="search icon"></span>
          </span>
          <span>搜索饿了么商家、商品</span>
        </router-link>
      </div>
    </div>

    <!-- main -->
    <main class="main">
      <nav class="nav">
        <ListImages />
      </nav>
      <div class="lego">
        <Lego :theme="theme" />
      </div>
      <div class="recommend">
        <p class="recommend__title">推荐商家</p>
        <div class="home__filter">
          <aside class="filter" @click="filterHandle">
            <span class="filter_active">综合排序</span>
            <span>距离最近</span>
            <span>品质联盟</span>
            <span>筛选</span>
          </aside>
        </div>
        <section class="shop__list">
          <ListView :lists="recommendList" />
        </section>
      </div>
    </main>
    <!-- footer -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ListImages from "../../components/ImageLists";
import Lego from "../../components/Lego";
import ListView from "../../components/ListView";
export default {
  components: {
    ListImages,
    Lego,
    ListView
  },
  data() {
    return {
      location: ""
    };
  },
  computed: {
    locationMessage() {
      return this.location === "" ? "未选择" : this.location;
    },
    ...mapGetters({
      theme: "getLego",
      recommendList: "getBusinessList"
    })
  },
  methods: {
    filterHandle(e) {
      if (e.target.nodeName === "SPAN") {
        const text = e.target.innerHTML,
          target = e.target,
          current = e.path[1];
        for (let child of current.children) {
          child.classList.remove("filter_active");
        }
        target.classList.add("filter_active");
      }
    }
  }
};
</script>
<style >
/* header */
.header {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  padding: 20px 20px 10px 20px;
}
/* 定位左icon */
.icon__left {
  position: relative;
  margin-right: 26px;
}
/* 定位右icon */
.icon__right {
  width: 0px;
  height: 0px;
  border: 5px solid transparent;
  border-top-color: #fff;
  position: relative;
  top: 13px;
  margin-left: 8px;
}
/* 定位 */
.location__message {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
}
/* 搜索 */
.search__container {
  background-image: linear-gradient(90deg, rgb(0, 170, 255), #0085ff);
  position: sticky;
  top: 0px;
  z-index: 99px;
  padding: 10px 20px;
  margin-top: -1px;
}
.search {
  height: 34px;
  background-color: #fff;
  text-align: center;
  line-height: 34px;
}
/* 搜索内显示的文字及icon */
.search span {
  color: #aaa;
  font-size: 14px;
}
.search__icon {
  position: relative;
  left: -24px;
  top: 8px;
}
.search .search__icon > span {
  color: #aaa;
}
/* main 弹性导航 */
.nav {
  padding: 5px;
}
.lego {
  padding: 15px;
}
/* 推荐 */
.recommend__title {
  text-align: center;
  height: 35px;
  font-size: 15px;
  position: relative;
}
.recommend__title::before {
  content: "";
  position: absolute;
  height: 1px;
  width: 20px;
  background: #ccc;
  top: 7px;
  margin-left: -30px;
}
.recommend__title::after {
  content: "";
  position: absolute;
  height: 1px;
  width: 20px;
  background: #ccc;
  top: 7px;
  margin-left: 10px;
}
.home__filter {
  font-size: 14px;
}
.filter {
  display: flex;
  justify-content: space-around;
}
.filter span {
  color: #aaa;
  cursor: pointer;
}
span.filter_active {
  color: #000;
}
</style>

