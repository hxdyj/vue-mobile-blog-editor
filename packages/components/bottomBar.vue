<template>
	<div class="comp-bottom-bar">
		<div class="bottom-bar-panel">
			<!-- -----------------------   Globel  ---------------------- -->
			<div class="bottom-bar-item del" title="删除控件" v-if="select" @click="delModuleComp()">
				<i class="iconfont-comp">&#xe60f1;</i>
			</div>
			<!-- -----------------------   SPLIT  ---------------------- -->

			<div class="bottom-bar-item" v-if="type=='split'" title="粗线" :class="{'active':!val.type||val&&val.type=='color_line'}" @click="changeModuleCompType('color_line')">
				<i class="iconfont-comp">&#xe612;</i>
			</div>
			<div class="bottom-bar-item" v-if="type=='split'" title="细线" :class="{'active':val&&val.type=='thin_line'}" @click="changeModuleCompType('thin_line')">
				<i class="iconfont-comp">&#xe613;</i>
			</div>
			<div class="bottom-bar-item" v-if="type=='split'" title="虚线" :class="{'active':val&&val.type=='dash_line'}" @click="changeModuleCompType('dash_line')">
				<i class="iconfont-comp">&#xe614;</i>
			</div>
			<!-- <div class="bottom-bar-item" v-if="type=='split'" title="虚线" :class="{'active':val.type||val&&val.type=='padding_width'}" @click="changeModuleCompType('padding_width')">
				<i class="iconfont-comp">&#xe606;</i>
			</div>-->

			<!-- -----------------------   IMG  ---------------------- -->
			<!-- paddingImg -->
			<div class="bottom-bar-item" v-if="type=='img'" title="边距居中" :class="{'active':!val.type||val&&val.type=='padding_width'}" @click="changeModuleCompType('padding_width')">
				<i class="iconfont-comp">&#xe611;</i>
			</div>
			<!-- fullImg -->
			<div class="bottom-bar-item" v-if="type=='img'" title="宽度铺满" :class="{'active':val&&val.type=='full_width'}" @click="changeModuleCompType('full_width')">
				<i class="iconfont-comp" style="font-size:18px">&#xe60f3;</i>
			</div>
			<!-- circleImg -->
			<div class="bottom-bar-item" v-if="type=='img'" title="圆形居中" :class="{'active':val&&val.type=='circle_center'}" @click="changeModuleCompType('circle_center')">
				<i class="iconfont-comp" style="font-size:23px">&#xe610;</i>
			</div>

			<!-- -----------------------   TEXT  ---------------------- -->
			<!-- defaultText -->
			<div class="bottom-bar-item" v-if="type=='text'" title="设置为正文" :class="{'active':!val.type||val.type=='default_text'}" @click="changeModuleCompType('default_text')">
				<i class="iconfont-comp">&#xe602;</i>
			</div>
			<!-- titleH1Center -->
			<div class="bottom-bar-item" v-if="type=='text'" title="设置为标题" :class="{'active':val&&val.type=='title_h1_center'}" @click="changeModuleCompType('title_h1_center')">
				<i class="iconfont-comp">&#xe60e;</i>
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
		},
		select: {
			require: true
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
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	border-top: 1px solid #7d7d7d;
	box-sizing: border-box;
	overflow-x: auto;
	min-height: $barH;
	max-height: $barH;
	position: relative;
	overflow-y: hidden;
	.bottom-bar-panel {
		display: flex;
		flex-wrap: nowrap;
		.bottom-bar-item {
			cursor: pointer;
			width: $barH;
			min-height: $barH;
			display: flex;
			align-items: center;
			justify-content: center;
			box-sizing: border-box;
			border-right: 1px solid #f4f4f4;
			color: #2c3e50;
			// background: white;
			&.active {
				background: #ccc;
			}

			&.del {
				position: absolute;
				right: 0;
				top: 0;
			}
		}
	}
}
</style>
