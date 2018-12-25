<template>
	<div class="edit-module comp-module-img" @click="selectEditModule('img')" :class="{'select':select==-2||select==index}">
		{{index}}-{{val}}
		<full-width v-if="val&&val.type=='full_width'"></full-width>
		<padding-width v-if="!val||val&&val.type=='padding_width'"></padding-width>
	</div>
</template>

<script>
import fullWidth from './fullWidth'
import paddingWidth from './paddingWidth'
import mixin from '../../mixin/module.js'
export default {
	mixins: [mixin],
	data() {
		return {
			type: 'img'
		}
	},
	components: { fullWidth, paddingWidth }
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';

.comp-module-img {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	.img {
		width: 100%;
	}
}
</style>
