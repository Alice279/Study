const fs = require('fs')

// 回调函数形式
// fs.readFile('./0-.md', (err, data) => {
//     if (err) throw err
//     console.log(data.toString())
// })

// promise 形式
let p = new Promise((resolve, reject) => {
    fs.readFile('./0-.md', (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})

// 调用 then
p.then(value => {
    console.log(value.toString())
}, reason => {
    console.log(reason)
})