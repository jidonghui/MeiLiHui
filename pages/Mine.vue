<template>
	<div class="my">
		<main>
			<a href="#" class="header"><img src="assets/img/hl/icon_setting_black.png" alt="" /></a>
			<div class="me">
				<a href="#" class="pic">
					<img src="assets/img/hl/pic.png" alt=""/>
				</a>
				<p>only one</p>
				<a href="#">魅力值&nbsp;|&nbsp;0</a>
			</div>
			<div class="shop">
				<ul class="s1">
					<li>我的订单</li>
					<li><a href="#">查看全部订单&nbsp;</a><img src="assets/img/hl/icon_right_arrow.png"/></li>
				</ul>
				<ul class="s2">
					<li><img src="assets/img/hl/icon_waiting_for_pay.png" alt="" /><span>待付款</span></li>
					<li><img src="assets/img/hl/icon_waiting_for_deliver.png" alt="" /><span>待发货</span></li>
					<li><img src="assets/img/hl/icon_delivered.png" alt="" /><span>待收货</span></li>
					<li><img src="assets/img/hl/icon_customer_service.png" alt="" /><span>待评价</span></li>
					<li><img src="assets/img/hl/icon_return_and_after_sale.png" alt="" /><span>退货/售后</span></li>
				</ul>
				<ul class="s3">
					<li class="mei">魅力社</li>
					<li><img src="assets/img/hl/icon_rule_arrow_grey.png"/></li>
				</ul>
				<ul class="s3">
					<li>我的优惠券</li>
					<li><img src="assets/img/hl/icon_rule_arrow_grey.png"/></li>
				</ul>
				<ul class="s3">
					<li>我关注的品牌</li>
					<li><img src="assets/img/hl/icon_rule_arrow_grey.png"/></li>
				</ul>
				<ul class="s3">
					<li>我的地址</li>
					<li><img src="assets/img/hl/icon_rule_arrow_grey.png"/></li>
				</ul>
				<ul class="s3">
					<li>帮助</li>
					<li><img src="assets/img/hl/icon_rule_arrow_grey.png"/></li>
				</ul>
				<ul class="s3">
					<li>联系我们</li>
					<li><img src="assets/img/hl/icon_rule_arrow_grey.png"/></li>
				</ul>
			</div>
		</main>
		<common-footer :idx="4"></common-footer>
	</div>
</template>

<script type="text/ecmascript-6">
	import CommonFooter from "../components/commons/CommonFooter.vue";
	
    export default{
    	components:{
    		CommonFooter
    	},
    	methods:{
    		back:function(){
    			this.$router.go(-1);
    		}
    	}
    }
</script>

<style scoped="scoped">
	@import url("../assets/css/me.css");
	.my{
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #fff;
	}
</style>