import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router/";
import "./assets/js/jquery-1.8.3.min";
import "./assets/dist/css/swiper.min.css";
import "./assets/dist/js/swiper-3.4.2.min";
import "./assets/css/public.css";

//viewmodel->App.vue(项目级的根组件)

Vue.use(VueRouter);

new Vue({
    el:"#app",
    router,
    render:(h)=>{
        return h(App);
    }
});