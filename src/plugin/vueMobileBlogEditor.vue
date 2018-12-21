<template>
	<div class="vue-mobile-blog-editor">
		<top-bar></top-bar>
		<bottom-bar></bottom-bar>
	</div>
</template>

<script>
import topBar from './components/topBar'
import bottomBar from './components/bottomBar'
export default {
	name: 'vueMobileBlogEditor',
	components: {
		topBar,
		bottomBar
	}
}
</script>

<style lang="scss" scoped>
@import './style/base.scss';
* {
	margin: 0;
	padding: 0;
}

.vue-mobile-blog-editor {
	position: relative;
	min-height: 100vh;
	max-height: 100vh;
}
</style>
