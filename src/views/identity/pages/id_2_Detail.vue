<template>
<div class="user-id-page">
	<div class="backtoUsermain" @click="goBack"><i class="iconfont icon-jiantou_liebiaoxiangzuo"></i></div>
	<div class="backtoUsermain-right">
		<div class="id-choose-smalltitle">返回主页</div>
		<div class="id-choose-bigtitle">你的身份</div>
	</div>
	<div class="user-id-tips">翻动扑克牌查看你的身份→</div>
	<div class="swiper-container-user-id">
		<div class="swiper-wrapper">
			<div class="swiper-slide shadow radius">
				<img :src="cardSrc" class="user-id-pokecard">
			</div>
			<div class="swiper-slide shadow radius">
				<img src="../../../../static/img/id-pic1.jpg" class="passport-pic shadow">
				<div class="user-id-belowpassport">
					<div class="user-id-infoblock">
						<div class="user-id-num">{{ name }}</div>
						<div class="user-id-text">姓名</div>
					</div>
					<div class="user-id-infoblock">
						<div class="user-id-num">{{ iden_2_name }}</div>
						<div class="user-id-text">身份</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="user-id-description text-fake">{{ iden_2_desc }}</div>

	<div class="swiper-container-user-id-skill">
		<div class="swiper-wrapper">
			<id-skill-card
				v-for="skill in id_2_skill"
				:key = "skill.name"
				:name = "skill.name"
				:desc = "skill.desc">
			</id-skill-card>
		</div>
	</div>

</div>

</template>

<script>
import idSkillCard from '../components/idSkillCard'
export default {
    methods: {
        goBack: function() {
            this.$router.back(-1);
        }
	},
	data() {
		return{
			name: '', iden_2_name: '', iden_2_desc: '',src: '',
			id_2_skill: [
				{name: '', desc: ''}
			]
		}
	},
	computed: {
		cardSrc() {
			return './static/img_cards/' + this.src + '.jpg'
		}

	},
	mounted() {
		var skillchoose_swiper = new Swiper ('.swiper-container-user-id', {
			direction: 'horizontal', // 垂直切换选项
			loop: false, // 循环模式选项
			slidesPerView:1.05,
			centeredSlides: true,
			observer:true,
			effect: 'flip',
			loop : false,
		})
		var skillchoose_swiper = new Swiper ('.swiper-container-user-id-skill', {
			direction: 'horizontal', // 垂直切换选项
			loop: false, // 循环模式选项
			slidesPerView:1.25,
			centeredSlides: false,
			observer:true,
		});
		this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=id_2_detail',{withCredentials: true})
		.then(res=>{
				this.id_2_skill = res.body.id_2_skill
				this.name = res.body.name
				this.iden_2_name = res.body.iden_2_name
				this.iden_2_desc = res.body.iden_2_desc
				this.src = res.body.iden_2_card_src
			}, res => {
				console.log(res)
		})
	},
	components: {
		idSkillCard
	}
}
</script>



