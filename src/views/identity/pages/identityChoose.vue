<template>
    <div class="id-choose-page" id="">
        <div class="backtoUsermain" @click="goBack"><i class="iconfont icon-jiantou_liebiaoxiangzuo"></i></div>
        <div class="backtoUsermain-right">
            <div class="id-choose-smalltitle">你有两个身份</div>
            <div class="id-choose-bigtitle">选择你要查看的身份</div>
        </div>
        <div class="id-choose-card radius" @click="id1ClickRouter"
            style="background: linear-gradient(135deg, rgba(253,110,106,0.8), rgba(255,198,0,0.8)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/id-choose-bg1.jpg) center center ;background-size: cover;">
            <div class="id-choose-card-icon" style=""><i class="iconfont icon-guanliyuansousuo" style=""></i></div>
            <div class="id-choose-card-bttom">
                <div class="id-choose-card-title">表面身份</div>
                <div class="id-choose-card-subtitle">别人侦查你时会显示表面身份</div>
                <div class="id-choose-card-subtitle">*你不拥有表面身份的技能</div>
            </div>
        </div>
        <div class="id-choose-card radius"  @click="id2ClickRouter"
            style="background: linear-gradient(135deg, rgba(173,169,150,0.8), rgba(26,26,26,0.8)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/id-choose-bg2.jpg) center center ;background-size: cover;">
            <div class="id-choose-card-icon" style=""><i class="iconfont icon-dunpaibaowei" style=""></i></div>
            <div class="id-choose-card-bttom">
                <div class="id-choose-card-title">隐藏身份</div>
                <div class="id-choose-card-subtitle">你的真实身份</div>
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
        id1ClickRouter() {
			this.$router.push({name: 'id_1_Detail'})
        },
        id2ClickRouter() {
			this.$router.push({name: 'id_2_Detail'})
        }

    }
}
</script>

