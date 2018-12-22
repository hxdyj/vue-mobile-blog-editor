<template>
	<div class="edit-module comp-module-text" @click="selectEditModule('text')" :class="{'select':select==-2||select==index}">
		<default-text></default-text>
	</div>
</template>

<script>
import defaultText from './defaultText'
export default {
	props: {
		index: {
			require: true
		},
		select: {
			require: true
		}
	},
	components: { defaultText },
	methods: {
		//选中编辑模块
		selectEditModule(type) {
			this.$emit('selectEditModule', {
				editModuleType: type,
				index: this.index
			})
		}
	}
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
