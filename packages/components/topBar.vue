<template>
	<div class="comp-top-bar">
		<draggable class="top-bar-panel" v-model="topList" :options="option">
			<div class="top-bar-item" v-for="(top,index) in topList" :key="index">
				<i class="iconfont-comp top-bar-icon" title="文本" v-if="top.type=='text'">&#xe62c;</i>
				<i class="iconfont-comp top-bar-icon" title="图片" v-if="top.type=='img'">&#xe62b;</i>
				<i class="iconfont-comp top-bar-icon" title="分割线" v-if="top.type=='split'">&#xe66e;</i>
				<!-- <i class="iconfont-comp-static help" title="帮助" @click="modalHelp=true" v-if="top.type=='help'">&#xe6f8;</i> -->
				<!-- <i class="iconfont-comp-static" v-if="top.type=='split'">&#xe66e;</i> -->
				<!-- <i class="iconfont-comp" v-if="top.type=='module'">&#xe62a;</i>
				<i class="iconfont-comp" v-if="top.type=='del'">&#xe644;</i>-->
			</div>
		</draggable>
		<div class="help-tip-text" @click="modalHelp=true">帮助手册</div>
		<div class="help-modal" v-if="modalHelp">
			<div class="help-body">
				<div class="help-header">
					<div class="title">帮助手册</div>
					<i class="iconfont-comp close-icon" @click="modalHelp=false">&#xe6a6;</i>
				</div>
				<div class="help-content">
					<div class="help-item">
						<div class="title">
							<div class="num">1.</div>
							<div class="text">30秒快速入手</div>
						</div>
						<div class="content">
							<a href="https://scdn.yourbay.net/vue_mobile_blog_editor/video/vue_mobile_blog_editor_usage_video.mp4" target="_black">点击查看视频</a>
						</div>
					</div>
					<div class="help-item">
						<div class="title">
							<div class="num">2.</div>
							<div class="text">编辑器介绍</div>
						</div>
						<div class="content">
							<img src="https://scdn.yourbay.net/vue_mobile_blog_editor/img/help_editor_content.png" style="width:70%;max-width:400px" alt>
							<div>（1）将控件拖拽至编辑区域即可添加相应控件进行编辑</div>
							<img style="margin-top:10px;width:70%;max-width:400px" src="https://scdn.yourbay.net/vue_mobile_blog_editor/img/add_weight_to_edite_area.gif" alt>
							<div>（2）点击添加的控件选中控件，即可对控件进行属性编辑或者拖拽排序。以文本控件进行演示：</div>
							<img style="margin-top:10px;width:70%;max-width:400px" src="https://scdn.yourbay.net/vue_mobile_blog_editor/img/text_module_usage.gif" alt>
						</div>
					</div>
					<div class="help-item">
						<div class="title">
							<div class="num">2.</div>
							<div class="text">控件说明</div>
						</div>
						<div class="content">
							<i class="iconfont-comp top-bar-icon">&#xe62c;</i>
							<div>文本控件，支持输入文字，更换文字颜色以及背景色。选中可设置两种文字格式，正文和标题</div>
							<div style="margin-top:10px">
								<i class="iconfont-comp top-bar-icon">&#xe62b;</i>
							</div>
							<div>图片控件，可上传图片。支持三种格式：边距居中、宽度铺满、圆形居中</div>
							<div style="margin-top:10px">
								<i class="iconfont-comp top-bar-icon">&#xe66e;</i>
							</div>
							<div>分割线控件，作用是将连续的文本或者图片加分割的样式，以便区分段落</div>
						</div>
					</div>
					<div class="help-item">
						<div class="title">
							<div class="num">3.</div>
							<div class="text">图片控件功能演示</div>
						</div>
						<div class="content">
							<div>
								单击选中图片控件以后点击
								<i class="iconfont-comp" style="font-size:18px">&#xe6a1;</i>，选择图片替换之前的图片
							</div>
							<img style="width:70%;max-width:400px" src="https://scdn.yourbay.net/vue_mobile_blog_editor/img/img_module_usage.gif" alt>
						</div>
					</div>
					<div class="help-item">
						<div class="title">
							<div class="num">4.</div>
							<div class="text">联系作者</div>
						</div>
						<div class="content">邮箱：951540966@qq.com</div>
					</div>
				</div>
			</div>
		</div>
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
			modalHelp: false,
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
	methods: {}
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

.help-modal {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(7, 7, 7, 0.719);
	z-index: 9999;
	.help-body {
		width: 90%;
		height: 80%;
		max-height: 80%;
		overflow: hidden;
		box-sizing: border-box;
		background: white;
		border: 1px solid #ccc;
		border-radius: 5px;
		.help-header {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
			height: 40px;
			.title {
				font-size: 18px;
				font-weight: 600;
				margin-top: 8px;
			}
			.close-icon {
				position: absolute;
				right: 10px;
			}
		}

		.help-content {
			overflow: hidden;
			overflow-y: auto;
			max-height: calc(100% - 40px);
			box-sizing: border-box;
			padding: 16px;
			.help-item {
				.title {
					font-size: 15px;
					font-weight: 500;
					display: flex;
					align-items: center;
					.num {
						font-size: 18px;
						font-weight: 600;
					}
					.text {
						margin-left: 6px;
					}
				}
				.content {
					font-size: 13px;
					padding: 10px;
					padding-left: 20px;
				}
			}
		}
	}
}
</style>
