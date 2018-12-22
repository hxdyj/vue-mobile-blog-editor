<template>
	<div class="comp-drag-list">
		<draggable v-model="myArray" :options="{group:'people'}" style="height:80vh;max-height:80vh;overflow-y:auto">
			<div v-for="(element,index) in myArray" :key="index">
				<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4093087131,2303503192&fm=27&gp=0.jpg" v-if="element=='text'" alt>
				<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=559131983,819429409&fm=27&gp=0.jpg" v-if="element=='img'" alt>
			</div>
		</draggable>
	</div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
	components: {
		draggable
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
