<template>
	<div class="comp-module-img-circle-center">
		<div class="img" v-for="item in [src]" :key="item" :style="{background:'url('+item+')',backgroundSize:'cover',backgroundRepeat:'no-repeat'}"></div>
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

.comp-module-img-circle-center {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	.img {
		display: block;
		border-radius: 100%;
		width: 280px;
		height: 280px;
	}
}
</style>
