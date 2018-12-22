<template>
	<div class="comp-module-img-full-width">
		<img class="img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4093087131,2303503192&fm=27&gp=0.jpg" alt>
	</div>
</template>

<script>
export default {
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
