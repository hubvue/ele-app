<template>
    <div class="lists__container">
      <List  v-for="list of lists" :key="list.id" :list="list"/>  
    </div>
</template>
<script>
import List from "../List";
export default {
    name: "ListView",
    components: {
        List,
    },
    props: {
        lists: Array,
    }
}
</script>
<style>
.lists__container section {
    margin-bottom: 6px;
    margin-top:10px;
    padding:0 20px;
}
</style>
