//提供一个异步的add方法如下，需要实现一个 await sum(...args)函数
function asyncAdd(a, b, callback) {
    setTimeout(function() {
        callback(null, a + b)
    }, 1000)
}

//两数之和异步实现
async function sumAsync(a, b) {
    return await new Promise((resolve, reject) => {
        asyncAdd(a, b, (err, res) => {
            if(!err) {
                resolve(res)
            }
            reject(err)
        })
    })
}

// async function sumAsync(a, b) {
//     return await new Promise((resolve, reject) => {
//         asyncAdd(a, b, (err, res) => {
//             if (!err) {
//                 resolve(res);
//             }
//             reject(err)
//         })
//     }) 
// }

const arr0 = [1, 2, 3, 4]

async function sumAsync11(...args) {
    return await new Promise((resolve, reject) => {
        args.reduce((pre, cur) => {
            console.log(pre)
            pre.then(res => sumAsync(res, cur))
        }, Promise.resolve(0))
    }) 
}

// const res0 = sumAsync11(...arr0);
// console.log('alice', res0);

//考虑一下多数之和
//多数之和  Array 的 reduce 方法。不一定是求和才想到这个方法
//这个方法适用于对数组里每个元素执行同一个函数，结果汇总为一个返回值

//普通同步多数求和实现
const arr = [1, 2, 3, 4]
const reducer = (pre, cur) => {pre + cur}

let res = arr.reduce(reducer, 5) //res = 15

//普通的异步多数求和实现
function sum (...args) {
    return new Promise ((resolve, reject) => {
        args.reduce((pre, cur) => {})
    })
}

//离谱……没看懂
function sum(...args) {
    return new Promise(resolve => {
        args.reduce((acc, cur) => acc.then(total => sumAsync(total, cur)), Promise.resolve(0)).then(resolve)
    })
}

const res0 = sum(...arr0);
console.log('alice', res0);


//   https://cloud.tencent.com/developer/article/1842626