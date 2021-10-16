//对象是不可以执行的，调用对象里函数才能执行
var b1 = {
    b2: [1, 'abc', console.log],
    b3: function(){
        console.log('b3')
        return function(){
            return 'xfzhang'
        }
    }
}
console.log(typeof b1.b2[2] === 'function') //true
b1.b2[2](4) //4
console.log(b1.b3()()) //b3 xfzhang


//2个引用变量指向同一个对象
//通过一个变量修改对象内部数据
//其他所有变量看到的是修改之后的数据
var obj1 = {name: 'Tom'}
var obj2 = obj1
obj1.age = 12
console.log(obj1.age)   //12
function fn (obj){
    obj.name = 'bob'
}
fn(obj1)
console.log(obj2.name)   //bob
//此时这段代码里有三个对象的引用，函数的形参被传入实参后也成里一个引用



//2个引用变量指向同一个对象
//其中一个引用变量指向另一个对象，对象字面量创建的对象也是新的对象
//另一引用变量依然指向前一个对象
var a = {age: 12}
var b = a
a = {name: 'alice', age: 13}
console.log(b.age, a.name, a.age)   //12, alice  13
function fn2 (obj) {
    obj = {age: 15}
}
fn2(a)
console.log(a.age)   //13
//不要把形参和实参看作一个东西，执行fn2(a)时把形参obj指向了和a相同的对象
//但是 obj = {age: 15}时就把obj又指向了新对象，而a没有改变
//其实是创建了一个垃圾对象

// = 赋值的时候是把存储在栈里的内容传递给对方，引用变量时传递的是地址



//问题：在js调用函数时传递变量参数时，是值传递还是引用传递

//值传递
var a = 3
function fn (a) {
    a = a + 1
    document.write(a)           // 4
    document.write(window.a)    // 3
}
fn(a)
document.write(a)               // 3
//调用fn函数的时候，a作为参数，但是传进去的不是a，而是a的值，即 3
//执行a = a + 1时在函数体内部创建了一个新的a




//即使是原型链，也遵循相同的规则
function A (){}
A.prototype.n = 1
var b = new A()
A.prototype = {
    n: 2,
    m: 3
}
var c = new A()
console.log(b.n, b.m, c.n, c.m) // 1 undefined 2 3


//关于原型链里的Object 和Function
function F (){}
Object.prototype.a = function(){
    console.log('a')
}
Function.prototype.b = function(){
    console.log('b')
}
var f = new F()
f.a()          // a
f.b()          // error
F.a()          // a
F.b()          // b



//////////////////////////////////
// 自执行函数

//方式一：

(function(){
    //函数体
})()

//方式二：

(function(){
    //函数体
}())

//方式三：箭头函数自执行

(() => {
    //函数体
})()

//箭头函数这样写却会报错
/*
(() => {
    //函数体
}())
*/
//因为箭头函数是赋值运算符，要求左边是表达式？