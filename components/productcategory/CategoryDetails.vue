<template>
    <li @click="goList()">
        <img :src="pro.photo" alt="">
        <span>{{k}}</span>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["k","pro"],
        methods:{
            //跳转列表页
            goList:function(){
                this.$router.push({path:"list",query:{k:this.$props.k}});
            }
        }
    }
</script>

<style scoped>
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