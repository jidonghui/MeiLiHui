<template>
    <dd>
        <img @click="changeCheckState" class="check-state check" src="assets/img/ymq/icon_cart_check_box.png" alt=""/>
        <img @click="changeCheckState" class="check-state uncheck" src="assets/img/ymq/icon_cart_uncheck_box.png" alt=""/>
        <img class="shop-pic" :src="pro.pic" alt="" @click="changePage" />
        <div class="shop-detail">
            <h5>{{pro.title}}</h5>
            <p class="shop-desp">{{pro.desc}}</p>
            <p class="shop-color">
                <span v-if="editor">{{pro.color}}</span>
                <a href="javascript:;" v-else>{{pro.color}} <img src="assets/img/ymq/icon_triangle_grey_light.png" alt=""></a>
            </p>
            <p class="shop-price">
                ￥{{pro.price | test}}
                <span class="shop-num" v-show="editor">×{{pro.qal}}</span>
                <span class="changeNum" v-show="!editor">
                    <span class="sym" @click="subNum(house,idx)">-</span>
                    <span>{{pro.qal}}</span>
                    <span class="sym" @click="addNum(house,idx)">+</span>
                </span>
            </p>
        </div>
    </dd>
</template>
<script type="text/ecmascript-6">
    export default {
        filters:{
            test:function(val){
                return val.toFixed(2);
            }
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
                this.check=this.$props.houseCheck;
            },
            changeCheckState:function(e){
                this.check=!this.check;
                //改变数据
                this.$props.changeCheck(this.$props.house,this.$props.idx);
                //外观
                if(this.check){
                    $(e.currentTarget).parent().children(".check").css("display",'inline-block');
                    $(e.currentTarget).parent().children(".uncheck").css("display",'none');
                }else{
                    $(e.currentTarget).parent().children(".check").css("display",'none');
                    $(e.currentTarget).parent().children(".uncheck").css("display",'inline-block');
                }


                //仓库反选
                //改变数据
//                this.$props.houseBackCheck(this.$props.house);
                //改变外观
                if(this.$props.houseBackCheck(this.$props.house)){
                    $(e.currentTarget).parent().siblings("dt").children(".check").css("display",'inline-block');
                    $(e.currentTarget).parent().siblings("dt").children(".uncheck").css("display",'none');
                }else{
                    $(e.currentTarget).parent().siblings("dt").children(".check").css("display",'none');
                    $(e.currentTarget).parent().siblings("dt").children(".uncheck").css("display",'inline-block');
                }
//                全部反选
                this.$props.allBackCheck();
            },
            changePage:function () {
                this.$router.push({ path: 'detail', query: { house: this.$props.house, idx: this.$props.idx, num:this.$props.num}});
            }
        },
        props:['allBackCheck','houseBackCheck','houseCheck','num',"idx","house","pro","editor",'addNum','subNum','changeCheck']
    }
</script>
<style lang="scss" scoped>
    dd{
        border-top: 1px solid #ededed;
        padding:0.1rem 0;
        background: #fff;
        display: flex;
        align-items: center;
        .check-state{
            padding:0 0.15rem;
            width: 0.2rem;
        }
        .check{
            display: none;
        }
        .uncheck{
            display: inline-block;
        }
        .shop-pic{
            width: 0.91rem;
            margin-right:0.1rem;
        }
        .shop-detail{
            flex:1;
            font-size: 14px;
            line-height: 0.2rem;
            padding-right: 0.16rem;
            .shop-desp{
                width: 2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .shop-color{
                font-size: 12px;
                color:#949494;
                overflow: hidden;
                span{
                    //display: block;
                    //display: none;
                    float:left;
                    margin:0.1rem 0 0.38rem;
                    line-height: 0.2rem;
                }
                a{
                    //display: none;
                    //display: block;
                    float:left;
                    width: 2.02rem;
                    height: 0.2rem;
                    border:1px solid #f4f4f4;
                    margin:0.1rem 0 0.38rem;
                    text-indent: 0.1rem;
                    color:#949494;
                    img{
                        width: 0.04rem;
                        float:right;
                        margin:0.08rem 0.05rem 0;
                    }
                }
            }
            .shop-price{
                color:#d31c1c;
                .shop-num{
                    display: block;
                    font-size: 12px;
                    color:#949494;
                    float:right;
                }
                .changeNum{
                    //display: none;
                    float:right;
                    color:#1e1e1e;
                    font-size: 12px;
                    border:1px solid #f3f3f3;
                    span{
                        display: inline-block;
                        width: 0.22rem;
                        height: 0.22rem;
                        line-height: 0.22rem;
                        text-align: center;
                    }
                    .sym{
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>