<template>
	<div style="display:flex;width:100%;height:100%;flex-direction:column;">
		<div id="vue-mobile-blog-editor">
			<top-bar class="vue-mobile-blog-editor-page-top"></top-bar>
			<drag-list class="vue-mobile-blog-editor-page-list" ref="drag_list" @selectModule="selectModule"></drag-list>
			<bottom-bar
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
			if (data) {
				if (this.moduleSelectRef) {
					if (this.moduleSelectRef != data) {
						this.moduleSelectRef.setSelect(false)
					}
				}
				this.moduleSelectType = data.type
				this.moduleSelectVal = data.val
				this.moduleSelectRef = data
			} else {
				if (this.moduleSelectRef) {
					this.moduleSelectRef.setSelect(false)
				}
				this.moduleSelectType = null
				this.moduleSelectVal = null
				this.moduleSelectRef = null
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
			this.moduleSelectType = null
			this.moduleSelectVal = null
			this.moduleSelectRef = null
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
