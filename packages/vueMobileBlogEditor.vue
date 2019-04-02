<template>
	<div style="display:flex;width:100%;height:100%;flex-direction:column;">
		<div id="vue-mobile-blog-editor">
			<top-bar v-if="mode=='edit'" class="vue-mobile-blog-editor-page-top"></top-bar>
			<drag-list :upload-img="uploadImg" :mode="mode" class="vue-mobile-blog-editor-page-list" ref="drag_list" @selectModule="selectModule"></drag-list>
			<bottom-bar
				v-if="mode=='edit'"
				class="vue-mobile-blog-editor-page-bottom"
				:select="moduleSelectRef"
				:type="moduleSelectType"
				:val="moduleSelectVal"
				@changeModuleCompType="changeModuleCompType"
				@delModuleComp="delModuleComp"
			></bottom-bar>
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
		}
	},
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
	min-height: 100%;
	max-height: 100%;
	overflow: hidden;
	height: 100%;
	min-width: 100%;
	max-width: 100%;
	width: 100%;
	display: flex;
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
</style>
