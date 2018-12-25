<template>
	<div class="edit-module comp-module-text" @click="selectEditModule('text')" :class="{'select':select==-2||select==index}">
		<default-text></default-text>
	</div>
</template>

<script>
import defaultText from './defaultText'
import mixin from '../../mixin/module.js'
export default {
	mixins: [mixin],
	data() {
		return {
			type: 'text'
		}
	},
	components: { defaultText },
	methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';

.comp-module-text {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	.img {
		width: 100%;
	}
}
</style>
