<template>
<div class="userstate-page" id="">
	<div class="backtoUsermain" @click="goBack"><i class="iconfont icon-jiantou_liebiaoxiangzuo"></i></div>
	<div class="backtoUsermain-right">
		<div class="id-choose-smalltitle">返回主页</div>
		<div class="id-choose-bigtitle">你的状态</div>
	</div>
    <template v-if="status==0">
        <div class="userstate-healthy">
            <div class="userstate-bigtext">健康</div>
            <div class="userstate-smalltext">你现在健康的很，只要不作死<br/>目测活到一百岁没啥问题</div>
        </div>
    </template>
    <template v-else>
        <div class="userstate-nearlydead">
            <div class="userstate-bigtext">濒死</div>
            <div class="userstate-smalltext">受伤程度: {{ statusAbs }}
            <br/>死亡倒计时: 
            {{ dietimeInMin }} 分钟
            </div>
        </div>
    </template>
	<div class="question">
		<div class="question-title">
			<div class="question-icon"><i class="iconfont icon-wenhao"></i></div>
			如果中枪了会怎么样？
		</div>
		<div class="question-answer">
			<div class="question-icon"><i class="iconfont icon-jiantou_xiangyou"></i></div>
			中枪之后，你会进入濒死状态，如果在30分钟内没有找到医生，将你治疗回健康状态的话，你就会GG了。医生的每次治疗将能够将你的受伤程度-1，减到0你将会恢复健康状态了。
		</div>
	</div>
	<div class="question">
		<div class="question-title">
			<div class="question-icon"><i class="iconfont icon-wenhao"></i></div>
			哪里有医生？
		</div>
		<div class="question-answer">
			<div class="question-icon"><i class="iconfont icon-jiantou_xiangyou"></i></div>
			各大派系、特别行动组能组织内都有医生，以及一些民众也是医生职业，只有他们能够治好你。
		</div>
	</div>
	<div class="question">
		<div class="question-title">
			<div class="question-icon"><i class="iconfont icon-wenhao"></i></div>
			死亡了以后会怎么样？
		</div>
		<div class="question-answer">
			<div class="question-icon"><i class="iconfont icon-jiantou_xiangyou"></i></div>
			那将是一篇虚无，就像是一次永远也醒不来的觉。
		</div>
	</div>
</div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
export default {
    data() {
        return {
            status: '',
			dietime: '',
			alive: ''
        }
    },
    computed: {
        statusAbs() {
            return Math.abs(this.status)
		},
		//将后台传来的秒数改成分钟
		dietimeInMin() {
			return Math.ceil(this.dietime / 60)
		}
    },
    methods: {
        goBack: function() {
            this.$router.back(-1);
		},
		getStatus() {
			this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=statusDetail',{withCredentials: true})
			.then(res=>{
					this.status = res.body.status
					//如果用户血量小于零，那么开始轮询请求死亡倒计时
					if (res.body.status < 0){
						this.getPolling();
					}
				}, res => {
					console.log(res)
			})
		},
		//向后台轮询请求countdown的剩余时间，每10秒请求一次
		getPolling() {
			let self = this
			this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=statusPolling',{withCredentials: true})
			.then(res=>{
					this.dietime = res.body.dietime
					//如果用户状态是死亡，直接推到死亡页面
					if(res.body.alive == 0) {
						this.$router.push({name: 'dead'})
					}
					self.timer=setTimeout(function(){
						self.getPolling();
					},10000)
				}, res => {
					console.log(res)
			})
		}
	},
    mounted() {
		this.getStatus();
	},
	beforeDestroy() {
        //页面销毁前 结束轮询
         if(this.timer)clearTimeout(this.timer);
    },
}
</script>

