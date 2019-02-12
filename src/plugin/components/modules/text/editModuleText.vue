<template>
	<div class="edit-module comp-module-text" @click="selectEditModule('text')" :class="{'select':select}">
		<!-- {{val}} -->
		<default-text :text="getText" @eInput="setText" v-if="!val.type||val&&val.type=='default_text'"></default-text>
		<title-h1-center :text="getText" @eInput="setText" v-if="val.type=='title_h1_center'"></title-h1-center>
		<div class="edit-module-options" v-show="select">
			<i class="iconfont edit-module-drag-key">&#xe616;</i>
		</div>
	</div>
</template>

<script>
import defaultText from './defaultText'
import titleH1Center from './titleH1Center'
import mixin from '../../mixin/module.js'
export default {
	mixins: [mixin],
	data() {
		return {
			type: 'text'
		}
	},
	computed: {
		getText() {
			return this.val.text ? this.val.text : ''
		}
	},
	components: { defaultText, titleH1Center },
	methods: {
		setText(text) {
			this.$set(this.val, 'text', text)
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
