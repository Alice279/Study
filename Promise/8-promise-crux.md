## promise 的几个关键问题


## 改变 promise 状态的方式

* 调用 resolve 函数，pending 变 resolved

* 调用 reject 函数，pending 变 rejected

* 抛出错误，pending 变 rejected


## 一个 promise 指定多个回调都会执行吗？

* promise 改变为对应状态时所有该状态的回调都会执行

* 即可以写若干个 then


## 改变 promise 状态 和 指定回调函数 谁先谁后？

* promise 的执行函数里可以放 同步任务 或者 异步任务

* 当执行函数里是同步任务就先改变 promise 状态

* 当执行函数里是异步任务则先 指定 回调函数

* 以上讨论的只是指定回调函数

* 只有当执行函数里的任务完成，才会调用回调函数，得到数据


## promise.then() 返回的新 promise 的结果状态由什么决定？

* 由 then() 指定的回调函数执行的结果决定

* 如果抛出异常，新 promise 变为 rejected，reason 是抛出的异常

* 如果返回的是非 promise 的任意值，变为 resolved，value 是返回的值

* 如果返回的是另一个新的 promise，此 promise 结果是新 promise 的结果


## promise 如何串联多个操作任务？

* promise 的 then 返回一个新的 promise 可以 then() 链式调用

* 通过 then() 的链式调用串连多个同步/异步任务


## promise 异常值穿透

* 当使用 promise 的 then() 链式调用，可以在最后指定失败的回调

* 前面任何操作出现了异常，都会传到最后失败的回调中处理


## 中断 promise 链

* 当使用 promise 的 then() 链式调用时，在中间中断，不调用后面的回调

* 在回调函数中返回一个 pending 状态的 promise 对象
