import { timingSafeEqual } from 'crypto'

let mixin = {
	data: function() {
		return {
			type: '',
			val: {},
			select: false
		}
	},
	watch: {
		val: function(value) {
			this.$emit('changeVal', {
				val: value,
				step: this.step
			})
		}
	},
	props: {
		fillVal: {
			default: null
		},
		cuid: {
			default: ''
		},
		step: {
			default: ''
		},
		mode: {
			default: ''
		},
		_add_type: {
			default: ''
		}
	},
	methods: {
		//选中编辑模块
		selectEditModule() {
			if (this.mode != 'edit') return
			this.select = !this.select
			if (this.select && this.type == 'text' && this._add_type == 'drag') {
				this.focus()
			}
			this.$emit('selectEditModule', {
				ref: this
				// cuid: this.$el.getAttribute('generate-id')
			})
		},
		setSelect(val) {
			this.select = val
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
		this.fillVal
		if (this.fillVal) {
			if (!this.val) {
				this.val = {}
			}
			this.val = Object.assign({}, Object.assign(this.val, this.fillVal))
		}
		if (this._add_type == 'drag') {
			this.selectEditModule()
		}
	}
}

export default mixin
