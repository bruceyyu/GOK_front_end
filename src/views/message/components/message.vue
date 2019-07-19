<template>
    <div class="msg-btn bg-white" @click="msgClickRouter">
        <div class="msg-new-number" v-if="msg_count!=0">{{msg_count}}</div>
        <i class="iconfont icon-icon-msgs"></i>
    </div>
</template>

<script>
export default {
    props: ['msg_count'],
    methods: {
        msgClickRouter() {
            this.$router.push({name: 'messageDetail'})
        }
    }
}
</script>

