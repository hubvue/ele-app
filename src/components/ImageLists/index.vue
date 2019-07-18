<template>
  <ul class="items__ul">
    <li v-for="(list, idx) of lists" :key="idx" class="item__li">
      <router-link :to="list.path">
        <p>
          <img :src="list.image" alt />
        </p>
        <p>{{list.message}}</p>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "ListImages",
  data() {
    return {
      lists: [
        {
          path: "/food",
          message: "美食",
          image:
            "https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "商场便利",
          image:
            "https://fuss10.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "水果",
          image:
            "https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "医药健康",
          image:
            "https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "浪漫鲜花",
          image:
            "https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "跑腿代购",
          image:
            "https://fuss10.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "汉堡披萨",
          image:
            "https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "厨房生鲜",
          image:
            "https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "甜品饮品",
          image:
            "https://fuss10.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        },
        {
          path: "/food",
          message: "素食简餐",
          image:
            "https://fuss10.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/"
        }
      ],
    };
  }
};
</script>
<style>
.items__ul {
  display: flex;
  flex-wrap: wrap;
  margin-left: 5px;
}
.item__li {
  width: 70px;
  height: 70px;
  padding: 0 10px;
  text-align: center;
  font-size: 12px;
}
.item__li p {
  color: #666;
}
.item__li img {
  width: 80%;
  height: 80%;
}
</style>
