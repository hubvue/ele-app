<template>
  <div class="lego__container">
      <div class="lego__info">
          <p class="lego__name">{{theme.name}}</p>
          <p class="lego__message">{{theme.message}}</p>
          <p class="lego__link"><router-link :to="theme.path">立即抢购 > </router-link></p>
      </div>
      <div class="lego__image">
          <img :src="theme.image" alt="">
      </div>
  </div>
</template>
<script>
export default {
    name: "Lego",
    props: {
        theme: Object,
    },
};
</script>
<style>
.lego__container {
    display:flex;
    background:linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
    border-radius:4px;
}
.lego__info{
    width:50%;
    padding: 10px 20px;
}
.lego__info p{
    margin-top: 10px;
}
.lego__name {
    font-size:16px;
    font-weight: 500;
}
.lego__message {
    font-size:13px;
    color:#777;
}
.lego__image {
    width: 50%;
    padding:10px;
}
.lego__link  a{
    color:#af8260;
    font-size:12px;
}
.lego__image img {
    width: 100%;
    height:100%;
}
</style>
