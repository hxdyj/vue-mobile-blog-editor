<template>
	<div class="comp-top-bar">
		<draggable class="top-bar-panel" v-model="topList" :options="option">
			<div class="top-bar-item" v-for="(top,index) in topList" :key="index">
				<i class="iconfont-comp top-bar-icon" style="font-size:26px;" title="文本" v-if="top.type=='text'">&#xe607;</i>
				<i class="iconfont-comp top-bar-icon" title="图片" v-if="top.type=='img'">&#xe62b;</i>
				<i class="iconfont-comp top-bar-icon" title="分割线" v-if="top.type=='split'">&#xe66e;</i>
				<!-- <i class="iconfont-comp-static help" title="帮助" @click="modalHelp=true" v-if="top.type=='help'">&#xe6f8;</i> -->
				<!-- <i class="iconfont-comp-static" v-if="top.type=='split'">&#xe66e;</i> -->
				<!-- <i class="iconfont-comp" v-if="top.type=='module'">&#xe62a;</i>
				<i class="iconfont-comp" v-if="top.type=='del'">&#xe644;</i>-->
			</div>
		</draggable>
		<div class="help-tip-text" @click="openHelpModal">帮助手册</div>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
import cuid from 'cuid'
function getObj(type) {
	return {
		type: type,
		val: null
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
				getObj('split')
				// getObj('help')
				/* getObj('module'),
				getObj('del') */
			],
			option: {
				group: { name: 'people', pull: 'clone', put: false },
				sort: false,
				handle: '.iconfont-comp'
			}
		}
	},
	methods: {
		openHelpModal() {
			this.$emit('openHelpModal')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-top-bar {
	min-height: $barH;
	border-bottom: 1px solid #7d7d7d;
	overflow-x: auto;
	overflow-y: hidden;
	box-sizing: border-box;
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	position: relative;
	.help-tip-text {
		cursor: pointer;
		position: absolute;
		right: 10px;
		top: 12px;
		font-size: 14px;
	}
	.top-bar-panel {
		display: flex;
		flex-wrap: nowrap;
		.top-bar-item {
			width: $barH;
			height: $barH;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			border-right: 1px solid #f4f4f4;
			color: #2c3e50;
			background: transparent;
			&.active {
				background: #ccc;
			}
		}
	}
}
/*

<div class="help-modal">
			<div class="help-body">
				<div class="help-header">
					<div class="title"></div>
					<div class="close-icon"></div>
				</div>
				<div class="help-content"></div>
			</div>
		</div>
*/
</style>
