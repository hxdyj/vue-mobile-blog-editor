<template>
	<div class="edit-module comp-module-split" @click="selectEditModule('split')" :class="{'select':select}">
		<color-line v-if="!val.type||val&&val.type=='color_line'"></color-line>
		<dash-line v-if="val.type=='dash_line'"></dash-line>
		<thin-line v-if="val.type=='thin_line'"></thin-line>
		<div class="edit-module-options" v-show="select">
			<i class="iconfont-comp edit-module-drag-key" title="拖拽">&#xe606;</i>
		</div>
	</div>
</template>

<script>
import colorLine from './colorLine'
import dashLine from './dashLine'
import thinLine from './thinLine'
import mixin from '../../mixin/module.js'
export default {
	mixins: [mixin],
	data() {
		return {
			type: 'split'
		}
	},

	components: { colorLine, dashLine, thinLine },
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
