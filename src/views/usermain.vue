<template>
    <div class="usermain-page" id="">
	<div class="usermain-content">
		<div class="swiper-container-usermain">
		    <div class="swiper-wrapper">
				<identity
					:iden_2_id = "iden_2_id">
				</identity>
				<job
					:job_name = "job_name">
				</job>
				<!-- 如果没有子弹，会从shoot组件emit一个alert和msg内容，这里监听并调用自己的alert函数 -->
				<shoot
					:bullet_num = "bullet_num"
					:job_name = "job_name"
					@alert = 'alert'>
				</shoot>
				<skill
					:skill_num = "skill_num">
				</skill>
				<inclination
					:inclination = "incl_name">
				</inclination>
				<!-- 退出登陆slide -->
				<div class="swiper-slide" @click="logOutPopup">
					<div class="usermain-fun-entrence radius" style="background: linear-gradient(135deg, rgba(240,95,87,0.85), rgba(54,9,64,0.85)), center center ;background-size: cover;">
						<div class="usermain-fun-entrence-bttom">
							<div class="usermain-title" style="text-align: center">退出登录</div>
						</div>
					</div>
				</div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
	</div>
	<popup
		:message = logOutMsg
		@sure = "logOut"
		ref="popup">
	</popup>
	<popup
		:message = 'msg'
		:type = 'inform'
		ref="popupInform">
	</popup>

</div>
</template>

<style>
</style>

<script>
import identity from "./identity/components/identity"
import shoot from "./shoot/components/shoot"
import skill from "./skill/components/skill"
import inclination from "./inclination/components/inclination"
import job from "./job/components/job"
import popup from './common/popup'

export default {
	data() {
		return{
			iden_2_id: '', bullet_num: '', job_name:  '', incl_name: '', skill_num: '',
			logOutMsg: '确定要退出登陆吗',
			msg: '', inform: 'inform'
		}
	},
	components: {
		identity, 
		shoot,
		skill,
		inclination,
		job,
		status,
		popup
	},
	methods: {
		//请求相对稳定的值：第二身份id，职业名，倾向名，技能数量
		getStaticData() {
			this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=usermain',{withCredentials: true})
			.then(res=>{
				//用于检测用户有无绕过倾向选择阶段
				this.bullet_num = res.body.bullet_num
				this.iden_2_id = res.body.iden_2_id
				this.job_name = res.body.job_name
				this.incl_name = res.body.incl_name
				this.skill_num = res.body.skill_num
				}, res => {
					console.log(res)
			})
		},
		logOutPopup() {
			this.$refs.popup.show();
		},
		logOut() {
			this.$http.get(this.global.serverSrc + '/UserLogout.ashx',{withCredentials: true})
			.then(res=>{
					if(res.data == 'ok'){
						this.$router.push({name: 'login'})
					}
				}, res => {
					console.log(res)
			})
		},
		//从子组件传来的警告信息，使用popup的inform显示
		alert (msg) {
			this.msg = msg
			this.$refs.popupInform.show();
		}
	},

	mounted() {
		this.getStaticData();
		var usermain_swiper = new Swiper ('.swiper-container-usermain', {
			direction: 'horizontal', // 垂直切换选项
			loop: false, // 循环模式选项
			effect : 'coverflow',
			slidesPerView: 1.2,
			centeredSlides: true,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 60,
				modifier: 6,
				slideShadows : false,
			},		
			// 如果需要分页器
			pagination: {
				el: '.swiper-pagination',
			},
			})
	}
}

</script>


