<template>
	<div>
		<div class="home-page">
			<vue-mobile-blog-editor
				mode="edit"
				:default-img="'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=935292084,2640874667&fm=27&gp=0.jpg'"
				ref="editor"
				:upload-img="uploadImg"
			></vue-mobile-blog-editor>
		</div>
		<!-- <p @click="getList">getData</p> -->
	</div>
</template>

<script>
export default {
	name: 'home',
	components: {},
	data() {
		return {
			list: [
				{
					type: 'text',
					val: {
						text: 'fdsaffdsafffdsaf',
						backgroundColor: '#017291',
						color: 'white',
						type: 'title_h1_center'
					},
					cuid: 'cju7xp07k00063r5rafxn89gw1'
				},
				{
					type: 'text',
					val: null,
					cuid: 'cju7xv69900003r5rfacw2do6'
				},
				{
					type: 'img',
					val: {
						src: 'http://img5.imgtn.bdimg.com/it/u=2230167403,4188800858&fm=26&gp=0.jpg',
						type: 'circle_center'
					},
					cuid: 'cju7xozm000053r5rawe1huxs'
				},
				{
					type: 'text',
					val: { type: 'default_text', text: 'fdasfdsa' },
					cuid: 'cju7xpigr00073r5rq9r089yz'
				},
				{ type: 'split', val: null, cuid: 'cju7xpupf00093r5r7q1bvjfk' },
				{
					type: 'text',
					val: { text: 'fdsafadsf' },
					cuid: 'cju7xpwp9000a3r5rn6xt0i2x'
				},
				{ type: 'img', val: null, cuid: 'cju7xprf900083r5r33yxk3n3' },
				{
					type: 'text',
					val: {
						text: 'fdsaffdsafffdsaf',
						backgroundColor: '#017291',
						color: 'white',
						type: 'title_h1_center'
					},
					cuid: 'cju7xp07k00063r5rafxn89gw'
				},
				{
					type: 'text',
					val: null,
					cuid: 'cju7xv69900003r5rfacw2do61'
				},
				{
					type: 'img',
					val: {
						src: 'http://img5.imgtn.bdimg.com/it/u=2230167403,4188800858&fm=26&gp=0.jpg',
						type: 'circle_center'
					},
					cuid: 'cju7xozm000053r5rawe1huxs1'
				},
				{
					type: 'text',
					val: { type: 'default_text', text: 'fdasfdsa' },
					cuid: 'cju7xpigr00073r5rq9r089yz1'
				},
				{
					type: 'split',
					val: null,
					cuid: 'cju7xpupf00093r5r7q1bvjfk1'
				},
				{
					type: 'text',
					val: { text: 'fdsafadsf' },
					cuid: 'cju7xpwp9000a3r5rn6xt0i2x1'
				},
				{ type: 'img', val: null, cuid: 'cju7xprf900083r5r33yxk3n31' }
			]
		}
	},
	mounted() {
		// this.$refs.editor.setData(this.list)
	},
	methods: {
		getList() {
			let data = this.$refs.editor.getData()
			console.log(JSON.stringify(data))
		},
		uploadImg: function(src, setSrc) {
			alert('确定更换图片么？')
			setSrc('http://img5.imgtn.bdimg.com/it/u=2230167403,4188800858&fm=26&gp=0.jpg')
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
/* .home-page {
	height: 80vh;
	width: 400px;
	border: 1px solid #ccc;
} */
.home-page {
	height: 100vh;
}
</style>

