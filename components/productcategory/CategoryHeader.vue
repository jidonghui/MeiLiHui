<template>
    <!--header-->
    <header>
        <div class="searchDiv">
            <img src="assets/img/jdh/search.png" alt="">
            <span>GUCCI</span>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    /*header*/
    header{
        padding:0.05rem 0.21rem;
    }
    header .searchDiv{
        width:100%;
        padding:0.05rem 0;
        background:#f5f5f5;
        display:flex;
        align-items: center;
    }
    .searchDiv img{
        width: 0.2rem;
        height: 0.2rem;
        margin:0 0.11rem;
    }
    .searchDiv span{
        font-size:0.18rem;
        color:#cacaca;
    }

</style>