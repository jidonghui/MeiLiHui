import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../pages/Index.vue";
import Mine from "../pages/Mine.vue";
import ProductCategory from "../pages/ProductCategory.vue";
import ProductLists from "../pages/ProductLists.vue";
import ShopCarts from "../pages/ShopCarts.vue";
import ProductDetail from "../pages/ProductDetail.vue";

const router=new VueRouter({
    routes:[
        {path:"/",component:Index},
        {path:"/mine",component:Mine},
        {path:"/category",component:ProductCategory},
        {path:"/list",component:ProductLists},
        {path:"/carts",component:ShopCarts},
        {path:"/detail",component:ProductDetail}
    ]
});

module.exports=router;