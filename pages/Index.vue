<template>
	<div class="all">
		<index-header></index-header>
		<index-main ></index-main>
		<common-footer :idx="0"></common-footer>
	</div>
</template>

<script type="text/ecmascript-6">
	import IndexHeader from "../components/index/IndexHeader.vue";
	import IndexMain from "../components/index/IndexMain.vue";
	import CommonFooter from "../components/commons/CommonFooter.vue";
	
    export default{
    	components:{
    		IndexHeader,
    		IndexMain,
    		CommonFooter
    	}
    }
</script>

<style scoped="scoped">
	@import url("../assets/css/index.css");
	@import "../assets/css/public1.css";
	.all{
		display: flex;
		flex-direction: column;
		background: #fff;
		height: 100%;
	}
</style>