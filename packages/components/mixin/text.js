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
		}
	},
	mounted() {
		this.$refs.textarea.setVal(this.text)
	}
}

export default mixin
