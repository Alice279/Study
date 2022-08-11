//context是上下文this对象
//args是动态参数
Function.prototype.myCall = function(context = window, ...args) {
    context = context || window
    context.fn = this  //给context添加一个属性指向this
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function(context = window, args = []) {
    context = context || window
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myBind = function(context, ...args) {
    const _this = this
    return function Bind(...newArgs) {
        if (this instanceof Bind) {
            return _this.myApply(this, [...args, ...newArgs])
        }
        return _this.myApply(context, [...args, ...newArgs])
    }
}
// bind 返回的函数可以作为构造函数使用，当 bind 函数生成实例时，this 应该指向生成的实例
//嘤嘤嘤，这句话超级重要！！！

//===================================================================

Function.prototype.call2 = function (context) {
    context = context || window
    context.fn = this

    var args = []
    for (var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments['+ i +']')
    }

    var result = eval('context.fn('+ args +')')

    delete context.fn
    return result
}

Function.prototype.apply2 = function (context, arr) {
    context = context || window
    context.fn = this

    var result 
    if (!arr) {
        result = context.fn()
    }
    else {
        var args = []
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr['+ i +']')
        }
        result = eval('context.fn('+ args +')')
    }

    delete context.fn
    return result
}

//call的实现中，参数通过arguments传递，省略掉位置是0的context
//apply中，arr是参数，直接从0开始

//当传入的参数是null或者undefined时会自动指向全局对象
//当传入的参数是原始值(数字，字符串，布尔值)时this指向该原始值的自动包装对象

Function.prototype.bind2 = function (context) {
    if (typeof this !== 'function') {
        throw new Error('调用bind的不是函数！')
    }

    var self = this
    var args = Array.prototype.slice.call(arguments,1)

    var fNOP = function () {}

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs))
        //当bind返回的函数作为构造函数时，bind时指定的this失效，但是传入的参数依然有效
        //这时this 指向构造函数生成的实例呀
    }

    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
}

obj1 = {
    name: 'obj1'
}

obj2 = {
    name: 'obj2'
}

function print() {
    console.log(this.name);
}

print.bind(obj2).call(obj1);