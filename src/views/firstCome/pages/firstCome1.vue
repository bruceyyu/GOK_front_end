<template>
<div @click="firstCome2Router"
    class="user-firstlogin-page" style="background-image: url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/firstlogin-bg1.jpg);">
    <div class="firstlogin-text-box centerlize">
        <div class="firstlogin-text" id="line1">201X.X.XX</div>
        <div class="firstlogin-text" id="line2">这天晚上</div>
        <div class="firstlogin-text" id="line3">你做了一个奇怪的梦</div>
        <div class="firstlogin-text" id="line4">在这个梦里</div>
        <div class="firstlogin-text" id="line5">你得到了一张扑克牌</div>
        <div class="firstlogin-img" id="line6"><img :src="cardSrc"></div>
        <div class="firstlogin-text" id="line7">以及站在你面前的“上帝”</div>
        <div class="firstlogin-text-2" id="line8">...点击屏幕继续...</div> 
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            src: ''
        }
    },
    computed: {
        cardSrc() {
			return './static/img_cards/' + this.src + '.jpg'
        }
    },
    methods: {
        firstCome2Router() {
            this.$router.push({name: 'firstCome2'})
        }
    },
    mounted() {
        $("#line1").velocity("fadeIn", {duration: 1200}),
        $("#line2").velocity("fadeIn", {delay: 800, duration: 1500}),
        $("#line3").velocity("fadeIn", {delay: 1600, duration: 1500}),
        $("#line4").velocity("fadeIn", {delay: 2400, duration: 1500}),
        $("#line5").velocity("fadeIn", {delay: 3200, duration: 1500}),
        $("#line6").velocity("fadeIn", {delay: 4000, duration: 1500}),
        $("#line7").velocity("fadeIn", {delay: 4800, duration: 1500}),
        $("#line8").velocity("fadeIn", {delay: 5600, duration: 2000}),
        
        this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=firstCome',{withCredentials: true})
		.then(res=>{
				this.src = res.body.src
			}, res => {
				console.log(res)
		})
    }
}
</script>

<style>
#line1 {
    opacity: 0;
}
#line2 {
    opacity: 0;
}
#line3 {
    opacity: 0;
}
#line4 {
    opacity: 0;
}
#line5 {
    opacity: 0;
}
#line6 {
    opacity: 0;
}
#line7 {
    opacity: 0;
}
#line8 {
    opacity: 0;
}
</style>

