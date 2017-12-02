<template>
    <div id="root">
        <!--header-->
        <div class="detail-header">
            <a href="javascript:;" @click="go">
                <img src="assets/img/ymq/icon_back_brand_black.png" class="back" alt="">
            </a>
            {{proData.title}}
            <a href="javascript:;">
                <img src="assets/img/ymq/icon_share1.png" class="share" alt="">
            </a>
        </div>
        <div class="content">

            <!--轮播图-->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <!--<img src="assets/img/ymq/swiper1.jpg" alt="">-->
                        <img :src="proData.pic" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="assets/img/ymq/swiper2.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="assets/img/ymq/swiper3.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="assets/img/ymq/swiper4.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="assets/img/ymq/swiper5.jpg" alt="">
                    </div>
                    <div class="swiper-slide">
                        <img src="assets/img/ymq/swiper6.jpg" alt="">
                    </div>
                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>
            <p class="price">￥{{proData.price}} <span>当季新品</span></p>
            <p class="tit">{{proData.desc}}</p>
            <p class="outPut-time">预计出库日期：2017/11/10</p>

            <!--闪购、服务、颜色-->
            <div class="item-info">
                <div>
                    <span>闪购</span>
                    <div>
                        <b>距结束 04 天 11 小时 37 分 08 秒</b>
                    </div>
                </div>
                <div>
                    <span>服务</span>
                    <div>
                        全场满688包邮 <i></i> 正品保障 <i></i> 买手推荐 <i></i> 七天无理由退货
                    </div>
                </div>
                <div>
                    <span>颜色</span>
                    <div class="pro-color">
                        <a href="javascript:;">黑色</a>
                        <a href="javascript:;">棕色</a>
                        <a href="javascript:;">橡皮粉色</a>
                        <a href="javascript:;" class="first">拼色</a>
                        <a href="javascript:;">藏青色</a>
                    </div>
                </div>
            </div>

            <!--商品参数-->
            <div class="goods-params">
                <h4>商品参数</h4>
                <ul>
                    <li>
                        <span>材质</span>
                        <span>面料：头层牛皮革(装饰除外)</span>
                    </li>
                    <li>
                        <span>品牌属地:</span>
                        <span>英国</span>
                    </li>
                    <li>
                        <span>产地</span>
                        <span>西班牙</span>
                    </li>
                    <li>
                        <span>颜色</span>
                        <span>拼色</span>
                    </li>
                    <li>
                        <span>流行元素/工艺</span>
                        <span>金属环</span>
                    </li>
                    <li>
                        <span>款式</span>
                        <span>手提包</span>
                    </li>
                    <li>
                        <span>风格</span>
                        <span>欧美</span>
                    </li>
                </ul>
            </div>

        </div>
        <!--footer-->
        <div class="footer">
            <a href="javascript:;" class="bag">
                <img src="assets/img/ymq/nav_bag_nor.png" alt=""/>
                <span>{{$route.query.num}}</span>
            </a>
            <a href="#/carts" class="addToBag">加入购物袋</a>
            <a href="javascript:;" class="goToBuy">立即购买</a>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import ShopCartsApi from "../apis/ShopCartsApi";
    import ProductsApi from "../apis/ProductsApi";
    export default {
        data(){
            return {
                proData:{}
            }
        },
        methods:{
            initData:function(){
                if(this.$route.query.house==undefined){
                    let pro={};
                    ProductsApi.getProductsList((data)=>{
                        let key=this.$route.query.key;
                        let idx=this.$route.query.idx;
                        pro.pic=data[key].lists[idx].pic;
                        pro.title=data[key].lists[idx].name;
                        pro.desc=data[key].lists[idx].desc;
                        pro.price=data[key].lists[idx].newPrice;
                        this.proData=pro;
                    })
                }else{
                    ShopCartsApi.getShopCartData((data)=>{
                        let {house,idx}=this.$route.query;
//                        let house=this.$route.query.house;
//                        let idx=this.$route.query.idx;
                        this.proData=data[house][idx];
                    })
                }
            },
            go:function(){
                this.$router.go(-1);
            }
        },
        created:function(){
            this.initData();
        },
        activated:function(){
            this.initData();
        },
        mounted:function(){
            //    轮播图
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,

                // 如果需要分页器
                pagination: '.swiper-pagination'
            });

            let colorArr=document.getElementsByClassName("pro-color")[0].children;

            for(let i=0;i<colorArr.length;i++){
                colorArr[i].onclick=function(){
                    for(let i=0;i<colorArr.length;i++){
                        colorArr[i].className="";
                    }
                    this.className="first";
                }
            }
        }
    }
</script>
<style lang="scss" scoped>

    #root{
        color:#181818;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    //header
    .detail-header{
        padding:0 0.15rem;
        line-height: 0.6rem;
        font-size:18px;
        text-align: center;
        position: relative;
        img{
            display: inline-block;
        }
        a:first-child{
            display: inline-block;
            position: absolute;
            left:0.15rem;
            top:0;
        }
        a:last-child{
            display: inline-block;
            position: absolute;
            right:0.15rem;
            top:0;
        }
        .back{
            height: 0.14rem;
        }
        .share{
            height: 0.21rem;
        }
    }

    .content{
        padding:0 0.15rem;
        flex:1;
        overflow-x: hidden;
        overflow-y: auto;
    }

    //轮播图
    .swiper-slide img{
        width: 100%;
    }

    .price{
        line-height: 0.16rem;
        font-size: 14px;
        color:#d21722;
        margin:0.13rem 0;
        span{
            display: inline-block;
            padding:0.02rem;
            font-size: 10px;
            color:#07080a;
            border:1px solid #c6c6c5;
        }
    }

    .tit{
        line-height: 0.28rem;
        font-size: 18px;
    }

    .outPut-time{
        line-height: 0.44rem;
        font-size: 14px;
        color:#5a5a5b;
        margin-bottom: 0.1rem;
    }

    //闪购、服务、颜色
    .item-info{
        color:#5a5a5b;
        font-size:14px;
        &>div{
            border-top:1px solid #efefef;
            padding:0.15rem 0;
            overflow: hidden;
            b{
                color:#000001;
                line-height: 0.33rem;
            }
            span{
                width: 15%;
                line-height: 0.33rem;
                float:left;
            }
            div{
                width: 85%;
                float:left;
                i{
                    display: inline-block;
                    width: 1px;
                    height: 0.1rem;
                    background: #676a75;
                    margin:0 0.08rem;
                }
                .first{
                    color:white;
                    background: #000001;
                }
                a{
                    display: inline-block;
                    padding:0 0.09rem;
                    height: 0.33rem;
                    line-height: 0.33rem;
                    text-align: center;
                    color:#000001;
                    background: #f7f7f7;
                    margin-right:0.15rem;
                    margin-bottom: 0.15rem;
                }
            }
        }
    }

    //商品参数
    .goods-params{
        border-top:1px solid #efefef;
        font-size: 14px;
        padding:0.15rem 0;
        color:#000001;
        h4{
            line-height:0.45rem;
            font-size:20px;
        }
        ul li{
            padding:0.06rem 0;
            line-height: 0.19rem;
            overflow: hidden;
            span:first-child{
                display: inline-block;
                color:#9c9c9c;
                width: 45%;
                float:left;
            }
            span:last-child{
                display: inline-block;
                width: 55%;
                float:left;
            }
        }
    }

    //footer
    .footer{
        font-size: 16px;
        text-align: center;
        overflow: hidden;
        a{
            float: left;
        }
        .bag{
            width: 20%;
            position: relative;
            img{
                width: 100%;
            }
            span{
                position: absolute;
                font-size: 8px;
                width: 0.2rem;
                height: 0.2rem;
                line-height:0.2rem;
                border-radius: 50%;
                background: #e22d3d;
                color:white;
                right:0.15rem;
                top:0;
            }
        }
        .addToBag{
            width: 40%;
            box-sizing: border-box;
            line-height: 0.52rem;
            border-left:1px solid #f7f7f7;
            border-right:1px solid #f7f7f7;
            color:#101012;
        }
        .goToBuy{
            width: 40%;
            line-height: 0.52rem;
            color:#e22d3d;
        }
    }


</style>