//防抖
const debounce = (fn, time) => {
    let timeout = null
    return function() {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, time)
    }
}
//节流
const throttle = (fn, time) => {
    let flag = true;
    return function() {
        if(!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, time);
    }
}


//fangdou
const debounce = (fn, time) => {
    let timeout = null;
    return function() {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn.call(this, ...arguments)
        }, time)
    }
}

const throttle = (fn, time) => {
    let flag = true;
    return function() {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, time);
    }
}