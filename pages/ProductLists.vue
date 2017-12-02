<template>
    <div class="list">
        <!--top-->
        <div class="top">
            <list-header :headTitle="title"></list-header>
            <!--nav-->
            <nav>
                <ul>
                    <li class="black">人气</li>
                    <li class="gray">折扣</li>
                    <li class="gray">
                        价格
                        <img class="drec" src="assets/img/jdh/downgrey.png" alt="">
                    </li>
                    <li class="black">
                        筛选
                        <img class="filter" src="assets/img/jdh/filter.png" alt="">
                    </li>
                </ul>
            </nav>
        </div>
        <!--content-->
        <ul class="content" @scroll="handleScroll">
            <ListContent :one="n" :contentTitle="title" :ord="index"  v-for="(n,index) in item">

            </ListContent>
        </ul>
        <!--zzc-->
        <div class="zzc">
        </div>
        <!--share-->
        <div class="share">
            <img src="assets/img/jdh/weixin.png" alt="">
            <img src="assets/img/jdh/friend.png" alt="">
            <img src="assets/img/jdh/sina.png" alt="">
        </div>
        <!--backTop-->
        <div class="backTop">
            <img src="assets/img/jdh/shopcart.png" alt="" @click="goCart()">
            <img class="goTop" src="assets/img/jdh/backtop.png" alt="">
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import ListHeader from "../components/productlists/ListHeader.vue";
    import ListContent from "../components/productlists/ListContent.vue";
    import ProductsApi from "../apis/ProductsApi";
    export default {
        components: {
            ListHeader,
            ListContent
        },
        created: function () {
            this.initData();
        },
        mounted: function () {

            // 分享弹出框
            $(".shareImg").click(function () {
                $(".zzc").css({"display": "block"});
                $(".share").css({"display": "flex"});
            });
            $(".zzc").click(function () {
                $(".zzc").css({"display": "none"});
                $(".share").css({"display": "none"});
            });

            //回到顶部
            $(".goTop").click(function () {
                $(".content").animate({scrollTop: 0}, 300);
            });
        },
        data() {
            return {
                item: [],
                title: "",
                scroll:''
            }
        },
        activated:function(){
            this.initData();
        },
        methods: {
            //初始化数据
            initData: function () {
                ProductsApi.getProductsList((data) => {
                    var k = this.$route.query.k;
                    this.title = k;
                    this.item = data[k].lists;
                })
            },
            //跳转购物车页
            goCart: function () {
                this.$router.push("/carts");
            },
            handleScroll: function () {
                this.scroll=  $(".content").scrollTop();
                //console.log(this.scroll);
                if(this.scroll<=0){
                    $(".backTop").css("bottom","-0.6rem");
                }else{
                    $(".backTop").css("bottom","0");

                }
            }
        }
    }
</script>

<style scoped>
    /*@import url(../assets/css/ProductLists.css);*/

    /*all*/
    .list{
        height: 100%;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /*nav*/
    nav{
        height:0.26rem;
        padding:0.16rem;
    }
    nav ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    nav li{
        width:25%;
        display:flex;
        justify-content: center;
        align-items: center;
        font-size:0.14rem;
        box-sizing: border-box;
    }
    nav li:nth-child(3){
        border-right:1px solid #e3e3e3;
    }
    nav .black{
        color:#000;
    }
    nav .gray{
        color:#909290;
    }
    nav .drec{
        width:0.2rem;
        height:0.2rem;
    }
    nav .filter{
        width:0.11rem;
        height:0.11rem;
        margin-left:0.03rem;
    }
    /*content*/
    .content{
        flex:1;
        overflow-x:hidden;
        overflow-y:auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 0 0.08rem;
    }

    /*share*/
    .share{
        width:93%;
        height:1.55rem;
        background:#fff;
        border-radius: 0.05rem;
        position:fixed;
        left:0.15rem;
        bottom:0.15rem;
        display:none;
        justify-content: space-around;
        align-items: center;
        z-index:3;
    }
    .share img{
        height: 0.6rem;
    }

    /*backTop*/
    .backTop{
        position:fixed;
        right:0.18rem;
        bottom:-0.6rem;
        display: flex;
        flex-direction: column;
        transition:all 1s;
    }
    .backTop img{
        height: 0.5rem;
        margin-bottom: 0.1rem;
    }

    .zzc{
        display:none;
        position: absolute;
        width: 100%;
        height:100%;
        background: rgba(0,0,0,0.4);
        z-index:2;
    }
</style>