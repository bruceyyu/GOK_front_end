// usermain页面上显示倾向的swiper slide，接受用户的倾向inclination作为参数
<template>
    <div class="swiper-slide" @click="inclinationClickRouter">
        <div class="usermain-fun-entrence radius" style="background: linear-gradient(135deg, rgba(253,110,106,0.8), rgba(255,198,0,0.8)),url(../static/img/usermain-bg4.jpg) center center ;background-size: cover;">
            <div class="usermain-icon" style=" margin-top: 2vw;"><i class="iconfont icon-balance-scale" style="font-size: 16vw;"></i></div>
            <div class="usermain-fun-entrence-bttom">
                <div class="usermain-title">倾向</div>
                <div class="usermain-subtitle">{{inclination}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['inclination'],
    methods: {
        inclinationClickRouter() {
			this.$router.push({name: 'inclinationDetail'})
		}
    }
}
</script>

