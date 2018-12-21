<template>
	<div class="vue-mobile-blog-editor">
		<top-bar></top-bar>
		<drag-list></drag-list>
		<bottom-bar></bottom-bar>
	</div>
</template>

<script>
import topBar from './components/topBar'
import dragList from './components/dragList'
import bottomBar from './components/bottomBar'
export default {
	name: 'vueMobileBlogEditor',
	components: {
		topBar,
		dragList,
		bottomBar
	},
	data() {
		return {}
	},
	methods: {}
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
