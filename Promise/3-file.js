/**
 * 封装一个函数 minReadFile 读取文件内容
 * 参数：path 文件路径
 * 返回：promise 对象
 */

function minReadFile(path) {
    return new Promise((resolve, reject) => {
        //读取文件
        require('fs').readFile(path, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
minReadFile('./0-first.html')
.then(value => {
    console.log(value.toString());
}, reason => {
    console.log(reason)
})