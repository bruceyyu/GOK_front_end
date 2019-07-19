<template>
    <router-view>
    </router-view>
</template>

<script>
export default {
    methods: {
		loginCheck() {
			this.$http.get( this.global.serverSrc + '/logincheck.ashx',{withCredentials: true})
			.then((res)=>{
//					console.log(res.data)
					if(res.data == 0){
                        this.$router.push({name: 'login'})		
					}else{
                        this.$router.push({name: 'firstCome1'})						
                    }
			})
		}
    },
    
    mounted() {
        this.loginCheck();
    }
}
</script>

