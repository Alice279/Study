const arr = [];

// 1. 改变原数组
arr.push();
arr.pop();
arr.unshift();
arr.shift();
arr.reverse();
arr.sort();
arr.splice();
arr.copyWithiin();

// 2. 不改变原数组
arr.concat();
arr.slice();
arr.join();
arr.forEach();
arr.map();
arr.filter();
arr.every();
arr.some();
arr.toString();
arr.reduce();

// 1. forEach()  就是遍历一次数组，对数组里每个元素都执行fn函数
Function.prototype.myForEach = function(fn, tthis) {
    if (typeof fn === 'function') {
        const len = this.length;
        for (let i = 0; i < len; i++) {
            fn.call(tthis, this[i], i, this);
        }
    }
}

// 2. map()  遍历数组，每个元素执行fn函数，返回新数组
Function.prototype.myMap = function(fn, tthis) {
    if (typeof fn === 'function') {
        const len = this.length;
        const res = [];
        for (let i = 0; i < len; i++) {
            const res0 = fn.call(tthis, this[i], i, this);
            res.push(res0);
        }
    }
    return res;
}

// 3. filter()  遍历数组，每个元素执行fn函数，返回结果为true的
Function.prototype.myFilter = function(fn, tthis) {
    if (typeof fn === 'function') {
        const len  = this.length;
        const res = [];
        for (let i = 0; i < len; i++) {
            const res0 = fn.call(tthis, this[i], i, this);
            if (res0) res.push(res0);
        }
    }
    return res;
}

// 4. some()  只要数组里有一个符合的元素就返回 true
Function.prototype.mySome = function(fn, tthis) {
    if (typeof fn === 'function') {
        for (let i = 0; i < this.length; i++) {
            const res = fn.call(tthis, this[i], i, this);
            if (res) return true;
        }
        return false;
    }
}

// 5. concat()  将参数合并到一个数组里，判断参数是否是数组，如果是数组要展开


// 数组方法中的迭代方法有：forEach(), map(), filter(), every(), some()
// 就是自己引用了自己啦