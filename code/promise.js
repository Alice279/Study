
const PENDING = 'PENDING'
const FULFILLED = 'FULFILLED'
const REJECTED = 'REJECTED'

const resolvePromise = (promise2, x, resolve, reject) => {
    if (promise2 === x) {
        return reject(new TypeError('chaining cycle delete'))
    }
    let called
    if ((typeof x === 'object' && x != null) || typeof x === 'function') {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    if (called) return
                    called = true
                    reject(r)
                })
            }
            else {
                resolve(x)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }
    }
    else {
        resolve(x)
    }
}

class Promise {
    constructor (executor) {
        this.status = PENDING
        this.vslue = undefined
        this.reason = undefined
        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        let resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then (onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
        onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}

        let promise2 = new Promise ((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === PENDING) {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })

        return promise2
    }

    static resolve (value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        return new Promise((resolve, reject) => {
            resolve(value)
        })
    }
    static reject (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }
}

Promise.prototype.catch = function(errCallback) {
    return this.then(null, errCallback)
}

Promise.prototype.finally = function(callback) {
    return this.then((value) => {
        return Promise.resolve(callback()).then(() => value)
    }, (reason) => {
        return Promise.resolve(callback()).then(() => {throw reason})
    })
}

Promise.all = function(values) {
    if (!Array.isArray(values)) {
        const type = typeof values
        return new TypeError(`TypeError: ${type} ${values} is not iterable`)
    }
    return new Promise((resolve, reject) => {
        let resultArr = []
        let orderIndex = 0
        const processResultByKey = (value, index) => {
            resultArr[index] = value
            if (++orderIndex == values.length) {
                resolve(resultArr)
            }
        }
        for (let i = 0; i < values.length; i++) {
            let value = values[i]
            if (value && typeof value.then === 'function') {
                value.then((value) => {
                    processResultByKey(value, i)
                }, reject)
            }
            else {
                processResultByKey(value, i)
            }
        }
    })
}

Promise.race = function(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            let val = promises[i]
            if (val && typeof val.then === 'function') {
                val.then(resolve, reject)
            }
            else {
                resolve(val)
            }
        }
    })
}

//Promise实例：沉睡1秒后执行
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

sleep(1000).then(() => {
    //任意代码
})

//Promise实例：读取文件
const p = new Promise(function(resolve, reject){
    fs.readFile("123.md", (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})

p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.log('读取失败')
})

//Promise实例：封装AJAX
const p = new Promise((resolve, reject) => {

//原生AJAX流程
//1.创建对象
const xhr = new XMLHttpRequest()
//2.初始化
xhr.open("GET", "https://api.apiopen.top/getJoke")
//3.发送
xhr.send()
//4.绑定事件，处理响应函数
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
        if(xhr.status >= 200 && xhr.status < 300) {
            //console.log(xhr.response)
            resolve(xhr.response)
        }
        else {
            //console.err(xhr.status)
            reject(xhr.status)
        }
    }  
}

})

p.then(function(value){
    console.log(value)
},function(reason){
    console.error(reason)
})

//Promise实例：链式调用 读取多个文件
const p = new Promise(function(resolve, reject){
    fs.readFile("123.md", (err, data) => {
        if (err) reject(err)
        resolve(data)
    })
})

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("456.md", (err, data) => {
            resolve([value, data])
        })
    })
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile("789.md", (err, data) => {
            value.push(data)
            resolve(value)
        })
    })
}).then(value => {
    console.log(value)
})