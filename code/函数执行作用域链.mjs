//
var x = 10
function fn(){
    console.log(x)
}
function show(f){
    var x = 20
    f()
}
show(fn)
//输出：10
//全局作用域，函数作用域，作用域在定义的时候就决定好了
//寻找变量的时候，当前作用域找不到的变量就去上一级作用域寻找
//fn的上级作用域是全局作用域

//
var fn = function () {
    console.log(fn)
}
fn()
var obj = {
    fn2: function () {
        console.log(fn2)
    }
}
obj.fn2()
//第一个输出整个函数
//第二个报错，因为找不到fn2变量
//如果想第二个正常输出，可以改为 consolg.log(this.fn2)






//常见闭包：函数作为另一个函数的返回值
function fn1 (){
    //此时闭包已经产生，因为函数提升所以内部函数对象已经创建
    var a = 2
    function fn2 (){
        a++
        console.log(a)
    }
    return fn2
}
var f = fn1()
f()   //3
f()   //4
f = null   //这是闭包死亡，包含闭包的函数对象成了垃圾对象
var ff = fn1()
ff()  //3
ff()  //4

//常见闭包：将函数作为实参传递给另一个函数调用
function showDelay(msg, time) {
    setTimeout(function(){
        alert(msg)
    }, time)
}
showDelay('xxxx', 2000)