
class Promise{

    constructor(executor){
    //添加属性
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    this.callbacks = [];
    //保存实例对象的 this 的值
    const self = this
    //resolve函数
    function resolve(data) {
        //判断状态是否已经更改过，保证状态只能修改一次
        if (self.PromiseState !== 'pending') return
        //1.修改promise对象的状态 promiseState
        self.PromiseState = 'resolved'
        //2.设置promise对象结果值 promiseResult
        self.PromiseResult = data
        //调用成功的回调函数
        setTimeout(() => {
            self.callbacks.forEach(item => {
                item.onResolved(data)
            })
        })

    }
    //reject函数
    function reject(data) {
        //判断状态是否已经更改过
        if (self.PromiseState !== 'pending') return
        //1.修改promise对象的状态 promiseState
        self.PromiseState = 'rejected'
        //2.设置promise对象结果值 promiseResult
        self.PromiseResult = data
        //调用失败的回调函数
        setTimeout(() => {
            self.callbacks.forEach(item => {
                item.onRejected(data)
            })
        })
    }
    //将 同步调用执行器函数 放在 try catch 里
    //就可以实现 throw error 时变为 rejected 状态
    try {
        //同步调用执行器函数
        executor(resolve, reject);
    } catch (e) {
        //修改 promise 对象状态为失败
        reject(e)
    }

    }

    then(onResolved, onRejected){
        const self = this;
        //这里是为了 catch 调用 then 方法时的值穿透
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason
            }
        }
        if (typeof onResolved !== 'function') {
            onResolved = value => value
        }
        //判断回调函数参数
        return new Promise((resolve, reject) => {
            //封装函数
            function callback(type) {
                try {
                    let result = type(self.PromiseResult)
                    //判断
                    if (result instanceof Promise) {
                        //如果是 Promise 类型的对象
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r);
                        })
                    }
                    else {
                        resolve(result);
                    }
                } catch (e) {
                    reject(e)
                }
            }
            //调用回调函数 PromiseState
            if (this.PromiseState === 'resolved') {
                setTimeout(() => {
                    callback(onResolved)
                })
            }
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected)
                })
            }
            //判断 pending 状态
            if (this.PromiseState === 'pending') {
                //保存回调函数，保存在一个属性里面，这样在其它函数里也可以调用它
                //因为可能不止有一个 then 所以用数组储存，每一个都放进数组里
                this.callbacks.push(
                    {
                        onResolved: function () {
                            callback(onResolved)
                        },
                        onRejected: function () {
                            callback(onRejected)
                        }
                    }
                )
            }
        })
    }

    catch(onRejected){
        return this.then(undefined, onRejected)
    }

    static resolve (value) {
        //返回promise对象
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            }
            else {
                resolve(value)
            }
        })
    }

    static reject (reason) {
        return new Promise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(promises) {
        return new Promise((resolve, reject) => {
            let count = 0;
            let arr = []
            //遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    count++
                    arr[i] = v
                    if (count === promises.length) {
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                })
            }
        })
    }
    
    static race (promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            }
        })
    }
}