<template>
    <div class="check-all">
        <img @click="changeCheckState" v-show="check" class="check" src="assets/img/ymq/icon_cart_check_box.png" alt=""/>
        <img @click="changeCheckState" v-show="!check" class="uncheck" src="assets/img/ymq/icon_cart_uncheck_box.png" alt=""/>
        全选
        <div class="delete">删除</div>
        <div class="totalMoney" v-show="!editor">
            总价：<span>￥{{tn | test}}</span>
        </div>
    </div>
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
        methods:{
            changeCheckState:function(){
                this.check=!this.check;
                this.$emit("isCheckAll",this.check);
            },
        },
        props:["editor","tn",'changeCheck']
    }
</script>
<style lang="scss" scoped>
    //check-all
    .check-all {
        line-height: 0.52rem;
        width: 100%;
        font-size: 14px;
        background: #fff;
        border-top:1px solid #cccccc;
        img{
            padding:0 0.15rem;
            width: 0.2rem;
            vertical-align: middle;
            display: inline-block;
        }
        .delete{
            float:right;
            width: 0.94rem;
            text-align: center;
            background: #cccccc;
            color:white;
        }
        .totalMoney{
            float:right;
            font-size: 17px;
            font-weight: bold;
            margin-right: 0.1rem;
            span{
                color:#e22625;
            }
        }
    }

</style>