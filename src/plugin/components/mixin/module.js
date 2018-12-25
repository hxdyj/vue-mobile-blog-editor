let mixin = {
	data: function() {
		return {
			msg: 'hello'
		}
	},
	props: {
		val: {
			default: null
		},
		index: {
			require: true
		},
		select: {
			require: true
		}
	},
	methods: {
		//选中编辑模块
		selectEditModule(type) {
			this.$emit('selectEditModule', {
				editModuleType: type,
				index: this.index,
				val: this.val
			})
		}
	}
}

export default mixin
