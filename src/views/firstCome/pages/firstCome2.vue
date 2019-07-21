<template>
<div @click="firstCome3Router"
    class="user-firstlogin-page" style="background-image: url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/firstlogin-bg2.jpg);">
    <div class="firstlogin-text-box bottomlize">
    <div class="firstlogin-text" id="line1">我在你们这些凡人中</div>
    <div class="firstlogin-text" id="line2">有五张牌是我钦点的王</div>
    <div class="firstlogin-text" id="line3">只要他们能够成功汇合</div>
    <div class="firstlogin-text" id="line4">并完成我留下的任务</div>
    <div class="firstlogin-text" id="line5">就将统领这个世界</div>
    <div class="firstlogin-text" id="line6">游戏，将从凡人阳历X.XX的X:XX开始</div>
    <div class="firstlogin-text-2" id="line7">...点击屏幕继续...</div>
    </div>
</div>
</template>

<script>
export default {
    methods: {
        firstCome3Router() {
            this.$router.push({name: 'firstCome3'})
        }
    },
    mounted() {
        $("#line1").velocity("fadeIn", {duration: 1200}),
        $("#line2").velocity("fadeIn", {delay: 800, duration: 1500}),
        $("#line3").velocity("fadeIn", {delay: 1600, duration: 1500}),
        $("#line4").velocity("fadeIn", {delay: 2400, duration: 1500}),
        $("#line5").velocity("fadeIn", {delay: 3200, duration: 1500}),
        $("#line6").velocity("fadeIn", {delay: 4000, duration: 1500}),
        $("#line7").velocity("fadeIn", {delay: 4800, duration: 2000})
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
</style>


