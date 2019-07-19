<template>
    <div @click="usermainRouter"
        class="user-firstlogin-page" style="background-image: url(../static/img/firstlogin-bg1.jpg);">
        <div class="firstlogin-text-box centerlize">
        <div class="firstlogin-text-title">五王之乱规则解释</div>
        <div class="firstlogin-text-3">整个破冰游戏从X.XX的X:XX开始一直持续到X.XX的X:XX，目标完成度最高、表现最卓越的玩家将获得【破冰游戏赢家】称号，并在接下来的几天中拥有一定程度的优势。</div>
        <div class="firstlogin-text-3">每位玩家都有自己的【倾向】【身份】【职业】，【身份】和【倾向】决定了玩家的所属阵营和任务目标，而【身份】和【职业】决定了玩家的技能。每个玩家的【倾向】【身份】【职业】信息，将在【FE破冰游戏专用系统】的界面内告知所有玩家。</div>
        <div class="firstlogin-text-3">该游戏的硬通货为【子弹】，因为它拥有击杀某个玩家并使其出局的能力。被【子弹】成功击中的玩家会进入濒死状态，如果在一小时内没有被【医生】【医治】的话将会死亡出局。</div>
        <div class="firstlogin-text-3">拥有子弹的玩家可以执行【暗杀】【处决】和【子弹转赠】功能。包括上述功能在内的所有操作都可以在网页链接内的【FE破冰游戏专用系统】实现。自此之后QQ大群将开启匿名聊天功能，任何消息将可以匿名发送。</div>
        <div class="firstlogin-text-2">...点击屏幕开始五王之乱...</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inclChoose: ''
        }
    },
    methods: {
        usermainRouter() {
            if(this.inclChoose == 1){
                this.$router.push({name: 'inclChoose'})
            }
            else{
                this.$router.push({name: 'usermain'})
            }
        }
    },
    mounted() {
        this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=inclChoose',{withCredentials: true})
		.then(res=>{
                this.inclChoose = res.data           
			}, res => {
				console.log(res)
		})
    }
}
</script>

