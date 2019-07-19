<template>
<keep-alive>
    <div class="user-job-page" id="">
		<div class="backtoUsermain" @click="goBack"><i class="iconfont icon-jiantou_liebiaoxiangzuo"></i></div>
		<div class="backtoUsermain-right">
			<div class="id-choose-smalltitle">返回主页</div>
			<div class="id-choose-bigtitle">你的职业</div>
		</div>
		<div class="user-job-pic">
			<img :src="src">
			<div class="user-job-pic-title">{{job_name}}</div>
			<div class="user-job-pic-text">{{job_desc}}</div>
		</div>
		<div class="user-job-skill"
			v-for="skill in job_skill"
			:key="skill.name">
			<!-- <template> -->
			<div class="user-job-skill-title">【 {{ skill.name }} 】</div>
			<div class="user-job-skill-content">{{ skill.desc }}</div>
		</div>
    </div>
</keep-alive>
</template>

<script>
export default {
    data() {
        return {
            job_name: '', job_desc: '', src: '',
            job_skill: [
                {name: '', desc: ''},
            ]
        }
    },
    methods: {
        goBack: function() {
            this.$router.back(-1);
        }
    },
    mounted() {
        this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=jobDetail',{withCredentials: true})
		.then(res=>{
				this.job_name = res.body.job_name
				this.job_desc = res.body.job_desc
				this.src = res.body.src
				this.job_skill = res.body.job_skill
			}, res => {
				console.log(res)
		})
    }
}
</script>

