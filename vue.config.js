const path = require('path')
const resolve = dir => {
	return path.join(__dirname, dir)
}
module.exports = {
	pages: {
		index: {
			// page 的入口
			entry: 'examples/main.js',
			// 模板来源
			template: 'public/index.html',
			// 输出文件名
			filename: 'index.html'
		}
	},
	chainWebpack: config => {
		config.resolve.alias.set('@', resolve('examples')) // key,value自行定义，比如.set('@@', resolve('src/components'))
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
