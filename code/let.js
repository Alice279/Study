//遍历并绑定事件
for(var i = 0; i < items.length; i++) {
    items[i].onclick = function(){
        this.style.background = 'pink'
        //items[i].style.background = 'pink'
        //这句会报错，i是一个全局变量，onclick的函数是回调函数，
        //先执行for循环，点击时才执行回调函数，那时候i已经是items.length了
    }
}
//一个其他方法，就是把声明i的var换成let

var funcs = [];
for (let i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 0

//let声明在循环内部的行为是标准中专门定义的
//在圆括号内建立一个隐藏的作用域
// 伪代码
/*
(let i = 0) {
    funcs[0] = function() {
        console.log(i)
    };
}

(let i = 1) {
    funcs[1] = function() {
        console.log(i)
    };
}

(let i = 2) {
    funcs[2] = function() {
        console.log(i)
    };
};
*/

//如果把let改成const，就会报错
//因为虽然循环的圆括号中每次都创建一个新的变量，
//但是for循环迭代中使用的是一个变量
//在迭代中尝试修改const的值，就会报错

var funcs = [], object = {a: 1, b: 1, c: 1};
for (var key in object) {
    funcs.push(function(){
        console.log(key)
    });
}

funcs[0]()
//这段代码输出是 'c'
//如果改为 let ，结果是a
//如果改为 const ，结果也是正确的a
//因为在 for...in 循环和 for...of 循环中，
//每次迭代不会修改已有的绑定，而是会创建一个新的绑定



//////////////////////////////////
//关于暂时性死区的例子
//下面这两个代码块都不会输出global.value，而都会报错

var value = "global";

// 例子1
(function() {
    console.log(value);

    let value = 'local';
}());

// 例子2
{
    console.log(value);

    const value = 'local';
};