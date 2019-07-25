<template>
<div>
    <message
        :msg_count = "msg_count">
    </message>
    <status
        :status = "status">
    </status>
    <transition name="fade">
       <router-view></router-view>
    </transition>
    <popup ref="popup"></popup>
</div>
</template>

<script>
import popup from './common/popup'
import message from './message/components/message'
import status from "./status/components/status"
import { clearTimeout, setTimeout } from 'timers';
export default {
    data() {
        return {
            show: false,
            status: '', msg_count: '', is_alive: ''
        }
    },
    created() {
        this.getPolling()
	},
    mounted() {
        //用于检测用户有无绕过倾向选择阶段
        this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=usermain',{withCredentials: true})
			.then(res=>{
				if(res.data == 'inclNone'){
					this.$router.push({name: 'inclChoose'})
				}
				else{
                    this.$router.push({name: 'usermain'})
				}
				}, res => {
					console.log(res)
			})
        if (this.show){
            this.pop()
        };	
    },
	beforeDestroy() {
        //页面销毁前 结束轮询
         if(this.timer)clearTimeout(this.timer);
    },
    
    methods: {
        pop() {
            this.$refs.popup.show();  
        },
        //轮询请求容易变化的值：status和子弹数
		getPolling() {
			let self = this
			this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=mainPolling',{withCredentials: true})
			.then(res=>{
                    this.status = res.body.status
                    this.msg_count = res.body.msg_count
                    //如果用户已经死亡
                    if(res.body.is_alive == 0) {
                        this.$router.push({name: 'dead'})
                    }
                    //如果游戏已经结束（state=-2）
                    if(res.body.state == -2) {
                        this.$router.push({name: 'result'})
                    }
					self.timer=setTimeout(function(){
						self.getPolling();
					},3000)
				}, res => {
					console.log(res)
			})
		}
    },
    components: {
        popup,
        status,
        message,
    }

}
</script>

