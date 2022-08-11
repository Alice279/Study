const arr = [1, [2, 3], 4];

//方法一：使用flat()
const res1 = arr.flat(Infinity);

//方法二：使用reduce()
const flatten2 = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten2(cur) : cur);
    }, []);
}

const res2 = flatten2(arr);

//方法三：函数递归
const res3 = [];

const flatten3 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatten3(arr[i]);
        } else {
            res3.push(arr[i]);
        }
    }
}

flatten3(arr);







