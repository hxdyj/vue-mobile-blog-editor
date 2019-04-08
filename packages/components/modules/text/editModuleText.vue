<template>
	<div class="edit-module comp-module-text" :style="{backgroundColor:getBgColor,color:getColor}" @click="selectEditModule('text')" :class="{'select':select}">
		<!-- {{val}} -->
		<!-- {{step}} -->
		<default-text :mode="mode" :text="getText" @eInput="setText" v-if="!val.type||val.type=='default_text'"></default-text>
		<title-h1-center :mode="mode" :text="getText" @eInput="setText" v-if="val.type=='title_h1_center'"></title-h1-center>
		<div class="edit-module-options" v-show="select">
			<i class="iconfont-comp" @click.stop="selectColor">&#xe6a1;</i>
			<i class="iconfont-comp edit-module-drag-key">&#xe616;</i>
		</div>
		<div class="color-picker" v-if="modalColor">
			<i class="iconfont-comp close-color-picker-icon" @click="modalColor=false">&#xe6a6;</i>
			<div class="color-section">
				<div class="info">
					<div class="color-title">文字</div>
					<div class="color" :style="{background:getColor}"></div>
				</div>
				<div class="color-panel">
					<div class="color-item" @click="setColor(item)" :style="{background:item}" v-for="item in colors" :key="item"></div>
				</div>
			</div>
			<div class="color-section">
				<div class="info">
					<div class="color-title">背景</div>
					<div class="color" :style="{background:getBgColor}"></div>
				</div>
				<div class="color-panel">
					<div class="color-item" @click="setBgColor(item)" :style="{background:item}" v-for="item in colors" :key="item"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import defaultText from './defaultText'
import titleH1Center from './titleH1Center'
import mixin from '../../mixin/module.js'
/* function triggerEvent(element, eventType) {
	var e
	if (element.dispatchEvent) {
		//正常情况
		var e = document.createEvent('MouseEvents')
		e.initEvent('click', true, true)
		element.dispatchEvent(e)
	} else if (element.fireEvent) {
		//IE
		e = document.createEventObject()
		e.button = 1
		element.fireEvent('on' + eventType, e)
	} else if (element['on' + eventType]) {
		element['on' + eventType].call()
	}


	triggerEvent(this.$refs.color, 'onclick')

} */
export default {
	mixins: [mixin],
	data() {
		return {
			type: 'text',
			modalColor: false,
			colors: [
				'white',
				'#364A5F',
				'#146091',
				'#41B983',
				'#ec6d00',
				'#ef8200',
				'#f5ac3c',
				'#017291',
				'#76c7c8',
				'#2cadcf'
			]
		}
	},
	computed: {
		getText() {
			let a = this.val.text ? this.val.text : ''
			return this.val.text ? this.val.text : ''
		},
		getColor() {
			return this.val.color ? this.val.color : '#2C3E51'
		},
		getBgColor() {
			return this.val.backgroundColor ? this.val.backgroundColor : 'white'
		}
	},
	components: { defaultText, titleH1Center },
	methods: {
		setColor(item) {
			this.$set(this.val, 'color', item)
			this.modalColor = false
		},
		setBgColor(item) {
			this.$set(this.val, 'backgroundColor', item)
			this.modalColor = false
		},
		setText(text) {
			this.$set(this.val, 'text', text)
		},
		selectColor() {
			this.modalColor = true
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../../../style/base.scss';
.select-color {
	width: 0;
	height: 0;
	opacity: 0;
}
.comp-module-text {
	width: 100%;
	min-width: 100%;
	max-width: 100%;
	position: relative;
	font-size: 16px;
	line-height: 22px;
}

.color-picker {
	position: absolute;
	width: 70%;
	height: 300px;
	top: 25%;
	left: 15%;
	background: #f1f1f1;
	border-radius: 4px;
	border: 1px solid rgb(224, 224, 224);
	z-index: 999;

	.close-color-picker-icon {
		position: absolute;
		right: 7px;
		top: 4px;
		font-size: 18px;
		color: #aaaaaa;
	}
	.color-section {
		height: 50%;
		box-sizing: border-box;
		padding: 5%;
		.info {
			display: flex;
			.color-title {
				font-size: 16px;
				font-weight: 500;
				color: #364a60 !important;
			}
			.color {
				margin-left: 14px;
				width: 20px;
				height: 20px;
				border-radius: 100%;
				background: #ccc;
			}
		}

		.color-panel {
			margin-top: 10px;
			display: flex;
			flex-wrap: wrap;
			.color-item {
				margin: 10px;
				width: 24px;
				height: 24px;
				border-radius: 2px;
			}
		}
	}
}
</style>
