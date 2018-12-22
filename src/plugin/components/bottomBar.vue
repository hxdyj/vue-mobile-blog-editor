<template>
	<div class="comp-bottom-bar">
		<div class="bottom-bar-panel">
			<div class="bottom-bar-item active">
				<i class="iconfont">&#xe658;</i>
			</div>
			<div class="bottom-bar-item">
				<i class="iconfont">&#xe660;</i>
			</div>
			<div class="bottom-bar-item active">
				<i class="iconfont">&#xe659;</i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {}
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
	height: 34px;

	.bottom-bar-panel {
		display: flex;
		flex-wrap: nowrap;
		.bottom-bar-item {
			width: 34px;
			height: 34px;
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
