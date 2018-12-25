<template>
	<div class="vue-mobile-blog-editor">
		<top-bar></top-bar>
		<drag-list ref="list" @selectModule="selectModule"></drag-list>
		<!-- <div @click="getHtml">getHtml</div> -->
		<bottom-bar :type="moduleSelectType" :val="moduleSelectVal"></bottom-bar>
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
		return {
			moduleSelectVal: null,
			moduleSelectType: null, // null未选中
			moduleSelectRef: null // null未选中
		}
	},
	methods: {
		selectModule(data) {
			debugger
			this.moduleSelectType = data.type
			this.moduleSelectVal = data.val
			this.moduleSelectRef = data.ref
		}
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
	min-height: 100%;
	max-height: 100%;
	height: 100%;
	min-width: 100%;
	max-width: 100%;
	width: 100%;
}
</style>
