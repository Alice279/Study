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


//4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动');
})