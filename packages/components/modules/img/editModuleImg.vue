<template>
	<div class="edit-module comp-module-img" @click="selectEditModule('img')" :class="{'select':select}">
		<!-- {{val}} -->
		<!-- {{step}} -->
		<full-width v-if="val.type=='full_width'" :src="getSrc"></full-width>
		<padding-width v-if="!val.type||val&&val.type=='padding_width'" :src="getSrc"></padding-width>
		<div class="edit-module-options" v-show="select">
			<i class="iconfont" @click.stop="upload">&#xe6a1;</i>
			<i class="iconfont edit-module-drag-key">&#xe616;</i>
		</div>
	</div>
</template>

<script>
import fullWidth from './fullWidth'
import paddingWidth from './paddingWidth'
import mixin from '../../mixin/module.js'
export default {
	mixins: [mixin],
	props: ['uploadImg'],
	data() {
		return {
			type: 'img'
		}
	},
	computed: {
		getSrc() {
			return this.val.src
				? this.val.src
				: Vue.vueMobileBlogEditorConfig.defaultImgSrc
		}
	},
	components: { fullWidth, paddingWidth },
	methods: {
		setSrc(src) {
			this.$set(this.val, 'src', src)
		},
		upload() {
			let uploadFunc = this.uploadImg
			if (
				uploadFunc &&
				/Function/.test(Object.prototype.toString.call(uploadFunc))
			) {
				uploadFunc(this.val.src ? this.val.src : null, this.setSrc)
			} else {
				console.error(
					'please set vue-mobile-blog-editor uploadImg as func'
				)
			}
		}
	}
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
