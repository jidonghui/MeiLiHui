<template>
	<ul class="time">
		<li id="hour">0{{hour}}</li>:
		<li id="miutes" >{{miutes}}</li>:
		<li id="seconds">{{seconds}}</li>
    </ul>
</template>

<script type="text/ecmascript-6">
	export default{
	    data(){
	       return{
               hour:3,
               miutes:42,
               seconds:60,
               myTimes:null
		   }

		},
		mounted:function(){
                //倒计时
                var myTimes;
                clearInterval(myTimes);
             let timyTimesme = setInterval(()=>{
                this.seconds--;
                 if(this.seconds==0){
                     this.seconds=60;
                     this.miutes--;
                 }else if(this.miutes==0){
                     this.miutes=60;
                     this.hour--;
                 }
            },1000)

                }


	}
</script>

<style scoped="scoped">
	
</style>

