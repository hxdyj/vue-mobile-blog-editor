<template>
	<div class="comp-drag-list" ref="list">
		<!-- {{list}} -->
		<draggable v-model="list" :options="{group:'people',handle:'.edit-module-drag-key'}" class="drag-comp" @start="onStart" @add="onAdd">
			<div :class="{'drag-item':mode=='edit'}" v-for="(element,index) in list" :key="element.cuid">
				<edit-module-text
					:mode="mode"
					:step="index"
					:cuid="element.cuid"
					:fill-val="element.val"
					v-if="element.type=='text'"
					@selectEditModule="selectEditModule"
					@changeVal="changeVal"
				></edit-module-text>
				<edit-module-img
					:upload-img="uploadImg"
					:mode="mode"
					:step="index"
					:cuid="element.cuid"
					:fill-val="element.val"
					v-if="element.type=='img'"
					@selectEditModule="selectEditModule"
					@changeVal="changeVal"
				></edit-module-img>
				<edit-module-split
					:mode="mode"
					:step="index"
					:cuid="element.cuid"
					:fill-val="element.val"
					v-if="element.type=='split'"
					@selectEditModule="selectEditModule"
					@changeVal="changeVal"
				></edit-module-split>
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
	props: ['mode', 'uploadImg'],
	components: {
		draggable,
		editModuleImg,
		editModuleText,
		editModuleSplit
	},
	data() {
		return {
			list: [
				{
					type: 'text',
					cuid: 'cjtzb8sd600003g5lra7fr06y',
					val: {
						text: 'fdsfdsafdsafsaf',
						type: 'title_h1_center',
						backgroundColor: '#41B983',
						color: 'white'
					}
				},
				{ type: 'img', val: null },
				{ type: 'img', val: null },
				{ type: 'img', val: null },
				{ type: 'img', val: null }
				/* {
					type: 'text',
					val: {
						color: '#364A5F',
						text: '扥萨芬撒sdfdsafdsa',
						backgroundColor: '#41B983'
					},
					cuid: cuid()
				} */
				/* { type: 'img', val: { type: 'full_width' }, cuid: cuid() },
				{ type: 'img', val: { type: 'padding_width' }, cuid: cuid() } */
			],
			//被选中的 module 的 index
			//被选中的 module 的类型
			moduleSelectType: null // null未选中
		}
	},
	methods: {
		changeVal(data) {
			let obj = this.list[data.step]
			obj._val = data.val
			this.$set(this.list, data.step, obj)
		},
		selectEditModule(data) {
			this.$emit('selectModule', data.ref)
		},
		onStart() {
			this.$emit('selectModule', null)
		},
		getResultList() {
			let arr = this.list.map(item => {
				let obj = {}
				Object.assign(obj, item)
				if (obj._val) {
					obj.val = obj.val || {}
					Object.assign(obj.val, obj._val)
				}
				delete obj._val
				return obj
			})
			return arr
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
	},
	mounted() {}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-drag-list {
	overflow: hidden;
	flex-direction: column;
	display: flex;
}
.drag-comp {
	flex-grow: 1;
	min-height: 100%;
	max-height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;

	.drag-item {
		&:last-child {
			margin-bottom: 40vh;
		}
	}
}
</style>
