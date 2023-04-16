import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './router/auth'

import './assets/icon-fonts/iconfont.css'
import './assets/icon-fonts/iconfont'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// import ElementPlus from 'element-plus';
// import 'element-plus/theme-chalk/index.css';


Vue.use(ElementUI, { size: 'small' })
// Vue.use(ElementPlus)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
		Vue.prototype.$bus = this	//安装全局事件总线
	}
}).$mount('#app')
