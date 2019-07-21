// usermain页面上显示身份的swiper slide，接受用户的第一身份ideneity1作为参数
<template>
  <div class="swiper-slide" @click="identityClickRouter">
    <div class="usermain-fun-entrence radius" style="background: linear-gradient(135deg, rgba(255,157,108,0.85), rgba(187,78,117,0.85)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/usermain-bg1.jpg) left bottom;background-size: cover;">
      <div class="usermain-icon"><i class="iconfont icon-ID"></i></div>
      <div class="usermain-fun-entrence-bttom">
        <div class="usermain-title">身份</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['iden_2_id'],
  methods: {
		identityClickRouter() {
			if(this.iden_2_id != 0){
				this.$router.push({name: 'identityChoose'})
      }
      else{
        this.$router.push({name: 'id_1_Detail'})
      }
		},
  }
}
</script>

