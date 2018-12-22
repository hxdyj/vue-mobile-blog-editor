const path = require('path')
const resolve = dir => {
	return path.join(__dirname, dir)
}
module.exports = {
	chainWebpack: config => {
		config.resolve.alias.set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
	},
	css: {
		loaderOptions: {
			sass: {},
			postcss: {
				plugins: [
					require('postcss-pxtorem')({
						rootValue: 28 // 换算的基数
						/*  selectorBlackList  : ['weui','mu'], // 忽略转换正则匹配项
                        propList   : ['*'], */
					})
				]
			}
		}
	}
}
