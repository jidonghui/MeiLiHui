<template>
		<li @click="go">
    				<a href="javascript:;"><img :src="pro.pic"/></a>
    				<h5>{{pro.title}}</h5>
    				<a href="javascript:;">￥{{pro.price}}</a>
    				<a href="javascript:;">￥{{pro.oldprice}}</a>
    	</li>
</template>

<script type="text/ecmascript-6">
	export default{
		props:["idx","pro"],
		methods:{
		    go:function(){
		        this.$router.push("/category");
			}
		}
	}
</script>

<style scoped>
	
</style>