import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home")
    },{
        path: "/location",
        name: "Location",
        component: () => import("../views/Location")
    },{
        path: "/food",
        name: "FoodView",
        component: () => import("../views/FoodView")
    },{
        path: "/search",
        name: "Search",
        component: () => import("../views/Serach")
    },{
        path: "/lego",
        name: "LegoView",
        component: () => import("../views/LegoView")
    }
]

export default  new Router({
    routes,
    mode: "history"
});           