<template>
    <body class="body manager-body">
	<div class="login-bg" style="background: linear-gradient(45deg, rgba(60,63,72,0.99), rgba(74,88,101,0.99));background-size: cover;">
		<div class="login-outer">
			<div class="login-left">
				<div class="login-left-bgarea">
				</div>
				<div class="login-left-bgcover">
					<div class="login-left-logo"></div>
					<div class="login-left-title">FE定制破冰系统</div>
					<div class="login-left-title2">五王之乱</div>
				</div>
			</div>
			<div class="login-right">
				<div class="login-right-subtitle">登录</div>
				<div class="login-right-title">管理员系统</div>
				<div id="temp-account" class="longin-right-content">
					<div class="login-input-box">

					</div>
					<div class="login-input-box">
						<div class="login-input-title">用户名</div>
						<div class="login-input-fake">
							<div class="login-input-icon"><i class="iconfont icon-gerentouxiang"></i></div>
							<input type="" name="" class="login-input-real" v-model="username">
						</div>
					</div>
					<div class="login-input-box">
						<div class="login-input-title">密码</div>
						<div class="login-input-fake">
							<div class="login-input-icon"><i class="iconfont icon-dunpaibaowei"></i></div>
							<input type="password" name="" class="login-input-real" v-model="password">
						</div>
					</div>
				</div>

				<div class="login-input-btn" @click="login">登录</div>
			</div>
		</div>
	</div>
</body>
</template>

<script>
export default {
    data() {
        return {
            username: '', password: ''
        }
	},
	mounted() {
		this.loginCheck();
	},
    methods: {
		login() {
			if (this.username == "" || this.password == "") {
				alert ("请输入用户名或密码")
			} else {
				let data = {'username':this.username, 'password':this.password}
				this.$http.post(this.global.serverSrc + '/admin/AdminLogin.ashx', data, {emulateJSON: true,withCredentials: true})
				.then((res)=>{
//					console.log(res.data)
					if(res.data == 'error'){
						alert ("该用户不存在或密码错误")
					}else if(res.data == 'illegal'){
						alert ("请勿输入非法字符") 
					}else{
						this.$router.push({name: 'adminmain'})
					}
              	})
			}
		},
		loginCheck() {
			this.$http.get(this.global.serverSrc + '/admin/LoginCheck.ashx',{withCredentials: true})
			.then((res)=>{
                // console.log(res.data)
                if(res.data == 0){
                    this.$router.push({name: 'adminlogin'})		
				}
				else{
					this.$router.push({name: 'adminmain'})
				}
            })
		}
    }
}
</script>

