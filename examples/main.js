import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMobileBlogEditor from '../packages/index'

/* import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import { Dialog } from 'vant' */

window.Vue = Vue
Vue.use(VueMobileBlogEditor, {
	/* defaultImgSrc:
		'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365018759,2226705862&fm=27&gp=0.jpg', */
})


Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
