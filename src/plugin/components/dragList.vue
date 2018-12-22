<template>
	<div class="comp-drag-list">
		<draggable v-model="myArray" :options="{group:'people'}" style="height:80vh;max-height:80vh;overflow-y:auto">
			<div v-for="(element,index) in myArray" :key="index">
				<edit-module-text v-if="element=='text'"></edit-module-text>
				<edit-module-img v-if="element=='img'"></edit-module-img>
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
			myArray: []
		}
	},
	methods: {}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-drag-list {
}
</style>
