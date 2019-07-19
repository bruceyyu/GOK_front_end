<template>
    <router-view></router-view>
</template>

<script>
export default {
    methods: {
        //请求session里的姓名，判断是否登陆
        loginCheck() {
            this.$http.get(this.global.serverSrc + '/LoginCheck.ashx',{withCredentials: true})
            .then((res)=>{
    //			console.log(res.data)
                if(res.data == 0){
                    this.$router.push({name: 'login'})		
                }else{
                    this.$router.push({name: 'usermain'})
                    //this.inclCheck();				
                }
            })
        },

        inclCheck() {
            this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=usermain',{withCredentials: true})
			.then(res=>{
				//用于检测用户有无绕过倾向选择阶段
				if(res.data == 'inclNone'){
					this.$router.push({name: 'inclChoose'})
				}
				else{
                    this.$router.push({name: 'usermain'})
				}
				}, res => {
					console.log(res)
			})
        }
    },
    mounted() {
        this.loginCheck()   

        let width = window.innerWidth
        let height = window.innerHeight
        let ratio = width / height
        if (ratio > 0.8){
            window.location = "/iframe.html"
        }
    }
}
</script>

