<template>
	<div class="comp-drag-list" ref="list">
		{{list}}
		<draggable v-model="list" :options="{group:'people'}" style="height:calc(100vh - 68px);max-height:calc(100vh - 68px);overflow-y:auto" @start="onStart">
			<div v-for="(element,index) in list" :key="index">
				<edit-module-text
					:ref="'edit_module_'+element.cuid"
					:cuid="element.cuid"
					:select="moduleSelectIndex"
					:index="index"
					v-if="element.type=='text'"
					@selectEditModule="selectEditModule"
				></edit-module-text>
				<edit-module-img
					:ref="'edit_module_'+element.cuid"
					:cuid="element.cuid"
					:fill-val="element.val"
					:select="moduleSelectIndex"
					:index="index"
					v-if="element.type=='img'"
					@selectEditModule="selectEditModule"
				></edit-module-img>
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
import editModuleImg from './modules/img/editModuleImg'
import editModuleText from './modules/text/editModuleText'
import cuid from 'cuid'

export default {
	components: {
		draggable,
		editModuleImg,
		editModuleText
	},
	watch: {
		list: function(newData) {
			let isGenerateId = false
			newData.forEach(item => {
				if (!item.cuid) isGenerateId = true
			})
			if (isGenerateId) {
				this.list = newData.map(item => {
					if (item.cuid) {
						return item
					} else {
						item.cuid = cuid()
						return item
					}
				})
			}
		}
	},
	data() {
		return {
			list: [
				/* { type: 'img', val: { type: 'full_width' } },
				{ type: 'img', val: { type: 'padding_width' } } */
			],
			//被选中的 module 的 index
			moduleSelectIndex: -1, // -1没选中  -2全选
			//被选中的 module 的类型
			moduleSelectType: null // null未选中
		}
	},
	methods: {
		selectEditModule(data) {
			this.moduleSelectIndex = data.index
			this.$emit(
				'selectModule',
				this.$refs['edit_module_' + data.cuid][0]
			)
		},
		/* updateVal(data) {
			this.list[data.index]['val'] = data.val
			this.$set(this.list, data.index, this.list[data.index])
		}, */
		//开始拖拽
		onStart() {
			this.moduleSelectIndex = -1
			this.$emit('selectModule', null)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-drag-list {
}
</style>
