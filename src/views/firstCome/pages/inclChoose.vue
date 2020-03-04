<template>
    <div class="user-preference-page">
	<div class="id-choose-bigtitle" align="center">你是平民，第一次登陆请选择倾向</div>
	<div class="swiper-container-user-preference">
		<div class="swiper-wrapper">
			<div class="swiper-slide shadow radius" style="background: linear-gradient(135deg, rgba(151,171,255,0.9), rgba(255,255,255,1) 80%),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/preference1.jpg) left bottom;background-size: cover;">
				<div class="user-preference-internal centerlize">	
					<div class="user-preference-bigtitle">正义</div>
					<div class="user-preference-description">你一直觉得自己三观够正，这个世界需要平等、秩序、公平、正义，你希望维护这个世界目前的规则，那要比听从某个神棍的伪科学来的更理智。你认为秉持这样的信念，才能帮助这个世界回到出现这件诡异的事情之前的轨道。</div>
					<div class="user-preference-tips">*阻止五王汇合事件：30分</div>
					<div class="user-preference-tips">*活到最后：20分</div>
					<div class="user-preference-tips">*特别行动组组长存活：20分</div>
					<div class="user-preference-tips">*止戈派老大死亡：10分</div>
					<div class="user-preference-tips">*兄弟派老大死亡：10分</div>
					<div class="user-preference-tips">*应许派老大死亡：10分</div>
					<div class="user-preference-btn radius mix-blue font-white" @click = "goodChoose">选择此倾向</div>
					<div class="user-preference-ps">*选择倾向后不可更改</div>
				</div>
			</div>
			<div class="swiper-slide shadow radius" style="background: linear-gradient(135deg, rgba(255,233,133,0.75), rgba(255,255,255,1) 80%),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/preference2.jpg) left bottom;background-size: cover;">
				<div class="user-preference-internal centerlize">	
					<div class="user-preference-bigtitle">中立</div>
					<div class="user-preference-description">很遗憾，你不是王。作为勤勤恳恳工作、安安稳稳生活了小半辈子的你，挠破脑袋也没能想明白为何会出现此等反科学的事情。但是互联网上大家纷纷扰扰的讨论，又不得不让你面对现实——每一个人都梦见了上帝，记忆非常清楚，而且上帝在每一个人梦中说的话都一模一样。但话又说回来，被谁统治又有什么区别呢？你觉得还是自己活下来才是真正重要的——你的家人都需要你。这个世界总会平静下来的，何不就此捞一笔呢？</div>
					<div class="user-preference-tips">*活到最后：50分</div>
					<div class="user-preference-tips">*结束时每拥有1颗子弹加10分，上限50分</div>
					<div class="user-preference-btn radius mix-yellow font-white" @click = "middleChoose">选择此倾向</div>
					<div class="user-preference-ps">*选择倾向后不可更改</div>
				</div>
			</div>
			<div class="swiper-slide shadow radius" style="background: linear-gradient(135deg, rgba(186,70,80,0.9), rgba(255,255,255,1) 80%),url(https://gok-picture.oss-cn-beijing.aliyuncs.com/gok/img/preference3.jpg) left bottom;background-size: cover;">
				<div class="user-preference-internal centerlize">	
					<div class="user-preference-bigtitle">邪恶</div>
					<div class="user-preference-description">有时候你也会觉得这个世界并非它看起来这么美好。表面的和睦背后充满了背叛、欺诈、瞒骗、歧视和压迫，每一个高高在上的统治者都声称“为人民服务”，到头来却改不了压榨老百姓的本性。甚至你觉得换一个政府或者没有政府是更好的选择——至少不会有人用暴力机器来剥夺本属于你的权利。因此你开始觉得这是一个机会，一个付诸你邪恶想法于行动的机会——反抗这个世界，移除所有压在你头上的压榨机关。</div>
					<div class="user-preference-tips">*阻止五王汇合事件：30分</div>
					<div class="user-preference-tips">*活到最后：30分</div>
					<div class="user-preference-tips">*特别行动组组长死亡：30分</div>
					<div class="user-preference-tips">*至少有一个派系老大存活：10分</div>
					<div class="user-preference-btn radius mix-red font-white" @click = "badChoose">选择此倾向</div>
					<div class="user-preference-ps">*选择倾向后不可更改</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
    methods: {
        goodChoose() {
            this.$http.get(this.global.serverSrc + '/InclinationHandler.ashx?inclination=good', {withCredentials: true})
            .then(res=>{
                    if (res.data == "ok"){
                        this.$router.push({name: 'usermain'})
                    }     
                }, res => {
                    console.log(res)
            })
        },
        middleChoose() {
            this.$http.get(this.global.serverSrc + '/InclinationHandler.ashx?inclination=middle', {withCredentials: true})
            .then(res=>{
                    if (res.data == "ok"){
                        this.$router.push({name: 'usermain'})
                    }     
                }, res => {
                    console.log(res)
            })
        },
        badChoose() {
            this.$http.get(this.global.serverSrc + '/InclinationHandler.ashx?inclination=bad', {withCredentials: true})
            .then(res=>{
                    if (res.data == "ok"){
                        this.$router.push({name: 'usermain'})
                    }     
                }, res => {
                    console.log(res)
            })
        }
    },
    mounted() {
        var skillchoose_swiper = new Swiper ('.swiper-container-user-preference', {
		direction: 'horizontal', // 垂直切换选项
		loop: false, // 循环模式选项
		effect : 'coverflow',
		slidesPerView: 1,
		centeredSlides: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 60,
			modifier: 5,
			slideShadows : false,
		},
		observer:true,
	    });
    }
}
</script>
