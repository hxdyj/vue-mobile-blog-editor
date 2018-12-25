<template>
	<div class="comp-drag-list" ref="list">
		{{list}}
		<draggable v-model="list" :options="{group:'people'}" style="height:80vh;max-height:80vh;overflow-y:auto" @start="onStart">
			<div v-for="(element,index) in list" :key="index">
				<edit-module-text
					:ref="'edit_module_'+index"
					:val.sync="element.val"
					:select="moduleSelectIndex"
					:index="index"
					v-if="element.type=='text'"
					@selectEditModule="selectEditModule"
				></edit-module-text>
				<edit-module-img :ref="'edit_module_'+index" :val.sync="element.val" :select="moduleSelectIndex" :index="index" v-if="element.type=='img'" @selectEditModule="selectEditModule"></edit-module-img>
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
import editModuleImg from './modules/img/editModuleImg'
import editModuleText from './modules/text/editModuleText'

export default {
	components: {
		draggable,
		editModuleImg,
		editModuleText
	},
	data() {
		return {
			list: [],
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
				this.$refs['edit_module_' + data.index][0]
			)
		},
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
