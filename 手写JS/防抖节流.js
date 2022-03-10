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

const debounce2 = (fn, time) => {
    let timeout = null
    return function() {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, time);
    }
}

function throttle2 (fn, time) {
    let flag = true;
    return function() {
        if (!flag) return;
        flag = true;
        setTimeout(() => {
            fn.apply(this, arguments);
            flag = true;
        }, time);
    }
}