<template>
	<div class="edit-module comp-module-split" @click="selectEditModule('split')" :class="{'select':select}">
		<color-line v-if="!val.type||val&&val.type=='color_line'"></color-line>
		<div class="edit-module-options" v-show="select">
			<i class="iconfont edit-module-drag-key">&#xe616;</i>
		</div>
	</div>
</template>

<script>
import colorLine from './colorLine'
import mixin from '../../mixin/module.js'
export default {
	mixins: [mixin],
	data() {
		return {
			type: 'split'
		}
	},

	components: { colorLine },
	methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';

.comp-module-split {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
}
</style>
