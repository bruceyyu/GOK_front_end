<template>
<div class="user-endpage-page">
    <div class="log-btn bg-white" @click="logOut">
        <i class="iconfont icon-dengchu"></i>
    </div>
	<div class="user-endpage-content centerlize">
		<div class="score-title">你的得分</div>
		<div class="score-content font-red">{{score}}</div>
		<div class="score-text">分数明细</div>
		<div class="score-text-line"></div>
        <div v-for="log in logs" :key="log.desc">
            <div class="score-text">{{log.desc}}</div>
        </div>
	</div>
</div>
</template>

<script>
export default {
    data() {
        return{
            score: '', 
            logs: [
                {desc: ''}
            ]
        }
    },
    methods: {
        loginCheck() {
            this.$http.get(this.global.serverSrc + '/LoginCheck.ashx',{withCredentials: true})
            .then((res)=>{
    //			console.log(res.data)
                if(res.data == 0)
                {
                    this.$router.push({name: 'login'})		
                }
                //如果游戏没有结束，退回transition
                if(res.data != 'end'){
                    this.$router.push({name: 'transition'})
                }
            })
        },
		logOut() {
			this.$http.get(this.global.serverSrc + '/UserLogout.ashx',{withCredentials: true})
			.then(res=>{
					if(res.data == 'ok'){
						this.$router.push({name: 'transition'})
					}
				}, res => {
					console.log(res)
			})
		}
    },

    mounted() {
        this.loginCheck()

        this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=result',{withCredentials: true})
		.then(res=>{
				this.score = res.body.score
				this.logs = res.body.logs
			}, res => {
				console.log(res)
		})
    }
}
</script>


