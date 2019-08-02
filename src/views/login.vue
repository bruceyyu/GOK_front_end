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
			<div class="login-inputbtn radius shadow mix-gray font-gray" @click="openQQ">忘记帐号/密码</div>
			<div class="login-description">《五王之乱》高清重制版<br/>2019届FE全国商业峰会<br/>专用破冰游戏</div>
		</div>
	</div>
	<popup
		:message = "msg"
		:type = "inform"
		ref="popupInform">
	</popup>
</div>
</template>

<style>
</style>

<script>
import popup from './common/popup'
export default {
	mounted() {
		this.$http.get(this.global.serverSrc + '/LoginCheck.ashx',{withCredentials: true})
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
                else
                {
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
			msg: '',
			inform: 'inform'
		}
	},
	methods: {
        openQQ() {
			this.msg = '请加五王之乱小助手的qq：1062665066'
			this.$refs.popupInform.show();
        },
		login() {
			if (this.username == "" || this.password == "") 
			{
				this.msg = '请输入账号或者密码'
				this.$refs.popupInform.show();
			} 
			else 
			{
				let data = {'username':this.username, 'password':this.password}
				this.$http.get(this.global.serverSrc + '/UserLogin.ashx?username=' + this.username + '&password=' + this.password,{withCredentials: true})
				.then((res)=>{
				if (res.data == 'error') {
					this.msg = '账号不存在或密码错误'
					this.$refs.popupInform.show();
				}
				else if (res.data == 'illegal') {
					this.msg = '请勿输入非法字符'
					this.$refs.popupInform.show();
				}
				else {
					if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
					if (!window.parent) window.location.href = this.global.serverSrc + '/weixinLogin.html?username=' + encodeURI(this.username) + '&password=' + encodeURI(this.password);
					else window.parent.location.href = this.global.serverSrc + '/weixinLogin.html?username=' + encodeURI(this.username) + '&password=' + encodeURI(this.password);
					}
					else {
					if (res.data == 'old')
					{
						this.$router.push({name:'comeBack'})
					}
					else if(res.data == 'new')
					{
						this.$router.push({name:'firstCome'})
					}
					else if(res.data == 'end')
					{
						this.$router.push({name:'result'})
					}
					else if(res.data == 'dead')
					{
						this.$router.push({name:'dead'})
					}
					}
				}
				})
			}
		},
	},
	components: {
		popup
	}
}
</script>

