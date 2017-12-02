<template>
    <div id="cart">
        <!--header-->
        <cart-header @editor="changeEditor"></cart-header>
        <!--content-->
        <cart-content :num="totalNum" :allBackCheck="allBackCheck" :houseBackCheck="houseBackCheck" :changeHouseCheck="changeHouseCheck" :houseCheckState="houseCheckState" :changeCheck="changeCheck" :addNum="addNum" :subNum="subNum" :editor="isEditor" :productList="productList"></cart-content>
        <!--check-all-->
        <cart-check-all @isCheckAll="isCheckAll" :changeCheck="changeCheck" :tn="totalMoney" :editor="isEditor"></cart-check-all>
        <!--footer-->
        <common-footer :idx="3" :num="totalNum"></common-footer>

    </div>
</template>
<script type="text/ecmascript-6">
    import CartHeader from "../components/shopcarts/CartHeader.vue";
    import CartContent from "../components/shopcarts/CartContent.vue";
    import CartCheckAll from "../components/shopcarts/CartCheckAll.vue";
    import CommonFooter from "../components/commons/CommonFooter.vue";
    import ShopCartsApi from "../apis/ShopCartsApi";
    export default {
        components:{
            CartHeader,
            CartContent,
            CartCheckAll,
            CommonFooter
        },
        data(){
            return{
                isEditor:true,
                totalNum:0,
                totalMoney:0,
                allCheckState:false,
                houseCheckState:{},//每个发货仓的选中状态
                productList:{}
            }
        },
        created:function(){
            this.initData();
        },
        methods:{
            initData:function(){
                this.totalNum=0;
                ShopCartsApi.getShopCartData((data)=>{
                    this.productList=data;
                    /**
                     * 为数据添加是否选中属性
                     */
                    for(let key in this.productList){
                        for(let i in this.productList[key]){
                            this.productList[key][i].checkState=false;
                          this.totalNum++;
                        }
                        this.houseCheckState[key]=false;
                    }
//                    console.log(this.productList)
                });
            },

            //改变选中状态
            /*
            * 单个产品的选中状态
            */
            changeCheck:function(house,idx){
                this.productList[house][idx].checkState=!this.productList[house][idx].checkState;
                //改变状态后，计算总价格
                this.counter();
            },
            /*
            * 每个发货仓的(全选)
            */
            changeHouseCheck:function(house){
                this.houseCheckState[house]=!this.houseCheckState[house];
                for(let i in this.productList[house]){
                    this.productList[house][i].checkState=this.houseCheckState[house];
                }
                this.counter();
//                console.log(this.houseCheckState[house])
            },
            //发货仓反选
            houseBackCheck:function(house){
                for(let i in this.productList[house]){
                    if(!this.productList[house][i].checkState){
                        this.houseCheckState[house]=false;
                        break;
                    }
                    this.houseCheckState[house]=true;
                }
                this.counter();
                return this.houseCheckState[house];
            },
            /**
             * 全选
             * @param data
             */
            isCheckAll:function(data){
                //更改数据
                this.allCheckState=data;
                for(let key in this.productList){
                    for(let i in this.productList[key]){
                        this.productList[key][i].checkState=data;
                    }
                    this.houseCheckState[key]=data;
                }
                //更改外观
                if(this.allCheckState){
                    $(".uncheck").css("display","none");
                    $(".check").css("display",'inline-block');
                }else{
                    $(".uncheck").css("display","inline-block");
                    $(".check").css("display",'none');
                }
                this.counter();
            },
            /*
            * 全部反选
            */
            allBackCheck:function(){
                for(let key in this.houseCheckState){
                    if(!this.houseCheckState[key]){
                        this.allCheckState=false;
                        break;
                    }
                    this.allCheckState=true;
                }
//                console.log(this.allCheckState)
                //更改外观
                if(this.allCheckState){
                    $(".check-all .uncheck").css("display","none");
                    $(".check-all .check").css("display",'inline-block');
                }else{
                    $(".check-all .uncheck").css("display","inline-block");
                    $(".check-all .check").css("display",'none');
                }
                this.counter();
            },
            /**
             * 计算选中状态的商品的总价格
             *
             */
            counter:function(){
                this.totalMoney=0;
                for(let key in this.productList){
                    for(let i in this.productList[key]){
                        if(this.productList[key][i].checkState){
                            this.totalMoney+=this.productList[key][i].price*this.productList[key][i].qal;
                        }
                    }
                }
            },
            /**
             * 记录是否点击编辑
             * @param data
             */
            changeEditor:function(data){
                this.isEditor=data;
                //改变编辑，计算总价格
                this.counter();
            },
            /**
             * 加减算法
             * @param house
             * @param idx
             */
            addNum:function(house,idx){
                this.productList[house][idx].qal++;
                //改变数量后，计算总价格
                this.counter();
            },
            subNum:function(house,idx){
                if(this.productList[house][idx].qal<=1){
                    this.productList[house][idx].qal=1;
                }else{
                    this.productList[house][idx].qal--;
                }
                //改变数量后，计算总价格
                this.counter();
            }
        }
    }


</script>
<style lang="scss" scoped>

    #cart{
        color:#181818;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>