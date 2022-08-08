
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
const p2 = new Promise((resolve, reject) => {

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
const p1 = new Promise(function(resolve, reject){
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



//
const promise = new Promise(function (resolve, reject) {
    resolve('ok');
    setTimeout(function () { throw new Error('test') }, 0)
});
promise.then(function (value) { console.log(value) });
// ok
// Uncaught Error: test

// promise 内部抛出的错误，不处理的话会被它自己消化掉，不会影响到外面的代码
// 上面的代码，因为将错误抛出放在了下一轮事件循环，是在 promise 外部抛出的，不会被消化
// 就是说，判断是在 promise 内 还是 外 的 不是看它代码的位置，而是看它啥时候执行捏


Promise.prototype.finally();
// finally 指定的回调函数不接受任何参数
// 没办法知道前面的是 resolved 还是 rejected ，反正不管是哪个它都会执行
// finally 里的回调 应该是和状态无关的

// resolve 的值是 undefined
Promise.resolve(2).then(() => {}, () => {})

// resolve 的值是 2
Promise.resolve(2).finally(() => {})

// finally 方法总是返回原来的值


// finally()方法不管Promise对象最后的状态如何都会执行
// finally()方法的回调函数不接受任何的参数，也就是说你在.finally()函数中是没法知道Promise最终的状态是resolved还是rejected的
// 它最终返回的默认会是一个上一次的Promise对象值，不过如果抛出的是一个异常则返回异常的Promise对象。

Promise.resolve('1')
  .then(res => {
    console.log(res)
  })
  .finally(() => {
    console.log('finally')
  })
Promise.resolve('2')
  .finally(() => {
    console.log('finally2')
  	return '我是finally2返回的值'
  })
  .then(res => {
    console.log('finally2后面的then函数', res)
})

// https://juejin.cn/post/6844904077537574919

// 使用 promise 实现 每间隔1秒输出 1 2 3
const arr = [1, 2, 3];
arr.reduce((p, x) => {
    return p.then(() => {
      return new Promise((resolve, reject) => {
          setTimeout(() => resolve(console.log(x)), 1000);
        })
    })
}, Promise.resolve())

// 红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；让三个灯不断交替重复亮灯

function red() {
  console.log("red");
}
function green() {
  console.log("green");
}
function yellow() {
  console.log("yellow");
}

const ligth = function(timer, cb) {
    return new Promise(resolve => {
        setTimeout(() => {
            cb();
            resolve();
        }, timer)
    })
}

const step = function() {
    Promise.resolve().then(() => {
        return light(3000, red);
    }).then(() => {
        return light(2000, yellow);
    }).then(() => {
        return ligth(1000, green);
    }).then(() => {
        return step();
    })
}

step();


// 实现 mergePromise 函数 
// 把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组data中。
// 
const time = (timer) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, timer)
  })
}
  const ajax1 = () => time(2000).then(() => {
    console.log(1);
    return 1
  })
  const ajax2 = () => time(1000).then(() => {
    console.log(2);
    return 2
  })
  const ajax3 = () => time(1000).then(() => {
    console.log(3);
    return 3
  })
  
  function mergePromise (ajaxArray) {
    // 存放每个ajax的结果
    const data = [];
    let promise = Promise.resolve();
    ajaxArray.forEach(ajax => {
        // 第一次的then为了用来调用ajax
        // 第二次的then是为了获取ajax的结果
      promise = promise.then(ajax).then(res => {
        data.push(res);
        return data; // 把每次的结果返回
      })
    })
    // 最后得到的promise它的值就是data
    return promise;
  }
  
  mergePromise([ajax1, ajax2, ajax3]).then(data => {
    console.log("done");
    console.log(data); // data 为 [1, 2, 3]
  });
  
  // 要求分别输出
  // 1
  // 2
  // 3
  // done
  // [1, 2, 3]




//  封装一个异步加载图片的方法
function loadImg(url) {
    return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
        console.log("一张图片加载完成");
        resolve(img);
    };
    img.onerror = function() {
        reject(new Error('Could not load image at' + url));
    };
    img.src = url;
});



// 限制异步操作的并发个数并尽可能快的完成全部

function limitLoad(urls, handler, limit) {
    let sequence = [].concat(urls); // 复制urls
    // 这一步是为了初始化 promises 这个"容器"
    let promises = sequence.splice(0, limit).map((url, index) => {
      return handler(url).then(() => {
        // 返回下标是为了知道数组中是哪一项最先完成
        return index;
      });
    });
    // 注意这里要将整个变量过程返回，这样得到的就是一个Promise，可以在外面链式调用
    return sequence
      .reduce((pCollect, url) => {
        return pCollect
          .then(() => {
            return Promise.race(promises); // 返回已经完成的下标
          })
          .then(fastestIndex => { // 获取到已经完成的下标
              // 将"容器"内已经完成的那一项替换
            promises[fastestIndex] = handler(url).then(
              () => {
                return fastestIndex; // 要继续将这个下标返回，以便下一次变量
              }
            );
          })
          .catch(err => {
            console.error(err);
          });
      }, Promise.resolve()) // 初始化传入
      .then(() => { // 最后三个用.all来调用
        return Promise.all(promises);
      });
  }
  limitLoad(urls, loadImg, 3)
    .then(res => {
      console.log("图片全部加载完毕");
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    });


}