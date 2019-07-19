<template>
<div class="user-preference-page">
	<div class="backtoUsermain" @click="goBack"><i class="iconfont icon-jiantou_liebiaoxiangzuo"></i></div>
	<div class="backtoUsermain-right">
		<div class="id-choose-smalltitle">返回主页</div>
		<div class="id-choose-bigtitle">倾向</div>
	</div>

	<div class="user-preference-block">
		<div class="swiper-slide shadow radius" 
			v-if="incl_name === '正义'"
			v-bind:style="{ background: 'linear-gradient(135deg, rgba(151,171,255,0.9), rgba(255,255,255,1) 80%),url(../static/img/preference1.jpg) left bottom', backgroundSize: 'cover'}">
			<div class="user-preference-internal centerlize">	
				<div class="user-preference-bigtitle">{{ incl_name }}</div>
				<!-- 因为有划掉的文字，需要标签<del>，所以使用v-html -->
				<div class="user-preference-description" v-html="incl_desc"></div>
				<div class="user-preference-tips" v-html="incl_condition"></div>
			</div>
		</div>
		<div class="swiper-slide shadow radius" 
			v-else-if="incl_name == '中立'"
			v-bind:style="{ background: 'linear-gradient(135deg, rgba(255,233,133,0.75), rgba(255,255,255,1) 80%),url(../static/img/preference2.jpg) left bottom', backgroundSize: 'cover'}">
			<div class="user-preference-internal centerlize">	
				<div class="user-preference-bigtitle">{{ incl_name }}</div>
				<div class="user-preference-description">{{ incl_desc }}</div>
				<div class="user-preference-tips" v-html="incl_condition"></div>
			</div>
		</div>
		<div class="swiper-slide shadow radius" 
			v-else-if="incl_name == '王牌'"
			v-bind:style="{ background: 'linear-gradient(135deg, rgba(255,233,133,0.75), rgba(255,255,255,1) 80%),url(../static/img/preference4.jpg) left bottom', backgroundSize: 'cover'}">
			<div class="user-preference-internal centerlize">	
				<div class="user-preference-bigtitle">{{ incl_name }}</div>
				<div class="user-preference-description">{{ incl_desc }}</div>
				<div class="user-preference-tips" v-html="incl_condition"></div>
			</div>
		</div>
		<div class="swiper-slide shadow radius" 
			v-else-if="incl_name == '邪恶'||'邪恶-应许派'||'邪恶-止戈派'||'邪恶-兄弟派'"
			v-bind:style="{ background: 'linear-gradient(135deg, rgba(186,70,80,0.9), rgba(255,255,255,1) 80%),url(../static/img/preference3.jpg) left bottom', backgroundSize: 'cover'}">
			<div class="user-preference-internal centerlize">	
				<div class="user-preference-bigtitle">{{ incl_name }}</div>
				<div class="user-preference-description">{{ incl_desc }}</div>
				<div class="user-preference-tips" v-html="incl_condition"></div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.back(-1);
		},
	},
	data() {
		return {			
				incl_name: '', incl_desc: '', incl_condition: ''
		}
	},
	mounted() {
		this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=inclDetail',{withCredentials: true})
		.then(res=>{
				this.incl_name = res.body.incl_name
				this.incl_desc = res.body.incl_desc
				this.incl_condition = res.body.incl_condition
			}, res => {
				console.log(res)
		})
	}
}
</script>

