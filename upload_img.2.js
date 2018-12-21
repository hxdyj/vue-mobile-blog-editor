/*
需要 npm>=6.0 node>=v10.10.0
*/
const fs = require('fs')
const path = require('path')
const qiniu = require('qiniu')
const _ = require('lodash')

//上传的路径
// * 只会上传此文件夹的文件，文件夹会被忽略掉
const upload_folder = 'src/assets/images'

//七牛上传后基础目录
const qnBaseUrl = 'https://scdn.yourbay.net'
//七牛 key
const qnKey = 'qXlFLvDYgAQQh9lTmXJyO9FmzYLwhguuroCO2Z9O'
//七牛 pwd
const qnPwd = 'E5ZEQ4KKZa38egUUKk6AmXaM5wZvNB2xywM47-xs'
//要上传的bucket
const qnBucket = 'yourbay'
//七牛上传凭证
let qnUploadToken
//上载资源路径
let afterPath = 'webActivity/img/'

//初始化七牛
let initQn = function() {
	//构建七牛上传凭证
	let mac = new qiniu.auth.digest.Mac(qnKey, qnPwd)
	let options = {
		scope: qnBucket
	}
	let putPolicy = new qiniu.rs.PutPolicy(options)
	qnUploadToken = putPolicy.uploadToken(mac)
}

//上传文件到七牛
let uploadToQn = function(filePath) {
	var config = new qiniu.conf.Config()
	var formUploader = new qiniu.form_up.FormUploader(config)
	var putExtra = new qiniu.form_up.PutExtra()
	var key
	key = afterPath + path.basename(filePath)
	// console.log('upload name: ' + key)
	// 文件上传
	formUploader.putFile(qnUploadToken, key, filePath, putExtra, function(
		respErr,
		respBody,
		respInfo
	) {
		if (respErr) {
			throw respErr
		}
		if (respInfo.statusCode == 200) {
			// console.log(respInfo)
		} else {
			console.log(respInfo.statusCode)
			console.log(respBody)
			console.log('!!!!!!!!!!!!!!!!七牛资源上传失败!!!!!!!!!!!!!!!!!!!!')
		}
	})
}

function fileDisplay(filePath) {
	//根据文件路径读取文件，返回文件列表
	let arr = fs.readdirSync(filePath, { withFileTypes: true })
	arr = _.filter(
		arr,
		item =>
			item.isFile() && item.name != '.DS_Store' && item.name != '.gitkeep'
	)
	arr = _.map(arr, item => filePath + '/' + item.name)
	return arr
}

//获取上传的文件列表
let imgArr = fileDisplay(path.resolve(upload_folder))
//初始化七牛配置
initQn()
//遍历文件上传文件
console.log('start upload...')
_.forEach(imgArr, item => {
	uploadToQn(item)
})
