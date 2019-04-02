let plugin = {}

import vueMobileBlogEditor from './vueMobileBlogEditor.vue'
plugin.install = function(Vue, options) {
	/* // 1. 添加全局方法或属性
	Vue.myGlobalMethod = function() {
		// 逻辑...
	}

	// 2. 添加全局资源
	Vue.directive('my-directive', {
		bind(el, binding, vnode, oldVnode) {
			// 逻辑...
		}
	})

	// 3. 注入组件
	Vue.mixin({
		created: function() {
			// 逻辑...
		}
	})

	// 4. 添加实例方法
	Vue.prototype.$myMethod = function(methodOptions) {
		// 逻辑...
	} */
	// Vue.directive(fixDragCompHeight.name, fixDragCompHeight.options)
	/* 	if (!options) {
		options = {}
	} else {
		if (!options.defaultImgSrc) {
			options['defaultImgSrc'] =
				'https://scdn.yourbay.net/default/default_img.png'
		}
	} */

	Vue.vueMobileBlogEditorConfig = options
	// Vue.directive(generateId.name, generateId.options)
	Vue.component(vueMobileBlogEditor.name, vueMobileBlogEditor) // testPanel.name 组件的name属性
}
export default plugin
