<template>
	<div class="comp-top-bar">
		<draggable class="top-bar-panel" v-model="myArray" :options="option">
			<div class="top-bar-item" v-for="element in myArray" :key="element">
				<i class="iconfont" v-if="element=='text'">&#xe62c;</i>
				<i class="iconfont" v-if="element=='img'">&#xe62b;</i>
				<i class="iconfont" v-if="element=='module'">&#xe62a;</i>
				<i class="iconfont" v-if="element=='del'">&#xe644;</i>
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
	name: 'topBar',
	components: {
		draggable
	},
	data() {
		return {
			myArray: ['text', 'img', 'module', 'del'],
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
	border-bottom: 1px solid #7d7d7d;
	overflow-x: auto;
	.top-bar-panel {
		display: flex;
		flex-wrap: nowrap;
		.top-bar-item {
			width: 2.6rem;
			height: 2.6rem;
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
