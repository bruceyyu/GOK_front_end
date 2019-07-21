// usermain页面上显示技能的swiper slide，接受用户拥有技能的数量skill_num作为参数
<template>
    <div class="swiper-slide" @click="skillClickRouter">
        <div class="usermain-fun-entrence radius" style="background: linear-gradient(135deg, rgba(253,101,133,0.8), rgba(13,37,185,0.8)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/usermain-bg3.jpg) left top;background-size: cover;">
            <div class="usermain-icon"><i class="iconfont icon-kuaisugongzuoliu"></i></div>
            <div class="usermain-fun-entrence-bttom">
                <div class="usermain-title">技能</div>
                <div class="usermain-subtitle">{{skill_num}}个技能</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['skill_num'],
    methods: {
		skillClickRouter() {
			this.$router.push({name: 'skillChoose'})
		}
    }

}
</script>

