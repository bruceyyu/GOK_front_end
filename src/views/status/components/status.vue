// 用于显示用户当前健康状态的组件
<template>
    <div @click="statusClickDetail">
        <template v-if="status == 0">
            <div class="state-btn bg-white state-healthy">
                <div class="state-text font-white">健康</div>
                <div class="state-smalltext font-white">正常</div>
            </div>
        </template>
        <template v-else>
            <div class="state-btn bg-white state-nearlydead">
                <div class="state-text font-white">濒死</div>
                <div class="state-smalltext font-white">{{status}}</div>
            </div>
        </template>
    </div> 
</template>

<script>
export default {
    props: ['status'],
    methods: {
        statusClickDetail() {
            this.$router.push({name: 'statusDetail'})
    }
    }
}
</script>
