<template>
    <div class="category">
        <category-header></category-header>

        <category-content :listFirst="productsList"></category-content>

        <!--footer-->
        <common-footer :idx="1"></common-footer>
    </div>

</template>

<script type="text/ecmascript-6">
    import "../assets/js/jquery-1.8.3.min";
    import CategoryHeader from "../components/productcategory/CategoryHeader.vue";
    import CategoryContent from "../components/productcategory/CategoryContent.vue";
    import ProductsApi from "../apis/ProductsApi";
    import CommonFooter from "../components/commons/CommonFooter.vue";
    export default {
        components:{
            CategoryHeader,
            CategoryContent,
            CommonFooter
        },
        created:function(){
            this.initData();
        },
        mounted:function(){

            let now=$(".typeDetails>li");
            $(".typeName li").click(function(){
                var ord=$(".typeName li").index(this);
                $(this).addClass("red").siblings().removeClass("red");
                $(now[ord]).addClass("now").siblings().removeClass("now");
            });
        },
        data(){
            return{
                    productsList:[]
            }
        },
        methods:{
            initData:function(){
                ProductsApi.getProductsList((data)=>{
                    this.productsList=data;
                })
            }
        }
    }
</script>

<style scoped>
    /*@import url(../assets/css/ProductCategory.css);*/

    .category{
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /*footer*/


</style>