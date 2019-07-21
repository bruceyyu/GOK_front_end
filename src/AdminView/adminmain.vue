<template>
<div class="manager-body">
    <!-- 顶部边栏 -->
<div class="topbar">
	<div class="logo"><img src="https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/logo-withtext.png"></div>
	<div class="account">
		<div class="exit">
            <div class="topbar-btn btn-green" @click="beginHandler" v-if="gameOn == false">开始游戏</div>
            <div class="topbar-btn" @click="pauseHandler" v-if="gameOn == true">暂停游戏</div>
            <div class="topbar-btn" @click="gunBanHandler" v-if="gameOn == true">禁枪期开始</div>
			<div class="maxheight setting-btn" @click="logout">
				<i class="iconfont icon-dengchu"></i>
			</div>

		</div>
	</div>
</div>
<div class="messagepart">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide swiper-no-swiping">
                <div class="messagepart-left"></div>
                <div class="messagepart-middle">
                    <div class="messagepart-card">
                        <div class="messagepart-title">待处理消息</div>
                        <div class="messagepart-content">
                            <div
                            v-for="msg in adminData.message"
                            :key="msg.id">
                                <div class="messagepart-block unfinished"  v-if="msg.is_processed == 0">
                                    <div class="messagepart-block-time">
                                        <div class="messagepart-block-up">{{msg.time}}</div>
                                    </div>
                                    <div class="messagepart-block-msg">{{msg.content}}</div>
                                    <div class="messagepart-block-target">
                                        <div class="messagepart-block-up">{{msg.name}}</div>
                                        <div class="messgepart-block-down">{{msg.qq}}</div>
                                    </div>
                                    <div class="messagepart-block-func">
                                        <div class="messagepart-block-btn" @click="openQQ(msg.qq)"><i class="iconfont icon-paper-plane1"></i></div>
                                        <div class="messagepart-block-btn" @click="processHandler(msg)"><i class="iconfont icon-trash-alt2"></i></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="messagepart-right"></div>
            </div>
            <div class="swiper-slide swiper-no-swiping">
                <div class="messagepart-left"></div>
                <div class="messagepart-middle">
                    <div class="messagepart-card">
                        <div class="messagepart-title">已处理消息</div>
                        <div class="messagepart-content">
                            <div
                            v-for="msg in adminData.message"
                            :key="msg.id">
                                <div class="messagepart-block" v-if="msg.is_processed == 1">
                                    <div class="messagepart-block-time">
                                        <div class="messagepart-block-up">{{msg.time}}</div>
                                    </div>
                                    <div class="messagepart-block-msg">{{msg.content}}</div>
                                    <div class="messagepart-block-target">
                                        <div class="messagepart-block-up">{{msg.name}}</div>
                                        <div class="messgepart-block-down">{{msg.qq}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</div>
<div class="datapart">
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.healthy_num}}</div>
        <div class="datapart-block-text">健康人数</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.dying_num}}</div>
        <div class="datapart-block-text">濒死人数</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.dead_num}}</div>
        <div class="datapart-block-text">死亡人数</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.doctor_skill}}</div>
        <div class="datapart-block-text">医生剩余技能总数</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.bullet_num}}</div>
        <div class="datapart-block-text">剩余子弹总数</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.max_bullet_num}}</div>
        <div class="datapart-block-text">子弹最大持有数</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.cop_num_alive}}/{{adminData.data.cop_num_total}}</div>
        <div class="datapart-block-text">特别行动组</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.y_gang_num_alive}}/{{adminData.data.y_gang_num_total}}</div>
        <div class="datapart-block-text">应许派</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.x_gang_num_alive}}/{{adminData.data.x_gang_num_total}}</div>
        <div class="datapart-block-text">兄弟派</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.z_gang_num_alive}}/{{adminData.data.z_gang_num_total}}</div>
        <div class="datapart-block-text">止戈派</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.normal_num_alive}}/{{adminData.data.normal_num_total}}</div>
        <div class="datapart-block-text">平民</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.cop_king_num_alive}}/{{adminData.data.cop_king_num_total}}</div>
        <div class="datapart-block-text">行动组-王</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.gang_king_num_alive}}/{{adminData.data.gang_king_num_total}}</div>
        <div class="datapart-block-text">应许派-王</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.normal_king_num_alive}}/{{adminData.data.normal_king_num_total}}</div>
        <div class="datapart-block-text">平民-王</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.spy_num_alive}}/{{adminData.data.spy_num_total}}</div>
        <div class="datapart-block-text">行动组卧底</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.detect_num_alive}}/{{adminData.data.detect_num_total}}</div>
        <div class="datapart-block-text">侦探</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.doctor_num_alive}}/{{adminData.data.doctor_num_total}}</div>
        <div class="datapart-block-text">医生</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.trader_num_alive}}/{{adminData.data.trader_num_total}}</div>
        <div class="datapart-block-text">商人</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.hunter_num_alive}}/{{adminData.data.hunter_num_total}}</div>
        <div class="datapart-block-text">赏金猎人</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.warrior_num_alive}}/{{adminData.data.warrior_num_total}}</div>
        <div class="datapart-block-text">武道家</div>
    </div>
    <div class="datapart-block">
        <div class="datapart-block-num">{{adminData.data.thief_num_alive}}/{{adminData.data.thief_num_total}}</div>
        <div class="datapart-block-text">窃贼</div>
    </div>
</div>

<div class="info">
    <table class="table-outer">
      <tr>
        <th>ID</th>
        <th>姓名</th>
        <th>存活</th>
        <th>职业</th>
        <th>第二身份</th>
        <th>第一身份</th>
        <th>倾向</th>
        <th>子弹</th>
        <th>技能值</th>
        <th>健康状态</th>
        <th>濒死倒计时</th>
        <th>上次操作时间</th>
      </tr>
      <template
       v-for="person in adminData.info"
        >
        <tr :key="person.id">
            <td>{{person.id}}</td>
            <td>{{person.name}}</td>
            <td v-if="person.alive == 1">存活</td>
            <td v-if="person.alive == 0">死亡</td>
            <td>{{person.job}}</td>
            <td>{{person.iden_2_name}}</td>
            <td>{{person.iden_1_name}}</td>
            <td>{{person.incl_name}}</td>
            <td>{{person.bullet_num}}</td>
            <td>{{person.skill_limit}}</td>
            <td>{{person.status}}</td>
            <td v-if="person.dietime == -1">N/A</td>
            <td v-else>{{person.dietime}} 秒</td>
            <td>{{person.time}}</td>
        </tr>
      </template>
    </table>
</div>

<div class="info history">
    <div class="table-outer">
        <div class="history-detail">
            <div 
            v-for="event in adminData.history"
            :key="event.id"
            >
            <div class="history-detail-time">{{event.time}}</div>
            <div class="history-detail-text">{{event.content}}</div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
    data() {
        return{
            adminData: {
                message: [{id: '', name: '', qq: '', content: '', is_processed: '', time: ''}, ],

                data: {healthy_num: '', dying_num: '', dead_num: '', doctor_skill: '', bullet_num: '', max_bullet_num: '', 
                cop_num_alive: '', cop_num_total: '', x_gang_num_alive: '', x_gang_num_total: '', 
                y_gang_num_alive: '', y_gang_num_total: '', z_gang_num_alive: '', z_gang_num_total: '',
                normal_num_alive: '', normal_num_total: '', cop_king_num_alive: '', cop_king_num_total: '', 
                gang_king_num_alive: '', gang_king_num_total: '', normal_king_num_alive: '', normal_king_num_total: '', 
                spy_num_alive: '', spy_num_total: '', doctor_num_alive: '', doctor_num_total: '', 
                warrior_num_alive: '', warrior_num_total: '', detect_num_alive: '', detect_num_total: '', 
                hunter_num_alive: '', hunter_num_total: '', thief_num_alive: '',  thief_num_total: '', 
                trader_num_alive: '',  trader_num_total: ''
                },

                info: [{id: '', name: '', alive: '', job: '', iden_2_name: '', iden_1_name: '', incl_name: '',
                bullet_num: '', skill_limit: '', status: '', dietime: '', time: ''}, ],

                history: [{id: '', time: '', content: ''}],
            },
            gameOn: false
        }
    },
    mounted() {
        var mySwiper = new Swiper ('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项
            loop: false, // 循环模式选项
            allowTouchMove: false,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        }) 
        $('.messagepart-block-msg').click(function(){
            var text=this;
            if(window.getSelection().toString().length>0){
                return false;
            }else{
                console.log(888);
                if (document.body.createTextRange) {
                        var range = document.body.createTextRange();
                        range.moveToElementText(text);
                        range.select();
                } else if (window.getSelection) {
                        var selection = window.getSelection();
                        var range = document.createRange();
                        range.selectNodeContents(text);
                        selection.removeAllRanges();
                } else {
                    alert("none");
                }
            }
            
        })

        $('.messagepart-block-down').click(function(){
            var text=this;
            if(window.getSelection().toString().length>0){
                return false;
            }else{
                console.log(888);
                if (document.body.createTextRange) {
                        var range = document.body.createTextRange();
                        range.moveToElementText(text);
                        range.select();
                } else if (window.getSelection) {
                    var selection = window.getSelection();
                    var range = document.createRange();
                    range.selectNodeContents(text);
                    selection.removeAllRanges();
                    selection.addRange(range);
                    
                } else {
                    alert("none");
                }
            }     
        })

        this.adminPolling();
        this.loginCheck();
    },

    methods: {
        openQQ(qq) {
            var str = 'tencent://message/?uin=' + qq + '&amp;Site=www.xxx.com&amp;Menu=yes'
            window.open(str);
        },
        //开始按钮
        beginHandler() {
            this.$http.get(this.global.serverSrc + '/admin/AdminMethodHandler.ashx?method=begin',{withCredentials: true})
			.then(res=>{
                if (res.data == "ok"){
                    gameOn = true
                    alert("GAME IS ON")
                }
				}, res => {
					console.log(res)
			})
        },
        //暂停按钮
        pauseHandler() {
            this.$http.get(this.global.serverSrc + '/admin/AdminMethodHandler.ashx?method=pause',{withCredentials: true})
			.then(res=>{
                if (res.data == "ok"){
                    gameOn = false
                    alert("游戏已暂停，请提醒选手")
                }
				}, res => {
					console.log(res)
			})
        },
        //禁枪期按钮
        gunBanHandler() {
            this.$http.get(this.global.serverSrc + '/admin/AdminMethodHandler.ashx?method=gunBan',{withCredentials: true})
			.then(res=>{
                if (res.data == "ok"){
                    alert("禁枪期已开始，请倒计时30分钟并提醒选手")
                }
				}, res => {
					console.log(res)
			})
        },
        //已处理按钮
        processHandler(msg) {
            let data = {'id':msg.id}
            this.$http.post(this.global.serverSrc + '/admin/AdminProcessHandler.ashx', data, {emulateJSON: true,withCredentials: true})
            .then((res)=>{
//					console.log(res.data)
                if(res.data == 'ok'){
                    //如果处理成功，从数组中先删除这条信息
                    this.adminData.message.splice(this.adminData.message.indexOf(msg),1);
                }
            })
        },
        //轮询请求
		adminPolling() {
			let self = this
			this.$http.get(this.global.serverSrc + '/admin/AdminDataQuery.ashx',{withCredentials: true})
			.then(res=>{
                    this.adminData.message = res.body.message
                    this.adminData.info = res.body.info
                    this.adminData.history = res.body.history
                    this.adminData.data = res.body.data
					self.timer=setTimeout(function(){
						self.adminPolling();
					},3000)
				}, res => {
					console.log(res)
			})
        },
        logout() {
            this.$http.get(this.global.serverSrc + '/admin/AdminLogout.ashx',{withCredentials: true})
			.then((res)=>{
                // console.log(res.data)
                if(res.data == 'ok'){
                    this.$router.push({name: 'adminlogin'})		
                }
            })
        },
		loginCheck() {
			this.$http.get(this.global.serverSrc + '/admin/LoginCheck.ashx',{withCredentials: true})
			.then((res)=>{
                // console.log(res.data)
                if(res.data == 0){
                    this.$router.push({name: 'adminlogin'})		
                }
            })
		}
    }
}
</script>

