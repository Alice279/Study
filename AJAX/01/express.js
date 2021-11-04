//1.引入express
const express = require('express')

//2.创建应用对象
const app = express()

//3.创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.get('/server', (request, response) => {
    //里面的哪个路径，当发出的请求里设置的路径匹配时，做出函数里的响应
    //调用这个函数需要满足：1.路径满足 2.请求方法和函数名匹配
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('Hello Ajax');
})

app.post('/server', (request, response) => {
    //里面的哪个路径，当发出的请求里设置的路径匹配时，做出函数里的响应
    //调用这个函数需要满足：1.路径满足 2.请求方法和函数名匹配
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('Hello Ajax Post');
})

//可以接收任意类型的请求
app.all('/json-server', (requset, response) => {
    //设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //响应一个数据
    const data = {
        name: 'atguigu'
    }
    //对对象字符串转换
    let str = JSON.stringify(data)
    //设置响应体,send里只能存放字符串
    response.send(str);
})

//针对 IE 缓存
app.get('/ie', (requset, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello IE')
})

//延时响应
app.get('/delay', (requset, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(() => {
        response.send('延时响应')
    }, 3000)
})

//jquery服务
app.all('/jquery-server', (requset, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'shangguigu'}
    response.send(JSON.stringify(data))
})

//axios服务
app.all('/axios-server', (requset, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'shangguigu'}
    response.send(JSON.stringify(data))
})

//fetch服务
app.all('/fetch-server', (requset, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    const data = {name: 'shangguigu'}
    response.send(JSON.stringify(data))
})


//4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动');
})

//经常更新服务端文件，可以使用 nodemon 包，自动更新