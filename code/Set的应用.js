let arr = [1,2,3,4,5,6,8,9,0,4,5,6]
let arr2 = [1,2,4,7,9,56]
//数组去重
let result = [...new Set(arr)]
//交集
let result = [...new Set(arr)].filter(item => {
    let s2 = new Set(arr2)
    if (s2.has(item)) {
        return true
    }
    else {
        return false
    }
})
//并集
let union = [...new Set([...arr, ...arr2])]
//差集
let result = [...new Set(arr)].filter(item => !(new Set(arr2).has(item)))