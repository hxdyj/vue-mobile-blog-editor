<template>
	<div class="comp-module-img-full-width">
		<img class="img" :src="src" alt>
	</div>
</template>

<script>
export default {
	props: ['src'],
	components: {}
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';

.comp-module-img-full-width {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	height: auto;
	.img {
		display: block;
		width: 100%;
	}
}
</style>
