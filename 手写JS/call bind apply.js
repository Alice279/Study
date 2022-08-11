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


const obj1 = {
    name: 'alice'
}

const obj2 = {
    name: 'tom'
}

const obj3 = {
    name: 'lisa',
    say: function() {
        console.log(this.name);
    }
}

obj3.say();
obj3.say.call(obj2);

const fn = obj3.say.bind(obj2);
fn();                  // tom
fn.call(obj1);         // tom
// 先使用 bind 绑定this，调用时再用 call 更换 this，
// 还是会使用之前 bind 绑定的 this