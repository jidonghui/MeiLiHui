<template>
    <div class="content">
        <!--freeshipping-->
        <h4 class="freeshipping">满688元免运费
            <div>1 <span>/ 1</span></div>
        </h4>

        <!--cart-focus-->
        <section class="cart-focus" >
            <!--CartStoreHouse.vue根据仓库显示-->
            <cart-store-house :allBackCheck="allBackCheck" :houseBackCheck="houseBackCheck" :houseCheckState="houseCheckState" :num="num" :changeHouseCheck="changeHouseCheck" :changeCheck="changeCheck" :addNum="addNum" :subNum="subNum" :editor="editor" :house="key" :houseProList="val" v-for="(val,key) in productList"></cart-store-house>
        </section>
    </div>

</template>
<script type="text/ecmascript-6">
    import CartStoreHouse from "./CartStoreHouse.vue";
    export default {
        components:{
            CartStoreHouse
        },
        props:['allBackCheck','houseBackCheck','houseCheckState','num','productList','editor','addNum','subNum','changeCheck','changeHouseCheck']
    }
</script>
<style lang="scss" scoped>

    //content
    .content{
        flex:1;
        overflow-x: hidden;
        overflow-y: auto;
    }

    //freeshipping
    .freeshipping{
        line-height: 0.48rem;
        font-size: 14px;
        padding:0 0.16rem;
        color:#da2120;
        font-weight: 100;
        div{
            float:right;
            color:#181818;
            span{
                font-size: 10px;
            }
        }
    }


</style>