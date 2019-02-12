<template>
	<div class="comp-drag-list" ref="list">
		<!-- {{list}} -->
		<draggable v-model="list" :options="{group:'people',handle:'.edit-module-drag-key'}" class="drag-comp" style @start="onStart" @add="onAdd">
			<div v-for="element in list" :key="element.cuid">
				<edit-module-text :cuid="element.cuid" v-if="element.type=='text'" @selectEditModule="selectEditModule"></edit-module-text>
				<edit-module-img :cuid="element.cuid" :fill-val="element.val" v-if="element.type=='img'" @selectEditModule="selectEditModule"></edit-module-img>
				<edit-module-split :cuid="element.cuid" :fill-val="element.val" v-if="element.type=='split'" @selectEditModule="selectEditModule"></edit-module-split>
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
import editModuleImg from './modules/img/editModuleImg'
import editModuleText from './modules/text/editModuleText'
import editModuleSplit from './modules/split/editModuleSplit'
import cuid from 'cuid'

export default {
	components: {
		draggable,
		editModuleImg,
		editModuleText,
		editModuleSplit
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
		},
		removeItem(cuid) {
			/* let index = this.list.findIndex(function(value, index, arr) {
				return value['cuid'] === cuid
			}) */
			this.list = this.list.filter(function(value, index, arr) {
				return value['cuid'] != cuid
			})
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-drag-list {
}
.drag-comp {
	height: calc(100vh - 88px);
	max-height: calc(100vh - 88px);
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
}
</style>
