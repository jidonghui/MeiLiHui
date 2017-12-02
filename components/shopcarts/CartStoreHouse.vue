<template>
    <dl class="cart-box" >
    <!--<dl class="cart-box">-->
        <!--shop-tit-->
        <dt class="shop-tit">
            <img class="check" @click="changeCheckState" v-show="check" src="assets/img/ymq/icon_cart_check_box.png" alt=""/>
            <img class="uncheck" @click="changeCheckState" v-show="!check" src="assets/img/ymq/icon_cart_uncheck_box.png" alt=""/>
            <!--魅力惠直发-->
            {{house}}
        </dt>

        <!--CartProduct购物车单个产品信息-->
        <cart-product :allBackCheck="allBackCheck" :houseBackCheck="houseBackCheck" :houseCheck="check" :num="num" :changeCheck="changeCheck" :addNum="addNum" :subNum="subNum" :editor="editor" :house="house" :idx="index" :pro="proVal" v-for="(proVal,index) in houseProList"></cart-product>
        <!--<cart-product></cart-product>-->
    </dl>
</template>
<script type="text/ecmascript-6">
    import CartProduct from "./CartProduct.vue";
    export default {
        components:{
            CartProduct
        },
        data(){
            return {
                check:false
            }
        },
        created:function(){
            this.initData();
        },
        methods:{
            initData:function(){
                this.check=this.$props.houseCheckState[this.$props.house];
            },
            changeCheckState:function(e){
                this.check=!this.check;

                //改变数据
                this.$props.changeHouseCheck(this.$props.house);
                //改变外观
                if(this.check){
                    $(e.currentTarget).parent().nextAll('dd').children(".check").css("display",'inline-block');
                    $(e.currentTarget).parent().nextAll('dd').children(".uncheck").css("display",'none');
                }else{
                    $(e.currentTarget).parent().nextAll('dd').children(".check").css("display",'none');
                    $(e.currentTarget).parent().nextAll('dd').children(".uncheck").css("display",'inline-block');
                }
//                全部反选
                this.$props.allBackCheck();
            }
        },
        props:['allBackCheck','houseBackCheck','houseCheckState','num',"house","houseProList","editor",'addNum','subNum','changeCheck','changeHouseCheck']
    }
</script>
<style lang="scss" scoped>
    .cart-box{
        background: #f7f7f7;
        padding:0.1rem 0;
        .shop-tit{
            line-height:0.46rem;
            font-size:14px;
            background: #fff;
            img{
                padding:0 0.15rem;
                width: 0.2rem;
                vertical-align: middle;
                display: inline-block;
            }
        }


    }
</style>