<template>
	<div>
		<div class="home-page">
			<vue-mobile-blog-editor :default-img="'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=935292084,2640874667&fm=27&gp=0.jpg'" ref="editor" :upload-img="uploadImg"></vue-mobile-blog-editor>
		</div>
		<p @click="getList">getData</p>
	</div>
</template>

<script>
export default {
	name: 'home',
	components: {},
	methods: {
		getList() {
			let data = this.$refs.editor.getData()
		},
		uploadImg: function(src, setSrc) {
			alert('确定更换图片么？')
			setSrc(
				'http://img5.imgtn.bdimg.com/it/u=2230167403,4188800858&fm=26&gp=0.jpg'
			)
			/* Dialog.alert({
			message: '确定更换图片么？'
		}).then(() => {
			setSrc(
				'http://img5.imgtn.bdimg.com/it/u=2230167403,4188800858&fm=26&gp=0.jpg'
			)
		}) */
		}
	}
}
</script>
<style lang="scss" scoped>
.home-page {
	height: 80vh;
	width: 400px;
	border: 1px solid #ccc;
}
/* .home-page {
	height: 100vh;
} */
</style>

