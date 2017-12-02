<template>
    <header>
        购物车
        <div class="editor">
            <span @click="show">
                <span v-if="isEditor">编辑</span>
                <span v-else>完成</span>
            </span>
            <a href="javascript:;">
                <img src="assets/img/ymq/icon_share1.png" alt="">
            </a>
        </div>
    </header>
</template>
<script type="text/ecmascript-6">
    export default {
        data(){
            return{
                isEditor:true
            }
        },
        methods:{
            show:function(){
                this.isEditor=!this.isEditor;
                this.$emit("editor",this.isEditor);
            }
        }
    }
</script>
<style lang="scss" scoped>
    //header
    header{
        line-height: 0.6rem;
        font-size:18px;
        color:#181818;
        text-align: center;
        position: relative;
        .editor{
            position: absolute;
            right:0;
            top:0;
            font-size: 14px;
            &>span{
                padding:0 0.15rem;
            }
            a{
                display: inline-block;
                vertical-align: -0.03rem;
                img{
                    height: 0.21rem;
                    padding:0 0.15rem;
                }
            }
        }
    }

</style>