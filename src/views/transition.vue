<template>
    <router-view></router-view>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
    data() {
        return{
            state: '',
            isLogin: ''
        }
    },
    methods: {
        //请求session里的姓名，判断是否登陆，并且保存isLogin变量用于结算跳转判断
        loginCheck() {
            this.$http.get(this.global.serverSrc + '/LoginCheck.ashx',{withCredentials: true})
            .then((res)=>{
    //			console.log(res.data)
                if(res.data == 0)
                {
                    this.$router.push({name: 'login'})		
                    this.isLogin = 0
                }
                else if (res.data == 'end')
                {
                    this.$router.push({name: 'result'})
                    this.isLogin = 1
                }
                else if (res.data == 'dead')
                {
                    this.$router.push({name: 'dead'})
                    this.isLogin = 1
                }
                else
                {
                    this.$router.push({name: 'usermain'})
                    this.isLogin = 1	
                }
            })
        },

        statePolling() {
            let self = this
			this.$http.get(this.global.serverSrc + '/StateQuery.ashx',{withCredentials: true})
			.then(res=>{
                    // console.log(res)
                    this.state = res.data
                    if (res.data == -2 && this.isLogin == 1){
                        this.$router.push({name:'result'})
                    }
					self.timer=setTimeout(function(){
						self.statePolling();
					},5000)
				}, res => {
					console.log(res)
			})
        }
    },
    beforeDestroy() {
        //页面销毁前 结束轮询
         if(this.timer)clearTimeout(this.timer);
    },
    mounted() {
        this.loginCheck()   
        this.statePolling()

        let width = window.innerWidth
        let height = window.innerHeight
        let ratio = width / height
        if (ratio > 0.8){
            window.location = "/iframe.html"
        }
    }
}
</script>

