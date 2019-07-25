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
                if(res.data == 0)
                {
                    this.$router.push({name: 'login'})		
                }
                else if (res.data == 'end')
                {
                    this.$router.push({name: 'result'})
                }
                else if (res.data == 'dead')
                {
                    this.$router.push({name: 'dead'})
                }
                else{
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

