<template>
	<div class="comp-drag-list" ref="list" :class="{'edit':mode=='edit'}">
		<!-- {{list}} -->
		<draggable
			v-model="list"
			ref="list_body"
			:options="{group:'people',handle:'.edit-module-drag-key'}"
			class="drag-comp"
			@start="onStart"
			@add="onAdd"
			:class="{'edit':mode=='edit'}"
		>
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
					:default-img="defaultImg"
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
	props: ['mode', 'uploadImg', 'defaultImg'],
	components: {
		draggable,
		editModuleImg,
		editModuleText,
		editModuleSplit
	},
	watch: {
		list: function() {
			if (this.list.length == 0) {
				this.$refs.list_body.$el.style.background = 'url(https://scdn.yourbay.net/vue_mobile_blog_editor/img/list_empty_tip.png)'
				this.$refs.list_body.$el.style.backgroundSize = '80vw'
				this.$refs.list_body.$el.style.backgroundRepeat = 'no-repeat'
				this.$refs.list_body.$el.style.backgroundPosition = '7vw 14px'
			} else {
				this.$refs.list_body.$el.style.background = ''
			}
		}
	},
	data() {
		return {
			list: [],
			//被选中的 module 的类型
			moduleSelectType: null // null未选中
		}
	},
	methods: {
		setList(list) {
			this.list = list
		},
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
			let arr = this.list.map((item) => {
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
	&.edit {
		display: flex;
	}
}
.drag-comp {
	flex-grow: 1;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
	background-size: 80vw;
	background-repeat: no-repeat;
	background-position: 7vw 14px;
	&.edit {
		min-height: 100%;
		max-height: 100%;
		overflow-y: auto;
	}
	.drag-item {
		&:last-child {
			margin-bottom: 40vh;
		}
	}

	&::-webkit-scrollbar {
		/*滚动条整体样式*/
		width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
		height: 1px;
	}

	&::-webkit-scrollbar-thumb {
		/*滚动条里面小方块*/
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
		background: #d8d8d8;
	}
	&::-webkit-scrollbar-track {
		/*滚动条里面轨道*/
		-webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
		border-radius: 0px;
		background: #f0f0f0;
	}
}
</style>
