let mixin = {
	data: function() {
		return {
			type: '',
			val: ''
		}
	},
	props: {
		fillVal: {
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
				index: this.index
			})
		},
		setVal(val) {
			this.val = val
		},
		setCompType(type) {
			let result = null
			if (this.val) {
				result = Object.assign({}, this.val)
				result['type'] = type
			} else {
				result = {
					type: type
				}
			}
			this.val = result
		},
		getVal() {
			return this.val
		}
	},
	mounted() {
		if (this.fillVal) {
			this.val = Object.assign({}, Object.assign(this.val, this.fillVal))
		}
	}
}

export default mixin
