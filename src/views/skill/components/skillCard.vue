<template>
        <div class="swiper-slide" v-if="skill_active_on" @click="skillCardClick">
            <div class="skill-card radius" style="background: linear-gradient(135deg, rgba(255,157,108,0.85), rgba(187,78,117,0.85)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/usermain-bg1.jpg) left bottom;background-size: cover;">
            <!-- <div class="skill-card-icon"><i class="iconfont icon-ID"></i></div> -->
            <div class="skill-card-bttom">
                <div class="skill-card-title">{{skill_name}}</div>
                <div class="skill-card-smalltitle">{{skill_desc}}</div>
                <div class="skill-card-smalltitle" v-if="skill_limit_on">[技能值剩余:{{skill_limit_num}}]</div>
            </div>
            </div>
        </div>
        <div class="swiper-slide" v-else>
            <div class="skill-card radius" style="background: linear-gradient(135deg, rgba(173,169,150,0.8), rgba(26,26,26,0.8)),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/usermain-bg1.jpg) left bottom;background-size: cover;">
            <!-- <div class="skill-card-icon"><i class="iconfont icon-ID"></i></div> -->
            <div class="skill-card-bttom">
                <div class="skill-card-title">{{skill_name}}</div>
                <div class="skill-card-smalltitle">{{skill_desc}}</div>
                <div class="skill-card-smalltitle" v-if="skill_limit_on">[技能值剩余:{{skill_limit_num}}]</div>
            </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['skill_name', 'skill_desc', 'skill_limit_num', 'skill_active_on', 'skill_limit_on'],
    methods: {
        skillCardClick() {
            if (this.skill_active_on && this.skill_limit_num){
                this.$router.push({name: 'people', query: {method: this.skill_name}})  
            }
            if (this.skill_active_on && this.skill_limit_num <= 0) {
                alert ("没有技能点不能发动技能")
            }
        }
    }
}
</script>

