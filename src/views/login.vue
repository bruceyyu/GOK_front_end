<template>
    <div class="login-page" id="page_login">
	<div class="login-bg-area centerlize">
		<img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/login-bg1.png" id="login-bg-pic1">
		<img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/login-bg2.png" id="login-bg-pic2">
		<img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/login-bg3.png" id="login-bg-pic3">
	</div>
	<div class="login-content">
		<div class="login-content-inner centerlize">
			<div class="login-logo">
				<img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/sub-logo.png">
			</div>
			<div class="login-inputbar radius shadow">
				<div class="login-inputbar-icon"><i class="iconfont icon-gerentouxiang"></i></div>
				<input type="text" name="" class="login-inputbar-input" v-model="username">
			</div>
			<div class="login-inputbar radius shadow">
				<div class="login-inputbar-icon"><i class="iconfont icon-yuechi"></i></div>
				<input type="password" name="" class="login-inputbar-input" v-model="password">
			</div>
			<div class="login-inputbtn radius shadow mix-red" @click="login">登录</div>
			<div class="login-inputbtn radius shadow mix-gray font-gray">忘记帐号/密码</div>
			<div class="login-description">《五王之乱》高清重制版<br/>2019届FE全国商业峰会<br/>专用破冰游戏</div>
		</div>
	</div>
</div>
</template>

<style>
</style>

<script>
export default {
	mounted() {
		this.$http.get(this.global.serverSrc + '/LoginCheck.ashx',{withCredentials: true})
        .then((res)=>{
				// console.log(res.data)
				if(res.data == 0){
					this.$router.push({name: 'login'})		
				}else{
					this.$router.push({name: 'usermain'})					
				}
            })
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
		if(this.res) {
			alert(this.res)
		}
	},
	//绑定回车键，回车键登陆
	created(){
      let that = this;
      document.onkeydown = function (e) {
        let key = window.event.keyCode;
        if (key === 13){
          that.login();
        }
      }
	},
	data() {
		return {
			username: '',
			password: '',
			res: ''
		}
	},
	methods: {
		login() {
			if (this.username == "" || this.password == "") {
				alert ("请输入用户名或密码")
			} else {
				let data = {'username':this.username, 'password':this.password}
				this.$http.post(this.global.serverSrc + '/UserLogin.ashx', data, {emulateJSON: true,withCredentials: true})
				.then((res)=>{
//					console.log(res.data)
					if(res.data == 'error'){
						alert ("该用户不存在或密码错误")
					}else if(res.data == 'illegal'){
						alert ("请勿输入非法字符") 
					}else if(res.data == 'old'){
						this.$router.push({name:'comeBack'})
					}else if(res.data == 'new'){
						this.$router.push({name:'firstCome'})
					}
              	})
			}
		},
		adminRouter() {
			this.$router.push({name: 'adminlogin'})
		}
	}
}
</script>

