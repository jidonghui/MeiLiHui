<template>
    <!--header-->
    <header>
        <img src="assets/img/jdh/back.png" alt="" @click="back">
        <h2>{{headTitle}}</h2>
        <img class="shareImg" src="assets/img/jdh/share.png" alt="">
    </header>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["headTitle"],
        methods:{
            back:function(){
//                this.$router.go(-1);
                this.$router.push("/category");
            }
        }
    }
</script>

<style scoped>

    /*header*/
    header{
        height:0.6rem;
        padding:0 0.16rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    header h2{
        font-size:0.18rem;
        color:#000;
    }
    header img:first-child{
        width:0.25rem;
        height:0.14rem;
    }
    header img:last-child{
        width:0.2rem;
        height:0.23rem;
    }

</style>