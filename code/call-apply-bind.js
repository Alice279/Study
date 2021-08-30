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

Function.prototype.myBind = function(context, ...args) {
    const _this = this
    return function Bind (...newArgs) {
        if (this instanceof Bind) {
            return _this.myApply(this, [...args, ...newArgs])
        }
        else {
            return _this.myApply(context, [...args, ...newArgs])
        }
    }
}

Function.prototype.myCall = function(context = window, ...args) {
    context = context || window
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function(context = window, args = []) {
    context = context || window
    ontext.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}