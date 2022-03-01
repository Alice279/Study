arr = [1, 2, 3, 5, 2, 5];

//方法一：使用Set
var arr2 = [...new Set(arr)]
console.log(arr, arr2)

//方法二：使用indexOf(), includes()
const unique2 = (arr) => {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
    }
    return res
}

//方法三：使用filter()
const unique3 = (arr) => {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}





