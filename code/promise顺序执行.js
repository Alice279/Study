// promise 实例：顺序执行一组异步操作
// 先准备出来那一组异步操作，存放在 list 内
function generatePromiseFunc(index) {
    return function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(index)
                resolve(index)
            }, 1000)
        })
    }
}
const list = []
for(let i = 0; i < 10; i++) {
  list.push(generatePromiseFunc(i))
}
  
// 解法1：递归调用
function promise_queue(list, index) {
    if (index >= 0 && index < list.length) {
        list[index]().then(() => {
            promise_queue(list, index + 1)
        })
    }
}
promise_queue(list, 0)

function promise_que(list, index) {
    if (index >= 0 && index < list.length) {
        list[index]().then(() => {
            promise_que(list, index + 1);
        })
    }
}

// 解法2：使用 await & async
async function promise_queue(list) {
    let index = 0
    while (index >= 0 && index < list.length) {
        await list[index]()
        index++
    }
}
promise_queue(list)

async function promise_que(list) {
    let index = 0;
    while(index >= 0 && index <= list.length) {
        await list[index]();
        index++;
    }
}

// 解法2-1：还是使用 await 和 async
async function queue(arr) {
    let data = []
    for (let promise of arr) {
        let res = await promise()
        data.push(res)
    }
    return data
}
queue([a, b, c])
    .then(data => {
        console.log(data)
        console.log("done");
});
  
// 解法3：使用Promise.resolve()
function promise_queue(list) {
    var sequence = Promise.resolve()
    list.forEach((item) => {
        sequence = sequence.then(item)
    })
    return sequence
}

// 解法4：使用 arr.reduce 和多个数异步相加类似
function promise_queue(list) {
    return new Promise(resolve => {
        list.reduce((pre, cur) => {
            return pre.then(() => {
                cur();
                resolve();
            })
        }, Promise.resolve())
    })
}

// https://juejin.cn/post/6844903891239174152
