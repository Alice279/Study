//实现一个new

function _new(fnc, ...args) {
    const obj = Object.create(fnc.prototype)
    const ret = fnc.apply(obj, args)
    return ret instanceof Object ? ret : obj
}

//new 的过程
//先创建一个空对象
//将构造函数的原型方法传递给这个空对象
//将构造函数的this指针指向此对象把方法都传递给它
//返回这个对象

function mynew(fnc, ...args){
    const obj = {}
    Object.setPrototypeOf(obj, fnc.prototype)
    const result = fnc.apply(obj, args)
    return result instanceof Object ? result : obj
}

function my_new () {
    var obj = new Object()
    tor = [].shift.call(arguments)   
    //取出第一个参数，就是我们要传入的构造函数
    obj.__propto__ = Constructor.prototype
    //将obj的原型指向构造函数，这样实例就可以访问到构造函数原型中的属性
    var ret = Constructor.apply(obj, arguments)
    //使用apply改变构造函数的this指向到新生成的实例，这样实例就可以访问到构造函数中的属性
    return typeof ret === 'object' ? ret : obj
    //判断返回值是不是一个对象，是则返回对象，不是则该返回啥返回啥
    //有点构造函数返回对象，有的就不是
}