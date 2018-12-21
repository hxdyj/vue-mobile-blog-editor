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
	name: 'bottomBar',
	components: {}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-bottom-bar {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100vw;
	min-width: 100vw;
	max-width: 100vw;
	border-top: 1px solid #7d7d7d;
	.bottom-bar-panel {
		display: flex;
		flex-wrap: nowrap;
		.bottom-bar-item {
			width: 2.6rem;
			height: 2.6rem;
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
