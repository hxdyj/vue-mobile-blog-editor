<template>
	<div class="textarea">
		<div
			ref="input"
			@click="clickInput"
			@blur="onBlur"
			:contenteditable="mode=='edit'?true:false"
			class="input"
			:class="{'left':align==='left','center':align==='center','right':align==='right','mode-edit':mode=='edit'}"
			@input="inputEvent"
		></div>
		<div class="placeholder" :class="{'left':align==='left','center':align==='center','right':align==='right',}" v-if="!input&&mode=='edit'">{{placeholder}}</div>
	</div>
</template>
<script>
import device from 'current-device'
/*
:disabled="mode=='edit'?true:false"
*/
function keepLastIndex(obj) {
	/* 	console.log(obj)
	console.log(window.getSelection)
	console.log(document.selection) */
	if (window.getSelection) {
		//ie11 10 9 ff safari
		obj.focus() //解决ff不获取焦点无法定位问题
		var range = window.getSelection() //创建range
		range.selectAllChildren(obj) //range 选择obj下所有子内容
		range.collapseToEnd() //光标移至最后
	} else if (document.selection) {
		//ie10 9 8 7 6 5
		var range = document.selection.createRange() //创建选择对象
		//var range = document.body.createTextRange();
		range.moveToElementText(obj) //range定位到obj
		range.collapse(false) //光标移至最后
		range.select()
	}
}

/* function triggerEvent(element, eventType) {
	var e
	if (element.dispatchEvent) {
		//正常情况
		var e = document.createEvent('MouseEvents')
		e.initEvent('click', true, true)
		element.dispatchEvent(e)
		debugger
	} else if (element.fireEvent) {
		//IE
		e = document.createEventObject()
		e.button = 1
		element.fireEvent('on' + eventType, e)
	} else if (element['on' + eventType]) {
		element['on' + eventType].call()
	}


	// triggerEvent(this.$refs.color, 'onclick')

} */

export default {
	props: {
		placeholder: {
			default: '请输入文字'
		},
		align: {
			default: 'left' //left center right
		},
		mode: {
			default: ''
		}
	},
	computed: {},
	watch: {},
	data() {
		return {
			input: ''
		}
	},
	mounted() {},
	methods: {
		inputEvent() {
			let _this = this
			/* setTimeout(() => {
				keepLastIndex(_this.$refs.input)
			}, 5) */
			// let val = this.$refs.input.innerText.trim()
			let val = this.$refs.input.innerText
			this.input = val
			this.$emit('eInput', val)
		},
		focus() {
			let ele = this.$refs.input
			setTimeout(() => {
				ele.focus()
			}, 300)
		},
		getVal() {
			return {
				text: this.input
			}
		},
		setVal(text) {
			// this.$refs.input.innerText = text.trim()
			this.$refs.input.innerText = text
			this.input = text
		},
		clickInput(target) {
			if (!device.desktop() && this.mode == 'edit') {
				target.target.scrollIntoView()
			}
		},
		onBlur() {
			if (!device.desktop()) {
				let ele = document.getElementById('app')
				setTimeout(() => {
					ele.scrollTop = 0
					document.body.scrollTop = 0
				}, 300)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.textarea {
	width: 100%;
	position: relative;
	box-sizing: border-box;
	.input {
		position: relative;
		z-index: 2;
		outline: none;
		box-sizing: border-box;
		word-break: break-all;
		white-space: pre;
		background: transparent;
		&.left {
			text-align: left;
		}
		&.center {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}
		&.right {
			text-align: right;
		}

		&.mode-edit {
			-webkit-user-modify: read-write-plaintext-only;
		}
	}
	.placeholder {
		width: 100%;
		position: absolute;
		top: 0;
		left: 0px;
		color: rgba(153, 153, 153, 1);
		z-index: 0;
		&.left {
			text-align: left;
		}
		&.center {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}
		&.right {
			text-align: right;
		}
	}
}
</style>
