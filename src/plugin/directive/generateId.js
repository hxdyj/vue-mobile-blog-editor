import cuid from 'cuid'
// `generate-id` //当以背景图形式加载图片时，设置加载失败的默认背景图
export default {
	name: 'generate-id',
	options: {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function(el, binding) {
			el.setAttribute('generate-id', cuid())
		}
	}
}
