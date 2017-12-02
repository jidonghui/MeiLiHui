<template>
	<ul class="nav">
    	<index-today :idx="index" :pro="n" v-for="(n,index) in indexToday"></index-today>
    </ul>
</template>

<script type="text/ecmascript-6">
	import IndexToday from "./IndexToday.vue";
	export default{
		props:["indexToday"],
		components:{
			IndexToday
		}
	}
</script>

<style scoped>
	
</style>