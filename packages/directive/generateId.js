import cuid from 'cuid'
// `generate-id`
export default {
	name: 'generate-id',
	options: {
		// 当被绑定的元素插入到 DOM 中时……
		inserted: function(el, binding) {
			el.setAttribute('generate-id', cuid())
		}
	}
}
