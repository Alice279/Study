//变量提升和函数提升，先执行变量提升
function a(){
}
var a
console.log(typeof a) //'function'


//测试2
if (!(b in window)) {
    var b = 1
}
console.log(b)   //undefined
//if里的var也是全局中的呀，也要进行变量提升
//相当于
/*
var b = undefined
if (!(b in window)) {   //false 不执行
    var b = 1
}
console.log(b)   //undefined
*/


//测试3
var c = 1
function c(c) {
    console.log(c)
    var c = 3
}
c(2)
//应该报错
/**实际代码应该是
var c = undefined
function c(c) {
    console.log(c)
    var c = 3
}
c = 1
c(2)   
 */
//报错为c不是函数
//即使 var c = 1 写在里第一行，但是 =1 的赋值也是在函数声明之后