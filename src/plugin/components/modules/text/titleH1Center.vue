<template>
	<div class="edit-module comp-module-title-h1-center">
		<div-textarea ref="textarea" align="center"></div-textarea>
	</div>
</template>

<script>
import divTextarea from './divTextarea'
export default {
	props: ['text'],
	components: {
		divTextarea
	},
	methods: {
		eInput(text) {
			this.$emit('eInput', text)
		}
	},
	mounted() {
		this.$refs.textarea.setVal(this.text)
	}
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';

.comp-module-title-h1-center {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 34px;
	padding: 10px 15px;
	font-weight: 500;
	box-sizing: border-box;
}
</style>
