import divTextarea from '../modules/text/divTextarea.vue'

let mixin = {
	props: ['text', 'mode'],
	components: {
		divTextarea
	},
	watch: {},
	methods: {
		eInput(text) {
			this.$emit('eInput', text)
		},
		focus() {
			this.$refs.textarea.focus()
		}
	},
	mounted() {
		let _this = this
		setTimeout(() => {
			if (_this.$refs.textarea) _this.$refs.textarea.setVal(_this.text)
		}, 10)
	}
}

export default mixin
