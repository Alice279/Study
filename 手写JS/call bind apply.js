Function.prototype.call = function(context = window, ...args) {
    context = context || window;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

Function.prototype.apply = function(context = window, args = []) {
    context = context || window;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
}

//bind我不会呜呜呜


Function.prototype.myBind = function(thisArg, ...prefixArgs) {
    const fn = this;
    return function(...args) {
      return fn.call(thisArg, ...prefixArgs, ...args);
    }
}