let mixin = {
	data: function() {
		return {
			type: ''
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
				index: this.index
			})
		},
		setCompType(type) {
			this
			debugger
			let result = null
			if (this.val) {
				result = Object.assign({}, this.val)
				result['type'] = type
			} else {
				result = {
					type: type
				}
			}
			this.$emit('update:val', result)
		},
		getVal() {
			return this.val
		}
	}
}

export default mixin
