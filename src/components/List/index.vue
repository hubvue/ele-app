<template>
    <section class="list__container">
        <div class="list__image">
            <img :src="list.image" :alt="list.title">
        </div>
        <div class="list__info">
            <div class="info__title">{{list.title}}</div>
            <div class="info__starAndSales text_config">
                <div class="info__star">评分：{{list.score}}</div>
                <div class="info__sales">月售{{list.monhlySales}}单</div>  
            </div>
            <div class="info__giveAndTime ">
                <div class="info__give text_config">
                    <span>￥{{list.initialGivePrice}}起送</span>|
                    <span>配送费￥{{list.distributionPrice}}</span>
                </div>
                <div class="info__time text_config">
                    <span>{{list.distance}}m</span>|
                    <span>{{list.time}}分钟</span>
                </div>
            </div>
            <ul class="info__type">
                <li v-for="(type, idx) of list.type" :key="idx"  class="text_config">{{type}}</li>
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        list: Object,
    }
}
</script>
<style>
.list__container{
    display:flex;
    width:100%;
    padding:4px;
}
.list__image{
    width:75px;
    height:75px;
    border: 1px solid rgba(200,200,200,.5);
    border-radius: 2px;
}
.list__image img {
    width: 75px;
    height:75px;
}
.list__info {
    padding:2px 10px;
    width:100%;
}
.list__info > div{
    margin-bottom: 4px;
}
.info__title{
    font-size:16px;
    font-weight:600;
}
.text_config  {
    font-size: 12px;
    color: #777;
}
.text_config span {
    margin-right: 5px;
}
.info__starAndSales {
    display:flex;
}
.info__starAndSales > div {
    margin-right: 20px;
}
.info__giveAndTime {
    display:flex;
    width:100%;
    justify-content:space-between;
}
.info__type {
    display:flex;
}
.info__type li {
    border: 1px solid #ccc;
    margin-right: 5px;
    padding: 1px;
    border-radius:2px;
}
</style>
