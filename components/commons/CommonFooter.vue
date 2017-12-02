<template>
    <footer>
        <a href="#/" :class="{ active: isSel[0] }">
            <img src="assets/img/ymq/nav_home_nor.png" alt="" class="nor"/>
            <img src="assets/img/ymq/nav_home_sel.png" alt="" class="sel"/>
        </a>
        <a href="#/category"  :class="{ active: isSel[1] }">
            <img src="assets/img/ymq/nav_category_nor.png" alt="" class="nor"/>
            <img src="assets/img/ymq/nav_category_sel.png" alt="" class="sel"/>
        </a>
        <a href="javascript:;" @click="show(2)" :class="{ active: isSel[2] }">
            <img src="assets/img/ymq/nav_match_nor.png" alt="" class="nor"/>
            <img src="assets/img/ymq/nav_match_sel.png" alt="" class="sel"/>
        </a>
        <a href="#/carts"  :class="{ active: isSel[3],bag:true}">
            <img src="assets/img/ymq/nav_bag_nor.png" alt="" class="nor"/>
            <img src="assets/img/ymq/nav_bag_sel.png" alt="" class="sel"/>
            <span>{{num}}</span>
        </a>
        <a href="#/mine"  :class="{ active: isSel[4] }">
            <img src="assets/img/ymq/nav_me_nor.png" alt="" class="nor"/>
            <img src="assets/img/ymq/nav_me_sel.png" alt="" class="sel"/>
        </a>
    </footer>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                isSel:[false,false,false,false,false]
            }
        },
        props:['idx','num'],
        created:function () {
            this.isSel=[false,false,false,false,false];
            this.isSel[this.$props.idx]=true;
        },
        activated:function(){
            this.isSel=[false,false,false,false,false];
            this.isSel[this.$props.idx]=true;
        },
        methods:{
            show:function(idx){
                this.isSel=[false,false,false,false,false];
                this.isSel[idx]=true;
            }
        }
    }
</script>
<style scoped>
    /*footer*/
    footer{
        overflow: hidden;
    }
    footer a{
        float:left;
        width: 20%;
    }
   img{
        width: 100%;
        display: block;
    }
    a .sel{
        display: none;
    }
    .active .sel{
        display: block;
    }
    .active .nor{
        display: none;
    }
    .bag{
        position: relative;
    }
    .bag span{
        position: absolute;
        display: block;
        width: 100%;
        top:0.15rem;
        color:white;
        text-align: center;
        font-size:10px;
    }
</style>