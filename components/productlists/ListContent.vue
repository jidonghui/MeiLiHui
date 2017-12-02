<template>
    <li @click="goDetail">
        <img :src="one.pic" alt="">
        <span>买手推荐</span>
        <h3>{{one.name}}</h3>
        <p>{{one.desc}}</p>
        <h4>￥{{one.newPrice}}<span>￥{{one.oldPrice}}</span></h4>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["one","contentTitle","ord"],
        methods:{
            goDetail:function(){
                this.$router.push({path:"detail",query:{key:this.$props.contentTitle,idx:this.$props.ord,num:4}})
            }
        }
    }
</script>

<style scoped>
    .content li{
        width:47%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        margin-bottom:0.2rem;
    }
    .content li img{
        width:100%;
    }
    .content li>span{
        width:0.8rem;
        margin:0.05rem 0 0.1rem 0;
        font-size:0.12rem;
        color:#444544;
        border:1px solid #848584;
        border-radius: 0.02rem;
        text-align: center;
    }
    .content li h3{
        font-size:0.14rem;
        color:#000;
    }
    .content li p{
        margin: 0.02rem 0 0.14rem 0;
        font-size: 0.14rem;
        color: #7b7b7b;
        width: 1.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .content li h4{
        font-size:0.14rem;
        color:#df2e2f;
    }
    .content li h4 span{
        font-size:0.12rem;
        color:#cbcccb;
        font-weight: normal;
        text-decoration: line-through;
        margin-left:0.05rem;
    }

</style>