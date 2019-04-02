<template>
	<div class="comp-module-img-full-width">
		<img class="img" :src="src" alt>
	</div>
</template>

<script>
import mixin from '../../mixin/img.js'
export default {
	mixins: [mixin]
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';

.comp-module-img-full-width {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	height: auto;
	padding: 0px 15px;
	box-sizing: border-box;
	.img {
		display: block;
		width: 100%;
	}
}
</style>
