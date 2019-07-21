<template>
    <div class="shoot-page" id="">
        <div class="backtoUsermain"><i class="iconfont icon-jiantou_liebiaoxiangzuo" @click="goBack"></i></div>
        <div class="backtoUsermain-right">
            <div class="id-choose-smalltitle" v-if="job_name=='商人'">你有一种使用子弹的方式</div>
            <div class="id-choose-smalltitle" v-else-if="job_name=='赏金猎人'">你有两种使用子弹的方式</div>
            <div class="id-choose-smalltitle" v-else>你有三种使用子弹的方式</div>
            <div class="id-choose-bigtitle">选择你希望使用的方式</div>
        </div>
        <div @click="execClickRouter" v-if="job_name!=='商人' && job_name!=='赏金猎人'"
            class="id-choose-card radius" style="background: linear-gradient(135deg, rgba(240,95,87,0.85), rgba(54,9,64,0.85)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/shoot-bg1.jpg) center center;background-size: cover;">
            <div class="id-choose-card-icon" style=""><i class="iconfont icon-qiangzhi" style=""></i></div>
            <div class="id-choose-card-bttom">
                <div class="id-choose-card-title">处决</div>
                <div class="id-choose-card-subtitle">100%的成功率 剩余子弹{{bullet_num}}<br/>对方会知道你是开枪者</div>
            </div>
        </div>
        <div @click="assaClickRouter" v-if="job_name!=='商人'"
            class="id-choose-card radius" style="background: linear-gradient(135deg, rgba(173,169,150,0.8), rgba(26,26,26,0.8)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/shoot-bg2.jpg) right top ;background-size: cover;">
            <div class="id-choose-card-icon" style="margin-top: 2vw; margin-left: 2vw;"><i class="iconfont icon-hide" style="font-size: 10vw"></i></div>
            <div class="id-choose-card-bttom">
                <div class="id-choose-card-title">暗杀</div>
                <div class="id-choose-card-subtitle" v-if="job_name!=='赏金猎人'">50%的成功率 剩余子弹{{bullet_num}}<br/>对方不会知道你是开枪者</div>
                <div class="id-choose-card-subtitle" v-else>100%的成功率 剩余子弹{{bullet_num}}<br/>对方不会知道你是开枪者</div>
            </div>
        </div>
        <div @click="giveClickRouter"
            class="id-choose-card radius" style="background: linear-gradient(135deg, rgba(94,252,232,0.8), rgba(115,110,254,0.8)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/shoot-bg3.jpg) center center ;background-size: cover;">
            <div class="id-choose-card-icon" style="margin-top: 2vw; margin-left: 2vw;"><i class="iconfont icon-jiantou_zuoyouqiehuan" style="font-size: 10vw"></i></div>
            <div class="id-choose-card-bttom">
                <div class="id-choose-card-title">给予</div>
                <div class="id-choose-card-subtitle">将自己的子弹给予他人 <br/>剩余子弹{{bullet_num}}</div>
		</div>
	</div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            job_name: '', bullet_num: ''
        } 
    },
    methods: {
        goBack() {
            this.$router.back(-1);
        },
        execClickRouter() {
			this.$router.push({name: 'people', query: {method: '处决'}})
        },
        assaClickRouter() {
			this.$router.push({name: 'people', query: {method: '暗杀'}})
        },
        giveClickRouter() {
			this.$router.push({name: 'people', query: {method: '子弹转赠'}})
        }
    },
    mounted() {
        this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=shootChoose',{withCredentials: true})
		.then(res=>{
                this.job_name = res.body.job_name
                this.bullet_num = res.body.bullet_num
			}, res => {
				console.log(res)
		})
    }
}
</script>
