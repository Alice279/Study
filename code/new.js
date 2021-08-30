//实现一个new

function _new(fnc, ...args) {
    const obj = Object.create(fnc.prototype)
    const ret = fnc.apply(obj, arg)
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