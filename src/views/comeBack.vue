<template>
    <div class="comeback-page" id="">
	<div class="login-bg-area centerlize">
		<img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/login-bg1.png" id="login-bg-pic1">
		<img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/login-bg2.png" id="login-bg-pic2">
		<img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/login-bg3.png" id="login-bg-pic3">
	</div>
	<div class="comeback-content">
		<div class="comeback-content-inner centerlize">
			<div class="login-logo">
				<img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/sub-logo.png">
			</div>
			<div class="comeback-text">哟<br/><font class="red-D">{{ name }}</font><br/>回来了?<br/>那我们继续吧</div>
			<div class="login-inputbtn radius shadow mix-gray font-gray" @click="firstComeClickRouter">重温那个梦</div>
			<div class="login-inputbtn radius shadow mix-blue font-white" @click="usermainClickRouter">继续探索</div>
		</div>
	</div>
</div>
</template>

<style>
</style>

<script>
export default {
	data() {
		return{
			name: ''
		}
	},
	methods: {
		usermainClickRouter() {
			if (this.name){
				this.$router.push({name: 'usermain'})
			}
		},
		firstComeClickRouter() {
			if (this.name){
				this.$router.push({name: 'firstCome'})
			}
		},
		loginCheck() {
			this.$http.get( this.global.serverSrc + '/logincheck.ashx',{withCredentials: true})
			.then((res)=>{
                if(res.data == 0)
                {
                    this.$router.push({name: 'login'})		
                }
                else if (res.data == 'end')
                {
                    this.$router.push({name: 'result'})
                }
                else if (res.data == 'dead')
                {
                    this.$router.push({name: 'dead'})
				}
				else{
					this.name = res.data
				}
			})
		}
	},
	mounted() {
		this.loginCheck();
		
		$("#login-bg-pic1").velocity({
			translateY: "3vw"
		},
		{ 
			duration: 3000,
			loop: true 
		});
		$("#login-bg-pic2").velocity({
			translateY: "5vw"
		},
		{ 
			duration: 4000,
			loop: true 
		});
		$("#login-bg-pic3").velocity({
			translateY: "7vw"
		},
		{ 
			duration: 6000,
			loop: true
		});
	}   
}
</script>
