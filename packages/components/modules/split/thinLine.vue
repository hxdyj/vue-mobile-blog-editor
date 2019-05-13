<template>
	<div class="comp-module-split-thin-line">
		<div class="line"></div>
	</div>
</template>

<script>
export default {
	components: {}
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';

.comp-module-split-thin-line {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	height: 10px;
	background: white;
	display: flex;
	align-items: center;
	.line {
		width: 100%;
		border-top: 1px solid #ccc;
	}
}
</style>
