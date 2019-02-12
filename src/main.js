import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMobileBlogEditor from './plugin/index'

/* import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import { Dialog } from 'vant' */

window.Vue = Vue
Vue.use(VueMobileBlogEditor, {
	defaultImgSrc:
		'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3365018759,2226705862&fm=27&gp=0.jpg',
	uploadImg: function(src, setSrc) {
		alert('确定更换图片么？')
		setSrc(
			'http://img5.imgtn.bdimg.com/it/u=2230167403,4188800858&fm=26&gp=0.jpg'
		)
		/* Dialog.alert({
			message: '确定更换图片么？'
		}).then(() => {
			setSrc(
				'http://img5.imgtn.bdimg.com/it/u=2230167403,4188800858&fm=26&gp=0.jpg'
			)
		}) */
	}
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
