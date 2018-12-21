module.exports = {
	presets: ['@vue/app'],
	plugins: [
		[require('@babel/plugin-proposal-optional-chaining'), { loose: true }]
	]
}
