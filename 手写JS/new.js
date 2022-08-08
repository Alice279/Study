
function myNew(fun, ...args) {
    // 1.在内存中创建一个新对象
    let obj = {};
    // 2.把新对象的原型指针指向构造函数的原型属性
    obj.__proto__ = fun.prototype;
    // 3.改变 this 指向，并且执行构造函数
    let res = fun.apply(obj, args);
    // 4.判断函数执行结果的类型
    return res instanceof Object ? res : obj;
}

// 第 4 步的解释：
// new 运算符的第4步分为以下3种情况
// 1.构造函数没有显式 return 则实例就是新创建的对象 obj
// 2.构造函数返回的不是一个对象，则实例还是 obj
// 3.构造函数显式返回一个对象，则实例是返回的对象