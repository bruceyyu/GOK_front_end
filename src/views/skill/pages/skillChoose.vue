// 选择技能的页面，请求user所有技能的json，并用v-for显示所有技能
<template>
    <div class="skill-choose-page" id="">
	<div class="backtoUsermain" @click="goBack"><i class="iconfont icon-jiantou_liebiaoxiangzuo"></i></div>
	<div class="backtoUsermain-right">
		<div class="id-choose-smalltitle">你有{{skill_total_num}}个技能，红色为主动技</div>
		<div class="id-choose-bigtitle">选择你希望执行的技能</div>
	</div>
	<!-- todo 组件化 v-for循环 -->
	<div class="swiper-container-skill-choose">
	    <div class="swiper-wrapper">
			<skill-card
				v-for = "skill in skill"
				:skill_name = "skill.name"
				:skill_desc = "skill.desc"
				:skill_active_on = "skill.active_on"
				:skill_limit_on = "skill.limit_on"
				:skill_limit_num = "skill.limit_num"
				:key = "skill.name">
			</skill-card>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	</div>

    </div>
</template>

<script>
import skillCard from "../components/skillCard"
export default {
    data() {
        return{
			skill: [
				{ name: '', active_on: '', limit_num: '', desc: '', limit_on:''},  
			],
        }
	},
	components: {
		skillCard
	},
	computed: {
		skill_total_num() {
			return this.skill.length;
		}
	},
    methods: {
        goBack: function() {
            this.$router.back(-1);
		}
    },
    mounted() {
        var skillchoose_swiper = new Swiper ('.swiper-container-skill-choose', {
		direction: 'horizontal', // 垂直切换选项
		loop: false, // 循环模式选项
		slidesPerView:1.05,
		centeredSlides: true,
		observer:true,
		// 如果需要分页器
		pagination: {
		  el: '.swiper-pagination',
		},
		});

		this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=skillChoose',{withCredentials: true})
		.then(res=>{
				this.skill = res.body.skill
			}, res => {
				console.log(res)
		})
    }
}
</script>


