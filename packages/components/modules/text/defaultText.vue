<template>
	<div class="edit-module comp-module-default-text">
		<div-textarea ref="textarea" @eInput="eInput"></div-textarea>
	</div>
</template>

<script>
import divTextarea from './divTextarea'
export default {
	props: ['text'],
	components: {
		divTextarea
	},
	watch: {
		text: function(val) {
			this.$refs.textarea.setVal(val)
		}
	},
	methods: {
		eInput(text) {
			this.$emit('eInput', text)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';

.comp-module-default-text {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 30px;
	padding: 10px 15px;
	box-sizing: border-box;
}
</style>
