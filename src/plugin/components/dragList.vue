<template>
	<div class="comp-drag-list">
		<draggable v-model="myArray" :options="{group:'people'}" style="height:80vh;max-height:80vh;overflow-y:auto" @start="onStart">
			<div v-for="(element,index) in myArray" :key="index">
				<edit-module-text :ref="'edit_module_'+index" :select="moduleSelectIndex" :index="index" v-if="element=='text'" @selectEditModule="selectEditModule"></edit-module-text>
				<edit-module-img :ref="'edit_module_'+index" :select="moduleSelectIndex" :index="index" v-if="element=='img'"></edit-module-img>
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
			myArray: [],
			moduleSelectIndex: -1 // -1没选中  -2全选
		}
	},
	methods: {
		selectEditModule(data) {
			this.$refs['edit_module_' + data.index][0]
			this.moduleSelectIndex = data.index
		},
		//开始拖拽
		onStart() {
			this.moduleSelectIndex = -1
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-drag-list {
}
</style>
