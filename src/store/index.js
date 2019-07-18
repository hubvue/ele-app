import Vue from "vue";
import Vuex from "vuex";

import lego from "./modules/lego";
import recommendList from "./modules/recommendList"; 
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        lego,
        recommendList,
    }
})

export default store;

