<template>
	<div id="main">
    	<!--轮播图-->
    	<div class="slider">
    		<common-slider></common-slider>
    	</div>
    	<div class="pic1">
    		<img src="assets/img/hl/20171110191828234.jpg"/>
    	</div>
    	<div class="pic2">
    		<img src="assets/img/hl/20171111015933494.jpg"/>
    	</div>
    	<div class="te">
    		<div class="mid">
    		    <h2>特色会场</h2>
    		    <p>哪些老黄历告诉你的</p>
    		</div>
    	</div>
    	<div class="t1">
    		<div class="t1_left">
    			<h5>宜满目繁华3折起</h5>
    		    <h6>DOLCE&GABBANA</h6>
    		</div>
    		<div class="t1_right"><img src="assets/img/hl/t1.png"/></div>
    	</div>
    	<ul class="t3">
			<li>
				<p>宜撑满鞋柜</p>
				<span>1折起</span>
				<a href="#"><img src="assets/img/hl/P.png"/></a>
				<span>STYLETORE FERRAGAMO</span>
			</li>
			<li>
				<p>宜日日优雅</p>
				<span>1折起</span>
				<a href="#"><img src="assets/img/hl/P2.png"/></a>
				<span>GEGINA</span>
			</li>
			<li>
				<p>宜秋冬也摩登</p>
				<span>1.4折起</span>
				<a href="#"><img src="assets/img/hl/P3.png"/></a>
				<span>AAAAAAAA</span>
			</li>
			<li>
				<p>宜做御寒战斗机</p>
				<span>3.8折起</span>
				<a href="#"><img src="assets/img/hl/P4.png"/></a>
				<span>AAAA HHHHH</span>
			</li>
			<li>
				<p>宜双11直降</p>
				<span>1.8折起</span>
				<a href="#"><img src="assets/img/hl/P4.png"/></a>
				<span>美妆专场</span>
			</li>
			<li>
				<p>宜恋上你的床</p>
				<span>1折起</span>
				<a href="#"><img src="assets/img/hl/P5.png"/></a>
				<span>YOLANNA</span>
			</li>
			<li>
				<p>宜投资经典</p>
				<span>3.8折起</span>
				<a href="#"><img src="assets/img/hl/P6.png"/></a>
				<span>BUQQEKJD</span>
			</li>
			<li>
				<p>宜为所欲为围</p>
				<span>5.1折起</span>
				<a href="#"><img src="assets/img/hl/P7.png"/></a>
				<span>GUCCL</span>
			</li>
			<li>
				<p>宜囤美白丸</p>
				<span>3.8折起</span>
				<a href="#"><img src="assets/img/hl/P8.png"/></a>
				<span>POLA</span>
			</li>
		</ul>
    	<div class="te">
    		<div class="mid">
    		    <h2>类目会场</h2>
    		    <p>所有商品都在这里找</p>
    		</div>
    	</div>
    	<ul class="t4">
    		<li>
    			<img src="assets/img/hl/t4.png"/>
    		</li>
    		<li>
    			<img src="assets/img/hl/t4_2.png"/>
    		</li>
    		<li>
    			<img src="assets/img/hl/t4_3.png"/>
    		</li>
    		<li>
    			<img src="assets/img/hl/t4_4.png"/>
    		</li>
    		<li>
    			<img src="assets/img/hl/t4_2.png"/>
    		</li>
    		<li>
    			<img src="assets/img/hl/t4_2.png"/>
    		</li>
    		<li>
    			<img src="assets/img/hl/t4_4.png"/>
    		</li>
    		<li>
    			<img src="assets/img/hl/t4_2.png"/>
    		</li>
    		<li>
    			<img src="assets/img/hl/t4_2.png"/>
    		</li>
    	</ul>
    	<div class="t5">
    		<div class="t5_left">
    			<h3>今日疯抢</h3>
    			<div class="dao">
    				<p>距离进场结束还有&nbsp;</p>
    				<common-dao-ji-shi></common-dao-ji-shi>
    			</div>
    		</div>
    		<a href="#" class="t5_right"><span>查看全部</span><img src="assets/img/hl/icon_triangle_black.png" alt="" /></a>
    	</div>
    	<div class="t6">
    		<index-today-list :indexToday="indexToday"></index-today-list>
    	</div>
    	<div class="t7">
    		<h5>新人专区</h5>
    		<h6>SAJASKJJDSKJDFKS</h6>
    	</div>
    	<div class="t8">
    		<img src="assets/img/hl/t7.png"/>
    	</div>
    	<div class="t7">
    		<h5>今日上新</h5>
    		<h6>SAJASKJJDSKJDFKS</h6>
    	</div>
    	<div class="t9">
    		<img src="assets/img/hl/20171108175531765.jpg" alt="" />
    		<div class="t9_zzc">
    			<p>IT MAMAMMAM</p>
    			<p>韩国品质女装（韩国专场）</p>
    			<p>1.7折起</p>
    		</div>
    	</div>
    	<div class="t9">
    		<img src="assets/img/hl/20171108175506545.jpg" alt="" />
    		<div class="t9_zzc">
    			<p>IT MAMAMMAM</p>
    			<p>意式经典女士鞋履</p>
    			<p>1.7折起</p>
    		</div>
    	</div>
    	<div class="t9">
    		<img src="assets/img/hl/20171108151124208.jpg" alt="" />
    		<div class="t9_zzc">
    			<p>IT MAMAMMAM</p>
    			<p>羽绒服女装战场</p>
    			<p>3.7折起</p>
    		</div>
    	</div>
    	<div class="t9">
    		<img src="assets/img/hl/20171020192649209.jpg" alt="" />
    		<div class="t9_zzc">
    			<p>秋季焕肤保湿</p>
    			<p>赶走干燥肌</p>
    			<p>3.7折起</p>
    		</div>
    	</div>
    </div>
</template>

<script type="text/ecmascript-6">
	import IndexApi from "../../apis/IndexApi.js";
	import CommonSlider from "../commons/CommonSlider.vue";
	import CommonDaoJiShi from "../commons/CommonDaoJiShi.vue";
	import IndexTodayList from "./IndexTodayList.vue";
	export default{
		data(){
    		return{
    			indexToday:[]
    		}
    	},
		components:{
			CommonSlider,
			CommonDaoJiShi,
			IndexTodayList
		},
		created:function(){
    		this.initData();
    	},
    	methods:{
    		initData:function(){
    			IndexApi.getIndex((data)=>{
    				this.indexToday=data;
    				console.log(this.indexToday);
    			})
    		}
    	}
	}
</script>

<style scoped>
	
</style>