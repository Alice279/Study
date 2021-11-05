/**
 * util.promisify 方法
 * util 是 nodejs 里的一个模块
 * util.promisify 用于将 回调函数风格的方法 转换为 promise风格的函数
 */

//引入 util 模块
const util = require('util')

//引入 fs 模块
const fs = require('fs')

//返回一个新的函数
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./0-first.html').then(value => {
    console.log(value.toString())
})