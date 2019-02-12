<template>
	<div class="comp-drag-list" ref="list">
		<!-- {{list}} -->
		<draggable
			v-model="list"
			:options="{group:'people',handle:'.edit-module-drag-key'}"
			style="height:calc(100vh - 68px);max-height:calc(100vh - 68px);overflow-y:auto;	-webkit-overflow-scrolling: touch;"
			@start="onStart"
			@add="onAdd"
		>
			<div v-generate-id v-for="element in list" :key="element.cuid">
				<edit-module-text v-if="element.type=='text'" @selectEditModule="selectEditModule"></edit-module-text>
				<edit-module-img :fill-val="element.val" v-if="element.type=='img'" @selectEditModule="selectEditModule"></edit-module-img>
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
	data() {
		return {
			list: [
				/* { type: 'img', val: { type: 'full_width' }, cuid: cuid() },
				{ type: 'img', val: { type: 'padding_width' }, cuid: cuid() } */
			],
			//被选中的 module 的 index
			//被选中的 module 的类型
			moduleSelectType: null // null未选中
		}
	},
	methods: {
		selectEditModule(data) {
			this.$emit('selectModule', data.ref)
		},
		onStart() {
			this.$emit('selectModule', null)
		},
		onAdd(dragVal) {
			let obj = {}
			Object.assign(obj, this.list[dragVal.newIndex])
			obj['cuid'] = cuid()
			this.$set(this.list, dragVal.newIndex, obj)
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-drag-list {
}
</style>
