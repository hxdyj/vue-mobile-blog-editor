<template>
	<div class="comp-top-bar">
		<div class="top-bar-panel">
			<div class="top-bar-item">
				<i class="iconfont">&#xe62c;</i>
			</div>
			<div class="top-bar-item">
				<i class="iconfont">&#xe62b;</i>
			</div>
			<div class="top-bar-item">
				<i class="iconfont">&#xe62a;</i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'topBar',
	components: {}
}
</script>

<style lang="scss" scoped>
@import '../style/base.scss';
.comp-top-bar {
	border-bottom: 1px solid #7d7d7d;
	.top-bar-panel {
		display: flex;
		flex-wrap: nowrap;
		.top-bar-item {
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
