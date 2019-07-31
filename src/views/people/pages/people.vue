<template>
    <div class="person-choose-page">
	<div class="backtoUsermain" @click="goBack"><i class="iconfont icon-jiantou_liebiaoxiangzuo"></i></div>
	<div class="backtoUsermain-right">
		<div class="id-choose-smalltitle">返回</div>
		<div class="id-choose-bigtitle">选择你要执行的对象</div>
	</div>
	<div class="person-choose-card-outer">
		<div
			v-for="person in people"
			@click="selected(person.name, person.id)"
			:class= "{'person-choose-card shadow radius mix-red font-white': selectedId == person.id,
					'person-choose-card shadow radius': selectedId !== person.id}"
			:key="person.id"
			:name="person.name"
			:id="person.id">
			{{person.name}}
		</div>
	</div>
	<div class="person-choose-btn-outer">
		<div class="person-choose-btn shadow radius mix-red font-white" @click="showPopup">确认</div>
		<div class="person-choose-btn shadow radius mix-gray" @click="goBack">取消</div>
	</div>
	<popup
	:message = "confirmMsg"
	@sure = "chosenPersonRouter"
	ref="popup"></popup>
	<popup
	:message = "msg"
	:type= "inform"
	ref="popupInform"></popup>

</div>

</template>

<script>
import popup from '../../common/popup'
export default {
	data() {
		return{
			people: [
				{name:'', id:''},
			],
			selectedId: '',
			selectedName: '',
			methodName: this.$route.query.method,
			inform: 'inform',
			msg: ''
		}
	},
	computed: {
		confirmMsg() {
			var msg = "确定对" + this.selectedName + "进行" + this.methodName + "?"
			return msg
		} 
	},
	methods: {
		goBack() {
            this.$router.back(-1);
		},
		selected(name, id) {
			this.selectedId = id
			this.selectedName = name
		},
		showPopup() {
			this.$refs.popup.show();
		},
		chosenPersonRouter() {
			this.$http.get(this.global.serverSrc + '/MethodHandler.ashx?method=' + this.methodName + '&user=' + this.selectedId, {withCredentials: true})
            .then(res=>{
				console.log(res)
				if (res.data.match('ok')) {
					this.$router.push({name:'usermain'})
				}
				else if (res.data == 'no'){
					this.msg = '当前不允许执行'
					this.$refs.popupInform.show();
				}
              	}, res=>{
					this.msg = '执行发生错误，请截图发给工程师'
					this.$refs.popupInform.show();
              	}
            );
		}
	},
	components: {
		popup
	},
	mounted() {
        this.$http.get(this.global.serverSrc + '/DataQuery.ashx?page=people',{withCredentials: true})
		.then(res=>{
				this.people = res.body.people
			}, res => {
				console.log(res)
		})
    }
}
</script>
