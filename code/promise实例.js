//Promise实例：沉睡1秒后执行
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

sleep(1000).then(() => {
    //任意代码
})

//Promise实例：读取文件
const p = new Promise(function(resolve, reject){
    fs.readFile("123.md", (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})

p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.log('读取失败')
})

//Promise实例：封装AJAX
const p2 = new Promise((resolve, reject) => {
  //原生AJAX流程
  //1.创建对象
  const xhr = new XMLHttpRequest()
  //2.初始化
  xhr.open("GET", "https://api.apiopen.top/getJoke")
  //3.发送
  xhr.send()
  //4.绑定事件，处理响应函数
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300) {
            //console.log(xhr.response)
            resolve(xhr.response)
        }
        else {
            //console.err(xhr.status)
            reject(xhr.status)
        }
    }  
  }
})

p.then(function(value){
    console.log(value)
},function(reason){
    console.error(reason)
})

//Promise实例：链式调用 读取多个文件  引申到 promise 顺序调用
const p1 = new Promise(function(resolve, reject){
    fs.readFile("123.md", (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("456.md", (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("789.md", (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value)
})