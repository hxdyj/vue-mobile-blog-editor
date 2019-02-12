<template>
	<div class="textarea">
		<div ref="input" contenteditable="true" class="input" :class="{'left':align==='left','center':align==='center','right':align==='right',}" @input="inputEvent"></div>
		<div class="placeholder" v-if="!input">{{placeholder}}</div>
	</div>
</template>
<script>
export default {
	props: {
		placeholder: {
			default: 'TEXT'
		},
		align: {
			default: 'left' //left center right
		}
	},
	computed: {},
	watch: {},
	data() {
		return {
			input: ''
		}
	},
	methods: {
		inputEvent() {
			this.input = this.$refs.input.innerText.trim()
			this.$emit('eInput', this.input)
		},
		getVal() {
			return {
				text: this.input
			}
		},
		setVal(text) {
			this.$refs.input.innerText = text
			this.input = text
		}
	},
	mounted() {}
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
	.placeholder {
		position: absolute;
		top: 0;
		left: 0px;
		color: rgba(153, 153, 153, 1);
		z-index: 0;
	}
}
</style>
