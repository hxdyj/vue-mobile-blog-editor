<template>
	<div class="comp-bottom-bar">
		<div class="bottom-bar-panel">
			<!-- -----------------------   Globel  ---------------------- -->
			<div class="bottom-bar-item" @click="delModuleComp()">
				<i class="iconfont">&#xe644;</i>
			</div>
			<!-- -----------------------   IMG  ---------------------- -->
			<!-- paddingImg -->
			<div class="bottom-bar-item" v-if="type=='img'" :class="{'active':!val||val&&val.type=='padding_width'}" @click="changeModuleCompType('padding_width')">
				<i class="iconfont">&#xe606;</i>
			</div>
			<!-- fullImg -->
			<div class="bottom-bar-item" v-if="type=='img'" :class="{'active':val&&val.type=='full_width'}" @click="changeModuleCompType('full_width')">
				<i class="iconfont">&#xe6b5;</i>
			</div>

			<!-- -----------------------   TEXT  ---------------------- -->
			<!-- defaultText -->
			<div class="bottom-bar-item" v-if="type=='text'" :class="{'active':val&&val.type=='full_width'}" @click="changeModuleCompType('default_text')">
				<i class="iconfont">&#xe615;</i>
			</div>
			<!-- titleH1Center -->
			<div class="bottom-bar-item" v-if="type=='text'" :class="{'active':val&&val.type=='full_width'}" @click="changeModuleCompType('title_h1_center')">
				<i class="iconfont">&#xe62d;</i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			require: true
		},
		val: {
			default: null
		}
	},
	components: {},
	methods: {
		changeModuleCompType(type) {
			this.$emit('changeModuleCompType', type)
		},
		delModuleComp() {
			this.$emit('delModuleComp')
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-bottom-bar {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	border-top: 1px solid #7d7d7d;
	box-sizing: border-box;
	overflow-x: auto;
	height: $barH;

	.bottom-bar-panel {
		display: flex;
		flex-wrap: nowrap;
		.bottom-bar-item {
			width: $barH;
			height: $barH;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			border-right: 1px solid #f4f4f4;
			color: #2c3e50;
			background: white;
			&.active {
				background: #ccc;
			}
		}
	}
}
</style>
