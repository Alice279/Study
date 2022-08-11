function Foo() {
    Foo.a = function () {
        console.log(1)
    }
    this.a = function () {
        console.log(2)
    }
}
Foo.prototype.a = function () {
    console.log(3)
}
Foo.a = function () {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();

// Foo.prototype.a 是定义在类的原型链上的方法
// Foo.a 是定义在类本身上的直接方法，还定义在了实例的原型上
// 定义在构造函数里的 Foo.a 是定义在类本身上的直接方法，还定义在了实例本身上
// 定义在构造函数里的 this.a 是定义在实例上的方法

//第一个输出，本身有方法，不向上查找原型链，输出 4
//执行构造函数后，生成实例对象 obj ，类本身的 a 方法更新为输出 1 实例也有了 a 方法
//第二个输出，实例的方法，输出 2
//第三个输出，类本身的方法，已经更新了，输出 1

// 就是，实例找方法顺序：实例本身定义的方法；构造函数里 this 的方法；原型链上的方法
// 其实 构造函数里 this 的方法，也就在 new 出实例的时候加到实例本身上去了，是实例本身定义的方法