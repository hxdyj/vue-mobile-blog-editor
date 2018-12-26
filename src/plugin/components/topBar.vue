<template>
	<div class="comp-top-bar">
		<draggable class="top-bar-panel" v-model="topList" :options="option">
			<div class="top-bar-item" v-for="(top,index) in topList" :key="index">
				<i class="iconfont" v-if="top.type=='text'">&#xe62c;</i>
				<i class="iconfont" v-if="top.type=='img'">&#xe62b;</i>
				<i class="iconfont" v-if="top.type=='module'">&#xe62a;</i>
				<i class="iconfont" v-if="top.type=='del'">&#xe644;</i>
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
function getObj(type) {
	return {
		type: type,
		val: null,
		cuid: ''
	}
}
export default {
	components: {
		draggable
	},
	data() {
		return {
			topList: [
				getObj('text'),
				getObj('img'),
				getObj('module'),
				getObj('del')
			],
			option: {
				group: { name: 'people', pull: 'clone', put: false },
				sort: false
			}
		}
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-top-bar {
	height: 34px;
	border-bottom: 1px solid #7d7d7d;
	overflow-x: auto;
	box-sizing: border-box;
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	.top-bar-panel {
		display: flex;
		flex-wrap: nowrap;
		.top-bar-item {
			width: 34px;
			height: 34px;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			border-right: 1px solid #f4f4f4;
			color: #2c3e50;
			background: white;
			&.active {
				background: #ccc;
			}
		}
	}
}
</style>
