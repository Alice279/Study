//一
function multiRequest(urls = [], maxNum) {
    // 请求总数量
    const len = urls.length;
    // 根据请求数量创建一个数组来保存请求的结果
    const result = newArray(len).fill(false);
    // 当前完成的数量
    let count = 0;
    return new Promise((resolve, reject) => {
        // 请求maxNum个
        while (count < maxNum) {
            next();
            // next 里面是异步代码，所以第一轮事件循环里会连续发出 maxNum 个请求 
        }
        function next() {
            let current = count++;
            // 处理边界条件
            if (current >= len) {
                // 请求全部完成就将promise置为成功状态, 
                //然后将result作为promise值返回 
                !result.includes(false) && resolve(result);
                return;
            }
            const url = urls[current];
            console.log(`开始 ${current}`, newDate().toLocaleString());
            fetch(url).then((res) => {
                // 保存请求结果 
                result[current] = res;
                console.log(`完成 ${current}`, newDate().toLocaleString());
                // 请求没有全部完成, 就递归
                if (current < len) { next(); }
            }).catch((err) => {
                console.log(`结束 ${current}`, newDate().toLocaleString());
                result[current] = err;
                // 请求没有全部完成, 就递归
                if (current < len) { next(); }
            });
        }
    });
}

//二
class RequestLimit {
    constructor(options) {
        this.unRequsetFn = [];
        this.limit = options.limit || 2;
        this.requestCount = 0;
    }

    async request(fn) {
        if (this.requestCount >= this.limit) {
            await new Promise((resolve) => this.unRequsetFn.push(resolve));
        }
        return this._handlerReq(fn);
    }

    async _handlerReq(fn) {
        this.requestCount++;
        try {
            return await fn();
        } catch (err) {
            return Promise.reject(err);
        } finally {
            this.requestCount--;
            if (this.unRequsetFn.length) {
                this.unRequsetFn[0]();
                this.unRequsetFn.shift();
            }
        }
    }
}

//三
var urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const limit1 = 5;

// 主函数
function sendRequest(urls, limit, callback) {
    function _send(urls) {
        return fetch(urls.shift())
            .finally(() => {
                if (urls.length) {
                    return _send(urls)
                }
            })
    }
    let asyncList = [];
    while (limit--) {
        asyncList.push(_send(urls));
    }
    return Promise.all(asyncList).then(callback);
}

sendRequest(urls, limit1, function () {
    console.log('finish')
});

//三
var urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const limit = 5;

function sendRequest(urls, limit, callback) {
    function _send(urls) {
        const url = urls.shift();
        if (url) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(`当前发送：${url}`);
                    resolve(url);
                }, 10)
            })
                .finally(() => {
                    if (urls.length > 0) {
                        console.log('456')
                        console.log(asyncList)
                        return _send(urls)
                    }
                })
        }

    }
    let asyncList = [];
    while (limit--) {
        asyncList.push(_send(urls));
        console.log('123')
    }
    return Promise.all(asyncList).then(callback);
}

sendRequest(urls, limit, function () {
    console.log('all urls sended!')
});

//这个方案里还学到了一点：
//你想遍历数组里的元素，又不用保持数组的完整性时
//不一定要通过下标取元素
//还可以灵活使用数组的方法 nums.shift()  nums.pop()


// 众所周知，JS 是单线程的，所以本质上没有什么并发，即使是 Promise 也是异步
// 这里所说的 请求之间的并发，其实是它们是在同一个事件循环里发起的
// 思路：
// 每个事件循环里，我们发送有限个 limit 个请求
// Promise 请求的结果是微任务，同步代码执行完之后才执行
// 所以我们可以在第一轮循环同步代码里发送完 limit 个请求
// 第一轮发出的请求有结果之后，在处理结果时，发送剩余的请求
// 即 空出来一位，就发一位
// 在 Promise.all 的数组里。就只有那 5 个
// 问题： 那如果中间某次请求有错误怎么办？    .finally

