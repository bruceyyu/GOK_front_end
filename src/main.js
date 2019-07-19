// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import Velocity from 'velocity-animate'
import global_ from './views/common/global'//引用文件
Vue.prototype.global = global_//挂载到Vue实例上面

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
})


