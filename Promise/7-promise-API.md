## promise API


## promise 构造函数： promise(excutor){}

* executor 函数：执行器 (resolve, reject) => {}

* resolve 函数：内部定义成功时我们调用的函数 value => {}

* reject 函数：内部定义失败时我们调用的函数 reason => {}

* 说明：executor 会在 promise 内部立即同步调用，异步操作在执行器中执行


## Promise.prototype.then 方法： (onResolved, onRejected) => {}

* onResolved 函数：成功回调函数 (value) => {}

* onRejected 函数：失败回调函数 (reason) => {}

* 说明：指定用于得到成功 value 的成功回调 和 用于得到失败 reason 的失败回调

* 说明：返回一个 promise 对象


## Promise.prototype.catch 方法： (onRejected) => {}

* onRejected 函数：失败回调函数 (reason) => {}



## promise 方法


## Promise.resolve 方法： (value) => {}

* value 的成功数据 或 promise 对象，

* 不是实例的方法，是 promise 函数对象的方法，可以将参数转化为一个 promise 对象

* 说明：返回一个成功 / 失败的 promise 对象

* 如果传入的参数为 非 promise 类型对象，则返回结果为成功 promise 对象

* 如果传入的参数为 promise 对象，则参数的结果决定了 resolve 的结果


## Promise.reject 方法： (reason) => {}

* 返回一个失败的 promise 对象

* 即使传入一个成功的 promise 也会返回一个失败的 promise


## Promise.all 方法： (promise) => {}

* 参数：一个包含 n 个 promise 的数组

* 返回一个 promise 对象，只有所有的 promise 都成功才成功，一个失败就失败

* 若成功则成功结果是每一个 promise 对象成功结果组成的数组


## Promise.race 方法： (promise) => {}

* 参数：一个包含 n 个 promise 的数组

* 返回一个新的 promise, 第一个完成的 promise 的结果状态就是最终的结果状态
