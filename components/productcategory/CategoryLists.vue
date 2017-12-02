<template>
    <li class="same female">
        <div class="one">
            <h2>服装</h2>
            <ul>
                <category-details :k="key" :pro="value"  v-for="(value,key) in listSecond">

                </category-details>
            </ul>
        </div>
        <div class="one">
            <h2>包袋钱包</h2>
            <ul>
                <li>
                    <img src="assets/img/jdh/package.png" alt="">
                    <span>手提包</span>
                </li>
                <li>
                    <img src="assets/img/jdh/package.png" alt="">
                    <span>手提包</span>
                </li>
                <li>
                    <img src="assets/img/jdh/package.png" alt="">
                    <span>手提包</span>
                </li>
                <li>
                    <img src="assets/img/jdh/package.png" alt="">
                    <span>手提包</span>
                </li>
                <li>
                    <img src="assets/img/jdh/package.png" alt="">
                    <span>手提包</span>
                </li>
                <li>
                    <img src="assets/img/jdh/package.png" alt="">
                    <span>手提包</span>
                </li>
            </ul>
        </div>
        <div class="one">
            <h2>鞋履</h2>
            <ul>
                <li>
                    <img src="assets/img/jdh/xie.png" alt="">
                    <span>高跟鞋</span>
                </li>
                <li>
                    <img src="assets/img/jdh/xie.png" alt="">
                    <span>高跟鞋</span>
                </li>
                <li>
                    <img src="assets/img/jdh/xie.png" alt="">
                    <span>高跟鞋</span>
                </li>
                <li>
                    <img src="assets/img/jdh/xie.png" alt="">
                    <span>高跟鞋</span>
                </li>
                <li>
                    <img src="assets/img/jdh/xie.png" alt="">
                    <span>高跟鞋</span>
                </li>
                <li>
                    <img src="assets/img/jdh/xie.png" alt="">
                    <span>高跟鞋</span>
                </li>
            </ul>
        </div>
    </li>
</template>

<script type="text/ecmascript-6">
    import CategoryDetails from "./CategoryDetails.vue";
    export default {
        props:["listSecond"],
        components:{
            CategoryDetails
        }
    }
</script>

<style scoped>
    /*same*/
    .same{
        padding:0 0.17rem!important;
    }
    .same .one{
        padding-bottom:0.15rem;
        border-bottom:0.02rem solid #f2f2f2;
    }
    .same .one:last-child{
        border:none;
    }
    .one h2{
        height: 0.6rem;
        line-height: 0.65rem;
        font-size: 0.12rem;
    }
    .one ul {
        display:flex;
        flex-wrap: wrap;

    }
    .one ul li{
        width:33.33%;
        margin-bottom: 0.14rem;
        display:flex;
        flex-direction: column;
        align-items: center;

    }
    .one li img{
        width: 0.73rem;
        height: 0.73rem;
    }
    .one li span{
        margin:0.1rem 0 0;
        font-size:0.12rem;
        color:#b1b2b1;
    }


</style>