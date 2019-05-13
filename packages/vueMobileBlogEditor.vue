<template>
	<div style="width:100%;height:100%;flex-direction:column;" :style="{display:mode=='edit'?'flex':'block'}">
		<div id="vue-mobile-blog-editor" :class="{'edit':mode=='edit'}">
			<top-bar v-if="mode=='edit'" class="vue-mobile-blog-editor-page-top" @openHelpModal="openHelpModal"></top-bar>
			<drag-list :default-img="defaultImg" :upload-img="uploadImg" :mode="mode" class="vue-mobile-blog-editor-page-list" ref="drag_list" @selectModule="selectModule"></drag-list>
			<bottom-bar
				v-if="mode=='edit'"
				class="vue-mobile-blog-editor-page-bottom"
				:select="moduleSelectRef"
				:type="moduleSelectType"
				:val="moduleSelectVal"
				@changeModuleCompType="changeModuleCompType"
				@delModuleComp="delModuleComp"
			></bottom-bar>
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
								<div class="see-video" @click="seeTeachVideo()">
									<i class="iconfont-comp play-icon">&#xe889;</i>
									<div class="play-tip">查看视频</div>
								</div>
								<!-- <a href="https://scdn.yourbay.net/vue_mobile_blog_editor/video/vue_mobile_blog_editor_usage_video.mp4" target="_black">点击查看视频</a> -->
							</div>
						</div>
						<div class="help-item">
							<div class="title">
								<div class="num">2.</div>
								<div class="text">编辑器介绍</div>
							</div>
							<div class="content">
								<!-- <img src="https://scdn.yourbay.net/vue_mobile_blog_editor/img/help_editor_content.png" style="width:100%;max-width:400px" alt> -->
								<blockquote>
									<p>（1）将控件拖拽至编辑区域</p>
									<p>（2）点击控件进行选中再做相应修改或排序</p>
								</blockquote>
								<div style="font-weight:600;margin-top:10px;">操作演示：</div>
								<img src="https://scdn.yourbay.net/vue_mobile_blog_editor/img/help.gif" style="width:100%;margin-top:10px" alt>
							</div>
						</div>
						<div class="help-item">
							<div class="title">
								<div class="num">3.</div>
								<div class="text">控件说明</div>
							</div>
							<div class="content">
								<blockquote>
									<img style="display:inline" :src="'https://scdn.yourbay.net/vue_mobile_blog_editor/icon/icon_comp_text.png'" alt class="iconfont-comp">
									文本控件，支持输入文字，更换文字颜色以及背景色。选中可设置两种文字格式，正文和标题
								</blockquote>
								<blockquote style="margin-top:10px">
									<img style="display:inline" :src="'https://scdn.yourbay.net/vue_mobile_blog_editor/icon/icon_comp_img_2.png'" alt class="iconfont-comp">
									图片控件，可上传图片。支持三种格式：边距居中、宽度铺满、圆形居中
								</blockquote>
								<blockquote style="margin-top:10px">
									<img style="display:inline" :src="'https://scdn.yourbay.net/vue_mobile_blog_editor/icon/icon_comp_img.png'" alt class="iconfont-comp">
									分割线控件，作用是将连续的文本或者图片加分割的样式，以便区分段落。支持：粗线、细线、虚线
								</blockquote>
							</div>
						</div>
						<!-- <div class="help-item">
							<div class="title">
								<div class="num">3.</div>
								<div class="text">图片控件功能演示</div>
							</div>
							<div class="content">
								<div>
									单击选中图片控件以后点击右边
									<i class="iconfont-comp" style="font-size:18px;display;inline">&#xe60c;</i>，选择图片替换之前的图片
								</div>
								<img style="width:100%;max-width:400px;margin-top:16px;" src="https://scdn.yourbay.net/vue_mobile_blog_editor/img/img_module_usage.gif" alt>
							</div>
						</div>-->
						<!-- <div class="help-item">
						<div class="title">
							<div class="num">4.</div>
							<div class="text">联系作者</div>
						</div>
						<div class="content">邮箱：951540966@qq.com</div>
						</div>-->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import topBar from './components/topBar'
import dragList from './components/dragList'
import bottomBar from './components/bottomBar'
require('./style/ali_icon/iconfont.css')
export default {
	name: 'vueMobileBlogEditor',
	props: {
		mode: {
			default: 'edit' //edit show
		},
		uploadImg: {
			default: null
		},
		defaultImg: {
			default: 'https://scdn.yourbay.net/default/default_img.png'
		}
	},
	components: {
		topBar,
		dragList,
		bottomBar
	},
	data() {
		return {
			modalHelp: false,
			moduleSelectVal: null,
			moduleSelectType: null, // null未选中
			moduleSelectRef: null // null未选中
		}
	},
	methods: {
		setVal(data) {
			this.moduleSelectType = data.type
			this.moduleSelectVal = data.val
			this.moduleSelectRef = data
		},
		setData(list) {
			return this.$refs.drag_list.setList(list)
		},
		getData() {
			return this.$refs.drag_list.getResultList()
		},
		seeTeachVideo() {
			window.open('https://scdn.yourbay.net/vue_mobile_blog_editor/video/vue_mobile_blog_editor_usage_video_2.mp4')
		},
		openHelpModal() {
			this.modalHelp = true
		},
		clear() {
			this.moduleSelectType = null
			this.moduleSelectVal = null
			this.moduleSelectRef = null
		},
		selectModule(data) {
			//传来需要选中的值存在
			if (data) {
				//存在已经选中的值
				if (this.moduleSelectRef) {
					//如果要设置的值和选中的值不一样，取消原来值得选中状态，设置新值
					if (this.moduleSelectRef != data) {
						this.moduleSelectRef.setSelect(false)
						this.setVal(data)
					} else {
						//如果选中的值和原来的一样，那就清空选中
						if (this.moduleSelectType != 'text') {
							this.clear()
						} else {
							this.moduleSelectRef.setSelect(true)
						}
					}
				} else {
					//不存在已经选中的值，直接设置值
					this.setVal(data)
				}
			} else {
				//如果存在选中的，先把选中的取消掉
				if (this.moduleSelectRef) {
					this.moduleSelectRef.setSelect(false)
				}
				this.clear()
			}
		},
		changeModuleCompType(type) {
			this.moduleSelectRef.setCompType(type)
			this.$nextTick().then(() => {
				this.moduleSelectVal = this.moduleSelectRef.getVal()
			})
		},
		delModuleComp() {
			//删除list里的module
			this.$refs.drag_list.removeItem(this.moduleSelectRef.cuid)
			//将选中状态置为null
			this.clear()
		}
	},
	mounted() {
		let ele = document.getElementById('vue-mobile-blog-editor')
		let stopFunc = function(e) {
			// e.preventDefault()
			e.stopPropagation()
		}
		ele.onscroll = stopFunc
		ele.ontouchstart = stopFunc
		// ele.ontouchmove = stopFunc
	}
}
</script>

<style lang="scss" scoped>
@import './style/base.scss';

#vue-mobile-blog-editor {
	flex-grow: 1;
	position: relative;
	min-width: 100%;
	max-width: 100%;
	width: 100%;

	&.edit {
		display: flex;
		min-height: 100%;
		max-height: 100%;
		overflow: hidden;
		height: 100%;
	}
	flex-direction: column;
	.vue-mobile-blog-editor-page-top {
		flex-grow: 0;
	}
	.vue-mobile-blog-editor-page-list {
		flex-grow: 1;
	}
	.vue-mobile-blog-editor-page-bottom {
		flex-grow: 0;
	}
}
.help-modal {
	position: absolute;
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
				cursor: pointer;
				position: absolute;
				right: 10px;
			}
		}

		.see-video {
			cursor: pointer;
			width: 100%;
			height: 140px;
			border-radius: 10px;
			background: rgba(0, 0, 0, 0.8);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: white;
			.play-icon {
			}
			.play-tip {
				margin-top: 8px;
			}
		}

		.help-content {
			overflow: hidden;
			overflow-y: auto;
			max-height: calc(100% - 40px);
			box-sizing: border-box;
			padding: 16px;
			padding-top: 0px;
			.help-item {
				margin-top: 20px;
				.title {
					font-size: 16px;
					font-weight: 600;
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
