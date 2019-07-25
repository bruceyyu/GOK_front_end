<template>
    <div class="user-msg-page">
	<div class="backtoUsermain" @click="goBack"><i class="iconfont icon-jiantou_liebiaoxiangzuo"></i></div>
	<div class="backtoUsermain-right">
		<div class="id-choose-smalltitle">返回主页</div>
		<div class="id-choose-bigtitle">消息</div>
	</div>
	<div class="user-msg-outer">
		<template		
		v-for="msg in message"
		:id = "msg.id">
			<div 
			:class= "{'user-msg reading': readingId == msg.id,
					'user-msg read': readingId !== msg.id}"
			:key="msg.id" 
			v-if="msg.is_read"
			@click="readingUnfold(msg.id, msg.is_read)">
				<div class="user-msg-title">
					{{msg.time}}
					{{msg.title}}
				</div>
				<div class="user-msg-icon"><i class="iconfont icon-xuanzeqizhankai"></i></div>
				<div class="user-msg-content">{{msg.content}}</div>
			</div>

			<div 
			:class= "{'user-msg reading': readingId == msg.id,
					'user-msg': readingId !== msg.id}"
			:key="msg.id" 
			v-else
			@click="readingUnfold(msg.id, msg.is_read)">
				<div class="user-msg-title">
					{{msg.time}}
					{{msg.title}}
				</div>
				<div class="user-msg-icon"><i class="iconfont icon-xuanzeqizhankai"></i></div>
				<div class="user-msg-content">{{msg.content}}</div>
			</div>
		</template>
	</div>

</div>
</template>

<script>
export default {
	data() {
		return {
			readingId : '',
			message: [
				{id: '', is_read: '', title:'', content:'', time:''},
			]
		}
	},
	mounted() {
		this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=messageDetail',{withCredentials: true})
		.then(res=>{
				this.message = res.body.message
			}, res => {
				console.log(res)
		})

	},
    methods: {
        goBack() {
            this.$router.back(-1);
		},
		readingUnfold(id, is_read) {
			//如果展开此消息，则清空readingId
			if(this.readingId == id) this.readingId = 0
			//如果展开的不是此消息，则把readingId改为此消息的id
			else
			{
				this.readingId = id
			}
			//如果消息为未读消息，则去后端修改is_read为已读
			if (is_read == 0){
				this.$http.post(this.global.serverSrc + '/MessageReadHandler.ashx',
					{msg_id:id}, {emulateJSON: true,withCredentials: true})
				.then(res=>{
					this.message = res.body.message
					}, res => {
					console.log(res)
				})
			}
		}
    }
}
</script>

