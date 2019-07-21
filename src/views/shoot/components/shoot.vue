// usermain页面上显示射击的swiper slide，接受用户拥有子弹数量bullet_num，职业名称job_name作为参数
<template>
    <div class="swiper-slide"  @click="shootClickRouter">
        <div class="usermain-fun-entrence radius" style="background: linear-gradient(135deg, rgba(107,115,255,0.8), rgba(0,13,255,0.8)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/usermain-bg2.jpg) left top;background-size: cover;">
            <div class="usermain-icon"><i class="iconfont icon-qiangzhi"></i></div>
            <div class="usermain-fun-entrence-bttom">
                <div class="usermain-title">使用子弹</div>
                <div class="usermain-subtitle">{{ bullet_num }}子弹</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['bullet_num', 'job_name'],
    methods: {
		shootClickRouter() {
            if (this.bullet_num > 0){
                this.$router.push({name: 'shootChoose'})
            }    
            else {
                alert("没有子弹不能使用子弹")
            }        
		}
	}
}
</script>

<style>

</style>



