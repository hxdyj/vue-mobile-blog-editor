<template>
	<div class="edit-module comp-module-default-text">
		<div-textarea :mode="mode" ref="textarea" @eInput="eInput"></div-textarea>
	</div>
</template>

<script>
import mixin from '../../mixin/text.js'
export default {
	mixins: [mixin]
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
	padding: 10px 15px;
	box-sizing: border-box;
	font-size:13.72px;
}
</style>
