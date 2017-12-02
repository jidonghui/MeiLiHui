<template>
	<div class="swiper-container bb">
		<div class="swiper-wrapper">
		    <div class="swiper-slide"><img src="assets/img/hl/banner1.png"/></div>
		    <div class="swiper-slide"><img src="assets/img/hl/banner2.jpg"/></div>
		    <div class="swiper-slide"><img src="assets/img/hl/banner3.jpg"/></div>
		    <div class="swiper-slide"><img src="assets/img/hl/banner4.jpg"/></div>
		    <div class="swiper-slide"><img src="assets/img/hl/banner5.jpg"/></div>
		</div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination aa"></div>   
    </div>
</template>

<script type="text/ecmascript-6">
	export default{
		mounted:function(){
//			import "../../build/assets/js/index.js";
         var mySwiper = new Swiper ('.bb', {
			 direction: 'horizontal',
			 loop: true,
			  autoplay:2000,
			  paginationClickable:true,
			  // 如果需要分页器
			  pagination: '.swiper-pagination',
			
		})  
	  }	
	}
</script>

<style scoped="scoped">
	.swiper-pagination-bullet-active{
		background:#000!important;
	}
	.bb {
	    width:100%;
	    height:2.12rem;
	}  
	.bb img{
		width:100%;
		height:1.91rem;
	}
	.aa{
		bottom:-0.23rem!important;
	}
</style>