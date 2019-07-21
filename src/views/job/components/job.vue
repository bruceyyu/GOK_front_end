// usermain页面上显示职业的swiper slide，接受用户的职业名job_name作为参数
<template>
    <div class="swiper-slide" @click="jobClickRouter">
        <div class="usermain-fun-entrence radius" style="background: linear-gradient(135deg, rgba(146,255,192,0.85), rgba(0,38,97,0.85)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/usermain-bg5.jpg) left bottom;background-size: cover;">
            <div class="usermain-icon"><i class="iconfont icon-gongzuoliu"></i></div>
            <div class="usermain-fun-entrence-bttom">
                <div class="usermain-title">职业</div>
                <div class="usermain-subtitle">{{job_name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['job_name'],
    methods: {
		jobClickRouter() {
			this.$router.push({name: 'jobDetail'})
		}
    }
}
</script>

