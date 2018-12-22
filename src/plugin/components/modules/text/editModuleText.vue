<template>
	<div class="edit-module comp-module-text">
		<default-text></default-text>
	</div>
</template>

<script>
import defaultText from './defaultText'
export default {
	components: { defaultText }
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
